import Link from "next/link";
import {
  Truck,
  Wrench,
  Battery,
  Clock,
  ShieldCheck,
  Users,
  ArrowRight,
  ChevronRight,
  Star,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import GoogleReviews from "@/components/GoogleReviews";

const services = [
  {
    icon: Truck,
    title: "Vendita e Noleggio",
    description:
      "Carrelli elevatori nuovi e usati Cat® Lift Trucks. Noleggio a breve e lungo termine per ogni esigenza operativa.",
    href: "/servizi#vendita",
  },
  {
    icon: Wrench,
    title: "Riparazione e Assistenza",
    description:
      "Manutenzione ordinaria e straordinaria multimarca. Interventi rapidi per ridurre al minimo i fermi macchina.",
    href: "/servizi#riparazione",
  },
  {
    icon: Battery,
    title: "Batterie Industriali",
    description:
      "Vendita, manutenzione e rigenerazione di batterie industriali per carrelli elettrici e navette automatiche.",
    href: "/servizi#batterie",
  },
];

const stats = [
  { value: "30+", label: "Anni di esperienza" },
  { value: "500+", label: "Clienti soddisfatti" },
  { value: "1.000+", label: "Carrelli gestiti" },
  { value: "24h", label: "Intervento rapido" },
];

const strengths = [
  {
    icon: Clock,
    title: "Tempestività",
    description:
      "Interveniamo rapidamente per minimizzare i tempi di fermo della tua attività.",
  },
  {
    icon: ShieldCheck,
    title: "Affidabilità",
    description:
      "Dealer ufficiale Cat® Lift Trucks con ricambi originali e garanzia certificata.",
  },
  {
    icon: Users,
    title: "Rapporto Diretto",
    description:
      "Una PMI che conosce i tuoi bisogni. Nessun call center, parli sempre con chi risolve.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center bg-navy-950 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(245,166,35,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950/90 to-transparent" />
        </div>

        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-safety-yellow/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-safety-yellow/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-navy-800/50 border border-navy-700/50 rounded-full px-4 py-1.5 mb-8">
                <Star size={14} className="text-safety-yellow" />
                <span className="text-sm text-navy-300">
                  Dealer ufficiale Cat® Lift Trucks
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                La forza che muove{" "}
                <span className="text-safety-yellow">la tua azienda</span>
              </h1>

              <p className="text-lg text-navy-300 max-w-xl mb-10 leading-relaxed">
                Vendita, noleggio e assistenza carrelli elevatori nel cuore del
                distretto ceramico. Oltre 30 anni al servizio
                dell&apos;industria italiana.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contatti"
                  className="inline-flex items-center justify-center gap-2 bg-safety-yellow hover:bg-safety-amber text-navy-950 font-semibold px-8 py-4 rounded-xl text-base transition-all hover:shadow-xl hover:shadow-safety-yellow/20 group"
                >
                  Richiedi un Preventivo
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/catalogo"
                  className="inline-flex items-center justify-center gap-2 border border-navy-600 hover:border-navy-400 text-navy-200 hover:text-white px-8 py-4 rounded-xl text-base transition-all"
                >
                  Sfoglia il Catalogo
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <ImagePlaceholder
                label="Carrello elevatore Cat® in azione nel magazzino"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-navy-900 border-y border-navy-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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

      {/* SERVIZI */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-safety-amber font-semibold text-sm uppercase tracking-wider mb-3">
                I nostri servizi
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
                Tutto ciò che serve alla tua flotta
              </h2>
              <p className="text-navy-600 leading-relaxed">
                Dalla vendita alla manutenzione, un unico partner per tutte le
                esigenze di movimentazione materiali.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <Link
                  href={service.href}
                  className="group block bg-navy-50/50 hover:bg-navy-950 border border-navy-100 hover:border-navy-800 rounded-2xl p-8 transition-all duration-300 h-full"
                >
                  <div className="w-14 h-14 bg-safety-yellow/10 group-hover:bg-safety-yellow/20 rounded-xl flex items-center justify-center mb-6 transition-colors">
                    <service.icon
                      size={28}
                      className="text-safety-amber group-hover:text-safety-yellow transition-colors"
                    />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-navy-950 group-hover:text-white mb-3 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-navy-600 group-hover:text-navy-300 text-sm leading-relaxed mb-6 transition-colors">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-safety-amber group-hover:text-safety-yellow text-sm font-medium transition-colors">
                    Scopri di più
                    <ChevronRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CHI SIAMO PREVIEW */}
      <section className="py-24 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <ImagePlaceholder
                label="Sede aziendale e team al lavoro"
                className="rounded-2xl"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="text-safety-amber font-semibold text-sm uppercase tracking-wider mb-3">
                Chi siamo
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 mb-6">
                Nel cuore di Ceramicland dal 1994
              </h2>
              <p className="text-navy-600 leading-relaxed mb-6">
                Nata nel distretto ceramico di Sassuolo, Nuova T.C.M. Service ha
                costruito la propria reputazione lavorando fianco a fianco con le
                aziende leader del settore. La nostra dimensione ci permette di
                offrire un servizio su misura, con tempi di risposta che le
                grandi strutture non possono garantire.
              </p>
              <p className="text-navy-600 leading-relaxed mb-8">
                Siamo dealer ufficiali Cat® Lift Trucks e operiamo su tutto il
                territorio nazionale con interventi rapidi e ricambi originali.
              </p>
              <Link
                href="/chi-siamo"
                className="inline-flex items-center gap-2 text-safety-amber hover:text-safety-gold font-semibold group"
              >
                Scopri la nostra storia
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PERCHÉ SCEGLIERCI */}
      <section className="py-24 bg-navy-950 relative grain overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-safety-yellow/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-safety-yellow font-semibold text-sm uppercase tracking-wider mb-3">
                I nostri valori
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                Perché le aziende ci scelgono
              </h2>
              <p className="text-navy-400 leading-relaxed">
                Non siamo solo fornitori. Siamo il partner che risponde al primo
                squillo e risolve il problema prima che diventi un costo.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {strengths.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-navy-900/50 border border-navy-800 rounded-2xl p-8 hover:border-safety-yellow/30 transition-colors">
                  <div className="w-12 h-12 bg-safety-yellow/10 rounded-xl flex items-center justify-center mb-5">
                    <item.icon size={24} className="text-safety-yellow" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-navy-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <GoogleReviews />

      {/* PARTNER */}
      <section className="py-16 bg-white border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-center text-navy-500 text-sm uppercase tracking-wider mb-10">
              Partner e Certificazioni
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12">
              {[
                { name: "Cat® Lift Trucks", sub: "Dealer Ufficiale" },
                { name: "TCM", sub: "Rivenditore Autorizzato" },
                { name: "ISO 9001", sub: "Qualità Certificata" },
              ].map((partner) => (
                <div
                  key={partner.name}
                  className="px-8 py-4 bg-navy-50 rounded-xl border border-navy-100"
                >
                  <p className="font-display font-bold text-navy-700 text-xl">
                    {partner.name}
                  </p>
                  <p className="text-navy-500 text-xs">{partner.sub}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-24 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,166,35,0.08),transparent_60%)]" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Hai bisogno di un carrello elevatore?
            </h2>
            <p className="text-navy-300 text-lg mb-10 leading-relaxed">
              Raccontaci le tue esigenze. Ti proponiamo la soluzione più adatta —
              vendita, noleggio o usato — con un preventivo gratuito entro 24
              ore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contatti"
                className="inline-flex items-center justify-center gap-2 bg-safety-yellow hover:bg-safety-amber text-navy-950 font-semibold px-8 py-4 rounded-xl text-base transition-all hover:shadow-xl hover:shadow-safety-yellow/20 group"
              >
                Contattaci Ora
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="tel:+390536800034"
                className="inline-flex items-center justify-center gap-2 border border-navy-600 hover:border-safety-yellow/50 text-navy-200 hover:text-white px-8 py-4 rounded-xl text-base transition-all"
              >
                Chiama: 0536 800034
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
