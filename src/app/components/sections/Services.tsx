
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ServiceIconName = "visa" | "flight" | "hotel" | "car";

const services: {
  number: string;
  title: string;
  description: string;
  icon: ServiceIconName;
}[] = [
    {
      number: "01",
      title: "Visa Assistance",
      description:
        "Navigate your visa journey with guidance through the application process and travel documentation.",
      icon: "visa",
    },
    {
      number: "02",
      title: "Flight Tickets",
      description:
        "Make planning your next flight simpler with booking assistance for your upcoming journey.",
      icon: "flight",
    },
    {
      number: "03",
      title: "Hotel Booking",
      description:
        "Find a comfortable place to stay, whether you're planning a quick getaway or a longer trip.",
      icon: "hotel",
    },
    {
      number: "04",
      title: "Car Rental",
      description:
        "Enjoy more flexibility on the road with car rental options for your travel plans.",
      icon: "car",
    },
  ];

function ServiceIcon({ name }: { name: ServiceIconName }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-7"
    >
      {name === "visa" && (
        <>
          <rect x="5" y="2.5" width="14" height="19" rx="2" />
          <path d="M9 7h6M9 11h6M10 15h4" />
        </>
      )}

      {name === "flight" && (
        <path d="m2 16 20-5-8-3-3-6-2 1 2 6-6 1-2-2-1 1 2 4Z" />
      )}

      {name === "hotel" && (
        <>
          <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16" />
          <path d="M8 7h2M14 7h2M8 11h2M14 11h2M3 21h18" />
          <path d="M9 21v-5h6v5" />
        </>
      )}

      {name === "car" && (
        <>
          <path d="m5 11 2-5h10l2 5" />
          <path d="M3 13a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5H3z" />
          <path d="M6 18v2M18 18v2M6 14h3M15 14h3" />
        </>
      )}
    </svg>
  );
}

export default function Services() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const section = container.current;
    const grid = section?.querySelector(".services-grid");
    const cards = section?.querySelectorAll<HTMLElement>("[data-service-card]");

    if (!grid || !cards?.length) return;

    gsap.fromTo(
      cards,
      {
        y: 50,
        autoAlpha: 0,
        scale: 0.92,
      },
      {
        y: 0,
        autoAlpha: 1,
        scale: 1,
        duration: 1,    // Animation ki duration
        stagger: 0.22,
        ease: "power4.out",
        scrollTrigger: {
          trigger: grid,
          start: "top 85%",
          once: false,
        },
      }
    );
  }, {
    scope: container
  });

  return (
    <section
      ref={container}
      id="services"
      aria-labelledby="services-title"
      className="w-full bg-background px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-container">
        {/* Section heading */}
        <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-secondary">
              TRAVEL, SIMPLIFIED
            </p>

            <h2
              id="services-title"
              className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-primary sm:text-5xl lg:text-6xl"
            >
              Everything you need.
              <br />
              <span className="text-secondary">
                One journey at a time.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-accent sm:text-base">
            From your first travel document to the final destination,
            get the essentials you need to plan with confidence.
          </p>
        </div>

        {/* Service cards */}
        <div className="services-grid grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.number}
              data-service-card
              className="group relative flex min-h-[310px] flex-col overflow-hidden rounded-3xl border border-primary/10 bg-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-secondary/40 hover:shadow-xl hover:shadow-primary/5 sm:p-7"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-soft-blue text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                  <ServiceIcon name={service.icon} />
                </span>

                <span className="text-sm font-medium tracking-wider text-primary/35">
                  /{service.number}
                </span>
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-primary sm:text-2xl">
                {service.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-secondary">
                {service.description}
              </p>

              <Link
                href="#contact"
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors duration-300 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
              >
                Get assistance
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-300 group-hover:w-full"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
