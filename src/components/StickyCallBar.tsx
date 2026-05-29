"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Mobile-only sticky CTA bar that slides up after the user scrolls past the hero.
 * position: fixed, so it adds no document-flow layout shift (CLS-safe).
 */
export default function StickyCallBar() {
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
      <div className="flex gap-3 border-t border-charcoal/10 bg-white/95 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur">
        <Link
          href="/contact"
          className="flex-1 inline-flex items-center justify-center rounded-full bg-copper px-4 py-3 text-sm font-semibold text-white"
        >
          My <em className="not-italic font-bold text-[1.06em] mx-0.5">Free</em> Design + Visit
        </Link>
        <a
          href="tel:+16028370370"
          className="inline-flex items-center justify-center rounded-full border-2 border-copper px-6 py-3 text-sm font-semibold text-copper"
        >
          Call
        </a>
      </div>
    </div>
  );
}
