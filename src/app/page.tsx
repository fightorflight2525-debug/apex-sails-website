import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { HomeHeroBackdrop, HomeHeroHeadline } from "@/components/HomeHero";
import ExperienceSection from "@/components/ExperienceSection";
import Reveal from "@/components/Reveal";
import StatsBand from "@/components/StatsBand";
import StickyCallBar from "@/components/StickyCallBar";
import { OG_DEFAULTS } from "@/app/og-defaults";
import CtaText from "@/components/CtaText";

// D5b LCP: defer below-the-fold client components out of the homepage's initial
// JS bundle via next/dynamic (SSR stays ON by default -> zero visual change, CLS 0).
const ShadeCastDemo = dynamic(() => import("@/components/ShadeCastDemo"));
const ShadeCastSlideover = dynamic(() => import("@/components/ShadeCastSlideover"));
const MiniGallerySlideshow = dynamic(() => import("@/components/MiniGallerySlideshow"));

export const metadata: Metadata = {
  title: "Shade Sails Phoenix | Custom Shade Sails for Homes & Businesses | Apex Sail Shades",
  description:
    "Custom-engineered shade sails for Phoenix homes and businesses. Up to 96% UV block and 30°F cooler surfaces, engineered for 110°F sun and monsoon wind. Free design visit, and a real person calls you within 15 minutes.",
  alternates: { canonical: "/" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "Shade Sails Phoenix | Custom Shade Sails for Homes & Businesses",
    description:
      "Custom shade sails engineered for Phoenix heat and monsoon wind. Free visit, 3D design, and your FINAL price. Most residential projects $8,000 to $12,000.",
    url: "/",
    type: "website",
  },
};

/* ============================================================================
   SAUCE-246 STRUCTURED DATA (site entity).
   Before this, /residential's FAQPage block was the ONLY structured data on the
   whole site, and the home page had none.

   EVERY FIELD BELOW WAS VERIFIED AGAINST THE LIVE PUBLIC GOOGLE BUSINESS PROFILE
   (Google Maps listing for "Apex Sails LLC", read 2026-07-31), not assumed:
     - listing name        Apex Sails LLC          -> legalName
     - website field       apex-sail-shades.com    -> url (exact match, NAP clean)
     - phone field         (602) 837-0370          -> telephone (matches the site 3 ways:
                                                     site copy, GBP owner panel, public listing)
     - service area        greater Phoenix polygon -> areaServed

   NO STREET ADDRESS, AND THAT IS THE CORRECT ANSWER, NOT A GAP.
   The GBP is a SERVICE AREA BUSINESS. Verified visually on the public listing: the
   info panel has NO address row at all (every competitor listing on the same search
   shows one), and the map renders a service-area BOUNDARY instead of a pin. Google
   deliberately hides the address for an SAB. Publishing a street address here would
   therefore CONTRADICT the Google Business Profile and manufacture the exact NAP
   inconsistency this schema exists to prevent. Do not "fix" this by adding one.

   NO aggregateRating, DELIBERATELY. The GBP shows a real 5.0 from 5 reviews and it is
   tempting to publish it. Google's review-snippet policy forbids it: "Don't aggregate
   reviews or ratings from other websites", and ratings "must be sourced directly from
   users" of this site. Marking up Google reviews as our own is a policy violation that
   risks a structured-data manual action. If first-party reviews are ever collected on
   apex-sail-shades.com itself, they become eligible - GBP reviews never do.

   NO openingHours. The public listing exposes only "Opens 7 AM Sat"; the full weekly
   schedule did not expand publicly. A guessed schedule that contradicts the GBP is
   worse than none, so it is omitted until the owner panel is read.

   NO geo. The coordinates in the Maps URL are an SAB service-area centroid, not a
   premises location, so publishing them as the business point would be false precision.

   NAME HANDLING: site brand is "Apex Sail Shades" (the 2026-05-05 brand-name lock makes
   it canonical on every consumer surface); the legal entity and the GBP listing both
   read "Apex Sails LLC". Both are carried so the schema agrees with the GBP exactly.
   ========================================================================== */
const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      // HomeAndConstructionBusiness is a LocalBusiness subtype and is accurate for an
      // install trade. Note: the GBP's own category is still "Awning supplier", which
      // the 2026-05-05 brand-name-consistency-lock decided should become "Shade sail
      // installer" - that GBP change was never executed and is an open operator item.
      "@type": ["Organization", "HomeAndConstructionBusiness"],
      "@id": "https://apex-sail-shades.com/#organization",
      name: "Apex Sail Shades",
      legalName: "Apex Sails LLC",
      url: "https://apex-sail-shades.com",
      logo: "https://apex-sail-shades.com/images/og-ws-29.webp",
      image: "https://apex-sail-shades.com/images/og-ws-29.webp",
      description:
        "Custom-engineered shade sails for Phoenix homes and businesses, built for 110°F sun and monsoon wind.",
      telephone: "+1-602-837-0370",
      // sameAs = the verified Google Business Profile listing (Maps place URL for
      // "Apex Sails LLC"). This is the entity link that ties site and GBP together
      // for Google; it is a real, resolved URL, not a constructed guess.
      sameAs: [
        "https://www.google.com/maps/place/Apex+Sails+LLC/data=!4m2!3m1!1s0xa7f1955e4954bbd7:0x3b7c52cf14ae8b3",
        // Meta surfaces (SAUCE-273): Page 61593429476438 + @apexsailshades,
        // matched to the footer social links shipped in the same deploy.
        "https://www.facebook.com/profile.php?id=61593429476438",
        "https://www.instagram.com/apexsailshades/",
      ],
      // Verified band, and the same one the /residential hero and the FAQ state.
      // ONE SCOPE ONE NUMBER: this is the residential band only, not a blended figure.
      priceRange: "$8,000 - $12,000",
      // The cities the GBP service-area polygon covers, and the same list the FAQ
      // answer "Where do you install?" already states on the site. Kept in sync with
      // visible copy on purpose.
      areaServed: [
        "Phoenix",
        "Scottsdale",
        "Mesa",
        "Tempe",
        "Chandler",
        "Gilbert",
        "Glendale",
        "Peoria",
      ].map((city) => ({
        "@type": "City",
        name: city,
        containedInPlace: { "@type": "State", name: "Arizona" },
      })),
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-602-837-0370",
        contactType: "sales",
        areaServed: "US-AZ",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://apex-sail-shades.com/#website",
      url: "https://apex-sail-shades.com",
      name: "Apex Sail Shades",
      publisher: { "@id": "https://apex-sail-shades.com/#organization" },
      inLanguage: "en-US",
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* SAUCE-246: site-entity structured data (Organization + WebSite). */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
      />

      {/* ============================================================
          SECTION 1: HERO  (LCP element, rendered immediately, NOT motion-gated)
          ============================================================ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-charcoal">
        {/* SAUCE-313: slideshow, tint, sail motif, glow and bottom fade live in
            HomeHero.tsx so /free-design shows the SAME hero (S1.7). */}
        <HomeHeroBackdrop />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <HomeHeroHeadline />

            {/* Dual CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cta-glow-loop inline-flex items-center justify-center text-center text-balance px-8 py-4 bg-copper text-white text-lg font-semibold rounded-full hover:bg-copper-light transition-colors duration-200"
              >
                <CtaText />
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

      </section>

      {/* ============================================================
          SECTION 2: 4-ICON VALUE BAR  (shared StatsBand; canonical across home/commercial/residential/senior)
          ============================================================ */}
      <StatsBand />

      {/* ============================================================
          SECTION 3: CHOOSE-YOUR-PATH SPLIT  (dual-ICP harmony)
          ============================================================ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Reveal className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
              Shade for your <span className="text-copper">home</span> or your <span className="text-copper">business</span>
            </h2>
            <p className="mt-4 text-lg text-charcoal/60 max-w-2xl mx-auto leading-relaxed">
              <span className="text-copper font-semibold">One</span> Phoenix team, <span className="text-copper font-semibold">two</span> specialties. Tell us which space you want to take back from the sun.
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
                    src="/images/home-card-backyard-patio.webp"
                    alt="Custom shade sail over a Phoenix backyard patio"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 sm:p-10">
                  <p className="text-base sm:text-lg font-bold uppercase tracking-widest text-copper">
                    For Your Home
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-charcoal group-hover:text-copper transition-colors">
                    Cooler outdoor living
                  </h3>
                  <p className="mt-3 text-charcoal/60 leading-relaxed">
                    Custom backyard shade sails that keep your patio, pool, and
                    play space usable all summer. Most residential projects run <span className="font-semibold text-copper">$8,000</span> to <span className="font-semibold text-copper">$12,000</span>.
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
                  <p className="text-base sm:text-lg font-bold uppercase tracking-widest text-copper">
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
              Latest Project
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
              Our most recent install
            </h2>
            <p className="mt-4 text-lg text-charcoal/60 max-w-2xl mx-auto leading-relaxed">
              A recent commercial install in Phoenix, alongside a residential close that wrapped this season.
            </p>
          </Reveal>

          {/* F6: showcase image removed (was overlapping/redundant with mini-slideshow).
              Desktop 2-col: dual stat cards | mini-slideshow + button.
              Mobile: dual cards 2-col side-by-side (smaller, centered text per F6), slideshow column below. */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

            {/* Col 1: dual proof cards (2-col grid on mobile, 1-col stacked on lg) */}
            <Reveal>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-6 h-full">
                <div className="rounded-2xl bg-white p-3 sm:p-5 lg:p-7 border border-sand/40 shadow-sm text-center lg:text-left">
                  <p className="font-heading text-xl sm:text-2xl lg:text-4xl font-bold text-copper">
                    1,500 sq ft
                  </p>
                  <p className="mt-2 font-heading text-sm sm:text-base lg:text-lg font-semibold text-charcoal">
                    Most Recent: Whirlwind Golf Course Install, Phoenix
                  </p>
                  <p className="mt-1 text-xs sm:text-sm lg:text-base text-charcoal/60 leading-relaxed">
                    An engineered commercial shade sail, designed and built for an Arizona business.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-3 sm:p-5 lg:p-7 border border-sand/40 shadow-sm text-center lg:text-left">
                  <p className="font-heading text-xl sm:text-2xl lg:text-4xl font-bold text-copper">
                    Phoenix backyard
                  </p>
                  <p className="mt-2 font-heading text-sm sm:text-base lg:text-lg font-semibold text-charcoal">
                    Backyard garden cover, Phoenix
                  </p>
                  <p className="mt-1 text-xs sm:text-sm lg:text-base text-charcoal/60 leading-relaxed">
                    A custom backyard shade sail, measured, designed, and installed
                    for a Phoenix homeowner.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Col 2: mini-gallery slideshow + "See Full Gallery" button */}
            <Reveal delay={0.08}>
              <div className="flex flex-col gap-3 h-full">
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-copper text-white text-sm font-semibold rounded-full hover:bg-copper-light transition-colors duration-200 self-center"
                >
                  See Full Gallery
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-sand/30 flex-1">
                  <MiniGallerySlideshow />
                </div>
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
          <Reveal className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              <span className="italic text-copper text-4xl sm:text-5xl md:text-6xl">Not</span> an <span className="text-copper">&ldquo;online&rdquo;</span> or <span className="text-copper">&ldquo;store-bought&rdquo;</span> canopy.
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
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10 text-center">
                <div className="flex justify-center mb-5">
                  <svg className="w-12 h-12 text-copper" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {/* Triangular sail outline with tension lines to two anchors */}
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
                  stable, rated for 90 mph wind loads rather than thrown up to a
                  generic template.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10 text-center">
                <div className="flex justify-center mb-5">
                  <svg className="w-12 h-12 text-copper" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {/* Stylized D-ring / shackle outline with pin across the top */}
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
                  built to handle 110&deg;F summers without rusting or fatiguing
                  out.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10 text-center">
                <div className="flex justify-center mb-5">
                  <svg className="w-12 h-12 text-copper" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {/* Folded fabric panel with a sun glyph above */}
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
                  Architectural shade fabric blocks up to 96% of UV and keeps the
                  surfaces beneath up to 30&deg;F cooler, backed by a 15-year
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
              <div className="text-center lg:text-left">
                {/* S1: eyebrow bumped to font-bold + text-base sm:text-lg (was font-semibold text-sm); lg desktop value text-lg byte-identical */}
                <p className="text-copper font-bold tracking-wide uppercase text-base sm:text-lg lg:text-lg mb-3">
                  ShadeCast&#8482; 3D design
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal leading-tight">
                  See your exact <span className="text-copper">design</span> plus <span className="text-copper">ShadeCast&#8482;</span> before we <span className="whitespace-nowrap">build it.</span>
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
                    <li key={item} className="flex items-start gap-3 justify-center lg:justify-start">
                      <svg className="w-6 h-6 text-copper flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <polyline points="8,12 11,15 16,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-charcoal/80 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* S3 desktop CTA: visible at lg+, hidden below (mobile/tablet show the post-simulation CTA instead) */}
                <Link
                  href="/contact"
                  className="mt-10 hidden lg:inline-flex items-center justify-center text-center text-balance px-8 py-4 bg-copper text-white text-lg font-semibold rounded-full hover:bg-copper-light transition-colors duration-200"
                >
                  <CtaText />
                </Link>
              </div>
            </Reveal>

            {/* Right (desktop) / middle (mobile): ShadeCastSlideover (H9b, wraps Demo, slides to 2x2 collage). */}
            <Reveal delay={0.1}>
              <ShadeCastSlideover>
                <ShadeCastDemo className="w-full" />
              </ShadeCastSlideover>
            </Reveal>

            {/* S3 mobile-only CTA: appears AFTER the simulation per the mobile reorder spec.
                lg:hidden removes it from the grid entirely at lg+ so desktop stays 2-cell. */}
            <Link
              href="/contact"
              className="lg:hidden mt-2 mx-auto inline-flex items-center justify-center text-center text-balance px-8 py-4 bg-copper text-white text-lg font-semibold rounded-full hover:bg-copper-light transition-colors duration-200"
            >
              <CtaText />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7: EXPERIENCE BAND  (industry lineage, not entity age)
          SAUCE-313: shared with /welcome (ExperienceSection.tsx)
          ============================================================ */}
      <ExperienceSection />

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
              className="cta-glow-loop inline-flex items-center justify-center text-center text-balance px-10 py-5 bg-white text-copper text-lg font-bold rounded-full hover:bg-cream transition-colors duration-200 shadow-lg shadow-black/20"
            >
              <CtaText />
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
