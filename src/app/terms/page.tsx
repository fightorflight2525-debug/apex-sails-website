import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Apex Sail Shades",
  description:
    "The agreement between you and Apex Sail Shades when you use this site or work with us. Plain language. Arizona jurisdiction.",
};

const H2 = "font-heading text-2xl font-bold text-charcoal mt-10 mb-4";
const P = "text-base text-charcoal/80 leading-relaxed mb-4";

export default function TermsPage() {
  return (
    <>
      <section className="bg-charcoal pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-sand-light leading-relaxed">
            The agreement between you and Apex Sail Shades when you use this site or work with us.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-charcoal-light mb-8">Effective date: May 29, 2026.</p>

          <p className={P}>
            These Terms of Service (&quot;Terms&quot;) govern your use of apex-sail-shades.com (the &quot;Site&quot;) and any installation or design services you commission from Apex Sail Shades (the &quot;Services&quot;). By using the Site or by signing a written contract for Services, you agree to these Terms.
          </p>

          <h2 className={H2}>Who we are</h2>
          <p className={P}>
            Apex Sail Shades is a Phoenix, Arizona shade-sail design, fabrication coordination, and installation company. Contact: contact@apex-sail-shades.com or (602) 837-0370.
          </p>

          <h2 className={H2}>Use of the site</h2>
          <p className={P}>
            The Site is provided for general informational purposes and to let you request a free on-site design visit. You agree to use the Site lawfully and not to interfere with its operation, attempt to access areas you are not authorized to use, scrape content for resale, or upload anything harmful through the contact form.
          </p>
          <p className={P}>
            The Site may contain links to third-party sites (for example, Formspree, our hosting provider, or social media). We do not control those sites and are not responsible for their content or practices.
          </p>

          <h2 className={H2}>Service area</h2>
          <p className={P}>
            We design and install in the Greater Phoenix metro and surrounding central Arizona. Project eligibility outside that area is at our discretion and may include a travel allowance.
          </p>

          <h2 className={H2}>How a project works</h2>
          <p className={P}>
            Every project begins with a free on-site visit. We measure the space, run a ShadeCast sun analysis, and prepare a written, itemized quote. If you accept the quote, we will provide a separate written installation contract that includes the scope of work, materials, total price, payment schedule, start and completion dates, and the Arizona license number under which the work will be performed. The installation contract, not these Site Terms, governs the relationship for the actual physical work.
          </p>

          <h2 className={H2}>License and insurance</h2>
          <p className={P}>
            Apex installations are performed by licensed and insured local crews. The applicable Arizona Registrar of Contractors license classification for awnings, canopies, carports, and patio cover work is held at the crew level. Current license details are available on request through contact@apex-sail-shades.com, and the Arizona Registrar of Contractors maintains a public search at azroc.gov.
          </p>

          <h2 className={H2}>Pricing, quotes, and contracts</h2>
          <p className={P}>
            Quoted pricing is valid for 30 days from the quote date unless a different period is stated in writing. Quotes are based on the conditions observed during the free design visit; if site conditions discovered during installation materially change the scope (for example, a footing depth requirement that was not visible during the survey), we will notify you in writing and obtain your approval before proceeding with extra work.
          </p>
          <p className={P}>
            The Site lists representative price ranges (for example, &quot;most residential projects $5,000 to $8,000,&quot; &quot;restaurant patios $15,000 to $45,000&quot;). These are illustrative ranges, not binding offers. The binding price for your project is the one stated in your written installation contract.
          </p>

          <h2 className={H2}>Warranty</h2>
          <p className={P}>
            The shade fabric we install carries a 10-year warranty from the fabric manufacturer against material defects under normal use, subject to the manufacturer&apos;s stated terms. Apex warrants its workmanship for one year from substantial completion against installation defects that arise during normal use. Damage from impact, vandalism, modifications by other parties, or maintenance neglect is not covered.
          </p>
          <p className={P}>
            These warranties are the only warranties Apex provides. To the maximum extent permitted by Arizona law, we disclaim all other express or implied warranties, including warranties of merchantability and fitness for a particular purpose.
          </p>

          <h2 className={H2}>Limitation of liability</h2>
          <p className={P}>
            To the maximum extent permitted by Arizona law, Apex is not liable for indirect, incidental, consequential, special, or punitive damages arising out of your use of the Site or our Services, even if we have been advised of the possibility of such damages. Our total liability for any claim arising out of the Site or Services is limited to the amount you paid Apex under the relevant installation contract for the work giving rise to the claim, or $500 if no contract exists.
          </p>
          <p className={P}>
            Nothing in these Terms limits any liability that cannot be limited under Arizona law, including liability for fraud, intentional misconduct, or gross negligence.
          </p>

          <h2 className={H2}>Intellectual property</h2>
          <p className={P}>
            The text, graphics, photographs, logos, and software on the Site are owned by Apex or licensed to Apex and are protected by United States copyright and trademark law. You may view and print pages for your personal, non-commercial use. You may not copy, redistribute, or use the content for any commercial purpose without our written permission.
          </p>
          <p className={P}>
            The &quot;ShadeCast&quot; mark and any other Apex brand marks are claimed by Apex. The marks of third parties (for example, Formspree, Google, Vercel) belong to their respective owners.
          </p>

          <h2 className={H2}>Privacy</h2>
          <p className={P}>
            Our handling of information you share with the Site or with us is governed by our Privacy Policy at apex-sail-shades.com/privacy. The Privacy Policy is incorporated into these Terms by reference.
          </p>

          <h2 className={H2}>Disputes and governing law</h2>
          <p className={P}>
            These Terms and any dispute arising from your use of the Site are governed by the laws of the State of Arizona, without regard to its conflict-of-law principles. You and Apex agree that any lawsuit relating to the Site will be filed in the state or federal courts located in Maricopa County, Arizona, and that both parties consent to the personal jurisdiction of those courts.
          </p>
          <p className={P}>
            For consumer disputes about an installation project, the Arizona Registrar of Contractors provides a Recovery Fund and a complaint process; the relevant resources are at azroc.gov.
          </p>

          <h2 className={H2}>Changes to these Terms</h2>
          <p className={P}>
            We may update these Terms from time to time. The effective date at the top of this page will reflect the most recent change. Material changes will also be flagged for a reasonable period at the top of the page.
          </p>

          <h2 className={H2}>Contact</h2>
          <p className={P}>
            Questions about these Terms: contact@apex-sail-shades.com or (602) 837-0370.
          </p>

          <p className="mt-10 text-sm text-charcoal-light italic">End of Terms of Service.</p>
        </article>
      </section>
    </>
  );
}
