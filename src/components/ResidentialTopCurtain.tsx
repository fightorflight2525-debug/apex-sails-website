"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Invisible curtain under the transparent header on /residential.
 * While the header is still transparent over the pinned hero zone, page text
 * scrolling up dissolves at the header line instead of overlapping the logo
 * and menu (operator: text should stop "as if the white bar was there").
 * Uses a masked dark gradient + blur so passing text fades out naturally.
 * Once the header flips white (same 0.9 * innerHeight threshold as Header.tsx
 * F1), the white bar takes over and this curtain fades away.
 */
export default function ResidentialTopCurtain() {
  const pathname = usePathname();
  const [active, setActive] = useState(true);

  useEffect(() => {
    const onScroll = () =>
      setActive(window.scrollY <= Math.round(window.innerHeight * 0.9));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname !== "/residential") return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-x-0 top-0 z-40 h-28 transition-opacity duration-300 ${
        active ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background:
          "linear-gradient(to bottom, rgba(26,26,26,0.92) 0%, rgba(26,26,26,0.8) 55%, rgba(26,26,26,0) 100%)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        maskImage:
          "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
      }}
    />
  );
}
