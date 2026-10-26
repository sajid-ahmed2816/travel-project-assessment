
"use client";

import { useState } from "react";
import Link from "next/link";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Destinations", href: "#destinations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/80 backdrop-blur-2xl px-5 py-2.5 sm:px-8 sm:py-4 lg:px-10 lg:py-5">
      <div className="mx-auto flex max-w-container items-center justify-between gap-4">
        {/* Brand */}
        <Link
          href="#home"
          onClick={closeMenu}
          aria-label="Morroway Travel Co. — Home"
          className="group flex shrink-0 items-center gap-3"
        >
          <span className="flex size-10 items-center justify-center rounded-full bg-primary text-xl text-accent transition-transform duration-300 group-hover:rotate-12">
            ✳
          </span>

          <span className="flex flex-col">
            <span className="text-lg font-bold leading-tight tracking-[0.08em] text-primary sm:text-xl">
              MORROWAY
            </span>
            <span className="mt-1 text-[9px] font-semibold tracking-[0.28em] text-secondary sm:text-[10px]">
              TRAVEL CO.
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-8">
            {navLinks.map((nav) => (
              <li key={nav.href}>
                <Link
                  href={nav.href}
                  className="relative py-2 text-sm font-medium text-primary/70 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:text-primary hover:after:w-full"
                >
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-secondary md:inline-flex"
        >
          Plan your trip
          <span aria-hidden="true">↗</span>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex size-11 items-center justify-center rounded-full border border-primary/15 text-primary transition-colors hover:bg-soft-blue sm:hidden "
        >
          <span aria-hidden="true" className="text-xl">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>

        {/* Tablet menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="hidden size-11 items-center justify-center rounded-full border border-primary/15 text-primary transition-colors hover:bg-soft-blue sm:max-md:flex"
        >
          <span aria-hidden="true" className="text-xl">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile and tablet navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-primary/10 bg-background px-5 pb-6 pt-3 sm:px-8 lg:hidden"
        >
          <ul className="mx-auto flex max-w-container flex-col">
            {navLinks.map((nav) => (
              <li key={nav.href} className="border-b border-primary/10">
                <Link
                  href={nav.href}
                  onClick={closeMenu}
                  className="block py-4 text-sm font-medium text-primary transition-colors hover:text-secondary"
                >
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            onClick={closeMenu}
            className="mx-auto mt-5 flex min-h-12 max-w-[var(--container)] items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Plan your trip
            <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      )}
    </header>
  );
}
