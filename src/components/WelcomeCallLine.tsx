"use client";

// ============================================================================
// WelcomeCallLine (SAUCE-312): the line under "You're family now!" on /welcome.
// Operator's brief 2026-09-17: friendlier, a real person excited to help (not a
// salesperson), and make them WANT to pick up. It names the calling number so
// they answer it.
// KEEP THE PROMISE TRUE: inside the call window (Phoenix time) it promises the
// call in 15 minutes; outside it, the first call of the morning. A 10 PM buyer
// is never told "15 minutes". CALL WINDOW HOURS ARE THE OPERATOR'S RULING.
// Rendered after mount (the server cannot know the buyer's hour), faded in.
// ============================================================================

import { useEffect, useState } from "react";
import posthog from "posthog-js";

const CALL_START_HOUR = 7; // 7:00 AM Phoenix (America/Phoenix, no DST)
const CALL_END_HOUR = 19; // 7:00 PM Phoenix

function phoenixHour(): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Phoenix",
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());
  return parseInt(parts.find((p) => p.type === "hour")?.value ?? "12", 10);
}

export default function WelcomeCallLine() {
  const [variant, setVariant] = useState<"day" | "night" | null>(null);

  useEffect(() => {
    let v: "day" | "night" = "day";
    try {
      const h = phoenixHour();
      v = h >= CALL_START_HOUR && h < CALL_END_HOUR ? "day" : "night";
    } catch {
      /* default to day */
    }
    setVariant(v);
    let from = "";
    try {
      from = sessionStorage.getItem("apex_door") || "";
    } catch {
      /* storage blocked */
    }
    posthog.capture("welcome_viewed", { variant: v, from_door: from || null });
  }, []);

  const num = <strong className="whitespace-nowrap font-bold text-white">602-837-0370</strong>;

  return (
    <p
      className={`mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-white/90 transition-opacity duration-500 sm:text-2xl ${
        variant ? "opacity-100" : "opacity-0"
      }`}
    >
      {variant === "night" ? (
        <>
          Heads up: an Apex human with a fresh cup of coffee is calling you from {num} first thing in the
          morning. Save the number and pick up. We can&apos;t wait to hear about your space!
        </>
      ) : (
        <>
          Heads up: an Apex human with a little too much coffee is calling you from {num} in the next 15
          minutes. Save the number and pick up. We can&apos;t wait to hear about your space!
        </>
      )}
    </p>
  );
}

// ============================================================================
// SaveNumberButton: one tap saves Apex (602-837-0370) to the buyer's contacts,
// so the callback shows up as "Apex Sail Shades", not an unknown number.
// Serves /apex-sail-shades.vcf as text/vcard (next.config.ts headers): Safari
// opens "Create New Contact", Chrome imports it. HIDDEN inside the Instagram /
// Facebook in-app browsers, whose vCard handling is unverified: there the line
// above still tells them to save the number. Measured: save_number_click.
// ============================================================================
export function SaveNumberButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let inApp = false;
    try {
      inApp = /FBAN|FBAV|FB_IAB|Instagram/i.test(navigator.userAgent);
    } catch {
      /* assume a normal browser */
    }
    setShow(!inApp);
  }, []);
  if (!show) return null;
  return (
    <div className="flex flex-col items-center">
      <a
        href="/apex-sail-shades.vcf"
        onClick={() => posthog.capture("save_number_click", {})}
        className="cta-glow-loop inline-flex items-center justify-center gap-2 rounded-full bg-copper px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-copper-dark sm:text-lg"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
        </svg>
        Save our number
      </a>
      <span className="mt-2 text-xs uppercase tracking-widest text-white/60">So your phone knows it&apos;s us</span>
    </div>
  );
}
