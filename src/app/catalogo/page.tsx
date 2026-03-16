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
    image: "/images/catalog/transpallet-manuali.png",
    alt: "Transpallet manuale CAT®",
  },
  {
    title: "Transpallet Elettrici",
    description: "Quando i volumi aumentano e la movimentazione manuale non basta più. Autonomia estesa, manutenzione ridotta.",
    portata: "Fino a 2.500 kg",
    image: "/images/catalog/transpallet-elettrici.png",
    alt: "Transpallet elettrico CAT®",
  },
  {
    title: "Carrelli Stoccatori",
    description: "Stoccaggio in altezza con precisione millimetrica. Progettati per corsie strette e scaffalature intensive.",
    portata: "Fino a 2.000 kg",
    image: "/images/catalog/stoccatori.png",
    alt: "Stoccatore elettrico CAT® con montante",
  },
  {
    title: "Carrelli Retrattili",
    description: "Per chi lavora in spazi ridotti con carichi importanti. Sollevamento fino a 13 metri in corsie da 2,5 m.",
    portata: "Fino a 2.500 kg",
    image: "/images/catalog/retrattili.png",
    alt: "Carrello retrattile CAT® vista laterale",
  },
  {
    title: "Controbilanciati Elettrici",
    description: "Potenza senza emissioni. La scelta per chi opera in ambienti chiusi o ha obiettivi di sostenibilità.",
    portata: "Da 1,4 a 5,5 ton",
    image: "/images/catalog/controbilanciati-elettrici.png",
    alt: "Carrello controbilanciato elettrico CAT® a 4 ruote",
  },
  {
    title: "Controbilanciati Diesel",
    description: "Per carichi pesanti e uso intensivo all'aperto. Affidabilità in qualsiasi condizione operativa.",
    portata: "Da 2,0 a 10 ton",
    image: "/images/catalog/controbilanciati-diesel.png",
    alt: "Carrello controbilanciato diesel CAT® heavy-duty",
  },
  {
    title: "Commissionatori",
    description: "Picking rapido e preciso. Configurazioni orizzontali e verticali per ogni layout di magazzino.",
    portata: "Fino a 1.500 kg",
    image: "/images/catalog/commissionatori.png",
    alt: "Commissionatore CAT® per picking in magazzino",
  },
  {
    title: "Carrelli Usati Garantiti",
    description: "Revisionati dai nostri tecnici, consegnati con garanzia. Il modo più conveniente per ampliare la flotta.",
    portata: "Varie portate",
    image: "/images/catalog/carrelli-usati.png",
    alt: "Selezione carrelli elevatori usati revisionati",
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
                <div className="group bg-white border border-gray-100 hover:border-brand-accent/30 rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-gray-100/50 h-full flex flex-col">
                  <div className="aspect-square bg-brand-light flex items-center justify-center p-6 overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.alt}
                      width={400}
                      height={400}
                      className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
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
                      <Link
                        href="/contatti"
                        className="text-brand-accent hover:text-brand-accent-hover text-sm font-medium group-hover:underline"
                      >
                        Info →
                      </Link>
                    </div>
                  </div>
                </div>
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
