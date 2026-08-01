import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Apex Sail Shades",
  description:
    "Real custom shade sail installs. Browse residential backyards and commercial properties; click any photo to enlarge.",
  // SAUCE-246: canonical + openGraph added (absolute via root metadataBase).
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Shade Sail Gallery | Real Phoenix Installs | Apex Sail Shades",
    description:
      "Real custom shade sail installs across Phoenix, residential backyards and commercial properties. Proof, not promises.",
    url: "/gallery",
    type: "website",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
