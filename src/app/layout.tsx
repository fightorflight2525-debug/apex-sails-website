import type { Metadata } from "next";
import Script from "next/script";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhoneConversionTracker from "@/components/PhoneConversionTracker";

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
  // SAUCE-246: site-wide absolute-URL base. Without this, Next emits RELATIVE
  // canonical and og:url values (verified live: /residential shipped
  // <link rel="canonical" href="/residential">). Google's canonical docs say to
  // "use absolute paths rather than relative paths with the rel=canonical link
  // element" because relative paths "can cause problems in the long run (for
  // example, if you unintentionally allow your testing site to be crawled)".
  // With metadataBase set, every relative canonical/openGraph url below resolves
  // to a fully qualified URL automatically. Do not remove.
  metadataBase: new URL("https://apex-sail-shades.com"),
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
        url: "https://apex-sail-shades.com/images/og-ws-29.webp",
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
    images: ["https://apex-sail-shades.com/images/og-ws-29.webp"],
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
        <PhoneConversionTracker />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18055743018"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-18055743018');
  gtag('config', 'AW-18055743018/CIvxCPiSoZ0cEKqM06FD', {
    'phone_conversion_number': '(602) 837-0370',
    'phone_conversion_callback': function(formatted_number, mobile_number) {
      window.__apexFwd = { display: formatted_number, mobile: mobile_number };
      if (typeof window.__apexApplyFwd === 'function') window.__apexApplyFwd();
    }
  });
`}</Script>
      </body>
    </html>
  );
}
