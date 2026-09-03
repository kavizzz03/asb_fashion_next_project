"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Slide = {
  imageDesktop: string;
  imageMobile: string;
  eyebrow: string;
  heading: string;
  headingAccent: string;
  copy: string;
  cta: { label: string; href: string };
};

const SLIDES: Slide[] = [
  {
    imageDesktop: "https://asbfashion.com/hero-1.jpg",
    imageMobile: "https://asbfashion.com/4K2A0187.jpg",
    eyebrow: "Since 1989",
    heading: "Fashion,",
    headingAccent: "beyond tradition",
    copy: "Thirty-six years of dressing Sri Lanka from our first store to sixteen, one considered collection at a time.",
    cta: { label: "Find a store", href: "/branches" },
  },
  {
    imageDesktop: "https://asbfashion.com/hero-2.jpg",
    imageMobile: "https://asbfashion.com/hero3-desk.jpg",
    eyebrow: "This season",
    heading: "For every",
    headingAccent: "style story",
    copy: "Traditional sarees, tailored formalwear, and everyday essentials curated for the modern Sri Lankan lifestyle.",
    cta: { label: "Our story", href: "/about" },
  },
  {
    imageDesktop: "https://asbfashion.com/hero4-desk.jpg",
    imageMobile: "https://asbfashion.com/hero4.jpg",
    eyebrow: "Heritage",
    heading: "Rooted in",
    headingAccent: "Sri Lanka",
    copy: "Proudly local, thoughtfully made. ASB Fashion brings island craftsmanship together with contemporary silhouettes.",
    cta: { label: "About ASB", href: "/about" },
  },
  {
    imageDesktop: "https://asbfashion.com/hero5-desk.jpg",
    imageMobile: "https://asbfashion.com/hero5.jpg",
    eyebrow: "New arrivals",
    heading: "Your next",
    headingAccent: "look awaits",
    copy: "Fresh fabrics and refined fits available across all sixteen islandwide branches this week.",
    cta: { label: "Visit us", href: "/branches" },
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 7000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  function goTo(i: number) {
    setIndex(i);
    startTimer();
  }

  function handleNext() {
    setIndex((prev) => (prev + 1) % SLIDES.length);
    startTimer();
  }

  function handlePrev() {
    setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    startTimer();
  }

  return (
    <section className="relative h-[88vh] min-h-[620px] max-h-[900px] w-full overflow-hidden bg-ink select-none">
      {/* Background & Slide Imagery */}
      {SLIDES.map((slide, i) => {
        const isActive = i === index;
        return (
          <div
            key={`${slide.heading}-${i}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
            aria-hidden={!isActive}
          >
            <div
              className={`relative h-full w-full transition-transform duration-[8000ms] ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
            >
              {/* Mobile Image */}
              <Image
                src={slide.imageMobile}
                alt={slide.heading}
                fill
                priority={i === 0}
                quality={90}
                sizes="(max-width: 767px) 100vw"
                className="object-cover object-center md:hidden"
              />

              {/* Desktop Image */}
              <Image
                src={slide.imageDesktop}
                alt={slide.heading}
                fill
                priority={i === 0}
                quality={90}
                sizes="(min-width: 768px) 100vw"
                className="hidden md:block object-cover object-top lg:object-right-top"
              />
            </div>

            {/* Gradients for readability */}
            {/* Mobile / Tablet vertical overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent lg:hidden" />
            {/* Desktop horizontal split gradient */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-ink via-ink/80 via-50% to-transparent" />
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-black/20" />
          </div>
        );
      })}

      {/* Decorative Brand Watermark */}
      <div className="hidden xl:flex absolute right-12 top-0 bottom-0 z-20 items-center pointer-events-none">
        <span className="[writing-mode:vertical-rl] text-paper/20 text-[11px] uppercase tracking-[0.4em] font-medium">
          ASB Fashion &middot; Islandwide Heritage &middot; Est. 1989
        </span>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 h-full mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 flex items-end pb-28 lg:pb-0 lg:items-center">
        <div className="max-w-xl lg:max-w-2xl">
          {SLIDES.map((slide, i) => {
            const isActive = i === index;
            return (
              <div
                key={`${slide.eyebrow}-${i}`}
                className={`transition-all duration-700 transform ${
                  isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6 absolute inset-0 pointer-events-none"
                }`}
                aria-hidden={!isActive}
              >
                {/* Eyebrow badge */}
                <p className="inline-flex items-center gap-3 text-brass text-xs sm:text-sm font-semibold tracking-wider uppercase">
                  <span className="h-px w-8 bg-brass" />
                  {slide.eyebrow}
                </p>

                {/* Main Heading */}
                <h1 className="mt-4 font-display text-4xl sm:text-6xl lg:text-7xl font-medium text-paper leading-[1.05] tracking-tight">
                  {slide.heading}{" "}
                  <span className="block sm:inline italic text-crimson-bright font-normal">
                    {slide.headingAccent}
                  </span>
                </h1>

                {/* Subtitle / Copy */}
                <p className="mt-5 text-paper/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg font-light">
                  {slide.copy}
                </p>

                {/* Action Buttons */}
                <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    href={slide.cta.href}
                    className="group inline-flex items-center gap-3 rounded-full bg-crimson px-8 py-4 text-xs sm:text-sm font-semibold text-paper shadow-lg hover:bg-crimson-bright hover:shadow-crimson/30 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <span>{slide.cta.label}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Link>

                  <a
                    href="tel:+94719057057"
                    className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-7 py-4 text-xs sm:text-sm font-medium text-paper backdrop-blur-sm hover:bg-paper/10 hover:border-paper/60 transition-all duration-300"
                  >
                    Call store
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls & Progress */}
      <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 z-30 flex items-center justify-between">
        {/* Slide Counter & Indicators */}
        <div className="flex items-center gap-6">
          <span className="font-mono text-xs sm:text-sm text-paper/60 tracking-widest">
            0{index + 1} <span className="text-paper/30">/</span> 0{SLIDES.length}
          </span>

          <div className="flex items-center gap-2 sm:gap-3">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="group relative py-3 focus:outline-none"
              >
                <div
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === index
                      ? "w-8 sm:w-12 bg-crimson-bright"
                      : "w-3 sm:w-4 bg-paper/30 group-hover:bg-paper/60"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Prev / Next Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 bg-ink/40 text-paper backdrop-blur-md transition-all duration-300 hover:border-paper/60 hover:bg-paper/20"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 bg-ink/40 text-paper backdrop-blur-md transition-all duration-300 hover:border-paper/60 hover:bg-paper/20"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}