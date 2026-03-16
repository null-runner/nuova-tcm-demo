import Link from "next/link";
import Image from "next/image";
import {
  Wrench,
  Truck,
  Battery,
  Cog,
  Package,
  Phone,
  ArrowRight,
  Clock,
  MapPin,
  Shield,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    icon: Wrench,
    label: "Assistenza",
    title: "Riparazioni e Manutenzione",
    description:
      "Intervento entro 24 ore, in sede o fuori sede. Manutenzione ordinaria e straordinaria, multimarca. Contratti personalizzati per flotte di qualsiasi dimensione.",
    href: "/servizi#riparazione",
    featured: true,
  },
  {
    icon: Cog,
    label: "Ingegneria",
    title: "Gestione Flotta",
    description:
      "Analisi tecnica della flotta veicoli e batterie. Piano di manutenzione preventiva e ottimizzazione dei costi operativi.",
    href: "/servizi#gestione-flotta",
  },
  {
    icon: Truck,
    label: "Fornitura",
    title: "Acquisto e Noleggio",
    description:
      "Carrelli Cat® Lift Trucks nuovi e usati. Noleggio a breve e lungo termine con manutenzione inclusa.",
    href: "/servizi#vendita",
  },
  {
    icon: Battery,
    label: "Energia",
    title: "Batterie Industriali",
    description:
      "Piombo-acido, litio, qualsiasi tecnologia. Analisi di capacita, rigenerazione, manutenzione e fornitura.",
    href: "/servizi#batterie",
  },
  {
    icon: Package,
    label: "Ricambi",
    title: "Fornitura Ricambi",
    description:
      "Ricambi originali e compatibili multimarca. Disponibilita a magazzino per i componenti piu richiesti.",
    href: "/contatti",
  },
];

const differentiators = [
  {
    icon: Clock,
    title: "Intervento in 24 ore",
    text: "Siamo a Sassuolo, nel cuore del distretto. Quando chiami, chi risponde e la stessa persona che viene a risolvere il problema.",
  },
  {
    icon: Shield,
    title: "Tecnici certificati Cat®",
    text: "Dealer ufficiale con formazione diretta in fabbrica e accesso a ricambi originali. Non siamo un'officina generica.",
  },
  {
    icon: MapPin,
    title: "Un referente, un contratto",
    text: "Carrelli, batterie, ricambi. Un unico interlocutore che conosce la tua flotta e i tuoi impianti.",
  },
];

export default function Home() {
  return (
    <>
      {/* ══════ HERO ══════ */}
      <section className="relative min-h-[92vh] flex items-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-forklift.jpg"
            alt="Carrello elevatore Cat® in operazione in un magazzino industriale"
            fill
            className="object-cover opacity-25"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/85 to-brand-dark/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-40">
          <div className="max-w-2xl">
            <p className="font-mono text-brand-accent text-xs tracking-[0.25em] uppercase mb-6">
              Dealer ufficiale Cat® Lift Trucks · Dal 1994
            </p>

            <h1 className="font-display text-[2.75rem] sm:text-[3.5rem] lg:text-[4.25rem] text-white leading-[1.08] mb-8">
              Assistenza carrelli elevatori nel distretto ceramico
            </h1>

            <p className="text-brand-text-muted text-lg max-w-xl mb-12 leading-relaxed">
              Riparazioni, gestione flotta e batterie industriali.
              Un unico referente per tutta la tua flotta, a Sassuolo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contatti"
                className="inline-flex items-center justify-center gap-3 bg-brand-accent hover:bg-brand-accent-hover text-white font-medium px-8 py-4 text-sm tracking-wide transition-colors group"
              >
                Parla con un Esperto
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="tel:+390536800034"
                className="inline-flex items-center justify-center gap-3 border border-white/15 hover:border-white/30 text-white px-8 py-4 text-sm tracking-wide transition-colors"
              >
                <Phone size={15} className="text-brand-accent" />
                0536 800034
              </a>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-brand-accent/40 via-brand-accent/20 to-transparent" />
      </section>

      {/* ══════ TRUST BAR ══════ */}
      <section className="bg-brand-surface border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "30+", label: "anni nel settore" },
              { value: "500+", label: "clienti attivi" },
              { value: "24h", label: "tempo max intervento" },
              { value: "Cat®", label: "dealer ufficiale" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-mono text-2xl sm:text-3xl text-white font-medium">
                  {stat.value}
                </p>
                <p className="text-brand-text-muted text-xs tracking-wider uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SERVIZI ══════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-xl mb-16">
              <p className="font-mono text-brand-accent text-xs tracking-[0.2em] uppercase mb-4">
                Servizi
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-brand-elevated leading-tight">
                Cosa facciamo, in concreto
              </h2>
            </div>
          </AnimatedSection>

          {/* Featured service */}
          <AnimatedSection>
            <Link
              href={services[0].href}
              className="group block bg-brand-dark relative overflow-hidden mb-8"
            >
              <div className="absolute inset-0">
                <Image
                  src="/images/repair-service.jpg"
                  alt="Tecnico al lavoro su un carrello elevatore"
                  fill
                  className="object-cover opacity-20 group-hover:opacity-25 transition-opacity duration-500"
                  sizes="100vw"
                />
              </div>
              <div className="relative grid lg:grid-cols-2 gap-8 p-10 lg:p-16">
                <div>
                  <p className="font-mono text-brand-accent text-xs tracking-[0.2em] uppercase mb-4">
                    {services[0].label}
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl text-white mb-4">
                    {services[0].title}
                  </h3>
                  <p className="text-brand-text-muted leading-relaxed mb-6 max-w-md">
                    {services[0].description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium tracking-wide group-hover:gap-3 transition-all">
                    Scopri di piu
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          </AnimatedSection>

          {/* Other services grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100">
            {services.slice(1).map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.08}>
                <Link
                  href={service.href}
                  className="group block bg-white p-8 lg:p-10 h-full hover:bg-brand-light transition-colors"
                >
                  <service.icon
                    size={20}
                    className="text-brand-accent mb-6"
                    strokeWidth={1.5}
                  />
                  <p className="font-mono text-brand-text-muted text-[10px] tracking-[0.2em] uppercase mb-2">
                    {service.label}
                  </p>
                  <h3 className="font-display text-xl text-brand-elevated mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PERCHE NOI ══════ */}
      <section className="py-24 lg:py-32 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection>
              <div className="relative">
                <Image
                  src="/images/warehouse-fleet.jpg"
                  alt="Flotta di carrelli elevatori in magazzino industriale"
                  width={672}
                  height={448}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-brand-dark px-6 py-4">
                  <p className="font-mono text-brand-accent text-xs tracking-wider">
                    Piazza Bernina 6, Sassuolo (MO)
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="font-mono text-brand-accent text-xs tracking-[0.2em] uppercase mb-4">
                Perche le industrie del distretto lavorano con noi
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-brand-elevated leading-tight mb-12">
                Non siamo solo fornitori.
                <br />
                Siamo quelli che rispondono al primo squillo.
              </h2>

              <div className="space-y-10">
                {differentiators.map((item) => (
                  <div key={item.title} className="flex gap-5">
                    <div className="w-10 h-10 bg-brand-dark flex items-center justify-center shrink-0">
                      <item.icon
                        size={18}
                        className="text-brand-accent"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <h3 className="text-brand-elevated font-medium mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════ HERITAGE STRIP ══════ */}
      <section className="bg-brand-dark relative grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-mono text-brand-accent text-xs tracking-[0.2em] uppercase mb-4">
                  Dal 1994
                </p>
                <h2 className="font-display text-3xl sm:text-4xl text-white leading-tight mb-6">
                  Trent&apos;anni nel cuore del distretto ceramico
                </h2>
                <p className="text-brand-text-muted leading-relaxed max-w-lg">
                  Nata a Sassuolo, Nuova T.C.M. Service ha costruito la propria
                  reputazione lavorando fianco a fianco con le aziende leader del
                  comprensorio. La nostra dimensione ci permette un servizio su
                  misura, con tempi di risposta che le grandi strutture non possono
                  garantire.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-px">
                {[
                  { label: "Partner ufficiale", value: "Cat® Lift Trucks" },
                  { label: "Certificazione", value: "ISO 9001" },
                  { label: "Copertura", value: "Tutta Italia" },
                  { label: "Intervento", value: "Entro 24 ore" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-brand-surface p-6 lg:p-8"
                  >
                    <p className="font-mono text-brand-text-muted text-[10px] tracking-[0.2em] uppercase mb-2">
                      {item.label}
                    </p>
                    <p className="text-white font-medium text-sm">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════ CTA FINALE ══════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="font-mono text-brand-accent text-xs tracking-[0.2em] uppercase mb-4">
              Contatti
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-brand-elevated leading-tight mb-6">
              Parlaci della tua flotta
            </h2>
            <p className="text-gray-500 text-lg mb-12 leading-relaxed max-w-xl mx-auto">
              Raccontaci quanti carrelli hai, che problemi stai affrontando.
              Ti facciamo un&apos;analisi gratuita e ti diciamo cosa possiamo fare.
              Senza impegno, senza giri di parole.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contatti"
                className="inline-flex items-center justify-center gap-3 bg-brand-dark hover:bg-brand-elevated text-white font-medium px-8 py-4 text-sm tracking-wide transition-colors group"
              >
                Richiedi un&apos;analisi gratuita
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="tel:+390536800034"
                className="inline-flex items-center justify-center gap-3 border border-gray-200 hover:border-gray-400 text-brand-elevated px-8 py-4 text-sm tracking-wide transition-colors"
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
