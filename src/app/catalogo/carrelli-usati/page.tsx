import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Carrelli Elevatori Usati Garantiti",
  description:
    "Carrelli elevatori usati revisionati e garantiti. CAT, Linde, Nissan, Still, Mitsubishi. Elettrici e diesel. Disponibili a Sassuolo, Emilia-Romagna.",
};

interface UsedModel {
  name: string;
  type: string;
  mast?: string;
  capacity_kg?: number;
  year?: number;
  ref?: string;
  status?: string;
  image: string;
}

const models: UsedModel[] = [
  { name: "CAT EP25ACN", type: "Electric", mast: "SIMPLEX 3300", image: "/images/catalog/carrelli-usati/cat-ep25acn.jpg" },
  { name: "CAT DP25N3", type: "Diesel", mast: "SIMPLEX 4500", image: "/images/catalog/carrelli-usati/cat-dp25n3.jpg" },
  { name: "CAT NPP16", type: "Electric", capacity_kg: 1600, image: "/images/catalog/carrelli-usati/cat-npp16.jpg" },
  { name: "LINDE H30D EVO", type: "Diesel", year: 2018, mast: "SIMPLEX 4500mm", image: "/images/catalog/carrelli-usati/linde-h30d-evo.jpg" },
  { name: "LINDE H30D", type: "Diesel", status: "In Arrivo", image: "/images/catalog/carrelli-usati/linde-h30d-2298.jpg" },
  { name: "Mitsubishi 25", type: "Electric", ref: "RIF 2968", mast: "SIMPLEX 5000mm", image: "/images/catalog/carrelli-usati/mitsubishi-25-2968.jpg" },
  { name: "Nissan 25", type: "Electric", ref: "RIF 2936", mast: "SIMPLEX 4000mm", image: "/images/catalog/carrelli-usati/nissan-25-2936.jpg" },
  { name: "Still 25", type: "Electric", ref: "RIF 2962", mast: "TRIPLEX 5150mm", image: "/images/catalog/carrelli-usati/still-25-2962.jpg" },
  { name: "Still R50-17", type: "Electric", mast: "TRIPLEX 6000mm", image: "/images/catalog/carrelli-usati/still-r50-17.jpg" },
  { name: "CAT EP30N", type: "Electric", mast: "SIMPLEX 4000mm", image: "/images/catalog/carrelli-usati/cat-ep30n.jpg" },
  { name: "Nissan 25", type: "Electric", ref: "RIF 2980", mast: "SIMPLEX 4500mm", image: "/images/catalog/carrelli-usati/nissan-25-2980.jpg" },
  { name: "Cesab BIT 10", type: "Electric", ref: "RIF 2891", mast: "TRIPLEX 5000mm", image: "/images/catalog/carrelli-usati/cesab-bit10.jpg" },
  { name: "Cesab ECO 40", type: "Electric", mast: "SIMPLEX 4000mm", image: "/images/catalog/carrelli-usati/cesab-eco40.jpg" },
  { name: "Lugli ELX 25", type: "Electric", ref: "RIF 2685", mast: "SIMPLEX 4000mm", image: "/images/catalog/carrelli-usati/lugli-elx25.jpg" },
  { name: "CAT DP25", type: "Diesel", ref: "RIF 56663", mast: "SIMPLEX 4500mm", image: "/images/catalog/carrelli-usati/cat-dp25-56663.jpg" },
  { name: "CAT DP30", type: "Diesel", ref: "RIF 05353", mast: "TRIPLEX 4800mm", image: "/images/catalog/carrelli-usati/cat-dp30-05353.jpg" },
  { name: "CAT DP30", type: "Diesel", ref: "RIF 05546", mast: "SIMPLEX 4500mm", image: "/images/catalog/carrelli-usati/cat-dp30-05546.jpg" },
  { name: "CAT DP35", type: "Diesel", mast: "SIMPLEX 4500mm", image: "/images/catalog/carrelli-usati/cat-dp35.jpg" },
  { name: "DP35NT", type: "Diesel", mast: "TRIPLEX 4500mm", image: "/images/catalog/carrelli-usati/dp35nt.jpg" },
  { name: "Nissan DX18", type: "Diesel", mast: "TRIPLEX 4350mm", image: "/images/catalog/carrelli-usati/nissan-dx18.jpg" },
  { name: "Nissan DX30", type: "Diesel", ref: "RIF 704000", mast: "SIMPLEX 4000mm", image: "/images/catalog/carrelli-usati/nissan-dx30-704000.jpg" },
  { name: "Nissan DX30", type: "Diesel", ref: "RIF 704019", mast: "SIMPLEX 4500mm", image: "/images/catalog/carrelli-usati/nissan-dx30-704019.jpg" },
  { name: "Nissan GN18HQ", type: "Diesel", mast: "TRIPLEX 4350mm", image: "/images/catalog/carrelli-usati/nissan-gn18hq.jpg" },
  { name: "Nissan 15", type: "Diesel", ref: "RIF 001792", mast: "TRIPLEX 4300mm", image: "/images/catalog/carrelli-usati/nissan-15-001792.jpg" },
  { name: "Nissan 18", type: "Diesel", ref: "RIF 2347", mast: "TRIPLEX 4500mm", image: "/images/catalog/carrelli-usati/nissan-18-2347.jpg" },
  { name: "LINDE T16", type: "Electric", image: "/images/catalog/carrelli-usati/linde-t16.jpg" },
  { name: "Lugli ELX 30", type: "Electric", mast: "SIMPLEX 4000mm", image: "/images/catalog/carrelli-usati/lugli-elx30.jpg" },
  { name: "Maximal FD30", type: "Diesel", mast: "SIMPLEX 4500mm", image: "/images/catalog/carrelli-usati/maximal-fd30.jpg" },
  { name: "Mitsubishi FB25", type: "Electric", mast: "TRIPLEX 4300mm", image: "/images/catalog/carrelli-usati/mitsubishi-fb25.jpg" },
  { name: "Lavapavimenti", type: "Electric", image: "/images/catalog/carrelli-usati/lavapavimenti.jpg" },
];

export default function CarrelliUsati() {
  return (
    <>
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
              Usato garantito
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Carrelli Usati Revisionati
            </h1>
            <p className="text-brand-text-muted text-lg max-w-2xl">
              Ogni carrello usato viene revisionato dai nostri tecnici e
              consegnato con garanzia. Multimarca: CAT, Linde, Nissan, Still,
              Mitsubishi, Cesab e altri.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-gray-500 text-sm mb-8">
            {models.length} veicoli disponibili. La disponibilità viene aggiornata periodicamente. Contattateci per confermare.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {models.map((model, i) => (
              <AnimatedSection
                key={`${model.name}-${i}`}
                delay={Math.min(i * 0.03, 0.3)}
              >
                <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-gray-100/50 transition-all group h-full flex flex-col">
                  <div className="aspect-[4/3] bg-brand-light overflow-hidden relative">
                    <Image
                      src={model.image}
                      alt={`${model.name} usato`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {model.status && (
                      <span className="absolute top-3 right-3 bg-brand-accent text-white text-xs font-medium px-2.5 py-1 rounded">
                        {model.status}
                      </span>
                    )}
                    <span
                      className={`absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded ${
                        model.type === "Diesel"
                          ? "bg-gray-800 text-white"
                          : "bg-green-600 text-white"
                      }`}
                    >
                      {model.type === "Electric" ? "Elettrico" : "Diesel"}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display font-semibold text-brand-elevated text-base mb-3">
                      {model.name}
                    </h3>
                    <div className="space-y-1.5 text-sm mb-4 flex-1">
                      {model.mast && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">Montante</span>
                          <span className="text-brand-elevated font-medium text-xs">
                            {model.mast}
                          </span>
                        </div>
                      )}
                      {model.capacity_kg && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">Portata</span>
                          <span className="text-brand-elevated font-medium">
                            {model.capacity_kg} kg
                          </span>
                        </div>
                      )}
                      {model.year && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">Anno</span>
                          <span className="text-brand-elevated font-medium">
                            {model.year}
                          </span>
                        </div>
                      )}
                      {model.ref && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">Rif.</span>
                          <span className="text-gray-400 text-xs">
                            {model.ref}
                          </span>
                        </div>
                      )}
                    </div>
                    <Link
                      href="/contatti"
                      className="w-full text-center bg-brand-elevated hover:bg-brand-dark text-white text-sm font-medium py-2.5 rounded-lg transition-colors block"
                    >
                      Richiedi disponibilità
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-2xl font-bold text-brand-elevated mb-4">
              Cercate un modello specifico?
            </h2>
            <p className="text-gray-600 mb-6">
              La disponibilità cambia continuamente. Contattateci con le vostre
              esigenze e vi comunichiamo cosa abbiamo in pronta consegna.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contatti"
                className="inline-flex items-center gap-2 bg-brand-elevated hover:bg-brand-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors group"
              >
                Richiedi informazioni
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="tel:+390536800034"
                className="inline-flex items-center justify-center gap-3 border border-gray-200 hover:border-gray-400 text-brand-elevated px-8 py-4 rounded-lg transition-colors"
              >
                <Phone size={15} className="text-brand-accent" />
                0536 800034
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
