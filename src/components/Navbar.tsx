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
          ? "bg-brand-dark/98 backdrop-blur-sm border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      {/* Top bar with phone */}
      <div
        className={`border-b border-white/5 transition-all duration-300 ${
          scrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2 flex justify-end">
          <a
            href="tel:+390536800034"
            className="flex items-center gap-2 text-brand-text-muted hover:text-white transition-colors text-xs font-mono tracking-wide"
          >
            <Phone size={12} />
            +39 0536 800034
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
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
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[13px] font-medium text-brand-text-muted hover:text-white transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+390536800034"
              className={`flex items-center gap-2 text-white text-sm font-medium transition-all ${
                scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Phone size={14} className="text-brand-accent" />
              <span className="font-mono text-xs">0536 800034</span>
            </a>
            <Link
              href="/contatti"
              className="bg-brand-accent hover:bg-brand-accent-hover text-white text-[13px] font-medium px-5 py-2.5 transition-colors tracking-wide"
            >
              Parla con un Esperto
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2"
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
            className="lg:hidden bg-brand-dark border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 text-brand-text-muted hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-5 mt-5 border-t border-white/5 space-y-3">
                <a
                  href="tel:+390536800034"
                  className="flex items-center gap-2 text-brand-text-muted px-3 py-2 text-sm"
                >
                  <Phone size={14} className="text-brand-accent" />
                  +39 0536 800034
                </a>
                <Link
                  href="/contatti"
                  onClick={() => setOpen(false)}
                  className="block bg-brand-accent text-white font-medium px-3 py-3 text-sm text-center"
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
