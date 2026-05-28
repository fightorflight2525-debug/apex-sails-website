"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface CarouselFrame {
  src: string;
  alt: string;
  /** Only honored on frame 0; passes through to next/image for LCP preservation. */
  priority?: boolean;
}

interface CrossFadeCarouselProps {
  frames: CarouselFrame[];
  /** Auto-cycle interval in ms. Default 6000 (6s). */
  intervalMs?: number;
  /** Cross-fade duration in ms. Default 700. */
  transitionMs?: number;
  /** Extra classes on the outer container. */
  className?: string;
  /** Tailwind aspect-ratio utility (e.g. "aspect-[3/2]"). Ignored when `fill` is true. */
  aspectRatio?: string;
  /** When true the carousel renders `absolute inset-0` and fills its parent (hero use case). */
  fill?: boolean;
  /** Accessible region label, required. */
  ariaLabel: string;
  /** Next/Image sizes attribute. Defaults sensible per mode. */
  sizes?: string;
  /** Class applied to each <Image>. Default `object-cover`. Use `object-contain` for technical drawings. */
  frameClassName?: string;
  /** Class applied to the chevron buttons. Default tuned for dark backgrounds (white chevrons). */
  chevronClassName?: string;
  /**
   * When `false`, render no chevrons and no click-to-pause overlay. The carousel
   * just auto-cycles (still respects prefers-reduced-motion). Use for purely
   * decorative/passive slideshows like the hero background strip. Default `true`.
   */
  controls?: boolean;
}

/** Open-triangle chevron (no base line, per H4 spec). */
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

/**
 * Shared cross-fade slideshow. Used by the home hero (fill mode, H4) and the
 * ShadeCast proof carousel (aspect-ratio mode, H9a).
 *
 * Honors `prefers-reduced-motion` by disabling auto-cycle; chevrons remain
 * functional for manual advance. LCP is preserved by passing `priority` through
 * on frame 0 only.
 */
export default function CrossFadeCarousel({
  frames,
  intervalMs = 6000,
  transitionMs = 700,
  className = "",
  aspectRatio,
  fill = false,
  ariaLabel,
  sizes,
  frameClassName = "object-cover",
  chevronClassName = "text-white/70 hover:text-white hover:bg-black/20",
  controls = true,
}: CrossFadeCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const n = frames.length;

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (paused || reduced || n < 2) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % n);
    }, intervalMs);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [paused, reduced, n, intervalMs]);

  const advance = useCallback(
    (dir: 1 | -1) => {
      setIndex((i) => (i + dir + n) % n);
      setPaused((p) => !p);
    },
    [n],
  );
  const togglePause = useCallback(() => setPaused((p) => !p), []);

  const outerBase = fill ? "absolute inset-0" : "relative w-full";
  // `isolate` creates a new stacking context so internal z-20 chevrons don't leak above
  // sibling content (e.g. hero CTAs sit safely at the parent's z-10 above the carousel).
  const outerClass = [outerBase, "isolate", !fill && aspectRatio ? aspectRatio : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={outerClass} role="region" aria-label={ariaLabel}>
      {frames.map((f, i) => (
        <div
          key={f.src}
          className="absolute inset-0"
          style={{
            opacity: i === index ? 1 : 0,
            transition: `opacity ${transitionMs}ms ease-in-out`,
            zIndex: i === index ? 1 : 0,
          }}
          aria-hidden={i !== index}
        >
          <Image
            src={f.src}
            alt={f.alt}
            fill
            sizes={sizes ?? (fill ? "100vw" : "(max-width: 1024px) 100vw, 50vw")}
            className={frameClassName}
            priority={i === 0 && (f.priority ?? false)}
          />
        </div>
      ))}
      {/* Click-to-pause overlay. Opt-out in fill mode because the hero content layer
          sits visually above the carousel and we don't want stray clicks on text/CTAs
          to toggle the slideshow. Also opt-out when controls is false (passive mode). */}
      {!fill && controls && (
        <button
          type="button"
          onClick={togglePause}
          className="absolute inset-0 z-10 cursor-pointer focus:outline-none"
          aria-label={paused ? "Resume slideshow" : "Pause slideshow"}
          tabIndex={-1}
        />
      )}
      {controls && n > 1 && (
        <>
          <button
            type="button"
            onClick={() => advance(-1)}
            className={`absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 ${chevronClassName}`}
            aria-label="Previous slide"
          >
            <Chevron direction="left" />
          </button>
          <button
            type="button"
            onClick={() => advance(1)}
            className={`absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 ${chevronClassName}`}
            aria-label="Next slide"
          >
            <Chevron direction="right" />
          </button>
        </>
      )}
    </div>
  );
}
