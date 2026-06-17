"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const values = [
    {
      title: "German Engineering",
      description: "Precision-machined parts and high-quality materials built to perform flawlessly for decades.",
      icon: (
        <svg className="w-5 h-5 text-cream-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      )
    },
    {
      title: "Acoustic Silence",
      description: "Advanced soundproofing and vibration decoupling keep operation near-silent.",
      icon: (
        <svg className="w-5 h-5 text-cream-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
      )
    },
    {
      title: "Eco-Conscious Design",
      description: "Industry-leading energy ratings and eco-conscious manufacturing cycles minimize footprint.",
      icon: (
        <svg className="w-5 h-5 text-cream-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="bg-[#fcfbf9] py-32 px-6 sm:px-8 border-b border-zinc-100/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Visual Showcase (Large overlapping layout) */}
          <div className="lg:col-span-6 relative">
            {/* Background decorative box */}
            <div className="absolute inset-y-12 -left-4 w-full h-[90%] bg-cream-50 rounded-3xl -z-10 border border-cream-200/30" />
            
            {/* Main Image Container */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[450px] sm:h-[550px] w-full rounded-2xl overflow-hidden shadow-xl border border-white"
            >
              <Image
                src="/cta/fridge.jpg"
                alt="Luxury kitchen with Elentra appliances"
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, 50vw"
              />
            </motion.div>
            
            {/* Floating Luxury Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 right-6 bg-white/95 backdrop-blur-md px-6 py-5 rounded-2xl shadow-lg border border-cream-200/40 flex flex-col gap-1 text-right max-w-[200px]"
            >
              <span className="text-[10px] tracking-[0.25em] font-montserrat uppercase text-zinc-400 font-semibold">ESTABLISHED</span>
              <span className="text-2xl font-cormorant font-bold text-cream-600">2014</span>
              <p className="text-[11px] text-zinc-500 leading-normal font-light">Crafting reliable appliances for smarter homes.</p>
            </motion.div>
          </div>

          {/* Right Column: Editorial Text & Values */}
          <div className="lg:col-span-6 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-[0.3em] text-cream-500 font-montserrat font-bold">
                THE ELENTRA WAY
              </span>
              <h2 className="text-4xl sm:text-5xl font-cormorant font-light text-zinc-900 leading-tight">
                Quietly Redefining <br/>Home Comfort
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed font-light mt-2 max-w-xl">
                Elentra is dedicated to bringing innovative home appliances that blend cutting-edge technology with minimalist design. We believe every home deserves quality products that simplify life, perform silently, and respect the planet.
              </p>
            </div>

            {/* Brand Values Editorial List */}
            <div className="flex flex-col gap-6">
              {values.map((value, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex gap-5 p-5 rounded-2xl hover:bg-white border border-transparent hover:border-zinc-200/50 hover:shadow-sm transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cream-50 group-hover:bg-cream-100 flex items-center justify-center border border-cream-200/20 group-hover:border-cream-200/50 transition-colors duration-300">
                    {value.icon}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-sm uppercase tracking-[0.15em] font-montserrat font-semibold text-zinc-900 group-hover:text-cream-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-light">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section (Luxury Line Design) */}
        <div className="mt-28 pt-16 border-t border-zinc-200/60 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="text-5xl sm:text-6xl font-cormorant font-light text-cream-500 mb-2">15+</span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-montserrat text-zinc-400 font-semibold">Years of Excellence</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <span className="text-5xl sm:text-6xl font-cormorant font-light text-cream-500 mb-2">500+</span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-montserrat text-zinc-400 font-semibold">Precision Products</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <span className="text-5xl sm:text-6xl font-cormorant font-light text-cream-500 mb-2">50K+</span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-montserrat text-zinc-400 font-semibold">Homes Transformed</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
