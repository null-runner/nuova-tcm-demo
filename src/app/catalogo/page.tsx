import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Catalogo Carrelli Elevatori",
  description:
    "Carrelli elevatori CAT® Lift Trucks: transpallet, stoccatori, retrattili, controbilanciati. Nuovi, usati e a noleggio in Emilia-Romagna.",
};

const categories = [
  {
    title: "Transpallet Manuali",
    description: "Per la movimentazione quotidiana senza complicazioni. Robusti, semplici, praticamente indistruttibili.",
    portata: "Fino a 2.500 kg",
    models: 2,
    image: "/images/catalog/transpallet-manuali/C25-transpallet-manuale.png",
    alt: "Transpallet manuale CAT® C25",
    href: "/catalogo/transpallet-manuali",
  },
  {
    title: "Transpallet Elettrici",
    description: "Quando i volumi aumentano e la movimentazione manuale non basta più. Autonomia estesa, manutenzione ridotta.",
    portata: "Fino a 3.000 kg",
    models: 4,
    image: "/images/catalog/transpallet-elettrici/NPV20-25N3-product.png",
    alt: "Transpallet elettrico CAT® NPV20-25N3",
    href: "/catalogo/transpallet-elettrici",
  },
  {
    title: "Carrelli Stoccatori",
    description: "Stoccaggio in altezza con precisione millimetrica. Progettati per corsie strette e scaffalature intensive.",
    portata: "Fino a 2.000 kg",
    models: 3,
    image: "/images/catalog/stoccatori/NSR12-20N2-product.png",
    alt: "Stoccatore elettrico CAT® NSR12-20N2",
    href: "/catalogo/stoccatori",
  },
  {
    title: "Carrelli Retrattili",
    description: "Per chi lavora in spazi ridotti con carichi importanti. Sollevamento fino a 13 metri in corsie da 2,5 m.",
    portata: "Fino a 2.500 kg",
    models: 4,
    image: "/images/catalog/retrattili/NR14-25-SCHX-N2-product.png",
    alt: "Carrello retrattile CAT® NR14-25",
    href: "/catalogo/retrattili",
  },
  {
    title: "Retrattili Multidirezionali",
    description: "Ideali per la movimentazione di carichi lunghi in spazi ristretti. Versatilità in ogni direzione.",
    portata: "Fino a 2.500 kg",
    models: 2,
    image: "/images/catalog/retrattili-multidirezionali/NRM20-25N2-product.png",
    alt: "Carrello retrattile multidirezionale CAT® NRM20-25N2",
    href: "/catalogo/retrattili-multidirezionali",
  },
  {
    title: "Controbilanciati Elettrici",
    description: "Potenza senza emissioni. La scelta per chi opera in ambienti chiusi o ha obiettivi di sostenibilità.",
    portata: "Da 1,4 a 5,5 ton",
    models: 22,
    image: "/images/catalog/elettrici-con-pneumatici/elettrici-48v-4ruote-cat.png",
    alt: "Carrello controbilanciato elettrico CAT® a 4 ruote",
    href: "/catalogo/controbilanciati-elettrici",
  },
  {
    title: "Controbilanciati Diesel",
    description: "Per carichi pesanti e uso intensivo all'aperto. Affidabilità in qualsiasi condizione operativa.",
    portata: "Da 2,0 a 10 ton",
    models: 13,
    image: "/images/catalog/controbilanciati-termici/diesel-4.0-5.5-cat.png",
    alt: "Carrello controbilanciato diesel CAT® heavy-duty",
    href: "/catalogo/controbilanciati-diesel",
  },
  {
    title: "Commissionatori",
    description: "Picking rapido e preciso. Configurazioni orizzontali e verticali per ogni layout di magazzino.",
    portata: "Fino a 1.250 kg",
    models: 2,
    image: "/images/catalog/commissionatori/NOM10P-product.png",
    alt: "Commissionatore CAT® NOM10P",
    href: "/catalogo/commissionatori",
  },
  {
    title: "Trilaterali VNA",
    description: "Per magazzini ad alta densità. Operatività in corsie strettissime con sollevamento fino a 10 metri.",
    portata: "Fino a 1.500 kg",
    models: 1,
    image: "/images/catalog/trilaterali-man-down/NTD13-15N3-product.png",
    alt: "Carrello trilaterale VNA CAT® NTD13-15N3",
    href: "/catalogo/trilaterali",
  },
  {
    title: "Carrelli da Traino",
    description: "Capacità di rimorchio fino a 5.000 kg. Per la logistica interna su lunghe distanze.",
    portata: "Fino a 5.000 kg",
    models: 1,
    image: "/images/catalog/carrello-da-traino/NTR30-50N2-product.png",
    alt: "Carrello da traino CAT® NTR30-50N2",
    href: "/catalogo/carrello-da-traino",
  },
  {
    title: "Carrelli Usati Garantiti",
    description: "Revisionati dai nostri tecnici, consegnati con garanzia. Il modo più conveniente per ampliare la flotta.",
    portata: "Varie portate",
    models: 35,
    image: "/images/catalog/carrelli-usati/usati-hero.png",
    alt: "Selezione carrelli elevatori usati revisionati",
    href: "/catalogo/carrelli-usati",
  },
];

export default function Catalogo() {
  return (
    <>
      {/* HERO */}
      <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(184,122,10,0.06),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection>
            <p className="font-mono text-brand-accent text-xs tracking-[0.2em] uppercase mb-4">
              Catalogo
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 max-w-3xl">
              Il carrello giusto per il vostro tipo di lavoro
            </h1>
            <p className="text-brand-text-muted text-lg max-w-2xl leading-relaxed">
              Carrelli CAT® Lift Trucks nuovi, usati e a noleggio. Ogni mezzo
              viene consegnato revisionato e con assistenza garantita.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* GRIGLIA CATEGORIE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.title} delay={i * 0.05}>
                <Link
                  href={cat.href}
                  className="group bg-white border border-gray-100 hover:border-brand-accent/30 rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-gray-100/50 h-full flex flex-col"
                >
                  <div className="aspect-square bg-brand-light flex items-center justify-center p-6 overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.alt}
                      width={400}
                      height={400}
                      className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="font-display font-semibold text-brand-elevated text-lg mb-2">
                      {cat.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                      {cat.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-500 bg-brand-light px-3 py-1 rounded-full">
                        {cat.portata}
                      </span>
                      <span className="text-brand-accent text-sm font-medium group-hover:underline">
                        {cat.models} modelli →
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-brand-elevated mb-4">
              Non siete sicuri di quale carrello vi serva?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Descriveteci il vostro tipo di lavoro e vi consigliamo il mezzo
              più adatto. Senza impegno.
            </p>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 bg-brand-elevated hover:bg-brand-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors group"
            >
              Chiedete un consiglio
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
