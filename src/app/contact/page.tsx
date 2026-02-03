"use client";

import { useState, type FormEvent } from "react";

const projectTypes = [
  "Select project type...",
  "Golf & Entertainment Venue",
  "Senior Living Facility",
  "Other Commercial Project",
];

const timelines = [
  "Select timeline...",
  "ASAP - Need shade now",
  "1-3 Months",
  "3-6 Months",
  "Just Researching Options",
];

const benefits = [
  "Complimentary ShadeCast\u2122 shadow analysis",
  "No-obligation project consultation",
  "Custom engineering assessment",
  "Transparent pricing \u2014 no hidden fees",
];

const trustBadges = [
  "Licensed, Bonded & Insured",
  "10-Year Warranty",
  "Since 2018",
];

const serviceAreas = ["Phoenix Metro", "Scottsdale", "Tucson", "Flagstaff"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    jobTitle: "",
    email: "",
    phone: "",
    projectType: "",
    timeline: "",
    description: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
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
            Get Your Free Assessment
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-sand-light leading-relaxed sm:text-xl">
            Tell us about your project and we&apos;ll show you exactly
            what&apos;s possible &mdash; including a complimentary
            ShadeCast&trade; shadow analysis.
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
                <div className="rounded-2xl border border-copper/20 bg-copper/5 p-10 text-center">
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
                    Thank You, {formData.fullName || "there"}!
                  </h3>
                  <p className="mt-3 text-charcoal-light leading-relaxed">
                    Your inquiry has been received. Our team will review your
                    project details and reach out within 24 business hours with
                    your complimentary ShadeCast&trade; shadow analysis plan.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-heading text-2xl font-bold text-charcoal sm:text-3xl">
                    Tell Us About Your Project
                  </h2>
                  <p className="mt-2 text-charcoal-light">
                    All fields marked with{" "}
                    <span className="text-copper">*</span> are required.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-6"
                  >
                    {/* Row: Full Name / Company */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="fullName" className={labelClasses}>
                          Full Name <span className="text-copper">*</span>
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className={labelClasses}>
                          Company Name <span className="text-copper">*</span>
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Acme Corp"
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    {/* Job Title */}
                    <div>
                      <label htmlFor="jobTitle" className={labelClasses}>
                        Job Title <span className="text-copper">*</span>
                      </label>
                      <input
                        id="jobTitle"
                        name="jobTitle"
                        type="text"
                        required
                        value={formData.jobTitle}
                        onChange={handleChange}
                        placeholder="Facilities Manager"
                        className={inputClasses}
                      />
                    </div>

                    {/* Row: Email / Phone */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="email" className={labelClasses}>
                          Email <span className="text-copper">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className={labelClasses}>
                          Phone <span className="text-copper">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(480) 555-0123"
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    {/* Row: Project Type / Timeline */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="projectType" className={labelClasses}>
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className={inputClasses}
                        >
                          {projectTypes.map((t) => (
                            <option
                              key={t}
                              value={t === projectTypes[0] ? "" : t}
                              disabled={t === projectTypes[0]}
                            >
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className={labelClasses}>
                          Estimated Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className={inputClasses}
                        >
                          {timelines.map((t) => (
                            <option
                              key={t}
                              value={t === timelines[0] ? "" : t}
                              disabled={t === timelines[0]}
                            >
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <label htmlFor="description" className={labelClasses}>
                        Brief Project Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Tell us about your space, goals, and any specific requirements..."
                        className={inputClasses}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-copper px-8 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-copper-dark hover:shadow-md focus:outline-none focus:ring-2 focus:ring-copper/40 focus:ring-offset-2"
                    >
                      Get My Free Assessment
                    </button>
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
                        href="tel:+14805550123"
                        className="text-sm font-medium text-charcoal hover:text-copper transition-colors"
                      >
                        (480) 555-0123
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
                        href="mailto:info@apexsailshades.com"
                        className="text-sm font-medium text-charcoal hover:text-copper transition-colors"
                      >
                        info@apexsailshades.com
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
                        Arizona
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
                  We respond to all inquiries within 24 business hours.
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
