"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteInfo } from "@/lib/branches";

// Inline SVG Icon Wrappers
const IconBag = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M16 6V4a4 4 0 00-8 0v2H4v16h16V6h-4zm-6-2a2 2 0 014 0v2h-4V4zm8 16H6V8h2v2h2V8h4v2h2V8h2v12z" />
  </svg>
);

const IconCrown = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
  </svg>
);

const IconJewel = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M12 2L2 9l10 13L22 9 12 2zm0 3.8L18.4 9 12 17.3 5.6 9 12 5.8z" />
  </svg>
);

const IconHeart = () => (
  <svg className="w-5 h-5 fill-current text-crimson" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const GROUP_COMPANIES = [
  {
    id: 1,
    name: "ASB Fashion",
    icon: IconBag,
    description: "The flagship brand offering quality fashion for the entire family at affordable prices since 1989.",
    founded: "1989",
    stores: "9+ Branches",
    accent: "border-crimson/30 hover:border-crimson",
  },
  {
    id: 2,
    name: "ASB Glamour",
    icon: IconCrown,
    description: "Premium women's fashion brand featuring exclusive designer collections and contemporary styles.",
    founded: "2018",
    stores: "5 Branches",
    accent: "border-brass/30 hover:border-brass",
  },
  {
    id: 3,
    name: "Glamour Gate",
    icon: IconJewel,
    description: "Ultra premium luxury fashion destination with international designer collections and VIP services.",
    founded: "2025",
    stores: "2 Branches",
    accent: "border-amber-500/30 hover:border-amber-500",
  },
];

const MILESTONES = [
  { year: "1989", event: "ASB Fashion Established" },
  { year: "1994", event: "Metal Roof Shop Opened" },
  { year: "1995", event: "Dress Line - Ambalangoda" },
  { year: "1996", event: "ASB Tangalle Branch" },
  { year: "2000", event: "ASB Nuwaraeliya & Balangoda" },
  { year: "2001", event: "ASB Anuradhapura & Panadura" },
  { year: "2002", event: "ASB Matara Branch" },
  { year: "2007", event: "ASB Galle Branch" },
  { year: "2014", event: "ASB Aluthgama Branch" },
  { year: "2016", event: "ASB Mathugama Branch" },
  { year: "2018", event: "ASB Glamour Launched", highlight: true },
  { year: "2024", event: "Digital Transformation & E-commerce Launch" },
  { year: "2025", event: "Glamour Gate - Premium Fashion Destination" },
  { year: "2026", event: "ASB Glamour Matugama Opened (August 6)", highlight: true },
];

const LATEST_BRANCH = {
  name: "ASB Glamour Matugama",
  location: "Matugama",
  address: "Agalawatta - Matugama Rd, Matugama 12100",
  phone: "0342240838",
  manager: "Mr. Yasiru Chameera",
  hours: "9:00 AM - 8:30 PM",
  openedDate: "August 6, 2026",
  description: "Newest ASB Glamour branch bringing modern, trend setting women's and family fashion directly to Matugama.",
  features: ["Glamour Collections", "Dedicated Support Staff", "Modern Showroom", "Convenient Location"],
  image: "https://asbfashion.com/ag1.jpg",
};

const MANAGEMENT_TEAM = [
  {
    name: "Mr. A. Jayasiri De Silva",
    position: "Founder & Former Chairman",
    experience: "Over 35 years of excellence in textile retail",
    description: "Founded ASB Fashion in 1989 with a vision to provide quality fashion at affordable prices.",
  },
  {
    name: "Mrs. P.A.K.D. Jeewanthi",
    position: "Chairperson",
    experience: "20+ years in retail leadership and business development",
    description: "Leading ASB Fashion towards innovation and growth while maintaining core values.",
  },
  {
    name: "Mr. A.A. De Silva",
    position: "Director - Operations",
    experience: "",
    description: "Oversees branch operations and ensures seamless customer experience across all locations.",
  },
  {
    name: "Mr. A.S.B. De Silva",
    position: "Director - Business Development",
    experience: "",
    description: "Drives expansion strategy, including the new ASB Glamour branch in Matugama.",
  },
];

const FALLBACK_CSR_ACTIVITIES = [
  {
    id: 1,
    title: "Cyclone Relief Mission - Standing with Our People",
    date: "December 17, 2025",
    location: "Near Anuradhapura",
    description: "With the spirit of ASB Fashion brotherhood, our team traveled over 36km beyond Anuradhapura to reach rural families severely impacted by the recent cyclone, providing emergency aid, support, and hope.",
    stats: "36km+ Rural Outreach",
    images: ["https://asbfashion.com/csr4.jpg"],
  },
  {
    id: 2,
    title: "78th Independence Day Community Clean Up Campaign",
    date: "February 4, 2026",
    location: "Aluthgama Town Area",
    description: "Under the guidance of the Chairperson, Glamour Gate Aluthgama and ASB Fashion teams carried out a dedicated town clean up campaign in collaboration with local administration and environmental police units.",
    stats: "Community Partnership",
    images: ["https://asbfashion.com/csr3.jpg"],
  },
  {
    id: 3,
    title: "Maternity Care Packs Donation Program",
    date: "April 28, 2026",
    location: "Waskaduwa",
    description: "In memory of the 10th anniversary of the late Mr. Jayasiri De Silva, founder of ASB Group, Chairperson Mrs. Jivanthi Peduruarachchi presented essential maternity care packs to nearly 250 expectant mothers at Sri Subhoothi Viharaya.",
    stats: "250 Mothers Supported",
    images: ["https://asbfashion.com/csr2.jpg"],
  },
  {
    id: 4,
    title: "Free Eye Care & Spectacles Distribution Camp",
    date: "Recent Event",
    location: "Ampara",
    description: "In commemoration of late founder Mr. A. Jayasiri De Silva's 59th birth anniversary, ASB Group conducted free vision checkups, blood sugar screenings, and distributed 500 free eyeglasses at Green Park, Ampara.",
    stats: "500 Free Eyeglasses",
    images: ["https://asbfashion.com/eye.jpg"],
  },
];

export default function AboutPage() {
  const [projects, setProjects] = useState(FALLBACK_CSR_ACTIVITIES);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCSRProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://whats.asbfashion.com/api/get_csr_projects.php");
        const data = await res.json();
        if (data && data.success && data.projects && data.projects.length > 0) {
          setProjects(data.projects);
        }
      } catch (error) {
        console.warn("CSR API unavailable, rendering default dataset.");
      } finally {
        setLoading(false);
      }
    };

    fetchCSRProjects();
  }, []);

  return (
    <main className="bg-paper text-ink selection:bg-crimson selection:text-paper">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-28 lg:pt-32 lg:pb-36 bg-ink text-paper overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=2000&q=80"
            alt="ASB Fashion Heritage"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/30" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <p className="flex items-center gap-3 text-brass text-sm font-medium tracking-wide uppercase">
            <span className="h-px w-8 bg-brass" />
            The ASB Group Story
          </p>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.05] max-w-3xl">
            Beyond tradition, since {siteInfo.founded}
          </h1>
          <p className="mt-6 max-w-xl text-paper/70 leading-relaxed text-lg">
            From a single local storefront to an island wide retail ecosystem.
            Built on fabric durability, honest pricing, and personal service.
          </p>
        </div>
      </section>

      {/* BRAND PORTFOLIO */}
      <section className="py-20 lg:py-28 bg-paper-dim border-b border-ink/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="flex items-center gap-3 text-crimson text-sm font-medium uppercase tracking-wider">
                <span className="h-px w-8 bg-crimson" />
                Portfolio
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium">
                Our Brand Family
              </h2>
            </div>
            <p className="text-clay/70 text-sm max-w-md mt-4 md:mt-0">
              Serving every segment of Sri Lankan retail from daily family fashion to luxury apparel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {GROUP_COMPANIES.map((company) => {
              const IconComp = company.icon;
              return (
                <div
                  key={company.id}
                  className={`relative p-8 rounded-sm bg-paper border transition-all duration-300 hover:shadow-xl ${company.accent}`}
                >
                  <div className="w-12 h-12 rounded-full bg-paper-dim flex items-center justify-center text-ink mb-6">
                    <IconComp />
                  </div>
                  <h3 className="font-display text-2xl font-medium text-ink">
                    {company.name}
                  </h3>
                  <div className="flex items-center gap-4 mt-2 text-xs font-semibold uppercase tracking-wider text-crimson">
                    <span>Est. {company.founded}</span>
                    <span>•</span>
                    <span>{company.stores}</span>
                  </div>
                  <p className="mt-4 text-sm text-clay/80 leading-relaxed">
                    {company.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FLAGSHIP SHOWCASE: NEW MATHUGAMA ASB GLAMOUR OPENING */}
      <section className="py-24 bg-ink text-paper relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
            <Image
              src={LATEST_BRANCH.image}
              alt={LATEST_BRANCH.name}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-brass text-ink font-semibold text-xs uppercase px-3 py-1.5 rounded-full">
              New Opening - {LATEST_BRANCH.openedDate}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <p className="text-brass text-sm font-medium uppercase tracking-wider flex items-center gap-2">
              Newest Branch Opening
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-medium leading-tight">
              {LATEST_BRANCH.name}
            </h2>
            <p className="text-paper/70 leading-relaxed">
              {LATEST_BRANCH.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-paper/10 text-sm">
              <div className="text-paper/80">
                <strong className="block text-paper">Address:</strong>
                <span>{LATEST_BRANCH.address}</span>
              </div>
              <div className="text-paper/80">
                <strong className="block text-paper">Phone:</strong>
                <span>{LATEST_BRANCH.phone}</span>
              </div>
              <div className="text-paper/80">
                <strong className="block text-paper">Opening Hours:</strong>
                <span>{LATEST_BRANCH.hours}</span>
              </div>
              <div className="text-paper/80">
                <strong className="block text-paper">Branch Manager:</strong>
                <span>{LATEST_BRANCH.manager}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {LATEST_BRANCH.features.map((feat, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center text-xs bg-paper/10 text-paper px-3 py-1.5 rounded-full"
                >
                  ✓ {feat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONE TIMELINE */}
      <section className="py-24 lg:py-32 bg-paper-dim">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="flex items-center gap-3 text-crimson text-sm font-medium italic">
            <span className="h-px w-8 bg-crimson" />
            Milestones
          </p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-medium">
            35+ Years of Evolution
          </h2>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MILESTONES.map((m, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-sm bg-paper border ${
                  m.highlight
                    ? "border-crimson shadow-md bg-gradient-to-b from-paper to-crimson/5"
                    : "border-ink/10"
                }`}
              >
                <span className="font-display text-2xl font-semibold text-crimson block mb-2">
                  {m.year}
                </span>
                <p className="font-medium text-ink text-base">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24 lg:py-32 bg-paper">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-xl mb-16">
            <p className="flex items-center gap-3 text-crimson text-sm font-medium italic">
              <span className="h-px w-8 bg-crimson" />
              Leadership
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium">
              Guided by Experience
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MANAGEMENT_TEAM.map((member, i) => (
              <div
                key={i}
                className="p-6 border border-ink/10 rounded-sm bg-paper-dim flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-ink text-paper flex items-center justify-center font-display font-medium text-lg mb-4">
                    {member.name.charAt(4)}
                  </div>
                  <h3 className="font-display text-xl font-medium text-ink">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-crimson uppercase tracking-wider mt-1">
                    {member.position}
                  </p>
                  <p className="text-xs text-clay/60 italic mt-2">
                    {member.experience}
                  </p>
                  <p className="mt-4 text-xs leading-relaxed text-clay/80">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR INITIATIVES */}
      <section className="py-24 lg:py-32 bg-paper-dim border-t border-ink/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <p className="flex items-center gap-3 text-crimson text-sm font-medium italic">
                <span className="h-px w-8 bg-crimson" />
                Community Impact
              </p>
              <h2 className="mt-4 font-display text-4xl font-medium">
                Corporate Social Responsibility
              </h2>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12 text-clay/60">Loading CSR initiatives...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {projects.map((csr: any) => (
                <div
                  key={csr.id}
                  className="bg-paper border border-ink/10 rounded-sm overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-video w-full">
                    <Image
                      src={
                        csr.images && csr.images[0]
                          ? csr.images[0]
                          : "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                      }
                      alt={csr.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start gap-2 mb-2">
                        <span className="mt-1 shrink-0">
                          <IconHeart />
                        </span>
                        <h3 className="font-display text-lg font-medium text-ink leading-snug">
                          {csr.title}
                        </h3>
                      </div>

                      {(csr.date || csr.location) && (
                        <p className="text-[11px] font-semibold text-crimson/80 uppercase tracking-wider mb-3">
                          {csr.date} {csr.location ? `• ${csr.location}` : ""}
                        </p>
                      )}

                      <p className="text-xs text-clay/80 leading-relaxed">
                        {csr.description}
                      </p>
                    </div>

                    {csr.stats && (
                      <div className="mt-6 pt-4 border-t border-ink/10">
                        <span className="inline-block text-xs font-semibold bg-crimson/10 text-crimson px-2.5 py-1 rounded-full">
                          {csr.stats}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-paper">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="rounded-sm bg-ink px-8 py-16 sm:px-16 text-center text-paper">
            <h2 className="font-display text-3xl sm:text-4xl font-medium">
              Visit our branches island wide
            </h2>
            <p className="mt-4 text-paper/60 max-w-md mx-auto text-sm">
              Experience our latest fashion lines across all ASB Fashion, ASB Glamour, and Glamour Gate locations.
            </p>
            <Link
              href="/branches"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-crimson px-7 py-3.5 text-sm font-medium text-paper hover:bg-crimson/90 transition-colors"
            >
              Find Nearest Branch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}