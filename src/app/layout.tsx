import type { Metadata, Viewport } from "next";
import "./globals.css";
import siteConfig from "@/content/site";
import CustomCursor from "@/components/CustomCursor";
import CookieBanner from "@/components/CookieBanner";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050507",
};

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  keywords: siteConfig.meta.keywords,
  authors: [{ name: "DJ TOTOTE", url: siteConfig.meta.siteUrl }],
  creator: siteConfig.meta.creator,
  metadataBase: new URL(siteConfig.meta.siteUrl),
  // DEMO COMERCIAL: Bloquear indexación mientras sea demo
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  icons: {
    icon: [
      { url: siteConfig.media.faviconSvg, type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: [{ url: siteConfig.media.faviconSvg }],
  },
  openGraph: {
    type: "website",
    locale: siteConfig.meta.locale,
    url: siteConfig.meta.siteUrl,
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    siteName: "DJ TOTOTE Oficial",
    images: [
      {
        url: siteConfig.media.ogImage,
        width: 1200,
        height: 630,
        alt: "DJ TOTOTE — Spain Urban DJ Festival Night",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: [siteConfig.media.ogImage],
    creator: "@djtotote",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data: MusicGroup / Person + Events
  const schemaStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.meta.siteUrl}#artist`,
        name: siteConfig.artist.name,
        alternateName: siteConfig.artist.stageName,
        jobTitle: siteConfig.artist.subtitle,
        description: siteConfig.artist.bioLong,
        url: siteConfig.meta.siteUrl,
        image: `${siteConfig.meta.siteUrl}${siteConfig.media.pressPhoto}`,
        sameAs: [
          siteConfig.socials.instagram.url,
          siteConfig.socials.tiktok.url,
          siteConfig.socials.threads.url,
          siteConfig.socials.spotify.url,
        ],
        homeLocation: {
          "@type": "Place",
          name: siteConfig.artist.location,
        },
      },
      ...siteConfig.tourDates.map((date) => ({
        "@type": "MusicEvent",
        name: `DJ TOTOTE en ${date.city} — ${date.venue}`,
        startDate: `2026-${date.month === "JUL" ? "07" : date.month === "AGO" ? "08" : "09"}-${date.day}`,
        location: {
          "@type": "Place",
          name: date.venue,
          address: {
            "@type": "PostalAddress",
            addressLocality: date.city,
            addressCountry: "ES",
          },
        },
        performer: {
          "@id": `${siteConfig.meta.siteUrl}#artist`,
        },
        offers: {
          "@type": "Offer",
          url: date.ticketUrl.startsWith("http") ? date.ticketUrl : siteConfig.meta.siteUrl,
          availability:
            date.status === "SOLD OUT"
              ? "https://schema.org/SoldOut"
              : "https://schema.org/InStock",
        },
      })),
    ],
  };

  return (
    <html lang="es" className="dark scroll-smooth">
      <head>
        {/* Robots meta tag for demo safeguard */}
        <meta name="robots" content="noindex, nofollow" />
        
        {/* CDN Preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://img.youtube.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;700;800;900&family=Bebas+Neue&family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaStructuredData) }}
        />
      </head>
      <body className="bg-[#050507] text-[#F5F5F7] antialiased selection:bg-[#FF3D9A] selection:text-white relative">
        {/* Film grain subtle overlay */}
        <div className="film-grain" aria-hidden="true" />

        {/* Custom cursor for desktop */}
        <CustomCursor />

        {/* Main Content */}
        {children}

        {/* Persistent Floating WhatsApp Action */}
        <WhatsAppFloat />

        {/* RGPD Cookie Banner */}
        <CookieBanner />
      </body>
    </html>
  );
}
