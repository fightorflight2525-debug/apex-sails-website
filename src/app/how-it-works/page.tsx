import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "How It Works | Apex Sail Shades",
  description:
    "From analysis to installation in weeks, not months. Learn about our precision-engineered shade sail process: ShadeCast™ analysis, HyPar engineering, Leica 3D mapping, and professional installation.",
};

/* ------------------------------------------------------------------ */
/*  SVG ICONS                                                         */
/* ------------------------------------------------------------------ */

function IconDiscovery({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="22" cy="22" r="14" stroke="currentColor" strokeWidth="2.5" />
      <line
        x1="32.5"
        y1="32.5"
        x2="42"
        y2="42"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="22" cy="22" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

function IconShadeCast({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="14" r="6" stroke="currentColor" strokeWidth="2.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 24 + Math.cos(rad) * 9;
        const y1 = 14 + Math.sin(rad) * 9;
        const x2 = 24 + Math.cos(rad) * 12;
        const y2 = 14 + Math.sin(rad) * 12;
        return (
          <line
            key={angle}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })}
      <rect x="6" y="30" width="36" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <line x1="10" y1="34" x2="30" y2="34" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <line x1="10" y1="38" x2="24" y2="38" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}

function IconEngineering({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="4" width="40" height="40" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <line x1="4" y1="12" x2="44" y2="12" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="4" y1="20" x2="44" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="4" y1="28" x2="44" y2="28" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="4" y1="36" x2="44" y2="36" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="12" y1="4" x2="12" y2="44" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="20" y1="4" x2="20" y2="44" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="28" y1="4" x2="28" y2="44" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="36" y1="4" x2="36" y2="44" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <polygon points="10,38 24,14 38,38" stroke="currentColor" strokeWidth="2.5" fill="none" />
    </svg>
  );
}

function IconFabrication({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
      <line x1="24" y1="6" x2="24" y2="18" stroke="currentColor" strokeWidth="2" />
      <line x1="24" y1="30" x2="24" y2="42" stroke="currentColor" strokeWidth="2" />
      <line x1="6" y1="24" x2="18" y2="24" stroke="currentColor" strokeWidth="2" />
      <line x1="30" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="2" />
      <rect x="20" y="20" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconInstallation({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L10 18H20L16 42L36 22H24L30 6H18Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconHypar({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 12 Q24 4 42 20" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path d="M6 12 Q24 28 42 20" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path d="M6 28 Q24 20 42 36" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M6 28 Q24 44 42 36" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
      <line x1="6" y1="12" x2="6" y2="28" stroke="currentColor" strokeWidth="2" />
      <line x1="42" y1="20" x2="42" y2="36" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function IconLeica({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="3" fill="currentColor" />
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" />
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" />
      <line x1="24" y1="2" x2="24" y2="10" stroke="currentColor" strokeWidth="2" />
      <line x1="24" y1="38" x2="24" y2="46" stroke="currentColor" strokeWidth="2" />
      <line x1="2" y1="24" x2="10" y2="24" stroke="currentColor" strokeWidth="2" />
      <line x1="38" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function IconShadeCastTech({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="6" width="40" height="30" rx="3" stroke="currentColor" strokeWidth="2.5" />
      <line x1="16" y1="36" x2="32" y2="36" stroke="currentColor" strokeWidth="2.5" />
      <line x1="12" y1="42" x2="36" y2="42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="24" y1="36" x2="24" y2="42" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M22 24 L30 14 L38 24" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="8" y="26" width="32" height="4" rx="1" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  PROCESS STEP DATA                                                 */
/* ------------------------------------------------------------------ */

const processSteps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description:
      "Every Apex project begins with a conversation. We take the time to understand your property, your goals, and the specific challenges Arizona's sun creates for your business. This is a no-obligation consultation designed to determine if shade sails are the right solution for your space.",
    bullets: [
      "Free initial consultation with a shade specialist",
      "On-site evaluation and needs assessment",
      "Project scope and budget alignment",
      "Realistic timeline discussion and planning",
    ],
    imagePlaceholder: "Consultation Photo",
    image: "/images/gallery-blue-courtyard.jpg",
    Icon: IconDiscovery,
  },
  {
    number: "02",
    title: "ShadeCast\u2122 Analysis",
    description:
      "Our proprietary ShadeCast\u2122 software is what separates Apex from every other shade company. Using GPS-precise data for your exact location, we simulate shadow movement across your property throughout the entire year. The result is a data-driven plan that maximizes shade coverage exactly where and when you need it most.",
    bullets: [
      "GPS-precise shadow mapping of your specific site",
      "Hour-by-hour shade visualization for any day of the year",
      "Optimized sail placement recommendations",
      "Custom report with visual shadow data and coverage metrics",
    ],
    imagePlaceholder: "ShadeCast\u2122 Analysis Report",
    image: "/images/gallery-aerial.jpg",
    Icon: IconShadeCast,
  },
  {
    number: "03",
    title: "Engineering & Design",
    description:
      "This is where science meets craftsmanship. Our engineering team designs every structure using HyPar (Hyperbolic Parabola) tensioned membrane geometry, the gold standard for shade sail performance. Combined with Leica 3D Laser Mapping accurate to 1/16 of an inch, every element is engineered for precision, durability, and beauty.",
    bullets: [
      "HyPar tensioned membrane design for superior performance",
      "Leica 3D Laser Mapping \u2014 1/16\u201d measurement accuracy",
      "Full structural engineering calculations",
      "90 mph+ wind load rated designs",
      "City permitting handled entirely by our team",
    ],
    imagePlaceholder: "Engineering Blueprint",
    image: "/images/installation-process.jpg",
    Icon: IconEngineering,
  },
  {
    number: "04",
    title: "Fabrication",
    description:
      "Every sail is fabricated to exact specifications using the highest-grade materials available in the industry. From the PTFE-coated architectural fabric that blocks 96% of UV rays to GORE Tenara thread that carries a lifetime warranty, we never cut corners on what protects your guests and your investment.",
    bullets: [
      "PTFE-coated architectural fabric \u2014 96% UV block",
      "GORE Tenara thread \u2014 lifetime warranty",
      "Marine-grade 316 stainless steel hardware",
      "Custom-cut to exact specifications from laser measurements",
      "Quality control inspection before shipping",
    ],
    imagePlaceholder: "Fabrication Process",
    image: "/images/gallery-curved-desert.jpg",
    Icon: IconFabrication,
  },
  {
    number: "05",
    title: "Installation",
    description:
      "Our professional installation teams work efficiently to minimize disruption to your business operations. Most commercial installations are completed in just one to three days. We finish with a thorough inspection and sign-off, activating your warranty and ensuring every detail meets Apex standards.",
    bullets: [
      "Professional installation by trained specialists",
      "Minimal site disruption \u2014 your operations continue",
      "Typically 1\u20133 days for most commercial projects",
      "Final inspection and client sign-off",
      "10-year fabric warranty activation",
    ],
    imagePlaceholder: "Installation Photo",
    image: "/images/gallery-desert-mountains.jpg",
    Icon: IconInstallation,
  },
];

/* ------------------------------------------------------------------ */
/*  TECHNOLOGY DATA                                                   */
/* ------------------------------------------------------------------ */

const technologies = [
  {
    title: "HyPar Engineering",
    description:
      "Hyperbolic Parabola geometry is the structural foundation of every Apex shade sail. Unlike flat or simply curved sails, the HyPar form creates a double-curved surface that naturally resists flutter and pooling. This geometry distributes wind and rain loads evenly across the entire membrane, resulting in structures rated for 90 mph+ winds. The elegant saddle shape also creates superior visual appeal, lending an architectural quality that flat sails simply cannot match.",
    Icon: IconHypar,
  },
  {
    title: "Leica 3D Laser Mapping",
    description:
      "Precision begins with measurement. We use Leica 3D laser scanning technology to capture sub-millimeter accurate point clouds of every installation site. This data ensures that every post, cable, and fabric panel is fabricated to tolerances of 1/16 of an inch. The result is a perfect fit on installation day \u2014 no field adjustments, no compromises, and no surprises. This level of precision is typically reserved for aerospace and high-rise construction.",
    Icon: IconLeica,
  },
  {
    title: "ShadeCast\u2122 Software",
    description:
      "ShadeCast\u2122 is our proprietary shade analysis platform, developed specifically for commercial shade sail design. Using GPS coordinates and solar geometry, it generates precise shadow projections for any location, any time of day, any day of the year. The system identifies optimal sail positions, angles, and dimensions to deliver maximum shade coverage during peak hours. Every client receives a detailed visual report showing exactly where shade will fall before a single post is set.",
    Icon: IconShadeCastTech,
  },
];

/* ------------------------------------------------------------------ */
/*  INCLUDED ITEMS DATA                                               */
/* ------------------------------------------------------------------ */

const includedItems = [
  "Free shade analysis",
  "Complete engineering drawings",
  "City permit handling",
  "Custom fabrication",
  "Professional installation",
  "10-year fabric warranty",
  "Lifetime thread warranty",
  "Post-installation inspection",
];

/* ------------------------------------------------------------------ */
/*  PAGE COMPONENT                                                    */
/* ------------------------------------------------------------------ */

export default function HowItWorksPage() {
  return (
    <>
      {/* ====== HERO ====== */}
      <section className="bg-charcoal pt-32 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-copper mb-6">
              Our Process
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              From Analysis To Installation
              <br className="hidden sm:block" />
              <span className="text-copper"> In Weeks, Not Months</span>
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-gray-300 sm:text-xl">
              Every Apex project follows a precision-engineered process designed
              to eliminate surprises and deliver results.
            </p>
          </div>
        </div>
      </section>

      {/* ====== PROCESS STEPS ====== */}
      {processSteps.map((step, index) => {
        const isEven = index % 2 === 0;
        const bgColor = isEven ? "bg-white" : "bg-cream";

        return (
          <section key={step.number} className={`${bgColor} py-20 md:py-28`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div
                className={`flex flex-col items-center gap-12 lg:gap-20 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-5 mb-6">
                    <span className="font-heading text-6xl font-black text-copper/20 sm:text-7xl lg:text-8xl leading-none">
                      {step.number}
                    </span>
                    <step.Icon className="h-10 w-10 text-copper sm:h-12 sm:w-12" />
                  </div>

                  <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl mb-5">
                    {step.title}
                  </h2>

                  <p className="text-lg leading-relaxed text-charcoal/70 mb-8">
                    {step.description}
                  </p>

                  <ul className="space-y-4">
                    {step.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper/10">
                          <CheckIcon className="h-4 w-4 text-copper" />
                        </span>
                        <span className="text-charcoal/80 leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                    {step.image ? (
                      <Image
                        src={step.image}
                        alt={step.imagePlaceholder}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="absolute inset-0 border-2 border-dashed border-copper/20 bg-cream-dark/50 flex items-center justify-center">
                        <div className="text-center px-6">
                          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-copper/10">
                            <step.Icon className="h-8 w-8 text-copper" />
                          </div>
                          <p className="font-heading text-lg font-semibold text-charcoal/40">
                            {step.imagePlaceholder}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ====== TECHNOLOGY DEEP DIVE ====== */}
      <section className="bg-charcoal py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-copper mb-5">
              Technology
            </p>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              The Technology Behind
              <br className="hidden sm:block" />
              Every Installation
            </h2>
          </div>

          <div className="grid gap-10 md:gap-12 lg:grid-cols-3">
            {technologies.map((tech) => (
              <div
                key={tech.title}
                className="rounded-2xl border border-white/10 bg-charcoal-light/50 p-8 md:p-10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-copper/10">
                  <tech.Icon className="h-8 w-8 text-copper" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-4 sm:text-2xl">
                  {tech.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-400">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== WHAT'S INCLUDED ====== */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-copper mb-5">
              Full Service
            </p>
            <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
              Every Project Includes
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {includedItems.map((item) => (
              <div
                key={item}
                className="group flex flex-col items-center rounded-2xl border border-cream-dark bg-cream/50 p-8 text-center transition-all duration-300 hover:border-copper/30 hover:shadow-lg"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-copper/10 transition-colors duration-300 group-hover:bg-copper/20">
                  <CheckIcon className="h-6 w-6 text-copper" />
                </span>
                <p className="font-heading text-base font-semibold text-charcoal">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="bg-gradient-to-br from-copper-dark via-copper to-copper-light py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready To Start Your Project?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
              Get a free, no-obligation shade analysis for your property. Our
              team will show you exactly how Apex shade sails can transform your
              space.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 font-heading text-base font-bold text-copper transition-all duration-300 hover:bg-cream hover:shadow-xl"
              >
                Get Your Free Assessment
              </Link>
              <Link
                href="/about"
                className="inline-flex h-14 items-center justify-center rounded-full border-2 border-white/40 px-10 font-heading text-base font-bold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
