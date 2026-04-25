import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const nunito = Nunito({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const siteUrl = "https://debestokibe.com";
const siteName = "DE-BEST OKIBE OFFICE EQUIPMENT";
const siteDescription =
  "Nigeria's #1 trusted supplier of premium office equipment — printers, copiers, laptops, desktop computers & accessories. Located at Alaba International Market, Ojo, Lagos. Competitive prices, expert support, after-sales service.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "DE-BEST OKIBE OFFICE EQUIPMENT | Printers, Laptops & Copiers — Alaba Market Lagos",
    template: "%s | DE-BEST OKIBE OFFICE EQUIPMENT",
  },
  description: siteDescription,
  keywords: [
    "office equipment Lagos",
    "printers Lagos Nigeria",
    "copiers Alaba market",
    "laptops Alaba International Market",
    "desktop computers Lagos",
    "HP printers Nigeria",
    "Canon printers Lagos",
    "office supplies Nigeria",
    "printer suppliers Lagos",
    "copier machine Nigeria",
    "laser printer Lagos",
    "inkjet printer Nigeria",
    "office equipment supplier Nigeria",
    "Alaba International Market electronics",
    "DE-BEST OKIBE",
    "debestokibe",
    "cheap printers Lagos",
    "quality office equipment Nigeria",
    "buy printer Lagos",
    "buy laptop Alaba market",
    "buy copier Lagos",
    "photocopier Nigeria",
    "office equipment Ojo Lagos",
    "stationery supplies Lagos",
    "computer accessories Nigeria",
    "printer cartridges Lagos",
    "toner cartridge Nigeria",
    "office furniture Lagos",
    "business equipment Nigeria",
    "printer repair Lagos",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
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
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName,
    title:
      "DE-BEST OKIBE OFFICE EQUIPMENT | Premium Printers, Laptops & Copiers — Lagos Nigeria",
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DE-BEST OKIBE OFFICE EQUIPMENT — Alaba International Market Lagos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DE-BEST OKIBE OFFICE EQUIPMENT | Lagos Nigeria",
    description: siteDescription,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Office Equipment & Electronics",
  verification: {
    google: "google-site-verification-placeholder",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: siteName,
      description: siteDescription,
      url: siteUrl,
      telephone: "+2348066538558",
      email: "info@debestokibe.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "F-893A and F-815, Alaba International Market",
        addressLocality: "Ojo",
        addressRegion: "Lagos",
        addressCountry: "NG",
        postalCode: "102101",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 6.4749,
        longitude: 3.2432,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "09:00",
          closes: "17:00",
        },
      ],
      priceRange: "₦₦",
      currenciesAccepted: "NGN",
      paymentAccepted: "Cash, Bank Transfer",
      hasMap: "https://maps.google.com/?q=Alaba+International+Market+Ojo+Lagos",
      sameAs: [
        "https://www.facebook.com/debestokibe",
        "https://www.instagram.com/debestokibe",
        "https://wa.me/2348066538558",
      ],
      image: `${siteUrl}/products/printers.jpeg`,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ItemList",
      name: "Office Equipment Products",
      description: "Premium office equipment available at DE-BEST OKIBE",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "High-Performance Printers",
          description:
            "Laser and inkjet printers from top brands, perfect for office use",
          url: `${siteUrl}/#products`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Photocopiers & Copier Machines",
          description: "Professional copiers for high-volume document production",
          url: `${siteUrl}/#products`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Laptops & Desktop Computers",
          description:
            "Latest laptops and desktop computers for businesses and individuals",
          url: `${siteUrl}/#products`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Office Accessories & Consumables",
          description: "Toner cartridges, ink cartridges, and office accessories",
          url: `${siteUrl}/#products`,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos, Nigeria" />
        <meta name="geo.position" content="6.4749;3.2432" />
        <meta name="ICBM" content="6.4749, 3.2432" />
      </head>
      <body className="min-h-full flex flex-col">
          <ThemeProvider>{children}</ThemeProvider>
        </body>
    </html>
  );
}
