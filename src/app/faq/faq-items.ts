/* ============================================================================
   SAUCE-246 - SINGLE SOURCE OF TRUTH for the FAQ questions and answers.

   Extracted out of page.tsx so that BOTH surfaces read the same array:
     - faq/page.tsx    renders the visible accordion (client component)
     - faq/layout.tsx  emits the FAQPage JSON-LD (server component)

   This is the same discipline /residential uses: schema is generated from the
   SAME const that renders the visible copy, so structured data can never drift
   out of sync with what a human actually reads on the page. Google's structured
   data policy requires the marked-up content to be visible on the page, so a
   duplicated hand-maintained copy is a correctness risk, not just a tidiness one.

   EDIT THE COPY HERE and both the page and the schema follow automatically.
   ========================================================================== */
export const FAQ_ITEMS: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: "Will it survive Phoenix monsoons?",
    a: "Engineered for 90 MPH winds with marine-grade 316 stainless hardware and a 10-year fabric warranty. Architectural-grade shade fabric blocks up to 96% of UV and drops temperatures up to 15 degrees Fahrenheit under the shade.",
  },
  {
    q: "Are these actually engineered structures or just fabric?",
    a: "PE-stamped engineered structures. 90 MPH wind rating. Marine-grade 316 stainless hardware throughout. Permits coordinated through our licensed engineering partner so the structure ships with real load calcs, not a generic template.",
  },
  {
    q: "Residential or commercial, same crew?",
    a: "Same Phoenix-trained installation crew, same marine-grade hardware, same 10-year fabric warranty across both. Custom 3D design free either way.",
  },
  {
    q: "What does a residential project cost?",
    a: "Most Phoenix backyard projects run $8,000 to $12,000. Free on-site 3D design and a real itemized quote in the same visit. No high-pressure sales.",
  },
  {
    q: "What does a commercial project cost?",
    a: "Restaurant patios run $15,000 to $45,000. HOA pool decks $25,000 to $80,000. Multi-family courtyards $12,000 to $35,000 per zone. Free on-site walk plus a custom proposal sized to your property.",
  },
  {
    q: "What about HOA approval and city permits?",
    a: "HOA submittal package included. Board-ready pitch deck plus 3D renderings, spec sheet, insurance, and warranty docs. City permits coordinated through our licensed engineering partner so your team does not have to project-manage the paperwork.",
  },
  {
    q: "What does the Free Design Visit include?",
    a: "We come to you, measure the space, and run a ShadeCast sun analysis on the exact spots you want covered. You see a custom 3D render of your sail before anything is built. Real itemized quote same visit.",
  },
  {
    q: "What is the warranty?",
    a: "10-year fabric warranty backed by the manufacturer. Marine-grade 316 stainless hardware on every install. We stand behind the workmanship season after season.",
  },
  {
    q: "Where do you install?",
    a: "Greater Phoenix metro: Phoenix, Scottsdale, Mesa, Tempe, Chandler, Gilbert, Glendale, Peoria, and surrounding Valley cities. If you are outside that radius, ask anyway. We cover much of central Arizona for the right project.",
  },
  {
    q: "What is the next step?",
    a: "One free on-site visit. Real quote same day. No high-pressure sales. We respond to all inquiries within the hour.",
  },
];
