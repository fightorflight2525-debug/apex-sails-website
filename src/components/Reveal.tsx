"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** seconds of delay before the reveal starts */
  delay?: number;
  /** vertical rise distance in px (default 14) */
  y?: number;
}

/**
 * Scroll-reveal wrapper: fade + gentle rise, runs once when in view.
 * Honors prefers-reduced-motion (renders content in place, no transform).
 * Never wrap the LCP/hero element in this; the hero must render immediately.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 14,
}: RevealProps) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduce ? 0 : 0.6,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
