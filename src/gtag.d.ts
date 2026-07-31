export {};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
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
