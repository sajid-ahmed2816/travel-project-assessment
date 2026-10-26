
"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const reasons = [
  {
    number: "01",
    title: "Your travel essentials, together",
    description:
      "Visa assistance, flights, hotels and car rentals — all your key travel needs in one place.",
  },
  {
    number: "02",
    title: "Guidance that feels personal",
    description:
      "Get help understanding your options and planning the details around your journey.",
  },
  {
    number: "03",
    title: "More time for the experience",
    description:
      "Spend less time juggling travel arrangements and more time looking forward to the trip.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    };

    // Image reveal
    gsap.fromTo(
      ".why-image",
      {
        clipPath: "inset(0 100% 0 0 round 28px)",
      },
      {
        clipPath: "inset(0 0% 0 0 round 28px)",
        duration: 1.2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".why-visual",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Heading and description
    gsap.fromTo(
      "[data-why-heading]",
      {
        y: 35,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        stagger: 0.13,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-copy",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Benefit items enter from the left
    gsap.fromTo(
      "[data-why-item]",
      {
        x: -60,
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
        duration: 0.75,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-benefits",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, {
    scope: sectionRef
  });

  return (
    <section
      ref={sectionRef}
      id="why-us"
      aria-labelledby="why-us-title"
      className="w-full overflow-hidden bg-surface px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-20"
    >
      <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* Left: Destination visual */}
        <div className="why-visual relative">
          <div
            role="img"
            aria-label="Scenic mountain lake surrounded by beautiful travel destinations"
            className="why-image relative min-h-[420px] overflow-hidden rounded-[28px] bg-primary bg-cover bg-center sm:min-h-[540px]"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=85")',
            }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-primary/75 via-transparent to-primary/10"
            />

            <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-primary/25 px-4 py-2 text-xs font-medium tracking-[0.14em] text-white backdrop-blur-md sm:left-7 sm:top-7">
              MADE FOR EXPLORERS
            </div>

            <div className="absolute bottom-7 left-6 right-6 text-white sm:bottom-10 sm:left-8 sm:right-8">
              <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-white/75">
                YOUR NEXT CHAPTER
              </p>

              <h3 className="max-w-md text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                The world feels closer when the details come together.
              </h3>
            </div>
          </div>

          {/* Floating detail card */}
          <div className="relative z-10 mx-4 -mt-6 rounded-2xl border border-primary/5 bg-background p-5 shadow-xl shadow-primary/10 sm:absolute sm:-bottom-6 sm:-right-5 sm:mx-0 sm:mt-0 sm:max-w-[245px] sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-soft-blue text-xl text-secondary">
                ✦
              </span>

              <div>
                <p className="font-semibold text-primary">
                  One helpful place
                </p>
                <p className="mt-1 text-xs leading-5 text-primary/60">
                  From planning to getting there
                </p>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute -left-5 top-16 -z-0 size-24 rounded-full border border-secondary/20"
          />
        </div>

        {/* Right: Content */}
        <div className="why-copy">
          <p
            data-why-heading
            className="mb-4 text-xs font-semibold tracking-[0.2em] text-secondary"
          >
            WHY TRAVEL WITH US?
          </p>

          <h2
            id="why-us-title"
            data-why-heading
            className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-primary sm:text-5xl xl:text-6xl"
          >
            Less planning stress.
            <span className="mt-1 block text-secondary">
              More moments worth remembering.
            </span>
          </h2>

          <p
            data-why-heading
            className="mt-6 max-w-xl text-base leading-7 text-primary/70"
          >
            Every journey has its details. We bring your essential
            travel services together, so planning your next adventure
            feels clearer from the very beginning.
          </p>

          <div className="why-benefits mt-9 border-t border-primary/10">
            {reasons.map((reason) => (
              <article
                key={reason.number}
                data-why-item
                className="flex gap-4 border-b border-primary/10 py-4 sm:gap-5"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-soft-blue text-xs font-semibold text-secondary">
                  {reason.number}
                </span>

                <div>
                  <h3 className="text-lg font-semibold text-primary sm:text-xl">
                    {reason.title}
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-primary/65 sm:text-base sm:leading-7">
                    {reason.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div data-why-heading className="mt-8">
            <Link
              href="#services"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
            >
              Explore our services
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
