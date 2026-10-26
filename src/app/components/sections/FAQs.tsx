
"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const faqs = [
  {
    question: "What travel services do you offer?",
    answer:
      "We assist with visa applications, flight tickets, hotel bookings and car rentals. You can ask about one service or plan several parts of your journey together.",
  },
  {
    question: "Can you guarantee that my visa will be approved?",
    answer:
      "No. Visa decisions are made by the relevant embassy or immigration authority. We can help you understand the process and prepare your documentation, but approval cannot be guaranteed.",
  },
  {
    question: "Can I arrange flights and hotels together?",
    answer:
      "Yes. You can enquire about flight and hotel booking assistance together. Available options and final prices depend on your dates, destination and booking requirements.",
  },
  {
    question: "What information should I share to get started?",
    answer:
      "Start with your destination, approximate travel dates, number of travellers and the service you need. Visa requirements may also depend on your nationality and travel documents.",
  },
  {
    question: "Is car rental available at every destination?",
    answer:
      "Car rental availability depends on the destination, dates and local providers. Share your travel details so the available options can be checked.",
  },
];

export default function FAQs() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    };

    gsap.fromTo(
      "[data-faq-intro]",
      {
        y: 30,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".faq-intro",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      "[data-faq-item]",
      {
        y: 25,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.65,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".faq-list",
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
      id="faqs"
      aria-labelledby="faq-title"
      className="w-full bg-background px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-20"
    >
      <div className="mx-auto grid max-w-container grid-cols-1 items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Left: Section introduction */}
        <div className="faq-intro lg:sticky lg:top-24">
          <p
            data-faq-intro
            className="mb-4 text-xs font-semibold tracking-[0.2em] text-secondary"
          >
            GOOD TO KNOW
          </p>

          <h2
            id="faq-title"
            data-faq-intro
            className="max-w-lg text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-primary sm:text-5xl lg:text-6xl"
          >
            Questions?
            <span className="mt-1 block text-secondary">
              Let's clear things up.
            </span>
          </h2>

          <p
            data-faq-intro
            className="mt-5 max-w-md text-sm leading-7 text-accent sm:text-base sm:leading-8"
          >
            A little clarity goes a long way. Find answers to common
            travel questions below, or get in touch about your plans.
          </p>

          <div
            data-faq-intro
            className="mt-8 rounded-2xl bg-primary p-6 text-white sm:p-7"
          >
            <span className="text-xs font-semibold tracking-[0.16em] text-accent">
              STILL HAVE QUESTIONS?
            </span>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              Let's talk travel.
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/70">
              Tell us what you need help with and start planning
              your next journey.
            </p>

            <Link
              href="#contact"
              className="group mt-5 inline-flex items-center gap-3 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Get assistance
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Right: FAQ accordion */}
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              data-faq-item
              className="group border-b border-primary/15 first:border-t"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-left marker:content-none sm:py-7 [&::-webkit-details-marker]:hidden">
                <span className="flex items-start gap-4">
                  <span className="mt-1 text-xs font-semibold tracking-wide text-secondary">
                    0{index + 1}
                  </span>

                  <span className="text-base font-semibold leading-6 text-primary transition-colors duration-300 group-hover:text-secondary sm:text-lg sm:leading-7">
                    {faq.question}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className="flex size-9 shrink-0 items-center justify-center rounded-full border border-primary/15 text-xl text-primary transition-all duration-300 group-open:rotate-45 group-open:border-secondary group-open:bg-secondary group-open:text-white"
                >
                  +
                </span>
              </summary>

              <div className="pb-6 pl-9 pr-2 sm:pb-7 sm:pl-12">
                <p className="max-w-2xl text-sm leading-7 text-accent sm:text-base sm:leading-8">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
