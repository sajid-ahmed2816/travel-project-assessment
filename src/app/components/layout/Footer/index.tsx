
import Link from "next/link";

const exploreLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Destinations", href: "#destinations" },
  { label: "FAQs", href: "#faqs" },
];

const serviceLinks = [
  "Visa Assistance",
  "Flight Tickets",
  "Hotel Booking",
  "Car Rental",
];

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-primary text-white">
      <div className="mx-auto max-w-container px-5 pb-6 pt-14 sm:px-8 sm:pt-16 lg:px-10">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <Link
              href="#home"
              aria-label="Morroway Travel Co. - Back to home"
              className="group inline-flex items-center gap-3"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-white/10 text-2xl text-accent transition-transform duration-300 group-hover:rotate-12">
                ✳
              </span>

              <span className="flex flex-col">
                <span className="text-xl font-bold tracking-[0.08em]">
                  MORROWAY
                </span>
                <span className="mt-1 text-[10px] font-semibold tracking-[0.28em] text-white/55">
                  TRAVEL CO.
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
              From visa assistance and flights to hotels and car
              rentals, we bring your travel essentials together
              so you can focus on the journey ahead.
            </p>

            <p className="mt-5 text-xs font-semibold tracking-[0.16em] text-accent">
              EVERY JOURNEY, MADE SIMPLER.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-sm font-semibold tracking-wide">
              Explore
            </h2>

            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-white/65 transition-all duration-200 hover:translate-x-1 hover:text-accent"
                  >
                    <span
                      aria-hidden="true"
                      className="text-accent/70"
                    >
                      →
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services and CTA */}
          <div>
            <h2 className="text-sm font-semibold tracking-wide">
              Travel Essentials
            </h2>

            <ul className="mt-5 space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-sm text-white/65 transition-colors duration-200 hover:text-accent"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Plan Your Trip
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                ↗
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Morroway Travel Co. All
            rights reserved.
          </p>

          <Link
            href="#home"
            aria-label="Back to top"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/5 py-2 pl-4 pr-2 text-sm font-medium text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent self-end"
          >
            <span>Back to top</span>

            <span className="flex size-9 items-center justify-center rounded-full bg-accent text-primary transition-all duration-300 group-hover:rotate-45 group-hover:bg-white">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <path d="M12 19V5" />
                <path d="m5 12 7-7 7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
