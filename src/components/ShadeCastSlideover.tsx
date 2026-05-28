"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";

/**
 * 2×2 collage panel quadrants (H9b spec, exact order).
 * TL=03, TR=05, BL=08, BR=04.
 */
const COLLAGE = [
  {
    src: "/images/wsm-03.webp",
    alt: "HyPar shade-sail CAD: foundation post + forged eye-bolt attachment.",
  },
  {
    src: "/images/wsm-05.webp",
    alt: "SketchUp rendering of HyPar shade sail structure.",
  },
  {
    src: "/images/wsm-08.webp",
    alt: "CMU wall corner bracket detail drawings with KEYNOTES.",
  },
  {
    src: "/images/wsm-04.webp",
    alt: "Rafter bracket application with shade-sail SketchUp inset.",
  },
] as const;

/** Open-triangle chevron (matches CrossFadeCarousel aesthetic). */
function Chevron({ direction }: { direction: "left" | "right" }) {
  const d = direction === "left" ? "M 14 4 L 6 12 L 14 20" : "M 8 4 L 16 12 L 8 20";
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

interface ShadeCastSlideoverProps {
  /** The ShadeCast block to wrap (typically <ShadeCastDemo />). */
  children: ReactNode;
}

/**
 * Wraps the ShadeCast block so a right-edge chevron slides over a 2×2 engineering
 * collage in the SAME footprint, and a left-edge chevron slides back. Honors
 * prefers-reduced-motion by swapping panels instantly (no slide).
 */
export default function ShadeCastSlideover({ children }: ShadeCastSlideoverProps) {
  const [showCollage, setShowCollage] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const transition = reduced ? "" : "transition-transform duration-500 ease-in-out";
  const shadecastTx = showCollage ? "-translate-x-full" : "translate-x-0";
  const collageTx = showCollage ? "translate-x-0" : "translate-x-full";

  return (
    <div className="relative w-full">
      {/* Outer clip: overflow-hidden so the off-screen panel stays clipped during slide. */}
      <div className="relative w-full overflow-hidden rounded-2xl">
        {/* Panel A: ShadeCast (in normal flow, provides intrinsic height). */}
        <div className={`relative w-full ${transition} ${shadecastTx}`} aria-hidden={showCollage}>
          {children}
        </div>
        {/* Panel B: 2x2 collage (absolute, fills the same footprint). */}
        <div
          className={`absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 bg-cream border border-sand/40 rounded-2xl overflow-hidden ${transition} ${collageTx}`}
          aria-hidden={!showCollage}
        >
          {COLLAGE.map((q) => (
            <div key={q.src} className="relative bg-white">
              <Image
                src={q.src}
                alt={q.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Chevron: right edge in shadecast state, left edge in collage state. */}
      {!showCollage ? (
        <button
          type="button"
          onClick={() => setShowCollage(true)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/90 text-charcoal hover:bg-white shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-copper/40"
          aria-label="Show engineering drawings"
        >
          <Chevron direction="right" />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setShowCollage(false)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/90 text-charcoal hover:bg-white shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-copper/40"
          aria-label="Return to ShadeCast preview"
        >
          <Chevron direction="left" />
        </button>
      )}
    </div>
  );
}
