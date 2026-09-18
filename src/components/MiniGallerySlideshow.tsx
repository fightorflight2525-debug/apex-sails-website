"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HOME_CAROUSEL_FRAMES } from "@/lib/homeCarousel";

/**
 * Homepage mini-gallery slideshow (A6 / B2). 8 hand-picked frames from the
 * Dispatch 1 gallery + placed-asset pool, 2.5s fade interval, honors
 * prefers-reduced-motion (no auto-cycle when set).
 *
 * Path notes (builder substitution from dispatch-specified paths):
 *   gallery-ws-22 → home-card-ws22.webp (WS-22 was placed at home-card name)
 *   gallery-ws-06 → business-card-ws06.webp (WS-06 placed at business-card name)
 *   gallery-ws-48 → showcase-commercial-ws48.webp (WS-48 placed at showcase name)
 * Same underlying photo bytes; MO's curated photo set preserved.
 */
// SAUCE-314: the frames live in @/lib/homeCarousel (same photos, same order) so
// /free-design's ideas carousel shows exactly this set and the two cannot drift.
const GALLERY_FRAMES = HOME_CAROUSEL_FRAMES;

export default function MiniGallerySlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % GALLERY_FRAMES.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {GALLERY_FRAMES.map((frame, i) => (
        <div
          key={frame.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={frame.src}
            alt={frame.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
      ))}
    </>
  );
}
