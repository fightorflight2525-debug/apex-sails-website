import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Senior Living Shade Solutions | Apex Sail Shades",
  description:
    "Engineered shade structures for assisted living, memory care, and retirement communities. End seasonal entrapment and give residents year-round outdoor access with CSFM Class A fire-rated, ADA-compliant sail shades.",
};

export default function SeniorLivingPage() {
  return (
    <main>
      {/* ═══════════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════════ */}
      <section className="bg-charcoal pt-32 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              End Seasonal Entrapment
            </h1>
            <p className="font-body mt-6 text-lg leading-relaxed text-sand-light sm:text-xl">
              Your residents are trapped indoors 6+ months a year while
              Arizona&apos;s heat turns courtyards into dead zones. Engineered
              shade makes outdoor living possible year-round.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-copper px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-copper-dark hover:shadow-xl sm:text-lg"
              >
                Get Your Free Facility Assessment
              </Link>
            </div>
            {/* Trust bar */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-sand sm:gap-x-8">
              <span className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-copper-light"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                CSFM Class A Fire Rated
              </span>
              <span className="hidden h-4 w-px bg-charcoal-light sm:block" />
              <span className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-copper-light"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                ADA Compliant
              </span>
              <span className="hidden h-4 w-px bg-charcoal-light sm:block" />
              <span className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-copper-light"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                10-Year Warranty
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — PROBLEM
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              The Hidden Cost Of Empty Courtyards
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {/* Pain Point Card */}
            {[
              {
                title: "Seasonal Entrapment",
                description:
                  "Residents confined indoors May through October",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z"
                  />
                ),
              },
              {
                title: "Family Complaints",
                description:
                  "Families see unused outdoor space and question quality of life",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                ),
              },
              {
                title: "Liability Exposure",
                description:
                  "Heat-related incidents among vulnerable residents",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                ),
              },
              {
                title: "Wasted Investment",
                description:
                  "Beautiful courtyards that sit empty most of the year",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                  />
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-cream-dark bg-cream/30 p-8 transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-copper/10">
                  <svg
                    className="h-6 w-6 text-copper"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-charcoal">
                  {item.title}
                </h3>
                <p className="font-body mt-2 text-base leading-relaxed text-charcoal-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — SOLUTION
      ═══════════════════════════════════════════════════ */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              The Summer-Proof Senior Living Sanctuary
            </h2>
            <p className="font-body mt-4 text-lg leading-relaxed text-charcoal-light">
              Transform unusable outdoor areas into protected, year-round living
              spaces.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {[
              {
                title: "Year-Round Outdoor Access",
                description:
                  "Residents enjoy courtyards even in peak summer",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                ),
              },
              {
                title: "96% UV Protection",
                description:
                  "Medical-grade sun protection for vulnerable skin",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                ),
              },
              {
                title: "15\u00B0F Temperature Drop",
                description:
                  "From dangerous to comfortable in the shade",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
                  />
                ),
              },
              {
                title: "Dignified Design",
                description:
                  "Architectural membrane structures, not institutional canopies",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                  />
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-2xl bg-white p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-copper/10">
                  <svg
                    className="h-6 w-6 text-copper"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-charcoal">
                    {item.title}
                  </h3>
                  <p className="font-body mt-1 text-base leading-relaxed text-charcoal-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 4 — SAFETY & COMPLIANCE
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Built For The Standards You&apos;re Held To
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "CSFM Class A Fire Rating",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                  />
                ),
              },
              {
                title: "ADA Compliance",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                ),
              },
              {
                title: "90mph+ Wind Load Rating",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                ),
              },
              {
                title: "GORE Tenara PTFE Thread",
                subtitle: "Lifetime warranty",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.42 15.17l-5.384-3.078A1.5 1.5 0 004.5 13.41v3.678a1.5 1.5 0 001.536 1.5l5.384-.307m0-3.116l5.384 3.078a1.5 1.5 0 001.536-1.5V13.41a1.5 1.5 0 00-1.536-1.319l-5.384.307m0 3.116V18.75"
                  />
                ),
              },
              {
                title: "Marine-Grade 316 Stainless Steel",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                  />
                ),
              },
              {
                title: "10-Year Fabric Warranty",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-xl border border-cream-dark bg-cream/20 p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-copper/10">
                  <svg
                    className="h-5 w-5 text-copper"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-charcoal">
                    {item.title}
                  </h3>
                  {"subtitle" in item && item.subtitle && (
                    <p className="font-body mt-0.5 text-sm text-charcoal-light">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 5 — CASE STUDY
      ═══════════════════════════════════════════════════ */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Proven In Senior Living
            </h2>
          </div>
          <div className="mx-auto mt-14 max-w-2xl">
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
              <div className="bg-charcoal px-8 py-6">
                <p className="font-heading text-sm font-semibold uppercase tracking-wider text-copper-light">
                  Case Study
                </p>
                <h3 className="font-heading mt-1 text-xl font-bold text-white sm:text-2xl">
                  Assisted Living Facility Shade Project
                </h3>
              </div>
              <div className="px-8 py-8">
                <div className="grid grid-cols-2 gap-6 border-b border-cream-dark pb-6">
                  <div>
                    <p className="font-body text-sm text-charcoal-light">
                      Project Value
                    </p>
                    <p className="font-heading mt-1 text-2xl font-bold text-charcoal">
                      $33K
                    </p>
                  </div>
                  <div>
                    <p className="font-body text-sm text-charcoal-light">
                      Resident Disruptions
                    </p>
                    <p className="font-heading mt-1 text-2xl font-bold text-copper">
                      Zero
                    </p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="font-body flex items-start gap-3 text-base text-charcoal-light">
                    <svg
                      className="mt-1 h-5 w-5 shrink-0 text-copper"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Zero disruption to residents throughout installation
                  </li>
                  <li className="font-body flex items-start gap-3 text-base text-charcoal-light">
                    <svg
                      className="mt-1 h-5 w-5 shrink-0 text-copper"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Courtyard transformed into usable year-round outdoor space
                  </li>
                  <li className="font-body flex items-start gap-3 text-base text-charcoal-light">
                    <svg
                      className="mt-1 h-5 w-5 shrink-0 text-copper"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Full engineering and permitting handled by Apex
                  </li>
                </ul>
                {/* Quote placeholder */}
                <blockquote className="mt-8 border-l-4 border-copper pl-6">
                  <p className="font-body text-base italic leading-relaxed text-charcoal">
                    &ldquo;Our residents are finally enjoying the courtyard we
                    built for them. The installation was seamless &mdash; families
                    didn&apos;t even know work was being done.&rdquo;
                  </p>
                  <footer className="mt-3">
                    <p className="font-heading text-sm font-semibold text-charcoal">
                      &mdash; Facility Director
                    </p>
                    <p className="font-body text-sm text-charcoal-light">
                      Assisted Living Community, Arizona
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 6 — GUARANTEES
      ═══════════════════════════════════════════════════ */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Guarantee Card 1 */}
            <div className="rounded-2xl border border-charcoal-light bg-charcoal-light/20 p-8 md:p-10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-copper/20">
                <svg
                  className="h-7 w-7 text-copper-light"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">
                The No-Disruption Guarantee
              </h3>
              <p className="font-body mt-3 text-base leading-relaxed text-sand-light">
                If our installation causes a single resident incident requiring
                a formal report, $5,000 off your invoice.
              </p>
            </div>
            {/* Guarantee Card 2 */}
            <div className="rounded-2xl border border-charcoal-light bg-charcoal-light/20 p-8 md:p-10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-copper/20">
                <svg
                  className="h-7 w-7 text-copper-light"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.896m5.25-6.388a24.16 24.16 0 00-5.25-.577c-1.8 0-3.558.157-5.25.577"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">
                10-Year Asset Protection
              </h3>
              <p className="font-body mt-3 text-base leading-relaxed text-sand-light">
                Full fabric warranty plus lifetime thread warranty. Your shade
                investment is protected for the long haul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 7 — THE PROCESS
      ═══════════════════════════════════════════════════ */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              How We Protect Your Residents
            </h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Facility Assessment",
                description:
                  "Walk the site, identify shade priorities",
              },
              {
                step: "02",
                title: "ShadeCast\u2122 Analysis",
                description:
                  "GPS-mapped shadow study for your exact courtyard",
              },
              {
                step: "03",
                title: "Engineering & Permitting",
                description:
                  "Full structural engineering, we handle all permits",
              },
              {
                step: "04",
                title: "Zero-Disruption Install",
                description:
                  "Quiet, fast, resident-safe installation",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-copper text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="font-heading mt-5 text-lg font-bold text-charcoal">
                  {item.title}
                </h3>
                <p className="font-body mt-2 text-base leading-relaxed text-charcoal-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 8 — FINAL CTA
      ═══════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-copper to-copper-dark py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Give Your Residents The Outdoors Back
            </h2>
            <p className="font-body mt-4 text-lg leading-relaxed text-white/90">
              Your families will notice the difference.
            </p>
            <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-white px-8 py-4 text-base font-semibold text-copper shadow-lg transition-all duration-300 hover:bg-cream hover:shadow-xl sm:text-lg"
              >
                Get Your Free Facility Assessment
              </Link>
            </div>
            <p className="mt-8 font-body text-base text-white/80">
              Or call us directly:{" "}
              <a
                href="tel:+14805551234"
                className="font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
              >
                (480) 555-1234
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
