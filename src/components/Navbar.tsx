"use client";

import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-sm border-b border-gray-200 shadow-sm"
          : "bg-white"
      }`}
    >
      {/* Top bar with phone */}
      <div
        className={`border-b border-gray-100 transition-all duration-300 ${
          scrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2 flex justify-end">
          <a
            href="tel:+390536800034"
            className="flex items-center gap-2 text-gray-500 hover:text-brand-elevated transition-colors text-xs font-mono tracking-wide"
          >
            <Phone size={12} />
            +39 0536 800034
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 bg-[#ECAA0D] rounded-lg flex items-center justify-center shadow-sm">
              <span className="font-display text-white text-sm font-extrabold tracking-wide drop-shadow-sm">
                TCM
              </span>
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-display text-brand-elevated text-[17px] font-bold leading-tight tracking-tight">
                Nuova T.C.M.
              </p>
              <p className="text-gray-400 text-[9px] tracking-[0.25em] uppercase leading-tight">
                Service S.r.l.
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[13px] font-medium text-gray-600 hover:text-brand-elevated transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+390536800034"
              className={`flex items-center gap-2 text-brand-elevated text-sm font-medium transition-all ${
                scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Phone size={14} className="text-[#ECAA0D]" />
              <span className="font-mono text-xs">0536 800034</span>
            </a>
            <Link
              href="/contatti"
              className="bg-brand-elevated hover:bg-brand-dark text-white text-[13px] font-medium px-5 py-2.5 rounded-lg transition-colors tracking-wide"
            >
              Parla con un Esperto
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-brand-elevated p-2"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
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
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 text-gray-600 hover:text-brand-elevated transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-5 mt-5 border-t border-gray-100 space-y-3">
                <a
                  href="tel:+390536800034"
                  className="flex items-center gap-2 text-gray-500 px-3 py-2 text-sm"
                >
                  <Phone size={14} className="text-[#ECAA0D]" />
                  +39 0536 800034
                </a>
                <Link
                  href="/contatti"
                  onClick={() => setOpen(false)}
                  className="block bg-brand-elevated text-white font-medium px-3 py-3 rounded-lg text-sm text-center"
                >
                  Parla con un Esperto
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
