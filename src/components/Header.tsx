"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

/** Inline phone glyph used by the always-visible call affordances (A2). */
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src={scrolled ? "/images/logo-light-bg.svg" : "/images/logo-dark-bg.svg"}
                alt="Apex Sail Shades"
                width={200}
                height={57}
                className="h-12 w-auto transition-opacity duration-300"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 lg:flex">
              <Link
                href="/commercial"
                className={`text-sm font-medium transition-colors duration-300 hover:text-copper ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
              >
                Commercial
              </Link>

              <Link
                href="/process"
                className={`text-sm font-medium transition-colors duration-300 hover:text-copper ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
              >
                How It Works
              </Link>

              <Link
                href="/about"
                className={`text-sm font-medium transition-colors duration-300 hover:text-copper ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
              >
                About
              </Link>

              {/* Desktop Call link (A2) — understated, sits just before the CTA */}
              <a
                href="tel:+16028370370"
                className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 hover:text-copper ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
              >
                <PhoneIcon className="h-4 w-4" />
                Call
              </a>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="rounded-full bg-copper px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-copper-dark hover:shadow-md"
              >
                Get a Free Estimate
              </Link>
            </nav>

            {/* Mobile call button + hamburger (A2: call sits to the LEFT of hamburger) */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="tel:+16028370370"
                aria-label="Call Apex Sail Shades"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-copper text-white shadow-sm transition-colors hover:bg-copper-dark"
              >
                <PhoneIcon className="h-5 w-5" />
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`relative z-50 flex h-10 w-10 items-center justify-center rounded-md transition-colors ${
                  mobileOpen
                    ? "text-charcoal"
                    : scrolled
                      ? "text-charcoal"
                      : "text-white"
                }`}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                <div className="flex h-5 w-6 flex-col items-center justify-center">
                  <span
                    className={`block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                      mobileOpen
                        ? "translate-y-[3px] rotate-45"
                        : "-translate-y-1"
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                      mobileOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                      mobileOpen
                        ? "-translate-y-[3px] -rotate-45"
                        : "translate-y-1"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto pt-24 pb-8">
          <nav className="flex flex-col px-6">
            <Link
              href="/commercial"
              className="border-b border-cream-dark py-4 text-base font-medium text-charcoal transition-colors hover:text-copper"
              onClick={closeMobile}
            >
              Commercial
            </Link>

            <Link
              href="/process"
              className="border-b border-cream-dark py-4 text-base font-medium text-charcoal transition-colors hover:text-copper"
              onClick={closeMobile}
            >
              How It Works
            </Link>

            <Link
              href="/about"
              className="border-b border-cream-dark py-4 text-base font-medium text-charcoal transition-colors hover:text-copper"
              onClick={closeMobile}
            >
              About
            </Link>
          </nav>

          {/* Mobile CTA */}
          <div className="mt-8 px-6">
            <Link
              href="/contact"
              className="block w-full rounded-full bg-copper py-3.5 text-center text-sm font-semibold text-white shadow-sm transition-all hover:bg-copper-dark hover:shadow-md"
              onClick={closeMobile}
            >
              Get a Free Estimate
            </Link>
          </div>

          {/* Mobile Contact Info */}
          <div className="mt-auto px-6 pt-8">
            <p className="text-xs text-charcoal-light">
              Custom shade sails for Phoenix homes and businesses. Designed and
              installed in one visit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
