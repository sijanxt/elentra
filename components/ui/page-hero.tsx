"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  description: string;
  bgColor?: string;
  bgImage?: string;
  bgOpacity?: number;
}

export default function PageHero({ 
  title, 
  description, 
  bgColor = "bg-champagne",
  bgImage,
  bgOpacity = 0.3
}: PageHeroProps) {
  return (
    <div className={`relative ${bgColor} pt-32 pb-20 px-4 overflow-hidden`}>
      {/* Background Image */}
      {bgImage && (
        <div className="absolute inset-0">
          <Image
            src={bgImage}
            alt="Hero Background"
            fill
            className="object-cover"
            style={{ opacity: bgOpacity }}
          />
        </div>
      )}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
}
