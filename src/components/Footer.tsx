import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-text-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 border-2 border-brand-accent rounded flex items-center justify-center">
                <span className="font-mono text-brand-accent text-xs font-medium tracking-tight">
                  TCM
                </span>
              </div>
              <div>
                <p className="font-display text-white text-lg leading-none">
                  Nuova T.C.M.
                </p>
                <p className="text-brand-text-muted text-[10px] tracking-[0.2em] uppercase font-mono mt-0.5">
                  Service S.r.l.
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Dealer ufficiale Cat® Lift Trucks. Assistenza, noleggio e vendita
              carrelli elevatori dal 1994.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-mono text-white text-[10px] tracking-[0.2em] uppercase mb-5">
              Azienda
            </p>
            <ul className="space-y-3">
              {[
                { href: "/chi-siamo", label: "Chi Siamo" },
                { href: "/servizi", label: "Servizi" },
                { href: "/catalogo", label: "Catalogo" },
                { href: "/contatti", label: "Contatti" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-white text-[10px] tracking-[0.2em] uppercase mb-5">
              Servizi
            </p>
            <ul className="space-y-3">
              {[
                { href: "/servizi#riparazione", label: "Assistenza e Riparazioni" },
                { href: "/servizi#gestione-flotta", label: "Gestione Flotta" },
                { href: "/servizi#vendita", label: "Acquisto e Noleggio" },
                { href: "/servizi#batterie", label: "Batterie Industriali" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-white text-[10px] tracking-[0.2em] uppercase mb-5">
              Contatti
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="text-brand-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>
                  Piazza Bernina 6<br />
                  41049 Sassuolo (MO)
                </span>
              </li>
              <li>
                <a
                  href="tel:+390536800034"
                  className="flex items-center gap-3 text-sm hover:text-white transition-colors"
                >
                  <Phone size={16} className="text-brand-accent shrink-0" strokeWidth={1.5} />
                  +39 0536 800034
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@nuovatcmservice.com"
                  className="flex items-center gap-3 text-sm hover:text-white transition-colors"
                >
                  <Mail size={16} className="text-brand-accent shrink-0" strokeWidth={1.5} />
                  info@nuovatcmservice.com
                </a>
              </li>
            </ul>
            <p className="text-xs mt-6 text-brand-muted">
              Lun - Ven · 8:00-12:30 / 14:00-18:00
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted">
            © {new Date().getFullYear()} Nuova T.C.M. Service S.r.l. · P.IVA 02261820365
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Cookie Policy", "Termini e Condizioni"].map(
              (label) => (
                <Link
                  key={label}
                  href="#"
                  className="text-xs text-brand-muted hover:text-brand-text-muted transition-colors"
                >
                  {label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
