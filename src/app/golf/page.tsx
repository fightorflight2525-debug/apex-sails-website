import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Golf & Entertainment Shade Solutions | Apex Sail Shades",
  description:
    "Engineered shade sails for driving ranges, golf entertainment venues, pickleball complexes, and resort pools. Recover lost midday revenue with 96% UV block, 15°F cooler temps, and zero-downtime installation.",
};

export default function GolfPage() {
  return (
    <>
      {/* ===== SECTION 1: HERO ===== */}
      <section className="relative overflow-hidden bg-charcoal pt-32 pb-20 md:pb-28">
        {/* Hero background image */}
        <Image
          src="/images/gallery-desert-mountains.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        {/* Geometric pattern overlay */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <svg
            className="absolute top-0 left-0 h-full w-full opacity-[0.04]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="hero-grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M60 0L0 60M45 0L0 45M60 15L15 60M30 0L0 30M60 30L30 60"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
          {/* Copper accent glow */}
          <div className="absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-copper opacity-10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Recapture 100% Of Your{" "}
              <span className="text-copper-light">Midday Revenue</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
              Your driving bays sit empty from 11 AM to 4 PM while Arizona&apos;s
              sun drives customers away. Engineered shade sails bring them
              back&nbsp;&mdash; guaranteed.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-copper px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-copper-dark hover:shadow-xl sm:text-lg"
              >
                Get Your Free Revenue Analysis
              </Link>
            </div>
          </div>

          {/* Stat bar */}
          <div className="mx-auto mt-16 max-w-2xl">
            <div className="grid grid-cols-1 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              <div className="px-6 py-5 text-center">
                <p className="font-heading text-sm font-bold tracking-wide text-copper-light">
                  Big Shots Golf Trusted
                </p>
              </div>
              <div className="px-6 py-5 text-center">
                <p className="font-heading text-sm font-bold tracking-wide text-copper-light">
                  15&deg;F Cooler
                </p>
              </div>
              <div className="px-6 py-5 text-center">
                <p className="font-heading text-sm font-bold tracking-wide text-copper-light">
                  Zero Downtime Install
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: PROBLEM AGITATION ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-charcoal sm:text-4xl lg:text-5xl">
              The{" "}
              <span className="text-copper">$180,000 Problem</span> You Can See
              From The Parking Lot
            </h2>
          </div>

          {/* Revenue loss calculator card */}
          <div className="mx-auto mt-14 max-w-2xl">
            <div className="overflow-hidden rounded-2xl border border-cream-dark bg-cream shadow-sm">
              <div className="bg-charcoal px-6 py-4">
                <h3 className="font-heading text-sm font-bold tracking-wider text-copper-light uppercase">
                  Revenue Loss Calculator
                </h3>
              </div>
              <div className="px-6 py-8 sm:px-10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-cream-dark pb-4">
                    <span className="font-body text-sm text-charcoal-light sm:text-base">
                      Empty bays during peak sun
                    </span>
                    <span className="font-heading text-lg font-bold text-charcoal sm:text-xl">
                      10 bays
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-cream-dark pb-4">
                    <span className="font-body text-sm text-charcoal-light sm:text-base">
                      Average revenue per bay/hour
                    </span>
                    <span className="font-heading text-lg font-bold text-charcoal sm:text-xl">
                      $50/hr
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-cream-dark pb-4">
                    <span className="font-body text-sm text-charcoal-light sm:text-base">
                      Lost hours per day (11 AM&ndash;4 PM)
                    </span>
                    <span className="font-heading text-lg font-bold text-charcoal sm:text-xl">
                      4 hours
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-cream-dark pb-4">
                    <span className="font-body text-sm text-charcoal-light sm:text-base">
                      Peak-season days
                    </span>
                    <span className="font-heading text-lg font-bold text-charcoal sm:text-xl">
                      90 days
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between rounded-xl bg-charcoal px-6 py-5">
                  <span className="font-heading text-sm font-semibold tracking-wide text-white/80 uppercase">
                    Lost Revenue / Season
                  </span>
                  <span className="font-heading text-2xl font-bold text-copper-light sm:text-3xl">
                    $180,000
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Pain points */}
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      />
                    </svg>
                  ),
                  text: "Bays sit empty during peak sun hours",
                },
                {
                  icon: (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z"
                      />
                    </svg>
                  ),
                  text: "Equipment overheats, clubs become untouchable",
                },
                {
                  icon: (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>
                  ),
                  text: "Guests leave early \u2014 shorter sessions, less F&B spend",
                },
                {
                  icon: (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      />
                    </svg>
                  ),
                  text: "Competing venues with shade capture your customers",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-xl border border-cream-dark bg-cream/50 p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-copper/10 text-copper">
                    {item.icon}
                  </span>
                  <p className="font-body text-base leading-relaxed text-charcoal">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: SOLUTION ===== */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-charcoal sm:text-4xl lg:text-5xl">
              The{" "}
              <span className="text-copper">14-Day</span> Revenue Recovery
              System
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-charcoal-light">
              From first call to full shade in two weeks. Our proven process
              eliminates guesswork and gets your venue earning at full capacity
              before the next heat wave.
            </p>
          </div>

          {/* Process timeline */}
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  days: "Day 1\u20133",
                  title: "ShadeCast\u2122 Analysis",
                  desc: "3D site scan and sun-path simulation to map every shadow across your venue.",
                },
                {
                  days: "Day 4\u20137",
                  title: "Engineering & Permits",
                  desc: "Structural calcs, wind-load modeling, and permit submission handled in full.",
                },
                {
                  days: "Day 8\u201312",
                  title: "Fabrication",
                  desc: "Marine-grade HDPE membranes cut and reinforced at our Arizona facility.",
                },
                {
                  days: "Day 13\u201314",
                  title: "Installation",
                  desc: "Overnight crews install while your venue stays open. Zero lost operating hours.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl border border-cream-dark bg-white p-6 shadow-sm"
                >
                  <span className="inline-block rounded-full bg-copper px-3 py-1 text-xs font-bold tracking-wide text-white">
                    {step.days}
                  </span>
                  <h3 className="font-heading mt-4 text-lg font-bold text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-light">
                    {step.desc}
                  </p>
                  {/* Connector line (hidden on last item and mobile) */}
                  {i < 3 && (
                    <div className="absolute top-10 -right-3 hidden h-0.5 w-6 bg-copper/30 lg:block" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Key features */}
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ),
                  text: "Cantilever designs \u2014 no columns blocking bay sight lines",
                },
                {
                  icon: (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                  text: "96% UV block with 15\u00b0F temperature reduction",
                },
                {
                  icon: (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                  ),
                  text: "90mph+ wind-rated engineering",
                },
                {
                  icon: (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                  text: "Zero operations disruption during installation",
                },
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-copper/10 text-copper">
                    {feature.icon}
                  </span>
                  <p className="font-body text-base leading-relaxed text-charcoal">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: BIG SHOTS GOLF CASE STUDY ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-heading text-sm font-bold tracking-wider text-copper uppercase">
              Case Study
            </p>
            <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl lg:text-5xl">
              Proven At Big Shots Golf St. George
            </h2>
          </div>

          {/* Installation cards */}
          <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-2">
            {/* Installation 1 */}
            <div className="overflow-hidden rounded-2xl border border-cream-dark bg-cream/30">
              {/* Photo */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src="/images/pizza-hut-commercial.jpg"
                  alt="Commercial shade sail installation - aerial drone shot"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-charcoal">
                  Installation 1
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-medium text-charcoal-light uppercase tracking-wide">
                      Coverage
                    </p>
                    <p className="font-heading mt-1 text-xl font-bold text-charcoal">
                      33,000+ sq ft
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-charcoal-light uppercase tracking-wide">
                      Project Value
                    </p>
                    <p className="font-heading mt-1 text-xl font-bold text-copper">
                      $66K
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Installation 2 */}
            <div className="overflow-hidden rounded-2xl border border-cream-dark bg-cream/30">
              {/* Photo */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src="/images/commercial-patio-seating.jpg"
                  alt="Commercial patio with shade sails and outdoor seating"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-charcoal">
                  Installation 2
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-medium text-charcoal-light uppercase tracking-wide">
                      Coverage
                    </p>
                    <p className="font-heading mt-1 text-xl font-bold text-charcoal">
                      33,000+ sq ft
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-charcoal-light uppercase tracking-wide">
                      Project Value
                    </p>
                    <p className="font-heading mt-1 text-xl font-bold text-copper">
                      $66K
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Totals */}
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="grid grid-cols-2 gap-6 rounded-2xl border border-cream-dark bg-cream p-6 sm:p-8">
              <div className="text-center">
                <p className="text-xs font-medium text-charcoal-light uppercase tracking-wide">
                  Total Project Value
                </p>
                <p className="font-heading mt-2 text-3xl font-bold text-copper sm:text-4xl">
                  $132K
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs font-medium text-charcoal-light uppercase tracking-wide">
                  Total Shade Coverage
                </p>
                <p className="font-heading mt-2 text-3xl font-bold text-charcoal sm:text-4xl">
                  66,000+ sq ft
                </p>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="mx-auto mt-12 max-w-2xl text-center">
            <svg
              className="mx-auto h-8 w-8 text-copper/30"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>
            <blockquote className="mt-4 text-lg italic leading-relaxed text-charcoal sm:text-xl">
              &ldquo;Two large-scale shade installations completed for Big Shots Golf St. George&apos;s driving range facility. Over 66,000 square feet of engineered shade coverage installed across both structures, enabling full bay utilization during peak summer months. Our ShadeCast&#8482; software was instrumental in optimizing shadow placement for maximum afternoon coverage.&rdquo;
            </blockquote>
            <p className="mt-4 text-sm font-medium text-charcoal-light">
              &mdash; Big Shots Golf St. George, 2024
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: GUARANTEES ===== */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Guarantees That{" "}
              <span className="text-copper-light">Eliminate Risk</span>
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-8 lg:grid-cols-2">
            {/* Guarantee 1 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-copper/20">
                <svg
                  className="h-7 w-7 text-copper-light"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <h3 className="font-heading mt-6 text-xl font-bold text-white">
                The Permit Shield
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/70">
                If the city rejects our design, you get 100% of your engineering
                deposit back. Period. We handle all municipal requirements so
                you never carry permit risk.
              </p>
            </div>

            {/* Guarantee 2 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-copper/20">
                <svg
                  className="h-7 w-7 text-copper-light"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading mt-6 text-xl font-bold text-white">
                The 15&deg;F Performance Promise
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/70">
                If the temperature under our sails doesn&apos;t drop at least
                15&deg;F from direct sun, we&apos;ll install cooling misters at
                our cost. No fine print, no exceptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: TECHNOLOGY SPECS ===== */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-heading text-sm font-bold tracking-wider text-copper uppercase">
              Engineering Edge
            </p>
            <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Technology Built For Scale
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.429 9.75m11.142 0l4.179 2.25-4.179 2.25m0 0L12 17.25 6.429 14.25m11.142 0l4.179 2.25L12 21.75l-9.75-5.25 4.179-2.25"
                    />
                  </svg>
                ),
                title: "HyPar Engineering",
                desc: "Hyperbolic paraboloid geometry for spans up to 80 ft without intermediate supports.",
              },
              {
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
                title: "Leica 3D Mapping",
                desc: "Sub-millimeter site scans ensure perfect fitment on the first install attempt.",
              },
              {
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                ),
                title: "ShadeCast\u2122",
                desc: "Proprietary sun-path simulation visualizes shade coverage before a single post goes in.",
              },
              {
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.42 15.17l-5.1-5.1m0 0L12 4.37m-5.68 5.7h11.8M4.26 19.72A9.965 9.965 0 0112 2.25c5.523 0 10 4.477 10 10a9.965 9.965 0 01-7.74 9.72"
                    />
                  </svg>
                ),
                title: "Marine-Grade Hardware",
                desc: "316 stainless steel fittings and UV-stabilized HDPE fabrics rated for 15+ year service life.",
              },
            ].map((tech, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-copper shadow-sm">
                  {tech.icon}
                </div>
                <h3 className="font-heading mt-5 text-base font-bold text-charcoal">
                  {tech.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-light">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: FINAL CTA ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-copper via-copper to-copper-dark py-20 md:py-28">
        {/* Subtle pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden="true">
          <svg
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="cta-dots"
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-dots)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Stop Losing Revenue To The Sun
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Limited Arizona installation slots available this quarter. Lock in
              your project timeline before peak season begins.
            </p>
            <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-white px-8 py-4 text-base font-semibold text-copper shadow-lg transition-all duration-300 hover:bg-cream hover:shadow-xl sm:text-lg"
              >
                Get Your Free Revenue Analysis
              </Link>
            </div>
            <p className="mt-8 text-base font-medium text-white/90">
              Or call us directly:{" "}
              <a
                href="tel:+16027275107"
                className="underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
              >
                (602) 727-5107
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
