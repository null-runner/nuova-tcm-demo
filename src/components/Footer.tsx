import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";

const footerLinks = {
  azienda: [
    { href: "/chi-siamo", label: "Chi Siamo" },
    { href: "/servizi", label: "Servizi" },
    { href: "/catalogo", label: "Catalogo" },
    { href: "/contatti", label: "Contatti" },
  ],
  servizi: [
    { href: "/servizi#vendita", label: "Vendita Carrelli" },
    { href: "/servizi#noleggio", label: "Noleggio" },
    { href: "/servizi#riparazione", label: "Riparazione" },
    { href: "/servizi#batterie", label: "Batterie Industriali" },
  ],
  legale: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Cookie Policy" },
    { href: "#", label: "Termini e Condizioni" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300 relative grain">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-safety-yellow via-safety-amber to-safety-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-safety-yellow rounded-lg flex items-center justify-center font-display font-bold text-navy-950 text-lg">
                TCM
              </div>
              <div>
                <p className="font-display font-semibold text-white text-sm leading-tight">
                  Nuova T.C.M.
                </p>
                <p className="text-navy-400 text-xs tracking-wider uppercase">
                  Service S.r.l.
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Dealer ufficiale Cat® Lift Trucks. Oltre 30 anni di esperienza
              nella vendita, noleggio e riparazione di carrelli elevatori.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/nuovatcm/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-navy-800 hover:bg-safety-yellow hover:text-navy-950 rounded-lg flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-navy-800 hover:bg-safety-yellow hover:text-navy-950 rounded-lg flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-navy-800 hover:bg-safety-yellow hover:text-navy-950 rounded-lg flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Azienda
            </h3>
            <ul className="space-y-3">
              {footerLinks.azienda.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-safety-yellow transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Servizi
            </h3>
            <ul className="space-y-3">
              {footerLinks.servizi.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-safety-yellow transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Contatti
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-safety-yellow shrink-0 mt-0.5" />
                <span>
                  Piazza Bernina 6<br />
                  41049 Sassuolo (MO)
                </span>
              </li>
              <li>
                <a
                  href="tel:+390536800034"
                  className="flex items-center gap-3 text-sm hover:text-safety-yellow transition-colors"
                >
                  <Phone size={18} className="text-safety-yellow shrink-0" />
                  +39 0536 800034
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@nuovatcmservice.com"
                  className="flex items-center gap-3 text-sm hover:text-safety-yellow transition-colors"
                >
                  <Mail size={18} className="text-safety-yellow shrink-0" />
                  info@nuovatcmservice.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock size={18} className="text-safety-yellow shrink-0 mt-0.5" />
                <span>
                  Lun - Ven<br />
                  8:00–12:30 / 14:00–18:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-500">
            © {new Date().getFullYear()} Nuova T.C.M. Service S.r.l. — P.IVA
            02261820365 — Tutti i diritti riservati.
          </p>
          <div className="flex gap-6">
            {footerLinks.legale.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-navy-500 hover:text-navy-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
