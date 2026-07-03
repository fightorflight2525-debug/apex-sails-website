import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // SAUCE-165: PostHog reverse proxy (official Next.js rewrites pattern).
  // Order matters: static and array MUST come before the catch-all.
  // skipTrailingSlashRedirect is required (PostHog endpoints use trailing
  // slashes like /e/); SEO caveat mitigated by canonical URLs.
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      {
        source: "/uplink/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/uplink/array/:path*",
        destination: "https://us-assets.i.posthog.com/array/:path*",
      },
      {
        source: "/uplink/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/how-it-works",
        destination: "/process",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
