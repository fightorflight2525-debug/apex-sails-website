import Image from "next/image";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

// ============================================================================
// EXPERIENCE BAND (industry lineage, not entity age). SAUCE-313: lifted
// VERBATIM out of the home page (its SECTION 7) so /welcome shows "the main
// site's Experience section as it renders there" (S1.4) and cannot drift.
// ============================================================================

export default function ExperienceSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* B3: photo hidden on mobile (showcase dominates above-the-fold; experience copy + stats stand alone on small viewports) */}
          <Reveal className="hidden lg:block">
            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-sand/30">
              <Image
                src="/images/showcase-craft-ws09.webp"
                alt="Tensioned shade sails over a finished outdoor space"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-copper font-semibold tracking-wide uppercase text-sm mb-3">
              Experience
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal leading-tight">
              Backed by <em className="italic">deep</em> shade-sail experience
            </h2>
            <p className="mt-6 text-lg text-charcoal/70 leading-relaxed">
              The team at Apex came up through a Phoenix shade-sail lineage that dates back to 2019. Together, our crews and the partners we trained alongside have installed more than 1 million square feet of shade in the past year alone. That depth shows up in every footing we pour and every sail we tension.
            </p>
            <div className="mt-8 flex flex-wrap gap-10">
              <div>
                <p className="font-heading text-4xl font-bold text-copper">
                  Since 2019
                </p>
                <p className="mt-1 text-charcoal/60 font-medium">Industry lineage</p>
              </div>
              <div>
                <p className="font-heading text-4xl font-bold text-copper">
                  <CountUp to={500000} suffix="+" />
                </p>
                <p className="mt-1 text-charcoal/60 font-medium">Sq ft shaded (Apex + partners)</p>
              </div>
              <div>
                <p className="font-heading text-4xl font-bold text-copper">
                  <CountUp to={1000000} suffix="+" />
                </p>
                <p className="mt-1 text-charcoal/60 font-medium">Partner volume, past year</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
