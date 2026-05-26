import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ShadeCastDemo from "@/components/ShadeCastDemo";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import StickyCallBar from "@/components/StickyCallBar";

export const metadata: Metadata = {
  title: "Apex Sail Shades | Custom Shade Sails for Phoenix Homes & Businesses",
  description:
    "Custom-engineered shade sails for Phoenix homes and businesses. Designed and installed in one visit, built for 110°F sun and monsoon winds. Get a free design visit.",
};

export default function Home() {
  return (
    <>
      {/* ============================================================
          SECTION 1: HERO  (LCP element, rendered immediately, NOT motion-gated)
          ============================================================ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-charcoal">
        {/* Hero background image: priority, sized, no fade-in */}
        <Image
          src="/images/hero-shade-sail.webp"
          alt="Custom shade sail over a Phoenix backyard patio"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal-light/60 to-charcoal" />

        {/* Geometric sail-shape SVG motif (decorative) */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg
            className="absolute top-20 -left-20 w-[600px] h-[600px]"
            viewBox="0 0 600 600"
            fill="none"
            aria-hidden="true"
          >
            <path d="M100 500 L300 100 L500 400 Z" stroke="white" strokeWidth="1.5" />
            <path d="M150 480 L320 150 L480 380 Z" stroke="white" strokeWidth="0.75" />
          </svg>
          <svg
            className="absolute top-40 right-0 w-[500px] h-[500px]"
            viewBox="0 0 500 500"
            fill="none"
            aria-hidden="true"
          >
            <path d="M50 450 L250 50 L450 350 Z" stroke="white" strokeWidth="1.5" />
            <path d="M80 420 L260 100 L420 330 Z" stroke="white" strokeWidth="0.75" />
          </svg>
          <svg
            className="absolute bottom-10 left-1/3 w-[400px] h-[400px]"
            viewBox="0 0 400 400"
            fill="none"
            aria-hidden="true"
          >
            <path d="M50 350 L200 50 L350 280 Z" stroke="white" strokeWidth="1" />
          </svg>
        </div>

        {/* Subtle radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-copper/5 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20 w-full">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-sand">
              Phoenix shade sail specialists
            </span>
            <h1 className="mt-4 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Custom Shade Sails, Built for Phoenix Heat.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed font-body">
              Custom-engineered shade sails, designed and installed in one visit.
              Cooler patios, protected pools, shaded commercial spaces.
            </p>

            {/* Dual CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-copper text-white text-lg font-semibold rounded-full hover:bg-copper-light transition-colors duration-200"
              >
                Get a Free Design Visit
              </Link>
              <a
                href="#work"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-colors duration-200"
              >
                See Our Work
              </a>
            </div>

            {/* Trust line */}
            <p className="mt-8 text-sm text-white/45 tracking-wide">
              Residential and commercial &middot; Built for 110&deg;F sun and
              monsoon winds
            </p>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />
      </section>

      {/* ============================================================
          SECTION 2: 4-ICON VALUE BAR  (reused; numbers count up on scroll-in)
          ============================================================ */}
      <section className="bg-cream py-10 sm:py-12 border-b border-sand/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {/* 96% UV Block */}
            <div className="flex flex-col items-center text-center gap-3">
              <svg className="w-10 h-10 text-copper" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <circle cx="20" cy="16" r="8" stroke="currentColor" strokeWidth="2" />
                <line x1="20" y1="4" x2="20" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="20" y1="24" x2="20" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="8" y1="16" x2="12" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="28" y1="16" x2="32" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 30 L28 30 L24 34 L16 34 Z" fill="currentColor" opacity="0.3" />
                <path d="M14 26 L26 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div>
                <p className="text-xl font-heading font-bold text-charcoal">
                  <CountUp to={96} suffix="% UV Block" />
                </p>
                <p className="text-sm text-charcoal/50 mt-0.5">Maximum protection</p>
              </div>
            </div>

            {/* 15 deg F Cooler */}
            <div className="flex flex-col items-center text-center gap-3">
              <svg className="w-10 h-10 text-copper" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <rect x="17" y="4" width="6" height="26" rx="3" stroke="currentColor" strokeWidth="2" />
                <circle cx="20" cy="32" r="5" stroke="currentColor" strokeWidth="2" />
                <rect x="19" y="14" width="2" height="16" rx="1" fill="currentColor" />
                <circle cx="20" cy="32" r="3" fill="currentColor" />
                <line x1="26" y1="12" x2="30" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="26" y1="18" x2="29" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="26" y1="24" x2="30" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <div>
                <p className="text-xl font-heading font-bold text-charcoal">
                  <CountUp to={15} suffix={"°F Cooler"} />
                </p>
                <p className="text-sm text-charcoal/50 mt-0.5">Under shade coverage</p>
              </div>
            </div>

            {/* 10-Year Warranty */}
            <div className="flex flex-col items-center text-center gap-3">
              <svg className="w-10 h-10 text-copper" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <path d="M20 4 L32 10 L32 22 C32 30 26 36 20 38 C14 36 8 30 8 22 L8 10 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <polyline points="14,20 18,24 26,16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <p className="text-xl font-heading font-bold text-charcoal">
                  <CountUp to={10} suffix="-Year Warranty" />
                </p>
                <p className="text-sm text-charcoal/50 mt-0.5">Fabric &amp; structure</p>
              </div>
            </div>

            {/* 90mph Wind Rating */}
            <div className="flex flex-col items-center text-center gap-3">
              <svg className="w-10 h-10 text-copper" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <path d="M6 14 L26 14 C30 14 34 11 34 8 C34 5 30 2 26 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M6 22 L30 22 C34 22 37 25 37 28 C37 31 34 34 30 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M6 30 L18 30 C21 30 24 33 24 35 C24 37 21 39 18 37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div>
                <p className="text-xl font-heading font-bold text-charcoal">
                  <CountUp to={90} suffix="mph Wind Rating" />
                </p>
                <p className="text-sm text-charcoal/50 mt-0.5">Engineered to endure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: CHOOSE-YOUR-PATH SPLIT  (dual-ICP harmony)
          ============================================================ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
              Shade for your home or your business
            </h2>
            <p className="mt-4 text-lg text-charcoal/60 max-w-2xl mx-auto leading-relaxed">
              One Phoenix team, two specialties. Tell us which space you want to
              take back from the sun.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* For Your Home */}
            <Reveal>
              <Link
                href="/residential"
                className="group block overflow-hidden rounded-2xl border-2 border-sand/40 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/5 hover:border-copper"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/home-card-ws22.webp"
                    alt="Custom shade sail over a residential backyard patio"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 sm:p-10">
                  <p className="text-sm font-semibold uppercase tracking-widest text-copper">
                    For Your Home
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-charcoal group-hover:text-copper transition-colors">
                    Cooler outdoor living
                  </h3>
                  <p className="mt-3 text-charcoal/60 leading-relaxed">
                    Custom backyard shade sails that keep your patio, pool, and
                    play space usable all summer. Most residential projects run
                    $5,000 to $8,000.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-copper font-semibold transition-all group-hover:gap-3">
                    Explore Residential
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>

            {/* For Your Business */}
            <Reveal delay={0.08}>
              <Link
                href="/commercial"
                className="group block overflow-hidden rounded-2xl border-2 border-sand/40 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/5 hover:border-copper"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/business-card-ws06.webp"
                    alt="Large-scale commercial shade sails over an outdoor venue"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 sm:p-10">
                  <p className="text-sm font-semibold uppercase tracking-widest text-copper">
                    For Your Business
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-charcoal group-hover:text-copper transition-colors">
                    Comfortable, shaded spaces
                  </h3>
                  <p className="mt-3 text-charcoal/60 leading-relaxed">
                    Engineered shade for patios, venues, courtyards, and outdoor
                    seating that keeps guests and staff comfortable through the
                    Phoenix midday heat.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-copper font-semibold transition-all group-hover:gap-3">
                    Explore Commercial
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: PROOF STRIP  (real proof only; LOCKED header)
          ============================================================ */}
      <section id="work" className="bg-cream py-20 sm:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className="text-center mb-14">
            <p className="text-copper font-semibold tracking-wide uppercase text-sm mb-3">
              Our Work
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
              Trusted by Phoenix businesses and homeowners
            </h2>
            <p className="mt-4 text-lg text-charcoal/60 max-w-2xl mx-auto leading-relaxed">
              Real projects, real numbers. From single-family backyards to
              large-scale commercial installs.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Showcase image (product showcase, not captioned as a named job) */}
            <Reveal>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-sand/30">
                <Image
                  src="/images/showcase-commercial-ws48.webp"
                  alt="Commercial-grade engineered shade sails over a building entrance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4">
                  <p className="text-white/90 text-sm font-medium">
                    Commercial-grade shade, engineered for desert heat
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Real proof stats */}
            <Reveal delay={0.08} className="space-y-6">
              <div className="rounded-2xl bg-white p-7 sm:p-8 border border-sand/40 shadow-sm">
                <p className="font-heading text-3xl sm:text-4xl font-bold text-copper">
                  1,500 sq ft
                </p>
                <p className="mt-2 font-heading text-lg font-semibold text-charcoal">
                  Whirlwind commercial install, Phoenix
                </p>
                <p className="mt-1 text-charcoal/60 leading-relaxed">
                  A $31,000 engineered commercial shade sail, designed and built
                  for an Arizona business.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-7 sm:p-8 border border-sand/40 shadow-sm">
                <p className="font-heading text-3xl sm:text-4xl font-bold text-copper">
                  $8,000
                </p>
                <p className="mt-2 font-heading text-lg font-semibold text-charcoal">
                  Recent residential close
                </p>
                <p className="mt-1 text-charcoal/60 leading-relaxed">
                  A custom backyard shade sail, measured, designed, and installed
                  for a Phoenix homeowner.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: MECHANISM / DURABILITY CONTRAST  (buying-psychology lever)
          ============================================================ */}
      <section className="bg-charcoal py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className="max-w-3xl mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Not a big-box canopy. Engineered shade that lasts.
            </h2>
            <p className="mt-6 text-lg text-white/65 leading-relaxed">
              A pop-up canopy or off-the-shelf shade sail is built to a price, not
              to a place, and the first real monsoon tends to shred it. Every Apex
              sail is custom-engineered and tensioned for your exact space, then
              anchored to ride out Phoenix sun and storm season.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            <Reveal>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  Custom-engineered and tensioned
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Each sail is designed for its site and tensioned to stay taut and
                  stable, rated for 90 mph wind loads rather than thrown up to a
                  generic template.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  Marine-grade 316 stainless hardware
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Posts, cables, and fittings use marine-grade 316 stainless steel
                  built to handle 110&deg;F summers without rusting or fatiguing
                  out.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  Commercial-grade fabric
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Architectural shade fabric blocks up to 96% of UV and drops the
                  temperature beneath by up to 15&deg;F, backed by a 10-year fabric
                  warranty.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6: SHADECAST  (reused component; design-wow; entrance-animate)
          ============================================================ */}
      <section id="shadecast" className="bg-cream py-20 sm:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: copy */}
            <Reveal>
              <p className="text-copper font-semibold tracking-wide uppercase text-sm mb-3">
                ShadeCast&#8482; 3D design
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal leading-tight">
                See your backyard before we build it
              </h2>
              <p className="mt-6 text-lg text-charcoal/70 leading-relaxed">
                Our ShadeCast&#8482; tool maps the sun across your exact location,
                hour by hour and season by season. You see a custom 3D design of
                your shade before a single post goes in the ground, so you know
                precisely where the shade lands and what you are getting.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "GPS-precise sun mapping for your site",
                  "Hour-by-hour shade visualization",
                  "Seasonal coverage analysis",
                  "A custom 3D design of your space",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-copper flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <polyline points="8,12 11,15 16,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-charcoal/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-10 inline-flex items-center justify-center px-8 py-4 bg-copper text-white text-lg font-semibold rounded-full hover:bg-copper-light transition-colors duration-200"
              >
                Get a Free Design Visit
              </Link>
            </Reveal>

            {/* Right: ShadeCastDemo (entrance-animate only) */}
            <Reveal delay={0.1}>
              <ShadeCastDemo className="w-full" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7: EXPERIENCE BAND  (industry lineage, not entity age)
          ============================================================ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-sand/30">
                <Image
                  src="/images/showcase-craft-ws09.webp"
                  alt="Tensioned shade sails over a finished outdoor space"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-copper font-semibold tracking-wide uppercase text-sm mb-3">
                Experience
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal leading-tight">
                Backed by deep shade-sail experience
              </h2>
              <p className="mt-6 text-lg text-charcoal/70 leading-relaxed">
                Our crews and fabrication partners have engineered and installed
                more than 300,000 square feet of shade since 2018. That depth shows
                up in every footing we pour and every sail we tension.
              </p>
              <div className="mt-8 flex flex-wrap gap-10">
                <div>
                  <p className="font-heading text-4xl font-bold text-copper">
                    <CountUp to={300000} suffix="+" />
                  </p>
                  <p className="mt-1 text-charcoal/60 font-medium">Sq ft shaded</p>
                </div>
                <div>
                  <p className="font-heading text-4xl font-bold text-copper">
                    Since 2018
                  </p>
                  <p className="mt-1 text-charcoal/60 font-medium">Industry experience</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 8A: PROCESS TEASER  (3 of 5 steps -> /process)
          ============================================================ */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className="max-w-2xl">
            <p className="text-copper font-semibold tracking-wide uppercase text-sm mb-3">
              How it works
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              From first visit to finished shade
            </h2>
            <p className="mt-4 text-lg text-charcoal/70 leading-relaxed">
              A simple, done-for-you process built around getting it right the
              first time.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
                body: "Our licensed, insured crew sets the footings, raises the sail, and tensions it to handle Phoenix sun and monsoon load.",
              },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="relative">
                  <span className="font-heading text-5xl font-bold text-copper/20">
                    {s.n}
                  </span>
                  <h3 className="mt-3 font-heading text-xl font-semibold text-charcoal">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-charcoal/70 leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/process"
              className="text-copper font-semibold hover:text-copper-dark transition-colors"
            >
              See our full process &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 8B: FINAL DUAL-CTA BAND
          ============================================================ */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-copper-dark via-copper to-copper-light" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        <div className="absolute inset-0 opacity-[0.06]">
          <svg className="absolute -right-20 -top-20 w-[500px] h-[500px]" viewBox="0 0 500 500" fill="none" aria-hidden="true">
            <path d="M100 450 L250 50 L400 350 Z" stroke="white" strokeWidth="2" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready for shade that is built for Phoenix?
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Talk to a local Phoenix shade specialist, not a call center. Book your
            free design visit and we will show you exactly where your shade should
            go, and what it will cost, before you commit to anything.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-copper text-lg font-bold rounded-full hover:bg-cream transition-colors duration-200 shadow-lg shadow-black/20"
            >
              Get a Free Design Visit
            </Link>
            <a
              href="tel:+16028370370"
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white text-lg font-bold rounded-full hover:bg-white/10 transition-colors duration-200"
            >
              Schedule a Call: (602) 837-0370
            </a>
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <StickyCallBar />
    </>
  );
}
