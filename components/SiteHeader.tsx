"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteInfo } from "@/lib/branches";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/branches", label: "Our Branches" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle subtle header elevation/blur adjustment on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full font-sans transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className="bg-ink text-paper/80 text-[11px] sm:text-xs tracking-wider border-b border-paper/10 transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 flex items-center justify-between h-9">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="font-light tracking-widest uppercase">
              Est. {siteInfo.founded} <span className="text-paper/40">|</span> {siteInfo.branchCount} Branches Island-Wide
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-paper/70 font-light">
            <a
              href={siteInfo.phoneHref}
              className="hover:text-brass transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {siteInfo.phone}
            </a>
            <a
              href={`mailto:${siteInfo.email}`}
              className="hover:text-brass transition-colors hidden md:flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {siteInfo.email}
            </a>
            <a
              href={siteInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brass transition-colors flex items-center gap-1"
            >
              Facebook
              <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 border-b ${
          scrolled
            ? "bg-paper/85 backdrop-blur-md shadow-lg shadow-black/5 border-ink/10 h-16 sm:h-20"
            : "bg-paper/95 backdrop-blur-sm border-ink/5 h-20 sm:h-24"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-full flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4 group focus:outline-none">
            <div className="relative h-11 w-11 sm:h-13 sm:w-13 rounded-full overflow-hidden bg-ink/5 p-1 ring-1 ring-ink/10 group-hover:ring-crimson/50 transition-all duration-300">
              <Image
                src="https://asbfashion.com/logo.png"
                alt="ASB Fashion Logo"
                fill
                priority
                sizes="52px"
                className="object-contain p-0.5 transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-display text-lg sm:text-2xl font-bold tracking-tight text-ink group-hover:text-crimson transition-colors duration-300 leading-tight">
                ASB <span className="font-light italic text-crimson">Fashion</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-widest text-clay opacity-90">
                {siteInfo.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 text-xs lg:text-sm font-medium uppercase tracking-widest transition-colors duration-200 ${
                    active ? "text-crimson font-semibold" : "text-ink/70 hover:text-ink"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-crimson shadow-sm shadow-crimson/50" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/branches"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-crimson px-5 py-2.5 text-xs lg:text-sm font-medium tracking-wide text-paper shadow-sm hover:bg-crimson-bright hover:shadow-md hover:shadow-crimson/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Find a Store
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 hover:bg-ink/10 text-ink transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={open}
            >
              {open ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Drawer */}
        {open && (
          <div className="md:hidden absolute top-full left-0 w-full bg-paper/98 backdrop-blur-xl border-b border-ink/10 shadow-2xl transition-all animate-in slide-in-from-top-2 duration-200">
            <nav className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl text-sm font-medium tracking-wide transition-all ${
                      active
                        ? "bg-crimson/10 text-crimson font-semibold"
                        : "text-ink/80 hover:bg-ink/5 hover:text-ink"
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && <span className="h-1.5 w-1.5 rounded-full bg-crimson" />}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-ink/10 flex flex-col gap-3">
                <Link
                  href="/branches"
                  className="flex items-center justify-center gap-2 rounded-xl bg-crimson py-3 text-sm font-medium text-paper shadow-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Find a Store
                </Link>

                <a
                  href={siteInfo.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-xl border border-ink/15 py-3 text-sm font-medium text-ink hover:bg-ink/5"
                >
                  <svg className="w-4 h-4 text-crimson" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Store ({siteInfo.phone})
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}