"use client";

// ============================================================================
// /welcome "What should I expect?" actions (SAUCE-313, S3.B): Save our number
// + (daytime only) Call us now, side by side. Same rules as the SaveNumberButton
// / CallNowButton pair they replace on this page:
//  - Save our number serves /apex-sail-shades.vcf (text/vcard, inline: Safari
//    opens "Create New Contact"); HIDDEN in the Facebook / Instagram in-app
//    browsers, whose vCard handling is unverified. Measured: save_number_click.
//  - Call us now shows only while the 15-minute promise holds (the same Phoenix
//    window as the call line), so the after-hours page never invites a call
//    nobody answers. Call clicks are measured site-wide (PhoneConversionTracker).
// The row's height is reserved on the server, so nothing jumps when it resolves.
// ============================================================================

import { useEffect, useState } from "react";
import posthog from "posthog-js";
import { callPromiseHolds } from "@/components/WelcomeCallLine";
import { PhoneIcon } from "@/components/icons";

export default function WelcomeActions() {
  const [state, setState] = useState<{ save: boolean; call: boolean } | null>(null);

  useEffect(() => {
    let inApp = false;
    let day = true;
    try {
      inApp = /FBAN|FBAV|FB_IAB|Instagram/i.test(navigator.userAgent);
    } catch {
      /* assume a normal browser */
    }
    try {
      day = callPromiseHolds();
    } catch {
      /* default to day */
    }
    setState({ save: !inApp, call: day });
  }, []);

  if (state && !state.save && !state.call) return null;

  const btn =
    "flex h-[52px] min-w-0 flex-1 basis-0 items-center justify-center gap-2 rounded-full px-3 text-[16px] font-semibold text-white transition-colors";

  return (
    <div className={`mx-auto mt-4 max-w-md transition-opacity duration-500 ${state ? "opacity-100" : "opacity-0"}`}>
      <div className="flex justify-center gap-3">
        {(!state || state.save) && (
          <a
            href="/apex-sail-shades.vcf"
            onClick={() => posthog.capture("save_number_click", {})}
            className={`${btn} cta-glow-loop max-w-[220px] bg-copper hover:bg-copper-light`}
          >
            <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>
            <span className="whitespace-nowrap">Save our number</span>
          </a>
        )}
        {state?.call && (
          <a href="tel:+16028370370" className={`${btn} max-w-[220px] border border-white/45 bg-white/[0.04] hover:bg-white/10`}>
            <PhoneIcon className="h-5 w-5 shrink-0" />
            <span className="whitespace-nowrap">Call us now</span>
          </a>
        )}
      </div>
      {(!state || state.save) && (
        <p className="mt-2 text-[11px] uppercase tracking-widest text-white/55">So your phone knows it&apos;s us</p>
      )}
    </div>
  );
}
