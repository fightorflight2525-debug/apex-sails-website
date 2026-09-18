"use client";

// ============================================================================
// CallPromise (SAUCE-313, CTA v3.1 S2.8): the small line under an offer button.
// Static "We call within 15 minutes" lines under buttons became TIME-AWARE: the
// same Phoenix call window as /welcome (WelcomeCallLine.callPromiseHolds), so a
// 10 PM reader is told "first thing in the morning", never "15 minutes".
// The server cannot know the reader's hour, so the line renders invisibly on
// the server (the day text reserves its space) and fades in after mount.
// Metadata stays static (S2.8).
// ============================================================================

import { useEffect, useState } from "react";
import { callPromiseHolds } from "@/components/WelcomeCallLine";

export const CALL_PROMISE_DAY = "We call within 15 minutes";
export const CALL_PROMISE_NIGHT = "We call first thing in the morning";

export default function CallPromise({
  className = "",
  day: dayText = CALL_PROMISE_DAY,
  night: nightText = CALL_PROMISE_NIGHT,
}: {
  className?: string;
  day?: string;
  night?: string;
}) {
  const [day, setDay] = useState<boolean | null>(null);
  useEffect(() => {
    let v = true;
    try {
      v = callPromiseHolds();
    } catch {
      /* default to the day line */
    }
    setDay(v);
  }, []);
  return (
    <span
      data-call-promise=""
      className={`transition-opacity duration-300 ${day === null ? "opacity-0" : "opacity-100"} ${className}`}
    >
      {day === false ? nightText : dayText}
    </span>
  );
}
