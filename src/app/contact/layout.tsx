import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Shade Sail Quote & Design Visit | Apex Sail Shades",
  description:
    "Request a complimentary shade analysis and ShadeCast™ shadow study for your Phoenix home or business. Custom-engineered shade sails for residential and commercial spaces across Arizona.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
