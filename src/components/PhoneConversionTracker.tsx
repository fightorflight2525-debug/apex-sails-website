'use client';

import { useEffect } from 'react';

export default function PhoneConversionTracker() {
  useEffect(() => {
    const handler = (e: Event) => {
      const t = e.target as HTMLElement | null;
      const a = t?.closest?.('a[href^="tel:"]');
      if (!a) return;
      window.gtag?.('event', 'conversion', {
        send_to: 'AW-18055743018/CIvxCPiSoZ0cEKqM06FD',
        value: 750,
        currency: 'USD',
      });
    };
    document.addEventListener('click', handler, true);
    return () => document.removeEventListener('click', handler, true);
  }, []);
  return null;
}
