import { MetadataRoute } from "next";

const baseUrl = "https://nuova-tcm-demo.vercel.app";
const buildDate = "2026-03-17";

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages = [
    { url: baseUrl, lastModified: buildDate, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/chi-siamo`, lastModified: buildDate, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/servizi`, lastModified: buildDate, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/catalogo`, lastModified: buildDate, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/contatti`, lastModified: buildDate, changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const catalogPages = [
    "transpallet-manuali",
    "transpallet-elettrici",
    "stoccatori",
    "commissionatori",
    "retrattili",
    "retrattili-multidirezionali",
    "trilaterali",
    "carrello-da-traino",
    "controbilanciati-elettrici",
    "controbilanciati-diesel",
    "carrelli-usati",
  ].map((slug) => ({
    url: `${baseUrl}/catalogo/${slug}`,
    lastModified: buildDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...mainPages, ...catalogPages];
}
