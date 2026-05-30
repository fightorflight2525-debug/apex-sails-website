"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
const GALLERY_FRAMES = [
  { src: "/images/home-card-ws22.webp", alt: "Phoenix residential shade sail" },
  { src: "/images/gallery-ws-29.webp", alt: "Custom shade sail backyard install" },
  { src: "/images/gallery-os-01.webp", alt: "Phoenix outdoor shade install" },
  { src: "/images/gallery-os-19.webp", alt: "Red and tan residential shade sails" },
  { src: "/images/business-card-ws06.webp", alt: "Apex commercial shade sail install" },
  { src: "/images/gallery-ws-34.webp", alt: "Phoenix public art shade sail" },
  { src: "/images/showcase-commercial-ws48.webp", alt: "Commercial shade sail venue" },
  { src: "/images/gallery-os-07.webp", alt: "Aerial Phoenix shade sail commercial complex" },
];

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
