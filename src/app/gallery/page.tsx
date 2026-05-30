"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Lightbox from "@/components/Lightbox";

type Category = "residential" | "commercial";

const GALLERY: ReadonlyArray<{ src: string; category: Category }> = [
  // WS pool (56 files)
  { src: "/images/gallery-ws-02.webp", category: "commercial" },
  { src: "/images/gallery-ws-03.webp", category: "commercial" },
  { src: "/images/gallery-ws-04.webp", category: "commercial" },
  { src: "/images/gallery-ws-05.webp", category: "commercial" },
  { src: "/images/gallery-ws-07.webp", category: "commercial" },
  { src: "/images/gallery-ws-08.webp", category: "commercial" },
  { src: "/images/gallery-ws-10.webp", category: "commercial" },
  { src: "/images/gallery-ws-11.webp", category: "commercial" },
  { src: "/images/gallery-ws-12.webp", category: "commercial" },
  { src: "/images/gallery-ws-13.webp", category: "commercial" },
  { src: "/images/gallery-ws-15.webp", category: "commercial" },
  { src: "/images/gallery-ws-16.webp", category: "commercial" },
  { src: "/images/gallery-ws-17.webp", category: "commercial" },
  { src: "/images/gallery-ws-18.webp", category: "commercial" },
  { src: "/images/gallery-ws-19.webp", category: "commercial" },
  { src: "/images/gallery-ws-20.webp", category: "commercial" },
  { src: "/images/gallery-ws-21.webp", category: "commercial" },
  { src: "/images/gallery-ws-23.webp", category: "commercial" },
  { src: "/images/gallery-ws-24.webp", category: "commercial" },
  { src: "/images/gallery-ws-25.webp", category: "residential" },
  { src: "/images/gallery-ws-26.webp", category: "commercial" },
  { src: "/images/gallery-ws-27.webp", category: "commercial" },
  { src: "/images/gallery-ws-28.webp", category: "commercial" },
  { src: "/images/gallery-ws-29.webp", category: "residential" },
  { src: "/images/gallery-ws-30.webp", category: "commercial" },
  { src: "/images/gallery-ws-31.webp", category: "commercial" },
  { src: "/images/gallery-ws-32.webp", category: "residential" },
  { src: "/images/gallery-ws-33.webp", category: "commercial" },
  { src: "/images/gallery-ws-34.webp", category: "commercial" },
  { src: "/images/gallery-ws-35.webp", category: "commercial" },
  { src: "/images/gallery-ws-36.webp", category: "residential" },
  { src: "/images/gallery-ws-37.webp", category: "residential" },
  { src: "/images/gallery-ws-38.webp", category: "residential" },
  { src: "/images/gallery-ws-39.webp", category: "commercial" },
  { src: "/images/gallery-ws-40.webp", category: "commercial" },
  { src: "/images/gallery-ws-41.webp", category: "residential" },
  { src: "/images/gallery-ws-42.webp", category: "residential" },
  { src: "/images/gallery-ws-43.webp", category: "residential" },
  { src: "/images/gallery-ws-44.webp", category: "commercial" },
  { src: "/images/gallery-ws-45.webp", category: "commercial" },
  { src: "/images/gallery-ws-46.webp", category: "commercial" },
  { src: "/images/gallery-ws-47.webp", category: "residential" },
  { src: "/images/gallery-ws-49.webp", category: "commercial" },
  { src: "/images/gallery-ws-50.webp", category: "commercial" },
  { src: "/images/gallery-ws-51.webp", category: "commercial" },
  { src: "/images/gallery-ws-52.webp", category: "residential" },
  { src: "/images/gallery-ws-53.webp", category: "commercial" },
  { src: "/images/gallery-ws-54.webp", category: "commercial" },
  { src: "/images/gallery-ws-55.webp", category: "commercial" },
  { src: "/images/gallery-ws-56.webp", category: "commercial" },
  { src: "/images/gallery-ws-57.webp", category: "residential" },
  { src: "/images/gallery-ws-58.webp", category: "residential" },
  { src: "/images/gallery-ws-59.webp", category: "residential" },
  { src: "/images/gallery-ws-60.webp", category: "residential" },
  { src: "/images/gallery-ws-61.webp", category: "commercial" },
  { src: "/images/gallery-ws-62.webp", category: "commercial" },
  // OS pool (20 files)
  { src: "/images/gallery-os-01.webp", category: "residential" },
  { src: "/images/gallery-os-02.webp", category: "residential" },
  { src: "/images/gallery-os-03.webp", category: "commercial" },
  { src: "/images/gallery-os-05.webp", category: "residential" },
  { src: "/images/gallery-os-06.webp", category: "commercial" },
  { src: "/images/gallery-os-07.webp", category: "commercial" },
  { src: "/images/gallery-os-08.webp", category: "commercial" },
  { src: "/images/gallery-os-09.webp", category: "commercial" },
  { src: "/images/gallery-os-10.webp", category: "commercial" },
  { src: "/images/gallery-os-11.webp", category: "commercial" },
  { src: "/images/gallery-os-13.webp", category: "residential" },
  { src: "/images/gallery-os-14.webp", category: "residential" },
  { src: "/images/gallery-os-15.webp", category: "commercial" },
  { src: "/images/gallery-os-16.webp", category: "commercial" },
  { src: "/images/gallery-os-17.webp", category: "commercial" },
  { src: "/images/gallery-os-18.webp", category: "commercial" },
  { src: "/images/gallery-os-19.webp", category: "residential" },
  { src: "/images/gallery-os-20.webp", category: "commercial" },
  { src: "/images/gallery-os-21.webp", category: "commercial" },
  { src: "/images/gallery-os-24.webp", category: "commercial" },
];

const FILTERS = ["All", "Residential", "Commercial"] as const;
type Filter = (typeof FILTERS)[number];

export default function GalleryPage() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(() => {
    if (filter === "All") return GALLERY;
    const want: Category = filter === "Residential" ? "residential" : "commercial";
    return GALLERY.filter((p) => p.category === want);
  }, [filter]);

  return (
    <>
      <section className="bg-charcoal pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Real Phoenix shade installs
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-sand-light leading-relaxed sm:text-xl">
            Residential backyards and commercial properties. Click any photo to enlarge.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                  filter === f
                    ? "bg-copper text-white shadow-sm"
                    : "border border-sand text-charcoal hover:border-copper hover:text-copper"
                }`}
                aria-pressed={filter === f}
              >
                {f}
              </button>
            ))}
          </div>

          <Lightbox
            images={visible.map((p) => ({
              src: p.src,
              alt:
                p.category === "residential"
                  ? "Custom residential shade sail install in the Phoenix metro"
                  : "Custom commercial shade sail install in the Phoenix metro",
            }))}
            gridClassName="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            itemClassName="relative aspect-square overflow-hidden rounded-xl bg-charcoal/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-copper/60 focus:ring-offset-2"
            imageSizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
            See one you like?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-charcoal-light leading-relaxed">
            We respond to all inquiries within 4 business hours.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-copper px-8 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-copper-dark hover:shadow-md"
          >
            Get My <em className="not-italic font-bold text-[1.08em] mx-1">Free</em> Design + Visit
          </Link>
        </div>
      </section>
    </>
  );
}
