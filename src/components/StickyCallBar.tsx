"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Mobile-only sticky CTA bar that slides up after the user scrolls past the hero.
 * position: fixed, so it adds no document-flow layout shift (CLS-safe).
 * v2: phone restored alongside the form CTA. Calls are the dominant real
 * conversion channel, so the bar offers both paths.
 */
export default function StickyCallBar() {
  // MO decision (operator delegated, 2026-07-30): on /residential the bar goes
  // DARK to match the page's premium dark aesthetic; other pages stay white.
  const isResidential = usePathname() === "/residential";
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 lg:hidden transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div
        className={`flex gap-2 px-4 py-3 backdrop-blur ${
          isResidential
            ? "border-t border-white/10 bg-charcoal/95 shadow-[0_-4px_20px_rgba(0,0,0,0.35)]"
            : "border-t border-charcoal/10 bg-white/95 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
        }`}
      >
        <a
          href="tel:+16028370370"
          className="inline-flex items-center justify-center rounded-full border-2 border-copper px-5 text-sm font-bold text-copper"
        >
          Call
        </a>
        <Link
          href="/contact"
          className="flex-1 inline-flex flex-col items-center justify-center rounded-full bg-copper px-4 py-2.5 text-white"
        >
          <span className="text-sm font-semibold">
            Get My <em className="not-italic font-bold text-[1.06em] mx-0.5">Free</em> Design + Estimate
          </span>
          <span className="text-[10px] uppercase tracking-widest text-white/85">
            We call within the hour
          </span>
        </Link>
      </div>
    </div>
  );
}
