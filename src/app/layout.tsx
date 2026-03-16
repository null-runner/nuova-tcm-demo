import type { Metadata } from "next";
import { DM_Sans, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nuova-tcm-demo.vercel.app"),
  alternates: {
    canonical: "/",
  },
  title: {
    default:
      "Assistenza Carrelli Elevatori Emilia-Romagna | Nuova T.C.M. Service",
    template: "%s | Nuova T.C.M. Service",
  },
  description:
    "Riparazioni entro 24h, gestione flotta, batterie industriali. Dealer CAT® Lift Trucks. Sede a Sassuolo, operiamo su tutta l'Emilia-Romagna.",
  keywords: [
    "carrelli elevatori Sassuolo",
    "assistenza carrelli elevatori Modena",
    "carrelli elevatori Emilia-Romagna",
    "assistenza carrelli elevatori Bologna",
    "noleggio carrelli Reggio Emilia",
    "carrelli elevatori Parma",
    "noleggio carrelli elevatori",
    "Cat Lift Trucks dealer Italia",
    "riparazione carrelli elevatori",
    "batterie industriali",
    "gestione flotta carrelli",
    "manutenzione LGV",
    "assistenza AGV",
    "batterie LGV laser guided vehicle",
    "manutenzione veicoli a guida laser",
  ],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Nuova T.C.M. Service",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nuova T.C.M. Service - Assistenza Carrelli Elevatori in Emilia-Romagna",
      },
    ],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.nuovatcmservice.com/#organization",
  name: "Nuova T.C.M. Service S.r.l.",
  description:
    "Assistenza, vendita e noleggio carrelli elevatori. Dealer ufficiale CAT® Lift Trucks. Manutenzione carrelli, AGV e LGV. Sede a Sassuolo, operativi in tutta l'Emilia-Romagna.",
  url: "https://www.nuovatcmservice.com",
  telephone: "+39 0536 800034",
  email: "info@nuovatcmservice.com",
  image: "https://nuova-tcm-demo.vercel.app/images/og-image.png",
  logo: "https://nuova-tcm-demo.vercel.app/images/catalog/logo-company.png",
  sameAs: [
    "https://www.facebook.com/nuovatcm/",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Piazza Bernina 6",
    addressLocality: "Sassuolo",
    addressRegion: "MO",
    postalCode: "41049",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.5345,
    longitude: 10.7847,
  },
  areaServed: [
    { "@type": "City", name: "Sassuolo" },
    { "@type": "City", name: "Modena" },
    { "@type": "City", name: "Bologna" },
    { "@type": "City", name: "Reggio Emilia" },
    { "@type": "City", name: "Parma" },
    { "@type": "City", name: "Carpi" },
    { "@type": "City", name: "Fiorano Modenese" },
    { "@type": "City", name: "Casalgrande" },
    { "@type": "City", name: "Castellarano" },
    { "@type": "AdministrativeArea", name: "Emilia-Romagna" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Carrelli Elevatori CAT® Lift Trucks",
    itemListElement: [
      { "@type": "OfferCatalog", name: "Assistenza e Riparazione" },
      { "@type": "OfferCatalog", name: "Noleggio Carrelli Elevatori" },
      { "@type": "OfferCatalog", name: "Vendita Carrelli Nuovi e Usati" },
      { "@type": "OfferCatalog", name: "Batterie Industriali" },
      { "@type": "OfferCatalog", name: "Gestione Flotta" },
      { "@type": "OfferCatalog", name: "Manutenzione AGV e LGV" },
    ],
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "12:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "14:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
