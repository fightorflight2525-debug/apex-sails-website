import type { Metadata } from "next";
import StickyCallBar from "@/components/StickyCallBar";
import ResidentialTopCurtain from "@/components/ResidentialTopCurtain";
import FormV2 from "@/components/FormV2";
import CallPromise from "@/components/CallPromise";
import {
  RESIDENTIAL_FAQS,
  PinnedZone,
  ResidentialBackdrop,
  TrustBadgeRow,
  ApexGuarantee,
  UrgencySection,
  PriceTransparency,
  WhatWeShade,
  ResidentialGallery,
  ValueStack,
  ResidentialFaq,
  ResidentialFinalCta,
  ProcessTeaser,
} from "@/components/ResidentialSections";
import { OG_DEFAULTS } from "@/app/og-defaults";

export const metadata: Metadata = {
  title: "Shade Sails Phoenix | Backyard, Pool & Patio | Apex Sail Shades",
  description:
    "Custom shade sails for Phoenix backyards, pools, and patios. Up to 96% UV block, 30°F cooler surfaces, up in as little as 14 days. Most projects $8,000 to $12,000. A real person calls you within 15 minutes.",
  alternates: { canonical: "/residential" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "Backyard, Pool & Patio Shade Sails in Phoenix | Apex Sail Shades",
    description:
      "Custom shade sails engineered for Phoenix heat and monsoon wind. Free visit, 3D design, and your FINAL price. Most projects $8,000 to $12,000.",
    url: "/residential",
    type: "website",
  },
};

// SAUCE-313: every section below the hero lives in ResidentialSections.tsx and
// is shared with /free-design (the bio-link simulation of the main site), so
// the two pages render the same markup and cannot drift.

export default function ResidentialPage() {
  return (
    <>
      {/* AEO: FAQPage structured data, mirrors the visible FAQ section exactly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: RESIDENTIAL_FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* Invisible curtain: scrolling text dissolves at the header line while
          the header is transparent (desktop + mobile). */}
      <ResidentialTopCurtain />

      {/* ===== FIXED-BACKGROUND SCROLL ZONE: hero + Apex Guarantee ===== */}
      {/* The slideshow stays pinned while the hero, then the guarantee cards, scroll over it.
          The white header color-flip is intentionally left as-is (operator to specify the
          deferred flip point). Zone releases before the urgency section. */}
      <PinnedZone id="top" background={<ResidentialBackdrop />}>
        {/* HERO screen */}
        <div className="min-h-screen flex items-center">
          {/* SAUCE-314: bottom padding cut (his "too big of a gap" under See Our Work) */}
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 lg:pt-28 pb-2 lg:pb-8">
            <div className="max-w-3xl lg:max-w-4xl mx-auto text-center">
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-sand">
                Phoenix backyard, pool & patio
                <span className="block sm:inline"> shade sails</span>
              </span>
              <h1 className="mt-4 font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] font-bold text-white leading-[1.05] tracking-tight">
                Today...
                <span className="block mt-1">
                  <span className="italic">Take</span> Back Your{" "}
                  {/* r6: thin white outline. The copper washed out against the
                      warmer slides once the burnt-orange tint went in. */}
                  <span className="text-copper hero-word-outline">Backyard</span>
                </span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-body">
                Custom shade sails for Phoenix backyards, pools, and patios.
                Designed for your exact space, engineered for monsoon wind, and
                up in as little as 14 days.{" "}
                {/* SAUCE-313: time-aware (true at every hour), same window as /welcome */}
                <CallPromise
                  day="Want proof of how fast we move? A real person calls you within 15 minutes."
                  night="Reach out tonight and a real person calls you first thing in the morning."
                />
              </p>
              <p className="mt-3 text-sm sm:text-base text-white/60 font-body">
                Most projects run $8,000 to $12,000. You get the exact number at
                your free design visit.
              </p>

              {/* SAUCE-313 CTA v3.1 (S1.8, S3.A): the hero lead block is FormV2.
                  SAUCE-314 (his 09-18 ruling): NO "What needs shade?" here, this
                  page is residential. Just the offer button at the bottom; its
                  first tap drops the fields down the same way My home does on
                  /free-design, the button slides under them and sends on the next
                  tap (Project type "Residential"). Same Formspree form, same
                  labels, same Google Ads / Meta / PostHog events (tracking parity). */}
              <div id="quick-form" className="mx-auto mt-6 max-w-xl scroll-mt-28">
                <FormV2 door="residential" idPrefix="res" variant="cta" projectType="Residential" />
                <a href="#gallery" className="mt-4 inline-block text-sm font-semibold text-white/70 transition-colors hover:text-white">
                  See Our Work
                </a>
              </div>
            </div>
          </div>
        </div>

        <TrustBadgeRow />
        <ApexGuarantee />
      </PinnedZone>

      <UrgencySection />
      <PriceTransparency />
      <WhatWeShade />
      <ResidentialGallery />
      {/* S314_PROJECT_STORY_SLOT */}
      <ValueStack />
      <ResidentialFaq />
      <ResidentialFinalCta />
      <ProcessTeaser />

      {/* Mobile sticky CTA */}
      <StickyCallBar />
    </>
  );
}
