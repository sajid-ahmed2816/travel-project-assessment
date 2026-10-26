
"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const heroImage =
  "https://images.unsplash.com/photo-1572748180533-31fa348e64e7?auto=format&fit=crop&w=1800&q=85";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    };

    const timeline = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    timeline.from("[data-hero-reveal]", {
      y: 28,
      autoAlpha: 0,
      duration: 0.75,
      stagger: 0.12,
    }).from(".hero-visual", {
      autoAlpha: 0,
      scale: 0.96,
      duration: 1,
    }, "-=0.4"
    ).from(".hero-ticket", {
      y: 20,
      autoAlpha: 0,
      duration: 0.6,
      ease: "back.out(1.5)",
    },
      "-=0.3"
    );

    gsap.to(".hero-ticket", {
      y: -8,
      duration: 2.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1,
    });
  }, {
    scope: container
  });

  return (
    <section
      ref={container}
      id="home"
      className="w-full"
    >
      <div className="w-full overflow-hidden bg-surface">
        <div className="grid grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:min-h-[78svh] lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-10 lg:py-20">
          {/* Hero content */}
          <div className="relative z-10">
            <p
              data-hero-reveal
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/70 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-primary"
            >
              <span className="size-2 rounded-full bg-accent" />
              YOUR JOURNEY STARTS HERE
            </p>

            <h1
              data-hero-reveal
              className="max-w-xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-primary sm:text-6xl xl:text-7xl"
            >
              Go further.
              <br />
              <span className="text-secondary">Worry less.</span>
            </h1>

            <p
              data-hero-reveal
              className="mt-6 max-w-lg text-base leading-7 text-primary/75 sm:text-lg sm:leading-8"
            >
              From visa assistance and flight tickets to hotel
              stays and car rentals, we bring your travel
              essentials together — so you can focus on the
              experience.
            </p>

            <div
              data-hero-reveal
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                href="#services"
                className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-primary shadow-lg shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                Explore services
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="#why-us"
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-6 py-3.5 text-sm font-semibold text-primary transition-colors duration-300 hover:border-secondary hover:bg-soft-blue"
              >
                Why travel with us?
              </Link>
            </div>

            <div
              data-hero-reveal
              className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-primary/65 sm:text-sm"
            >
              <span className="size-1 rounded-full bg-accent" />
              <span>Visa assistance</span>
              <span className="size-1 rounded-full bg-accent" />
              <span>Flights</span>
              <span className="size-1 rounded-full bg-accent" />
              <span>Hotels</span>
              <span className="size-1 rounded-full bg-accent" />
              <span>Car rental</span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="hero-visual relative isolate min-h-[400px] overflow-hidden rounded-[2rem] bg-primary shadow-2xl shadow-primary/15 sm:min-h-[470px] lg:min-h-[560px]">
            <div
              role="img"
              aria-label="A beautiful coastline and turquoise ocean viewed through an airplane window"
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url("${heroImage}")`,
              }}
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-primary/75 via-primary/10 to-transparent"
            />

            <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-primary/25 px-4 py-2 text-xs font-medium tracking-wide text-white backdrop-blur-md sm:left-7 sm:top-7">
              MAKE ROOM FOR WONDER
            </div>

            {/* Floating information card */}
            <div className="hero-ticket absolute inset-x-4 bottom-4 rounded-2xl border border-white/70 bg-surface/95 p-5 shadow-2xl backdrop-blur-xl sm:inset-x-auto sm:bottom-7 sm:left-7 sm:w-[310px] sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold tracking-[0.15em] text-secondary">
                  YOUR NEXT ADVENTURE
                </p>

                <span
                  aria-hidden="true"
                  className="flex size-9 shrink-0 items-center justify-center rounded-full bg-soft-blue text-lg text-secondary"
                >
                  ↗
                </span>
              </div>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-primary">
                One trip. Less hassle.
              </h2>

              <p className="mt-2 text-sm leading-6 text-primary/70">
                Your visa, flights, accommodation and transport —
                all in one place.
              </p>

              <div className="mt-5 border-t border-dashed border-primary/20 pt-4">
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary"
                >
                  Discover what we do
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
