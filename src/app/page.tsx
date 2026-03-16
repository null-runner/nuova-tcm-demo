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
  Users,
  BarChart3,
  ChevronRight,
  ClipboardCheck,
  RotateCw,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import HeroVideo from "@/components/HeroVideo";

const painPoints = [
  {
    icon: Clock,
    title: "Tempi di risposta reali",
    description:
      "Sappiamo cosa significa avere un carrello fermo in produzione. Il nostro tempo medio di intervento e di 24 ore perche operiamo direttamente sul territorio, non da un ufficio a centinaia di chilometri.",
  },
  {
    icon: Users,
    title: "Un solo referente per tutto",
    description:
      "Carrelli, batterie, ricambi, manutenzione. Non dovete coordinare tre fornitori diversi. Con noi avete un unico interlocutore che conosce i vostri impianti e vi segue nel tempo.",
  },
  {
    icon: BarChart3,
    title: "Gestione della flotta basata sui dati",
    description:
      "Monitoriamo lo stato dei veicoli e delle batterie per aiutarvi a pianificare interventi e sostituzioni. Meno sorprese, meno fermi, costi sotto controllo.",
  },
];

const services = [
  {
    icon: Wrench,
    label: "Assistenza",
    title: "Riparazioni e Manutenzione",
    description:
      "Manutenzione ordinaria e straordinaria, in sede o fuori sede. Assistenza multimarca con ricambi originali. Contratti personalizzati per flotte di qualsiasi dimensione.",
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
    title: "Sul territorio, non al telefono",
    text: "La nostra sede e a Sassuolo e operiamo su tutta l'Emilia-Romagna. Chi vi risponde e la stessa persona che gestisce l'intervento. Nessun passaggio intermedio.",
  },
  {
    icon: Shield,
    title: "Dealer ufficiale Cat® Lift Trucks",
    text: "Tecnici formati direttamente in fabbrica, ricambi originali, documentazione tecnica completa. La garanzia di un marchio globale con la reattivita di una struttura locale.",
  },
  {
    icon: MapPin,
    title: "Trent'anni di esperienza industriale",
    text: "Dal 1994 lavoriamo con le aziende del distretto ceramico e manifatturiero. Conosciamo le esigenze operative perche le viviamo ogni giorno sul campo.",
  },
];

const steps = [
  {
    step: "01",
    icon: Phone,
    title: "Chiamata",
    desc: "Ci contatti. Rispondiamo direttamente noi.",
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
    desc: "Siamo da te con ricambi e attrezzatura.",
  },
  {
    step: "04",
    icon: RotateCw,
    title: "Presidio",
    desc: "Manutenzione programmata per prevenire i fermi.",
  },
];

export default function Home() {
  return (
    <>
      {/* ══════ HERO ══════ */}
      <section className="relative flex items-center bg-white overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
            {/* Video first on mobile, second on desktop */}
            <div className="flex items-center justify-center lg:order-2">
              <HeroVideo />
            </div>

            <div className="lg:order-1">
              <p className="font-mono text-brand-accent text-xs tracking-[0.2em] uppercase mb-5">
                Dealer ufficiale Cat® Lift Trucks · Dal 1994
              </p>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-brand-elevated leading-[1.12] mb-6">
                Assistenza carrelli elevatori in Emilia-Romagna
              </h1>

              <p className="text-gray-500 text-lg max-w-xl mb-10 leading-relaxed">
                Riparazioni, gestione flotta e batterie industriali.
                Da Sassuolo operiamo su tutta l&apos;Emilia-Romagna.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contatti"
                  className="inline-flex items-center justify-center gap-3 bg-brand-elevated hover:bg-brand-dark text-white font-semibold px-7 py-3.5 rounded-lg text-sm tracking-wide transition-colors group"
                >
                  Parla con un Esperto
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <a
                  href="tel:+390536800034"
                  className="inline-flex items-center justify-center gap-3 border border-gray-200 hover:border-gray-400 text-brand-elevated px-7 py-3.5 rounded-lg text-sm tracking-wide transition-colors"
                >
                  <Phone size={15} className="text-brand-accent" />
                  0536 800034
                </a>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-400">
                <span>✓ Intervento medio 24h</span>
                <span>✓ Multimarca</span>
                <span>✓ Un solo referente</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ TRUST BAR ══════ */}
      <section className="bg-brand-surface border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "30+", label: "anni nel settore" },
              { value: "500+", label: "clienti attivi" },
              { value: "24h", label: "tempo medio intervento" },
              { value: "Cat®", label: "dealer ufficiale" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl sm:text-3xl text-white font-bold">
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

      {/* ══════ PAIN POINTS ══════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-2xl mb-14">
              <p className="font-mono text-brand-accent text-xs tracking-[0.2em] uppercase mb-3">
                Perche le aziende ci scelgono
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-elevated">
                Chi gestisce una flotta sa quanto conta avere il partner giusto
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((pain, i) => (
              <AnimatedSection key={pain.title} delay={i * 0.1}>
                <div className="bg-brand-light rounded-2xl p-8 h-full border border-gray-100">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mb-5">
                    <pain.icon size={22} className="text-brand-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-brand-elevated mb-3">
                    {pain.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {pain.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ SERVIZI ══════ */}
      <section className="py-20 lg:py-24 bg-brand-dark relative grain overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/[0.03] rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="max-w-2xl mb-14">
              <p className="font-mono text-brand-accent text-xs tracking-[0.2em] uppercase mb-3">
                I nostri servizi
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                Assistenza completa per la movimentazione industriale
              </h2>
            </div>
          </AnimatedSection>

          {/* Featured service */}
          <AnimatedSection>
            <Link
              href={services[0].href}
              className="group block bg-brand-surface rounded-2xl relative overflow-hidden mb-6 border border-white/5 hover:border-brand-accent/30 transition-colors"
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                <div>
                  <p className="font-mono text-brand-accent text-xs tracking-[0.2em] uppercase mb-3">
                    {services[0].label}
                    <span className="ml-3 bg-brand-accent/15 text-brand-accent px-2 py-0.5 rounded text-[10px] tracking-normal">
                      Core
                    </span>
                  </p>
                  <h3 className="font-display text-2xl font-bold text-white mb-4">
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
                <div className="hidden lg:flex items-center justify-center">
                  <Image
                    src="/images/repair-service.jpg"
                    alt="Tecnico al lavoro su un carrello elevatore"
                    width={500}
                    height={300}
                    className="rounded-xl object-cover opacity-60"
                  />
                </div>
              </div>
            </Link>
          </AnimatedSection>

          {/* Other services */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.slice(1).map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.08}>
                <Link
                  href={service.href}
                  className="group block bg-brand-surface rounded-xl p-6 h-full border border-white/5 hover:border-brand-accent/20 transition-colors"
                >
                  <service.icon
                    size={20}
                    className="text-brand-accent mb-4"
                    strokeWidth={1.5}
                  />
                  <p className="font-mono text-brand-text-muted text-[10px] tracking-[0.2em] uppercase mb-2">
                    {service.label}
                  </p>
                  <h3 className="font-display text-base font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-brand-text-muted text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-brand-text-muted group-hover:text-brand-accent transition-colors">
                    Dettagli
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ COME LAVORIAMO ══════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="font-mono text-brand-accent text-xs tracking-[0.2em] uppercase mb-3">
                Come lavoriamo
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-elevated">
                Dal primo contatto alla soluzione
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, j) => (
              <AnimatedSection key={item.step} delay={j * 0.1}>
                <div className="text-center">
                  <p className="font-display text-5xl font-bold text-gray-300 mb-4">
                    {item.step}
                  </p>
                  <div className="w-14 h-14 bg-brand-dark rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon size={24} className="text-brand-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-semibold text-brand-elevated text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PERCHE NOI ══════ */}
      <section className="py-20 lg:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/warehouse-fleet.jpg"
                  alt="Flotta di carrelli elevatori in magazzino industriale"
                  width={672}
                  height={448}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="font-mono text-brand-accent text-xs tracking-[0.2em] uppercase mb-3">
                Il nostro approccio
              </p>
              <h2 className="font-display text-3xl font-bold text-brand-elevated mb-10">
                La competenza di un dealer ufficiale. La reattivita di chi e sul territorio.
              </h2>

              <div className="space-y-8">
                {differentiators.map((item) => (
                  <div key={item.title} className="flex gap-5">
                    <div className="w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-brand-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-brand-elevated font-semibold mb-1">
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

      {/* ══════ HERITAGE ══════ */}
      <section className="bg-brand-dark relative grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-mono text-brand-accent text-xs tracking-[0.2em] uppercase mb-3">
                  Dal 1994
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
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
                  { label: "Copertura", value: "Emilia-Romagna" },
                  { label: "Intervento", value: "Entro 24 ore" },
                ].map((item) => (
                  <div key={item.label} className="bg-brand-surface rounded-lg p-6">
                    <p className="text-brand-text-muted text-xs tracking-wider uppercase mb-2">
                      {item.label}
                    </p>
                    <p className="text-white font-semibold text-sm">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════ PARTNER ══════ */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-gray-400 text-xs uppercase tracking-widest mb-8">
            Partner e Certificazioni
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {[
              { name: "Cat® Lift Trucks", sub: "Dealer Ufficiale" },
              { name: "TCM", sub: "Rivenditore Autorizzato" },
              { name: "ISO 9001", sub: "Qualita Certificata" },
            ].map((p) => (
              <div
                key={p.name}
                className="px-6 py-3 bg-brand-light rounded-xl border border-gray-100 text-center"
              >
                <p className="font-display font-bold text-brand-elevated text-lg">
                  {p.name}
                </p>
                <p className="text-gray-400 text-xs">{p.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CTA FINALE ══════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="font-mono text-brand-accent text-xs tracking-[0.2em] uppercase mb-3">
              Contatti
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-elevated mb-6">
              Volete sapere cosa possiamo fare per la vostra flotta?
            </h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
              Contattateci per una consulenza tecnica. Analizziamo la vostra
              situazione attuale e vi proponiamo le soluzioni piu adatte,
              senza impegno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contatti"
                className="inline-flex items-center justify-center gap-3 bg-brand-elevated hover:bg-brand-dark text-white font-semibold px-8 py-4 rounded-lg text-sm tracking-wide transition-colors group"
              >
                Richiedi una consulenza
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="tel:+390536800034"
                className="inline-flex items-center justify-center gap-3 border border-gray-200 hover:border-gray-400 text-brand-elevated px-8 py-4 rounded-lg text-sm tracking-wide transition-colors"
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
