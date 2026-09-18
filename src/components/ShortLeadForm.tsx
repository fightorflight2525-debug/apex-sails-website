"use client";

// ============================================================================
// ShortLeadForm (SAUCE-312, CTA v3 S4): THE SHORT DOOR.
// One tap question + name + phone (+ optional email). Nothing else.
//
// RAIL CONTRACT (read before editing): it posts to the SAME Formspree form as
// /contact (mkopbjya -> contact@), so the S17 lead rail (apex_leads.py) cards
// it with ZERO rail change. Every label sent below is one the rail's FIELD_MAP
// already parses (Project type, Name, Phone, Email, Notes, SMS opt-in). Do not
// add a new label: the rail's parser would fold it into the previous field.
// The tap answer and the door ride in "Notes" (this form asks the buyer for no
// notes), with an explicit "Auto note" tag so nobody reads them as his words.
//
// TRACKING PARITY with /contact: Google Ads form conversion, Meta Lead (eventID
// shared with PostHog for CAPI dedup), PostHog form_submitted (the rail's
// PostHog join key). On success the buyer goes to /welcome.
// No PII is ever put in a URL: /welcome learns nothing about the buyer.
// ============================================================================

import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import posthog from "posthog-js";

const SPACES = ["Pool", "Patio", "Both", "Commercial"] as const;
type Space = (typeof SPACES)[number];

type Props = {
  /** Which door this is ("free-design", "residential"). Goes to PostHog, Meta and the lead's notes. */
  door: string;
  /** Keeps element ids unique if a page ever carries two forms. */
  idPrefix?: string;
  /** The "No extra fees" line under the button. Off where the hero already says it beside the form. */
  showSubLine?: boolean;
};

function readUtm(): Record<string, string> {
  const out: Record<string, string> = {};
  try {
    const p = new URLSearchParams(window.location.search);
    for (const k of ["utm_source", "utm_medium", "utm_campaign", "utm_content"]) {
      const v = p.get(k);
      if (v) out[k] = v.slice(0, 80);
    }
  } catch {
    /* no UTMs is fine */
  }
  return out;
}

export default function ShortLeadForm({ door, idPrefix = "slf", showSubLine = true }: Props) {
  const router = useRouter();
  const [space, setSpace] = useState<Space | "">("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const started = useRef(false);

  function onFocus(e: React.FocusEvent<HTMLFormElement>) {
    const field = (e.target as { name?: string })?.name || "";
    if (!field || field === "_gotcha" || started.current) return;
    started.current = true;
    posthog.capture("form_started", { form: door, first_field: field });
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setError(null);
    posthog.capture("form_submit_attempted", { form: door, project_type: space || "unspecified" });

    const em = email.trim();
    const missing: string[] = [];
    if (!space) missing.push("what we're shading");
    if (!name.trim()) missing.push("name");
    if (phone.replace(/\D/g, "").length < 10) missing.push("valid phone number");
    if (em && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) missing.push("valid email (or leave it blank)");
    if (missing.length > 0) {
      posthog.capture("form_submit_failed", { form: door, stage: "client_validation", missing: missing.join(", ") });
      setError(`Please fill in: ${missing.join(", ")}.`);
      return;
    }

    setSubmitting(true);
    const honeypot =
      (e.currentTarget.elements.namedItem("_gotcha") as HTMLInputElement | null)?.value || "";
    const utm = readUtm();
    const from = [utm.utm_source, utm.utm_medium].filter(Boolean).join(" / ");
    const projectType = space === "Commercial" ? "Commercial" : "Residential";
    const note =
      `Auto note: shading ${space}. Quick form on /${door}` +
      (from ? `, from ${from}` : "") +
      ". The quick form asks no notes.";

    try {
      const payload = new FormData();
      payload.append("Project type", projectType);
      payload.append("Name", name.trim());
      payload.append("Phone", phone.trim());
      if (em) payload.append("Email", em);
      payload.append("Notes", note);
      payload.append("SMS opt-in", "No");
      payload.append("_subject", `New Apex lead: ${projectType} from ${name.trim()}`);
      if (em) payload.append("_replyto", em);
      payload.append("_gotcha", honeypot);

      const res = await fetch("https://formspree.io/f/mkopbjya", {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) {
        posthog.capture("form_submit_failed", { form: door, stage: "formspree_response", status: res.status });
        setError("Something went wrong. Please try again or call (602) 837-0370 directly.");
        setSubmitting(false);
        return;
      }

      window.gtag?.("event", "conversion", {
        send_to: "AW-18055743018/6TUsCPKSoZ0cEKqM06FD",
        value: 500,
        currency: "USD",
      });
      const metaEventId =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `lead-${Date.now()}-${Math.floor(Math.random() * 1e6)}`;
      window.fbq?.("track", "Lead", { content_name: `short_form_${door}` }, { eventID: metaEventId });
      posthog.capture("form_submitted", {
        form: door,
        project_type: projectType,
        space,
        meta_event_id: metaEventId,
        ...utm,
      });
      try {
        sessionStorage.setItem("apex_door", door);
      } catch {
        /* storage blocked: /welcome still renders */
      }
      router.push("/welcome");
    } catch {
      posthog.capture("form_submit_failed", { form: door, stage: "network" });
      setError("Something went wrong. Please try again or call (602) 837-0370 directly.");
      setSubmitting(false);
    }
  }

  const input =
    "w-full rounded-lg border border-sand bg-white px-4 py-3 text-base text-charcoal placeholder:text-charcoal-light/60 transition-colors focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/20";
  const label = "block text-sm font-medium text-charcoal mb-1.5";

  return (
    <form
      onSubmit={onSubmit}
      onFocusCapture={onFocus}
      noValidate
      className="relative rounded-2xl bg-white p-6 text-left shadow-2xl shadow-black/30 sm:p-8"
    >
      {/* Honeypot (invisible to humans, filled by bots; Formspree convention) */}
      <div className="absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
        <label htmlFor={`${idPrefix}-gotcha`}>Leave this field blank</label>
        <input type="text" id={`${idPrefix}-gotcha`} name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>

      {/* THE ONE TAP QUESTION (same four answers as the Instant Form) */}
      <fieldset>
        <legend className={label}>What are we shading?</legend>
        <div className="mt-1 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {SPACES.map((s) => (
            <label
              key={s}
              className={`flex cursor-pointer items-center justify-center rounded-lg border-2 px-3 py-3 text-sm font-semibold text-charcoal transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-copper/40 ${
                space === s ? "border-copper bg-copper/10" : "border-sand hover:border-copper/50"
              }`}
            >
              <input
                type="radio"
                name="space"
                value={s}
                checked={space === s}
                onChange={() => setSpace(s)}
                className="sr-only"
              />
              {s}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${idPrefix}-name`} className={label}>
            Your name
          </label>
          <input
            id={`${idPrefix}-name`}
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First name is fine"
            className={input}
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-phone`} className={label}>
            Best phone number
          </label>
          <input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(602) 555-1234"
            className={input}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor={`${idPrefix}-email`} className={label}>
          Email <span className="font-normal text-charcoal-light">(optional)</span>
        </label>
        <input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={input}
        />
      </div>

      {error && (
        <div role="alert" className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-900">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="cta-glow-loop mt-6 w-full rounded-lg bg-copper px-6 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-copper-dark hover:shadow-md focus:outline-none focus:ring-2 focus:ring-copper/40 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:text-lg"
      >
        {submitting ? "Sending..." : "Get my free 3D design + FINAL price"}
      </button>

      {showSubLine && (
        <p className="mt-3 text-center text-sm font-medium text-charcoal">
          No extra fees. The price we quote is the price you pay.
        </p>
      )}

      <p className="mt-3 text-center text-[11px] leading-relaxed text-charcoal-light/80">
        By submitting this form, you agree that Apex Sail Shades may contact you by phone call or email about your project and quote. See our{" "}
        <a href="/privacy" className="underline hover:text-copper">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
