import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import CrossFadeCarousel, { type CarouselFrame } from "@/components/CrossFadeCarousel";
import CountUp from "@/components/CountUp";
import Lightbox from "@/components/Lightbox";
import CallPromise from "@/components/CallPromise";
import { BrushPencilX, UvIcon, ThermometerIcon, WindIcon, ShieldIcon, BusinessIcon } from "@/components/icons";
import CtaText from "@/components/CtaText";

// ============================================================================
// /residential SECTIONS, SHARED (SAUCE-313, CTA v3.1 S1.7 / S3.C).
// /free-design (the bio-link simulation of the main site) shows "the /residential
// page as it is" below its hero, and /welcome reuses the Why block. These are
// the /residential sections lifted verbatim into one file so the pages render
// the SAME markup and cannot drift. Differences are props, never copies:
//   ctaHref       where the offer buttons point (/contact on /residential; the
//                 hero form on /free-design, so the hallway keeps one door)
//   withCommercial  /free-design serves homes AND businesses (S1.7): the
//                 "What we shade" block gains a Commercial spaces card.
// SAUCE-313 copy changes inside (his rulings): 30°F cooler surfaces (S2.6),
// "estimate" -> "FINAL price" (S1.8), one CTA label (S3.D), and the line under
// the offer buttons is "No extra fees · <time-aware call promise>" (S3.D, S2.8).
// ============================================================================

/* Real-backyard hero slideshow. Frame 0 = current hero (LCP, priority).
   Frame 1 = the pool image (SLOT 2 flagged for operator confirmation). */
export const RESIDENTIAL_HERO_FRAMES: CarouselFrame[] = [
  { src: "/images/residential-hero.webp", alt: "Custom residential shade sail over a Phoenix backyard patio", priority: true },
  /* Slot 2 = the pool shot (operator-confirmed: ws-29, twin sails over the pool). F2 CLOSED. */
  { src: "/images/gallery-ws-29.webp", alt: "Twin shade sails over a Phoenix backyard pool" },
  { src: "/images/residential-01.webp", alt: "Shade sail over a Phoenix backyard pool" },
  { src: "/images/residential-02.webp", alt: "Custom backyard shade sail install in Phoenix" },
  { src: "/images/residential-03.webp", alt: "Patio shade sail over a Phoenix home" },
  { src: "/images/residential-04.webp", alt: "Backyard shade sail install Phoenix metro" },
  { src: "/images/residential-05.webp", alt: "Custom shade sail over a Phoenix patio" },
  { src: "/images/residential-06.webp", alt: "Residential shade sail Phoenix backyard" },
  { src: "/images/residential-07.webp", alt: "Tensioned shade sail over a Phoenix home" },
  { src: "/images/residential-08.webp", alt: "Backyard shade cover install Phoenix" },
  { src: "/images/residential-09.webp", alt: "Custom patio shade sail Phoenix" },
  { src: "/images/residential-10.webp", alt: "Finished backyard shade sail Phoenix" },
  { src: "/images/os-04.webp", alt: "Outdoor shade sail over a Phoenix space" },
  { src: "/images/os-15.webp", alt: "Custom shade sail Phoenix backyard" },
];

const gallery = [
  "/images/residential-01.webp",
  "/images/residential-02.webp",
  "/images/residential-03.webp",
  "/images/residential-04.webp",
  "/images/residential-05.webp",
  "/images/residential-06.webp",
  "/images/residential-07.webp",
  "/images/residential-08.webp",
  "/images/residential-09.webp",
  "/images/residential-10.webp",
  "/images/os-04.webp",
  "/images/os-15.webp",
];

/* AEO: the FAQ block renders these verbatim and /residential's FAQPage JSON-LD
   mirrors them exactly (schema must always match visible content). */
export const RESIDENTIAL_FAQS: { q: string; a: string }[] = [
  {
    q: "How much do shade sails cost in Phoenix?",
    a: "Most residential projects run $8,000 to $12,000 installed. The exact price depends on size, layout, and pole configuration. You get a clear, itemized quote at your free design visit, and the number we quote is the number you pay.",
  },
  {
    q: "How fast can my shade sail be installed?",
    a: "Most builds are up in about 14 days from deposit. Our guarantee window is 20 days. If your install passes 20 days for reasons on our side, we work for free until your vision is achieved. Monsoon weather can pause a build day; your timeline extends day for day.",
  },
  {
    q: "Will a shade sail survive Phoenix monsoon season?",
    a: "Yes. Every sail is engineered to a 90 mph wind rating with marine-grade 316 stainless hardware and footings set for monsoon load. Phoenix weather is exactly what we build for.",
  },
  {
    q: "How much cooler is it under a shade sail?",
    a: "Commercial-grade fabric blocks up to 96% of UV and keeps the surfaces underneath up to 30°F cooler. Pools, patios, and backyards stay usable through the hottest part of the day.",
  },
  {
    q: "Do I need HOA approval for a shade sail?",
    a: "Many Phoenix neighborhoods ask for it. We prepare the drawings and engineering documents your HOA wants to see and guide the approval with you.",
  },
  {
    q: "What warranty comes with my shade sail?",
    a: "A 15-year warranty, and we stand behind the workmanship on every install. If something is not right, we make it right.",
  },
];

const valueProps: { title: string; body: string; icon: ReactNode; href?: string }[] = [
  {
    title: "Designed in one visit",
    href: "/process",
    body: "We measure, design, and quote your backyard in a single on-site visit. No drawn-out back and forth.",
    icon: (
      <svg className="w-10 h-10 text-copper" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="6" y="9" width="28" height="25" rx="3" stroke="currentColor" strokeWidth="2" />
        <line x1="6" y1="15" x2="34" y2="15" stroke="currentColor" strokeWidth="2" />
        <line x1="13" y1="5" x2="13" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="27" y1="5" x2="27" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <polyline points="14,23 18,27 26,19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "ShadeCast™ sun analysis",
    href: "/#shadecast",
    body: "We predict exactly where the sun falls across every hour and season, so the shade lands where you actually need it.",
    icon: (
      <svg className="w-10 h-10 text-copper" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
        <line x1="20" y1="4" x2="20" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="25" x2="20" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="16" x2="11" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="29" y1="16" x2="32" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="4" y1="34" x2="36" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Built for Phoenix",
    body: "Engineered for 110°F summers and 90+ mph monsoon winds. Marine-grade 316 stainless hardware on every install.",
    icon: (
      <svg className="w-10 h-10 text-copper" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M3 30 L12 16 L18 24 L26 12 L37 30 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="29" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
        <line x1="3" y1="30" x2="37" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "96% UV protection",
    body: "Commercial-grade fabric blocks up to 96% of UV and keeps the surfaces beneath up to 30°F cooler.",
    icon: (
      <svg className="w-10 h-10 text-copper" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M20 4 L32 9 L32 20 C32 28 26 33 20 36 C14 33 8 28 8 20 L8 9 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="20" cy="18" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <line x1="20" y1="10" x2="20" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="12" y1="18" x2="14" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="26" y1="18" x2="28" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "15-year warranty",
    body: "We stand behind the materials and the workmanship, so your patio stays protected season after season.",
    icon: (
      <svg className="w-10 h-10 text-copper" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M20 4 L32 10 L32 22 C32 30 26 36 20 38 C14 36 8 30 8 22 L8 10 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <polyline points="14,20 18,24 26,16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Licensed, insured crews",
    body: "Every install is performed by licensed, insured Phoenix crews with the right precautions on every job.",
    icon: (
      <svg className="w-10 h-10 text-copper" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="6" y="6" width="28" height="22" rx="2" stroke="currentColor" strokeWidth="2" />
        <line x1="10" y1="13" x2="22" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="28" cy="18" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M20 28 L20 36 L23 33 L26 36 L26 28" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
];

/* ---------------------------------------------------------------------------
   THE FIXED-BACKGROUND SCROLL ZONE. The background stays pinned while the
   foreground (hero, badge, guarantee) scrolls over it; the zone releases where
   the section ends.
   --------------------------------------------------------------------------- */
export function PinnedZone({ id, background, children }: { id?: string; background: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className="relative bg-charcoal">
      {/* Pinned background layer */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">{background}</div>
      {/* Foreground content, pulled up over the pinned background */}
      <div className="relative z-10 -mt-[100vh]">{children}</div>
    </section>
  );
}

/** /residential's pinned background: slideshow + the operator-tuned tint recipe. */
export function ResidentialBackdrop({
  frames = RESIDENTIAL_HERO_FRAMES,
  ariaLabel = "Real Phoenix backyard shade sail installs",
}: {
  frames?: CarouselFrame[];
  ariaLabel?: string;
}) {
  return (
    <>
      <CrossFadeCarousel
        fill
        controls={false}
        ariaLabel={ariaLabel}
        intervalMs={6000}
        transitionMs={700}
        sizes="100vw"
        frameClassName="object-cover"
        frames={frames}
      />
      {/* Tint (operator-tuned r3): one step darker again + a burnt-orange
          brand wash so lettering reads on every slide. Recipe for future
          pages: dark gradient 80/65/90 + flat copper wash + copper glow. */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal-light/65 to-charcoal/90" />
      <div className="absolute inset-0 bg-copper/[0.04]" />
      {/* Geometric sail-shape SVG motif (decorative, same as the home hero) */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="absolute top-20 -left-20 w-[600px] h-[600px]" viewBox="0 0 600 600" fill="none" aria-hidden="true">
          <path d="M100 500 L300 100 L500 400 Z" stroke="white" strokeWidth="1.5" />
          <path d="M150 480 L320 150 L480 380 Z" stroke="white" strokeWidth="0.75" />
        </svg>
        <svg className="absolute top-40 right-0 w-[500px] h-[500px]" viewBox="0 0 500 500" fill="none" aria-hidden="true">
          <path d="M50 450 L250 50 L450 350 Z" stroke="white" strokeWidth="1.5" />
          <path d="M80 420 L260 100 L420 330 Z" stroke="white" strokeWidth="0.75" />
        </svg>
        <svg className="absolute bottom-10 left-1/3 w-[400px] h-[400px]" viewBox="0 0 400 400" fill="none" aria-hidden="true">
          <path d="M50 350 L200 50 L350 280 Z" stroke="white" strokeWidth="1" />
        </svg>
      </div>
      {/* Radial copper glow (warm burnt-orange tone, dialed back a hair r4) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-copper/[0.07] rounded-full blur-3xl" />
      {/* soft fade into the urgency section so the seam disappears */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-charcoal to-transparent" />
    </>
  );
}

/* Trust badge row: the operator's final transparent-bg art (badge-row-7yrs.png).
   Processed before ship: bottom-arc GPT typo "EKPERIENCE" rebuilt as EXPERIENCE
   in matching lettering; ribbon interiors made translucent so the slideshow
   reads through. One asset = drops onto any page.
   PLACEMENT (r6, operator-directed): this block sits OUTSIDE the min-h-screen
   hero box, so it begins at exactly 100vh and is below the fold on EVERY
   desktop height by construction, not by a pixel guess. */
export function TrustBadgeRow() {
  return (
    // SAUCE-314: pb-24 -> pb-12 / lg:pb-14 (his "too big of a gap" before the guarantee)
    <div className="px-6 sm:px-8 lg:px-12 pb-12 lg:pb-14">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center">
          <Image
            src="/images/badge-row-7yrs.png"
            alt="Licensed, 7 years experience, insured"
            width={1368}
            height={352}
            className="w-[340px] sm:w-[560px] max-w-full h-auto"
          />
        </div>
        <p className="mt-4 text-base sm:text-lg text-white/60 font-body">Phoenix family-owned</p>
      </div>
    </div>
  );
}

/** The line under an offer button: "No extra fees · <time-aware call promise>" (S3.D). */
function UnderButtonLine({ className }: { className: string }) {
  return (
    <span className={className}>
      No extra fees &middot; <CallPromise />
    </span>
  );
}

/* THE APEX GUARANTEE (scrolls over the pinned background) */
export function ApexGuarantee({ ctaHref = "/contact" }: { ctaHref?: string }) {
  return (
    <div className="px-6 sm:px-8 lg:px-12 pb-28 md:pb-36">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight">
          The Apex <span className="text-copper">Guarantee</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* CARD 1 - Your Dream Shade */}
          <div className="rounded-2xl border border-white/12 bg-charcoal/55 backdrop-blur-sm p-7 sm:p-9">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">Your Dream Shade</h3>
            <ul className="mt-6 space-y-5">
              <li className="flex items-center gap-4">
                <BrushPencilX className="w-8 h-8 shrink-0 text-copper" />
                <span className="text-lg text-white/75">Custom design</span>
              </li>
              <li className="flex items-center gap-4">
                <UvIcon className="w-8 h-8 shrink-0 text-copper" />
                <span className="text-lg text-white/75"><CountUp to={96} suffix="%" /> UV block</span>
              </li>
              <li className="flex items-center gap-4">
                <ThermometerIcon className="w-8 h-8 shrink-0 text-copper" />
                <span className="text-lg text-white/75"><CountUp to={30} suffix={"°F"} /> cooler surfaces</span>
              </li>
              <li className="flex items-center gap-4">
                <WindIcon className="w-8 h-8 shrink-0 text-copper" />
                <span className="text-lg text-white/75"><CountUp to={90} suffix=" mph" /> wind rating</span>
              </li>
              <li className="flex items-center gap-4">
                <ShieldIcon className="w-8 h-8 shrink-0 text-copper" />
                <span className="text-lg text-white/75">15-year warranty</span>
              </li>
            </ul>
          </div>

          {/* CARD 2 - Made Real */}
          <div className="rounded-2xl border border-white/12 bg-charcoal/55 backdrop-blur-sm p-7 sm:p-9">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">Made Real</h3>
            <p className="mt-2 text-lg text-copper font-semibold">Professionally</p>
            <ul className="mt-6 space-y-4">
              {["Designed to scale", "Engineered", "Installed"].map((t) => (
                <li key={t} className="flex items-center justify-between gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <span className="text-lg text-white/75">{t}</span>
                  <svg className="w-6 h-6 shrink-0 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </li>
              ))}
            </ul>
          </div>

          {/* CARD 3 - In 20 Days */}
          <div className="rounded-2xl border border-white/12 bg-charcoal/55 backdrop-blur-sm p-7 sm:p-9">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">In 20 Days</h3>
            <p className="mt-2 text-base italic text-white/70">Or we work for free until your vision is achieved.</p>
            <p className="mt-2 text-sm text-white/55">
              Most builds are up in about 14 days. Monsoon weather can pause
              a build day; your timeline extends day for day and your price
              never changes.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                ["Today", "Call or fill out form"],
                ["1 Day", "Home visit"],
                ["3-4 Days", "Receive FINAL price · 3D design · ShadeCast"],
                ["4-20 Days", "Deposit · Ordered · Installed"],
              ].map(([when, what]) => (
                <li key={when} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                  <span className="font-heading text-base font-bold text-copper shrink-0 min-w-[5.5rem]">{when}</span>
                  <span className="text-base text-white/75">{what}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CARD 4 - With One Step (copper accent; all copy centered) */}
          <div className="rounded-2xl bg-copper p-7 sm:p-9 flex flex-col items-center text-center">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              With One Step&nbsp;&nbsp;<span className="italic tracking-wide">RISK-FREE!</span>
            </h3>
            <div className="mt-6 flex flex-col items-center">
              {/* inline-block + text-center so the label wraps as clean
                  centered lines on mobile instead of breaking apart */}
              <Link
                href={ctaHref}
                className="cta-glow-loop-white inline-block text-center text-balance px-8 py-4 bg-white text-copper text-lg font-bold rounded-full hover:bg-cream transition-colors duration-200 shadow-lg shadow-black/10"
              >
                <CtaText />
              </Link>
              <UnderButtonLine className="mt-2 text-xs uppercase tracking-widest text-white/85" />
            </div>
            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              Everything you need to make an informed decision.
            </p>
            <div className="mt-auto pt-6 w-full">
              <div className="rounded-xl bg-white/15 px-5 py-3 text-center text-sm font-semibold text-white">
                Offer spot held upon call or form submission
              </div>
            </div>
          </div>
        </div>

        {/* Speed does not mean cheap (operator: fight the fast-equals-
            corner-cutting objection right under the guarantee) */}
        <p className="mt-12 max-w-3xl mx-auto text-center text-lg sm:text-xl italic text-white/80 leading-relaxed font-body">
          Your custom, premium, commercial-grade shade sail should not take
          months before you are standing under it. Done right does not mean
          done slow. Precise engineering, careful design, and a crew that
          respects your home are exactly what make 20 days possible.
        </p>
      </div>
    </div>
  );
}

/* URGENCY / SCARCITY (normal scrolling resumes) */
export function UrgencySection() {
  return (
    <section className="bg-[#151515] py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
        <p className="font-heading text-2xl sm:text-3xl font-bold text-red-500">
          Guarantee only offered for 15 installs a month
        </p>
        <p className="mt-2 text-sm sm:text-base italic text-white/55">
          (How we are able to offer a guarantee like this)
        </p>
        <p className="mt-8 font-heading text-2xl sm:text-3xl font-bold text-red-500">
          Offer ends October 15th
        </p>
        <p className="mt-2 text-sm sm:text-base italic text-white/55">
          (Sadly being forced to raise prices to maintain #1 fastest and premium shade sails in the Valley)
        </p>
      </div>
    </section>
  );
}

/* The main site's Why section (copy untouched). Shared with /welcome's price block (S1.4).
   r6b: the justification opens on a single centered question instead of burying
   it in the first line. A question posed on its own line opens a loop the reader
   wants closed, so the paragraph beneath it gets read instead of skimmed.
   Deliberately set BELOW the price headline in weight so the $8,000 to $12,000
   anchor keeps primacy, and tight to its paragraph (mt-2) so the two read as one unit. */
export function WhyBlock() {
  return (
    <>
      <p className="mt-8 font-heading text-xl sm:text-2xl italic font-semibold text-copper/85">
        Why?
      </p>
      <p className="mt-2 text-base text-white/60 leading-relaxed max-w-2xl mx-auto">
        This is a structure your family will stand under for the next decade,
        and we build it that way: commercial-grade fabric, marine-grade steel,
        real structural engineering, and licensed, insured crews. We do not
        cut corners to hit a price, and we do not slow down to justify one.{" "}
        <span className="italic text-white/75">We do it right, and we do it fast.</span>
      </p>
    </>
  );
}

/* PRICE TRANSPARENCY (unchanged) */
export function PriceTransparency() {
  return (
    <section className="bg-charcoal py-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <span className="inline-block text-sm font-semibold uppercase tracking-widest text-sand">
          Transparent pricing
        </span>
        <p className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-white">
          Most residential projects run $8,000 to $12,000
        </p>
        <p className="mt-4 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
          Your exact price depends on size, layout, and pole configuration. We
          give you a clear, itemized quote at your free design visit, with no
          surprises.
        </p>
        <WhyBlock />
      </div>
    </section>
  );
}

/* Small arrow link used by the "What we shade" cards (the uniform CTA, S3.D). */
function CardCta({ href }: { href: string }) {
  return (
    <Link href={href} className="mt-4 inline-block text-copper font-semibold hover:text-copper-dark transition-colors">
      <CtaText suffix={<>&nbsp;&rarr;</>} />
    </Link>
  );
}

/* WHAT WE SHADE (QS relevance: backyard / pool / patio keyword map).
   withCommercial (/free-design, S1.7): + a Commercial spaces card with a photo
   from the existing /commercial set; its copy is the home page's own "For Your
   Business" card copy. */
export function WhatWeShade({ ctaHref = "/contact", withCommercial = false }: { ctaHref?: string; withCommercial?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* sail-geometry motif so the section is not flat white */}
      <div className="absolute inset-0 opacity-[0.06] text-charcoal" aria-hidden="true">
        <svg className="absolute -top-10 -right-16 w-[420px] h-[420px]" viewBox="0 0 400 400" fill="none">
          <path d="M50 350 L200 50 L350 280 Z" stroke="currentColor" strokeWidth="2" />
          <path d="M85 330 L210 95 L325 270 Z" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute -bottom-16 -left-14 w-[360px] h-[360px]" viewBox="0 0 400 400" fill="none">
          <path d="M50 350 L200 50 L350 280 Z" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-copper">
            What we shade
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            {withCommercial ? (
              <>
                <span className="text-copper">Backyard</span>, <span className="text-copper">pool</span>, <span className="text-copper">patio</span>, and <span className="text-copper">commercial</span> shade sails
              </>
            ) : (
              <>
                <span className="text-copper">Backyard</span>, <span className="text-copper">pool</span>, and <span className="text-copper">patio</span> shade sails
              </>
            )}
          </h2>
          <p className="mt-4 text-lg text-charcoal/70 leading-relaxed">
            Tell us the spot that gets too hot. We design the sail around it.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative overflow-hidden rounded-2xl bg-cream p-7 border border-charcoal/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <svg className="absolute -bottom-6 -right-6 w-32 h-32 text-charcoal/[0.04]" viewBox="0 0 400 400" fill="none" aria-hidden="true">
              <path d="M50 350 L200 50 L350 280 Z" stroke="currentColor" strokeWidth="14" />
            </svg>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-copper/10">
              <svg className="w-8 h-8 text-copper" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <circle cx="15" cy="14" r="8" stroke="currentColor" strokeWidth="2" />
                <line x1="15" y1="22" x2="15" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="4" y1="34" x2="36" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M26 34 L26 26 L34 26 L34 34" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="mt-4 font-heading text-xl font-semibold text-charcoal">Backyard shade sails</h3>
            <p className="mt-3 text-charcoal/70 leading-relaxed">
              One sail can turn a backyard that bakes all afternoon into the
              spot your family actually uses. We map the sun across your yard
              and put the shade where you live: the lawn, the play set, the
              seating area.
            </p>
            <CardCta href={ctaHref} />
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-cream p-7 border border-charcoal/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <svg className="absolute -bottom-6 -right-6 w-32 h-32 text-charcoal/[0.04]" viewBox="0 0 400 400" fill="none" aria-hidden="true">
              <path d="M50 350 L200 50 L350 280 Z" stroke="currentColor" strokeWidth="14" />
            </svg>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-copper/10">
              <svg className="w-8 h-8 text-copper" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <path d="M4 22 c4 -4 8 -4 12 0 s8 4 12 0 s8 -4 8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 30 c4 -4 8 -4 12 0 s8 4 12 0 s8 -4 8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <circle cx="28" cy="10" r="4" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
            <h3 className="mt-4 font-heading text-xl font-semibold text-charcoal">Pool shade sails</h3>
            <p className="mt-3 text-charcoal/70 leading-relaxed">
              Phoenix pools lose their fun by June. A pool shade sail cools the
              water and the deck, blocks up to 96% of UV, and rides high enough
              to swim, splash, and see the whole pool.
            </p>
            <CardCta href={ctaHref} />
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-cream p-7 border border-charcoal/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <svg className="absolute -bottom-6 -right-6 w-32 h-32 text-charcoal/[0.04]" viewBox="0 0 400 400" fill="none" aria-hidden="true">
              <path d="M50 350 L200 50 L350 280 Z" stroke="currentColor" strokeWidth="14" />
            </svg>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-copper/10">
              <svg className="w-8 h-8 text-copper" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <path d="M6 18 A14 14 0 0 1 34 18 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <line x1="20" y1="6" x2="20" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="20" y1="18" x2="20" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M13 34 a7 4 0 0 1 14 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <h3 className="mt-4 font-heading text-xl font-semibold text-charcoal">Patio shade sails</h3>
            <p className="mt-3 text-charcoal/70 leading-relaxed">
              A patio shade sail turns your patio into an outdoor room you can
              use at noon in July. We attach to the house where the structure
              allows it, or set clean steel poles, and the sail rides above
              your space.
            </p>
            <CardCta href={ctaHref} />
          </div>
        </div>

        {withCommercial && (
          <div className="mt-6 grid overflow-hidden rounded-2xl border border-charcoal/5 bg-cream transition-all duration-200 hover:-translate-y-1 hover:shadow-md md:grid-cols-5">
            <div className="relative aspect-[16/10] md:col-span-2 md:aspect-auto md:min-h-[300px]">
              <Image
                src="/images/gallery-ws-50.webp"
                alt="Custom commercial shade sail install in the Phoenix metro"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative overflow-hidden p-7 md:col-span-3 md:p-9 md:flex md:flex-col md:justify-center">
              <svg className="absolute -bottom-6 -right-6 w-32 h-32 text-charcoal/[0.04]" viewBox="0 0 400 400" fill="none" aria-hidden="true">
                <path d="M50 350 L200 50 L350 280 Z" stroke="currentColor" strokeWidth="14" />
              </svg>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-copper/10">
                <BusinessIcon className="w-8 h-8 text-copper" />
              </span>
              <h3 className="mt-4 font-heading text-xl font-semibold text-charcoal">Commercial spaces</h3>
              <p className="mt-3 text-charcoal/70 leading-relaxed">
                Engineered shade for patios, venues, courtyards, and outdoor
                seating that keeps guests and staff comfortable through the
                Phoenix midday heat.
              </p>
              <div>
                <CardCta href={ctaHref} />
              </div>
            </div>
          </div>
        )}

        {/* Or give us a challenge (operator: thin elongated card, positive frame) */}
        <div className="mt-8 relative overflow-hidden rounded-2xl bg-charcoal px-8 py-7 sm:flex items-center justify-between gap-8">
          <svg className="absolute -top-10 -right-8 w-48 h-48 text-white/[0.05]" viewBox="0 0 400 400" fill="none" aria-hidden="true">
            <path d="M50 350 L200 50 L350 280 Z" stroke="currentColor" strokeWidth="10" />
          </svg>
          <div className="relative">
            <h3 className="font-heading text-2xl font-bold text-white">
              Or&hellip; <span className="text-copper">give us a challenge.</span>
            </h3>
            <p className="mt-2 text-white/70 leading-relaxed max-w-2xl">
              We custom engineer and design every shade structure to fit the
              vision you have for your home, with shade where you need it, when
              you need it, while upgrading the look of your house.
            </p>
          </div>
          <Link
            href={ctaHref}
            className="relative mt-5 sm:mt-0 shrink-0 inline-flex items-center justify-center text-center text-balance px-6 py-3 bg-copper text-white font-semibold rounded-full hover:bg-copper-light transition-colors duration-200"
          >
            <CtaText />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* GALLERY */
export function ResidentialGallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-cream py-20 md:py-28">
      {/* sail-geometry motif (brand thread through the whole page) */}
      <div className="absolute inset-0 opacity-[0.06] text-charcoal" aria-hidden="true">
        <svg className="absolute -top-12 -left-16 w-[420px] h-[420px]" viewBox="0 0 400 400" fill="none">
          <path d="M50 350 L200 50 L350 280 Z" stroke="currentColor" strokeWidth="2" />
          <path d="M85 330 L210 95 L325 270 Z" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute -bottom-14 -right-16 w-[380px] h-[380px]" viewBox="0 0 400 400" fill="none">
          <path d="M50 350 L200 50 L350 280 Z" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-copper/10">
            <svg className="w-10 h-10 text-copper" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <path d="M10 32 L10 20 L20 12 L30 20 L30 32 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <rect x="17" y="24" width="6" height="8" stroke="currentColor" strokeWidth="2" />
              <path d="M6 8 L20 4 L34 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="6" y1="8" x2="6" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="34" y1="10" x2="34" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span className="block text-sm font-semibold uppercase tracking-widest text-copper">
            Shade sail ideas
          </span>
          <h2 className="mt-3 font-heading text-4xl sm:text-5xl font-bold text-charcoal tracking-tight">
            Ideas for your <span className="italic text-copper">backyard</span>
          </h2>
          <p className="mt-4 text-lg text-charcoal/70 leading-relaxed">
            Every sail we build is custom designed and installed for the home it sits over.
          </p>
        </div>

        <div className="mt-12">
          <Lightbox
            images={gallery.map((src) => ({
              src,
              alt: "Residential shade sail design idea",
            }))}
            gridClassName="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            itemClassName="relative aspect-square overflow-hidden rounded-xl bg-charcoal/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-copper/60 focus:ring-offset-2"
            imageSizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
      </div>
    </section>
  );
}

/* VALUE STACK (moved here, after gallery) */
export function ValueStack() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* sail-geometry motif (same family as the hero + What We Shade) */}
      <div className="absolute inset-0 opacity-[0.06] text-charcoal" aria-hidden="true">
        <svg className="absolute -top-14 -left-16 w-[400px] h-[400px]" viewBox="0 0 400 400" fill="none">
          <path d="M50 350 L200 50 L350 280 Z" stroke="currentColor" strokeWidth="2" />
          <path d="M85 330 L210 95 L325 270 Z" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute -bottom-12 -right-14 w-[360px] h-[360px]" viewBox="0 0 400 400" fill="none">
          <path d="M50 350 L200 50 L350 280 Z" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-copper">
            The Apex difference
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            A shade sail that is <em className="not-italic text-copper">actually built</em> for your backyard or patio
          </h2>
          <p className="mt-4 text-lg text-copper italic leading-relaxed">
            Not an off-the-shelf canopy. Every sail is measured, engineered, and installed for your exact layout and sun angles, from backyard sails to patio shade covers to full sun shades for your yard.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-white p-7 shadow-sm border border-charcoal/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-copper/20 text-center"
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-copper/10">
                {p.icon}
              </span>
              {p.href ? (
                <Link href={p.href} className="block font-heading text-xl font-semibold text-charcoal hover:text-copper transition-colors">
                  {p.title}
                </Link>
              ) : (
                <h3 className="font-heading text-xl font-semibold text-charcoal">{p.title}</h3>
              )}
              <p className="mt-3 text-charcoal/70 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* FAQ (AEO: rendered Q&A mirrors /residential's FAQPage JSON-LD exactly) */
export function ResidentialFaq() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <div className="text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-copper">
            Straight answers
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            Phoenix shade sail questions, <span className="text-copper">answered</span>
          </h2>
        </div>
        <div className="mt-10 space-y-4">
          {RESIDENTIAL_FAQS.map((f) => (
            <details key={f.q} className="group rounded-2xl bg-white border border-charcoal/5 shadow-sm px-6 py-5 transition-colors duration-200 hover:border-copper/25 open:border-copper/25">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-heading text-lg font-semibold text-charcoal">
                {f.q}
                <span className="shrink-0 text-copper text-2xl leading-none transition-transform duration-200 group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 text-charcoal/70 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* FINAL CTA */
export function ResidentialFinalCta({ ctaHref = "/contact" }: { ctaHref?: string }) {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
          Ready to make your backyard usable again?
        </h2>
        {/* sm:items-start keeps the Call button TOP level with the primary
            even though the primary carries a descriptor line beneath it. */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-start">
          <div className="flex flex-col items-center">
            <Link
              href={ctaHref}
              className="cta-glow-loop inline-flex items-center justify-center text-center text-balance px-9 py-4 bg-copper text-white text-lg font-semibold rounded-full hover:bg-copper-light transition-colors duration-200"
            >
              <CtaText />
            </Link>
            <UnderButtonLine className="mt-2 text-xs uppercase tracking-widest text-white/60" />
          </div>
          <a
            href="tel:+16028370370"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-colors duration-200"
          >
            Call (602) 837-0370
          </a>
        </div>
      </div>
    </section>
  );
}

/* PROCESS TEASER (unchanged) */
export function ProcessTeaser() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            From <em className="not-italic font-bold text-copper text-[1.06em] mx-0.5">first</em> visit to <em className="not-italic font-bold text-copper text-[1.06em] mx-0.5">finished</em> shade
          </h2>
          <p className="mt-4 text-lg text-charcoal/70 leading-relaxed">
            A simple, done-for-you process built around getting it right the first time.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { n: "01", title: "Free design visit", body: "We come to you, measure the space, and run a ShadeCast™ sun analysis on the exact spots you want covered." },
            { n: "02", title: "Custom 3D design", body: "You see a 3D render of your shade sail before anything is built, so you know precisely what you are getting." },
            { n: "03", title: "Engineered install", body: "Our crew sets the footings, raises the sail, and tensions it to handle Phoenix sun and monsoon load." },
          ].map((s) => (
            <div key={s.n} className="relative">
              <span className="font-heading text-5xl font-bold text-copper/20">{s.n}</span>
              <h3 className="mt-3 font-heading text-xl font-semibold text-charcoal">{s.title}</h3>
              <p className="mt-3 text-charcoal/70 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/process" className="text-copper font-semibold hover:text-copper-dark transition-colors">
            See our full process &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
