"use client";

import Title from "@/components/ui/title";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section className="bg-white py-24 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Title
          creamText="Elentra"
          primaryText="Enhancing Technologies"
          className="mb-12"
        />

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto text-center"
        >
          <p className="text-base text-zinc-600 leading-relaxed font-light">
            <span className="font-semibold text-cream-600">Elentra</span>,  established in 2014, is Nepal's trusted home appliance brand, delivering premium-quality products designed to simplify modern living. From smart kitchen solutions to advanced cooling and cleaning appliances, we provide innovative, energy-efficient technologies that enhance comfort, convenience, and everyday lifestyle. With a commitment to quality, durability, and modern design, Elentra empowers households with reliable appliances tailored for contemporary homes and smarter living experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
