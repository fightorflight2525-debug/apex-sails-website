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
  title: "Apex Sail Shades | Engineered Commercial Shade Solutions",
  description:
    "Premium commercial shade sail installations for golf courses, entertainment venues, and senior living facilities in Arizona and Utah. ShadeCast™ technology, HyPar engineering, 96% UV block.",
  keywords: [
    "commercial shade sails",
    "golf course shade",
    "senior living shade",
    "tensioned membrane structures",
    "Arizona shade solutions",
    "ShadeCast",
    "HyPar shade",
  ],
  openGraph: {
    title: "Apex Sail Shades | Engineered Commercial Shade Solutions",
    description:
      "Turn Arizona's sun into revenue with engineered shade that pays for itself. Commercial installations for golf, entertainment, and senior living.",
    type: "website",
    locale: "en_US",
    siteName: "Apex Sail Shades",
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
