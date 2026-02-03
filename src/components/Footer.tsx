import Link from "next/link";
import Image from "next/image";

const footerSolutions = [
  { label: "Golf & Entertainment", href: "/golf" },
  { label: "Senior Living", href: "/senior-living" },
  { label: "How It Works", href: "/how-it-works" },
];

const footerCompany = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Free Assessment", href: "/contact" },
];

const footerWhyApex = [
  "96% UV Block",
  "15\u00B0F Cooler",
  "10-Year Warranty",
  "ShadeCast\u2122 Technology",
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Logo + Tagline + Phone + Email */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center group">
              <Image
                src="/images/logo-dark-bg.svg"
                alt="Apex Sail Shades"
                width={180}
                height={51}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400 max-w-xs">
              Engineered commercial shade solutions. Serving Arizona &amp; Utah.
            </p>
            <a
              href="tel:+14352294847"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-copper hover:text-copper-light transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
                aria-hidden="true"
              >
                <path
                  d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"
                  fill="currentColor"
                />
              </svg>
              (435) 229-4847
            </a>
            <a
              href="mailto:apex@apexsailshades.com"
              className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-copper hover:text-copper-light transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
                aria-hidden="true"
              >
                <path
                  d="M2 4l6 4 6-4M2 4v8h12V4M2 4h12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              apex@apexsailshades.com
            </a>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Solutions
            </h3>
            <ul className="space-y-3">
              {footerSolutions.map((item) => (
                <li key={item.href + item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-copper transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {footerCompany.map((item) => (
                <li key={item.href + item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-copper transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Why Apex */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Why Apex
            </h3>
            <ul className="space-y-3">
              {footerWhyApex.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-gray-400"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 text-copper"
                    aria-hidden="true"
                  >
                    <path
                      d="M11.667 3.5L5.25 9.917L2.333 7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <span>&copy; {new Date().getFullYear()} Apex Sail Shades. All rights reserved.</span>
              <span className="hidden sm:inline text-gray-600">&middot;</span>
              <span className="text-copper/70 font-medium">
                Licensed, Bonded &amp; Insured
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
