import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Transpallet Manuali CAT® Lift Trucks",
  description: "Transpallet Manuali CAT® Lift Trucks. Portata 1200-2500 kg. Dealer ufficiale in Emilia-Romagna. Nuovi, usati e a noleggio.",
};

const models = [
  {
    "name": "C25(M)(H)(I)(J)(W)",
    "capacity_kg": 2500,
    "loadCenter_mm": 600,
    "battery": null,
    "maxLiftHeight_mm": null,
    "image": "/images/catalog/transpallet-manuali/C25-transpallet-manuale.png",
    "brochure": null
  },
  {
    "name": "NPPL12-15",
    "capacity_kg": "1200-1500",
    "loadCenter_mm": 600,
    "battery": "Li-ION",
    "maxLiftHeight_mm": null,
    "image": "/images/catalog/transpallet-manuali/NPPL12-15-li-ion.png",
    "brochure": null
  }
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", href: "/" },
        { name: "Catalogo", href: "/catalogo" },
        { name: "transpallet-manuali", href: "/catalogo/transpallet-manuali" },
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
              Transpallet Manuali
            </h1>
            <p className="text-brand-text-muted text-lg">
              Portata: 1200-2500 kg
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
