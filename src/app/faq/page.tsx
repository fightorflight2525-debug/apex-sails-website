"use client";

import { useState } from "react";
import Link from "next/link";

const FAQ_ITEMS: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: "Will it survive Phoenix monsoons?",
    a: "Engineered for 90 MPH winds with marine-grade 316 stainless hardware and a 10-year fabric warranty. Architectural-grade shade fabric blocks up to 96% of UV and drops temperatures up to 15 degrees Fahrenheit under the shade.",
  },
  {
    q: "Are these actually engineered structures or just fabric?",
    a: "PE-stamped engineered structures. 90 MPH wind rating. Marine-grade 316 stainless hardware throughout. Permits coordinated through our licensed engineering partner so the structure ships with real load calcs, not a generic template.",
  },
  {
    q: "Residential or commercial, same crew?",
    a: "Same Phoenix-trained installation crew, same marine-grade hardware, same 10-year fabric warranty across both. Custom 3D design free either way.",
  },
  {
    q: "What does a residential project cost?",
    a: "Most Phoenix backyard projects run $8,000 to $12,000. Free on-site 3D design and a real itemized quote in the same visit. No high-pressure sales.",
  },
  {
    q: "What does a commercial project cost?",
    a: "Restaurant patios run $15,000 to $45,000. HOA pool decks $25,000 to $80,000. Multi-family courtyards $12,000 to $35,000 per zone. Free on-site walk plus a custom proposal sized to your property.",
  },
  {
    q: "What about HOA approval and city permits?",
    a: "HOA submittal package included. Board-ready pitch deck plus 3D renderings, spec sheet, insurance, and warranty docs. City permits coordinated through our licensed engineering partner so your team does not have to project-manage the paperwork.",
  },
  {
    q: "What does the Free Design Visit include?",
    a: "We come to you, measure the space, and run a ShadeCast sun analysis on the exact spots you want covered. You see a custom 3D render of your sail before anything is built. Real itemized quote same visit.",
  },
  {
    q: "What is the warranty?",
    a: "10-year fabric warranty backed by the manufacturer. Marine-grade 316 stainless hardware on every install. We stand behind the workmanship season after season.",
  },
  {
    q: "Where do you install?",
    a: "Greater Phoenix metro: Phoenix, Scottsdale, Mesa, Tempe, Chandler, Gilbert, Glendale, Peoria, and surrounding Valley cities. If you are outside that radius, ask anyway. We cover much of central Arizona for the right project.",
  },
  {
    q: "What is the next step?",
    a: "One free on-site visit. Real quote same day. No high-pressure sales. We respond to all inquiries within the hour.",
  },
];

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
