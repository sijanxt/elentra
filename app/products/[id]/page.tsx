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
    <div className="min-h-screen bg-[#fcfbfa] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Breadcrumb */}
        <div className="mb-10 flex items-center gap-2 text-xs font-montserrat uppercase tracking-[0.2em] text-zinc-400">
          <Link href="/" className="hover:text-cream-600 transition-colors">Home</Link>
          <span className="text-zinc-300">/</span>
          <Link href="/products" className="hover:text-cream-600 transition-colors">Products</Link>
          <span className="text-zinc-300">/</span>
          <span className="text-zinc-900 font-medium truncate max-w-[200px]">{product.name}</span>
        </div>

        {/* Product Details Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          
          {/* Product Image Gallery Box */}
          <div className="bg-white rounded-[2rem] flex items-center justify-center border border-zinc-150/60 aspect-[4/5] relative overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.015)] p-12 group">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
              unoptimized
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">
            
            {/* Category / Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold font-montserrat uppercase tracking-[0.25em] text-cream-600">
                {product.category}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-200" />
              <span className="text-xs font-medium font-montserrat uppercase tracking-[0.15em] text-zinc-400">
                {product.tag}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-secondary mb-6 font-cormorant italic leading-tight">
              {product.name}
            </h1>

            {/* Price & Status */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl sm:text-3xl font-light font-montserrat text-zinc-900">
                {product.price}
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-[0.15em] py-1.5 px-3.5 rounded-full border ${
                product.status === "In Stock" 
                  ? "bg-emerald-50/50 text-emerald-600 border-emerald-500/20" 
                  : product.status === "Limited Edition"
                  ? "bg-amber-50/50 text-amber-600 border-amber-500/20"
                  : "bg-blue-50/50 text-blue-600 border-blue-500/20"
              }`}>
                {product.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-base text-zinc-500 leading-relaxed mb-10 font-light font-lora">
              {product.description}
            </p>

            {/* CTA Buttons - Compact & Refined */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href={`/contact?inquiry=${encodeURIComponent(product.name)}`}
                className="bg-secondary hover:bg-cream-600 text-white font-montserrat text-[11px] uppercase tracking-widest font-semibold py-3 px-8 rounded-full shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Request Quote
              </Link>
              <button className="bg-transparent border border-zinc-200 hover:border-secondary hover:bg-zinc-50/80 text-secondary font-montserrat text-[11px] uppercase tracking-widest font-semibold py-3 px-8 rounded-full transition-all active:scale-[0.98] cursor-pointer">
                Add to Wishlist
              </button>
            </div>

            {/* Dimensions & Warranty Details */}
            <div className="grid grid-cols-2 gap-8 py-6 border-t border-b border-zinc-150/60 font-montserrat">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 block mb-1">Dimensions</span>
                <span className="text-xs sm:text-sm font-semibold text-zinc-800">{product.dimensions}</span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 block mb-1">Warranty</span>
                <span className="text-xs sm:text-sm font-semibold text-zinc-800">{product.warranty}</span>
              </div>
            </div>

          </div>
        </div>

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
