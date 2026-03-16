import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "Nuova T.C.M. Service | Carrelli Elevatori Sassuolo",
    template: "%s | Nuova T.C.M. Service",
  },
  description:
    "Vendita, noleggio e riparazione carrelli elevatori a Sassuolo. Dealer ufficiale Cat® Lift Trucks. Oltre 30 anni di esperienza nel settore metalmeccanico.",
  keywords: [
    "carrelli elevatori",
    "Sassuolo",
    "noleggio carrelli",
    "Cat Lift Trucks",
    "riparazione carrelli elevatori",
    "batterie industriali",
    "Modena",
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Nuova T.C.M. Service",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nuova T.C.M. Service S.r.l.",
  description:
    "Vendita, noleggio e riparazione carrelli elevatori. Dealer ufficiale Cat® Lift Trucks.",
  url: "https://www.nuovatcmservice.com",
  telephone: "+390536800034",
  email: "info@nuovatcmservice.com",
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
  priceRange: "€€",
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
      <body className={`${display.variable} ${body.variable} font-body antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
