"use client";

// The ShadeCast loop player. Muted, looping, inline (iPhone autoplay rules),
// poster first. It fetches nothing until it is near the screen, then plays;
// it pauses off screen. Reduced-motion readers keep the still poster.

import { useEffect, useRef } from "react";

type Props = { mp4: string; webm: string; poster: string; width: number; height: number; label: string };

export default function LoopVideo({ mp4, webm, poster, width, height, label }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    let reduce = false;
    try {
      reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      /* play */
    }
    if (reduce || typeof IntersectionObserver === "undefined") return;
    let loaded = false;
    const io = new IntersectionObserver(
      (entries) => {
        const on = entries.some((e) => e.isIntersecting);
        if (on) {
          if (!loaded) {
            loaded = true;
            v.preload = "auto";
            v.load();
          }
          v.play().catch(() => {
            /* autoplay refused: the poster stays */
          });
        } else if (loaded) {
          v.pause();
        }
      },
      { rootMargin: "240px 0px" },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className="block h-auto w-full"
      width={width}
      height={height}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
    >
      <source src={mp4} type="video/mp4" />
      <source src={webm} type="video/webm" />
    </video>
  );
}
