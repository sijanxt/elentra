"use client";

import { motion } from "framer-motion";

export default function Features() {
  return (
    <section className="bg-zinc-50 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header with Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-cream-400">
              Elentra
            </h2>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
              Enhancing Technologies
            </h2>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto text-center"
        >
          <p className="text-base text-zinc-700 leading-relaxed">
            <span className="font-semibold text-cream-400">Elentra</span>,  established in 2014, is Nepal’s trusted home appliance brand, delivering premium-quality products designed to simplify modern living. From smart kitchen solutions to advanced cooling and cleaning appliances, we provide innovative, energy-efficient technologies that enhance comfort, convenience, and everyday lifestyle. With a commitment to quality, durability, and modern design, Elentra empowers households with reliable appliances tailored for contemporary homes and smarter living experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
