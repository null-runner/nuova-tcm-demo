import type { Metadata } from "next";
import Link from "next/link";
import {
  Truck,
  Wrench,
  Battery,
  ClipboardCheck,
  ArrowRight,
  Check,
  RotateCw,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "Vendita, noleggio a breve e lungo termine, riparazione e assistenza carrelli elevatori. Batterie industriali e navette automatiche. Sassuolo, Modena.",
};

const serviceBlocks = [
  {
    id: "vendita",
    icon: Truck,
    title: "Vendita e Noleggio",
    subtitle: "Carrelli nuovi e usati CAT® Lift Trucks",
    description:
      "Offriamo una gamma completa di carrelli elevatori CAT® Lift Trucks — dai transpallet ai controbilanciati termici. Ogni carrello viene consegnato revisionato e con garanzia.",
    features: [
      "Transpallet manuali ed elettrici",
      "Carrelli stoccatori e commissionatori",
      "Carrelli retrattili e trilaterali",
      "Controbilanciati elettrici e diesel",
      "Noleggio a breve termine (da 1 giorno)",
      "Noleggio a lungo termine con manutenzione inclusa",
    ],
    image: "Carrelli CAT® in esposizione",
  },
  {
    id: "riparazione",
    icon: Wrench,
    title: "Riparazione e Assistenza",
    subtitle: "Manutenzione ordinaria e straordinaria multimarca",
    description:
      "Il nostro team di tecnici specializzati interviene direttamente presso la tua sede per ridurre al minimo i tempi di fermo. Lavoriamo su tutti i marchi con ricambi originali.",
    features: [
      "Assistenza in sede e fuori sede",
      "Manutenzione programmata",
      "Riparazioni d'emergenza entro 24h",
      "Ricambi originali e compatibili",
      "Revisioni periodiche certificate",
      "Contratti di manutenzione personalizzati",
    ],
    image: "Tecnico al lavoro su un carrello elevatore",
  },
  {
    id: "batterie",
    icon: Battery,
    title: "Batterie Industriali",
    subtitle: "Vendita, manutenzione e rigenerazione",
    description:
      "Le batterie sono il cuore dei carrelli elettrici. Offriamo un servizio completo: dalla vendita di batterie nuove alla rigenerazione delle esistenti, con analisi diagnostica inclusa.",
    features: [
      "Batterie al piombo-acido e al litio",
      "Rigenerazione e ricondizionamento",
      "Analisi diagnostica e test di capacità",
      "Caricabatterie industriali",
      "Manutenzione preventiva",
      "Navette automatiche e sistemi AGV",
    ],
    image: "Batterie industriali e stazione di ricarica",
  },
];

export default function Servizi() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,166,35,0.06),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <p className="text-safety-yellow font-semibold text-sm uppercase tracking-wider mb-4">
              Servizi
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 max-w-3xl">
              Un unico partner per tutta la{" "}
              <span className="text-safety-yellow">tua flotta</span>
            </h1>
            <p className="text-navy-300 text-lg max-w-2xl leading-relaxed">
              Vendita, noleggio, riparazione e batterie: gestiamo ogni aspetto
              dei tuoi carrelli elevatori perché tu possa concentrarti sul tuo
              business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICE BLOCKS */}
      {serviceBlocks.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 ${i % 2 === 0 ? "bg-white" : "bg-navy-50/50"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                i % 2 !== 0 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <AnimatedSection className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                <ImagePlaceholder
                  label={service.image}
                  className="rounded-2xl"
                />
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-safety-yellow/10 rounded-xl flex items-center justify-center">
                    <service.icon size={24} className="text-safety-amber" />
                  </div>
                  <p className="text-safety-amber font-semibold text-sm uppercase tracking-wider">
                    {service.subtitle}
                  </p>
                </div>

                <h2 className="font-display text-3xl font-bold text-navy-950 mb-4">
                  {service.title}
                </h2>

                <p className="text-navy-600 leading-relaxed mb-8">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={18}
                        className="text-safety-amber shrink-0 mt-0.5"
                      />
                      <span className="text-navy-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contatti"
                  className="inline-flex items-center gap-2 bg-navy-950 hover:bg-navy-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors group"
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
      <section className="py-24 bg-navy-950 relative grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-safety-yellow font-semibold text-sm uppercase tracking-wider mb-3">
                Come lavoriamo
              </p>
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                Dal primo contatto alla soluzione
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: ClipboardCheck,
                title: "Analisi",
                desc: "Ascoltiamo le tue esigenze e valutiamo la soluzione più adatta.",
              },
              {
                step: "02",
                icon: Truck,
                title: "Proposta",
                desc: "Ti presentiamo le opzioni — vendita, noleggio o usato — con preventivo chiaro.",
              },
              {
                step: "03",
                icon: Wrench,
                title: "Consegna",
                desc: "Carrello revisionato e consegnato presso la tua sede, pronto all'uso.",
              },
              {
                step: "04",
                icon: RotateCw,
                title: "Assistenza",
                desc: "Manutenzione continua e interventi rapidi per tutta la durata del servizio.",
              },
            ].map((item, j) => (
              <AnimatedSection key={item.step} delay={j * 0.1}>
                <div className="text-center">
                  <p className="font-display text-5xl font-bold text-navy-800 mb-4">
                    {item.step}
                  </p>
                  <div className="w-12 h-12 bg-safety-yellow/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon size={22} className="text-safety-yellow" />
                  </div>
                  <h3 className="font-display font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-navy-400 text-sm leading-relaxed">
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-navy-950 mb-6">
              Pronto a ottimizzare la tua flotta?
            </h2>
            <p className="text-navy-600 mb-8 leading-relaxed">
              Contattaci per una consulenza gratuita. Analizziamo le tue
              esigenze e ti proponiamo la soluzione migliore.
            </p>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 bg-safety-yellow hover:bg-safety-amber text-navy-950 font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-safety-yellow/20 group"
            >
              Richiedi un Preventivo Gratuito
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
