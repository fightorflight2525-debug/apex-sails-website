import posthog from "posthog-js";

// SAUCE-165 PostHog wiring (site behavior layer of the full-funnel data build).
// NOTE: the phc_ project token is PostHog's PUBLISHABLE client-side key. The
// official integration ships it in a NEXT_PUBLIC_ env var, which compiles into
// public client JS, so it is public-by-design either way. Env var overrides
// allow rotation without a code change. The personal API key (phx_) is secret
// and must NEVER appear in this repo.
const key = process.env.NEXT_PUBLIC_POSTHOG_KEY || "phc_vDQn8PRgi7rIMVU52Br1DWkQibw1npVjgZV3Aj7Q6We";
const apiHost = process.env.NEXT_PUBLIC_POSTHOG_PROXY_PATH || "/uplink";

posthog.init(key, {
  api_host: apiHost,               // reverse proxy (next.config.ts rewrites) to beat blockers
  ui_host: "https://us.posthog.com",
  defaults: "2026-05-30",          // SDK defaults snapshot (PostHog official current): SPA pageviews via history_change + rageclick ignorelist + strict min recording duration + localhost test-user filtering
  person_profiles: "always",       // profiles for anonymous PPC visitors (UTM/gclid person props)
  capture_exceptions: true,        // client-side error tracking
});
