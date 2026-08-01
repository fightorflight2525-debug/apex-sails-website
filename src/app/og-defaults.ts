/**
 * SAUCE-247 - SHARED openGraph DEFAULTS. Spread these into EVERY page-level
 * openGraph block.
 *
 * WHY THIS FILE EXISTS: Next.js REPLACES the parent openGraph object when a
 * route declares its own. It does NOT merge them. So any page-level
 * `openGraph: { title, description, url, type }` silently drops og:image,
 * og:image:width/height/alt, og:site_name and og:locale that the root layout
 * defines, and the page's link-preview card renders with NO IMAGE in iMessage,
 * Facebook, LinkedIn and Slack.
 *
 * VERIFIED LIVE ON PRODUCTION 2026-08-01 before this fix: /golf, which has no
 * page-level openGraph, carried og:image correctly, while / and /residential -
 * the two most-shared pages on the site, and the ones paid traffic lands on -
 * did not. The tell was that pages got SMALLER after tags were added to them.
 *
 * Do not inline these values per page. Spread OG_DEFAULTS first, then override
 * title/description/url, so the image can never be dropped again by omission.
 */
export const OG_DEFAULTS = {
  siteName: "Apex Sail Shades",
  locale: "en_US",
  images: [
    {
      url: "https://apex-sail-shades.com/images/og-ws-29.webp",
      width: 1200,
      height: 630,
      alt: "Custom shade sail installation by Apex Sail Shades in Phoenix, Arizona",
    },
  ],
};
