import { Suspense, type ReactNode } from "react";
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
import ProjectStory from "@/components/ProjectStory";
import { NO_EXTRA_FEES } from "@/lib/cta";

// ============================================================================
// /welcome, top to bottom (CTA v3.1 S1.4, his order; S3.B build notes):
//   (web submits) "You're family now!" (S314: much bigger in the SHEET)
//   PAGE mode only (S314 D1): the /residential 7-years / licensed / insured
//        badge + ONE compact stat line (icons, counters spin up). The SHEET
//        (website submits) drops both: they saw them seconds earlier.
//   "What should I expect?"  the heads-up (S314, his words: who calls and
//        when, his line in quotes, the number + Save our number / (daytime)
//        Call us now, the sign-off), then the call's three steps as one strip.
//   "What do I get?"  (a) the 3D design render, (b) the ShadeCast loop,
//        (c) the FINAL price block with the main site's Why section
//   -- the /residential background treatment ends here --
//   "Ideas for your backyard" (6 residential ideas, tap to expand), his
//        subtext + the color browser slot (S314)
//   <ProjectStory />: a recent backyard of ours, told in OUR words (S2.4),
//        shared with /residential and /free-design (S314 C7)
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
// S314 (his ruling): slot 2 was WS-36, the SAME house and pool as WS-52 (on his
// phone, 2 columns: top right and second row left). It is now WS-43, the most
// Arizona-looking residential photo in the set (stucco, desert plants, a
// columnar cactus, palms). Still a supplier photo: neutral alt, no place name.
const IDEAS = [
  { src: "/images/gallery-ws-29.webp", alt: "Twin shade sails over a backyard pool" },
  { src: "/images/gallery-ws-43.webp", alt: "Red shade sails over a modern home, with cactus and palms" },
  { src: "/images/gallery-ws-52.webp", alt: "Shade sail over a pool-side patio" },
  { src: "/images/residential-hero.webp", alt: "Shade sails over a backyard patio" },
  { src: "/images/gallery-ws-41.webp", alt: "Shade sails over an outdoor kitchen" },
  { src: "/images/gallery-ws-60.webp", alt: "Shade sail over a backyard lawn and patio" },
];

// SAUCE-314 (his ruling): "FINAL" carries the site's thin white outline
// (hero-word-outline, as on /residential's "Backyard") everywhere it reads
// "Your FINAL price" on this page. S314 (his ruling): italic, nothing else changes.
const FinalWord = () => <span className="italic text-copper hero-word-outline">FINAL</span>;
const STEPS: { key: string; text: ReactNode }[] = [
  { key: "call", text: "A quick, friendly call" },
  { key: "visit", text: "Your free design visit" },
  { key: "price", text: <>Your <FinalWord /> price, same day</> },
];

export default function WelcomeContent({ mode }: { mode: "page" | "sheet" }) {
  return (
    <>
      <PinnedZone background={<ResidentialBackdrop frames={BG_FRAMES} ariaLabel="Shade sail ideas" />}>
        {/* ===== FIRST SCREEN (phone, 390 x 664). S314 measured: the SHEET shows the
            heading, the whole heads-up and the buttons; the PAGE (Meta arrival: badge +
            stats, no heading) shows through the heads-up's last line, the 3-step strip
            begins just under the fold (the heads-up grew to his four lines). ===== */}
        <div className={`px-5 text-center ${mode === "sheet" ? "pt-14" : "pt-[5.5rem]"} sm:pt-24`}>
          <Suspense fallback={null}>
            {mode === "sheet" ? (
              // S314 D1: the website submit's sheet. "You're family now!" much bigger
              // (28 -> 50 px phone, 36 -> 60 / 72 px desktop), two balanced lines on a phone.
              <FamilyHeading className="mb-1 text-balance font-heading text-[50px] font-bold leading-[1.04] tracking-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.5)] sm:text-6xl lg:text-7xl" />
            ) : (
              <FamilyHeading className="mb-2 font-heading text-[28px] font-bold leading-tight text-white sm:text-4xl" />
            )}
          </Suspense>
          {/* S314 D1: badge + stat line on the PAGE only (Meta Instant Form visitors
              never saw the site). A website submitter saw both seconds earlier. */}
          {mode === "page" && (
            <>
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
            </>
          )}

          <section aria-labelledby="welcome-expect" className="mx-auto max-w-xl pt-5">
            {/* SAUCE-314 (his ruling): stands out more, still native: the site's
                heading voice (white + one copper word with the thin white outline). */}
            <h2 id="welcome-expect" className="font-heading text-[30px] font-bold leading-tight tracking-tight text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.55)] sm:text-5xl">
              What should I <span className="italic text-copper hero-word-outline">expect</span>?
            </h2>
            <span className="mx-auto mt-2 block h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-copper to-transparent sm:w-32" aria-hidden="true" />
            {/* S314 (his ruling): the heads-up, laid out so one glance says who calls,
                when, and from which number; the Save / Call row sits inside it. */}
            <WelcomeCallLine
              className="mx-auto mt-3 max-w-lg text-[17px] leading-[1.45] text-white/90 sm:text-xl"
              actions={<WelcomeActions />}
            />
            <ol className="relative mx-auto mt-4 grid max-w-md grid-cols-3 gap-2">
              <span className="absolute left-[16.7%] right-[16.7%] top-4 h-px bg-white/25" aria-hidden="true" />
              {STEPS.map(({ key, text }, i) => (
                <li key={key} className="relative flex flex-col items-center">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-copper font-heading text-[15px] font-bold text-white ring-4 ring-charcoal">
                    {i + 1}
                  </span>
                  <span className="mt-1.5 text-[14px] font-semibold leading-snug text-white/90">{text}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* ===== WHAT DO I GET? ===== */}
        <section aria-labelledby="welcome-get" className="px-5 pb-20 pt-16 sm:pt-24">
          {/* SAUCE-314: stands out more, same treatment as "What should I expect?" */}
          <h2 id="welcome-get" className="text-center font-heading text-[34px] font-bold leading-tight tracking-tight text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.55)] sm:text-6xl">
            What do I <span className="italic text-copper hero-word-outline">get</span>?
          </h2>
          <span className="mx-auto mt-3 block h-[2px] w-28 rounded-full bg-gradient-to-r from-transparent via-copper to-transparent sm:w-36" aria-hidden="true" />

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
              Your <FinalWord /> price
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
          <div className="text-center">
            <h2 className="text-balance font-heading text-3xl font-bold text-charcoal sm:text-4xl">
              Ideas for your backyard
            </h2>
            {/* S314: his subtext (replaces "Shapes, colors and layouts we can design for your space.") */}
            <p className="mx-auto mt-3 max-w-xl text-balance text-lg leading-relaxed text-charcoal/70">
              Choose your sail color and post finish.
            </p>
            {/* S314_COLOR_BROWSER_SLOT */}
          </div>
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

      {/* ===== A RECENT BACKYARD, IN OUR WORDS (S2.4): the shared ProjectStory (S314 C7) ===== */}
      <ProjectStory />

      {/* ===== THE MAIN SITE'S EXPERIENCE SECTION, as it renders there ===== */}
      <ExperienceSection />

      {/* The sheet covers the page's own footer, so it carries the slim one. */}
      {mode === "sheet" && <SlimFooter />}
    </>
  );
}
