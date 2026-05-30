import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Apex Sail Shades",
  description:
    "Real answers about custom shade sails in Phoenix: pricing, engineering, HOA approval, warranty, and the free design visit.",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
