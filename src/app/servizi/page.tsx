import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Truck,
  Wrench,
  Battery,
  Phone,
  Settings,
  ClipboardCheck,
  ArrowRight,
  Check,
  RotateCw,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Assistenza e Noleggio Carrelli Elevatori Sassuolo",
  description:
    "Riparazione, noleggio, acquisto carrelli elevatori, gestione flotta e batterie industriali in Emilia-Romagna. Dealer CAT® Lift Trucks dal 1994.",
};

const serviceBlocks = [
  {
    id: "riparazione",
    icon: Wrench,
    title: "Riparazione e Assistenza",
    subtitle: "Il nostro servizio principale",
    description:
      "Un veicolo fermo è una linea ferma. I nostri tecnici intervengono direttamente presso la vostra sede su carrelli elevatori, AGV e LGV, con ricambi originali. Offriamo contratti di manutenzione programmata per ridurre i fermi imprevisti e tenere i costi sotto controllo.",
    features: [
      "Intervento in sede e fuori sede su tutta l'Emilia-Romagna",
      "Manutenzione programmata con calendario concordato",
      "Assistenza d'emergenza con tempo medio di risposta 24h",
      "Ricambi originali CAT® e compatibili multimarca",
      "Assistenza su carrelli elevatori, AGV e LGV (Laser Guided Vehicle)",
      "Contratti personalizzati per flotte di qualsiasi dimensione",
    ],
    image: "Tecnico al lavoro su un carrello elevatore",
  },
  {
    id: "gestione-flotta",
    icon: Settings,
    title: "Gestione Flotta",
    subtitle: "Analisi tecnica e ottimizzazione",
    description:
      "Monitoriamo lo stato dei vostri veicoli e delle batterie per aiutarvi a pianificare interventi e sostituzioni. Forniamo i dati per prendere decisioni informate su riparazione, sostituzione o ammodernamento della flotta.",
    features: [
      "Mappatura completa dello stato della flotta",
      "Analisi cicli batteria e previsione vita utile",
      "Piano di manutenzione preventiva personalizzato",
      "Ottimizzazione dei costi operativi della movimentazione",
      "Report periodici sullo stato dei veicoli",
      "Consulenza per transizione a flotte elettriche o LGV",
    ],
    image: "Dashboard gestione flotta con dati veicoli",
  },
  {
    id: "vendita",
    icon: Truck,
    title: "Acquisto e Noleggio",
    subtitle: "Carrelli nuovi e usati CAT® Lift Trucks",
    description:
      "Dalla scelta del mezzo alla consegna in stabilimento. Carrelli CAT® Lift Trucks nuovi e usati, noleggio a breve termine per gestire i picchi di lavoro, lungo termine con manutenzione inclusa per chi preferisce costi fissi e prevedibili.",
    features: [
      "Gamma completa CAT® Lift Trucks: transpallet, stoccatori, retrattili, controbilanciati",
      "Carrelli usati revisionati con garanzia",
      "Noleggio a breve termine (anche da 1 giorno)",
      "Noleggio a lungo termine con manutenzione inclusa",
      "Consegna e messa in servizio presso la vostra sede",
      "Consulenza tecnica per la scelta del mezzo più adatto",
    ],
    image: "Carrelli CAT® Lift Trucks in esposizione",
  },
  {
    id: "batterie",
    icon: Battery,
    title: "Batterie Industriali",
    subtitle: "Analisi, manutenzione e fornitura",
    description:
      "La batteria è il componente più sottovalutato della flotta. Analizziamo lo stato di salute delle vostre batterie, rigeneriamo quelle recuperabili e forniamo quelle nuove. Qualsiasi tecnologia e qualsiasi veicolo: carrelli, AGV, LGV.",
    features: [
      "Analisi diagnostica e test di capacità",
      "Rigenerazione e ricondizionamento batterie esistenti",
      "Fornitura batterie nuove: piombo-acido e litio",
      "Caricabatterie industriali",
      "Manutenzione preventiva programmata",
      "Compatibilità con AGV, LGV e navette automatiche",
    ],
    image: "Batterie industriali e stazione di ricarica",
  },
];

export default function Servizi() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", href: "/" },
        { name: "Servizi", href: "/servizi" },
      ]} />
      {/* HERO */}
      <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(184,122,10,0.06),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection>
            <p className="font-mono text-brand-accent text-xs tracking-[0.2em] uppercase mb-4">
              Servizi
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 max-w-3xl">
              Meno fermi, meno fornitori, meno sorprese
            </h1>
            <p className="text-brand-text-muted text-lg max-w-2xl leading-relaxed">
              Riparazione, gestione flotta, batterie e ricambi. Un unico
              interlocutore per tutta la vostra movimentazione industriale.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICE BLOCKS */}
      {serviceBlocks.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 ${i % 2 === 0 ? "bg-white" : "bg-brand-light"}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                i % 2 !== 0 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <AnimatedSection className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                <ImagePlaceholder
                  label={service.image}
                  className="rounded-xl"
                />
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center">
                    <service.icon size={24} className="text-brand-accent" strokeWidth={1.5} />
                  </div>
                  <p className="font-mono text-brand-accent text-xs tracking-[0.2em] uppercase">
                    {service.subtitle}
                  </p>
                </div>

                <h2 className="font-display text-3xl font-bold text-brand-elevated mb-4">
                  {service.title}
                </h2>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={18}
                        className="text-brand-accent shrink-0 mt-0.5"
                        strokeWidth={1.5}
                      />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contatti"
                  className="inline-flex items-center gap-2 bg-brand-elevated hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors group"
                >
                  Richiedi informazioni
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* PROCESSO */}
      <section className="py-24 bg-brand-dark relative grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="font-mono text-brand-accent text-xs tracking-[0.2em] uppercase mb-3">
                Come lavoriamo
              </p>
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                Quattro passaggi, zero complicazioni
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: Phone,
                title: "Contatto",
                desc: "Chiamateci o compilate il modulo. Vi rispondiamo direttamente noi.",
              },
              {
                step: "02",
                icon: ClipboardCheck,
                title: "Valutazione",
                desc: "Analizziamo la vostra situazione e vi presentiamo un preventivo dettagliato.",
              },
              {
                step: "03",
                icon: Settings,
                title: "Esecuzione",
                desc: "Interveniamo con i tempi e le modalità concordate.",
              },
              {
                step: "04",
                icon: RotateCw,
                title: "Continuità",
                desc: "Manutenzione programmata e assistenza continua per prevenire i fermi.",
              },
            ].map((item, j) => (
              <AnimatedSection key={item.step} delay={j * 0.1}>
                <div className="text-center">
                  <p className="font-display text-5xl font-bold text-brand-muted mb-4">
                    {item.step}
                  </p>
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon size={22} className="text-brand-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-brand-text-muted text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-brand-elevated mb-6">
              Avete una flotta da gestire? Parliamone.
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Contattateci per una valutazione tecnica. Vi diciamo cosa possiamo
              fare per la vostra situazione specifica.
            </p>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 bg-brand-elevated hover:bg-brand-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors group"
            >
              Richiedi una valutazione
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
