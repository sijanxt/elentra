"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { usePreloaderFinished } from "@/hooks/use-preloader";

interface PageHeroProps {
  title: string;
  description: string;
  bgColor?: string;
  bgImage?: string;
  bgOpacity?: number;
  sideImage?: string; // Optional image on the right side
}

export default function PageHero({ 
  title, 
  description, 
  bgColor = "bg-champagne",
  bgImage,
  bgOpacity = 0.5,
  sideImage
}: PageHeroProps) {
  const isPreloaderFinished = usePreloaderFinished();

  return (
    <div className={`relative ${bgColor} pt-36 pb-24 px-6 sm:px-8 overflow-hidden`}>
      {/* Background Image & Overlay */}
      {bgImage && (
        <>
          <div className="absolute inset-0">
            <Image
              src={bgImage}
              alt="Hero Background"
              fill
              className="object-cover"
              style={{ opacity: bgOpacity }}
              priority
              unoptimized
            />
          </div>
          {/* Subtle dark overlay for premium legibility */}
          <div className="absolute inset-0 bg-black/45 z-0" />
        </>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {sideImage ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text */}
            <div className="text-left max-w-xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={isPreloaderFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-cormorant font-light text-zinc-900 leading-tight mb-6"
              >
                {title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isPreloaderFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-zinc-600 text-base md:text-lg leading-relaxed font-light"
              >
                {description}
              </motion.p>
            </div>
            
            {/* Right Column: Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isPreloaderFinished ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-white/40"
            >
              <Image
                src={sideImage}
                alt="Contact Hero image"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </motion.div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={isPreloaderFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className={`text-4xl md:text-5xl font-cormorant font-light mb-6 tracking-wide ${
                bgImage ? "text-white" : "text-zinc-900"
              }`}
            >
              {title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isPreloaderFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light ${
                bgImage ? "text-zinc-200" : "text-zinc-600"
              }`}
            >
              {description}
            </motion.p>
          </div>
        )}
      </div>
    </div>
  );
}
