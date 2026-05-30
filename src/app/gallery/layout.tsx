import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Apex Sail Shades",
  description:
    "Real shade-sail installs across Phoenix. Browse residential backyards and commercial properties; click any photo to enlarge.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
