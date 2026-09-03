import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | ASB Fashion",
  description:
    "Get in touch with ASB Fashion — call 071 905 7057, email us, or visit our Head Office at Kuda Waskaduwa, Wadduwa.",
};

const HEAD_OFFICE = {
  title: "ASB Fashion Head Office",
  address: "No. 266/2, Rathanajothi Mawatha, Kuda Waskaduwa, Wadduwa",
  phone: "071 905 7057",
  phoneHref: "tel:0719057057",
  mapsUrl: "https://maps.app.goo.gl/C8UpU4hgkrWvsQV9A",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8181673891016!2d79.9298711!3d6.6693821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2377b0e513fb3%3A0x892a000000000000!2sASB%20Fashion%20Head%20Office!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk",
};

const CONTACT_METHODS = [
  {
    label: "Head Office Direct Line",
    value: HEAD_OFFICE.phone,
    href: HEAD_OFFICE.phoneHref,
    note: "Mon–Sun, 8:30 AM – 8:30 PM",
    icon: (
      <svg className="w-6 h-6 fill-current text-crimson" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
  },
  {
    label: "Email Us",
    value: "info@asbfashion.com",
    href: "mailto:info@asbfashion.com",
    note: "Response within 24 business hours",
    icon: (
      <svg className="w-6 h-6 fill-current text-crimson" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    label: "Facebook Community",
    value: "facebook.com/asbfashion",
    href: "https://facebook.com/asbfashion",
    note: "Fastest response for quick inquiries",
    icon: (
      <svg className="w-6 h-6 fill-current text-crimson" viewBox="0 0 24 24">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.2.19 2.2.19v2.42h-1.24c-1.23 0-1.61.76-1.61 1.54V12h2.72l-.43 3H13v6.8c4.56-.93 8-4.96 8-9.8z" />
      </svg>
    ),
  },
  {
    label: "Head Office Location",
    value: "Kuda Waskaduwa, Wadduwa",
    href: HEAD_OFFICE.mapsUrl,
    note: "Central Administration & Corporate HQ",
    icon: (
      <svg className="w-6 h-6 fill-current text-brass" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <main className="bg-paper text-ink selection:bg-crimson selection:text-paper overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-28 pb-32 lg:pt-36 lg:pb-40 bg-ink text-paper overflow-hidden">
        <div className="absolute inset-0 opacity-20 scale-105 transition-transform duration-1000 ease-out">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80"
            alt="ASB Headquarters"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-transparent to-ink/60" />

        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-crimson/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-brass/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-paper/10 backdrop-blur-md border border-paper/15 text-brass text-xs font-semibold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Customer & Corporate Desk
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.02] tracking-tight">
                We&rsquo;re Here for You. <br />
                <span className="italic font-normal text-brass">Let&rsquo;s Connect.</span>
              </h1>

              <p className="max-w-xl text-paper/75 leading-relaxed text-base sm:text-lg">
                Have questions about product availability, store locations, corporate inquiries, or feedback? Get in touch with our team directly.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 bg-crimson hover:bg-crimson/90 text-paper font-medium text-sm px-6 py-3.5 rounded-full shadow-lg shadow-crimson/25 transition-all duration-200"
                >
                  Send a Message ↓
                </a>
                <a
                  href={HEAD_OFFICE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-paper/10 hover:bg-paper/20 backdrop-blur-md text-paper border border-paper/20 font-medium text-sm px-6 py-3.5 rounded-full transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current text-brass" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  Open Maps Location ↗
                </a>
              </div>
            </div>

            {/* Right Card: Head Office Highlight Banner */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative p-8 rounded-2xl bg-paper/10 backdrop-blur-xl border border-paper/20 shadow-2xl space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-brass font-semibold">
                    Central Operations
                  </span>
                  <span className="bg-emerald-500/20 text-emerald-300 text-[10px] uppercase font-bold px-2.5 py-1 rounded-full border border-emerald-500/30">
                    Wadduwa, Sri Lanka
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-medium text-paper">
                    ASB Fashion Head Office
                  </h3>
                  <p className="text-xs text-paper/70 mt-2 leading-relaxed">
                    Managing store outlets, logistics, and overall retail operations.
                  </p>
                </div>

                <div className="pt-4 border-t border-paper/10 space-y-2 text-xs text-paper/80">
                  <div className="flex justify-between">
                    <span className="text-paper/50">Address:</span>
                    <span className="font-medium text-right max-w-[220px]">
                      {HEAD_OFFICE.address}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-paper/50">Phone:</span>
                    <span className="font-medium text-brass">{HEAD_OFFICE.phone}</span>
                  </div>
                </div>

                <a
                  href={HEAD_OFFICE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-brass text-ink font-semibold text-xs uppercase tracking-wider py-3 rounded-xl hover:bg-brass/90 transition-colors"
                >
                  View Location on Google Maps ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT METHODS GRID */}
      <section className="py-16 bg-paper-dim border-b border-ink/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTACT_METHODS.map((m) => (
              <a
                key={m.label}
                href={m.href}
                target={m.href.startsWith("http") ? "_blank" : undefined}
                rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative rounded-xl bg-paper border border-ink/10 p-6 shadow-sm hover:border-crimson/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-paper-dim flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    {m.icon}
                  </div>
                  <p className="text-xs font-semibold tracking-wider text-clay/60 uppercase">
                    {m.label}
                  </p>
                  <p className="mt-2 font-display text-lg font-medium text-ink group-hover:text-crimson transition-colors">
                    {m.value}
                  </p>
                </div>
                <p className="mt-4 text-xs text-clay/70 border-t border-ink/5 pt-3">
                  {m.note}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT: FORM & MAP */}
      <section id="contact-form" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-6 bg-paper rounded-2xl border border-ink/10 p-8 sm:p-10 shadow-sm">
              <p className="flex items-center gap-3 text-crimson text-sm font-medium uppercase tracking-wider">
                <span className="h-px w-8 bg-crimson" />
                Send a Message
              </p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-medium leading-tight text-ink">
                How Can We Help You?
              </h2>
              <p className="mt-3 text-clay/80 text-sm leading-relaxed">
                Submit your inquiry and our administrative team at Wadduwa will get back to you promptly.
              </p>
              
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Map & Head Office Location Column */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <p className="flex items-center gap-3 text-crimson text-sm font-medium uppercase tracking-wider">
                  <span className="h-px w-8 bg-crimson" />
                  Official Location
                </p>
                <h2 className="mt-4 font-display text-3xl sm:text-4xl font-medium leading-tight text-ink">
                  Visit Our Head Office
                </h2>
                <p className="mt-3 text-clay/80 text-sm leading-relaxed">
                  Located at Kuda Waskaduwa, Wadduwa, operating as the central management center for ASB Fashion.
                </p>
              </div>

              {/* HQ Details Card */}
              <div className="p-6 rounded-xl bg-paper-dim border border-ink/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="font-display font-medium text-ink text-base">
                    {HEAD_OFFICE.title}
                  </h4>
                  <p className="text-xs text-clay/70">
                    {HEAD_OFFICE.address}
                  </p>
                  <p className="text-xs font-semibold text-crimson">
                    Tel: {HEAD_OFFICE.phone}
                  </p>
                </div>
                <a
                  href={HEAD_OFFICE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-crimson hover:bg-crimson/90 text-paper font-medium text-xs px-5 py-2.5 rounded-full whitespace-nowrap shadow-md transition-colors"
                >
                  Get Directions ↗
                </a>
              </div>

              {/* Embedded Google Map */}
              <div className="overflow-hidden rounded-2xl border border-ink/10 aspect-[4/3] shadow-md relative bg-paper-dim">
                <iframe
                  title="ASB Fashion Head Office Location"
                  src={HEAD_OFFICE.mapEmbedUrl}
                  className="h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-clay/70 pt-2">
                <span>Looking for store outlets?</span>
                <Link
                  href="/branches"
                  className="text-crimson font-semibold hover:underline"
                >
                  Explore All Store Branches →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}