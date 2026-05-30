"use client";

import { useState } from "react";
import CountUp from "@/components/CountUp";

/**
 * Canonical 4-icon stats band, shared across home, commercial, residential,
 * and senior-living. Render-identical on every page (no props).
 * Source of truth: home "SECTION 2: 4-ICON VALUE BAR".
 *
 * B4 (Sauce079 D3): numbers + icons render in COPPER during count-up,
 * transition to CHARCOAL once the last CountUp completes (via onComplete
 * callback on the 90mph stat (last in render order). Reduced-motion users
 * see the final charcoal state immediately (CountUp fires onComplete sync).
 */
export default function StatsBand() {
  const [counted, setCounted] = useState(false);

  const colorClass = `transition-colors duration-500 ${counted ? "text-charcoal" : "text-copper"}`;
  const iconColorClass = `w-10 h-10 ${colorClass}`;
  const numberColorClass = `text-xl font-heading font-bold ${colorClass}`;

  return (
    <section className="bg-cream py-10 sm:py-12 border-b border-sand/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {/* 96% UV Block */}
          <div className="flex flex-col items-center text-center gap-3">
            <svg className={iconColorClass} viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <circle cx="20" cy="16" r="8" stroke="currentColor" strokeWidth="2" />
              <line x1="20" y1="4" x2="20" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="20" y1="24" x2="20" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="8" y1="16" x2="12" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="28" y1="16" x2="32" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 30 L28 30 L24 34 L16 34 Z" fill="currentColor" opacity="0.3" />
              <path d="M14 26 L26 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div>
              <p className={numberColorClass}>
                <CountUp to={96} suffix="% UV Block" />
              </p>
              <p className="text-sm text-charcoal/50 mt-0.5">Maximum protection</p>
            </div>
          </div>

          {/* 15 deg F Cooler */}
          <div className="flex flex-col items-center text-center gap-3">
            <svg className={iconColorClass} viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <rect x="17" y="4" width="6" height="26" rx="3" stroke="currentColor" strokeWidth="2" />
              <circle cx="20" cy="32" r="5" stroke="currentColor" strokeWidth="2" />
              <rect x="19" y="14" width="2" height="16" rx="1" fill="currentColor" />
              <circle cx="20" cy="32" r="3" fill="currentColor" />
              <line x1="26" y1="12" x2="30" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="26" y1="18" x2="29" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="26" y1="24" x2="30" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <div>
              <p className={numberColorClass}>
                <CountUp to={15} suffix={"°F Cooler"} />
              </p>
              <p className="text-sm text-charcoal/50 mt-0.5">Under shade coverage</p>
            </div>
          </div>

          {/* 10-Year Warranty */}
          <div className="flex flex-col items-center text-center gap-3">
            <svg className={iconColorClass} viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <path d="M20 4 L32 10 L32 22 C32 30 26 36 20 38 C14 36 8 30 8 22 L8 10 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <polyline points="14,20 18,24 26,16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <p className={numberColorClass}>
                <CountUp to={10} suffix="-Year Warranty" />
              </p>
              <p className="text-sm text-charcoal/50 mt-0.5">Fabric &amp; structure</p>
            </div>
          </div>

          {/* 90mph Wind Rating: last CountUp fires onComplete to flip the color state */}
          <div className="flex flex-col items-center text-center gap-3">
            <svg className={iconColorClass} viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <path d="M6 14 L26 14 C30 14 34 11 34 8 C34 5 30 2 26 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M6 22 L30 22 C34 22 37 25 37 28 C37 31 34 34 30 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M6 30 L18 30 C21 30 24 33 24 35 C24 37 21 39 18 37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div>
              <p className={numberColorClass}>
                <CountUp to={90} suffix="mph Wind Rating" onComplete={() => setCounted(true)} />
              </p>
              <p className="text-sm text-charcoal/50 mt-0.5">Engineered to endure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
