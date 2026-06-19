"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/page-hero";
import { Product, products } from "@/lib/products";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (imageSrc: string) => {
    setImageErrors((prev) => ({ ...prev, [imageSrc]: true }));
  };

  const categories = [
    "All",
    "Kitchen Appliances",
    "Refrigeration",
    "Climate Control",
    "Laundry Care",
    "Cleaning",
    "Smart Home"
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        title="Our Products"
        description="Discover our complete collection of premium home appliances designed for modern living."
        bgImage="/cta/fridge.jpg"
        bgOpacity={0.65}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search & Filter */}
        <div className="mb-16">
          {/* Search Bar */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 bg-white border-b border-zinc-200 focus:outline-none focus:border-zinc-400 transition-all text-secondary"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-cream-600 text-white shadow-md"
                    : "bg-white border border-zinc-200 text-zinc-600 hover:border-cream-600 hover:text-cream-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group flex flex-col"
            >
              {/* Image Container with Luxury Gradient Backdrop */}
              <div className="aspect-[4/5] relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] to-[#f0f0ed] border border-zinc-200/40 rounded-[2rem] shadow-xs transition-all duration-500 ease-out flex items-center justify-center">
                {(!imageErrors[product.image] && product.image) ? (
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
                      <svg className="w-8 h-8 text-cream-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                      </svg>
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
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-zinc-400">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
