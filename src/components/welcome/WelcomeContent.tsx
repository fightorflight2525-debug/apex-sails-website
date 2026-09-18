import { Suspense } from "react";
import Image from "next/image";
import WelcomeCallLine from "@/components/WelcomeCallLine";
import Lightbox from "@/components/Lightbox";
import ExperienceSection from "@/components/ExperienceSection";
import SlimFooter from "@/components/SlimFooter";
import { PinnedZone, ResidentialBackdrop, RESIDENTIAL_HERO_FRAMES, WhyBlock } from "@/components/ResidentialSections";
import FamilyHeading from "@/components/welcome/FamilyHeading";
import StatLine from "@/components/welcome/StatLine";
import WelcomeActions from "@/components/welcome/WelcomeActions";
import ShadeCastLoop from "@/components/welcome/ShadeCastLoop";
import { NO_EXTRA_FEES } from "@/lib/cta";

// ============================================================================
// /welcome, top to bottom (CTA v3.1 S1.4, his order; S3.B build notes):
//   (web submits) "You're family now!"
//   the /residential 7-years / licensed / insured badge
//   ONE compact stat line (icons, counters spin up)
//   "What should I expect?"  the time-aware call line, Save our number +
//        (daytime) Call us now, the call's three steps as one strip.
//        MEASURED FIT: all of the above inside 390 x 664 (iPhone Safari).
//   "What do I get?"  (a) the 3D design render, (b) the ShadeCast loop,
//        (c) the FINAL price block with the main site's Why section
//   -- the /residential background treatment ends here --
//   "Ideas for your backyard" (6 residential ideas, tap to expand)
//   a recent backyard of ours, told in OUR words (S2.4): Before, His 3D
//        design, Finished (our own photos of that job)
//   the main site's Experience section
// mode "sheet" = the pop-up over the page (app/@modal); "page" = a hard load.
// ============================================================================

// Background: the /residential treatment, first 6 of its frames (weight).
// Decorative here (alt=""): those frames are supplier / other-installer photos
// (vault photo-index), so this page makes no claim about them.
const BG_FRAMES = RESIDENTIAL_HERO_FRAMES.slice(0, 6).map((f) => ({ ...f, alt: "" }));

// "Ideas for your backyard": residential, pools first, 2 x 3 on a phone and
// 3 x 2 on desktop. TRUTH RULE (vault photo-index): gallery-ws-* are the
// Wholesale Shade supplier gallery (San Diego, California, Texas installs) and
// residential-hero is WS-22 from that gallery. They are NOT Apex installs, so
// the heading, the button and every alt text stay neutral: ideas, never "ours",
// never "Phoenix".
const IDEAS = [
  { src: "/images/gallery-ws-29.webp", alt: "Twin shade sails over a backyard pool" },
  { src: "/images/gallery-ws-36.webp", alt: "Shade sail over a backyard pool" },
  { src: "/images/gallery-ws-52.webp", alt: "Shade sail over a pool-side patio" },
  { src: "/images/residential-hero.webp", alt: "Shade sails over a backyard patio" },
  { src: "/images/gallery-ws-41.webp", alt: "Shade sails over an outdoor kitchen" },
  { src: "/images/gallery-ws-60.webp", alt: "Shade sail over a backyard lawn and patio" },
];

// The project story (S2.4): OUR words, from the visible CRM record; the
// customer is never named and no words are written in his voice. His own
// quote renders here ONLY once his real words and his yes exist.
const STORY_QUOTE: { text: string } | null = null;
// Three real steps of that job, one camera direction (the palm on the left):
//   Before        = LB-29 (true before: no poles, no sail)
//   His 3D design = LB-38 (the design he was shown, drawn on that same LB-29 photo)
//   Finished      = LB-12 (the built sail from the same side of the yard)
// Byte-identical copies of the vault pool files (max 1600 px). The cards are
// 16:9 and at most ~350 CSS px wide, so no screen enlarges them.
const STORY_STEPS = [
  { src: "/images/welcome/story-before.webp", label: "Before", alt: "The backyard before the shade sail" },
  { src: "/images/welcome/story-design.webp", label: "His 3D design", alt: "The design shown for this backyard, with the proposed poles marked" },
  { src: "/images/welcome/story-finished.webp", label: "Finished", alt: "The finished shade sail over the backyard pool" },
];

const STEPS = ["A quick, friendly call", "Your free design visit", "Your FINAL price, same day"];

export default function WelcomeContent({ mode }: { mode: "page" | "sheet" }) {
  return (
    <>
      <PinnedZone background={<ResidentialBackdrop frames={BG_FRAMES} ariaLabel="Shade sail ideas" />}>
        {/* ===== FIRST SCREEN: all of it fits a phone (390 x 664) ===== */}
        <div className={`px-5 text-center ${mode === "sheet" ? "pt-12" : "pt-[5.5rem]"} sm:pt-24`}>
          <Suspense fallback={null}>
            <FamilyHeading className="mb-2 font-heading text-[28px] font-bold leading-tight text-white sm:text-4xl" />
          </Suspense>
          <div className="flex justify-center">
            <Image
              src="/images/badge-row-7yrs.png"
              alt="Licensed, 7 years experience, insured"
              width={1368}
              height={352}
              priority
              sizes="(min-width: 640px) 400px, 280px"
              className="h-auto w-[280px] max-w-full sm:w-[400px]"
            />
          </div>
          <StatLine />

          <section aria-labelledby="welcome-expect" className="mx-auto max-w-xl pt-5">
            <h2 id="welcome-expect" className="font-heading text-[24px] font-bold leading-tight text-white sm:text-3xl">
              What should I expect?
            </h2>
            <WelcomeCallLine className="mx-auto mt-2 max-w-lg text-[17px] leading-[1.45] text-white/90 sm:text-xl" />
            <WelcomeActions />
            <ol className="relative mx-auto mt-4 grid max-w-md grid-cols-3 gap-2">
              <span className="absolute left-[16.7%] right-[16.7%] top-4 h-px bg-white/25" aria-hidden="true" />
              {STEPS.map((t, i) => (
                <li key={t} className="relative flex flex-col items-center">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-copper font-heading text-[15px] font-bold text-white ring-4 ring-charcoal">
                    {i + 1}
                  </span>
                  <span className="mt-1.5 text-[14px] font-semibold leading-snug text-white/90">{t}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* ===== WHAT DO I GET? ===== */}
        <section aria-labelledby="welcome-get" className="px-5 pb-20 pt-16 sm:pt-24">
          <h2 id="welcome-get" className="text-center font-heading text-3xl font-bold text-white sm:text-5xl">
            What do I get?
          </h2>

          {/* (a) the render he sent: a design, presented as one */}
          <div className="mx-auto mt-10 max-w-3xl">
            <h3 className="text-center font-heading text-2xl font-bold text-white sm:text-3xl">Your custom 3D design</h3>
            <p className="mt-1 text-center text-base text-white/70">Engineered for your exact space</p>
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/15 bg-charcoal shadow-2xl shadow-black/50">
              <Image
                src="/images/welcome/custom-3d-design-pool.png"
                alt="Custom 3D design of a shade sail over a backyard pool"
                width={1448}
                height={1086}
                quality={90}
                sizes="(min-width: 800px) 768px, calc(100vw - 40px)"
                className="block h-auto w-full"
              />
            </div>
          </div>

          {/* (b) the ShadeCast, presented like the main site's */}
          <div className="mx-auto mt-16 max-w-xl">
            <p className="text-center text-sm font-bold uppercase tracking-widest text-sand">ShadeCast&#8482; Simulation</p>
            <h3 className="mt-1 text-center font-heading text-2xl font-bold text-white sm:text-3xl">Your ShadeCast&#8482;</h3>
            <div className="mt-5 overflow-hidden rounded-2xl border border-sand/40 bg-cream shadow-2xl shadow-black/50">
              <ShadeCastLoop />
              <p className="border-t border-sand/30 bg-cream-dark/50 px-4 py-2.5 text-center text-[13px] leading-snug text-charcoal/60">
                Actual results using precise GPS coordinates and terrain data
              </p>
            </div>
          </div>

          {/* (c) the FINAL price, then the main site's Why section (copy untouched) */}
          <div className="mx-auto mt-20 max-w-2xl text-center">
            <h3 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Your <span className="text-copper">FINAL</span> price
            </h3>
            <p className="mt-2 text-lg font-medium text-white/85">{NO_EXTRA_FEES}</p>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Your exact price depends on size, layout, and pole configuration. We give you a clear, itemized FINAL price with no surprises.
            </p>
            <div className="mx-auto mt-6 max-w-lg">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px min-w-6 flex-1 bg-gradient-to-r from-transparent to-sand/70" aria-hidden="true" />
                <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-sand sm:text-sm sm:tracking-[0.2em]">
                  Most residential projects run
                </span>
                <span className="h-px min-w-6 flex-1 bg-gradient-to-l from-transparent to-sand/70" aria-hidden="true" />
              </div>
              <p className="mt-2 whitespace-nowrap font-heading text-[40px] font-bold leading-none tracking-tight text-white tabular-nums sm:text-6xl">
                $8,000 <span className="align-middle text-[0.5em] font-medium tracking-normal text-white/60">to</span> $12,000
              </p>
              <span className="mx-auto mt-4 block h-px w-44 bg-gradient-to-r from-transparent via-copper to-transparent" aria-hidden="true" />
            </div>
            <WhyBlock />
          </div>
        </section>
      </PinnedZone>

      {/* ===== IDEAS FOR YOUR BACKYARD (normal page from here) ===== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <h2 className="text-balance text-center font-heading text-3xl font-bold text-charcoal sm:text-4xl">
            Ideas for your backyard
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-balance text-center text-lg leading-relaxed text-charcoal/70">
            Shapes, colors and layouts we can design for your space.
          </p>
          <div className="mt-8">
            <Lightbox
              images={IDEAS}
              gridClassName="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4"
              itemClassName="relative aspect-square overflow-hidden rounded-xl bg-charcoal/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-copper/60 focus:ring-offset-2"
              imageSizes="(min-width: 1024px) 330px, (min-width: 640px) 33vw, 50vw"
            />
          </div>
          <div className="mt-8 text-center">
            <a
              href="/gallery?filter=residential"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-copper px-7 py-3 text-base font-semibold text-copper transition-colors hover:bg-copper hover:text-white"
            >
              See more ideas
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===== A RECENT BACKYARD, IN OUR WORDS (S2.4) ===== */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-copper">Project story</p>
          <h2 className="mt-2 text-balance text-center font-heading text-3xl font-bold text-charcoal sm:text-4xl">
            One Phoenix backyard, start to finish
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-charcoal/75">
            He filled out our form on the morning of July 30, holding a pergola quote he wasn&apos;t excited
            about. We called him back in 67 seconds. By the end of August, we were building his shade.
          </p>
          <ol className="mx-auto mt-8 grid max-w-md gap-8 sm:max-w-none sm:grid-cols-3 sm:gap-6">
            {STORY_STEPS.map((step, i) => (
              <li key={step.src} className="relative">
                <figure className="relative aspect-video overflow-hidden rounded-2xl bg-charcoal/10 shadow-md shadow-charcoal/10">
                  <Image
                    src={step.src}
                    alt={step.alt}
                    fill
                    quality={90}
                    sizes="(min-width: 1024px) 300px, (min-width: 640px) calc(33vw - 40px), calc(100vw - 40px)"
                    className="object-cover"
                  />
                  <figcaption className="absolute left-3 top-3 rounded-full bg-charcoal/80 px-3 py-1 text-[13px] font-semibold text-white backdrop-blur-sm">
                    {step.label}
                  </figcaption>
                </figure>
                {i < STORY_STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-[30px] left-1/2 z-10 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-copper text-white shadow sm:bottom-auto sm:left-auto sm:-right-[26px] sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0"
                  >
                    <svg className="h-4 w-4 rotate-90 sm:rotate-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.2 14.8a.75.75 0 010-1.06L10.94 10 7.2 6.26a.75.75 0 111.06-1.06l4.27 4.27a.75.75 0 010 1.06l-4.27 4.27a.75.75 0 01-1.06 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
              </li>
            ))}
          </ol>
          {STORY_QUOTE && (
            <blockquote className="mx-auto mt-8 max-w-2xl text-center font-heading text-xl italic text-charcoal sm:text-2xl">
              &ldquo;{STORY_QUOTE.text}&rdquo;
            </blockquote>
          )}
        </div>
      </section>

      {/* ===== THE MAIN SITE'S EXPERIENCE SECTION, as it renders there ===== */}
      <ExperienceSection />

      {/* The sheet covers the page's own footer, so it carries the slim one. */}
      {mode === "sheet" && <SlimFooter />}
    </>
  );
}
