import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta Nuova T.C.M. Service per preventivi, noleggio e assistenza carrelli elevatori. Piazza Bernina 6, Sassuolo (MO). Tel: 0536 800034.",
};

const contactInfo = [
  {
    icon: Phone,
    title: "Telefono",
    value: "+39 0536 800034",
    href: "tel:+390536800034",
    note: "Lun-Ven, 8:00-18:00",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@nuovatcmservice.com",
    href: "mailto:info@nuovatcmservice.com",
    note: "Rispondiamo entro 24h",
  },
  {
    icon: MapPin,
    title: "Sede",
    value: "Piazza Bernina 6, 41049 Sassuolo (MO)",
    href: "https://maps.google.com/?q=Piazza+Bernina+6+Sassuolo+MO",
    note: "Nel cuore del distretto ceramico",
  },
  {
    icon: Clock,
    title: "Orari",
    value: "Lun-Ven: 8:00-12:30 / 14:00-18:00",
    note: "Sabato e Domenica chiusi",
  },
];

export default function Contatti() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy-950 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,166,35,0.06),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <p className="text-safety-yellow font-semibold text-sm uppercase tracking-wider mb-4">
              Contatti
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 max-w-3xl">
              Parliamo del tuo{" "}
              <span className="text-safety-yellow">prossimo progetto</span>
            </h1>
            <p className="text-navy-300 text-lg max-w-2xl leading-relaxed">
              Preventivi gratuiti, consulenze tecniche, assistenza. Siamo qui per
              aiutarti a trovare la soluzione migliore.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* FORM */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <h2 className="font-display text-2xl font-bold text-navy-950 mb-2">
                  Invia una richiesta
                </h2>
                <p className="text-navy-600 text-sm mb-8">
                  Compila il modulo e ti ricontatteremo entro 24 ore lavorative.
                </p>
                <ContactForm />
              </AnimatedSection>
            </div>

            {/* INFO */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.15}>
                <h2 className="font-display text-2xl font-bold text-navy-950 mb-8">
                  I nostri recapiti
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div
                      key={info.title}
                      className="flex items-start gap-4 p-4 bg-navy-50/50 rounded-xl border border-navy-100"
                    >
                      <div className="w-10 h-10 bg-navy-950 rounded-lg flex items-center justify-center shrink-0">
                        <info.icon size={18} className="text-safety-yellow" />
                      </div>
                      <div>
                        <p className="font-semibold text-navy-950 text-sm">
                          {info.title}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-navy-700 text-sm hover:text-safety-amber transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-navy-700 text-sm">{info.value}</p>
                        )}
                        {info.note && (
                          <p className="text-navy-500 text-xs mt-1">
                            {info.note}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* MAP PLACEHOLDER */}
                <div className="mt-8 rounded-xl overflow-hidden border border-navy-100">
                  <div className="bg-gradient-to-br from-navy-100 to-navy-200 aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <MapPin
                        size={32}
                        className="text-navy-400 mx-auto mb-2"
                      />
                      <p className="text-navy-500 text-sm font-medium">
                        Google Maps
                      </p>
                      <p className="text-navy-400 text-xs">
                        Piazza Bernina 6, Sassuolo
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
