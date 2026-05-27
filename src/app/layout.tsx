import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Apex Sail Shades | Phoenix Shade Sail Specialists",
  description:
    "Custom-engineered shade sails for Phoenix homes and businesses. Designed and installed in one visit, built for 110F sun and monsoon winds. 96% UV block, 10-year fabric, engineered and tensioned.",
  keywords: [
    "shade sails Phoenix",
    "residential shade sails",
    "commercial shade sails",
    "golf course shade",
    "senior living shade",
    "tensioned membrane structures",
    "Arizona shade solutions",
    "ShadeCast",
  ],
  openGraph: {
    title: "Apex Sail Shades | Phoenix Shade Sail Specialists",
    description:
      "Custom-engineered shade sails for Phoenix homes and businesses. Designed and installed in one visit, built for 110F sun and monsoon winds.",
    type: "website",
    locale: "en_US",
    siteName: "Apex Sail Shades",
    images: [
      {
        url: "https://apex-sail-shades.com/images/hero-shade-sail.webp",
        width: 1200,
        height: 630,
        alt: "Custom shade sail installation by Apex Sail Shades in Phoenix, Arizona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Sail Shades | Phoenix Shade Sail Specialists",
    description:
      "Custom-engineered shade sails for Phoenix homes and businesses. Designed and installed in one visit, built for 110F sun and monsoon winds.",
    images: ["https://apex-sail-shades.com/images/hero-shade-sail.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dmSans.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
