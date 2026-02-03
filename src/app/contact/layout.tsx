import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Your Free Assessment | Apex Sail Shades",
  description:
    "Request a complimentary shade analysis and ShadeCast™ shadow study for your commercial property. Golf courses, entertainment venues, and senior living facilities in Arizona.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
