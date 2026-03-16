"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/servizi", label: "Servizi" },
  { href: "/catalogo", label: "Catalogo" },
  { href: "/contatti", label: "Contatti" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-950/95 backdrop-blur-md border-b border-navy-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-safety-yellow rounded-lg flex items-center justify-center font-display font-bold text-navy-950 text-lg group-hover:scale-105 transition-transform">
              TCM
            </div>
            <div className="hidden sm:block">
              <p className="font-display font-semibold text-white text-sm leading-tight">
                Nuova T.C.M.
              </p>
              <p className="text-navy-300 text-xs tracking-wider uppercase">
                Service
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-navy-200 hover:text-safety-yellow transition-colors rounded-lg hover:bg-navy-800/50"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Phone */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+390536800034"
              className="flex items-center gap-2 text-navy-300 hover:text-white transition-colors text-sm"
            >
              <Phone size={16} />
              0536 800034
            </a>
            <Link
              href="/contatti"
              className="bg-safety-yellow hover:bg-safety-amber text-navy-950 font-semibold px-5 py-2.5 rounded-lg text-sm transition-all hover:shadow-lg hover:shadow-safety-yellow/20"
            >
              Preventivo Gratuito
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-950 border-t border-navy-800/50 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-navy-200 hover:text-safety-yellow hover:bg-navy-900 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-navy-800 mt-4">
                <a
                  href="tel:+390536800034"
                  className="flex items-center gap-2 text-navy-300 px-4 py-3"
                >
                  <Phone size={16} />
                  0536 800034
                </a>
                <Link
                  href="/contatti"
                  onClick={() => setOpen(false)}
                  className="block bg-safety-yellow text-navy-950 font-semibold px-4 py-3 rounded-lg text-center mt-2"
                >
                  Preventivo Gratuito
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
