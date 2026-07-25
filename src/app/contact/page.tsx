"use client";

import { useRef, useState, type FormEvent } from "react";
import posthog from "posthog-js";

const benefits = [
  "Complimentary ShadeCast\u2122 shadow analysis",
  "No-obligation project consultation",
  "Custom engineering assessment",
  "Transparent pricing, no hidden fees",
];

const trustBadges = [
  "Licensed, Bonded & Insured",
  "10-Year Warranty",
  "Since 2019",
];

const serviceAreas = ["Phoenix Metro", "Scottsdale", "Mesa", "Gilbert", "Chandler", "Tucson"];

export default function ContactPage() {
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
      posthog.capture("form_started", { form: "contact", first_field: field });
    }
    if (!focusedFields.current.has(field)) {
      focusedFields.current.add(field);
      posthog.capture("form_field_focus", { form: "contact", field });
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
      form: "contact",
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
        form: "contact",
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
          form: "contact",
          project_type: formData.projectType || "unspecified",
        });
        setSubmitted(true);
      } else {
        posthog.capture("form_submit_failed", {
          form: "contact",
          stage: "formspree_response",
          status: res.status,
        });
        setSubmitError(
          "Something went wrong. Please try again or call (602) 837-0370 directly.",
        );
      }
    } catch {
      posthog.capture("form_submit_failed", { form: "contact", stage: "network" });
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

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-charcoal pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Get your <em className="not-italic font-bold text-copper">Free</em>
          </h1>
          <div className="mx-auto mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-base font-semibold text-white sm:text-lg">
            <span className="inline-flex items-center gap-2">
              <svg className="h-5 w-5 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              3D Design
            </span>
            <span className="inline-flex items-center gap-2">
              <svg className="h-5 w-5 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              Visit
            </span>
            <span className="inline-flex items-center gap-2">
              <svg className="h-5 w-5 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              Estimate
            </span>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-sand-light leading-relaxed sm:text-xl">
            Tell us about your space. We&apos;ll call you within the hour to schedule.
          </p>
        </div>
      </section>

      {/* ===== TWO-COLUMN LAYOUT ===== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* ---------- FORM (left, wider) ---------- */}
            <div className="lg:col-span-3">
              {submitted ? (
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
              ) : (
                <>
                  <form onSubmit={handleSubmit} onFocusCapture={handleFormFocus} className="space-y-6" noValidate>
                    {/* Honeypot (invisible to humans, filled by bots; Formspree convention) */}
                    <div className="absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
                      <label htmlFor="_gotcha">Leave this field blank</label>
                      <input type="text" id="_gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" />
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
                </>
              )}
            </div>

            {/* ---------- RIGHT COLUMN ---------- */}
            <div className="lg:col-span-2 space-y-8">
              {/* Why Reach Out Card */}
              <div className="rounded-2xl bg-cream p-8">
                <h3 className="font-heading text-lg font-bold text-charcoal">
                  Why Reach Out?
                </h3>
                <ul className="mt-5 space-y-4">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-copper/10">
                        <svg
                          className="h-3 w-3 text-copper"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </span>
                      <span className="text-sm text-charcoal leading-snug">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="rounded-2xl border border-sand bg-white p-8">
                <h3 className="font-heading text-lg font-bold text-charcoal">
                  Contact Information
                </h3>
                <div className="mt-5 space-y-4">
                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-copper/10">
                      <svg
                        className="h-5 w-5 text-copper"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs text-charcoal-light">Phone</p>
                      <a
                        href="tel:+16028370370"
                        className="text-sm font-medium text-charcoal hover:text-copper transition-colors"
                      >
                        (602) 837-0370
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-copper/10">
                      <svg
                        className="h-5 w-5 text-copper"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs text-charcoal-light">Email</p>
                      <a
                        href="mailto:contact@apex-sail-shades.com"
                        className="text-sm font-medium text-charcoal hover:text-copper transition-colors"
                      >
                        contact@apex-sail-shades.com
                      </a>
                    </div>
                  </div>

                  {/* Service Area */}
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-copper/10">
                      <svg
                        className="h-5 w-5 text-copper"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs text-charcoal-light">
                        Service Area
                      </p>
                      <p className="text-sm font-medium text-charcoal">
                        Serving the Greater Phoenix Area
                      </p>
                      <p className="mt-0.5 text-xs text-charcoal-light">
                        {serviceAreas.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="rounded-2xl bg-charcoal p-6 text-center">
                <p className="text-sm font-medium text-white">
                  Response Time
                </p>
                <p className="mt-1 text-xs text-sand-light leading-relaxed">
                  We respond within the hour.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center rounded-full border border-sand bg-cream/50 px-4 py-1.5 text-xs font-medium text-charcoal"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
