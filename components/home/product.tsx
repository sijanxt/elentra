"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, Product } from "@/lib/products";
import Title from "../ui/title";

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

const categoryIconMap: Record<string, string> = {
  "Kitchen Appliances": "utensils",
  "Refrigeration": "refrigerator",
  "Climate Control": "thermometer",
  "Laundry Care": "washer",
  "Cleaning": "vacuum",
  "Smart Home": "smartphone"
};

export default function Products() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (imageSrc: string) => {
    setImageErrors((prev) => ({ ...prev, [imageSrc]: true }));
  };

  return (
    <section id="products" className="bg-zinc-50 py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title
          creamText="Elentra"
          primaryText="Featured Products"
          desc="Explore our premium collection of luxury home appliances"
          className="mb-16"
        />

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 6).map((product) => {
            const hasImageError = imageErrors[product.image];
            return (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group cursor-pointer flex flex-col"
              >
                {/* Image Container with Luxury Gradient Backdrop */}
                <div className="aspect-[4/5] relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] to-[#f0f0ed] border border-zinc-200/40 rounded-[2rem] shadow-xs transition-all duration-500 ease-out flex items-center justify-center">
                  
                  {(!hasImageError && product.image) ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      onError={() => handleImageError(product.image)}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/60 backdrop-blur-xs rounded-full flex items-center justify-center text-cream-600 shadow-xs">
                        {iconMap[categoryIconMap[product.category] || "utensils"]}
                      </div>
                    </div>
                  )}
                </div>
 
                 {/* Details Area */}
                 <div className="pt-5 px-2 flex flex-col gap-1">
                   {/* Category Tag */}
                   <span className="text-[10px] font-semibold text-cream-600 tracking-widest uppercase font-montserrat">
                     {product.category}
                   </span>
 
                   {/* Product Name */}
                   <h3 className="text-lg sm:text-xl font-medium tracking-tight text-zinc-900 group-hover:text-cream-600 transition-colors duration-300 font-cormorant line-clamp-1 leading-tight">
                     {product.name}
                   </h3>
 
                   {/* Price Row */}
                   <div className="flex items-center justify-between mt-1">
                     <span className="text-xs sm:text-sm font-medium text-zinc-500 font-montserrat">
                       {product.price}
                     </span>
                     <span className="text-[11px] font-medium text-zinc-400 font-montserrat tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       View Details
                     </span>
                   </div>
                 </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}


