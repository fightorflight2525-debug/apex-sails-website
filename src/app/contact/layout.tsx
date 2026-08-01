import type { Metadata } from "next";
import { OG_DEFAULTS } from "@/app/og-defaults";

export const metadata: Metadata = {
  title: "Free Shade Sail Quote & Design Visit | Apex Sail Shades",
  description:
    "Request a complimentary shade analysis and ShadeCast™ shadow study for your Phoenix home or business. Custom-engineered shade sails for residential and commercial spaces across Arizona.",
  // SAUCE-246: canonical + openGraph added. This page is the destination of every
  // primary CTA on the site, so it is the most-linked internal URL we own and the
  // one most worth pinning. Relative paths resolve to absolute via metadataBase
  // in the root layout (Google: use absolute paths for rel=canonical).
  alternates: { canonical: "/contact" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "Free Shade Sail Quote & Design Visit | Apex Sail Shades",
    description:
      "Free on-site design visit, a ShadeCast sun study, and an exact itemized quote in the same visit. A real person calls you within the hour.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
