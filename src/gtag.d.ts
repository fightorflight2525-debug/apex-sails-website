export {};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    /**
     * Meta pixel (dataset 1434479721875306). Added SAUCE-273 M1. The base
     * snippet in layout.tsx defines it; components call it optionally so
     * nothing breaks if the script is blocked.
     */
    fbq?: (...args: any[]) => void;
    _fbq?: unknown;
    /**
     * Google forwarding number handed back by phone_conversion_callback.
     * display = human format for on-page text, mobile = dialable format for tel: hrefs.
     * Added SAUCE-243 2026-07-31 with the call-tracking fix.
     */
    __apexFwd?: { display: string; mobile: string };
    /** Re-applies the forwarding number to every tel: href. See PhoneConversionTracker. */
    __apexApplyFwd?: () => void;
  }
}
