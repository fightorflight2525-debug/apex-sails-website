"use client";

// SAUCE-205 Meta Phase A wiring (ledger 22a, $0 build).
// Browser side is PageView/ViewContent ONLY. The Lead event ships EXCLUSIVELY
// server-side via the PostHog "Meta Ads Conversions" CAPI destination (same
// Pixel/Dataset ID browser+server, event_id dedup there), so no
// fbq('track','Lead') may ever be added here.
// The Pixel ID is public-by-design (it ships in page source on every
// Meta-pixeled site); the env var allows rotation without a code change.
// Empty ID = this component is a complete no-op, so the file is safe to
// merge before the dataset exists.

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const VIEW_CONTENT: Record<string, string> = {
  "/residential": "Residential Shade Sails",
  "/commercial": "Commercial Shade Sails",
};

export default function MetaPixel() {
  const pathname = usePathname();
  // Initial page (PageView + ViewContent) is handled synchronously by the
  // base snippet below, so the effect only handles SPA route CHANGES.
  // lastPath guard also absorbs React strict-mode double-invoke in dev.
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    if (!PIXEL_ID) return;
    if (lastPath.current === null) {
      lastPath.current = pathname;
      return;
    }
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    if (!window.fbq) return;
    window.fbq("track", "PageView");
    const contentName = VIEW_CONTENT[pathname];
    if (contentName) {
      window.fbq("track", "ViewContent", { content_name: contentName });
    }
  }, [pathname]);

  if (!PIXEL_ID) return null;

  return (
    <Script id="meta-pixel-base" strategy="afterInteractive">{`
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${PIXEL_ID}');
      fbq('track', 'PageView');
      var apexVc = {
        '/residential': 'Residential Shade Sails',
        '/commercial': 'Commercial Shade Sails'
      }[location.pathname];
      if (apexVc) { fbq('track', 'ViewContent', { content_name: apexVc }); }
    `}</Script>
  );
}
