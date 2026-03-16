"use client";

import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reviews = [
  {
    name: "Marco B.",
    role: "Responsabile Logistica",
    rating: 5,
    text: "Professionalità e tempestività. Ci hanno risolto un fermo macchina in meno di 24 ore. Collaboriamo con loro da anni e non abbiamo mai avuto problemi.",
    date: "3 mesi fa",
  },
  {
    name: "Alessandro R.",
    role: "Titolare Azienda Ceramica",
    rating: 5,
    text: "Finalmente un fornitore che risponde al telefono e risolve i problemi. Abbiamo noleggiato 3 carrelli e il servizio di manutenzione è impeccabile.",
    date: "5 mesi fa",
  },
  {
    name: "Stefano L.",
    role: "Responsabile di Produzione",
    rating: 5,
    text: "Ottima gestione della flotta. Ci hanno fatto un'analisi completa delle batterie e ci hanno fatto risparmiare significativamente sui costi operativi.",
    date: "2 mesi fa",
  },
  {
    name: "Giovanni T.",
    role: "Direttore Operativo",
    rating: 4,
    text: "Competenti e affidabili. Ci hanno consigliato il carrello giusto per le nostre esigenze senza cercare di venderci il più caro. Rapporto qualità-prezzo eccellente.",
    date: "6 mesi fa",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < rating
              ? "text-safety-yellow fill-safety-yellow"
              : "text-navy-300"
          }
        />
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  const avgRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <section className="py-24 bg-navy-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              {/* Google "G" logo approximation */}
              <div className="w-8 h-8 rounded-full bg-white border border-navy-200 flex items-center justify-center shadow-sm">
                <span className="font-bold text-sm" style={{ color: "#4285F4" }}>
                  G
                </span>
              </div>
              <p className="text-navy-500 text-sm">
                Recensioni Google
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="font-display text-4xl font-bold text-navy-950">
                {avgRating}
              </span>
              <StarRating rating={Math.round(Number(avgRating))} />
            </div>
            <p className="text-navy-500 text-sm">
              Basato sulle recensioni dei nostri clienti
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <AnimatedSection key={review.name} delay={i * 0.08}>
              <div className="bg-white border border-navy-100 rounded-2xl p-6 h-full flex flex-col hover:shadow-md transition-shadow">
                <StarRating rating={review.rating} />
                <p className="text-navy-700 text-sm leading-relaxed mt-4 mb-6 flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-navy-100">
                  <div className="w-9 h-9 bg-navy-950 rounded-full flex items-center justify-center">
                    <span className="text-safety-yellow text-xs font-bold">
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-950 text-sm">
                      {review.name}
                    </p>
                    <p className="text-navy-500 text-xs">{review.date}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="text-center mt-10">
            <a
              href="https://share.google/j81Xn9aMOg1MWqZIr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-safety-amber hover:text-safety-gold font-medium text-sm transition-colors"
            >
              Vedi tutte le recensioni su Google →
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
