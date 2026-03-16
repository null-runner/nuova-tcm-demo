import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Handshake,
  Zap,
  Award,
  Calendar,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Chi Siamo",
  description:
    "Nuova T.C.M. Service: oltre 30 anni di esperienza nella vendita, noleggio e riparazione carrelli elevatori a Sassuolo, nel cuore del distretto ceramico.",
};

const timeline = [
  {
    year: "1994",
    title: "La Fondazione",
    description:
      "Nasce Nuova T.C.M. Service nel cuore del distretto ceramico di Sassuolo, con la missione di servire l'industria locale.",
  },
  {
    year: "2000",
    title: "Dealer CAT®",
    description:
      "Diventiamo dealer ufficiale CAT® Lift Trucks, consolidando la partnership con uno dei leader mondiali nella movimentazione.",
  },
  {
    year: "2010",
    title: "Espansione Nazionale",
    description:
      "Il servizio si estende a tutto il territorio nazionale, mantenendo la qualità e la tempestività che ci contraddistinguono.",
  },
  {
    year: "Oggi",
    title: "Punto di Riferimento",
    description:
      "Oltre 500 clienti attivi e una squadra di tecnici specializzati al servizio dell'industria italiana.",
  },
];

const values = [
  {
    icon: Zap,
    title: "Tempestività",
    description:
      "Ogni ora di fermo macchina è un costo. Interveniamo con rapidità perché conosciamo il valore del tuo tempo.",
  },
  {
    icon: Handshake,
    title: "Rapporto Umano",
    description:
      "Siamo una PMI e ci teniamo a esserlo. Conosci il tuo referente, parli con chi decide, risolvi con chi opera.",
  },
  {
    icon: Target,
    title: "Precisione",
    description:
      "30 anni nel settore ci hanno insegnato che ogni azienda ha esigenze diverse. Le soluzioni standard non bastano.",
  },
  {
    icon: Award,
    title: "Qualità Certificata",
    description:
      "Ricambi originali, manutenzione certificata, garanzia su ogni intervento. La qualità non è negoziabile.",
  },
];

export default function ChiSiamo() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,166,35,0.06),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <p className="text-safety-yellow font-semibold text-sm uppercase tracking-wider mb-4">
              Chi Siamo
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 max-w-3xl">
              Oltre 30 anni di passione per la{" "}
              <span className="text-safety-yellow">movimentazione industriale</span>
            </h1>
            <p className="text-navy-300 text-lg max-w-2xl leading-relaxed">
              Dal cuore di Ceramicland, serviamo l&apos;industria italiana con
              competenza, velocità e un rapporto diretto che solo una PMI può
              offrire.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* STORIA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-safety-amber font-semibold text-sm uppercase tracking-wider mb-3">
                La nostra storia
              </p>
              <h2 className="font-display text-3xl font-bold text-navy-950 mb-6">
                Nati dove l&apos;industria è di casa
              </h2>
              <p className="text-navy-600 leading-relaxed mb-4">
                Sassuolo non è solo ceramica. È un ecosistema industriale dove
                ogni azienda ha bisogno di movimentare, spostare, sollevare.
                Nuova T.C.M. Service è nata qui, in mezzo ai capannoni e alle
                linee di produzione, imparando sul campo cosa serve davvero a
                un&apos;impresa che lavora.
              </p>
              <p className="text-navy-600 leading-relaxed mb-4">
                In oltre 30 anni abbiamo costruito relazioni durature con centinaia
                di aziende — dal piccolo laboratorio artigianale alla grande
                industria ceramica — perché abbiamo sempre messo la tempestività
                e il rapporto umano al primo posto.
              </p>
              <p className="text-navy-600 leading-relaxed">
                Essere piccoli è la nostra forza: nessun ticket, nessun call
                center. Quando ci chiami, rispondiamo noi.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <ImagePlaceholder
                label="Il team TCM al lavoro nel magazzino"
                className="rounded-2xl"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-navy-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-safety-amber font-semibold text-sm uppercase tracking-wider mb-3">
                Il percorso
              </p>
              <h2 className="font-display text-3xl font-bold text-navy-950">
                Le tappe fondamentali
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.1}>
                <div className="flex gap-6 sm:gap-10">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-safety-yellow rounded-xl flex items-center justify-center shrink-0">
                      <Calendar size={20} className="text-navy-950" />
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px h-full bg-navy-200 my-2" />
                    )}
                  </div>
                  <div className="pb-12">
                    <p className="font-display font-bold text-safety-amber text-sm mb-1">
                      {item.year}
                    </p>
                    <h3 className="font-display text-xl font-semibold text-navy-950 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-navy-600 text-sm leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* VALORI */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-safety-amber font-semibold text-sm uppercase tracking-wider mb-3">
                I nostri valori
              </p>
              <h2 className="font-display text-3xl font-bold text-navy-950">
                Cosa ci guida ogni giorno
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.08}>
                <div className="text-center p-6">
                  <div className="w-14 h-14 bg-navy-950 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <value.icon size={24} className="text-safety-yellow" />
                  </div>
                  <h3 className="font-display font-semibold text-navy-950 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white mb-6">
              Vuoi conoscerci di persona?
            </h2>
            <p className="text-navy-300 mb-8 leading-relaxed">
              Vieni a trovarci a Sassuolo o contattaci per una consulenza gratuita.
            </p>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 bg-safety-yellow hover:bg-safety-amber text-navy-950 font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-safety-yellow/20 group"
            >
              Contattaci
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
