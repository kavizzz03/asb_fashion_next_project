import Image from "next/image";
import type { Metadata } from "next";
import BranchDirectory from "@/components/BranchDirectory";
import { siteInfo } from "@/lib/branches";

export const metadata: Metadata = {
  title: "Our Branches | ASB Fashion",
  description:
    "Explore 16+ ASB Fashion, ASB Glamour, and Glamour Gate store locations across Sri Lanka's Western, Southern, Central, and Sabaragamuwa provinces.",
};

export default function BranchesPage() {
  return (
    <main className="bg-paper text-ink selection:bg-crimson selection:text-paper overflow-x-hidden">
      {/* HERO SECTION WITH GLASSMORPHISM OVERLAYS */}
      <section className="relative pt-28 pb-32 lg:pt-36 lg:pb-40 bg-ink text-paper overflow-hidden">
        {/* Dynamic Background Image with Gradient Mask */}
        <div className="absolute inset-0 opacity-30 scale-105 transition-transform duration-1000 ease-out hover:scale-100">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80"
            alt="ASB Store Showcase"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-transparent to-ink/60" />

        {/* Decorative Glowing Accent Blobs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-crimson/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-brass/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading & Subtitle */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-paper/10 backdrop-blur-md border border-paper/15 text-brass text-xs font-semibold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Store Locator & Directory
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.02] tracking-tight">
                {siteInfo.branchCount || "16+"} Stores, <br />
                <span className="italic font-normal text-brass">Always Near You.</span>
              </h1>

              <p className="max-w-xl text-paper/75 leading-relaxed text-base sm:text-lg">
                Discover your nearest ASB Fashion, ASB Glamour, or Glamour Gate destination across Sri Lanka with real time hours, contact details, and instant directions.
              </p>

              {/* Quick Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#directory"
                  className="inline-flex items-center gap-2 bg-crimson hover:bg-crimson/90 text-paper font-medium text-sm px-6 py-3.5 rounded-full shadow-lg shadow-crimson/25 transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  Browse Store List
                </a>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-paper/10 hover:bg-paper/20 backdrop-blur-md text-paper border border-paper/20 font-medium text-sm px-6 py-3.5 rounded-full transition-all duration-200"
                >
                  Open in Maps ↗
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Card Callout */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative p-8 rounded-2xl bg-paper/10 backdrop-blur-xl border border-paper/20 shadow-2xl space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-brass font-semibold">
                    Flagship Destination
                  </span>
                  <span className="bg-brass/20 text-brass text-[10px] uppercase font-bold px-2.5 py-1 rounded-full">
                    Premium Store
                  </span>
                </div>

                <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-paper/10">
                  <Image
                    src="https://asbfashion.com/gg.jpg"
                    alt="Glamour Gate Flagship"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-display text-xl font-medium text-paper">
                    Glamour Gate - Negambo
                  </h3>
                  <p className="text-xs text-paper/70 mt-1">
                    Luxury fashion collections & VIP styling services.
                  </p>
                </div>

                <div className="pt-4 border-t border-paper/10 flex justify-between items-center text-xs text-paper/80">
                  <span>Open Daily: 9:00 AM - 8:30 PM</span>
                  <span className="text-emerald-400 font-medium">● Open Now</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK STATS & PROVINCE HIGHLIGHT BAR */}
      <section className="bg-paper-dim border-y border-ink/5 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-paper border border-ink/5 shadow-sm">
              <span className="block font-display text-3xl font-semibold text-crimson">16+</span>
              <span className="text-xs text-clay/70 font-medium uppercase tracking-wider mt-1 block">Retail Stores</span>
            </div>
            <div className="p-4 rounded-xl bg-paper border border-ink/5 shadow-sm">
              <span className="block font-display text-3xl font-semibold text-ink">6</span>
              <span className="text-xs text-clay/70 font-medium uppercase tracking-wider mt-1 block">Provinces Covered</span>
            </div>
            <div className="p-4 rounded-xl bg-paper border border-ink/5 shadow-sm">
              <span className="block font-display text-3xl font-semibold text-brass">3</span>
              <span className="text-xs text-clay/70 font-medium uppercase tracking-wider mt-1 block">Brand Concepts</span>
            </div>
            <div className="p-4 rounded-xl bg-paper border border-ink/5 shadow-sm">
              <span className="block font-display text-3xl font-semibold text-emerald-600">35+</span>
              <span className="text-xs text-clay/70 font-medium uppercase tracking-wider mt-1 block">Years of Trust</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN BRANCH DIRECTORY COMPONENT */}
      <section id="directory" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-12">
            <p className="flex items-center gap-3 text-crimson text-sm font-medium uppercase tracking-wider">
              <span className="h-px w-8 bg-crimson" />
              Store Directory
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium text-ink">
              Find Your Preferred Store Location
            </h2>
            <p className="mt-2 text-clay/80 text-sm max-w-xl">
              Filter by region or search directly by city name to access telephone contacts, operating hours, and location links.
            </p>
          </div>

          <BranchDirectory />
        </div>
      </section>

      {/* ONLINE SUPPORT & CUSTOMER CARE BANNER */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative rounded-2xl bg-ink text-paper p-8 sm:p-12 overflow-hidden shadow-2xl">
            {/* Background Graphic */}
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-crimson/20 rounded-full blur-3xl" />
            
            <div className="relative grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <span className="inline-block bg-brass/20 text-brass text-xs font-semibold uppercase px-3 py-1 rounded-full">
                  Customer Assistance
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-medium">
                  Can't find a store near your location?
                </h3>
                <p className="text-paper/70 text-sm max-w-xl leading-relaxed">
                  Our online team is ready to deliver your favorite apparel directly to your doorstep with islandwide shipping and hassle free exchanges.
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3">
                <a
                  href={`tel:${siteInfo.phone || "0342240838"}`}
                  className="inline-flex items-center justify-center gap-2 bg-paper text-ink font-medium text-sm px-6 py-3.5 rounded-full hover:bg-paper/90 transition-colors shadow-md"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  Call Support Center
                </a>
                <a
                  href="https://wa.me/94719057057"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-paper font-medium text-sm px-6 py-3.5 rounded-full transition-colors shadow-md"
                >
                  WhatsApp Assistance
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}