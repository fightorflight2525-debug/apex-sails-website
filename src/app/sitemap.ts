import type { MetadataRoute } from "next";

/**
 * SAUCE-248: XML sitemap for the 10 indexable routes.
 *
 * WHAT WE EMIT: <loc> and <lastmod> only.
 * Google Search Central states plainly, on "Build and submit a sitemap":
 *   "Google ignores <priority> and <changefreq> values."
 * https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
 * So we do not emit them. Shipping fields the consumer discards adds bytes and
 * invites the false belief that we are steering crawl budget. We are not.
 *
 * DELIBERATELY EXCLUDED (both loads-bearing, do not "helpfully" add them):
 *   /golf, /senior-living  Both set robots: { index: false, follow: false }.
 *                          Listing a noindex URL in a sitemap hands Google two
 *                          contradictory instructions about the same page.
 *                          Same class of error as canonicalising a noindex page.
 *   /shade/*.html          Live private client deliverables (9 files under
 *                          public/shade/). A private page never belongs in a
 *                          public sitemap. They stay out of the index via a
 *                          per-file noindex meta tag, which is also why
 *                          robots.ts must NOT Disallow /shade/. See robots.ts.
 */

const SITE = "https://apex-sail-shades.com";

/**
 * lastModified values are REAL: the last commit date touching each route's own
 * source (page.tsx, plus its co-located layout.tsx where the metadata lives for
 * /contact, /faq and /gallery). Captured with:
 *   git log -1 --format=%cI -- src/app/<route>/page.tsx src/app/<route>/layout.tsx
 *
 * They are frozen literals on purpose. new Date() at build time would stamp all
 * ten pages with today, which is (a) a false freshness signal to Google and
 * (b) a diff on every single deploy. Google only honours lastmod when it is
 * "consistently and verifiably ... accurate", so a fabricated date is worse
 * than no date at all. When a page changes materially, refresh its line here.
 */
const ROUTES: ReadonlyArray<{ path: string; lastModified: string }> = [
  { path: "/", lastModified: "2026-08-01T13:58:04-07:00" },
  { path: "/about", lastModified: "2026-08-01T13:58:04-07:00" },
  { path: "/commercial", lastModified: "2026-08-01T19:43:45-07:00" },
  { path: "/contact", lastModified: "2026-08-01T13:58:04-07:00" },
  { path: "/faq", lastModified: "2026-08-01T13:58:04-07:00" },
  { path: "/gallery", lastModified: "2026-08-01T13:58:04-07:00" },
  { path: "/privacy", lastModified: "2026-08-01T01:47:02-07:00" },
  { path: "/process", lastModified: "2026-08-01T13:58:04-07:00" },
  { path: "/residential", lastModified: "2026-08-01T13:58:04-07:00" },
  { path: "/terms", lastModified: "2026-08-01T01:47:02-07:00" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, lastModified }) => ({
    // Absolute URLs, matching each page's rel=canonical exactly (canonicals are
    // relative in source and resolve through the root layout metadataBase).
    url: path === "/" ? `${SITE}/` : `${SITE}${path}`,
    lastModified,
  }));
}
