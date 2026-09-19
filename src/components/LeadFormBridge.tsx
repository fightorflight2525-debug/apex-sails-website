"use client";

// ============================================================================
// LeadFormBridge (SAUCE-314, contract B2, decision D2): EVERY CTA OPENS THE TOP
// FORM OF THE PAGE IT IS ON, with the dropdown already open.
// Every offer button on the site links to "/#get-started". One document-level
// CAPTURE click listener (mounted once, in app/layout.tsx) decides:
//   - the page has a lead form ([data-lead-form], FormV2): preventDefault() so
//     the browser and Next's <Link> do not navigate (Link skips navigation when
//     the event is defaultPrevented). NOT stopPropagation: the Header's own
//     onClick still runs and closes the mobile menu. On the next frame (after
//     the menu has closed) the first form's wrapper scrolls into view (the
//     wrappers carry scroll-mt so the fixed header never covers the form) and
//     the form gets "apex:open-form", which drops its fields down exactly like
//     a tap on its own top button.
//   - the page has no form: sessionStorage "apex:open-form" = "1" and the
//     navigation to "/#get-started" proceeds; the homepage form opens itself
//     on arrival (FormV2, on mount).
// Cmd / ctrl / shift / alt / middle clicks and target="_blank" are untouched.
// Why (09-18, his words on the /free-design sticky bottom CTA): "Nor does the
// button click to anything." Reproduced: the old same-page hash link scrolled
// once (dropdown still closed) and then did nothing, because the URL already
// carried the hash. This never relies on the URL hash.
// Renders nothing.
// ============================================================================

import { useEffect } from "react";

/** The one CTA destination on every page. */
export const LEAD_FORM_HASH = "#get-started";
/** CustomEvent name, dispatched on the form root. */
export const OPEN_FORM_EVENT = "apex:open-form";
/** sessionStorage key: "1" = open the first form on arrival. */
export const OPEN_FORM_FLAG = "apex:open-form";
/** Every FormV2 root carries this attribute. */
export const LEAD_FORM_SELECTOR = "[data-lead-form]";

const SCROLL_MS = 750; // covers the form's 500 ms drop-down
const FALLBACK_OFFSET = 112; // = scroll-mt-28, used if a wrapper carries none
let endActiveScroll: (() => void) | null = null;

/**
 * Bring the form's wrapper (the element with the id + scroll-mt) to the top of
 * the view, just below the fixed header. The target is re-measured on every
 * frame, so it lands exactly even while the dropdown opens and a centered hero
 * re-centers around the taller form (a one-shot scrollIntoView left
 * "What needs shade?" under the header on a 1440x900 /free-design).
 * Any wheel, touch or key input from the visitor stops it. The page's CSS
 * smooth scrolling is paused inline while it runs (every browser honors that;
 * no reliance on the newer "instant" scroll option), then restored.
 */
export function scrollToLeadForm(form: HTMLElement) {
  endActiveScroll?.();
  const target = form.parentElement ?? form;
  const offset = parseFloat(getComputedStyle(target).scrollMarginTop) || FALLBACK_OFFSET;
  let reduce = false;
  try {
    reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    /* no matchMedia: animate */
  }
  const html = document.documentElement;
  const prevBehavior = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  const from = window.scrollY;
  const t0 = performance.now();
  let done = false;
  const inputs = ["wheel", "touchstart", "keydown"] as const;
  const end = () => {
    if (done) return;
    done = true;
    inputs.forEach((t) => window.removeEventListener(t, end));
    html.style.scrollBehavior = prevBehavior;
    if (endActiveScroll === end) endActiveScroll = null;
  };
  endActiveScroll = end;
  inputs.forEach((t) => window.addEventListener(t, end, { passive: true }));
  const step = (now: number) => {
    if (done) return;
    const p = Math.max(0, Math.min(1, (now - t0) / SCROLL_MS));
    const ease = reduce ? 1 : 1 - Math.pow(1 - p, 3);
    const dest = window.scrollY + target.getBoundingClientRect().top - offset;
    window.scrollTo(0, from + (dest - from) * ease);
    if (p < 1) requestAnimationFrame(step);
    else end();
  };
  requestAnimationFrame(step);
}

export default function LeadFormBridge() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;
      if ((link.target && link.target !== "_self") || link.hasAttribute("download")) return;
      let url: URL;
      try {
        url = new URL(link.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin || url.hash !== LEAD_FORM_HASH) return;

      const form = document.querySelector<HTMLElement>(LEAD_FORM_SELECTOR);
      if (!form) {
        // No form here: the homepage form opens itself on arrival.
        try {
          sessionStorage.setItem(OPEN_FORM_FLAG, "1");
        } catch {
          /* storage blocked: the #get-started hash still opens it */
        }
        return;
      }

      e.preventDefault();
      requestAnimationFrame(() => {
        scrollToLeadForm(form);
        form.dispatchEvent(new CustomEvent(OPEN_FORM_EVENT, { detail: { via: "cta_link" } }));
      });
    }

    document.addEventListener("click", onClick, true);
    // Ready marker for the automated CTA click test (/tmp/s314/cta_clicktest.py).
    document.documentElement.setAttribute("data-lead-form-bridge", "");
    return () => {
      document.removeEventListener("click", onClick, true);
      document.documentElement.removeAttribute("data-lead-form-bridge");
    };
  }, []);

  return null;
}
