import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import StatsBand from "@/components/StatsBand";
import StickyCallBar from "@/components/StickyCallBar";
import Lightbox from "@/components/Lightbox";

export const metadata: Metadata = {
  title: "Residential Shade Sails Phoenix | Apex Sail Shades",
  description:
    "Custom-engineered backyard shade sails for Phoenix homes. Designed and installed in one visit, built for 110°F sun and monsoon winds. Free design visit. Most projects $5,000 to $8,000.",
};

type ValueProp = {
  title: string;
  body: string;
  icon: ReactNode;
  href?: string;
};

const valueProps: ValueProp[] = [
  {
    title: "Designed in one visit",
    href: "/process",
    body: "We measure, design, and quote your backyard in a single on-site visit. No drawn-out back and forth.",
    icon: (
      <svg className="w-10 h-10 text-copper" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        {/* Calendar with checkmark */}
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
        {/* Sun with rays + ground baseline */}
        <circle cx="20" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
        <line x1="20" y1="4" x2="20" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="25" x2="20" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="16" x2="11" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="29" y1="16" x2="32" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="11.5" y1="7.5" x2="13.5" y2="9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="26.5" y1="7.5" x2="28.5" y2="9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="11.5" y1="24.5" x2="13.5" y2="22.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="26.5" y1="24.5" x2="28.5" y2="22.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="4" y1="34" x2="36" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Built for Phoenix",
    body: "Engineered for 110°F summers and 60+ mph monsoon winds. Marine-grade 316 stainless hardware on every install.",
    icon: (
      <svg className="w-10 h-10 text-copper" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        {/* Desert mountains + sun */}
        <path d="M3 30 L12 16 L18 24 L26 12 L37 30 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="29" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
        <line x1="3" y1="30" x2="37" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "96% UV protection",
    body: "Commercial-grade fabric blocks up to 96% of UV and drops the temperature beneath by up to 15°F.",
    icon: (
      <svg className="w-10 h-10 text-copper" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        {/* Shield with sun inside */}
        <path d="M20 4 L32 9 L32 20 C32 28 26 33 20 36 C14 33 8 28 8 20 L8 9 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="20" cy="18" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <line x1="20" y1="10" x2="20" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="20" y1="24" x2="20" y2="26" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="12" y1="18" x2="14" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="26" y1="18" x2="28" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "10-year fabric warranty",
    body: "We stand behind the materials and the workmanship, so your patio stays protected season after season.",
    icon: (
      <svg className="w-10 h-10 text-copper" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        {/* Shield with checkmark (mirrors StatsBand warranty icon) */}
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
        {/* Certificate with seal + ribbon */}
        <rect x="6" y="6" width="28" height="22" rx="2" stroke="currentColor" strokeWidth="2" />
        <line x1="10" y1="13" x2="22" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="28" cy="18" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M20 28 L20 36 L23 33 L26 36 L26 28" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
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

const steps = [
  {
    n: "01",
    title: "Free design visit",
    body: "We come to you, measure the space, and run a ShadeCast™ sun analysis on the exact spots you want covered.",
  },
  {
    n: "02",
    title: "Custom 3D design",
    body: "You see a 3D render of your shade sail before anything is built, so you know precisely what you are getting.",
  },
  {
    n: "03",
    title: "Engineered install",
    body: "Our crew sets the footings, raises the sail, and tensions it to handle Phoenix sun and monsoon load.",
  },
];

export default function ResidentialPage() {
  return (
    <>
      {/* ===== SECTION 1: HERO ===== */}
      <section className="relative overflow-hidden bg-charcoal pt-32 pb-20 md:pb-28">
        <Image
          src="/images/residential-hero.webp"
          alt="Custom residential shade sail over a Phoenix backyard patio"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/65 via-charcoal/40 to-charcoal md:from-charcoal/85 md:via-charcoal/60 md:to-charcoal" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-sand">
              Residential shade sails
            </span>
            <h1 className="mt-4 font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Take Your Phoenix Backyard Back From the Heat
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/75 max-w-2xl leading-relaxed font-body">
              Custom shade sails, designed and installed in one visit. Keep your
              patio, pool, and play space usable all summer long, engineered for
              110°F sun and monsoon winds.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cta-glow-loop inline-flex items-center justify-center px-8 py-4 bg-copper text-white text-lg font-semibold rounded-full hover:bg-copper-light transition-colors duration-200"
              >
                Get My <em className="not-italic font-bold text-[1.08em] mx-1">Free</em> 3D Design + Visit
              </Link>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-colors duration-200"
              >
                See Our Work
              </a>
            </div>

            <p className="mt-8 text-sm text-white/55 font-body">
              Phoenix family-owned · One-visit design · 10-year fabric warranty
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 1.5: STATS BAND  (shared StatsBand; R14 parity with home) ===== */}
      <StatsBand />

      {/* ===== SECTION 2: VALUE STACK ===== */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              A shade sail that is actually built for your backyard
            </h2>
            <p className="mt-4 text-lg text-copper italic leading-relaxed">
              A shade sail built for your backyard, not an off-the-shelf canopy. A custom-engineered sail designed to cover your space and block the sun.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueProps.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl bg-white p-7 shadow-sm border border-charcoal/5 transition-transform duration-200 hover:-translate-y-1 text-center"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-copper/10">
                  {p.icon}
                </span>
                {p.href ? (
                  <Link
                    href={p.href}
                    className="block font-heading text-xl font-semibold text-charcoal hover:text-copper transition-colors"
                  >
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

      {/* ===== SECTION 3: PRICE TRANSPARENCY ===== */}
      <section className="bg-charcoal py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-sand">
            Transparent pricing
          </span>
          <p className="mt-4 font-heading text-3xl sm:text-4xl font-bold text-white">
            Most residential projects run $5,000 to $8,000
          </p>
          <p className="mt-4 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Your exact price depends on size, layout, and pole configuration. We
            give you a clear, itemized quote at your free design visit, with no
            surprises.
          </p>
        </div>
      </section>

      {/* ===== SECTION 4: GALLERY ===== */}
      <section id="gallery" className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-copper/10">
              <svg className="w-10 h-10 text-copper" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                {/* House with shade triangle above */}
                <path d="M10 32 L10 20 L20 12 L30 20 L30 32 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <rect x="17" y="24" width="6" height="8" stroke="currentColor" strokeWidth="2" />
                <path d="M6 8 L20 4 L34 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="6" y1="8" x2="6" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="34" y1="10" x2="34" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-copper tracking-tight">
              Real backyards we have shaded
            </h2>
            <p className="mt-4 text-lg text-charcoal/70 leading-relaxed">
              Every sail is custom designed and installed for the home it sits
              over.
            </p>
          </div>

          <div className="mt-12">
            <Lightbox
              images={gallery.map((src) => ({
                src,
                alt: "Custom residential shade sail installation in the Phoenix metro",
              }))}
              gridClassName="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              itemClassName="relative aspect-square overflow-hidden rounded-xl bg-charcoal/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-copper/60 focus:ring-offset-2"
              imageSizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: PROCESS ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              From <em className="not-italic font-bold text-copper text-[1.06em] mx-0.5">first</em> visit to <em className="not-italic font-bold text-copper text-[1.06em] mx-0.5">finished</em> shade
            </h2>
            <p className="mt-4 text-lg text-charcoal/70 leading-relaxed">
              A simple, done-for-you process built around getting it right the
              first time.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <span className="font-heading text-5xl font-bold text-copper/20">
                  {s.n}
                </span>
                <h3 className="mt-3 font-heading text-xl font-semibold text-charcoal">
                  {s.title}
                </h3>
                <p className="mt-3 text-charcoal/70 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/process"
              className="text-copper font-semibold hover:text-copper-dark transition-colors"
            >
              See our full process →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: FINAL CTA ===== */}
      <section className="relative overflow-hidden bg-charcoal py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Ready to make your backyard usable again?
          </h2>
          <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Book a free design visit and we will show you exactly where your
            shade should go, and what it will cost, before you commit to
            anything.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="cta-glow-loop inline-flex items-center justify-center px-8 py-4 bg-copper text-white text-lg font-semibold rounded-full hover:bg-copper-light transition-colors duration-200"
            >
              Get My <em className="not-italic font-bold text-[1.08em] mx-1">Free</em> 3D Design + Visit
            </Link>
            <a
              href="tel:+16028370370"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-colors duration-200"
            >
              Call (602) 837-0370
            </a>
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <StickyCallBar />
    </>
  );
}
