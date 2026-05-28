import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import StatsBand from "@/components/StatsBand";
import StickyCallBar from "@/components/StickyCallBar";

export const metadata: Metadata = {
  title: "Commercial Shade Sails for Phoenix Businesses | Apex Sail Shades",
  description:
    "Custom-engineered commercial shade sails for Phoenix restaurants, patios, HOAs, golf, senior living, and schools. Designed, engineered, and installed by licensed, insured local crews with minimal downtime.",
};

/* ------------------------------------------------------------------ */
/*  WHO-WE-SERVE VERTICALS                                            */
/*  Verticals with a live page link to it; the rest route to /contact */
/*  (no dead links / no 404s).                                        */
/* ------------------------------------------------------------------ */
const verticals: {
  title: string;
  blurb: string;
  href: string;
  cta: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Restaurants & Patios",
    blurb:
      "Keep diners comfortable and seats full through the midday heat with shade built for your patio.",
    href: "/contact",
    cta: "Request an assessment",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72"
      />
    ),
  },
  {
    title: "HOA & Community Pools",
    blurb:
      "Protect pool decks, ramadas, and common areas so residents can use them all summer.",
    href: "/contact",
    cta: "Request an assessment",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7c2 0 2 1.5 4.5 1.5S10 7 12 7s2.5 1.5 4.5 1.5S19 7 21 7M3 12c2 0 2 1.5 4.5 1.5S10 12 12 12s2.5 1.5 4.5 1.5S19 12 21 12M3 17c2 0 2 1.5 4.5 1.5S10 17 12 17s2.5 1.5 4.5 1.5S19 17 21 17"
      />
    ),
  },
  {
    title: "Multi-Family",
    blurb:
      "Shade courtyards, walkways, and amenity spaces that set your property apart for renters.",
    href: "/contact",
    cta: "Request an assessment",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21"
      />
    ),
  },
  {
    title: "Golf & Recreation",
    blurb:
      "Keep driving bays, ranges, and seating usable through peak sun so play does not stop at midday.",
    href: "/golf",
    cta: "View golf solutions",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 21V3m0 0l9 4.5L3 12"
      />
    ),
  },
  {
    title: "Senior Living",
    blurb:
      "Give residents shaded courtyards and walkways so outdoor access is not lost to the summer.",
    href: "/senior-living",
    cta: "View senior living solutions",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    ),
  },
  {
    title: "Schools & Daycares",
    blurb:
      "Cover play areas, lunch courts, and pickup lanes with shade engineered for safety and sun.",
    href: "/contact",
    cta: "Request an assessment",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443"
      />
    ),
  },
];

const whyApex = [
  {
    title: "Free on-site assessment",
    body: "We come to your property, assess the space, and run a ShadeCast™ sun analysis before you commit to anything.",
  },
  {
    title: "Minimal downtime",
    body: "We schedule and stage the work to keep your business open and operating while we install.",
  },
  {
    title: "Licensed, insured crews",
    body: "Every install is performed by licensed, insured local crews with the right precautions on every commercial site.",
  },
  {
    title: "Engineering and permitting handled",
    body: "We manage the structural engineering and city permitting so your team does not have to.",
  },
];

export default function CommercialPage() {
  return (
    <>
      {/* ============================================================
          SECTION 1: HERO  (LCP element, rendered immediately, NOT motion-gated)
          ============================================================ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-charcoal">
        {/* Hero image: priority, sized, no fade-in */}
        <Image
          src="/images/business-card-ws06.webp"
          alt="Large-scale commercial shade sails over an outdoor venue"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal-light/60 to-charcoal" />

        {/* Sail-triangle SVG motif (decorative) */}
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
              Commercial shade specialists
            </span>
            <h1 className="mt-4 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Commercial Shade Sails for Phoenix Businesses
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed font-body">
              Custom-engineered shade for patios, courtyards, and outdoor spaces
              across the Valley. Designed, engineered, and installed by licensed,
              insured local crews, with minimal disruption to your business.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="cta-glow inline-flex items-center justify-center px-8 py-4 bg-copper text-white text-lg font-semibold rounded-full hover:bg-copper-light transition-colors duration-200"
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
              Restaurants, HOAs, golf, senior living, schools, and more &middot;
              Built for 110&deg;F sun and monsoon winds
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />
      </section>

      {/* ============================================================
          SECTION 2: STATS BAND  (shared StatsBand; C2 + C3 parity with home)
          ============================================================ */}
      <StatsBand />

      {/* ============================================================
          SECTION 3: WHO WE SERVE  (umbrella routing grid)
          ============================================================ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className="max-w-2xl mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
              Shade for every kind of commercial space
            </h2>
            <p className="mt-4 text-lg text-charcoal/60 leading-relaxed">
              From a single restaurant patio to a full HOA amenity area, we
              engineer shade around your property and how it gets used.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticals.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 0.06}>
                <Link
                  href={v.href}
                  className="group flex h-full flex-col rounded-2xl border-2 border-sand/40 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/5 hover:border-copper"
                >
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-copper/10">
                    <svg
                      className="h-6 w-6 text-copper"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.6}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      {v.icon}
                    </svg>
                  </span>
                  <h3 className="font-heading text-xl font-bold text-charcoal group-hover:text-copper transition-colors">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-charcoal/60 leading-relaxed">{v.blurb}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-copper transition-all group-hover:gap-3">
                    {v.cta}
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: WHY APEX (done-for-you commercial value)
          ============================================================ */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className="max-w-2xl mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              A commercial project that runs without surprises
            </h2>
            <p className="mt-4 text-lg text-charcoal/70 leading-relaxed">
              We handle the design, engineering, and permitting, and we install
              around your operating hours.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyApex.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) * 0.06}>
                <div className="h-full rounded-2xl bg-white p-7 shadow-sm border border-charcoal/5">
                  <h3 className="font-heading text-lg font-semibold text-charcoal">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-charcoal/70 leading-relaxed">{p.body}</p>
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
              Concrete numbers from real projects, plus a look at the engineered
              shade we build.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Named real proof */}
            <Reveal>
              <div className="rounded-2xl bg-cream/60 p-8 sm:p-10 border border-sand/40">
                <p className="font-heading text-4xl sm:text-5xl font-bold text-copper">
                  1,500 sq ft
                </p>
                <p className="mt-3 font-heading text-xl font-semibold text-charcoal">
                  Whirlwind commercial install, Phoenix
                </p>
                <p className="mt-2 text-charcoal/65 leading-relaxed">
                  A $31,000 engineered commercial shade sail, designed and built
                  for an Arizona business. The kind of project we are set up to
                  deliver end to end, from survey to final tensioning.
                </p>
              </div>
            </Reveal>

            {/* Real partner-photographed project */}
            <Reveal delay={0.08}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-sand/30">
                <Image
                  src="/images/pizza-hut-commercial.jpg"
                  alt="Commercial shade sails over a restaurant patio with outdoor seating"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4">
                  <p className="text-white/90 text-sm font-medium">
                    Commercial patio shade, partner-photographed project
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Showcase row */}
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <Reveal>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-sand/30">
                <Image
                  src="/images/showcase-commercial-ws48.webp"
                  alt="Engineered shade sails over a commercial building entrance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4">
                  <p className="text-white/90 text-sm font-medium">
                    Commercial-grade shade, engineered for desert heat
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-sand/30">
                <Image
                  src="/images/showcase-craft-ws09.webp"
                  alt="Tensioned shade sails over an outdoor venue space"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
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
          SECTION 6: MECHANISM / DURABILITY  (consistent with homepage)
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
          SECTION 7: FINAL CTA
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
            Ready to shade your business?
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Talk to a local Phoenix shade specialist, not a call center. Book a
            free commercial assessment and we will walk your site, map the sun,
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
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <StickyCallBar />
    </>
  );
}
