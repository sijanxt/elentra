import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-primary pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="hover:text-cream-600">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-cream-600">Products</Link>
          <span>/</span>
          <span className="text-zinc-900">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="bg-zinc-100 rounded-3xl flex items-center justify-center border border-zinc-200 aspect-[4/5] relative overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>

          {/* Product Info */}
          <div>
            <span className="text-sm font-semibold text-cream-600 uppercase tracking-wider mb-3 block">
              {product.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 mb-4 tracking-tight">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-zinc-900">{product.price}</span>
              <span className={`text-xs font-semibold uppercase tracking-wider py-2 px-4 rounded-full ${
                product.status === "In Stock" 
                  ? "bg-emerald-50 text-emerald-600" 
                  : product.status === "Limited Edition"
                  ? "bg-amber-50 text-amber-600"
                  : "bg-blue-50 text-blue-600"
              }`}>
                {product.status}
              </span>
            </div>
            
            <p className="text-lg text-zinc-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="flex-1 bg-cream-600 hover:bg-cream-700 text-white text-center font-semibold py-4 px-8 rounded-lg transition-all hover:scale-105"
              >
                Request Quote
              </Link>
              <button className="flex-1 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-semibold py-4 px-8 rounded-lg transition-all">
                Add to Wishlist
              </button>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 p-6 bg-zinc-50 rounded-2xl border border-zinc-200">
              <div>
                <p className="text-sm text-zinc-500 mb-1">Dimensions</p>
                <p className="font-semibold text-zinc-900">{product.dimensions}</p>
              </div>
              <div>
                <p className="text-sm text-zinc-500 mb-1">Warranty</p>
                <p className="font-semibold text-zinc-900">{product.warranty}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Specifications */}
          <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">Specifications</h2>
            <ul className="space-y-3">
              {product.specs.map((spec, index) => (
                <li key={index} className="flex items-start gap-3 text-zinc-700">
                  <svg className="w-5 h-5 text-cream-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">Key Features</h2>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-zinc-700">
                  <svg className="w-5 h-5 text-cream-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Back to Products */}
        <div className="mt-16 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-cream-600 hover:text-cream-700 font-semibold"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
