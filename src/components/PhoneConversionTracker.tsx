"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import posthog from "posthog-js";

/**
 * CALL TRACKING ENFORCER (SAUCE-243, 2026-07-31)
 *
 * WHY THIS EXISTS
 * Google's "calls from a website" conversion (action 7577553272, type
 * WEBSITE_CALL, 60 second threshold, label CIvxCPiSoZ0cEKqM06FD) only credits a
 * call when the visitor dials a GOOGLE FORWARDING NUMBER. gtag already requests
 * that number correctly on every ad-click visit (verified live: the
 * googleadservices .../wcm request fires with dn=6028370370 and the right label).
 * But gtag's default behaviour only rewrites the number where it appears as
 * TEXT. Every call control on this site is a hardcoded
 * <a href="tel:+16028370370">, so on mobile, which is where most shade customers
 * actually call from, the tap dialled the raw business line and Google never saw
 * the call. That is why the WEBSITE_CALL action sat at zero conversions since
 * launch while the form action recorded 12 in 30 days.
 *
 * WHAT IT DOES
 * layout.tsx passes phone_conversion_callback. Google calls it once a forwarding
 * number is allocated, handing back a display format and a dialable format. We
 * stash both and rewrite every tel: href to the forwarding number. Because this
 * is a Next.js app with client-side routing, newly rendered links carry the
 * hardcoded href again, so we re-apply on every route change and on DOM mutation.
 * Only the href ATTRIBUTE is touched, never text nodes, so React reconciliation
 * is never disturbed.
 *
 * WHAT IT DELIBERATELY NO LONGER DOES
 * It used to fire gtag('event','conversion') at the WEBSITE_CALL label on every
 * tel: click. That was a type mismatch. A WEBSITE_CALL action is credited by
 * Google's telephony side when a forwarding-number call exceeds the threshold and
 * cannot be fired from the browser, so those events were silently discarded and
 * created a false impression that call tracking was wired. Click volume now goes
 * to PostHog instead, which gives a first-party signal without double counting
 * against the Google conversion. The `forwarded` property on that event reports
 * whether the swap actually happened, so coverage is measurable rather than
 * assumed.
 */

const RAW_TEL = "tel:+16028370370";

function applyForwardingNumber(): void {
  const fwd = window.__apexFwd;
  if (!fwd?.mobile) return;
  const want = "tel:" + fwd.mobile;
  document
    .querySelectorAll<HTMLAnchorElement>('a[href^="tel:"]')
    .forEach((a) => {
      if (a.getAttribute("href") !== want) a.setAttribute("href", want);
    });
}

export default function PhoneConversionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // The gtag callback may fire before or after this component mounts, so both
    // orders are covered: the callback invokes us if we are ready, and we apply
    // on mount in case it already landed.
    window.__apexApplyFwd = applyForwardingNumber;
    applyForwardingNumber();

    let queued = false;
    const observer = new MutationObserver(() => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        applyForwardingNumber();
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    const onClick = (e: Event) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!link) return;
      posthog.capture("call_button_click", {
        forwarded: (link.getAttribute("href") || "") !== RAW_TEL,
        path: window.location.pathname,
      });
    };
    document.addEventListener("click", onClick, true);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  // Client-side navigation re-renders the hardcoded href, so re-apply per route.
  useEffect(() => {
    applyForwardingNumber();
  }, [pathname]);

  return null;
}
