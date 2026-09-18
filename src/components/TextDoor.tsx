"use client";

// ============================================================================
// TextDoor (SAUCE-312, CTA v3 S4/S5): the ONE-TAP text door. Opens the phone's
// Messages app to the text line with the message already written, so the buyer
// types nothing. Text is a SECONDARY door only where it is one tap like this
// (never a bare number the buyer has to copy).
// "sms:NUMBER?&body=" is the form both iOS and Android open with the body filled.
// The body follows the CTA v3 door rule: no "visit", no "ShadeCast", no photo ask.
// Texts to this line reach the AIR's text-lead watcher (RAIL_REGISTER S24,
// iMessage only; Android SMS is not relayed to the AIR).
// ============================================================================

import type { ReactNode } from "react";
import posthog from "posthog-js";

const TEXT_NUMBER = "+16027275107";
const TEXT_BODY = "Hi Apex! I'd like my free 3D design and FINAL price.";
export const SMS_HREF = `sms:${TEXT_NUMBER}?&body=${encodeURIComponent(TEXT_BODY)}`;

export default function TextDoor({
  door,
  className,
  children,
}: {
  door: string;
  className?: string;
  children: ReactNode;
}) {
  function onClick() {
    const metaEventId =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `contact-${Date.now()}-${Math.floor(Math.random() * 1e6)}`;
    window.fbq?.("track", "Contact", { content_name: "text_door" }, { eventID: metaEventId });
    posthog.capture("text_door_click", { door, meta_event_id: metaEventId });
  }
  return (
    <a href={SMS_HREF} onClick={onClick} className={className}>
      {children}
    </a>
  );
}
