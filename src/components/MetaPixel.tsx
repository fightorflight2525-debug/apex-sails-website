"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * META PIXEL SPA ROUTE TRACKER (SAUCE-273, M1)
 *
 * The base pixel snippet in layout.tsx (dataset 1434479721875306) fires
 * PageView exactly once, on the initial document load. This is a Next.js App
 * Router SPA: client-side navigations never reload the document, so without
 * this component every route change after the first page would be invisible
 * to Meta. Same defect class as the GO-1 tel: fix (a tracker that looks wired
 * but misses the SPA path).
 *
 * The initial render is deliberately SKIPPED here because the base snippet
 * already fired PageView for it; this component fires only on subsequent
 * pathname changes. Verified in Events Manager TEST EVENTS at M3, per the
 * attack map (the Overview tab lags up to 30 min and is not the gate).
 */
export default function MetaPixel() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.fbq?.("track", "PageView");
  }, [pathname]);

  return null;
}
