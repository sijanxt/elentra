"use client";

import Link from "next/link";
import PageHero from "@/components/ui/page-hero";
import { motion } from "framer-motion";

export default function AboutPage() {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
      title: "German Engineering",
      description: "Precision-machined parts and high-quality materials built to perform flawlessly for decades."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
      ),
      title: "Acoustic Silence",
      description: "Advanced soundproofing and vibration decoupling keep operation near-silent."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
      title: "Eco-Conscious Design",
      description: "Industry-leading energy ratings and eco-conscious manufacturing cycles minimize footprint."
    }
  ];

  const team = [
    {
      name: "Innovation",
      description: "Pushing boundaries with cutting-edge technology and design thinking."
    },
    {
      name: "Quality",
      description: "Uncompromising standards in every component and manufacturing process."
    },
    {
      name: "Sustainability",
      description: "Committed to reducing environmental impact through efficient design."
    },
    {
      name: "Customer First",
      description: "Building lasting relationships through exceptional service and support."
    }
  ];

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
            <div className="bg-gradient-to-br from-cream-50 to-cream-100/50 rounded-3xl h-96 flex items-center justify-center border border-cream-200/20 shadow-sm">
              <div className="text-center">
                <div className="text-6xl font-cormorant font-light text-cream-600 mb-2">15+</div>
                <p className="text-zinc-500 font-montserrat tracking-wider text-xs uppercase font-semibold">Years of Innovation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-cormorant font-light text-zinc-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto font-light text-sm">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-zinc-50/50 rounded-2xl p-8 border border-zinc-200/60 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cream-400/10 to-cream-500/20 rounded-xl flex items-center justify-center text-cream-600 mb-6 border border-cream-200/20">
                  {value.icon}
                </div>
                <h3 className="text-lg font-montserrat uppercase tracking-wider font-semibold text-zinc-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed font-light text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-20 bg-zinc-50/50 rounded-3xl p-12 border border-zinc-200/50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-cormorant font-light text-zinc-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-zinc-700 leading-relaxed mb-8 font-light">
              To transform every home into a sanctuary of comfort, efficiency, and style through innovative appliances that respect both people and planet.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {team.map((item, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <h4 className="text-xl font-cormorant font-semibold text-cream-600">{item.name}</h4>
                  <p className="text-xs text-zinc-500 leading-normal font-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

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
