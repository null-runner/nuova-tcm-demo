import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  Wrench,
  Battery,
  Clock,
  Phone,
  ArrowRight,
  ChevronRight,
  AlertTriangle,
  Users,
  BarChart3,
  Cog,
  ClipboardCheck,
  RotateCw,
  Package,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GoogleReviews from "@/components/GoogleReviews";

export const metadata: Metadata = {
  title: "Assistenza Carrelli Elevatori Sassuolo | Nuova T.C.M. Service",
  description:
    "Riparazioni entro 24h, gestione flotta, batterie industriali. Dealer Cat® Lift Trucks a Sassuolo dal 1994. Un referente per tutta la tua flotta. Chiama: 0536 800034.",
};

const stats = [
  { value: "30+", label: "Anni nel settore" },
  { value: "500+", label: "Clienti attivi" },
  { value: "24h", label: "Tempo max intervento" },
  { value: "1", label: "Referente per la tua flotta" },
];

const painPoints = [
  {
    icon: Clock,
    title: "Il tuo fornitore risponde dopo 48 ore",
    description:
      "Ogni carrello fermo blocca una linea. Ogni linea ferma costa. E intanto aspetti che qualcuno ti richiami. Noi interveniamo entro 24 ore — perché siamo a Sassuolo, non a 200 km.",
  },
  {
    icon: Users,
    title: "Per ogni cosa chiami qualcuno diverso",
    description:
      "Tre fornitori, tre contratti, tre tempi di risposta. Noi gestiamo carrelli, batterie e ricambi con un unico referente. Una chiamata, un preventivo, un responsabile che conosce la tua flotta.",
  },
  {
    icon: BarChart3,
    title: "Sostituisci a sensazione, non a dati",
    description:
      "Quanti cicli ha quella batteria? Quel carrello conviene ripararlo o sostituirlo? Senza un'analisi tecnica della flotta, ogni decisione è un tiro al buio. Noi facciamo l'audit.",
  },
];

const services = [
  {
    icon: Wrench,
    title: "Riparazioni e Assistenza",
    description:
      "Intervento entro 24 ore, in sede o fuori sede. Manutenzione ordinaria, straordinaria, multimarca. Contratti su misura per flotte da 10 a 200+ veicoli.",
    href: "/servizi#riparazione",
    priority: true,
  },
  {
    icon: Cog,
    title: "Gestione Flotta",
    description:
      "Analisi tecnica della tua flotta veicoli e batterie. Mappatura dello stato, piano di manutenzione preventiva, ottimizzazione dei costi.",
    href: "/servizi#gestione-flotta",
  },
  {
    icon: Truck,
    title: "Vendita e Noleggio",
    description:
      "Carrelli Cat® Lift Trucks, nuovi e usati. Noleggio a breve termine per i picchi, lungo termine con manutenzione inclusa.",
    href: "/servizi#vendita",
  },
  {
    icon: Battery,
    title: "Batterie Industriali",
    description:
      "Piombo-acido, litio, qualsiasi tecnologia. Analisi di capacità, rigenerazione, manutenzione, fornitura.",
    href: "/servizi#batterie",
  },
  {
    icon: Package,
    title: "Ricambi",
    description:
      "Fornitura ricambi originali e compatibili multimarca. Disponibilità a magazzino per i componenti più richiesti.",
    href: "/contatti",
  },
];

const steps = [
  {
    step: "01",
    icon: Phone,
    title: "Chiamata",
    desc: "Ci contatti, rispondiamo noi — non un centralino.",
  },
  {
    step: "02",
    icon: ClipboardCheck,
    title: "Analisi",
    desc: "Valutiamo il problema e proponiamo la soluzione.",
  },
  {
    step: "03",
    icon: Wrench,
    title: "Intervento",
    desc: "Siamo da te entro 24 ore con ricambi e attrezzatura.",
  },
  {
    step: "04",
    icon: RotateCw,
    title: "Presidio",
    desc: "Manutenzione continua. Preveniamo il prossimo fermo.",
  },
];

export default function Home() {
  return (
    <>
      {/* ══════ HERO ══════ */}
      <section className="relative min-h-[92vh] flex items-center bg-navy-950 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-forklift.jpg"
            alt="Carrello elevatore Cat® in azione in un magazzino industriale ceramico"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40" />
        </div>

        {/* Amber accent line bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-safety-yellow via-safety-amber to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-safety-yellow/10 border border-safety-yellow/30 rounded-full px-4 py-1.5 mb-8">
              <AlertTriangle size={14} className="text-safety-yellow" />
              <span className="text-sm text-safety-yellow font-medium">
                Dealer ufficiale Cat® Lift Trucks
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-6">
              Ogni ora di fermo ti costa migliaia di euro.{" "}
              <span className="text-safety-yellow">
                Noi interveniamo entro 24 ore.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-navy-300 max-w-2xl mb-10 leading-relaxed">
              Assistenza carrelli elevatori, gestione flotta e batterie
              industriali nel distretto ceramico. Da Sassuolo, dove lavori tu.
            </p>

            {/* CTA group */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contatti"
                className="inline-flex items-center justify-center gap-2 bg-safety-yellow hover:bg-safety-amber text-navy-950 font-bold px-8 py-4 rounded-xl text-base transition-all hover:shadow-xl hover:shadow-safety-yellow/20 group"
              >
                Richiedi Intervento
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="tel:+390536800034"
                className="inline-flex items-center justify-center gap-3 border-2 border-navy-500 hover:border-safety-yellow text-white px-8 py-4 rounded-xl text-base transition-all group"
              >
                <Phone
                  size={18}
                  className="text-safety-yellow group-hover:animate-pulse"
                />
                <span className="font-semibold">0536 800034</span>
              </a>
            </div>

            {/* Trust indicators inline */}
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-navy-400">
              <span>✓ Intervento entro 24h</span>
              <span>✓ Multimarca</span>
              <span>✓ Un solo referente</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ STATS BAR ══════ */}
      <section className="bg-navy-900 border-y border-navy-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <AnimatedSection key={stat.label}>
                <div className="text-center">
                  <p className="font-display text-3xl sm:text-4xl font-bold text-safety-yellow">
                    {stat.value}
                  </p>
                  <p className="text-navy-400 text-sm mt-1">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PAIN POINTS ══════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-2xl mb-14">
              <p className="text-safety-amber font-semibold text-sm uppercase tracking-wider mb-3">
                Problemi che conosci bene
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950">
                Se gestisci una flotta, li vivi ogni giorno
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((pain, i) => (
              <AnimatedSection key={pain.title} delay={i * 0.1}>
                <div className="bg-navy-50/70 border border-navy-100 rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-5">
                    <pain.icon size={22} className="text-red-500" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-navy-950 mb-3">
                    {pain.title}
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed">
                    {pain.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SERVIZI ══════ */}
      <section className="py-20 lg:py-24 bg-navy-950 relative grain overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-safety-yellow/[0.03] rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="max-w-2xl mb-14">
              <p className="text-safety-yellow font-semibold text-sm uppercase tracking-wider mb-3">
                Cosa facciamo, in concreto
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                Un unico partner per tutta la flotta
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.08}>
                <Link
                  href={service.href}
                  className={`group block rounded-2xl p-7 h-full transition-all duration-300 ${
                    service.priority
                      ? "bg-safety-yellow/10 border-2 border-safety-yellow/30 hover:border-safety-yellow/60"
                      : "bg-navy-900/60 border border-navy-800 hover:border-navy-600"
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center mb-5 ${
                      service.priority
                        ? "bg-safety-yellow/20"
                        : "bg-navy-800"
                    }`}
                  >
                    <service.icon
                      size={22}
                      className={
                        service.priority
                          ? "text-safety-yellow"
                          : "text-navy-400 group-hover:text-safety-yellow transition-colors"
                      }
                    />
                  </div>
                  <h3
                    className={`font-display text-lg font-semibold mb-2 ${
                      service.priority ? "text-safety-yellow" : "text-white"
                    }`}
                  >
                    {service.title}
                    {service.priority && (
                      <span className="ml-2 text-xs bg-safety-yellow/20 text-safety-yellow px-2 py-0.5 rounded-full font-medium align-middle">
                        Core
                      </span>
                    )}
                  </h3>
                  <p className="text-navy-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-navy-500 group-hover:text-safety-yellow transition-colors">
                    Dettagli
                    <ChevronRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ COME LAVORIAMO ══════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-safety-amber font-semibold text-sm uppercase tracking-wider mb-3">
                Come lavoriamo
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950">
                Dal primo contatto alla soluzione
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, j) => (
              <AnimatedSection key={item.step} delay={j * 0.1}>
                <div className="text-center relative">
                  <p className="font-display text-6xl font-bold text-navy-100 mb-4">
                    {item.step}
                  </p>
                  <div className="w-14 h-14 bg-navy-950 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon size={24} className="text-safety-yellow" />
                  </div>
                  <h3 className="font-display font-semibold text-navy-950 text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PERCHÉ NOI ══════ */}
      <section className="py-20 lg:py-24 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/repair-service.jpg"
                  alt="Tecnico specializzato al lavoro su un carrello elevatore"
                  width={672}
                  height={448}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="text-safety-amber font-semibold text-sm uppercase tracking-wider mb-3">
                Perché le industrie del distretto lavorano con noi
              </p>
              <h2 className="font-display text-3xl font-bold text-navy-950 mb-6">
                Non siamo solo fornitori. Siamo quelli che rispondono al primo squillo.
              </h2>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-navy-950 rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-safety-yellow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-950 mb-1">
                      Siamo a Sassuolo, non a 200 km
                    </h3>
                    <p className="text-navy-600 text-sm leading-relaxed">
                      Quando chiami, chi risponde è la stessa persona che viene a
                      ripararti il carrello. Non subappaltiamo.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-navy-950 rounded-lg flex items-center justify-center shrink-0">
                    <Wrench size={18} className="text-safety-yellow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-950 mb-1">
                      Tecnici formati da Cat®
                    </h3>
                    <p className="text-navy-600 text-sm leading-relaxed">
                      Dealer ufficiale con ricambi originali e formazione
                      certificata. Non siamo un&apos;officina generica.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-navy-950 rounded-lg flex items-center justify-center shrink-0">
                    <BarChart3 size={18} className="text-safety-yellow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-950 mb-1">
                      Approccio ingegneristico
                    </h3>
                    <p className="text-navy-600 text-sm leading-relaxed">
                      Analizziamo la tua flotta con dati, non a sensazione. Ti
                      diciamo cosa conviene riparare e cosa sostituire.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════ REVIEWS ══════ */}
      <GoogleReviews />

      {/* ══════ PARTNER BAR ══════ */}
      <section className="py-12 bg-white border-y border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-navy-500 text-xs uppercase tracking-widest mb-8">
            Partner e Certificazioni
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {[
              { name: "Cat® Lift Trucks", sub: "Dealer Ufficiale" },
              { name: "TCM", sub: "Rivenditore Autorizzato" },
              { name: "ISO 9001", sub: "Qualità Certificata" },
            ].map((p) => (
              <div
                key={p.name}
                className="px-6 py-3 bg-navy-50 rounded-xl border border-navy-100 text-center"
              >
                <p className="font-display font-bold text-navy-800 text-lg">
                  {p.name}
                </p>
                <p className="text-navy-500 text-xs">{p.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CTA FINALE ══════ */}
      <section className="py-20 lg:py-24 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ceramic-factory.jpg"
            alt="Interno di una fabbrica ceramica moderna"
            fill
            className="object-cover opacity-15"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/90 to-navy-950/70" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Parlaci della tua flotta
            </h2>
            <p className="text-navy-300 text-lg mb-10 leading-relaxed">
              Raccontaci quanti carrelli hai, che problemi stai affrontando. Ti
              facciamo un&apos;analisi gratuita e ti diciamo cosa possiamo fare
              — senza impegno, senza giri di parole.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contatti"
                className="inline-flex items-center justify-center gap-2 bg-safety-yellow hover:bg-safety-amber text-navy-950 font-bold px-8 py-4 rounded-xl text-base transition-all hover:shadow-xl hover:shadow-safety-yellow/20 group"
              >
                Richiedi un&apos;Analisi Gratuita
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="tel:+390536800034"
                className="inline-flex items-center justify-center gap-3 border-2 border-navy-600 hover:border-safety-yellow text-white px-8 py-4 rounded-xl text-base transition-all"
              >
                <Phone size={18} className="text-safety-yellow" />
                Chiama: 0536 800034
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
