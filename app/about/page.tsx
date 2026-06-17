"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/page-hero";
import OurTeam from "./components/ourteam";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        title="About Elentra"
        description="Transforming homes with innovative appliances since 2014"
        bgImage="/hero/about_hero.png"
        bgOpacity={0.65}
      />

      {/* Main Content - Company Story */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6">
                Our Story
              </h2>
              <p className="text-lg text-zinc-700 leading-relaxed mb-6">
                <span className="font-semibold text-cream-400">Elentra</span>, established in 2014, is Nepal's trusted home appliance brand, delivering premium-quality products designed to simplify modern living.
              </p>
              <p className="text-base text-zinc-600 leading-relaxed">
                From smart kitchen solutions to advanced cooling and cleaning appliances, we provide innovative, energy-efficient technologies that enhance comfort, convenience, and everyday lifestyle. With a commitment to quality, durability, and modern design, Elentra empowers households with reliable appliances tailored for contemporary homes and smarter living experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <OurTeam />

      {/* Stats Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#C5D9D9] rounded-3xl p-12"
          >
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <h3 className="text-5xl font-bold text-secondary mb-2">10+</h3>
                <p className="text-zinc-700 font-medium">Years of Excellence</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-secondary mb-2">5000+</h3>
                <p className="text-zinc-700 font-medium">Happy Customers</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-secondary mb-2">50+</h3>
                <p className="text-zinc-700 font-medium">Product Range</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
