"use client";

import { useState } from "react";
import Link from "next/link";
/* SAUCE-246: FAQ copy moved to ./faq-items so faq/layout.tsx can emit FAQPage
   JSON-LD from the SAME array this accordion renders. Schema cannot drift. */
import { FAQ_ITEMS } from "./faq-items";



function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-sand/40 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left transition-colors hover:text-copper focus:outline-none focus:text-copper"
        aria-expanded={open}
      >
        <span className="font-heading text-lg font-semibold text-charcoal">{q}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-copper transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.25}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9 L12 15 L18 9" />
        </svg>
      </button>
      {open && (
        <p className="px-4 pb-5 pr-9 text-base text-charcoal/75 leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <section className="bg-charcoal pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-sand-light leading-relaxed sm:text-xl">
            Real answers about custom shade sails in Phoenix.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="divide-y divide-sand/40 rounded-2xl border border-sand/40 bg-white shadow-sm">
            {FAQ_ITEMS.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
            Still have questions?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-charcoal-light leading-relaxed">
            We respond to all inquiries within the hour.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="cta-glow inline-flex items-center justify-center rounded-full bg-copper px-8 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-copper-dark hover:shadow-md"
            >
              Get My <em className="not-italic font-bold text-[1.08em] mx-1">Free</em> Design + Estimate
            </Link>
            <a
              href="tel:+16028370370"
              className="inline-flex items-center justify-center rounded-full border-2 border-charcoal px-8 py-4 text-base font-semibold text-charcoal transition-all hover:bg-charcoal hover:text-white"
            >
              Schedule a Call: (602) 837-0370
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
