"use client";

// ============================================================================
// "You're family now!" (the operator's copy, verbatim). S1.3 / S3.B: website
// submits see it at the top of /welcome (they never saw Meta's native thank-you
// screen); arrivals from the native forms (utm_content=thankyou) do NOT see it
// repeated, and their tab title drops it too.
// Rendered inside <Suspense fallback={null}>: a hard load (the Meta button)
// paints WITHOUT it, so the native-form arrival never sees it flash.
// ============================================================================

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function FamilyHeading({ className = "" }: { className?: string }) {
  const native = useSearchParams().get("utm_content") === "thankyou";
  useEffect(() => {
    if (!native) return;
    // The Facebook / Instagram in-app browsers show the page title in their top
    // bar, so it must not repeat the phrase either. Next re-renders its own
    // <title> after hydration, so the brand-only title is re-applied if reset.
    const T = "Apex Sail Shades";
    const apply = () => {
      if (document.title !== T) document.title = T;
    };
    apply();
    const mo = new MutationObserver(apply);
    mo.observe(document.head, { childList: true, subtree: true, characterData: true });
    return () => mo.disconnect();
  }, [native]);
  if (native) return null;
  return <h1 className={className}>You&apos;re family now!</h1>;
}
