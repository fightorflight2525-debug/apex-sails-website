import type { Metadata } from "next";
import Image from "next/image";
import ShortLeadForm from "@/components/ShortLeadForm";
import TextDoor from "@/components/TextDoor";
import { OG_DEFAULTS } from "@/app/og-defaults";

// ============================================================================
// /free-design (SAUCE-312, CTA v3 S4): the Meta hallway. Traffic from the
// Instagram bio link, the Facebook Page button and Facebook posts ONLY.
// NOINDEX by design (it is not an SEO page, and it must never compete with
// /residential in Google). Kept OUT of sitemap.ts on purpose.
// Door rule (CTA v3 S3): the offer line, the short form above the fold, no
// "visit", no "ShadeCast", no photo ask. The visit is introduced on /welcome,
// after the yes. Header runs in hallway mode here (no nav leaks).
// ============================================================================

export const metadata: Metadata = {
  title: "Free 3D Design + Your FINAL Price | Apex Sail Shades",
  description:
    "Phoenix shade sails, family-owned. Free 3D design + your FINAL price. No extra fees. The price we quote is the price you pay.",
  robots: { index: false, follow: false },
  openGraph: {
    ...OG_DEFAULTS,
    title: "Free 3D design + your FINAL price | Apex Sail Shades",
    description: "No extra fees. The price we quote is the price you pay.",
    url: "/free-design",
    type: "website",
  },
};

const proof = ["15-year warranty", "30°F cooler surfaces", "96% UV block"];

const installs = [
  { src: "/images/residential-01.webp", alt: "Shade sail over a Phoenix backyard pool" },
  { src: "/images/residential-03.webp", alt: "Patio shade sail over a Phoenix home" },
  { src: "/images/residential-02.webp", alt: "Custom backyard shade sail install in Phoenix" },
];

export default function FreeDesignPage() {
  return (
    <>
      {/* ===== THE DOOR (above the fold) ===== */}
      <section className="relative overflow-hidden bg-charcoal pt-28 pb-16 sm:pt-32 lg:pb-24">
        <Image
          src="/images/gallery-ws-29.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/80 to-charcoal" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div className="text-center lg:text-left">
            <span className="text-sm font-semibold uppercase tracking-widest text-sand">
              Phoenix shade sails, family-owned
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Free 3D design + your <span className="text-copper">FINAL</span> price.
            </h1>
            <p className="mt-5 text-lg text-white/85 sm:text-xl">
              No extra fees. The price we quote is the price you pay.
            </p>
            <ul className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-start">
              {proof.map((p) => (
                <li key={p} className="inline-flex items-center gap-2 text-base font-semibold text-white">
                  <svg className="h-5 w-5 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div id="free-design-form" className="mx-auto w-full max-w-xl scroll-mt-28">
            <ShortLeadForm door="free-design" idPrefix="fd" showSubLine={false} />
            <p className="mt-4 text-center text-sm leading-relaxed text-white/75">
              Rather text?{" "}
              <TextDoor door="free-design" className="font-semibold text-white underline decoration-copper underline-offset-4">
                Text us
              </TextDoor>
              , the message is already written. Or call{" "}
              <a href="tel:+16028370370" className="font-semibold text-white underline decoration-copper underline-offset-4">
                (602) 837-0370
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ===== REAL WORK ===== */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-balance text-center font-heading text-3xl font-bold text-charcoal sm:text-4xl">
            Real Apex installs in Phoenix
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {installs.map((img) => (
              <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={img.src} alt={img.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="#free-design-form"
              className="cta-glow-loop inline-flex items-center justify-center rounded-full bg-copper px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-copper-dark sm:text-lg"
            >
              Get my free 3D design + FINAL price
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
