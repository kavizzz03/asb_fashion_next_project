import Image from "next/image";
import Link from "next/link";
import { siteInfo, branches } from "@/lib/branches";

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-paper/80 font-sans border-t border-paper/10 relative overflow-hidden">
      {/* Subtle Background Glow/Gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-crimson/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Body */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          
          {/* Column 1: Brand & Logo (Spans 2 cols on desktop) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex items-center gap-4 group">
                {/* White Background Container for Brand Logo */}
                <div className="relative h-12 w-12 rounded-full bg-white p-1.5 shadow-md ring-1 ring-paper/20 group-hover:ring-brass transition-all duration-300">
                  <Image
                    src="https://asbfashion.com/logo.png"
                    alt="ASB Fashion Logo"
                    fill
                    sizes="48px"
                    className="object-contain p-0.5 transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-paper group-hover:text-brass transition-colors duration-300">
                    ASB <span className="font-light italic text-crimson">Fashion</span>
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-widest text-brass/80">
                    {siteInfo.tagline}
                  </span>
                </div>
              </Link>

              <p className="mt-5 text-sm leading-relaxed text-paper/60 max-w-sm font-light">
                Sri Lanka&rsquo;s trusted name in clothing retail since {siteInfo.founded}
                &nbsp;- providing luxury style and everyday essentials across {siteInfo.branchCount} island wide branches.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-paper/10">
              <a
                href={siteInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-paper/80 hover:text-brass transition-colors group"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper/5 group-hover:bg-brass group-hover:text-ink transition-all duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                  </svg>
                </span>
                Follow us on Facebook
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-display text-xs uppercase tracking-widest text-brass font-semibold">
              Explore
            </h3>
            <ul className="mt-6 space-y-3.5 text-sm font-light text-paper/70">
              <li>
                <Link href="/" className="hover:text-paper hover:translate-x-1 transition-all inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-paper hover:translate-x-1 transition-all inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/branches" className="hover:text-paper hover:translate-x-1 transition-all inline-block">
                  Our Branches
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-paper hover:translate-x-1 transition-all inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-display text-xs uppercase tracking-widest text-brass font-semibold">
              Get in Touch
            </h3>
            <ul className="mt-6 space-y-3.5 text-sm font-light text-paper/70">
              <li>
                <a
                  href={siteInfo.phoneHref}
                  className="hover:text-paper transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-brass/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {siteInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="hover:text-paper transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-brass/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {siteInfo.email}
                </a>
              </li>
              <li className="pt-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper/5 text-xs text-brass border border-brass/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {branches.length} Stores Island Wide
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Key Stores Preview */}
          <div>
            <h3 className="font-display text-xs uppercase tracking-widest text-brass font-semibold">
              Featured Outlets
            </h3>
            <ul className="mt-6 space-y-3 text-sm font-light text-paper/60">
              {branches.slice(0, 4).map((b) => (
                <li key={b.name} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-paper/30" />
                  {b.name}
                </li>
              ))}
            </ul>
            <Link
              href="/branches"
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brass hover:text-paper transition-colors group"
            >
              <span>View all branches</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="border-t border-paper/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-paper/50">
          <p>&copy; {new Date().getFullYear()} ASB Fashion. All rights reserved.</p>
          <p className="flex flex-wrap items-center justify-center gap-1 text-center sm:text-right">
            <span>Designed &amp; developed by</span>
            <a
              href={siteInfo.developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper/80 hover:text-brass transition-colors font-medium underline underline-offset-2"
            >
              {siteInfo.developer.company}
            </a>
            <span className="text-paper/20">&middot;</span>
            <span>Lead {siteInfo.developer.lead}</span>
            <span className="text-paper/20">&middot;</span>
            <a
              href={siteInfo.developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper/60 hover:text-brass transition-colors"
            >
              {siteInfo.developer.domain}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}