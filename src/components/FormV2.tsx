"use client";

// ============================================================================
// FormV2 (SAUCE-313, CTA v3.1 S3.A): the lead block on /free-design and the
// /residential hero. Replaces ShortLeadForm there.
// Looks like part of the page, not a form: "What needs shade?" with two big
// CTA-style choices; the fields drop down under the choice; dark glass inputs
// (never a white card), 17 px text, 56 px targets; the glowing offer button.
//
// RAIL CONTRACT (unchanged from ShortLeadForm; read before editing): posts to
// the SAME Formspree form (mkopbjya -> contact@) with EXACTLY the labels the
// S17 rail already parses: Project type, Name, Phone, Email (only if given),
// Notes, SMS opt-in, _subject, _replyto (only if email), _gotcha. Do not add a
// label: the rail's parser would fold it into the previous field.
// My home -> Project type "Residential"; My business -> "Commercial" (S2.10).
// The choice and the door ride in Notes as an explicit auto note, exactly as
// ShortLeadForm did. TRACKING PARITY: Google Ads form conversion, Meta Lead
// (eventID shared with PostHog for CAPI dedup), PostHog form_started /
// form_submit_attempted / form_submit_failed / form_submitted (form = door),
// sessionStorage apex_door, then router.push("/welcome") (the welcome sheet).
// No PII is ever put in a URL.
// SAUCE-314 (contract B1, D2): the form root carries data-lead-form and opens
// on the "apex:open-form" event (LeadFormBridge: every CTA on the page opens
// the TOP form, dropdown already open), and on arrival at "/#get-started".
// New door "home" (the homepage hero): its auto note reads "Quick form on /".
// ============================================================================

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import posthog from "posthog-js";
import TextDoor from "@/components/TextDoor";
import { HomeIcon, BusinessIcon, CheckIcon } from "@/components/icons";
import { NO_EXTRA_FEES } from "@/lib/cta";
import CtaText from "@/components/CtaText";
import {
  LEAD_FORM_HASH,
  LEAD_FORM_SELECTOR,
  OPEN_FORM_EVENT,
  OPEN_FORM_FLAG,
  scrollToLeadForm,
} from "@/components/LeadFormBridge";

const CHOICES = [
  { value: "My home", projectType: "Residential", Icon: HomeIcon },
  { value: "My business", projectType: "Commercial", Icon: BusinessIcon },
] as const;
type Choice = (typeof CHOICES)[number]["value"];

type Props = {
  /** Which door this is ("free-design", "residential", "home" = the homepage). Goes to PostHog, Meta and the lead's notes. */
  door: string;
  /** Keeps element ids unique if a page ever carries two forms. */
  idPrefix?: string;
  /**
   * SAUCE-314 (his 09-18 ruling): "choice" = What needs shade? My home / My
   * business, the fields drop down under the choice (/free-design). "cta" = no
   * question: just the offer button; the first tap drops the fields down the
   * same way and the button slides down under them; the next tap sends
   * (/residential, where the answer is already known).
   */
  variant?: "choice" | "cta";
  /** The "cta" variant's fixed answer (a residential page = "Residential"). */
  projectType?: "Residential" | "Commercial";
};

// The Lead event id Meta (eventID) and PostHog (meta_event_id) share for CAPI
// dedup. Module level so the component body stays pure; same format as before.
function newEventId(): string {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `lead-${Date.now()}-${Math.floor(Math.random() * 1e6)}`;
}

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

export default function FormV2({ door, idPrefix = "fv2", variant = "choice", projectType: fixedType = "Residential" }: Props) {
  const router = useRouter();
  const isCta = variant === "cta";
  const [choice, setChoice] = useState<Choice | "">("");
  const [open, setOpen] = useState(false);
  const opened = useRef(false);
  const [askChoice, setAskChoice] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const started = useRef(false);
  const rootRef = useRef<HTMLFormElement>(null);

  function onFocus(e: React.FocusEvent<HTMLFormElement>) {
    // SAUCE-314: the form root itself takes focus when a CTA opens it; that is
    // not a started form (and form.name would resolve to the "name" input).
    if (e.target === e.currentTarget) return;
    const field = (e.target as { name?: string })?.name || "";
    if (!field || field === "_gotcha" || started.current) return;
    started.current = true;
    posthog.capture("form_started", { form: door, first_field: field });
  }

  // The fields drop down (either variant). Measured once per page view, so the
  // funnel reads: opened -> started (first field) -> attempted -> submitted.
  // via: "choice" / "cta" (a tap in this form) or "cta_link" (SAUCE-314: a CTA
  // elsewhere on the site opened it).
  const openFields = useCallback(
    (via: string) => {
      setOpen(true);
      if (!opened.current) {
        opened.current = true;
        posthog.capture("form_opened", { form: door, via });
      }
    },
    [door],
  );

  // SAUCE-314 (B1): a CTA opens this form. LeadFormBridge dispatches
  // "apex:open-form" on the first [data-lead-form] of the page: the same open
  // state as a tap on the top button (cta: the fields; choice: My home / My
  // business + the fields). No input is focused (no phone keyboard pops up);
  // the form root takes focus quietly, for screen readers.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const onOpen = (e: Event) => {
      openFields((e as CustomEvent<{ via?: string } | null>).detail?.via || "cta_link");
      el.focus({ preventScroll: true });
    };
    el.addEventListener(OPEN_FORM_EVENT, onOpen);
    return () => el.removeEventListener(OPEN_FORM_EVENT, onOpen);
  }, [openFields]);

  // SAUCE-314 (B1): arriving from a CTA on a page with no form ("/#get-started",
  // or the flag LeadFormBridge set): the FIRST form of the page opens and
  // scrolls into view after a tick. The flag is cleared when it is used.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    let flagged = false;
    try {
      flagged = sessionStorage.getItem(OPEN_FORM_FLAG) === "1";
    } catch {
      /* storage blocked: the hash alone decides */
    }
    if (!flagged && window.location.hash !== LEAD_FORM_HASH) return;
    if (document.querySelector(LEAD_FORM_SELECTOR) !== el) return;
    const t = window.setTimeout(() => {
      try {
        sessionStorage.removeItem(OPEN_FORM_FLAG);
      } catch {
        /* nothing to clear */
      }
      scrollToLeadForm(el);
      el.dispatchEvent(new CustomEvent(OPEN_FORM_EVENT, { detail: { via: "cta_link" } }));
    }, 80);
    return () => window.clearTimeout(t);
  }, []);

  function pick(c: Choice) {
    setChoice(c);
    openFields("choice");
    setAskChoice(false);
  }

  // The "cta" variant answers the question for the buyer (the page already knows it).
  const space: Choice | "" = isCta ? (fixedType === "Commercial" ? "My business" : "My home") : choice;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting || sent) return;
    // "cta" variant: the first tap on the offer button only drops the fields down.
    if (isCta && !open) {
      openFields("cta");
      return;
    }
    setError(null);
    posthog.capture("form_submit_attempted", { form: door, project_type: space || "unspecified" });

    const em = email.trim();
    const missing: string[] = [];
    if (!space) missing.push("what needs shade");
    if (!name.trim()) missing.push("name");
    if (phone.replace(/\D/g, "").length < 10) missing.push("valid phone number");
    if (em && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) missing.push("valid email (or leave it blank)");
    if (missing.length > 0) {
      posthog.capture("form_submit_failed", { form: door, stage: "client_validation", missing: missing.join(", ") });
      if (!space) {
        // Tapping the button before a choice: the fields open and the choice
        // is asked for inline (no error box on a first tap).
        openFields("choice");
        setAskChoice(true);
      } else {
        setError(`Please fill in: ${missing.join(", ")}.`);
      }
      return;
    }

    setSubmitting(true);
    const honeypot =
      (e.currentTarget.elements.namedItem("_gotcha") as HTMLInputElement | null)?.value || "";
    const utm = readUtm();
    const from = [utm.utm_source, utm.utm_medium].filter(Boolean).join(" / ");
    const projectType = isCta ? fixedType : CHOICES.find((c) => c.value === choice)?.projectType ?? "Residential";
    // SAUCE-314: the homepage door ("home") reads "Quick form on /".
    const formPath = door === "home" ? "/" : `/${door}`;
    const note =
      `Auto note: shading ${space}. Quick form on ${formPath}` +
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
      const metaEventId = newEventId();
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
      // The block stays "sent" underneath the welcome sheet, so closing the
      // sheet never invites a second submit of the same lead.
      setSent(true);
      setSubmitting(false);
      router.push("/welcome");
    } catch {
      posthog.capture("form_submit_failed", { form: door, stage: "network" });
      setError("Something went wrong. Please try again or call (602) 837-0370 directly.");
      setSubmitting(false);
    }
  }

  const input =
    "block h-14 w-full rounded-xl border border-white/20 bg-white/[0.08] px-4 text-[17px] text-white placeholder:text-white/40 transition-colors focus:border-copper focus:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-copper/35 disabled:opacity-60";
  const label = "mb-1.5 block text-left text-[15px] font-medium text-white/85";

  return (
    <form
      ref={rootRef}
      data-lead-form={door}
      tabIndex={-1}
      onSubmit={onSubmit}
      onFocusCapture={onFocus}
      noValidate
      className="relative text-center outline-none"
    >
      {/* Honeypot (invisible to humans, filled by bots; Formspree convention) */}
      <div className="absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
        <label htmlFor={`${idPrefix}-gotcha`}>Leave this field blank</label>
        <input type="text" id={`${idPrefix}-gotcha`} name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>

      {!isCta && (
      <fieldset disabled={sent}>
        <legend className="mx-auto font-heading text-xl font-semibold text-white sm:text-2xl">What needs shade?</legend>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {CHOICES.map(({ value, Icon }) => {
            const on = choice === value;
            return (
              <label
                key={value}
                className={`flex h-16 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-2xl border-2 px-2 text-[17px] font-semibold text-white transition-all duration-200 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-white/60 sm:gap-2.5 sm:px-3 sm:text-lg ${
                  on
                    ? "border-copper bg-copper shadow-[0_0_26px_4px_rgba(196,92,38,0.55)]"
                    : "border-copper bg-white/[0.05] hover:bg-copper/20"
                }`}
              >
                <input
                  type="radio"
                  name="shade"
                  value={value}
                  checked={on}
                  onChange={() => pick(value)}
                  className="sr-only"
                />
                <Icon className={`h-6 w-6 shrink-0 sm:h-7 sm:w-7 ${on ? "text-white" : "text-copper-light"}`} />
                {value}
              </label>
            );
          })}
        </div>
        {askChoice && !choice && (
          <p role="alert" className="mt-2 text-[15px] font-medium text-sand-light">
            Please tap My home or My business.
          </p>
        )}
      </fieldset>
      )}

      {/* The fields drop down under the choice (grid-rows 0fr -> 1fr). In the
          "cta" variant they drop down on the first tap of the offer button,
          which slides down under them and sends on the next tap. */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">
          <fieldset disabled={sent || !open} className="grid gap-4 pt-5 sm:grid-cols-2">
            <div>
              <label htmlFor={`${idPrefix}-name`} className={label}>
                Your name
              </label>
              <input
                id={`${idPrefix}-name`}
                name="name"
                type="text"
                autoComplete="name"
                enterKeyHint="next"
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
                enterKeyHint="next"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(602) 555-1234"
                className={input}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor={`${idPrefix}-email`} className={label}>
                Email <span className="font-normal text-white/55">(optional)</span>
              </label>
              <input
                id={`${idPrefix}-email`}
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                enterKeyHint="send"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={input}
              />
            </div>
          </fieldset>
        </div>
      </div>

      {error && (
        <div role="alert" className="mt-4 rounded-xl border border-red-300/40 bg-red-500/15 px-4 py-3 text-left text-[15px] text-red-50">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting || sent}
        className="cta-glow-loop mt-5 inline-flex min-h-14 w-full items-center justify-center gap-2 text-balance rounded-full bg-copper px-5 py-3.5 text-center text-[17px] font-bold leading-snug text-white transition-colors hover:bg-copper-light focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 disabled:cursor-default sm:text-lg"
      >
        {sent ? (
          <>
            <CheckIcon className="h-5 w-5" />
            Sent
          </>
        ) : submitting ? (
          "Sending..."
        ) : (
          <CtaText />
        )}
      </button>

      <p className="mt-3 text-[15px] font-medium leading-snug text-white/90">{NO_EXTRA_FEES}</p>

      <p className="mt-3 text-sm leading-relaxed text-white/70">
        Rather text?{" "}
        <TextDoor door={door} className="font-semibold text-white underline decoration-copper underline-offset-4">
          Text us
        </TextDoor>
        , the message is already written. Or call{" "}
        <a href="tel:+16028370370" className="whitespace-nowrap font-semibold text-white underline decoration-copper underline-offset-4">
          (602) 837-0370
        </a>
        .
      </p>

      {/* SAUCE-314 (his ruling, "always"): the consent line appears only once the
          fields have dropped down, so it is on screen before anyone can send,
          never before they start. Same collapse as the fields. */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">
          <p className="mx-auto mt-3 max-w-md text-[11px] leading-relaxed text-white/45">
            By submitting this form, you agree that Apex Sail Shades may contact you by phone call or email about your project and quote. See our{" "}
            <a href="/privacy" tabIndex={open ? 0 : -1} className="underline hover:text-white/80">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </form>
  );
}
