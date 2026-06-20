import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { products } from "@/lib/products";
import ProductBanner from "./details/banner";
import fs from "fs";
import path from "path";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Try to find by slug first
  let product = products.find((p) => p.slug === slug);

  // Write debug logs to file
  try {
    fs.appendFileSync(
      path.join(process.cwd(), "debug.log"),
      `Time: ${new Date().toISOString()} | Slug parameter: "${slug}" | Found: ${!!product} | Available slugs: ${JSON.stringify(products.map(p => p.slug))}\n`
    );
  } catch (e) {}

  // If not found, check if it's a numeric ID and redirect to the slug url
  if (!product) {
    const productById = products.find((p) => p.id === slug);
    if (productById) {
      redirect(`/products/${productById.slug}`);
    }
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#fcfbfa] pb-24">
      {/* Product Banner Showcase */}
      <ProductBanner product={product} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 mt-16">

        {/* Detailed Features & Specs Section */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 pt-16 border-t border-zinc-150">
          
          {/* Key Features */}
          <div>
            <h3 className="text-xs font-bold font-montserrat uppercase tracking-[0.2em] text-cream-600 mb-6">
              Key Features
            </h3>
            <ul className="space-y-4">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-cream-500 mt-2.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specifications */}
          <div>
            <h3 className="text-xs font-bold font-montserrat uppercase tracking-[0.2em] text-cream-600 mb-6">
              Specifications
            </h3>
            <ul className="space-y-4">
              {product.specs.map((spec, index) => (
                <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2.5 shrink-0" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Back Link */}
        <div className="mt-24 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2.5 text-[11px] font-bold font-montserrat uppercase tracking-[0.2em] text-zinc-400 hover:text-cream-600 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Products
          </Link>
        </div>

      </div>
    </div>
  );
}
