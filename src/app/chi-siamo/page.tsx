import BreadcrumbSchema from "@/components/BreadcrumbSchema";
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
  title: "Dealer CAT® Lift Trucks Sassuolo dal 1994",
  description:
    "Nuova T.C.M. Service: dealer ufficiale CAT® Lift Trucks dal 1994. Assistenza, noleggio e riparazione carrelli elevatori in Emilia-Romagna.",
};

const timeline = [
  {
    year: "1994",
    title: "La Fondazione",
    description:
      "Nasce Nuova T.C.M. Service a Sassuolo, nel cuore del distretto ceramico, con l'obiettivo di servire l'industria manifatturiera locale.",
  },
  {
    year: "2000",
    title: "Dealer CAT®",
    description:
      "Diventiamo dealer ufficiale CAT® Lift Trucks, consolidando la partnership con uno dei leader mondiali nella movimentazione industriale.",
  },
  {
    year: "2010",
    title: "Copertura Regionale",
    description:
      "Il servizio si estende a tutta l'Emilia-Romagna, mantenendo la qualità e i tempi di risposta che ci contraddistinguono.",
  },
  {
    year: "Oggi",
    title: "Punto di Riferimento",
    description:
      "Oltre 500 clienti attivi e un team di tecnici specializzati al servizio dell'industria emiliana.",
  },
];

const values = [
  {
    icon: Zap,
    title: "Reattività",
    description:
      "Ogni ora di fermo è un costo concreto. I nostri tempi di intervento sono costruiti attorno a questa consapevolezza.",
  },
  {
    icon: Handshake,
    title: "Rapporto Diretto",
    description:
      "Siamo una PMI per scelta. Il vostro referente è la stessa persona che coordina l'intervento e risponde al telefono.",
  },
  {
    icon: Target,
    title: "Specializzazione",
    description:
      "Trent'anni nel settore ci hanno insegnato che ogni impianto ha esigenze specifiche. Le soluzioni standard non bastano.",
  },
  {
    icon: Award,
    title: "Qualità Certificata",
    description:
      "Ricambi originali, manutenzione certificata, garanzia documentata su ogni intervento.",
  },
];

export default function ChiSiamo() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", href: "/" },
        { name: "Chi Siamo", href: "/chi-siamo" },
      ]} />
      {/* HERO */}
      <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(184,122,10,0.06),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection>
            <p className="font-mono text-brand-accent text-xs tracking-[0.2em] uppercase mb-4">
              Chi Siamo
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 max-w-3xl">
              Dal 1994, al servizio dell&apos;industria emiliana
            </h1>
            <p className="text-brand-text-muted text-lg max-w-2xl leading-relaxed">
              Dealer ufficiale CAT® Lift Trucks con sede a Sassuolo.
              Assistenza, gestione flotta e batterie industriali per le aziende
              manifatturiere dell&apos;Emilia-Romagna.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* STORIA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="font-mono text-brand-accent text-xs tracking-[0.2em] uppercase mb-3">
                La nostra storia
              </p>
              <h2 className="font-display text-3xl font-bold text-brand-elevated mb-6">
                Nati dove l&apos;industria è di casa
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sassuolo non è solo ceramica. È un ecosistema industriale dove
                ogni azienda ha bisogno di movimentare, spostare, sollevare.
                Nuova T.C.M. Service è nata qui, tra i capannoni e le linee di
                produzione, imparando sul campo cosa serve a un&apos;impresa che
                lavora.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                In oltre trent&apos;anni abbiamo costruito relazioni durature con
                centinaia di aziende del distretto ceramico e manifatturiero,
                mettendo sempre al primo posto la rapidità di intervento e il
                rapporto diretto con i nostri clienti.
              </p>
              <p className="text-gray-600 leading-relaxed">
                La nostra dimensione è una scelta. Nessun ticket, nessun call
                center. Quando ci chiamate, rispondiamo noi.
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
      <section className="py-24 bg-brand-light">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="font-mono text-brand-accent text-xs tracking-[0.2em] uppercase mb-3">
                Il percorso
              </p>
              <h2 className="font-display text-3xl font-bold text-brand-elevated">
                Le tappe fondamentali
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.1}>
                <div className="flex gap-6 sm:gap-10">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center shrink-0">
                      <Calendar size={20} className="text-white" />
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px h-full bg-gray-200 my-2" />
                    )}
                  </div>
                  <div className="pb-12">
                    <p className="font-mono font-medium text-brand-accent text-sm mb-1">
                      {item.year}
                    </p>
                    <h3 className="font-display text-xl font-semibold text-brand-elevated mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-md">
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="font-mono text-brand-accent text-xs tracking-[0.2em] uppercase mb-3">
                I nostri valori
              </p>
              <h2 className="font-display text-3xl font-bold text-brand-elevated">
                Cosa ci guida ogni giorno
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.08}>
                <div className="text-center p-6">
                  <div className="w-14 h-14 bg-brand-dark rounded-xl flex items-center justify-center mx-auto mb-5">
                    <value.icon size={24} className="text-brand-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-semibold text-brand-elevated mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white mb-6">
              Volete conoscerci di persona?
            </h2>
            <p className="text-brand-text-muted mb-8 leading-relaxed">
              Venite a trovarci a Sassuolo o contattateci per una consulenza tecnica.
            </p>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold px-8 py-4 rounded-lg transition-colors group"
            >
              Contattateci
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
