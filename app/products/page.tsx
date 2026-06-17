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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group flex flex-col"
            >
              {/* Image Area */}
              <div className="aspect-[4/5] relative overflow-hidden bg-white border border-zinc-200/80 rounded-2xl shadow-xs group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                {(!imageErrors[product.image] && product.image) ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={() => handleImageError(product.image)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-zinc-50 flex items-center justify-center text-zinc-400">
                      <svg className="w-12 h-12 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Details Area */}
              <div className="pt-4 px-1">
                {/* Product Name */}
                <h3 className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-cream-600 transition-colors line-clamp-1">
                  {product.name}
                </h3>
                {/* Price */}
                <p className="text-xs sm:text-sm font-semibold text-zinc-500 mt-1">
                  {product.price}
                </p>
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
