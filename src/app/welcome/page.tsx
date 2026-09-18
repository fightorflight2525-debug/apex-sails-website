import type { Metadata } from "next";
import WelcomeContent from "@/components/welcome/WelcomeContent";

// ============================================================================
// /welcome (SAUCE-313, CTA v3.1): THE thank-you page after ANY form.
// Two ways in, one page, one URL:
//  - a website form (FormV2 on /free-design and /residential, the /contact
//    form): router.push("/welcome") is intercepted (app/@modal/(.)welcome) and
//    this content slides up as a sheet over the page they were on;
//  - a hard load (the Meta Instant Form / IG form thank-you button with
//    utm_content=thankyou, or a refresh): this page, the same content.
// NOINDEX. Out of sitemap.ts. Fires NO Lead event (the form that sent them here
// already did; the Instant Form counts its own). Header stays in hallway mode.
// Title "You're family now!" is the operator's own copy, verbatim.
// ============================================================================

export const metadata: Metadata = {
  title: "You're family now! | Apex Sail Shades",
  description: "Your free 3D design + FINAL price is on its way. Watch for our call from 602-837-0370.",
  robots: { index: false, follow: false },
};

export default function WelcomePage() {
  return <WelcomeContent mode="page" />;
}
