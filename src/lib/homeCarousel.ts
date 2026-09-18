// ============================================================================
// The homepage mini-gallery carousel frames (MiniGallerySlideshow), in their
// exact order. SAUCE-314: lives in a plain module (not a "use client" file) so
// the server-rendered /free-design ideas carousel (IdeasCarousel.tsx) shows the
// same photos in the same order and the two cannot drift.
// Provenance (vault photo-index): WS-* are the Wholesale Shade supplier gallery
// and OS-* another installer's. The alts below are the homepage's as they
// stand today; the /free-design carousel carries NEUTRAL alts of its own.
// ============================================================================

export const HOME_CAROUSEL_FRAMES = [
  { src: "/images/home-card-ws22.webp", alt: "Phoenix residential shade sail" },
  { src: "/images/gallery-ws-29.webp", alt: "Custom shade sail backyard install" },
  { src: "/images/gallery-os-01.webp", alt: "Phoenix outdoor shade install" },
  { src: "/images/gallery-os-19.webp", alt: "Red and tan residential shade sails" },
  { src: "/images/business-card-ws06.webp", alt: "Apex commercial shade sail install" },
  { src: "/images/gallery-ws-34.webp", alt: "Phoenix public art shade sail" },
  { src: "/images/showcase-commercial-ws48.webp", alt: "Commercial shade sail venue" },
  { src: "/images/gallery-os-07.webp", alt: "Aerial Phoenix shade sail commercial complex" },
];
