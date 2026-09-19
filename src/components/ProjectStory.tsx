import Image from "next/image";

// ============================================================================
// ProjectStory (SAUCE-314, S314 C7): one recent backyard of OURS, start to
// finish, told in OUR words. Extracted from /welcome (S2.4) so the SAME story
// renders on /welcome, /residential and /free-design (the MO places it there
// via Package B's project-story slot markers) and the three cannot drift.
// Server component with its OWN section + background: a charcoal band, because
// it lands after a cream section (/residential gallery, /free-design ideas
// carousel) and before a white one (ValueStack), and on /welcome between two
// white ones. Cream merged into the cream section above it (measured S314);
// charcoal reads as its own band in all three places. Optional className.
//
// TRUTH (every number from the record; the customer is never named and no
// words are written in his voice):
//   form 2026-07-30; callback 67 s (CRM 5480dc96); his posts went in on
//   2026-08-31, holes dug and concrete poured the same afternoon (CRM; his
//   photos' EXIF 2026-08-31 17:11 MST); finished 2026-09-12 (camera EXIF)
//   = 12 days from the posts to the shade. "didn't like" = the operator's
//   words for the pergola quote he was holding (S314), told in OUR voice.
// His own quote renders ONLY once his real words and his yes exist.
// ============================================================================

const STORY_QUOTE: { text: string } | null = null;

// Three real steps of that job (SAUCE-314, his ruling: the design frame is out,
// "put us working on it" in the middle):
//   Before      = LB-29 (true before: no poles, no sail)
//   Install day = LB-22 = his IMG_1987 (EXIF 2026-08-31 17:12 MST), our crew
//                 setting a post by the pool; 16:9 crop of the 4284 x 5712
//                 original, sRGB, 1600 x 900, WebP q90 (no upscaling)
//   Finished    = LB-12 (the built sail from the same side of the yard)
// The cards are 16:9 and at most ~350 CSS px wide, so no screen enlarges them.
const STORY_STEPS = [
  { src: "/images/welcome/story-before.webp", label: "Before", alt: "The backyard before the shade sail" },
  { src: "/images/welcome/story-install.webp", label: "Install day", alt: "An Apex installer setting a shade sail post beside the pool" },
  { src: "/images/welcome/story-finished.webp", label: "Finished", alt: "The finished shade sail over the backyard pool" },
];

// The time spans keep the strong + nowrap number treatment (S314 contract).
const SPAN = "whitespace-nowrap font-semibold text-white";

export default function ProjectStory({ className = "" }: { className?: string }) {
  return (
    // No fixed id / aria-labelledby: the /welcome sheet can slide up OVER a page that
    // renders this story too (/residential, /free-design), and ids must stay unique.
    <section className={`bg-charcoal py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-sand">Project story</p>
        <h2 className="mt-2 text-balance text-center font-heading text-3xl font-bold text-white sm:text-4xl">
          One Phoenix backyard, start to finish
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-white/75">
          {/* "didn't like" stands out (his ruling): italic, semibold, sand (6.2:1 on charcoal). */}
          He filled out our form holding a pergola quote he{" "}
          <em className="font-semibold italic text-sand">didn&apos;t like</em>. We called him back
          in <strong className={SPAN}>67 seconds</strong>, designed his shade and gave him one FINAL price. We set his
          posts in <strong className={SPAN}>one afternoon</strong>. <strong className={SPAN}>12 days later</strong>, his
          pool was in the shade.
        </p>
        <ol className="mx-auto mt-8 grid max-w-md gap-8 sm:max-w-none sm:grid-cols-3 sm:gap-6">
          {STORY_STEPS.map((step, i) => (
            <li key={step.src} className="relative">
              <figure className="relative aspect-video overflow-hidden rounded-2xl bg-white/5 shadow-lg shadow-black/40 ring-1 ring-white/10">
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
          <blockquote className="mx-auto mt-8 max-w-2xl text-center font-heading text-xl italic text-white sm:text-2xl">
            &ldquo;{STORY_QUOTE.text}&rdquo;
          </blockquote>
        )}
      </div>
    </section>
  );
}
