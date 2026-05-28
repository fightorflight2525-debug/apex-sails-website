import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import StatsBand from "@/components/StatsBand";
import StickyCallBar from "@/components/StickyCallBar";

export const metadata: Metadata = {
  title: "Residential Shade Sails Phoenix | Apex Sail Shades",
  description:
    "Custom-engineered backyard shade sails for Phoenix homes. Designed and installed in one visit, built for 110°F sun and monsoon winds. Free design visit. Most projects $5,000 to $8,000.",
};

const valueProps = [
  {
    title: "Designed in one visit",
    body: "We measure, design, and quote your backyard in a single on-site visit. No drawn-out back and forth.",
  },
  {
    title: "ShadeCast™ sun analysis",
    body: "We predict exactly where the sun falls across every hour and season, so the shade lands where you actually need it.",
  },
  {
    title: "Built for Phoenix",
    body: "Engineered for 110°F summers and 60+ mph monsoon winds. Marine-grade 316 stainless hardware on every install.",
  },
  {
    title: "96% UV protection",
    body: "Commercial-grade fabric blocks up to 96% of UV and drops the temperature beneath by up to 15°F.",
  },
  {
    title: "10-year fabric warranty",
    body: "We stand behind the materials and the workmanship, so your patio stays protected season after season.",
  },
  {
    title: "Licensed, insured crews",
    body: "Every install is performed by licensed, insured Phoenix crews with the right precautions on every job.",
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
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/60 to-charcoal" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-3xl">
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

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="cta-glow inline-flex items-center justify-center px-8 py-4 bg-copper text-white text-lg font-semibold rounded-full hover:bg-copper-light transition-colors duration-200"
              >
                Get My Free Design Visit
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
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              A shade sail that is actually built for your backyard
            </h2>
            <p className="mt-4 text-lg text-charcoal/70 leading-relaxed">
              Not an off-the-shelf canopy. A custom-engineered sail, designed
              around your space and your sun.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueProps.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl bg-white p-7 shadow-sm border border-charcoal/5 transition-transform duration-200 hover:-translate-y-1"
              >
                <h3 className="font-heading text-xl font-semibold text-charcoal">
                  {p.title}
                </h3>
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
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              Real backyards we have shaded
            </h2>
            <p className="mt-4 text-lg text-charcoal/70 leading-relaxed">
              Every sail is custom designed and installed for the home it sits
              over.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.map((src, i) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden rounded-xl bg-charcoal/5"
              >
                <Image
                  src={src}
                  alt="Custom residential shade sail installation in the Phoenix metro"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading={i < 4 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: PROCESS ===== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              From first visit to finished shade
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
              className="inline-flex items-center justify-center px-8 py-4 bg-copper text-white text-lg font-semibold rounded-full hover:bg-copper-light transition-colors duration-200"
            >
              Get My Free Design Visit
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
