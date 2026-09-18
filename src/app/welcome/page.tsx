import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WelcomeCallLine, { SaveNumberButton } from "@/components/WelcomeCallLine";

// ============================================================================
// /welcome (SAUCE-312, CTA v3 S4): the thank-you page after ANY submit (the
// site's short forms, and the Meta Instant Form's thank-you button).
// Job: make the 15-minute call land warm and get it ANSWERED. The free design
// visit is introduced HERE, after the yes (never at a door).
// NOINDEX. Out of sitemap.ts. Fires NO Lead event (the form that sent them
// here already did; the Instant Form counts its own).
// Title "You're family now!" is the operator's own copy, verbatim.
// ============================================================================

export const metadata: Metadata = {
  title: "You're family now! | Apex Sail Shades",
  description: "Your free 3D design + FINAL price is on its way. Watch for our call from 602-837-0370.",
  robots: { index: false, follow: false },
};

const steps = [
  {
    title: "A quick, friendly call",
    body: "We hear about your space and find a time that works for you.",
  },
  {
    title: "Your free design visit",
    body: "We come out, measure, and design your shade in 3D, drawn on your actual space.",
  },
  {
    title: "Your FINAL price, same day",
    body: "No extra fees. The price we quote is the price you pay. You'll even see exactly where your shade falls, hour by hour.",
  },
];

const thinkAbout = [
  "Where the sun hits hardest, and at what time of day",
  "How you'd love to use the space",
  "Any colors you love",
];

const installs = [
  { src: "/images/gallery-ws-29.webp", alt: "Twin shade sails over a Phoenix backyard pool" },
  { src: "/images/residential-05.webp", alt: "Custom shade sail over a Phoenix patio" },
  { src: "/images/residential-10.webp", alt: "Finished backyard shade sail Phoenix" },
];

export default function WelcomePage() {
  return (
    <>
      {/* ===== THE CALL (the whole point of this page) ===== */}
      <section className="bg-charcoal pt-32 pb-16 sm:pb-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-copper/15">
            <svg className="h-8 w-8 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h1 className="mt-6 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            You&apos;re family now!
          </h1>
          <WelcomeCallLine />
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-start">
            <SaveNumberButton />
            <a
              href="tel:+16028370370"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:text-lg"
            >
              Can&apos;t wait? Call us now
            </a>
          </div>
        </div>
      </section>

      {/* ===== WHAT THE CALL SETS UP ===== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-bold text-charcoal sm:text-4xl">
            Here&apos;s what that call sets up
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-sand bg-cream/40 p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-copper font-heading text-lg font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold text-charcoal">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-charcoal-light">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== WHILE YOU WAIT (preps the call, zero homework) ===== */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
            While you wait (totally optional)
          </h2>
          <p className="mt-4 text-lg text-charcoal-light">
            Nothing to prepare. If you&apos;d like a head start, think about:
          </p>
          <ul className="mx-auto mt-6 max-w-xl space-y-3 text-left">
            {thinkAbout.map((t) => (
              <li key={t} className="flex items-start gap-3 text-lg text-charcoal">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper/15">
                  <svg className="h-3.5 w-3.5 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== REAL WORK (true before/afters slot in here once he picks the pairs) ===== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-bold text-charcoal sm:text-4xl">
            A little Phoenix shade inspiration
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {installs.map((img) => (
              <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={img.src} alt={img.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/gallery" className="font-semibold text-copper transition-colors hover:text-copper-dark">
              See more of our work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
