import type { Metadata } from "next";
import FormV2 from "@/components/FormV2";
import IdeasCarousel from "@/components/IdeasCarousel";
import StickyCallBar from "@/components/StickyCallBar";
import type { CarouselFrame } from "@/components/CrossFadeCarousel";
import { HOME_HERO_FRAMES, HomeHeroBackdrop, HomeHeroHeadline } from "@/components/HomeHero";
import {
  PinnedZone,
  TrustBadgeRow,
  ApexGuarantee,
  UrgencySection,
  PriceTransparency,
  WhatWeShade,
  ValueStack,
  ResidentialFaq,
  ResidentialFinalCta,
  ProcessTeaser,
} from "@/components/ResidentialSections";
import { OG_DEFAULTS } from "@/app/og-defaults";
import ProjectStory from "@/components/ProjectStory";

// ============================================================================
// /free-design (SAUCE-313, CTA v3.1 S1.7 / S3.C): the bio link. A SIMULATION OF
// THE MAIN SITE for a buyer who has not reached out yet: the home hero verbatim
// over the home slideshow (a recent backyard of ours as slide 2), the FormV2
// lead block in the same phone frame, then the /residential page as it is
// (shared components, so the two cannot drift), serving homes AND businesses
// ("What we shade" gains Commercial spaces). Every offer button on this page
// points at the hero form: one door per room (SAUCE-314: via "/#get-started";
// LeadFormBridge opens the hero form with the dropdown already down).
// Submit -> the /welcome sheet slides up over this page.
// NOINDEX by design (not an SEO page; never competes with /residential).
// Kept OUT of sitemap.ts on purpose. Header in hallway mode, slim footer.
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

const FORM = "/#get-started";

// The home slideshow with a recent backyard of ours as slide 2 (S1.7). Portrait
// source: object-position keeps the sail corner in the desktop band; on a phone
// the whole height shows.
const SLIDES: CarouselFrame[] = [
  HOME_HERO_FRAMES[0],
  {
    src: "/images/slide-backyard-sail.webp",
    alt: "Custom shade sail over a Phoenix backyard pool",
    className: "object-[50%_20%]",
    quality: 90,
  },
  ...HOME_HERO_FRAMES.slice(1),
];

export default function FreeDesignPage() {
  return (
    <>
      {/* ===== THE HOME HERO + THE DOOR, then the /residential badge and guarantee,
          all over the pinned home slideshow (the /residential scroll treatment) ===== */}
      <PinnedZone background={<HomeHeroBackdrop frames={SLIDES} />}>
        <div className="min-h-screen flex items-start lg:items-center">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-[6.25rem] sm:pt-32 pb-6 lg:pb-10">
            <div className="max-w-4xl mx-auto text-center">
              <HomeHeroHeadline compact />
              <div id="free-design-form" className="mx-auto mt-7 max-w-xl scroll-mt-28">
                <FormV2 door="free-design" idPrefix="fd" />
              </div>
            </div>
          </div>
        </div>

        <TrustBadgeRow />
        <ApexGuarantee ctaHref={FORM} />
      </PinnedZone>

      <UrgencySection />
      <PriceTransparency />
      <WhatWeShade ctaHref={FORM} withCommercial />
      {/* SAUCE-314 (his ruling): universal, homes AND businesses, the homepage
          carousel photos in that exact order; shown as ideas (provenance). */}
      <IdeasCarousel />
      <ProjectStory />
      <ValueStack />
      <ResidentialFaq />
      <ResidentialFinalCta ctaHref={FORM} />
      <ProcessTeaser />

      {/* Mobile sticky CTA: back to the hero form (the hallway keeps one door) */}
      <StickyCallBar href={FORM} />
    </>
  );
}
