"use client";

// ============================================================================
// WelcomeCallLine (SAUCE-312): the line under "You're family now!" on /welcome.
// Operator's brief 2026-09-17: friendlier, a real person excited to help (not a
// salesperson), and make them WANT to pick up. It names the calling number so
// they answer it.
// KEEP THE PROMISE TRUE: inside the call window (Phoenix time) it promises the
// call in 15 minutes; outside it, the first call of the morning. A 10 PM buyer
// is never told "15 minutes", and neither is a buyer 10 minutes before closing
// (SAUCE-313: the line switches off PROMISE_MINUTES early). HOURS ARE HIS RULING.
// Rendered after mount (the server cannot know the buyer's hour), faded in.
// ============================================================================

import { useEffect, useState } from "react";
import posthog from "posthog-js";

// CALL WINDOW = THE OPERATOR'S RULING. America/Phoenix (no DST), minutes after
// midnight, per weekday (0 = Sunday). null = nobody calls that day.
// OPERATOR RULING 2026-09-18 (SAUCE-313): 7:00 AM to 7:00 PM, every day.
const CALL_WINDOWS: Record<number, [number, number] | null> = {
  0: [7 * 60, 19 * 60],
  1: [7 * 60, 19 * 60],
  2: [7 * 60, 19 * 60],
  3: [7 * 60, 19 * 60],
  4: [7 * 60, 19 * 60],
  5: [7 * 60, 19 * 60],
  6: [7 * 60, 19 * 60],
};
// The day line promises a call "in the next 15 minutes", so it switches off
// PROMISE_MINUTES before the window closes: a 6:58 PM lead is never promised 7:13.
const PROMISE_MINUTES = 15;

function phoenixNow(): { weekday: number; minutes: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Phoenix",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const v = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const wd = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(v("weekday"));
  const h = parseInt(v("hour") || "12", 10) % 24;
  const m = parseInt(v("minute") || "0", 10);
  return { weekday: wd < 0 ? 1 : wd, minutes: h * 60 + m };
}

// True only while a call inside PROMISE_MINUTES can really happen.
// Exported (SAUCE-313): CallPromise, the time-aware line under every offer
// button, reads the SAME window so the site can never promise two things.
export function callPromiseHolds(): boolean {
  const { weekday, minutes } = phoenixNow();
  const w = CALL_WINDOWS[weekday];
  return !!w && minutes >= w[0] && minutes < w[1] - PROMISE_MINUTES;
}

// SAUCE-313: `className` sets the type size for the compact /welcome layout
// (the whole "What should I expect?" section must fit the first phone screen).
// The COPY below is unchanged.
export default function WelcomeCallLine({
  className = "mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-white/90 sm:text-2xl",
}: {
  className?: string;
}) {
  const [variant, setVariant] = useState<"day" | "night" | null>(null);

  useEffect(() => {
    let v: "day" | "night" = "day";
    try {
      v = callPromiseHolds() ? "day" : "night";
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
    <p className={`${className} transition-opacity duration-500 ${variant ? "opacity-100" : "opacity-0"}`}>
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

// ============================================================================
// CallNowButton: "Can't wait? Call us now", shown only while the 15-minute promise holds.
// After hours the page promises the morning call, so it does not invite a call
// nobody will answer. Same window as the line above.
// ============================================================================
export function CallNowButton() {
  const [day, setDay] = useState(false);
  useEffect(() => {
    try {
      setDay(callPromiseHolds());
    } catch {
      setDay(true);
    }
  }, []);
  if (!day) return null;
  return (
    <a
      href="tel:+16028370370"
      className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:text-lg"
    >
      Can&apos;t wait? Call us now
    </a>
  );
}
