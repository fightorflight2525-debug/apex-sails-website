"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

interface CountUpProps {
  to: number;
  /** Starting value, default 0. Used by B5 "Since 2010 → 2018" pattern. */
  from?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  /** Fires once when the count animation completes (or immediately under reduced-motion). Used by B4 StatsBand color animation. */
  onComplete?: () => void;
}

/**
 * Counts from `from` (default 0) to `to` once the element scrolls into view.
 * Honors prefers-reduced-motion (jumps straight to the final value, fires
 * onComplete immediately).
 */
export default function CountUp({
  to,
  from = 0,
  duration = 1.4,
  prefix = "",
  suffix = "",
  className,
  onComplete,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      onComplete?.();
      return;
    }
    let raf = 0;
    const start = performance.now();
    const span = to - from;
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(from + eased * span));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        onComplete?.();
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, to, from, duration, onComplete]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
