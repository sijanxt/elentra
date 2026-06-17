"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Category() {
  const categories = [
    {
      name: "Kitchen Appliances",
      tag: "Cooking",
      image: "/products/airfryer.png",
    },
    {
      name: "Cooling Appliances",
      tag: "Freshness",
      image: "/categories/cool.png",
    },
    {
      name: "Cleaning Appliances",
      tag: "Effortless",
      image: "/categories/clean.png",
    },
    {
      name: "Smart Home",
      tag: "Intelligent",
      image: "/categories/home.png",
    },
  ];

  return (
    <section className="bg-white py-24 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-cream-600">
              Appliance
            </h2>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">
              Collections
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-500 font-light max-w-xl mx-auto leading-relaxed">
            Discover innovative technology designed for your lifestyle
          </p>
        </motion.div>

        {/* Categories Grid (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group bg-white p-6 rounded-[2rem] border border-cream-500/40 flex flex-col items-center text-center shadow-xs"
              >
                {/* Product Image Container */}
                <div className="w-full h-48 flex items-center justify-center mb-6 overflow-hidden bg-transparent">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={180}
                    height={180}
                    className="object-contain max-h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <h3 className="text-base font-montserrat font-semibold text-zinc-800 mb-2">
                  {category.name}
                </h3>

                {/* Sub-Tag (Tag Icon & Category Tag Text) */}
                <div className="flex items-center gap-1.5 text-xs text-cream-500 font-medium font-montserrat mt-auto pt-2">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581a2.25 2.25 0 003.181 0l4.318-4.318a2.25 2.25 0 000-3.181l-9.58-9.581A2.25 2.25 0 009.568 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                  </svg>
                  <span>{category.tag}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      

      </div>
    </section>
  );
}
