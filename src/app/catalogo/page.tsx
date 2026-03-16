import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Catalogo Carrelli Elevatori",
  description:
    "Scopri la gamma completa di carrelli elevatori CAT® Lift Trucks: transpallet, stoccatori, retrattili, controbilanciati. Nuovi e usati, disponibili a Sassuolo.",
};

const categories = [
  {
    title: "Transpallet Manuali",
    description: "Soluzioni essenziali per la movimentazione leggera. Robusti, affidabili, zero manutenzione.",
    portata: "Fino a 2.500 kg",
    image: "Transpallet manuale CAT®",
  },
  {
    title: "Transpallet Elettrici",
    description: "Movimentazione efficiente per magazzini ad alto volume. Batteria a lunga durata.",
    portata: "Fino a 2.500 kg",
    image: "Transpallet elettrico con operatore",
  },
  {
    title: "Carrelli Stoccatori",
    description: "Stoccaggio in altezza con precisione. Ideali per corsie strette e scaffalature compatte.",
    portata: "Fino a 2.000 kg",
    image: "Stoccatore elettrico in magazzino",
  },
  {
    title: "Carrelli Retrattili",
    description: "Massima efficienza in corsie strette. Altezze di sollevamento fino a 13 metri.",
    portata: "Fino a 2.500 kg",
    image: "Carrello retrattile in corsia",
  },
  {
    title: "Controbilanciati Elettrici",
    description: "Zero emissioni, massima potenza. La scelta green per l'industria moderna.",
    portata: "Da 1,4 a 5,5 ton",
    image: "Controbilanciato elettrico CAT®",
  },
  {
    title: "Controbilanciati Diesel",
    description: "Potenza senza compromessi per carichi pesanti e uso intensivo all'aperto.",
    portata: "Da 2,0 a 10 ton",
    image: "Controbilanciato diesel al lavoro",
  },
  {
    title: "Commissionatori",
    description: "Picking veloce e preciso. Orizzontali e verticali per ogni configurazione di magazzino.",
    portata: "Fino a 1.500 kg",
    image: "Commissionatore in magazzino",
  },
  {
    title: "Carrelli Usati Garantiti",
    description: "Revisionati dai nostri tecnici con garanzia inclusa. Il miglior rapporto qualità-prezzo.",
    portata: "Varie portate",
    image: "Selezione carrelli usati revisionati",
  },
];

export default function Catalogo() {
  return (
    <>
      {/* HERO */}
      <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(184,122,10,0.06),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <p className="text-brand-accent font-mono text-xs tracking-[0.2em] uppercase mb-4">
              Catalogo
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 max-w-3xl">
              Carrelli elevatori{" "}
              <span className="text-brand-accent">CAT® Lift Trucks</span>
            </h1>
            <p className="text-brand-text-muted text-lg max-w-2xl leading-relaxed">
              Una soluzione per ogni esigenza di movimentazione. Nuovi, usati e a
              noleggio, tutti con assistenza e ricambi garantiti.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* GRIGLIA CATEGORIE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.title} delay={i * 0.05}>
                <div className="group bg-white border border-gray-100 hover:border-brand-accent/30 rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-gray-100/50 h-full flex flex-col">
                  <ImagePlaceholder
                    label={cat.image}
                    aspect="square"
                    className="rounded-none"
                  />
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-brand-elevated mb-4">
              Non trovi quello che cerchi?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Contattateci con le vostre specifiche e vi proponiamo il carrello
              più adatto: nuovo, usato o a noleggio.
            </p>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-brand-elevated font-semibold px-8 py-4 rounded-lg transition-all hover:shadow-xl hover:shadow-brand-accent/20 group"
            >
              Chiedi una Consulenza
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
