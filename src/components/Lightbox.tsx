"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

export type LightboxImage = { src: string; alt: string };

export type LightboxProps = {
  images: LightboxImage[];
  /** Tailwind classes applied to the outer grid container. */
  gridClassName?: string;
  /** Tailwind classes applied to each thumbnail button wrapper. */
  itemClassName?: string;
  /** next/image sizes prop passed to each thumbnail. */
  imageSizes?: string;
};

function CloseIcon() {
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
      <path d="M6 6 L18 18 M18 6 L6 18" />
    </svg>
  );
}

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
 * Clickable thumbnail grid with a fullscreen modal viewer. State is local React
 * state; no browser storage. Keyboard: ArrowLeft/ArrowRight navigate (wraparound),
 * Escape closes. Focus traps within (close, prev, next). Body scroll locks while
 * open and restores prior overflow on close. Honors prefers-reduced-motion.
 */
export default function Lightbox({
  images,
  gridClassName = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
  itemClassName = "relative aspect-square overflow-hidden rounded-xl bg-charcoal/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-copper/60 focus:ring-offset-2",
  imageSizes = "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw",
}: LightboxProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [reduced, setReduced] = useState(false);
  const thumbRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const prevBtnRef = useRef<HTMLButtonElement | null>(null);
  const nextBtnRef = useRef<HTMLButtonElement | null>(null);
  const previousOverflowRef = useRef<string>("");
  const lastOpenedIndexRef = useRef<number | null>(null);
  const n = images.length;

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const open = useCallback((i: number) => {
    lastOpenedIndexRef.current = i;
    setOpenIndex(i);
  }, []);
  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % n)),
    [n],
  );
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + n) % n)),
    [n],
  );

  // While open: lock body scroll, bind keyboard, manage focus.
  useEffect(() => {
    if (openIndex === null) return;
    previousOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusFrame = requestAnimationFrame(() => {
      closeBtnRef.current?.focus();
    });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "ArrowRight" && n > 1) {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" && n > 1) {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflowRef.current;
      const lastIdx = lastOpenedIndexRef.current;
      if (lastIdx !== null) thumbRefs.current[lastIdx]?.focus();
    };
  }, [openIndex, close, next, prev, n]);

  // Basic focus trap across (close, prev, next).
  const trap = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;
    const focusables = [
      closeBtnRef.current,
      prevBtnRef.current,
      nextBtnRef.current,
    ].filter((b): b is HTMLButtonElement => b !== null);
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  if (n === 0) return null;

  const current = openIndex !== null ? images[openIndex] : null;
  const transitionClass = reduced ? "" : "transition-opacity duration-200";

  return (
    <>
      <div className={gridClassName}>
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            ref={(el) => {
              thumbRefs.current[i] = el;
            }}
            onClick={() => open(i)}
            className={itemClassName}
            aria-label={`Open image: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes={imageSizes}
              className="object-cover transition-transform duration-300 hover:scale-105"
              loading={i < 4 ? "eager" : "lazy"}
            />
          </button>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className={`fixed inset-0 z-50 bg-charcoal/95 ${transitionClass}`}
          onClick={close}
          onKeyDown={trap}
        >
          <h2 id="lightbox-title" className="sr-only">
            Image viewer
          </h2>

          {n > 1 && openIndex !== null && (
            <p className="absolute top-5 left-1/2 -translate-x-1/2 text-sm text-sand font-body select-none z-10">
              {openIndex + 1} / {n}
            </p>
          )}

          <button
            ref={closeBtnRef}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute top-4 right-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Close lightbox"
          >
            <CloseIcon />
          </button>

          {n > 1 && (
            <>
              <button
                ref={prevBtnRef}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Previous image"
              >
                <Chevron direction="left" />
              </button>
              <button
                ref={nextBtnRef}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Next image"
              >
                <Chevron direction="right" />
              </button>
            </>
          )}

          <div
            className="absolute inset-0 flex items-center justify-center p-4 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-[90vw] max-h-[85vh]">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
