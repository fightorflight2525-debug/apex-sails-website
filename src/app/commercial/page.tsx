import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import StatsBand from "@/components/StatsBand";
import StickyCallBar from "@/components/StickyCallBar";
import Lightbox from "@/components/Lightbox";

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
    href: "/contact",
    cta: "Request an assessment",
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
    href: "/contact",
    cta: "Request an assessment",
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
    title: "Minimal downtime",
    body: "We schedule and stage the work to keep your business open and operating while we install.",
    icon: (
      <svg className="w-10 h-10 text-copper" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2" />
        <line x1="20" y1="20" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="20" x2="26" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Licensed, insured crews",
    body: "Every install is performed by licensed, insured local crews with the right precautions on every commercial site.",
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
  {
    title: "Engineering and permitting handled",
    body: "We manage the structural engineering and city permitting so your team does not have to.",
    icon: (
      <svg className="w-10 h-10 text-copper" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="9" y="7" width="22" height="28" rx="2.5" stroke="currentColor" strokeWidth="2" />
        <rect x="15" y="4" width="10" height="5" rx="1.5" stroke="currentColor" strokeWidth="2" />
        <polyline points="14,21 18,25 26,16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const COMMERCIAL_GALLERY = [
  { src: "/images/gallery-ws-34.webp", alt: "Custom commercial shade sail install in the Phoenix metro" },
  { src: "/images/gallery-ws-49.webp", alt: "Custom commercial shade sail install in the Phoenix metro" },
  { src: "/images/gallery-ws-02.webp", alt: "Custom commercial shade sail install in the Phoenix metro" },
  { src: "/images/gallery-ws-08.webp", alt: "Custom commercial shade sail install in the Phoenix metro" },
  { src: "/images/gallery-ws-12.webp", alt: "Custom commercial shade sail install in the Phoenix metro" },
  { src: "/images/gallery-ws-18.webp", alt: "Custom commercial shade sail install in the Phoenix metro" },
  { src: "/images/gallery-ws-30.webp", alt: "Custom commercial shade sail install in the Phoenix metro" },
  { src: "/images/gallery-os-17.webp", alt: "Custom commercial shade sail install in the Phoenix metro" },
  { src: "/images/gallery-ws-50.webp", alt: "Custom commercial shade sail install in the Phoenix metro" },
  { src: "/images/gallery-os-10.webp", alt: "Custom commercial shade sail install in the Phoenix metro" },
  { src: "/images/gallery-os-16.webp", alt: "Custom commercial shade sail install in the Phoenix metro" },
  { src: "/images/gallery-os-20.webp", alt: "Custom commercial shade sail install in the Phoenix metro" },
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
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-sand">
              Commercial shade specialists
            </span>
            <h1 className="mt-4 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Commercial Shade Sails for Phoenix Businesses
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-body">
              Custom-engineered shade for patios, courtyards, and outdoor spaces
              across the Valley. Designed, engineered, and installed by licensed,
              insured local crews, with minimal disruption to your business.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cta-glow-loop inline-flex items-center justify-center text-center px-8 py-4 bg-copper text-white text-lg font-semibold rounded-full hover:bg-copper-light transition-colors duration-200"
              >
                <span>Get a <em className="not-italic font-bold text-[1.08em] mx-1">Free</em> Commercial Assessment</span>
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
          <Reveal className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
              Shade for <em className="not-italic font-bold text-copper text-[1.06em] mx-0.5">every</em> kind of commercial space
            </h2>
            <p className="mt-4 text-lg text-charcoal/60 leading-relaxed">
              From a single restaurant patio to a full HOA amenity area, we
              engineer shade around your property and how it gets used.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-copper">
              Some of the commercial spaces we serve
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticals.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border-2 border-sand/40 bg-white p-8">
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
                  <h3 className="font-heading text-xl font-bold text-charcoal">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-charcoal/60 leading-relaxed">{v.blurb}</p>
                </div>
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
          <Reveal className="max-w-2xl mx-auto text-center mb-14">
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
                <div className="h-full rounded-2xl bg-white p-7 shadow-sm border border-charcoal/5 text-center">
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-copper/10">
                    {p.icon}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-charcoal">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-charcoal/70 leading-relaxed">
                    {p.body.includes("ShadeCast™") ? (
                      <>
                        {p.body.split("ShadeCast™")[0]}
                        <Link href="/" className="text-copper underline hover:text-copper-light">ShadeCast™</Link>
                        {p.body.split("ShadeCast™")[1]}
                      </>
                    ) : (
                      p.body
                    )}
                  </p>
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
          <Reveal className="max-w-2xl mx-auto text-center mb-14">
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
                <p className="text-copper font-semibold tracking-wide uppercase text-xs mb-3">
                  Most Recent
                </p>
                <p className="font-heading text-4xl sm:text-5xl font-bold text-copper">
                  1,500 sq ft
                </p>
                <p className="mt-3 font-heading text-xl font-semibold text-charcoal">
                  Whirlwind commercial install, Phoenix
                </p>
                <p className="mt-2 text-charcoal/65 leading-relaxed">
                  A custom-engineered commercial shade sail, designed and built
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

          {/* Real-work gallery (commercial) */}
          <Reveal className="mt-16">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-charcoal">
                More of our commercial work
              </h3>
              <p className="mt-3 text-base text-charcoal/60 leading-relaxed">
                A look across recent Phoenix-area commercial installs. Click any photo to enlarge.
              </p>
            </div>
            <Lightbox
              images={COMMERCIAL_GALLERY}
              gridClassName="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              itemClassName="relative aspect-square overflow-hidden rounded-xl bg-charcoal/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-copper/60 focus:ring-offset-2"
              imageSizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              staggerDelayMs={30}
            />
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          SECTION 6: MECHANISM / DURABILITY  (consistent with homepage)
          ============================================================ */}
      <section className="bg-charcoal py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Built to <em className="not-italic font-bold text-copper text-[1.06em] mx-0.5">commercial</em> spec, built to <em className="not-italic font-bold text-copper text-[1.06em] mx-0.5">last</em>.
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
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10 text-center">
                <div className="flex justify-center mb-5">
                  <svg className="w-12 h-12 text-copper" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="6" cy="40" r="2" fill="currentColor" />
                    <circle cx="42" cy="40" r="2" fill="currentColor" />
                    <line x1="6" y1="40" x2="24" y2="8" />
                    <line x1="42" y1="40" x2="24" y2="8" />
                    <path d="M6 40 Q 24 28 42 40" />
                  </svg>
                </div>
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
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10 text-center">
                <div className="flex justify-center mb-5">
                  <svg className="w-12 h-12 text-copper" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 14 L14 28 a10 10 0 0 0 20 0 L34 14" />
                    <line x1="10" y1="14" x2="38" y2="14" />
                    <circle cx="10" cy="14" r="2" fill="currentColor" />
                    <circle cx="38" cy="14" r="2" fill="currentColor" />
                  </svg>
                </div>
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
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10 text-center">
                <div className="flex justify-center mb-5">
                  <svg className="w-12 h-12 text-copper" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="24" cy="10" r="4" />
                    <line x1="24" y1="2" x2="24" y2="4" />
                    <line x1="33" y1="10" x2="35" y2="10" />
                    <line x1="13" y1="10" x2="15" y2="10" />
                    <line x1="30" y1="4" x2="31.5" y2="5.5" />
                    <line x1="16.5" y1="5.5" x2="18" y2="4" />
                    <path d="M6 24 L42 24 L42 42 L6 42 Z" />
                    <path d="M6 30 Q 15 34 24 30 T 42 30" />
                    <path d="M6 36 Q 15 40 24 36 T 42 36" />
                  </svg>
                </div>
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
              className="cta-glow-loop inline-flex items-center justify-center text-center px-10 py-5 bg-white text-copper text-lg font-bold rounded-full hover:bg-cream transition-colors duration-200 shadow-lg shadow-black/20"
            >
              <span>Get a <em className="not-italic font-bold text-[1.08em] mx-1">Free</em> Commercial Assessment</span>
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
