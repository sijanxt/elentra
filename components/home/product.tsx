"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, categories as categoriesData } from "@/lib/products";

interface ProductItem {
  name: string;
  specs: string[];
  description: string;
  status: "In Stock" | "Limited Edition" | "Pre-order";
  tag: string;
}

interface Category {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  products: ProductItem[];
}

const iconMap: Record<string, React.ReactNode> = {
  utensils: (
    <svg className="w-8 h-8 text-cream-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  refrigerator: (
    <svg className="w-8 h-8 text-cream-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m16.5 0a2.25 2.25 0 00-2.247-2.118H6.022A2.25 2.25 0 003.75 7.5m16.5 0v2.25m-16.5-2.25v2.25m13.5-3v-2.25a2.25 2.25 0 00-2.25-2.25H10.5a2.25 2.25 0 00-2.25 2.25v2.25m.75 4.5h7.5m-7.5 3h7.5m-7.5 3h7.5" />
    </svg>
  ),
  thermometer: (
    <svg className="w-8 h-8 text-cream-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M3.75 12h1.5m15 0h1.5M5.636 5.636l1.06 1.06m10.608 10.608l1.06 1.06M3.75 12a8.25 8.25 0 0115 0M5.636 18.364l1.06-1.06m10.608-10.608l1.06-1.06" />
    </svg>
  ),
  washer: (
    <svg className="w-8 h-8 text-cream-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a6.723 6.723 0 010 .252c-.008.379.137.751.43.992l1.003.828a1.125 1.125 0 01.26 1.43l-1.296 2.247a1.125 1.125 0 01-1.37.49l-1.216-.456a1.125 1.125 0 00-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281a1.125 1.125 0 00-.646-.87a6.57 6.57 0 01-.22-.127c-.331-.183-.581-.495-.644-.869l-.214-1.28c-.09-.543-.56-.94-1.11-.94H5.614c-.55 0-1.02-.398-1.11-.94l-.213-1.281a1.125 1.125 0 00-.646-.87c-.074-.04-.147-.083-.22-.127a1.125 1.125 0 00-1.075-.124l-1.217.456a1.125 1.125 0 01-1.37-.49l-1.296-2.247a1.125 1.125 0 01.26-1.43l1.003-.828c.293-.241.438-.613.43-.992a6.723 6.723 0 010-.252c.008-.379-.137-.751-.43-.992l-1.003-.828a1.125 1.125 0 01-.26-1.43l1.296-2.247a1.125 1.125 0 011.37-.49l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.331-.183.581-.495.644-.869l.214-1.28z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  vacuum: (
    <svg className="w-8 h-8 text-cream-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21m0 0l-.813-5.096M9 21h7.5m0 0l-.813-5.096M16.5 21V12.75a4.5 4.5 0 10-9 0v8.25m3.75-12.75h1.5" />
    </svg>
  ),
  smartphone: (
    <svg className="w-8 h-8 text-cream-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5a3 3 0 116 0V9m-6 0h6m-6 3h6m-7.5 7.5h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 003 9v9a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (activeCategory) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [activeCategory]);

  const handleImageError = (imageSrc: string) => {
    setImageErrors((prev) => ({ ...prev, [imageSrc]: true }));
  };

  const categories: Category[] = categoriesData.map((cat) => ({
    id: cat.id,
    title: cat.title,
    description: cat.description,
    image: cat.image,
    icon: iconMap[cat.iconName],
    products: products.filter((p) => cat.productIds.includes(p.id))
  }));

  return (
    <section id="products" className="bg-zinc-50 py-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-cream-600">
              Elentra
            </h2>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">
              Featured Products
            </h2>
          </div>
          <p className="text-lg text-zinc-500">
            Explore our curated collection by category
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const hasImageError = imageErrors[category.image];
            return (
              <div
                key={category.id}
                onClick={() => setActiveCategory(category)}
                className="group cursor-pointer"
              >
                {/* Image Area */}
                <div className="aspect-[4/5] relative overflow-hidden bg-zinc-100 mb-4">
                  {(!hasImageError && category.image) ? (
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-contain"
                      onError={() => handleImageError(category.image)}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-zinc-200 flex items-center justify-center">
                        {category.icon}
                      </div>
                    </div>
                  )}
                </div>

                {/* Category Name */}
                <div className="text-center">
                  <h3 className="text-lg font-medium text-zinc-900 group-hover:text-cream-600 transition-colors">
                    {category.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Category Products Modal */}
      {activeCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-fade-in">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm"
            onClick={() => setActiveCategory(null)}
          />

          {/* Modal Container */}
          <div className="relative bg-white w-full max-w-3xl rounded-2xl border border-zinc-200 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col animate-fade-in-up">
            
            {/* Modal Header */}
            <div className="p-6 sm:p-8 border-b border-zinc-200 flex justify-between items-center bg-cream-50/40">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-cream-50 flex items-center justify-center border border-cream-200/40 shadow-xs">
                  {activeCategory.icon}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900">
                    {activeCategory.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-light">
                    Featured German Engineering Collection
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveCategory(null)}
                className="text-zinc-400 hover:text-zinc-900 p-2 hover:bg-zinc-100 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-grow">
              {activeCategory.products.map((product, index) => (
                <div
                  key={index}
                  className="bg-zinc-50 rounded-xl p-6 border border-zinc-200 flex flex-col sm:flex-row justify-between gap-6"
                >
                  <div className="space-y-3 max-w-xl">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h4 className="text-base sm:text-lg font-bold text-zinc-900">
                        {product.name}
                      </h4>
                      <span className="text-[10px] font-semibold uppercase tracking-wider py-1 px-2.5 rounded bg-cream-50 text-cream-700">
                        {product.tag}
                      </span>
                      <span className={`text-[10px] font-semibold uppercase tracking-wider py-1 px-2.5 rounded ${
                        product.status === "In Stock" 
                          ? "bg-emerald-50 text-emerald-600 border border-emerald-200/50" 
                          : product.status === "Limited Edition"
                          ? "bg-amber-50 text-amber-600 border border-amber-200/50"
                          : "bg-blue-50 text-blue-600 border border-blue-200/50"
                      }`}>
                        {product.status}
                      </span>
                    </div>
                    
                    <p className="text-sm text-zinc-500 font-light leading-relaxed">
                      {product.description}
                    </p>

                    {/* Specifications Chips */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {product.specs.map((spec, specIdx) => (
                        <span
                          key={specIdx}
                          className="text-[11px] font-medium text-zinc-600 bg-white border border-zinc-200 py-1 px-3 rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex sm:flex-col justify-end items-end shrink-0 pt-2 sm:pt-0">
                    <Link
                      href={`/contact?inquiry=${encodeURIComponent(product.name)}`}
                      onClick={() => setActiveCategory(null)}
                      className="inline-flex items-center text-xs font-semibold uppercase tracking-wider bg-zinc-900 hover:bg-zinc-800 text-white py-2.5 px-4 rounded-lg shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Inquire
                      <svg className="w-3.5 h-3.5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-zinc-200 bg-zinc-50 flex justify-end">
              <button
                onClick={() => setActiveCategory(null)}
                className="px-6 py-2.5 border border-zinc-300 hover:bg-zinc-100 text-zinc-700 rounded-lg text-sm font-medium transition-all"
              >
                Close Gallery
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


