
"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const destinations = [
  {
    name: "Alpine Escapes",
    location: "Mountains & lakes",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85",
    layout:
      "col-span-2 row-span-3 sm:row-span-4 lg:row-span-5",
  },
  {
    name: "Italian Coast",
    location: "Coastal adventures",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=85",
    layout:
      "col-span-1 row-span-3 lg:row-span-3",
  },
  {
    name: "Tropical Escape",
    location: "Sun, sand & sea",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
    layout:
      "col-span-1 row-span-2 lg:row-span-2",
  },
  {
    name: "City Adventures",
    location: "Explore somewhere new",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1000&q=85",
    layout:
      "col-span-1 row-span-3 lg:row-span-4",
  },
  {
    name: "Mountain Trails",
    location: "Find your wild",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    layout:
      "col-span-2 row-span-3 sm:col-span-2 lg:row-span-4",
  },
  {
    name: "Desert Dreams",
    location: "A different kind of escape",
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=85",
    layout:
      "col-span-1 row-span-2 lg:row-span-3",
  },
  {
    name: "Island Living",
    location: "Slow down & recharge",
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=900&q=85",
    layout:
      "col-span-1 row-span-2 lg:row-span-2",
  },
  {
    name: "Blue Horizons",
    location: "Let the world surprise you",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=85",
    layout:
      "col-span-2 row-span-3 sm:col-span-1 lg:row-span-3",
  },
];

export default function TravelGallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    };

    gsap.fromTo(
      "[data-gallery-card]",
      {
        y: 45,
        autoAlpha: 0,
        scale: 0.96,
      },
      {
        y: 0,
        autoAlpha: 1,
        scale: 1,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gallery-grid",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      "[data-gallery-heading]",
      {
        y: 25,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gallery-intro",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, {
    scope: sectionRef
  }
  );

  return (
    <section
      ref={sectionRef}
      id="destinations"
      aria-labelledby="gallery-title"
      className="w-full bg-surface px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-container">
        {/* Gallery heading */}
        <div className="gallery-intro mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p
              data-gallery-heading
              className="mb-4 text-xs font-semibold tracking-[0.2em] text-secondary"
            >
              A WORLD OF POSSIBILITIES
            </p>

            <h2
              id="gallery-title"
              data-gallery-heading
              className="text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-primary sm:text-5xl lg:text-6xl"
            >
              Places that make you
              <span className="block text-secondary">
                want to go.
              </span>
            </h2>
          </div>

          <div data-gallery-heading className="max-w-sm">
            <p className="text-sm leading-7 text-primary/65 sm:text-base sm:leading-8">
              Dream a little bigger. Find inspiration for your next
              escape, from peaceful coastlines to unforgettable
              mountain views.
            </p>

            <Link
              href="#contact"
              className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary"
            >
              Start planning your trip
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Masonry-style grid */}
        <div className="gallery-grid grid grid-flow-dense grid-cols-2 gap-3 [grid-auto-rows:78px] sm:grid-cols-3 sm:gap-4 sm:[grid-auto-rows:90px] lg:grid-cols-4 lg:[grid-auto-rows:100px]">
          {destinations.map((destination, index) => (
            <article
              key={destination.name}
              data-gallery-card
              className={`group relative isolate overflow-hidden rounded-2xl bg-primary sm:rounded-3xl ${destination.layout}`}
            >
              {/* Image */}
              <div
                role="img"
                aria-label={`${destination.name} travel inspiration`}
                className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{
                  backgroundImage: `url("${destination.image}")`,
                }}
              />

              {/* Contrast overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-linear-to-t from-primary/85 via-primary/10 to-primary/5 transition-opacity duration-300 group-hover:from-primary/90"
              />

              {/* Number label */}
              <span className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full border border-white/40 bg-black/10 text-[11px] font-medium text-white backdrop-blur-sm sm:right-5 sm:top-5">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Destination title */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6">
                <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75 sm:text-xs">
                  {destination.location}
                </p>

                <div className="flex items-end justify-between gap-2">
                  <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl lg:text-2xl">
                    {destination.name}
                  </h3>

                  <span
                    aria-hidden="true"
                    className="mb-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-white/50 text-white transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-primary sm:size-9"
                  >
                    ↗
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
