"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Category() {
  const categories = [
    {
      name: "Kitchen Appliances",
      description: "Innovative cooking solutions for modern homes",
      image: "/categories/kitchen.png",
    },
    {
      name: "Cooling Appliances",
      description: "Advanced refrigeration for optimal freshness",
      image: "/categories/fridge.png",
    },
    {
      name: "Cleaning Appliances",
      description: "Smart cleaning technology for effortless care",
      image: "/categories/kitchen.png", // Placeholder - add cleaning.png to public/categories
    },
    {
      name: "Smart Home",
      description: "Connected devices for intelligent living",
      image: "/categories/fridge.png", // Placeholder - add smart.png to public/categories
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-cream-400">
              Elentra
            </h2>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
              Product Range
            </h2>
          </div>
          <p className="text-lg text-zinc-500">
            Discover innovative technology designed for your lifestyle
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="bg-[#C5D9D9] p-8 rounded-3xl transition-all duration-300"
              >
                <div className="flex items-center gap-8">
                  {/* Product Image */}
                  <div className="flex-shrink-0 w-32 h-32 bg-white flex items-center justify-center overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={120}
                      height={120}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-secondary mb-3">
                      {category.name}
                    </h3>
                    <p className="text-sm text-zinc-600 mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 hover:text-secondary transition-colors"
                    >
                      <span>View details</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
