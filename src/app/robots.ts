import type { MetadataRoute } from "next";

/**
 * SAUCE-248: robots.txt. Allow-all, plus a pointer to the sitemap.
 *
 * READ BEFORE EDITING: do NOT add `disallow: "/shade/"`.
 *
 * public/shade/*.html are live private client deliverables (9 files, one of
 * them an open quote for a client mid-decision). Every one of them carries
 * <meta name="robots" content="noindex, nofollow">, and THAT is the mechanism
 * keeping them out of Google. A Disallow here looks protective and does the
 * exact opposite: it blocks the crawl, so Googlebot never fetches the file,
 * never reads the noindex, and the URL can still surface in results.
 *
 * Google's own documentation, "Block search indexing with noindex":
 *   "For the noindex rule to be effective, the page or resource must not be
 *    blocked by a robots.txt file"
 *   "If the page is blocked by a robots.txt file or the crawler can't access
 *    the page, the crawler will never see the noindex rule, and the page can
 *    still appear in search results"
 * https://developers.google.com/search/docs/crawling-indexing/block-indexing
 *
 * Allowing the crawl is what lets the noindex do its job. Same reasoning
 * applies to /golf and /senior-living, which are noindex via the Metadata API.
 */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://apex-sail-shades.com/sitemap.xml",
  };
}
