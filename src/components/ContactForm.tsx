"use client";

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";

const interests = [
  "Acquisto carrelli nuovi",
  "Acquisto carrelli usati",
  "Noleggio",
  "Riparazione / Assistenza",
  "Batterie industriali",
  "Gestione flotta",
  "Altro",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send size={24} className="text-green-600" />
        </div>
        <h3 className="font-display text-xl font-semibold text-green-900 mb-2">
          Richiesta inviata
        </h3>
        <p className="text-green-700 text-sm">
          Ti ricontatteremo entro 24 ore lavorative. Grazie!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-navy-700 mb-1.5"
          >
            Nome e Cognome *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-navy-50/50 border border-navy-200 rounded-xl text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-safety-yellow/50 focus:border-safety-yellow transition-colors"
            placeholder="Mario Rossi"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-navy-700 mb-1.5"
          >
            Azienda
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-3 bg-navy-50/50 border border-navy-200 rounded-xl text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-safety-yellow/50 focus:border-safety-yellow transition-colors"
            placeholder="Nome azienda"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-navy-700 mb-1.5"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-navy-50/50 border border-navy-200 rounded-xl text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-safety-yellow/50 focus:border-safety-yellow transition-colors"
            placeholder="mario@azienda.it"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-navy-700 mb-1.5"
          >
            Telefono *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 bg-navy-50/50 border border-navy-200 rounded-xl text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-safety-yellow/50 focus:border-safety-yellow transition-colors"
            placeholder="+39 333 1234567"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-navy-700 mb-1.5">
          Sono interessato a
        </label>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <label
              key={interest}
              className="inline-flex items-center gap-2 px-3 py-2 bg-navy-50 border border-navy-200 rounded-lg text-sm text-navy-700 cursor-pointer hover:border-safety-yellow/50 hover:bg-safety-yellow/5 transition-colors has-[:checked]:bg-safety-yellow/10 has-[:checked]:border-safety-yellow has-[:checked]:text-navy-900"
            >
              <input
                type="checkbox"
                name="interest"
                value={interest}
                className="sr-only"
              />
              {interest}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-navy-700 mb-1.5"
        >
          Messaggio *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 bg-navy-50/50 border border-navy-200 rounded-xl text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-safety-yellow/50 focus:border-safety-yellow transition-colors resize-none"
          placeholder="Descrivi le tue esigenze..."
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-safety-yellow hover:bg-safety-amber text-navy-950 font-semibold px-8 py-4 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-safety-yellow/20"
      >
        <Send size={18} />
        Invia Richiesta
      </button>

      <p className="text-navy-500 text-xs">
        * Campi obbligatori. I tuoi dati saranno trattati secondo la nostra
        Privacy Policy.
      </p>
    </form>
  );
}
