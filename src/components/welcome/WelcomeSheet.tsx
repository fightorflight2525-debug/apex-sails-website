"use client";

// ============================================================================
// WelcomeSheet (SAUCE-313, CTA v3.1 S2.3): the website "pop-up". After ANY
// form on the site, router.push("/welcome") is intercepted (app/@modal/
// (.)welcome) and the /welcome ROUTE enters as a full-screen sheet that slides
// up over the page the buyer was on. One page, one URL (/welcome), tracking
// unchanged, and the back button works: Back (or the close button) returns
// them to the page underneath, which stayed mounted.
// A hard load of /welcome (the Meta thank-you button, a refresh) renders the
// same content as a normal page (app/welcome/page.tsx), no sheet.
// ============================================================================

import { useCallback, useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WelcomeSheet({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [closing, setClosing] = useState(false);
  const closingRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    setClosing(true);
    let reduce = false;
    try {
      reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      /* animate */
    }
    window.setTimeout(() => router.back(), reduce ? 0 : 250);
  }, [router]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    scrollRef.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      // Escape inside the photo viewer closes the viewer only, not the sheet.
      if (document.querySelector('[aria-labelledby="lightbox-title"]')) return;
      close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [close]);

  // A link inside the sheet that leaves /welcome (the gallery, the legal pages)
  // is followed as a full page load, so the sheet never lingers over the next page.
  function onClickCapture(e: MouseEvent<HTMLDivElement>) {
    const a = (e.target as HTMLElement).closest?.("a") as HTMLAnchorElement | null;
    if (!a || a.target === "_blank" || e.defaultPrevented) return;
    const href = a.getAttribute("href") || "";
    if (!href.startsWith("/") || href.startsWith("//") || href.endsWith(".vcf")) return;
    e.preventDefault();
    window.location.assign(href);
  }

  return (
    <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-labelledby="welcome-expect">
      <div
        className={`absolute inset-0 bg-black/60 ${closing ? "sheet-backdrop-exit" : "sheet-backdrop-enter"}`}
        onClick={close}
        aria-hidden="true"
      />
      <div
        className={`absolute inset-x-0 bottom-0 top-2.5 overflow-hidden rounded-t-[26px] bg-charcoal shadow-[0_-12px_40px_rgba(0,0,0,0.45)] sm:top-5 ${
          closing ? "sheet-exit" : "sheet-enter"
        }`}
      >
        <div
          ref={scrollRef}
          tabIndex={-1}
          onClickCapture={onClickCapture}
          className="h-full overflow-y-auto overscroll-contain outline-none"
        >
          {children}
        </div>

        {/* The sheet's top row: logo, grabber, close. Floats over the content's own top padding. */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex h-14 items-center justify-between bg-gradient-to-b from-charcoal via-charcoal/85 to-transparent px-4 pb-1">
          <Image src="/images/logo-dark-bg.svg" alt="Apex Sail Shades" width={200} height={57} className="h-7 w-auto opacity-90" />
          <span className="absolute left-1/2 top-2 h-1 w-10 -translate-x-1/2 rounded-full bg-white/25" aria-hidden="true" />
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="pointer-events-auto -mr-1 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition-colors hover:bg-black/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" aria-hidden="true">
              <path d="M6 6 L18 18 M18 6 L6 18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
