import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://asbfashion.com";

export const viewport: Viewport = {
  themeColor: "#800020", // ASB Crimson identity color
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ASB Fashion | Beyond Tradition - Sri Lanka's Premier Retail Destination",
    template: "%s | ASB Fashion",
  },
  description:
    "Leading Sri Lanka's apparel industry since 1989. Discover quality clothing, sarees, menswear, and fashion trends across 16+ island-wide branches. Home to ASB Fashion, ASB Glamour, and Glamour Gate under ASB Group of Companies.",
  keywords: [
    "ASB Fashion",
    "ASB Fashion logo",
    "ASB Glamour",
    "Glamour Gate",
    "ASB Group of Companies",
    "Sri Lanka clothing store",
    "Online shopping Sri Lanka",
    "Sarees Sri Lanka",
    "Menswear Wadduwa",
    "Sri Lanka fashion retailer",
    "Beyond Tradition ASB",
    "ASB Fashion online delivery",
  ],
  authors: [{ name: "ASB Group of Companies", url: SITE_URL }],
  creator: "ASB Group of Companies",
  publisher: "ASB Fashion",
  category: "Fashion & Apparel Retail",
  other: {
    "geo.region": "LK-1",
    "geo.placename": "Wadduwa",
    "geo.position": "6.6667;79.9333",
    "ICBM": "6.6667, 79.9333",
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-LK": SITE_URL,
      "sin-LK": SITE_URL,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "ASB Fashion — Beyond Tradition | Home of ASB Glamour & Glamour Gate",
    description:
      "Sri Lanka's leading retail chain since 1989. Explore exclusive collections across 16+ island-wide branches under ASB Group of Companies.",
    url: SITE_URL,
    siteName: "ASB Fashion",
    locale: "en_LK",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
        alt: "ASB Fashion Brand Logo",
      },
      {
        url: `${SITE_URL}/logo.png`,
        width: 1200,
        height: 630,
        alt: "ASB Fashion — Beyond Tradition Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASB Fashion — Beyond Tradition",
    description:
      "Sri Lanka's leading fashion retail network featuring ASB Fashion, ASB Glamour, and Glamour Gate.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/logo.png", sizes: "any" },
    ],
    shortcut: ["/logo.png"],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: `${SITE_URL}/site.webmanifest`,
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_TOKEN_HERE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        "name": "ASB Group of Companies",
        "legalName": "ASB Group of Companies",
        "url": SITE_URL,
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/logo.png`,
          "caption": "ASB Fashion Brand Logo"
        },
        "image": `${SITE_URL}/logo.png`,
        "foundingDate": "1989",
        "telephone": "+94719057057",
        "email": "info@asbfashion.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No. 266/2, Rathanajothi Mawatha, Kuda Waskaduwa",
          "addressLocality": "Wadduwa",
          "addressRegion": "Western Province",
          "postalCode": "12560",
          "addressCountry": "LK"
        },
        "sameAs": [
          "https://facebook.com/asbfashion",
          "https://instagram.com/asbfashion"
        ]
      },
      {
        "@type": "ClothingStore",
        "@id": `${SITE_URL}/#store`,
        "parentOrganization": {
          "@id": `${SITE_URL}/#organization`
        },
        "name": "ASB Fashion",
        "alternateName": ["ASB Glamour", "Glamour Gate"],
        "url": SITE_URL,
        "logo": `${SITE_URL}/logo.png`,
        "image": `${SITE_URL}/og-image.jpg`,
        "description": "Sri Lanka's premier fashion and apparel retail chain operating 16+ branches nationwide.",
        "priceRange": "$$",
        "telephone": "+94719057057",
        "email": "info@asbfashion.com"
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": "ASB Fashion",
        "publisher": {
          "@id": `${SITE_URL}/#organization`
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${SITE_URL}/search?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${inter.variable} antialiased bg-paper text-ink selection:bg-crimson selection:text-paper`}
      >
        <SiteHeader />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}