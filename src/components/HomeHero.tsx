import CrossFadeCarousel, { type CarouselFrame } from "@/components/CrossFadeCarousel";

// ============================================================================
// HomeHero parts (SAUCE-313, CTA v3.1 S1.7 / S3.C). Lifted VERBATIM out of the
// home page so /free-design (the main-site simulation for the bio link) shows
// the home hero and the home slideshow, and the two can never drift apart.
// The home page renders exactly what it rendered before.
// ============================================================================

/* Hero slideshow (H4): passive 11-frame strip from the ambiguous LP, auto-cycle only.
   Frame 0 (both-hero-ws-14) preserves LCP behavior (priority+sized). */
export const HOME_HERO_FRAMES: CarouselFrame[] = [
  {
    src: "/images/slideshow-01-ws34.webp",
    alt: "Custom red shade sail over a Phoenix public art park",
    priority: true,
  },
  {
    src: "/images/slideshow-02-os07-cropped.webp",
    alt: "Aerial view of Phoenix commercial shade sail install with mountain backdrop",
  },
  {
    src: "/images/both-strip-02-ws-22.webp",
    alt: "Phoenix residential shade sail install",
  },
  {
    src: "/images/both-strip-03-ws-06.webp",
    alt: "Apex commercial shade sail install",
  },
  {
    src: "/images/both-strip-04-ws-29.webp",
    alt: "Phoenix shade sail over outdoor patio",
  },
  {
    src: "/images/both-strip-05-ws-18.webp",
    alt: "Custom shade sail backyard install",
  },
  {
    src: "/images/both-strip-06-ws-32.webp",
    alt: "Tensioned shade sail commercial install",
  },
  {
    src: "/images/both-strip-07-os-12.webp",
    alt: "Residential shade sail over Phoenix backyard",
  },
  {
    src: "/images/both-strip-08-ws-23.webp",
    alt: "Apex shade sail finished install",
  },
  {
    src: "/images/both-strip-09-ws-41.webp",
    alt: "Custom shade sail outdoor space",
  },
  {
    src: "/images/both-strip-11-ws-44.webp",
    alt: "Tensioned custom shade sail in Phoenix",
  },
  {
    src: "/images/both-hero-ws-14.webp",
    alt: "Custom shade sail over a Phoenix outdoor space",
  },
];

/** The slideshow, the tint, the sail motif, the copper glow and the bottom fade. */
export function HomeHeroBackdrop({ frames = HOME_HERO_FRAMES }: { frames?: CarouselFrame[] }) {
  return (
    <>
      <CrossFadeCarousel
        fill
        controls={false}
        ariaLabel="Hero image slideshow"
        intervalMs={6000}
        transitionMs={700}
        sizes="100vw"
        frameClassName="object-cover opacity-30"
        frames={frames}
      />
      {/* Gradient overlay (B8: opacities reduced ~12% so slideshow image reads through more) */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal-light/50 to-charcoal/90" />

      {/* Geometric sail-shape SVG motif (decorative) */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg
          className="absolute top-20 -left-20 w-[600px] h-[600px]"
          viewBox="0 0 600 600"
          fill="none"
          aria-hidden="true"
        >
          <path d="M100 500 L300 100 L500 400 Z" stroke="white" strokeWidth="1.5" />
          <path d="M150 480 L320 150 L480 380 Z" stroke="white" strokeWidth="0.75" />
        </svg>
        <svg
          className="absolute top-40 right-0 w-[500px] h-[500px]"
          viewBox="0 0 500 500"
          fill="none"
          aria-hidden="true"
        >
          <path d="M50 450 L250 50 L450 350 Z" stroke="white" strokeWidth="1.5" />
          <path d="M80 420 L260 100 L420 330 Z" stroke="white" strokeWidth="0.75" />
        </svg>
        <svg
          className="absolute bottom-10 left-1/3 w-[400px] h-[400px]"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden="true"
        >
          <path d="M50 350 L200 50 L350 280 Z" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-copper/5 rounded-full blur-3xl" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />
    </>
  );
}

/** Eyebrow, headline and sub-copy, verbatim from the home hero. */
export function HomeHeroHeadline({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <span className="inline-block text-sm font-semibold uppercase tracking-widest text-sand">
        Phoenix shade sail specialists
      </span>
      <h1
        className={`${compact ? "mt-3" : "mt-4"} font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight`}
      >
        <span className="italic text-copper">Custom</span> Shade Sails,<br />Built for <span className="text-copper">Phoenix</span> Heat.
      </h1>
      <p
        className={`${compact ? "mt-4" : "mt-6"} text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-body`}
      >
        Custom-engineered shade sails, designed and quoted in one visit.
        Cooler patios, protected pools, shaded commercial spaces.
      </p>
    </>
  );
}
