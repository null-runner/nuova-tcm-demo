import Image from "next/image";
import Link from "next/link";
import { FileText } from "lucide-react";

interface ProductModel {
  name: string;
  capacity_kg: string | number;
  loadCenter_mm: number | null;
  battery: string | null;
  maxLiftHeight_mm: number | null;
  image: string;
  brochure: string | null;
}

export default function ProductCard({ model }: { model: ProductModel }) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `CAT® ${model.name}`,
    brand: { "@type": "Brand", name: "CAT Lift Trucks" },
    category: "Carrelli Elevatori",
    image: `https://nuova-tcm-demo.vercel.app${model.image}`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Nuova T.C.M. Service S.r.l.",
      },
    },
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-gray-100/50 transition-all group">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <div className="aspect-square bg-brand-light flex items-center justify-center p-8 overflow-hidden">
        <Image
          src={model.image}
          alt={`Carrello elevatore CAT® ${model.name}`}
          width={400}
          height={400}
          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display font-semibold text-brand-elevated text-lg mb-4">
          {model.name}
        </h3>
        <table className="w-full text-sm">
          <tbody className="divide-y divide-gray-50">
            <tr>
              <td className="text-gray-500 py-1.5 pr-4">Portata</td>
              <td className="text-brand-elevated font-medium py-1.5">
                {typeof model.capacity_kg === "number"
                  ? `${model.capacity_kg.toLocaleString("it-IT")} kg`
                  : `${model.capacity_kg} kg`}
              </td>
            </tr>
            {model.loadCenter_mm && (
              <tr>
                <td className="text-gray-500 py-1.5 pr-4">Centro di carico</td>
                <td className="text-brand-elevated font-medium py-1.5">
                  {model.loadCenter_mm} mm
                </td>
              </tr>
            )}
            {model.battery && (
              <tr>
                <td className="text-gray-500 py-1.5 pr-4">Batteria</td>
                <td className="text-brand-elevated font-medium py-1.5">
                  {model.battery}
                </td>
              </tr>
            )}
            {model.maxLiftHeight_mm && (
              <tr>
                <td className="text-gray-500 py-1.5 pr-4">Altezza max</td>
                <td className="text-brand-elevated font-medium py-1.5">
                  {(model.maxLiftHeight_mm / 1000).toLocaleString("it-IT")} m
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="flex items-center gap-3 mt-5">
          <Link
            href="/contatti"
            className="flex-1 text-center bg-brand-elevated hover:bg-brand-dark text-white text-sm font-medium py-2.5 rounded-lg transition-colors"
          >
            Richiedi info
          </Link>
          {model.brochure && (
            <a
              href={model.brochure}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gray-200 hover:border-brand-accent rounded-lg flex items-center justify-center transition-colors"
              title="Scarica brochure"
            >
              <FileText size={16} className="text-gray-500" strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
