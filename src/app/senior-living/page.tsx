import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import StatsBand from "@/components/StatsBand";
import StickyCallBar from "@/components/StickyCallBar";

export const metadata: Metadata = {
  title: "Senior Living Shade Solutions | Apex Sail Shades",
  description:
    "Custom-engineered shade sails for Phoenix assisted living, memory care, and retirement communities. Give residents shaded courtyards and walkways year-round. Built for 110°F sun and monsoon winds.",
};

const problems = [
  {
    title: "Seasonal entrapment",
    body: "Residents stay indoors through the hottest months, losing the outdoor time that supports wellbeing.",
  },
  {
    title: "Beautiful spaces sitting empty",
    body: "Courtyards and patios you invested in go unused for much of the Phoenix year.",
  },
  {
    title: "Heat exposure risk",
    body: "Direct summer sun is dangerous for older residents and for the staff who assist them outdoors.",
  },
  {
    title: "What families notice",
    body: "Families see unused outdoor space and quietly question quality of life.",
  },
];

const solutions = [
  {
    title: "Year-round outdoor access",
    body: "Shaded courtyards and walkways stay usable even at the peak of summer.",
  },
  {
    title: "96% UV protection",
    body: "Commercial-grade fabric blocks up to 96% of UV, protecting vulnerable skin.",
  },
  {
    title: "Up to 15°F cooler",
    body: "Temperatures under the shade drop by up to 15°F, from dangerous to comfortable.",
  },
  {
    title: "Dignified architectural design",
    body: "Tensioned membrane sails, not institutional metal canopies, that fit the look of your community.",
  },
];

const working = [
  {
    title: "Free on-site assessment",
    body: "We walk the property, map the sun with ShadeCast™, and identify shade priorities before you commit.",
  },
  {
    title: "Resident-safe install",
    body: "We schedule and stage the work to keep residents safe and daily routines undisturbed.",
  },
  {
    title: "Licensed, insured crews",
    body: "Every install is performed by licensed, insured local crews with the right precautions on every site.",
  },
  {
    title: "Engineering and permitting handled",
    body: "We manage the structural engineering and city permitting so your team does not have to.",
  },
];

export default function SeniorLivingPage() {
  return (
    <>
      {/* ============================================================
          SECTION 1: HERO  (LCP element, rendered immediately, NOT motion-gated)
          ============================================================ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-charcoal">
        <Image
          src="/images/senior-courtyard-ws50.webp"
          alt="Shade sails over a community courtyard with seating"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal-light/60 to-charcoal" />

        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="absolute top-24 -left-20 w-[600px] h-[600px]" viewBox="0 0 600 600" fill="none" aria-hidden="true">
            <path d="M100 500 L300 100 L500 400 Z" stroke="white" strokeWidth="1.5" />
            <path d="M150 480 L320 150 L480 380 Z" stroke="white" strokeWidth="0.75" />
          </svg>
          <svg className="absolute bottom-10 right-0 w-[500px] h-[500px]" viewBox="0 0 500 500" fill="none" aria-hidden="true">
            <path d="M50 450 L250 50 L450 350 Z" stroke="white" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20 w-full">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-sand">
              Senior living communities
            </span>
            <h1 className="mt-4 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Give Residents the Outdoors Back, Year-Round
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed font-body">
              Custom-engineered shade for courtyards, walkways, and gathering
              areas. Designed, engineered, and installed by licensed, insured
              local crews, with minimal disruption to residents and staff.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-copper text-white text-lg font-semibold rounded-full hover:bg-copper-light transition-colors duration-200"
              >
                Get a Free Facility Assessment
              </Link>
              <a
                href="tel:+16028370370"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-colors duration-200"
              >
                Call (602) 837-0370
              </a>
            </div>

            <p className="mt-8 text-sm text-white/45 tracking-wide">
              Assisted living, memory care, and retirement communities &middot;
              Built for 110&deg;F sun and monsoon winds
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />
      </section>

      {/* ============================================================
          SECTION 2: STATS BAND  (shared StatsBand; S1 parity with home)
          ============================================================ */}
      <StatsBand />

      {/* ============================================================
          SECTION 3: PROBLEM
          ============================================================ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className="max-w-2xl mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
              The hidden cost of empty courtyards
            </h2>
            <p className="mt-4 text-lg text-charcoal/60 leading-relaxed">
              For six months a year, Phoenix heat turns courtyards and walkways
              into spaces residents cannot safely use.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) * 0.06}>
                <div className="h-full rounded-2xl border border-sand/40 bg-cream/40 p-7">
                  <h3 className="font-heading text-lg font-semibold text-charcoal">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-charcoal/65 leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: SOLUTION
          ============================================================ */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className="max-w-2xl mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              Outdoor space residents can use all year
            </h2>
            <p className="mt-4 text-lg text-charcoal/70 leading-relaxed">
              Transform unusable outdoor areas into protected, year-round living
              spaces.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 0.06}>
                <div className="h-full rounded-2xl bg-white p-7 shadow-sm border border-charcoal/5">
                  <h3 className="font-heading text-lg font-semibold text-charcoal">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-charcoal/70 leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: WORKING WITH APEX  (done-for-you, resident-safe)
          ============================================================ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className="max-w-2xl mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              A project that respects your residents and routines
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {working.map((w, i) => (
              <Reveal key={w.title} delay={(i % 4) * 0.06}>
                <div className="h-full rounded-2xl border border-sand/40 bg-cream/40 p-7">
                  <h3 className="font-heading text-lg font-semibold text-charcoal">
                    {w.title}
                  </h3>
                  <p className="mt-3 text-charcoal/65 leading-relaxed">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6: PROOF  (real proof only; no invented facility quote)
          ============================================================ */}
      <section id="work" className="bg-cream py-20 sm:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className="max-w-2xl mb-14">
            <p className="text-copper font-semibold tracking-wide uppercase text-sm mb-3">
              Our Work
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
              Real commercial installs
            </h2>
            <p className="mt-4 text-lg text-charcoal/60 leading-relaxed">
              We build engineered commercial shade across the Valley. Here is a
              real project and a look at the work.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <Reveal>
              <div className="rounded-2xl bg-white p-8 sm:p-10 border border-sand/40 shadow-sm">
                <p className="font-heading text-4xl sm:text-5xl font-bold text-copper">
                  1,500 sq ft
                </p>
                <p className="mt-3 font-heading text-xl font-semibold text-charcoal">
                  Whirlwind commercial install, Phoenix
                </p>
                <p className="mt-2 text-charcoal/65 leading-relaxed">
                  A $31,000 engineered commercial shade sail, designed and built
                  for an Arizona business, end to end from survey to final
                  tensioning.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-sand/30">
                <Image
                  src="/images/senior-courtyard-ws61.webp"
                  alt="Shade sails over a paved community courtyard with benches and walkway"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4">
                  <p className="text-white/90 text-sm font-medium">
                    Shaded courtyard with accessible walkways
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <Reveal>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-sand/30">
                <Image
                  src="/images/senior-courtyard-ws50.webp"
                  alt="Shade sails over communal outdoor seating at a multi-story community"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4">
                  <p className="text-white/90 text-sm font-medium">
                    Communal seating, shaded for summer use
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-sand/30">
                <Image
                  src="/images/showcase-craft-ws09.webp"
                  alt="Tensioned shade sails over a calm outdoor gathering space"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4">
                  <p className="text-white/90 text-sm font-medium">
                    Tensioned sails over a calm gathering space
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7: MECHANISM / DURABILITY  (consistent with homepage)
          ============================================================ */}
      <section className="bg-charcoal py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className="max-w-3xl mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Built to commercial spec, built to last.
            </h2>
            <p className="mt-6 text-lg text-white/65 leading-relaxed">
              A pop-up canopy or off-the-shelf cover is built to a price, not to a
              place, and the first real monsoon tends to shred it. Every Apex sail
              is custom-engineered and tensioned for your exact site, then anchored
              to ride out Phoenix sun and storm season.
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
                  stable, rated for 90 mph wind loads.
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
                  built to handle 110&deg;F summers without rusting out.
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
          SECTION 8: FINAL CTA
          ============================================================ */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-copper-dark via-copper to-copper-light" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Give your residents the outdoors back
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Talk to a local Phoenix shade specialist, not a call center. Book a
            free facility assessment and we will walk your property, map the sun,
            and show you exactly what it will take.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-copper text-lg font-bold rounded-full hover:bg-cream transition-colors duration-200 shadow-lg shadow-black/20"
            >
              Get a Free Facility Assessment
            </Link>
            <a
              href="tel:+16028370370"
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white text-lg font-bold rounded-full hover:bg-white/10 transition-colors duration-200"
            >
              Call (602) 837-0370
            </a>
          </div>
          <p className="mt-6 text-white/70">
            Prefer email?{" "}
            <a
              href="mailto:contact@apex-sail-shades.com"
              className="font-semibold text-white underline underline-offset-2 hover:text-cream transition-colors"
            >
              contact@apex-sail-shades.com
            </a>
          </p>
        </div>
      </section>

      <StickyCallBar />
    </>
  );
}
