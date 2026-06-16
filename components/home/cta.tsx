"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-black px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/cta/new.png"
          alt="CTA Background"
          fill
          className="object-cover  opacity-80"
        />
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-5xl font-bold text-white tracking-tight mb-6"
        >
          Ready to Upgrade Your <br className="hidden sm:block" />
          <span className="text-cream-400">Living Space?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg text-zinc-900 leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Experience the perfect blend of innovation, efficiency, and design with Elentra's premium home appliances.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-2.5 text-base rounded-full font-semibold transition-all duration-300 border-2 border-white text-white hover:bg-white hover:text-black"
          >
            Schedule Consultation
          </Link>
          
          <Link
            href="#products"
            className="w-full sm:w-auto px-6 py-2.5 text-base rounded-full font-semibold transition-all duration-300 border-2 border-white text-white hover:bg-white hover:text-black"
          >
            Browse Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
