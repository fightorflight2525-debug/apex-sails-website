import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Apex Sail Shades",
  description:
    "Learn about Apex Sail Shades, a Phoenix shade sail company engineering custom shade for homes and businesses across Arizona, built to perform under the most demanding desert sun.",
};

const differentiators = [
  {
    title: "We're Engineers, Not Installers",
    description:
      "Full structural engineering on every project. HyPar tensioned membrane design rated for 90mph+ winds.",
    icon: (
      <svg
        className="h-7 w-7 text-copper"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085"
        />
      </svg>
    ),
  },
  {
    title: "ShadeCast\u2122 Technology",
    description:
      "Proprietary shadow analysis that maps shade movement across your space, hour by hour and season by season.",
    icon: (
      <svg
        className="h-7 w-7 text-copper"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    ),
  },
  {
    title: "Leica Precision",
    description:
      '3D laser mapping at 1/16" accuracy. No guesswork, no field adjustments.',
    icon: (
      <svg
        className="h-7 w-7 text-copper"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M12 8.25v7.5m-3.75-3.75h7.5"
        />
      </svg>
    ),
  },
  {
    title: "Homes & Businesses",
    description:
      "From backyard patios to large commercial courtyards, every sail is custom-engineered and built to perform in the Arizona sun.",
    icon: (
      <svg
        className="h-7 w-7 text-copper"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
        />
      </svg>
    ),
  },
];

const stats = [
  { value: "300,000+", label: "Sq Ft Shaded" },
  { value: "96%", label: "UV Block Rating" },
  { value: "15\u00b0F", label: "Avg Temp Reduction" },
  { value: "1,500 sq ft", label: "Largest commercial install" },
  { value: "90mph+", label: "Wind Load Rating" },
  { value: "10 Years", label: "Fabric Warranty" },
];

const standards = [
  "PTFE-coated architectural fabric",
  "GORE Tenara PTFE thread \u2014 lifetime warranty",
  "Marine-grade 316 stainless steel hardware",
  "Leica 3D laser mapping precision",
  "CSFM Class A fire rated materials",
];

export default function AboutPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative bg-charcoal pt-32 pb-20">
        {/* Hero background image */}
        <Image
          src="/images/about-dramatic.png"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 to-charcoal/80" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Custom Shade. Engineered Right.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-sand-light leading-relaxed sm:text-xl">
            From backyard patios to commercial courtyards, we design and build
            shade structures that perform under Arizona&apos;s most demanding
            sun.
          </p>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-widest text-copper">
                Our Story
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                Built On Precision, Proven At Scale
              </h2>
              <div className="mt-6 space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  Apex Sail Shades was founded with a singular focus: shade
                  done right. Custom-engineered, tensioned shade sails for
                  Phoenix homes and businesses that demand performance and
                  durability in extreme desert sun.
                </p>
                <p>
                  We have engineered and installed commercial projects like our
                  1,500 square foot Whirlwind install, alongside custom
                  residential sails for Phoenix homeowners. For senior living
                  and family backyards alike, shade here isn&apos;t a luxury, it
                  is a daily necessity.
                </p>
                <p>
                  Today we bring that same engineered approach to every project
                  across the Greater Phoenix area, where the sun is relentless
                  and the stakes are high.
                </p>
              </div>
            </div>

            {/* Team Photo */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream">
              <Image
                src="/images/team-founders.webp"
                alt="Apex Sail Shades founders with shade sail installation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY WE'RE DIFFERENT ===== */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-copper">
              Why We&apos;re Different
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-charcoal sm:text-4xl">
              What Separates Apex From Every Other Shade Company
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-copper/10">
                  {d.icon}
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-charcoal">
                  {d.title}
                </h3>
                <p className="mt-3 leading-relaxed text-charcoal-light">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BY THE NUMBERS ===== */}
      <section className="bg-charcoal py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-copper">
              By The Numbers
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
              Performance You Can Measure
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-12">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-heading text-3xl font-bold text-copper sm:text-4xl lg:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-sand-light sm:text-base">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR STANDARDS ===== */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-copper">
              Our Standards
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-charcoal sm:text-4xl">
              No Shortcuts. No Compromises.
            </h2>
            <p className="mt-6 leading-relaxed text-charcoal-light">
              Every component we specify is selected for commercial longevity.
              We don&apos;t substitute materials, cut corners on hardware, or
              use residential-grade anything. When your structure is engineered
              by Apex, every bolt, cable, and thread is built to last decades,
              not seasons.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-2xl">
            <ul className="space-y-4">
              {standards.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper/10">
                    <svg
                      className="h-4 w-4 text-copper"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span className="text-charcoal leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-gradient-to-br from-copper to-copper-dark py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Ready To Work With Arizona&apos;s Shade Experts?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Let&apos;s talk about your project. We&apos;ll show you what
            engineered shade can do for your facility.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-base font-semibold text-copper shadow-lg transition-all hover:bg-cream hover:shadow-xl"
          >
            Get Your Free Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
