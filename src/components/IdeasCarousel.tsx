import CrossFadeCarousel, { type CarouselFrame } from "@/components/CrossFadeCarousel";
import { HOME_CAROUSEL_FRAMES } from "@/lib/homeCarousel";
import ColorBrowserButton from "@/components/ColorBrowser";

// ============================================================================
// IdeasCarousel (SAUCE-314, his 09-18 ruling for /free-design): the section
// that was "Ideas for your backyard" becomes UNIVERSAL (homes AND businesses)
// and uses the homepage carousel, the same photos in that exact order
// (HOME_CAROUSEL_FRAMES, shared with the homepage so the two cannot drift).
// TRUTH RULE (vault photo-index + learning sauce313): those eight photos are the
// Wholesale Shade supplier gallery (WS-*) and another installer's (OS-*). They
// are shown as IDEAS: the heading, the label and every alt stay neutral, never
// "ours", "real", "installs" or a place name.
// ============================================================================

const NEUTRAL_ALT: Record<string, string> = {
  "/images/home-card-ws22.webp": "A white shade sail over a backyard patio",
  "/images/gallery-ws-29.webp": "Cream shade sails over a backyard pool",
  "/images/gallery-os-01.webp": "A blue shade sail over a courtyard dining area",
  "/images/gallery-os-19.webp": "Red and tan shade sails over a home's outdoor deck",
  "/images/business-card-ws06.webp": "White shade sails over an event parking area",
  "/images/gallery-ws-34.webp": "A red shade sail in a public art park",
  "/images/showcase-commercial-ws48.webp": "Tan shade sails over an office plaza entrance",
  "/images/gallery-os-07.webp": "A cream shade sail over a commercial patio, seen from above",
};

const FRAMES: CarouselFrame[] = HOME_CAROUSEL_FRAMES.map((f) => ({
  src: f.src,
  alt: NEUTRAL_ALT[f.src] ?? "Shade sail design idea",
}));

export default function IdeasCarousel() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-cream py-20 md:py-28">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <span className="block text-sm font-semibold uppercase tracking-widest text-copper">
            Shade sail ideas
          </span>
          <h2 className="mt-3 font-heading text-4xl sm:text-5xl font-bold text-charcoal tracking-tight text-balance">
            Ideas for your <span className="italic text-copper">home</span> or{" "}
            <span className="italic text-copper">business</span>
          </h2>
          <p className="mt-4 text-lg text-charcoal/70 leading-relaxed">
            Shapes, colors and layouts we can design for your space.
          </p>
          <ColorBrowserButton className="mt-6" />
        </div>

        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl bg-charcoal shadow-xl shadow-charcoal/15">
          <CrossFadeCarousel
            frames={FRAMES}
            intervalMs={3500}
            aspectRatio="aspect-[4/3] sm:aspect-[16/10]"
            ariaLabel="Shade sail ideas for homes and businesses"
            sizes="(min-width: 1024px) 1024px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
