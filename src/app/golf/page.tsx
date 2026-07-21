import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import StickyCallBar from "@/components/StickyCallBar";

export const metadata: Metadata = {
  title: "Golf & Entertainment Venue Shade | Apex Sail Shades",
  robots: { index: false, follow: false },
  description:
    "Custom-engineered shade sails for Phoenix driving ranges, golf entertainment venues, and resort recreation. Keep bays and patios usable through peak sun. Built for 110°F sun and monsoon winds.",
};

const problems = [
  {
    title: "Empty bays at peak hours",
    body: "The hottest part of the day is exactly when your premium bays and patio seating sit unused.",
  },
  {
    title: "Shorter sessions, lower spend",
    body: "Guests baking in the sun leave early, which means fewer buckets and less food and beverage.",
  },
  {
    title: "Hot equipment and surfaces",
    body: "Clubs, turf, and seating heat up fast in direct Phoenix sun, and the experience suffers for it.",
  },
  {
    title: "Shaded competitors win midday",
    body: "Venues that offer comfortable shade capture the midday and event crowd you are losing.",
  },
];

const coverage = [
  {
    title: "Driving bays and tee lines",
    body: "Cover the hitting line and premium bays so play continues straight through peak sun.",
  },
  {
    title: "Patios and event lawns",
    body: "Keep outdoor dining, bar seating, and event space comfortable and bookable all summer.",
  },
  {
    title: "Putting and short-game areas",
    body: "Shade practice greens and short-game zones so guests stay and play longer.",
  },
  {
    title: "Walkways and cart staging",
    body: "Protect the paths and staging areas guests and staff move through all day.",
  },
];

const working = [
  {
    title: "Free on-site assessment",
    body: "We walk your venue, map the sun with ShadeCast™, and scope the work before you commit.",
  },
  {
    title: "Install around your hours",
    body: "We schedule and stage the work to keep your venue open and earning while we install.",
  },
  {
    title: "Licensed, insured crews",
    body: "Every install is performed by licensed, insured local crews with the right precautions on site.",
  },
  {
    title: "Engineering and permitting handled",
    body: "We manage the structural engineering and city permitting so your team does not have to.",
  },
];

export default function GolfPage() {
  return (
    <>
      {/* ============================================================
          SECTION 1: HERO  (LCP element, rendered immediately, NOT motion-gated)
          ============================================================ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-charcoal">
        <Image
          src="/images/business-card-ws06.webp"
          alt="Large-scale shade sails over an outdoor entertainment venue"
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
              Golf &amp; entertainment venues
            </span>
            <h1 className="mt-4 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Keep Your Venue Playing Through the Phoenix Heat
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed font-body">
              Custom-engineered shade for driving bays, patios, and event spaces.
              Designed, engineered, and installed by licensed, insured local
              crews, with minimal disruption to your operation.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-copper text-white text-lg font-semibold rounded-full hover:bg-copper-light transition-colors duration-200"
              >
                Get a Free Commercial Assessment
              </Link>
              <a
                href="tel:+16028370370"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-colors duration-200"
              >
                Call (602) 837-0370
              </a>
            </div>

            <p className="mt-8 text-sm text-white/45 tracking-wide">
              Driving ranges, entertainment venues, and resort recreation
              &middot; Built for 110&deg;F sun and monsoon winds
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />
      </section>

      {/* ============================================================
          SECTION 2: STAT STRIP  (count-up)
          ============================================================ */}
      <section className="bg-cream py-12 sm:py-14 border-b border-sand/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { node: <CountUp to={96} suffix="%" />, label: "UV blocked" },
              { node: <CountUp to={15} suffix={"°F"} />, label: "Cooler under shade" },
              { node: <CountUp to={90} suffix="mph" />, label: "Wind rated" },
              { node: <CountUp to={10} suffix="-yr" />, label: "Fabric warranty" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-3xl sm:text-4xl font-bold text-copper">
                  {stat.node}
                </p>
                <p className="mt-1 text-sm text-charcoal/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: PROBLEM  (honest agitation, no fabricated figures)
          ============================================================ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className="max-w-2xl mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
              When the range bakes, your guests walk
            </h2>
            <p className="mt-4 text-lg text-charcoal/60 leading-relaxed">
              From late morning to late afternoon, unshaded bays and patios get
              too hot to enjoy. Guests cut sessions short and spend less at the
              bar and grill.
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
          SECTION 4: SOLUTION / WHAT WE SHADE
          ============================================================ */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className="max-w-2xl mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              Shade engineered around how your venue is used
            </h2>
            <p className="mt-4 text-lg text-charcoal/70 leading-relaxed">
              We design around your bays, sight lines, and event flow, then
              install around your operating hours.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coverage.map((c, i) => (
              <Reveal key={c.title} delay={(i % 4) * 0.06}>
                <div className="h-full rounded-2xl bg-white p-7 shadow-sm border border-charcoal/5">
                  <h3 className="font-heading text-lg font-semibold text-charcoal">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-charcoal/70 leading-relaxed">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: PROOF  (real proof only)
          ============================================================ */}
      <section id="work" className="bg-white py-20 sm:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className="max-w-2xl mb-14">
            <p className="text-copper font-semibold tracking-wide uppercase text-sm mb-3">
              Our Work
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
              Real commercial installs
            </h2>
            <p className="mt-4 text-lg text-charcoal/60 leading-relaxed">
              We build engineered commercial shade at scale. Here is a real
              project and a look at the work.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <Reveal>
              <div className="rounded-2xl bg-cream/60 p-8 sm:p-10 border border-sand/40">
                <p className="font-heading text-4xl sm:text-5xl font-bold text-copper">
                  1,500 sq ft
                </p>
                <p className="mt-3 font-heading text-xl font-semibold text-charcoal">
                  Whirlwind commercial install, Phoenix
                </p>
                <p className="mt-2 text-charcoal/65 leading-relaxed">
                  A custom-engineered commercial shade sail, designed and built
                  for an Arizona business, end to end from survey to final
                  tensioning.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-sand/30">
                <Image
                  src="/images/showcase-commercial-ws48.webp"
                  alt="Engineered shade sails over a commercial building entrance"
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
          </div>

          <div className="mt-10">
            <Reveal>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-sand/30">
                <Image
                  src="/images/showcase-craft-ws09.webp"
                  alt="Tensioned shade sails over an outdoor venue space"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4">
                  <p className="text-white/90 text-sm font-medium">
                    Tensioned sails over an outdoor venue
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6: WORKING WITH APEX  (done-for-you)
          ============================================================ */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className="max-w-2xl mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              A project that runs without surprises
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {working.map((w, i) => (
              <Reveal key={w.title} delay={(i % 4) * 0.06}>
                <div className="h-full rounded-2xl bg-white p-7 shadow-sm border border-charcoal/5">
                  <h3 className="font-heading text-lg font-semibold text-charcoal">
                    {w.title}
                  </h3>
                  <p className="mt-3 text-charcoal/70 leading-relaxed">{w.body}</p>
                </div>
              </Reveal>
            ))}
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
            Ready to keep your venue playing all summer?
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Talk to a local Phoenix shade specialist, not a call center. Book a
            free commercial assessment and we will walk your venue, map the sun,
            and show you exactly what it will take.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-copper text-lg font-bold rounded-full hover:bg-cream transition-colors duration-200 shadow-lg shadow-black/20"
            >
              Get a Free Commercial Assessment
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
