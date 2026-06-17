"use client";

import Link from "next/link";
import PageHero from "@/components/ui/page-hero";
import { motion, useScroll, useTransform } from "framer-motion";
import OurTeam from "./components/ourteam";
import Image from "next/image";
import { useRef } from "react";

export default function AboutPage() {
  const storyImageContainerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: storyImageContainerRef,
    offset: ["start end", "end start"]
  });

  const storyImageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className="min-h-screen bg-white pb-16">
      {/* Hero Section */}
      <PageHero
        title="About Elentra"
        description="Redefining home comfort through innovation, precision engineering, and sustainable design."
        bgImage="/hero/about_hero.png"
        bgOpacity={0.65}
      />

      {/* Stats Section directly below Hero */}
      <div className="border-b border-zinc-100 bg-[#fdfcfa] py-16 px-6 sm:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        {/* Story Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-cream-600 uppercase tracking-wider mb-4 block font-montserrat">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-cormorant font-light text-zinc-900 mb-6 leading-tight">
                15+ Years of Excellence in Home Innovation
              </h2>
              <p className="text-base text-zinc-600 leading-relaxed mb-6 font-light">
                Founded in 2009, Elentra began with a simple vision: to create home appliances that seamlessly blend into modern life while delivering exceptional performance. What started as a small engineering team has grown into a global brand trusted by over 50,000 households.
              </p>
              <p className="text-base text-zinc-600 leading-relaxed font-light">
                Today, we continue to push the boundaries of what's possible, combining German engineering precision with smart technology to create appliances that don't just work—they enhance your entire living experience.
              </p>
            </div>
            <div
              ref={storyImageContainerRef}
              className="relative h-96 w-full rounded-3xl overflow-hidden shadow-md border border-zinc-100"
            >
              <motion.div
                style={{ y: storyImageY }}
                className="absolute inset-0 h-[120%] w-full -top-[10%]"
              >
                <Image
                  src="/about/story.png"
                  alt="Elentra Luxury Kitchen"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </div>
        </div>


      </div>

      {/* Our Team Slider (Full-Bleed) */}
      <OurTeam />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        {/* CTA */}
        <div className="text-center bg-zinc-900 text-white rounded-3xl p-12 shadow-xl border border-zinc-800">
          <h2 className="text-3xl sm:text-4xl font-cormorant font-light mb-4">
            Ready to Transform Your Home?
          </h2>
          <p className="text-base text-zinc-400 mb-8 max-w-2xl mx-auto font-light">
            Discover our range of premium appliances and experience the Elentra difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-cream-600 hover:bg-cream-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Browse Products
            </Link>
            <Link
              href="/contact"
              className="bg-transparent hover:bg-white/10 text-white border border-white/20 font-semibold px-8 py-3 rounded-full transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
