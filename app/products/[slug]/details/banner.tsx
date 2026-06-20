"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { usePreloaderFinished } from "@/hooks/use-preloader";
import { Product } from "@/lib/products";

export default function ProductBanner({ product }: { product: Product }) {
  const isPreloaderFinished = usePreloaderFinished();
  const [imageError, setImageError] = useState(false);

  // Animation variants for smooth premium entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <div className="bg-white pt-28 pb-16 border-b border-zinc-100">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={isPreloaderFinished ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Breadcrumbs matching support page hero style */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-1.5 text-[11px] font-montserrat tracking-wider text-zinc-400 uppercase mb-8"
        >
          <Link href="/" className="hover:text-zinc-650 transition-colors">
            Home
          </Link>
          <span className="text-zinc-300 font-light">/</span>
          <Link href="/products" className="hover:text-zinc-650 transition-colors">
            Products
          </Link>
          <span className="text-zinc-300 font-light">/</span>
          <span className="text-zinc-350 font-light">{product.category}</span>
          <span className="text-zinc-300 font-light">/</span>
          <span className="text-zinc-600 font-medium truncate max-w-[180px]">{product.name}</span>
        </motion.div>

        {/* 2-Column Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Product Info & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            
            {/* Title with left accent vertical line */}
            <motion.div
              variants={itemVariants}
              className="border-l-[3px] border-zinc-900 pl-6 md:pl-8 py-1.5 flex flex-col justify-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-cormorant font-light text-zinc-950 tracking-wide leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mt-3 font-montserrat">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-600">
                  {product.category}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-200" />
                <span className="text-xs font-medium uppercase tracking-[0.1em] text-zinc-400">
                  {product.tag}
                </span>
              </div>
            </motion.div>

            {/* Price and Status */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 mt-8">
              <span className="text-2xl sm:text-3xl font-light font-montserrat text-zinc-900">
                {product.price}
              </span>
              <span
                className={`text-[10px] font-bold font-montserrat uppercase tracking-[0.15em] py-1.5 px-3.5 rounded-full border ${
                  product.status === "In Stock"
                    ? "bg-emerald-50/50 text-emerald-600 border-emerald-500/20"
                    : product.status === "Limited Edition"
                    ? "bg-amber-50/50 text-amber-600 border-amber-500/20"
                    : "bg-blue-50/50 text-blue-600 border-blue-500/20"
                }`}
              >
                {product.status}
              </span>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="mt-8 w-full">
              <p className="text-base md:text-lg text-zinc-800 leading-relaxed font-montserrat font-light">
                {product.description}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mt-10">
              <Link
                href={`/contact?inquiry=${encodeURIComponent(product.name)}`}
                className="bg-zinc-950 hover:bg-zinc-800 text-white font-montserrat text-[11px] uppercase tracking-widest font-semibold py-3.5 px-10 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Request Quote
              </Link>
              <button className="bg-transparent border border-zinc-200 hover:border-zinc-950 hover:bg-zinc-50/50 text-zinc-800 font-montserrat text-[11px] uppercase tracking-widest font-semibold py-3.5 px-10 rounded-full transition-all active:scale-[0.98] cursor-pointer">
                Add to Wishlist
              </button>
            </motion.div>

            {/* Dimensions & Warranty Details */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-8 py-6 border-t border-b border-zinc-150/60 font-montserrat mt-10"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 block mb-1">
                  Dimensions
                </span>
                <span className="text-xs sm:text-sm font-semibold text-zinc-800">{product.dimensions}</span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 block mb-1">
                  Warranty
                </span>
                <span className="text-xs sm:text-sm font-semibold text-zinc-800">{product.warranty}</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Premium Image Showcase */}
          <motion.div
            variants={imageVariants}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center"
          >
            <div className="bg-gradient-to-b from-[#FAF8F5] to-[#f0f0ed] rounded-[2.5rem] flex items-center justify-center border border-zinc-200/50 aspect-[4/5] w-full relative overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.01)] p-8 sm:p-12 group transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.02)]">
              {!imageError && product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                  onError={() => setImageError(true)}
                  priority
                  unoptimized
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/60 backdrop-blur-xs rounded-full flex items-center justify-center text-cream-600 shadow-xs">
                    <svg className="w-8 h-8 text-cream-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l-2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
