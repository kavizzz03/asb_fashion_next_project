"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MapPin, Sparkles, ChevronRight, Compass } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import MarqueeStrip from "@/components/MarqueeStrip";
import { branches, siteInfo } from "@/lib/branches";

// Updated Collections Data (Direct links removed to prevent redirecting to empty sub-pages)
const COLLECTIONS = [
  {
    title: "Womenswear",
    subtitle: "Elegance Redefined",
    copy: "Sarees, kurtis, and contemporary fits crafted for every special moment.",
    imageDesktop: "https://asbfashion.com/4K2A0187.jpg",
    imageMobile: "https://asbfashion.com/4K2A0187.jpg",
    span: "lg:col-span-2 lg:row-span-2 min-h-[460px] lg:min-h-[620px]",
    badge: "Bestseller",
    category: "Signature Collection",
  },
  {
    title: "Menswear",
    subtitle: "Modern Craftsmanship",
    copy: "Tailored formal shirts, smart trousers, and relaxed casualwear.",
    imageDesktop: "https://asbfashion.com/img2-desk.jpg",
    imageMobile: "https://asbfashion.com/img2-desk.jpg",
    span: "min-h-[320px] lg:min-h-[300px]",
    badge: null,
    category: "Essential Wear",
  },
  {
    title: "Traditional",
    subtitle: "Heritage & Culture",
    copy: "Exquisite weaves and intricate handcraft, reimagined for modern life.",
    imageDesktop: "https://asbfashion.com/Traditional-desk.jpg",
    imageMobile: "https://asbfashion.com/traditional-hero.jpg",
    span: "min-h-[320px] lg:min-h-[300px]",
    badge: null,
    category: "Festive Exclusive",
  },
  {
    title: "Kidswear",
    subtitle: "Playful Comfort",
    copy: "Vibrant, durable, and comfortable clothing for growing families.",
    imageDesktop: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=1200&auto=format&fit=crop",
    imageMobile: "https://asbfashion.com/kids-hero.jpg",
    span: "lg:col-span-2 min-h-[320px] lg:min-h-[300px]",
    badge: "New Arrival",
    category: "Family Favorites",
  },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1] as const,
      delay: i * 0.12,
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

function CollectionsGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {COLLECTIONS.map((c, i) => (
        <motion.div
          key={c.title}
          variants={fadeInUp}
          custom={i}
          className={`group relative overflow-hidden rounded-3xl shadow-xl border border-paper/10 transition-all duration-700 hover:shadow-2xl hover:border-brass/30 ${c.span}`}
        >
          {/* Mobile Adaptive Image */}
          <Image
            src={c.imageMobile}
            alt={c.title}
            fill
            sizes="(max-width: 639px) 100vw, 50vw"
            className="object-cover md:hidden transition-transform duration-1000 ease-out group-hover:scale-108"
          />

          {/* Desktop Adaptive Image */}
          <Image
            src={c.imageDesktop}
            alt={c.title}
            fill
            sizes="(min-width: 1024px) 50vw, 50vw"
            className="hidden md:block object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
          />

          {/* Multi-layered Cinematic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 transition-opacity duration-500 group-hover:opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent opacity-80" />

          {/* Top Badges & Tags */}
          <div className="absolute top-6 left-6 right-6 z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-paper/10 backdrop-blur-md px-3.5 py-1 text-[11px] font-medium tracking-widest text-paper uppercase border border-white/15">
                {c.category}
              </span>
              {c.badge && (
                <span className="rounded-full bg-brass/90 backdrop-blur-md px-3 py-1 text-[11px] font-semibold tracking-wider text-ink shadow-lg">
                  {c.badge}
                </span>
              )}
            </div>

            {/* In-Store Availability Marker */}
            <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-paper/80 border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              In All Outlets
            </div>
          </div>

          {/* Bottom Card Content */}
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 z-10 transition-transform duration-500 transform group-hover:-translate-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-brass/90 mb-1">
              {c.subtitle}
            </p>
            <h3 className="font-display text-3xl sm:text-4xl font-semibold text-paper tracking-wide">
              {c.title}
            </h3>
            <p className="mt-3 text-sm text-paper/80 max-w-sm leading-relaxed transition-opacity duration-300 font-light">
              {c.copy}
            </p>

            {/* Store Visit Prompt instead of redirect */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <Link
                href="/branches"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-paper hover:text-brass transition-colors group/btn"
              >
                <span>Available at island branches</span>
                <ChevronRight className="w-4 h-4 text-brass transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="bg-paper text-ink overflow-x-hidden selection:bg-crimson selection:text-paper">
      <HeroSlider />
      <MarqueeStrip />

      {/* Modern Narrative Section */}
      <section className="py-24 lg:py-36 relative overflow-hidden bg-gradient-to-b from-paper via-paper/90 to-paper">
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-crimson/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Visual Container */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 group-hover:shadow-crimson/15 ring-1 ring-black/5">
              <Image
                src="https://asbfashion.com/about.jpg"
                alt="Inside an ASB Fashion flagship store"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent" />
            </div>

            {/* Established Floating Badge */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 bg-crimson text-paper px-8 py-6 rounded-2xl shadow-2xl z-10 backdrop-blur-md border border-white/10 transition-transform duration-300 hover:scale-105"
            >
              <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
                {siteInfo.founded}
              </p>
              <p className="text-xs uppercase tracking-widest text-paper/80 mt-1 font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Established
              </p>
            </motion.div>
          </motion.div>

          {/* Right Brand Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 lg:pl-6"
          >
            <p className="inline-flex items-center gap-3 text-crimson text-sm font-semibold tracking-widest uppercase">
              <span className="h-px w-8 bg-crimson" />
              Our Heritage
            </p>

            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.12] text-ink">
              Fashion that has dressed{" "}
              <span className="italic text-crimson underline decoration-crimson/30 underline-offset-8">
                three generations
              </span>
            </h2>

            <p className="mt-6 text-clay/90 text-lg leading-relaxed max-w-xl font-light">
              Since {siteInfo.founded}, ASB Fashion has been a cornerstone in Sri
              Lankan clothing retail offering quality apparel for men, women, and children with
              honest craftsmanship and fair pricing. What started as a single boutique has grown into{" "}
              <span className="font-semibold text-ink">{siteInfo.branchCount} retail destinations</span> across the island.
            </p>

            {/* Key Statistics */}
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md border-t border-ink/10 pt-8">
              {[
                { label: "Established", val: siteInfo.founded },
                { label: "Outlets", val: siteInfo.branchCount },
                { label: "Generations", val: "3" },
              ].map((stat, idx) => (
                <div key={idx} className="p-1 transition-transform duration-300 hover:-translate-y-1">
                  <p className="font-display text-3xl sm:text-4xl font-bold text-crimson">
                    {stat.val}
                  </p>
                  <p className="text-xs font-medium text-clay/70 uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-base font-semibold text-ink border-b-2 border-ink/20 pb-1.5 hover:border-crimson hover:text-crimson transition-all duration-300"
              >
                Discover our journey
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collections Preview Section */}
      <section className="py-24 lg:py-36 bg-ink text-paper relative">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brass/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16"
          >
            <div>
              <p className="inline-flex items-center gap-3 text-brass text-sm font-semibold tracking-widest uppercase">
                <span className="h-px w-8 bg-brass" />
                In-Store Product Showcase
              </p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-medium leading-[1.1] max-w-lg">
                Curated wardrobes for every moment
              </h2>
            </div>
            <p className="text-paper/60 max-w-sm text-base leading-relaxed font-light">
              Explore our four core lines, available in all island-wide outlets. Exceptional quality, crafted for Sri Lankan everyday life.
            </p>
          </motion.div>

          <CollectionsGrid />
        </div>
      </section>

      {/* Outlet Store Locator Section */}
      <section className="py-24 lg:py-36 bg-paper">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 lg:sticky lg:top-24"
            >
              <p className="inline-flex items-center gap-3 text-crimson text-sm font-semibold tracking-widest uppercase">
                <span className="h-px w-8 bg-crimson" />
                Store Network
              </p>
              <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-ink">
                {siteInfo.branchCount} outlets, close to where you are
              </h2>
              <p className="mt-6 text-clay/80 leading-relaxed text-base font-light">
                From Western to Southern, Eastern, and Sabaragamuwa provinces - experience our complete range in person at your nearest branch.
              </p>
              <Link
                href="/branches"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-crimson px-8 py-4 text-sm font-semibold text-paper shadow-xl hover:bg-crimson/90 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Find nearest outlet</span> <Compass className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Branch List Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 border-t border-ink/10">
                {branches.slice(0, 8).map((b) => (
                  <motion.div
                    key={b.name}
                    variants={fadeInUp}
                    className="group flex items-center justify-between gap-4 py-5 border-b border-ink/10 hover:border-crimson/40 transition-colors duration-200 px-3 rounded-lg hover:bg-ink/[0.02]"
                  >
                    <span className="font-display text-lg font-medium group-hover:text-crimson transition-colors flex items-center gap-2 text-ink">
                      <MapPin className="w-4 h-4 text-crimson opacity-0 group-hover:opacity-100 transition-opacity" />
                      {b.name}
                    </span>
                    <span className="text-xs font-semibold text-clay/60 uppercase tracking-wider whitespace-nowrap">
                      {b.region}
                    </span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 text-sm text-clay/60 font-medium">
                + {siteInfo.branchCount - 8} more branches located across Sri Lanka
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="pb-24 lg:pb-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl bg-crimson px-8 py-20 sm:px-16 sm:py-24 text-center shadow-2xl"
          >
            {/* Soft Radiant Glow */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, white 0, transparent 45%), radial-gradient(circle at 80% 80%, white 0, transparent 45%)",
              }}
            />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-display text-4xl sm:text-6xl font-medium text-paper leading-tight">
                Discover your style in store
              </h2>
              <p className="mt-5 text-paper/85 text-lg leading-relaxed font-light">
                Visit any ASB Fashion outlet today or get in touch with our team for personalized assistance.
              </p>
              
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={siteInfo.phoneHref}
                  className="inline-flex items-center gap-2.5 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-paper shadow-md hover:bg-ink/90 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 text-brass" /> Call now - {siteInfo.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-paper/40 px-8 py-4 text-sm font-semibold text-paper backdrop-blur-sm hover:bg-paper hover:text-crimson transition-all duration-300"
                >
                  Contact store team
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}