"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
        setMobileSolutionsOpen(false);
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

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setSolutionsOpen(true);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 150);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSolutionsOpen(false);
  };

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
            <Link href="/" className="flex items-center gap-3 group">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9 shrink-0"
                aria-hidden="true"
              >
                {/* Stylized sail / geometric triangle shape */}
                <path
                  d="M8 36L20 4L32 36"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-copper"
                />
                <path
                  d="M20 4L32 36H20V4Z"
                  fill="currentColor"
                  className="text-copper opacity-80"
                />
                <path
                  d="M8 36L20 4V36H8Z"
                  fill="currentColor"
                  className="text-copper opacity-40"
                />
                <line
                  x1="11"
                  y1="28"
                  x2="29"
                  y2="28"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-copper"
                />
              </svg>
              <span
                className={`font-heading text-lg font-bold tracking-wide transition-colors duration-300 ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
              >
                APEX SAIL SHADES
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 lg:flex">
              {/* Solutions Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 hover:text-copper ${
                    scrolled ? "text-charcoal" : "text-white"
                  }`}
                  aria-expanded={solutionsOpen}
                  aria-haspopup="true"
                >
                  Solutions
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
                      solutionsOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute left-1/2 top-full mt-2 w-56 -translate-x-1/2 rounded-lg bg-white py-2 shadow-xl ring-1 ring-black/5 transition-all duration-200 ${
                    solutionsOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0"
                  }`}
                >
                  <Link
                    href="/golf"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-charcoal transition-colors hover:bg-cream hover:text-copper"
                    onClick={() => setSolutionsOpen(false)}
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-cream">
                      <svg
                        className="h-4 w-4 text-copper"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 21h18M3 21V8l9-5 9 5v13"
                        />
                      </svg>
                    </span>
                    <div>
                      <div className="font-medium">Golf &amp; Entertainment</div>
                      <div className="text-xs text-charcoal-light">
                        Courses &amp; venues
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/senior-living"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-charcoal transition-colors hover:bg-cream hover:text-copper"
                    onClick={() => setSolutionsOpen(false)}
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-cream">
                      <svg
                        className="h-4 w-4 text-copper"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3v18m-7-7h14M5 8h14"
                        />
                      </svg>
                    </span>
                    <div>
                      <div className="font-medium">Senior Living</div>
                      <div className="text-xs text-charcoal-light">
                        Communities &amp; facilities
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <Link
                href="/how-it-works"
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

              {/* CTA Button */}
              <Link
                href="/contact"
                className="rounded-full bg-copper px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-copper-dark hover:shadow-md"
              >
                Get Free Assessment
              </Link>
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`relative z-50 flex h-10 w-10 items-center justify-center rounded-md lg:hidden transition-colors ${
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
            {/* Mobile Solutions Accordion */}
            <div className="border-b border-cream-dark">
              <button
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="flex w-full items-center justify-between py-4 text-base font-medium text-charcoal"
                aria-expanded={mobileSolutionsOpen}
              >
                Solutions
                <svg
                  className={`h-5 w-5 text-charcoal-light transition-transform duration-200 ${
                    mobileSolutionsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  mobileSolutionsOpen ? "max-h-40 pb-2" : "max-h-0"
                }`}
              >
                <Link
                  href="/golf"
                  className="block py-2.5 pl-4 text-sm text-charcoal-light transition-colors hover:text-copper"
                  onClick={closeMobile}
                >
                  Golf &amp; Entertainment
                </Link>
                <Link
                  href="/senior-living"
                  className="block py-2.5 pl-4 text-sm text-charcoal-light transition-colors hover:text-copper"
                  onClick={closeMobile}
                >
                  Senior Living
                </Link>
              </div>
            </div>

            <Link
              href="/how-it-works"
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
              Get Free Assessment
            </Link>
          </div>

          {/* Mobile Contact Info */}
          <div className="mt-auto px-6 pt-8">
            <p className="text-xs text-charcoal-light">
              Commercial shade solutions for golf courses and senior living
              facilities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
