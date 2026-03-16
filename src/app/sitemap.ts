import { MetadataRoute } from "next";

const baseUrl = "https://nuova-tcm-demo.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const mainPages = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/chi-siamo`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/servizi`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/catalogo`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/contatti`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
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
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...mainPages, ...catalogPages];
}
