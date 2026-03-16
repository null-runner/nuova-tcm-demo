import { readFileSync, writeFileSync, mkdirSync } from 'fs';

const data = JSON.parse(readFileSync('public/data/catalog-data.json', 'utf-8'));

// Map categories to our simplified URL structure
const categoryMapping = {
  'transpallet-manuali': { dir: 'transpallet-manuali', seoTitle: 'Transpallet Manuali' },
  'transpallet-elettrici': { dir: 'transpallet-elettrici', seoTitle: 'Transpallet Elettrici' },
  'stoccatori': { dir: 'stoccatori', seoTitle: 'Carrelli Stoccatori' },
  'commissionatori': { dir: 'commissionatori', seoTitle: 'Commissionatori' },
  'retrattili': { dir: 'retrattili', seoTitle: 'Carrelli Retrattili' },
  'retrattili-multidirezionali': { dir: 'retrattili-multidirezionali', seoTitle: 'Carrelli Retrattili Multidirezionali' },
  'trilaterali-man-down': { dir: 'trilaterali', seoTitle: 'Carrelli Trilaterali VNA' },
  'carrello-da-traino': { dir: 'carrello-da-traino', seoTitle: 'Carrelli da Traino' },
};

// Elettrici sub-categories → merge into controbilanciati-elettrici
const elettriciSlugs = [
  'elettrici-48v-3-ruote',
  'elettrici-48v-4-ruote',
  'elettrici-80v-2.5-3.0',
  'elettrici-80v-4.0-5.5',
];

// Diesel sub-categories → merge into controbilanciati-diesel
const dieselSlugs = [
  'diesel-2.0-3.5',
  'diesel-4.0-5.5',
  'diesel-6.0-10',
];

function generateCategoryPage(slug, title, subtitle, capacityRange, models, seoDescription) {
  const modelsJson = JSON.stringify(models, null, 2);

  return `import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "${title} CAT® Lift Trucks",
  description: "${seoDescription}",
};

const models = ${modelsJson};

export default function Page() {
  return (
    <>
      <section className="bg-brand-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(184,122,10,0.06),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection>
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 text-brand-text-muted hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft size={14} />
              Torna al catalogo
            </Link>
            <p className="font-mono text-brand-accent text-xs tracking-[0.2em] uppercase mb-3">
              ${subtitle}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              ${title}
            </h1>
            <p className="text-brand-text-muted text-lg">
              Portata: ${capacityRange}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model, i) => (
              <AnimatedSection key={model.name} delay={i * 0.05}>
                <ProductCard model={model} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-light">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-2xl font-bold text-brand-elevated mb-4">
              Avete bisogno di una consulenza?
            </h2>
            <p className="text-gray-600 mb-6">
              Contattateci per informazioni su disponibilit\\u00e0, prezzi e configurazioni.
            </p>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 bg-brand-elevated hover:bg-brand-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors group"
            >
              Richiedi informazioni
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
`;
}

// Generate standard category pages
for (const cat of data.categories) {
  const mapping = categoryMapping[cat.slug];
  if (!mapping) continue;

  const dir = `src/app/catalogo/${mapping.dir}`;
  mkdirSync(dir, { recursive: true });

  const seoDesc = `${mapping.seoTitle} CAT® Lift Trucks. Portata ${cat.capacityRange}. Dealer ufficiale in Emilia-Romagna. Nuovi, usati e a noleggio.`;
  const page = generateCategoryPage(
    cat.slug,
    mapping.seoTitle,
    cat.subtitle || '',
    cat.capacityRange || '',
    cat.models || [],
    seoDesc,
  );

  writeFileSync(`${dir}/page.tsx`, page);
  console.log(`Generated: ${dir}/page.tsx (${(cat.models || []).length} models)`);
}

// Generate merged controbilanciati-elettrici page
const elettriciModels = [];
for (const cat of data.categories) {
  if (elettriciSlugs.includes(cat.slug)) {
    for (const m of (cat.models || [])) {
      elettriciModels.push(m);
    }
  }
}
{
  const dir = 'src/app/catalogo/controbilanciati-elettrici';
  mkdirSync(dir, { recursive: true });
  const page = generateCategoryPage(
    'controbilanciati-elettrici',
    'Controbilanciati Elettrici',
    'Carrelli controbilanciati a batteria CAT® Lift Trucks',
    '1.400 - 5.500 kg',
    elettriciModels,
    'Carrelli controbilanciati elettrici CAT® Lift Trucks. Da 1,4 a 5,5 ton. 48V e 80V. Dealer ufficiale Emilia-Romagna.',
  );
  writeFileSync(`${dir}/page.tsx`, page);
  console.log(`Generated: ${dir}/page.tsx (${elettriciModels.length} merged electric models)`);
}

// Generate merged controbilanciati-diesel page
const dieselModels = [];
for (const cat of data.categories) {
  if (dieselSlugs.includes(cat.slug)) {
    for (const m of (cat.models || [])) {
      dieselModels.push(m);
    }
  }
}
{
  const dir = 'src/app/catalogo/controbilanciati-diesel';
  mkdirSync(dir, { recursive: true });
  const page = generateCategoryPage(
    'controbilanciati-diesel',
    'Controbilanciati Diesel',
    'Carrelli controbilanciati termici CAT® Lift Trucks',
    '2.000 - 10.000 kg',
    dieselModels,
    'Carrelli controbilanciati diesel CAT® Lift Trucks. Da 2 a 10 ton. Dealer ufficiale Emilia-Romagna.',
  );
  writeFileSync(`${dir}/page.tsx`, page);
  console.log(`Generated: ${dir}/page.tsx (${dieselModels.length} merged diesel models)`);
}

console.log('\\nDone! All catalog subpages generated.');
