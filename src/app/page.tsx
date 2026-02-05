import Link from "next/link";
import Image from "next/image";
import ShadeCastDemo from "@/components/ShadeCastDemo";

export default function Home() {
  return (
    <>
      {/* ============================================================
          SECTION 1: HERO
          ============================================================ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-charcoal">
        {/* Hero background image */}
        <Image
          src="/images/hero-bryce-canyon.jpg"
          alt="Commercial shade sail installation with red rock backdrop"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal-light/60 to-charcoal" />

        {/* Geometric sail-shape SVG decorative patterns */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg
            className="absolute top-20 -left-20 w-[600px] h-[600px]"
            viewBox="0 0 600 600"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M100 500 L300 100 L500 400 Z"
              stroke="white"
              strokeWidth="1.5"
            />
            <path
              d="M150 480 L320 150 L480 380 Z"
              stroke="white"
              strokeWidth="0.75"
            />
          </svg>
          <svg
            className="absolute top-40 right-0 w-[500px] h-[500px]"
            viewBox="0 0 500 500"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M50 450 L250 50 L450 350 Z"
              stroke="white"
              strokeWidth="1.5"
            />
            <path
              d="M80 420 L260 100 L420 330 Z"
              stroke="white"
              strokeWidth="0.75"
            />
          </svg>
          <svg
            className="absolute bottom-10 left-1/3 w-[400px] h-[400px]"
            viewBox="0 0 400 400"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M50 350 L200 50 L350 280 Z"
              stroke="white"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Subtle radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-copper/5 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20 w-full">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Engineered Shade That Pays For Itself
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed font-body">
              Commercial shade sail installations for golf courses,
              entertainment venues, and senior living facilities across Arizona &amp; Utah. $100k+ engineered
              solutions&nbsp;&mdash; not backyard canopies.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-copper text-white text-lg font-semibold rounded-full hover:bg-copper-light transition-colors duration-200"
              >
                Get Your Free Shade Analysis
              </Link>
              <Link
                href="#shadecast"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-colors duration-200"
              >
                See How ShadeCast&#8482; Works
              </Link>
            </div>

            {/* Trust line */}
            <p className="mt-8 text-sm text-white/40 tracking-wide">
              Trusted by Crush Golf &bull; 300,000+ sq ft shaded &bull; Since 2018
            </p>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />
      </section>

      {/* ============================================================
          SECTION 2: TRUST BAR
          ============================================================ */}
      <section className="bg-cream py-10 sm:py-12 border-b border-sand/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {/* 96% UV Block */}
            <div className="flex flex-col items-center text-center gap-3">
              <svg
                className="w-10 h-10 text-copper"
                viewBox="0 0 40 40"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="20" cy="16" r="8" stroke="currentColor" strokeWidth="2" />
                <line x1="20" y1="4" x2="20" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="20" y1="24" x2="20" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="8" y1="16" x2="12" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="28" y1="16" x2="32" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 30 L28 30 L24 34 L16 34 Z" fill="currentColor" opacity="0.3" />
                <path d="M14 26 L26 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div>
                <p className="text-xl font-heading font-bold text-charcoal">96% UV Block</p>
                <p className="text-sm text-charcoal/50 mt-0.5">Maximum protection</p>
              </div>
            </div>

            {/* 15 deg F Cooler */}
            <div className="flex flex-col items-center text-center gap-3">
              <svg
                className="w-10 h-10 text-copper"
                viewBox="0 0 40 40"
                fill="none"
                aria-hidden="true"
              >
                <rect x="17" y="4" width="6" height="26" rx="3" stroke="currentColor" strokeWidth="2" />
                <circle cx="20" cy="32" r="5" stroke="currentColor" strokeWidth="2" />
                <rect x="19" y="14" width="2" height="16" rx="1" fill="currentColor" />
                <circle cx="20" cy="32" r="3" fill="currentColor" />
                <line x1="26" y1="12" x2="30" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="26" y1="18" x2="29" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="26" y1="24" x2="30" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <div>
                <p className="text-xl font-heading font-bold text-charcoal">15&deg;F Cooler</p>
                <p className="text-sm text-charcoal/50 mt-0.5">Under shade coverage</p>
              </div>
            </div>

            {/* 10-Year Warranty */}
            <div className="flex flex-col items-center text-center gap-3">
              <svg
                className="w-10 h-10 text-copper"
                viewBox="0 0 40 40"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M20 4 L32 10 L32 22 C32 30 26 36 20 38 C14 36 8 30 8 22 L8 10 Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <polyline
                  points="14,20 18,24 26,16"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <p className="text-xl font-heading font-bold text-charcoal">10-Year Warranty</p>
                <p className="text-sm text-charcoal/50 mt-0.5">Fabric &amp; structure</p>
              </div>
            </div>

            {/* 90mph Wind Rating */}
            <div className="flex flex-col items-center text-center gap-3">
              <svg
                className="w-10 h-10 text-copper"
                viewBox="0 0 40 40"
                fill="none"
                aria-hidden="true"
              >
                <path d="M6 14 L26 14 C30 14 34 11 34 8 C34 5 30 2 26 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M6 22 L30 22 C34 22 37 25 37 28 C37 31 34 34 30 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M6 30 L18 30 C21 30 24 33 24 35 C24 37 21 39 18 37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div>
                <p className="text-xl font-heading font-bold text-charcoal">90mph Wind Rating</p>
                <p className="text-sm text-charcoal/50 mt-0.5">Engineered to endure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: ICP SELECTOR - Who We Serve
          ============================================================ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
              Solutions Built For Your Industry
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Golf & Entertainment */}
            <Link
              href="/golf"
              className="group relative rounded-2xl border-2 border-sand/40 bg-white p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/5 hover:border-copper"
            >
              <div className="mb-6">
                <svg
                  className="w-14 h-14 text-copper"
                  viewBox="0 0 56 56"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="28" cy="44" r="4" fill="currentColor" opacity="0.2" />
                  <line x1="28" y1="8" x2="28" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M28 8 L44 16 L28 22 Z" fill="currentColor" opacity="0.8" />
                  <ellipse cx="20" cy="48" rx="16" ry="3" fill="currentColor" opacity="0.08" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-charcoal group-hover:text-copper transition-colors">
                Golf &amp; Entertainment
              </h3>
              <p className="mt-2 text-xl font-heading text-copper-dark font-semibold">
                Recapture Lost Midday Revenue
              </p>
              <p className="mt-3 text-charcoal/60 leading-relaxed">
                Golf entertainment venues, driving ranges, country clubs, and outdoor
                entertainment complexes. Engineered shade keeps guests playing
                through Arizona&apos;s peak heat hours when unshaded facilities
                lose 60% of midday traffic.
              </p>
              <span className="mt-6 inline-flex items-center text-copper font-semibold group-hover:gap-3 gap-2 transition-all">
                Explore Golf Solutions
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>

            {/* Senior Living */}
            <Link
              href="/senior-living"
              className="group relative rounded-2xl border-2 border-sand/40 bg-white p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/5 hover:border-copper"
            >
              <div className="mb-6">
                <svg
                  className="w-14 h-14 text-copper"
                  viewBox="0 0 56 56"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect x="10" y="20" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="2.5" />
                  <path d="M10 20 L28 8 L46 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="22" y="32" width="12" height="16" rx="1" stroke="currentColor" strokeWidth="2" />
                  <path d="M28 38 L28 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M34 14 C38 14 42 18 42 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <path
                    d="M48 30 C50 28 52 30 50 32 C52 30 54 32 52 34 L50 36 L48 34 C46 32 46 30 48 30"
                    fill="currentColor"
                    opacity="0.6"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-charcoal group-hover:text-copper transition-colors">
                Senior Living
              </h3>
              <p className="mt-2 text-xl font-heading text-copper-dark font-semibold">
                End Seasonal Entrapment
              </p>
              <p className="mt-3 text-charcoal/60 leading-relaxed">
                Assisted living and memory care facilities where residents are
                effectively confined indoors for 6+ months of Arizona summer.
                Shaded courtyards, walkways, and gathering areas restore outdoor
                access and improve quality of life year-round.
              </p>
              <span className="mt-6 inline-flex items-center text-copper font-semibold group-hover:gap-3 gap-2 transition-all">
                Explore Senior Living Solutions
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: SHADECAST
          ============================================================ */}
      <section id="shadecast" className="bg-cream py-20 sm:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text content */}
            <div>
              <p className="text-copper font-semibold tracking-wide uppercase text-sm mb-3">
                ShadeCast&#8482; Proprietary Shadow Analysis
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal leading-tight">
                See Your Shade Before We Build It
              </h2>
              <p className="mt-6 text-lg text-charcoal/70 leading-relaxed">
                Our proprietary ShadeCast&#8482; technology tracks shadow movement
                throughout the day at any location. It shows exactly where shade
                falls at any hour and day of the year&nbsp;&mdash; so you know
                precisely what you&apos;re getting before a single post goes in the
                ground.
              </p>
              <p className="mt-4 text-lg text-charcoal/70 leading-relaxed">
                ShadeCast&#8482; has closed 2 out of every 3 deals we&apos;ve
                presented. When clients see the science, they see the value.
              </p>

              {/* Bullet points */}
              <ul className="mt-8 space-y-4">
                {[
                  "GPS-precise shadow mapping",
                  "Hour-by-hour shade visualization",
                  "Seasonal variation analysis",
                  "Custom to your exact coordinates",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-copper flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
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
                Get Your ShadeCast&#8482; Analysis
              </Link>
            </div>

            {/* Right: ShadeCastDemo component */}
            <div>
              <ShadeCastDemo className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: FEATURED PROJECT
          ============================================================ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section header */}
          <div className="text-center mb-14">
            <p className="text-copper font-semibold tracking-wide uppercase text-sm mb-3">
              Proven At Scale
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
              Crush Golf and Grill
            </h2>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-14">
            <div className="text-center p-6 rounded-xl bg-cream/60 border border-sand/30">
              <p className="font-heading text-3xl sm:text-4xl font-bold text-copper">$132K</p>
              <p className="mt-1 text-charcoal/60 font-medium">Total Project</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-cream/60 border border-sand/30">
              <p className="font-heading text-3xl sm:text-4xl font-bold text-copper">2</p>
              <p className="mt-1 text-charcoal/60 font-medium">Installations</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-cream/60 border border-sand/30">
              <p className="font-heading text-3xl sm:text-4xl font-bold text-copper">66,000</p>
              <p className="mt-1 text-charcoal/60 font-medium">Sq Ft Covered</p>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-lg text-charcoal/70 leading-relaxed">
              Our largest commercial installation to date&nbsp;&mdash; two
              engineered HyPar shade structures covering 66,000 square feet of
              Crush Golf and Grill&apos;s outdoor hitting bays and event areas. Designed to
              withstand Utah&apos;s wind loads while maintaining peak UV protection
              during summer months. Completed on-schedule without disrupting daily
              operations.
            </p>
          </div>

          {/* Project images */}
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-sand/30">
              <Image
                src="/images/bigshots-golf-exterior.jpg"
                alt="Crush Golf and Grill aerial view with shade sails"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4">
                <p className="text-white/90 text-sm font-medium">Crush Golf and Grill</p>
              </div>
            </div>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-sand/30">
              <Image
                src="/images/golf-hero-shaded-bays.jpg"
                alt="Golfers at shaded driving range bays"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4">
                <p className="text-white/90 text-sm font-medium">Shaded Driving Bays In Action</p>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="max-w-3xl mx-auto">
            <blockquote className="relative bg-cream/60 rounded-2xl p-8 sm:p-10 border border-sand/30">
              <svg
                className="absolute top-6 left-6 w-10 h-10 text-copper/20"
                viewBox="0 0 40 40"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10 25 C10 19 14 14 20 12 L18 16 C15 17 13 20 13 23 L18 23 L18 30 L10 30 Z M24 25 C24 19 28 14 34 12 L32 16 C29 17 27 20 27 23 L32 23 L32 30 L24 30 Z" />
              </svg>
              <p className="relative z-10 text-lg sm:text-xl text-charcoal/80 italic leading-relaxed pl-8">
                Two large-scale shade installations completed for Crush Golf and Grill&apos;s driving range facility. Over 66,000 square feet of engineered shade coverage installed across both structures, enabling full bay utilization during peak summer months. Our ShadeCast&#8482; software was instrumental in optimizing shadow placement for maximum afternoon coverage.
              </p>
              <footer className="mt-6 pl-8">
                <p className="text-charcoal font-semibold">&mdash; Crush Golf and Grill, 2024</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5B: PAST PROJECTS / OUR WORK
          ============================================================ */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-copper font-semibold tracking-wide uppercase text-sm mb-3">
              Our Work
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
              Past Projects
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1: Crush Golf and Grill */}
            <div className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/crush-golf-aerial.jpg"
                  alt="Crush Golf and Grill shade sail installation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-charcoal">Crush Golf and Grill</h3>
                <p className="text-copper text-sm font-semibold mt-1">66,000+ sq ft &bull; $132K</p>
                <p className="text-charcoal/60 text-sm mt-2">Two engineered HyPar shade structures covering outdoor hitting bays and event areas.</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/pizza-hut-commercial.jpg"
                  alt="Commercial patio shade sail drone shot"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-charcoal">Commercial Patio</h3>
                <p className="text-copper text-sm font-semibold mt-1">Large-Scale Coverage</p>
                <p className="text-charcoal/60 text-sm mt-2">Engineered shade sails covering outdoor dining and seating areas for commercial venues.</p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/bryce-canyon-shade.jpg"
                  alt="Bryce Canyon shade sail installation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-charcoal">Entertainment Venue</h3>
                <p className="text-copper text-sm font-semibold mt-1">Commercial Grade</p>
                <p className="text-charcoal/60 text-sm mt-2">High-performance shade solutions for outdoor entertainment and recreation facilities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6: TECHNOLOGY
          ============================================================ */}
      <section className="bg-charcoal py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Not Tents. Tensioned Membrane Architecture.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* HyPar Engineering */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
              <div className="mb-6">
                <svg
                  className="w-12 h-12 text-copper"
                  viewBox="0 0 48 48"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 36 Q16 12 24 24 Q32 36 40 12"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <line x1="8" y1="36" x2="8" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="40" y1="12" x2="40" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="24" y1="24" x2="24" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="4" y1="42" x2="44" y2="42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                HyPar Engineering
              </h3>
              <p className="text-white/60 leading-relaxed">
                Hyperbolic Parabola design creates self-draining, wind-resistant
                membrane shapes. Every structure is PE-stamped and engineered for
                90mph+ wind load ratings&nbsp;&mdash; these are permanent
                engineered structures, not temporary fabric covers.
              </p>
            </div>

            {/* Leica 3D Laser Mapping */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
              <div className="mb-6">
                <svg
                  className="w-12 h-12 text-copper"
                  viewBox="0 0 48 48"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" />
                  <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2" />
                  <circle cx="24" cy="24" r="3" fill="currentColor" />
                  <line x1="24" y1="2" x2="24" y2="10" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="24" y1="38" x2="24" y2="46" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="2" y1="24" x2="10" y2="24" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="38" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                Leica 3D Laser Mapping
              </h3>
              <p className="text-white/60 leading-relaxed">
                1/16&quot; measurement accuracy using Leica laser scanning
                technology. We capture every surface contour, slope, and structural
                anchor point before fabrication begins&nbsp;&mdash; ensuring
                precision installation on the first attempt.
              </p>
            </div>

            {/* GORE Tenara Thread */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
              <div className="mb-6">
                <svg
                  className="w-12 h-12 text-copper"
                  viewBox="0 0 48 48"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M16 6 L16 42"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M32 6 L32 42"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 12 C20 12 28 18 32 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 24 C20 24 28 30 32 30"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 36 C20 36 28 42 32 42"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="8" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="40" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                GORE Tenara Thread
              </h3>
              <p className="text-white/60 leading-relaxed">
                Lifetime thread warranty with GORE&#174; Tenara&#174; sewing thread
                that never degrades from UV or moisture. Paired with marine-grade
                316 stainless steel hardware and fittings built to outlast the
                Arizona elements for decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7: FINAL CTA
          ============================================================ */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        {/* Warm gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-copper-dark via-copper to-copper-light" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Subtle geometric accent */}
        <div className="absolute inset-0 opacity-[0.06]">
          <svg
            className="absolute -right-20 -top-20 w-[500px] h-[500px]"
            viewBox="0 0 500 500"
            fill="none"
            aria-hidden="true"
          >
            <path d="M100 450 L250 50 L400 350 Z" stroke="white" strokeWidth="2" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Turn Arizona&apos;s Sun Into Revenue
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Limited Arizona installation slots available this quarter. Beat the
            summer rush&nbsp;&mdash; permitting takes 4&ndash;6 weeks.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-copper text-lg font-bold rounded-full hover:bg-cream transition-colors duration-200 shadow-lg shadow-black/20"
            >
              Get Your Free Assessment
            </Link>
          </div>
          <p className="mt-6 text-white/60">
            Or call us directly:{" "}
            <a
              href="tel:+16027275107"
              className="text-white font-semibold hover:text-cream transition-colors underline underline-offset-2"
            >
              (602) 727-5107
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
