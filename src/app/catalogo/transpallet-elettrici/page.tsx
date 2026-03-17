import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Transpallet Elettrici CAT® Lift Trucks",
  description: "Transpallet Elettrici CAT® Lift Trucks. Portata 1600-3000 kg. Dealer ufficiale in Emilia-Romagna. Nuovi, usati e a noleggio.",
};

const models = [
  {
    "name": "NPP16-20N3(R)(E) / NPP12N2D",
    "capacity_kg": "1600/1800/2000",
    "loadCenter_mm": 600,
    "battery": "24V/150Ah - MAX 250Ah",
    "maxLiftHeight_mm": null,
    "image": "/images/catalog/transpallet-elettrici/NPP16-20N3-product.png",
    "brochure": null
  },
  {
    "name": "NPV20-25N3 / NPF20-25N3(R)(S)",
    "capacity_kg": "2000/2500",
    "loadCenter_mm": 600,
    "battery": "24V/240Ah - MAX 600Ah",
    "maxLiftHeight_mm": null,
    "image": "/images/catalog/transpallet-elettrici/NPV20-25N3-product.png",
    "brochure": null
  },
  {
    "name": "NPV20N3D / NPF20N3D(R)(S)",
    "capacity_kg": 2000,
    "loadCenter_mm": 600,
    "battery": "24V/300Ah",
    "maxLiftHeight_mm": null,
    "image": "/images/catalog/transpallet-elettrici/NPV20N3D-product.png",
    "brochure": null
  },
  {
    "name": "NPR20-30N2 / NPS20-30N2",
    "capacity_kg": "2000/3000",
    "loadCenter_mm": 600,
    "battery": "24V/375Ah - MAX 775Ah",
    "maxLiftHeight_mm": null,
    "image": "/images/catalog/transpallet-elettrici/NPR20-30N2-product.png",
    "brochure": null
  }
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", href: "/" },
        { name: "Catalogo", href: "/catalogo" },
        { name: "transpallet-elettrici", href: "/catalogo/transpallet-elettrici" },
      ]} />
      <section className="bg-brand-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(184,122,10,0.06),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection>
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 text-brand-text-muted hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft size={14} />
              Torna al catalogo
            </Link>
            <p className="font-mono text-brand-accent text-xs tracking-[0.2em] uppercase mb-3">
              Soluzioni per il trasporto in orizzontale
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Transpallet Elettrici
            </h1>
            <p className="text-brand-text-muted text-lg">
              Portata: 1600-3000 kg
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model, i) => (
              <AnimatedSection key={model.name} delay={i * 0.05}>
                <ProductCard model={model} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-2xl font-bold text-brand-elevated mb-4">
              Avete bisogno di una consulenza?
            </h2>
            <p className="text-gray-600 mb-6">
              Contattateci per informazioni su disponibilità, prezzi e configurazioni.
            </p>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 bg-brand-elevated hover:bg-brand-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors group"
            >
              Richiedi informazioni
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
