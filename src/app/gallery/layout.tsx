import type { Metadata } from "next";
import { OG_DEFAULTS } from "@/app/og-defaults";

export const metadata: Metadata = {
  title: "Gallery | Apex Sail Shades",
  description:
    "Shade sail ideas for homes and businesses. Browse residential backyards and commercial properties; click any photo to enlarge.",
  // SAUCE-246: canonical + openGraph added (absolute via root metadataBase).
  alternates: { canonical: "/gallery" },
  openGraph: {
    ...OG_DEFAULTS,
    title: "Shade Sail Gallery | Ideas for Homes and Businesses | Apex Sail Shades",
    description:
      "Shade sail ideas for homes and businesses: residential backyards and commercial properties.",
    url: "/gallery",
    type: "website",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
