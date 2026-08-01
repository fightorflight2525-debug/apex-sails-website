import type { Metadata } from "next";
import { FAQ_ITEMS } from "./faq-items";
import { OG_DEFAULTS } from "@/app/og-defaults";

export const metadata: Metadata = {
  title: "Shade Sail FAQ | Cost, Engineering, HOA & Warranty | Apex Sail Shades",
  description:
    "Real answers about custom shade sails in Phoenix: what they cost, how they are engineered for 90 MPH monsoon wind, HOA approval, the 10-year fabric warranty, and what the free design visit includes.",
  // SAUCE-246: canonical + openGraph added (absolute via root metadataBase).
  alternates: { canonical: "/faq" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "Shade Sail FAQ | Cost, Engineering, HOA & Warranty",
    description:
      "What shade sails cost in Phoenix, how they survive monsoon season, HOA approval, and the 10-year fabric warranty.",
    url: "/faq",
    type: "website",
  },
};

/* ============================================================================
   SAUCE-246 - FAQPage structured data.

   Before this, /residential carried the ONLY structured data on the entire site,
   which meant the page literally made of questions and answers had no FAQPage
   markup at all. This is the cheapest AEO win available on the site: it is the
   page's existing content, already written and already visible, simply described
   to search engines in the format they read.

   The mainEntity is generated from FAQ_ITEMS - the SAME array the visible
   accordion in page.tsx renders. Google requires marked-up FAQ content to be
   visible on the page, so generating both from one const is a correctness
   requirement, not a style preference. Editing the copy in ./faq-items.ts updates
   the page and the schema together, and they cannot drift apart.

   Emitted from the layout rather than the page because page.tsx is a client
   component ("use client" for the accordion open/close state), and this layout is
   a server component, which is the correct place for document-level metadata.
   ========================================================================== */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://apex-sail-shades.com/faq#faqpage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
