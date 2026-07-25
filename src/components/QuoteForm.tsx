"use client";

import { useRef, useState, type FormEvent } from "react";
import posthog from "posthog-js";

type QuoteFormProps = {
  formName?: string;
};

export default function QuoteForm({ formName = "contact" }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [smsOptIn, setSmsOptIn] = useState(false);
  const [formData, setFormData] = useState({
    projectType: "",
    fullName: "",
    phone: "",
    email: "",
    addressOrZip: "",
    notes: "",
  });
  const formStarted = useRef(false);
  const focusedFields = useRef<Set<string>>(new Set());

  function handleFormFocus(e: React.FocusEvent<HTMLFormElement>) {
    const field = (e.target as { name?: string })?.name || "";
    if (!field || field === "_gotcha") return;
    if (!formStarted.current) {
      formStarted.current = true;
      posthog.capture("form_started", { form: formName, first_field: field });
    }
    if (!focusedFields.current.has(field)) {
      focusedFields.current.add(field);
      posthog.capture("form_field_focus", { form: formName, field });
    }
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setSubmitError(null);
    posthog.capture("form_submit_attempted", {
      form: formName,
      project_type: formData.projectType || "unspecified",
    });

    const missing: string[] = [];
    if (!formData.projectType.trim()) missing.push("project type");
    if (!formData.fullName.trim()) missing.push("name");
    if (formData.phone.replace(/\D/g, "").length < 10) missing.push("valid phone number");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) missing.push("valid email");
    if (!formData.addressOrZip.trim()) missing.push("address or ZIP");
    if (missing.length > 0) {
      posthog.capture("form_submit_failed", {
        form: formName,
        stage: "client_validation",
        missing: missing.join(", "),
      });
      setSubmitError(`Please fill in: ${missing.join(", ")}.`);
      setSubmitting(false);
      return;
    }

    const form = e.currentTarget;
    const honeypot =
      (form.elements.namedItem("_gotcha") as HTMLInputElement | null)?.value || "";

    try {
      const payload = new FormData();
      payload.append("Project type", formData.projectType);
      payload.append("Name", formData.fullName);
      payload.append("Phone", formData.phone);
      payload.append("Email", formData.email);
      payload.append("Address or ZIP", formData.addressOrZip);
      payload.append("Notes", formData.notes);
      payload.append("SMS opt-in", smsOptIn ? "Yes" : "No");
      payload.append(
        "_subject",
        `New Apex lead: ${formData.projectType || "unspecified"} from ${formData.fullName}`,
      );
      payload.append("_replyto", formData.email);
      payload.append("_gotcha", honeypot);

      const res = await fetch("https://formspree.io/f/mkopbjya", {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        window.gtag?.('event', 'conversion', {
          send_to: 'AW-18055743018/6TUsCPKSoZ0cEKqM06FD',
          value: 500,
          currency: 'USD',
        });
        posthog.capture("form_submitted", {
          form: formName,
          project_type: formData.projectType || "unspecified",
        });
        setSubmitted(true);
      } else {
        posthog.capture("form_submit_failed", {
          form: formName,
          stage: "formspree_response",
          status: res.status,
        });
        setSubmitError(
          "Something went wrong. Please try again or call (602) 837-0370 directly.",
        );
      }
    } catch {
      posthog.capture("form_submit_failed", { form: formName, stage: "network" });
      setSubmitError(
        "Something went wrong. Please try again or call (602) 837-0370 directly.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  const inputClasses =
    "w-full rounded-lg border border-sand bg-white px-4 py-3 text-charcoal placeholder:text-charcoal-light/60 transition-colors focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/20";
  const labelClasses = "block text-sm font-medium text-charcoal mb-1.5";

  if (submitted) {
    return (
      <div className="cta-glow-loop rounded-2xl border border-copper/20 bg-copper/5 p-10 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-copper/10">
          <svg
            className="h-8 w-8 text-copper"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="mt-6 font-heading text-2xl font-bold text-charcoal">
          Got it{formData.fullName ? `, ${formData.fullName.split(" ")[0]}` : ""}.
        </h3>
        <p className="mt-3 text-charcoal-light leading-relaxed">
          We&apos;ll call you within the hour to schedule your free design visit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onFocusCapture={handleFormFocus} className="space-y-6" noValidate>
      {/* Honeypot (invisible to humans, filled by bots; Formspree convention) */}
      <div className="absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
        <label htmlFor="_gotcha">Leave this field blank</label>
        <input type="text" id="_gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      </div>

      {/* FIELD 1 - Project type (radio, REQUIRED, FIRST) */}
      <fieldset>
        <legend className={labelClasses}>
          Is this for your home or your business? <span className="text-copper">*</span>
        </legend>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          <label
            className={`flex cursor-pointer items-center gap-3 rounded-lg border-2 px-4 py-3 transition-colors ${
              formData.projectType === "Residential"
                ? "border-copper bg-copper/5"
                : "border-sand hover:border-copper/40"
            }`}
          >
            <input
              type="radio"
              name="projectType"
              value="Residential"
              checked={formData.projectType === "Residential"}
              onChange={handleChange}
              required
              className="h-4 w-4 accent-copper"
            />
            <span className="text-sm font-medium text-charcoal">Residential (my home)</span>
          </label>
          <label
            className={`flex cursor-pointer items-center gap-3 rounded-lg border-2 px-4 py-3 transition-colors ${
              formData.projectType === "Commercial"
                ? "border-copper bg-copper/5"
                : "border-sand hover:border-copper/40"
            }`}
          >
            <input
              type="radio"
              name="projectType"
              value="Commercial"
              checked={formData.projectType === "Commercial"}
              onChange={handleChange}
              required
              className="h-4 w-4 accent-copper"
            />
            <span className="text-sm font-medium text-charcoal">Commercial (business, HOA, or property)</span>
          </label>
        </div>
      </fieldset>

      {/* FIELD 2 - Name */}
      <div>
        <label htmlFor="fullName" className={labelClasses}>
          Your name <span className="text-copper">*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          autoComplete="name"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="First and last"
          className={inputClasses}
        />
      </div>

      {/* FIELD 3 - Phone */}
      <div>
        <label htmlFor="phone" className={labelClasses}>
          Best phone number <span className="text-copper">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(602) 555-1234"
          className={inputClasses}
        />
        <p className="mt-1.5 text-xs text-charcoal-light">We&apos;ll call you here.</p>
      </div>

      {/* FIELD 4 - Email */}
      <div>
        <label htmlFor="email" className={labelClasses}>
          Email <span className="text-copper">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={inputClasses}
        />
      </div>

      {/* FIELD 5 - Address or ZIP */}
      <div>
        <label htmlFor="addressOrZip" className={labelClasses}>
          Project address or ZIP <span className="text-copper">*</span>
        </label>
        <input
          id="addressOrZip"
          name="addressOrZip"
          type="text"
          required
          autoComplete="postal-code"
          value={formData.addressOrZip}
          onChange={handleChange}
          placeholder="Phoenix metro"
          className={inputClasses}
        />
        <p className="mt-1.5 text-xs text-charcoal-light">Helps us confirm we serve your area.</p>
      </div>

      {/* FIELD 6 - Notes (optional) */}
      <div>
        <label htmlFor="notes" className={labelClasses}>
          Anything you&apos;d like us to know?
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          value={formData.notes}
          onChange={handleChange}
          placeholder="Size of area, sun direction, color preferences, timeline, budget range, anything."
          className={inputClasses}
        />
      </div>

      {/* Optional SMS opt-in (10DLC: consent must be a free choice, unchecked by default) */}
      <div className="flex items-start gap-3">
        <input
          id="smsOptIn"
          name="smsOptIn"
          type="checkbox"
          checked={smsOptIn}
          onChange={(e) => setSmsOptIn(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-charcoal-light/40 text-copper focus:ring-copper/40"
        />
        <label htmlFor="smsOptIn" className="text-[11px] leading-relaxed text-charcoal-light/80">
          I agree to receive SMS text messages from Apex Sail Shades about my quote and project updates. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase. See our{" "}
          <a href="/privacy" className="underline hover:text-copper">Privacy Policy</a>.
        </label>
      </div>

      {/* Error state */}
      {submitError && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-900">
          {submitError}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="cta-glow-loop w-full rounded-lg bg-copper px-8 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-copper-dark hover:shadow-md focus:outline-none focus:ring-2 focus:ring-copper/40 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending..." : (
          <>Request my <em className="not-italic font-bold">Free</em> design visit and Estimate</>
        )}
      </button>

      {/* Trust microcopy */}
      <p className="text-center text-xs text-charcoal-light">
        No obligation. Free 3D design. Locally owned in Phoenix.
      </p>

      {/* Contact disclosure (SMS is opt-in only via the checkbox above) */}
      <p className="text-center text-[11px] leading-relaxed text-charcoal-light/80">
        By submitting this form, you agree that Apex Sail Shades may contact you by phone call or email about your project and quote. See our{" "}
        <a href="/privacy" className="underline hover:text-copper">Privacy Policy</a>.
      </p>
    </form>
  );
}
