
"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function PlanTripBanner() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    };

    // Reveal the banner content when it enters the viewport
    gsap.fromTo(
      "[data-cta-reveal]",
      {
        y: 45,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.9,
        stagger: 0.16,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta-panel",
          start: "top 75%",
          once: true,
        },
      }
    );

    // Subtle background parallax while scrolling
    gsap.fromTo(
      ".cta-background",
      {
        scale: 1.2,
        yPercent: -4,
      },
      {
        scale: 1.08,
        yPercent: 4,
        ease: "none",
        scrollTrigger: {
          trigger: ".cta-panel",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  }, {
    scope: sectionRef
  });

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-labelledby="cta-title"
      className="w-full bg-background px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-20"
    >
      <div className="cta-panel relative isolate mx-auto flex min-h-[480px] max-w-container items-center overflow-hidden rounded-[2rem] bg-primary sm:min-h-[520px] lg:min-h-[580px]">
        {/* Background destination image */}
        <div
          aria-hidden="true"
          className="cta-background absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1721160087219-7f3256e67d9c?auto=format&fit=crop&w=2200&q=85")',
          }}
        />

        {/* Dark overlay for readable text */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-r from-primary/95 via-primary/75 to-primary/20"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-t from-primary/45 via-transparent to-transparent"
        />

        {/* Decorative corner label */}
        <div className="absolute right-5 top-5 hidden rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium tracking-[0.15em] text-white backdrop-blur-md sm:block lg:right-8 lg:top-8">
          YOUR NEXT CHAPTER AWAITS
        </div>

        {/* Content */}
        <div className="w-full max-w-3xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <p
            data-cta-reveal
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white backdrop-blur-md"
          >
            <span className="size-2 rounded-full bg-accent" />
            LET'S MAKE IT HAPPEN
          </p>

          <h2
            id="cta-title"
            data-cta-reveal
            className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            The world is waiting.
            <span className="mt-2 block text-accent">
              Where to next?
            </span>
          </h2>

          <p
            data-cta-reveal
            className="mt-6 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8"
          >
            Tell us where your curiosity takes you. From travel
            documents to the journey itself, let's make your next
            adventure easier to plan.
          </p>

          <div
            data-cta-reveal
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Link
              href="#services"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Explore our services
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                ↗
              </span>
            </Link>

            <Link
              href="#why-us"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Why travel with us?
            </Link>
          </div>

          <div
            data-cta-reveal
            className="mt-10 flex items-center gap-3 text-xs font-medium tracking-wide text-white/70 sm:text-sm"
          >
            <span aria-hidden="true" className="text-accent">
              ✳
            </span>
            VISA · FLIGHTS · STAYS · CAR RENTALS
          </div>
        </div>

        {/* Decorative circular element */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-20 -z-0 hidden size-72 rounded-full border border-white/15 lg:block"
        >
          <div className="absolute inset-8 rounded-full border border-white/15" />
          <div className="absolute inset-16 rounded-full border border-white/15" />
        </div>
      </div>
    </section>
  );
};
