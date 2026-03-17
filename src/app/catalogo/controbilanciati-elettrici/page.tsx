import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Controbilanciati Elettrici CAT® Lift Trucks",
  description: "Carrelli controbilanciati elettrici CAT® Lift Trucks. Da 1,4 a 5,5 ton. 48V e 80V. Dealer ufficiale Emilia-Romagna.",
};

const models = [
  {
    "name": "EP14N2T",
    "capacity_kg": 1400,
    "loadCenter_mm": 500,
    "battery": "48V/500Ah-625Ah",
    "maxLiftHeight_mm": 7000,
    "image": "/images/catalog/elettrici-48v-3-ruote/EP14-16C-18C-N2T-product.png",
    "brochure": null
  },
  {
    "name": "EP16CN2T",
    "capacity_kg": 1600,
    "loadCenter_mm": 500,
    "battery": "48V/500Ah-625Ah",
    "maxLiftHeight_mm": 7000,
    "image": "/images/catalog/elettrici-48v-3-ruote/EP14-16C-18C-N2T-product.png",
    "brochure": null
  },
  {
    "name": "EP18CN2T",
    "capacity_kg": 1800,
    "loadCenter_mm": 500,
    "battery": "48V/500Ah-625Ah",
    "maxLiftHeight_mm": 7000,
    "image": "/images/catalog/elettrici-48v-3-ruote/EP14-16C-18C-N2T-product.png",
    "brochure": null
  },
  {
    "name": "EP16N2T",
    "capacity_kg": 1600,
    "loadCenter_mm": 500,
    "battery": "48V/625Ah-750Ah",
    "maxLiftHeight_mm": 7000,
    "image": "/images/catalog/elettrici-48v-3-ruote/EP16-18-20-N2T-product.png",
    "brochure": null
  },
  {
    "name": "EP18N2T",
    "capacity_kg": 1800,
    "loadCenter_mm": 500,
    "battery": "48V/625Ah-750Ah",
    "maxLiftHeight_mm": 7000,
    "image": "/images/catalog/elettrici-48v-3-ruote/EP16-18-20-N2T-product.png",
    "brochure": null
  },
  {
    "name": "EP20N2T",
    "capacity_kg": 2000,
    "loadCenter_mm": 500,
    "battery": "48V/625Ah-750Ah",
    "maxLiftHeight_mm": 7000,
    "image": "/images/catalog/elettrici-48v-3-ruote/EP16-18-20-N2T-product.png",
    "brochure": null
  },
  {
    "name": "EP16CN2",
    "capacity_kg": 1600,
    "loadCenter_mm": 500,
    "battery": "48V/500Ah - MAX 625Ah",
    "maxLiftHeight_mm": 7000,
    "image": "/images/catalog/elettrici-48v-4-ruote/EP-4ruote-48v-product.png",
    "brochure": null
  },
  {
    "name": "EP18CN2",
    "capacity_kg": 1800,
    "loadCenter_mm": 500,
    "battery": "48V/500Ah - MAX 625Ah",
    "maxLiftHeight_mm": 7000,
    "image": "/images/catalog/elettrici-48v-4-ruote/EP-4ruote-48v-product.png",
    "brochure": null
  },
  {
    "name": "EP16N2",
    "capacity_kg": 1600,
    "loadCenter_mm": 500,
    "battery": "48V/625Ah - MAX 750Ah",
    "maxLiftHeight_mm": 7000,
    "image": "/images/catalog/elettrici-48v-4-ruote/EP-4ruote-48v-product.png",
    "brochure": null
  },
  {
    "name": "EP18N2",
    "capacity_kg": 1600,
    "loadCenter_mm": 500,
    "battery": "48V/625Ah - MAX 750Ah",
    "maxLiftHeight_mm": 7000,
    "image": "/images/catalog/elettrici-48v-4-ruote/EP-4ruote-48v-product.png",
    "brochure": null
  },
  {
    "name": "EP20N2",
    "capacity_kg": 2000,
    "loadCenter_mm": 500,
    "battery": "48V/625Ah - MAX 750Ah",
    "maxLiftHeight_mm": 7000,
    "image": "/images/catalog/elettrici-48v-4-ruote/EP-4ruote-48v-product.png",
    "brochure": null
  },
  {
    "name": "EP25ACN",
    "capacity_kg": 2500,
    "loadCenter_mm": 500,
    "battery": "80V - 620Ah",
    "maxLiftHeight_mm": 7000,
    "image": "/images/catalog/elettrici-80v-2.5-3.0/EP25-35-80v-product.png",
    "brochure": null
  },
  {
    "name": "EP25AN",
    "capacity_kg": 2500,
    "loadCenter_mm": 500,
    "battery": "80V - 775Ah",
    "maxLiftHeight_mm": 7000,
    "image": "/images/catalog/elettrici-80v-2.5-3.0/EP25-35-80v-product.png",
    "brochure": null
  },
  {
    "name": "EP30ACN",
    "capacity_kg": 3000,
    "loadCenter_mm": 500,
    "battery": "80V - 620Ah",
    "maxLiftHeight_mm": 7000,
    "image": "/images/catalog/elettrici-80v-2.5-3.0/EP25-35-80v-product.png",
    "brochure": null
  },
  {
    "name": "EP30AN",
    "capacity_kg": 3000,
    "loadCenter_mm": 500,
    "battery": "80V - 775Ah",
    "maxLiftHeight_mm": 7000,
    "image": "/images/catalog/elettrici-80v-2.5-3.0/EP25-35-80v-product.png",
    "brochure": null
  },
  {
    "name": "EP35AN",
    "capacity_kg": 3500,
    "loadCenter_mm": 500,
    "battery": "80V - 775Ah",
    "maxLiftHeight_mm": 7000,
    "image": "/images/catalog/elettrici-80v-2.5-3.0/EP25-35-80v-product.png",
    "brochure": null
  },
  {
    "name": "EP40N",
    "capacity_kg": 4000,
    "loadCenter_mm": 500,
    "battery": "80V - 775Ah",
    "maxLiftHeight_mm": 7000,
    "image": "/images/catalog/elettrici-80v-4.0-5.5/EP40-55-80v-product.png",
    "brochure": null
  },
  {
    "name": "EP45N",
    "capacity_kg": 4500,
    "loadCenter_mm": 500,
    "battery": "80V - 775Ah",
    "maxLiftHeight_mm": 7000,
    "image": "/images/catalog/elettrici-80v-4.0-5.5/EP40-55-80v-product.png",
    "brochure": null
  },
  {
    "name": "EP50CN",
    "capacity_kg": 4990,
    "loadCenter_mm": 500,
    "battery": "80V - 775Ah",
    "maxLiftHeight_mm": 7000,
    "image": "/images/catalog/elettrici-80v-4.0-5.5/EP40-55-80v-product.png",
    "brochure": null
  },
  {
    "name": "EP50N",
    "capacity_kg": 4990,
    "loadCenter_mm": 500,
    "battery": "80V/840Ah - MAX 930Ah",
    "maxLiftHeight_mm": 7000,
    "image": "/images/catalog/elettrici-80v-4.0-5.5/EP40-55-80v-product.png",
    "brochure": null
  },
  {
    "name": "EP50NH",
    "capacity_kg": 3500,
    "loadCenter_mm": 600,
    "battery": "80V/840Ah - MAX 930Ah",
    "maxLiftHeight_mm": 7000,
    "image": "/images/catalog/elettrici-80v-4.0-5.5/EP40-55-80v-product.png",
    "brochure": null
  },
  {
    "name": "EP55NH",
    "capacity_kg": 5500,
    "loadCenter_mm": 600,
    "battery": "80V/840Ah - MAX 930Ah",
    "maxLiftHeight_mm": 7000,
    "image": "/images/catalog/elettrici-80v-4.0-5.5/EP40-55-80v-product.png",
    "brochure": null
  }
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", href: "/" },
        { name: "Catalogo", href: "/catalogo" },
        { name: "controbilanciati-elettrici", href: "/catalogo/controbilanciati-elettrici" },
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
              Carrelli controbilanciati a batteria CAT® Lift Trucks
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Controbilanciati Elettrici
            </h1>
            <p className="text-brand-text-muted text-lg">
              Portata: 1.400 - 5.500 kg
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
