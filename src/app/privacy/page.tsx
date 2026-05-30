import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Apex Sail Shades",
  description:
    "How Apex Sail Shades collects, uses, and protects information from visitors and lead-form submitters. Plain language. Phoenix, Arizona.",
};

const H2 = "font-heading text-2xl font-bold text-charcoal mt-10 mb-4";
const P = "text-base text-charcoal/80 leading-relaxed mb-4";
const UL = "list-disc pl-6 space-y-2 mb-4 text-charcoal/80";

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-charcoal pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-sand-light leading-relaxed">
            How we handle the information you share with us. Plain language. No surprises.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-charcoal-light mb-8">Effective date: May 29, 2026.</p>

          <p className={P}>
            Apex Sail Shades (&quot;Apex,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is a Phoenix, Arizona shade-sail design and installation company. This Privacy Policy explains what information we collect when you visit apex-sail-shades.com or contact us, how we use it, who we share it with, and your rights.
          </p>

          <h2 className={H2}>Who we are</h2>
          <p className={P}>
            Apex Sail Shades is a locally owned Arizona business. Our office: Greater Phoenix metro. Email: contact@apex-sail-shades.com. Phone: (602) 837-0370. The person responsible for handling questions about this policy or your information is reachable at that email.
          </p>

          <h2 className={H2}>Information we collect</h2>
          <p className={P}>We collect two kinds of information.</p>
          <p className={P}>
            <strong>Information you give us.</strong> When you fill out the contact form on our site, you provide your name, phone number, email address, project address or ZIP, project type (residential or commercial), and any notes you choose to add. When you call the phone number listed on the site, your phone number is shared with us by your carrier as part of the call.
          </p>
          <p className={P}>
            <strong>Information collected automatically.</strong> When you browse the site, standard server logs record your IP address, browser type, device type, the pages you visit, the time of your visit, and the page that referred you. If we run Google Analytics or a similar analytics tool, those tools collect comparable information through cookies in your browser. We do not currently use the site for accounts, logins, e-commerce, or any feature that requires storing information beyond the visit itself.
          </p>

          <h2 className={H2}>How we use the information</h2>
          <p className={P}>
            We use the information you give us through the contact form to respond to your inquiry, schedule your free design visit, prepare a quote, and follow up on the project. We use automatic information to keep the site running, troubleshoot problems, understand how visitors find us, and improve the site over time.
          </p>
          <p className={P}>
            We do not use your information to send marketing emails or text messages unless you have asked us to.
          </p>

          <h2 className={H2}>Who we share information with</h2>
          <p className={P}>We share information with a small number of service providers who help us run the business:</p>
          <ul className={UL}>
            <li>
              <strong>Formspree</strong> receives your contact-form submission and forwards it to our email inbox. Formspree acts as a data processor; their privacy practices are at formspree.io.
            </li>
            <li>
              <strong>Our email provider</strong> (the host of contact@apex-sail-shades.com) stores your message in our inbox.
            </li>
            <li>
              <strong>Our website host</strong> (Vercel) handles the technical delivery of the site and the standard server logs described above.
            </li>
            <li>
              <strong>Google Analytics</strong> (when active) processes the automatic browsing information described above. You can opt out of Google Analytics tracking using the browser add-on at tools.google.com/dlpage/gaoptout.
            </li>
          </ul>
          <p className={P}>
            We do not sell, rent, or trade your personal information to anyone for marketing purposes.
          </p>
          <p className={P}>
            We will share information when the law requires it, when we need to protect the legal rights of Apex or another party, or when you have given us permission to share.
          </p>

          <h2 className={H2}>How long we keep the information</h2>
          <p className={P}>
            We keep contact-form submissions and project records for as long as we are working with you, plus a reasonable period after the project closes to handle warranty questions and bookkeeping. Routine site analytics data is retained per the standard settings of the tools we use (typically 14 to 26 months).
          </p>
          <p className={P}>
            If you would like us to delete your information sooner, email contact@apex-sail-shades.com with the request. We will delete what we can, while preserving records we are legally required to keep.
          </p>

          <h2 className={H2}>Cookies and browser tracking</h2>
          <p className={P}>
            The site may use cookies to keep it running and to measure how it is used. You can disable cookies in your browser settings; the site will still work but some measurement may not function. We do not use cookies for advertising retargeting on this site at the time of writing.
          </p>

          <h2 className={H2}>Your rights</h2>
          <p className={P}>You can ask us:</p>
          <ul className={UL}>
            <li>What information we have about you.</li>
            <li>To correct anything that is wrong.</li>
            <li>To delete what we are not required to keep.</li>
            <li>To stop using your information for any purpose you previously agreed to.</li>
          </ul>
          <p className={P}>
            Email contact@apex-sail-shades.com with the request and we will respond within a reasonable time. If you are an Arizona resident, you can also contact the Arizona Attorney General&apos;s Office with concerns about how a business handled your information.
          </p>

          <h2 className={H2}>Security</h2>
          <p className={P}>
            We use reasonable technical and operational measures to protect the information we hold, including HTTPS on the entire site and access controls on our email and form-handling tools. No system on the internet is fully secure, and we cannot guarantee absolute security. If we ever discover a breach affecting your information, we will notify you as required by Arizona law.
          </p>

          <h2 className={H2}>Children</h2>
          <p className={P}>
            Our services and the site are not directed to children under 13. We do not knowingly collect information from anyone under 13. If you believe a child has submitted information through the contact form, email us and we will delete it.
          </p>

          <h2 className={H2}>Changes to this policy</h2>
          <p className={P}>
            We may update this policy from time to time. The effective date at the top of this page will reflect the most recent change. Material changes will also be flagged for a reasonable period at the top of the page.
          </p>

          <h2 className={H2}>Contact</h2>
          <p className={P}>
            Questions about this policy or about how we have handled your information: contact@apex-sail-shades.com or (602) 837-0370.
          </p>

          <p className="mt-10 text-sm text-charcoal-light italic">End of Privacy Policy.</p>
        </article>
      </section>
    </>
  );
}
