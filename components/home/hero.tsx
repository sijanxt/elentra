"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-zinc-950">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero/hero.png"
          alt="Elentra Luxury Home Appliances"
          fill
          priority
          className="object-cover"
          quality={100}
        />
      </div>
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950/30" />
      
      {/* Content */}
      <div className="relative h-full flex items-start pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto w-full grid lg:grid-cols-3 gap-8">
          {/* Column 1 - Large Heading (Right Aligned) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-right"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Smart
              <br />
              Living
              <br />
              <span className="text-cream-400">Redefined</span>
            </h1>
          </motion.div>

          {/* Column 2 - Description */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-48 lg:mt-64"
          >
            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed">
              Experience the future of home living with our German-engineered smart appliances. 
              Designed for those who appreciate the perfect blend of innovation, efficiency, 
              and timeless elegance.
            </p>
          </motion.div>
        </div>

        {/* Social Links - Absolute Bottom Right */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-16 right-16 lg:right-32"
        >
          <div className="flex flex-col gap-3 text-[#C5D9D9] items-end">
            <a 
              href="https://behance.net" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="text-sm font-medium">Behance</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="text-sm font-medium">Instagram</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="text-sm font-medium">LinkedIn</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator with Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-zinc-400 uppercase tracking-[0.25em] font-medium">
          Scroll
        </span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-zinc-400 to-transparent"
        />
      </motion.div>
    </div>
  );
}
