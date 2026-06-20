"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePreloaderFinished } from "@/hooks/use-preloader";

export default function SupportHero() {
  const isPreloaderFinished = usePreloaderFinished();

  const cities = [
    { name: "Elentra Kathmandu", href: "#" },
    { name: "Elentra Lalitpur", href: "#" },
    { name: "Elentra Bhaktapur", href: "#" },
    { name: "Elentra Pokhara", href: "#" },
    { name: "Elentra Chitwan", href: "#" },
    { name: "Elentra Narayangarh", href: "#" },
    { name: "Elentra Butwal", href: "#" },
    { name: "Elentra Biratnagar", href: "#" },
    { name: "Elentra Dharan", href: "#" },
    { name: "Elentra Itahari", href: "#" },
    { name: "Elentra Nepalgunj", href: "#" },
    { name: "Elentra Dhangadhi", href: "#" },
    { name: "Elentra Bhairahawa", href: "#" },
    { name: "Elentra Hetauda", href: "#" },
    { name: "Elentra Birgunj", href: "#" },
    { name: "Elentra Janakpur", href: "#" },
    { name: "Elentra Dang", href: "#" },
    { name: "Elentra Surkhet", href: "#" },
    { name: "Elentra Birtamode", href: "#" },
  ];

  // Animation variants for smooth premium entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <div className="bg-white pt-32 pb-16 border-b border-zinc-100">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={isPreloaderFinished ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Breadcrumbs matching image layout */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-1.5 text-[11px] font-montserrat tracking-wider text-zinc-400 uppercase mb-8"
        >
          <Link href="/" className="hover:text-zinc-650 transition-colors">
            Home
          </Link>
          <span className="text-zinc-300 font-light">/</span>
          <Link href="/products" className="hover:text-zinc-650 transition-colors">
            Services
          </Link>
          <span className="text-zinc-300 font-light">/</span>
          <span className="text-zinc-600 font-medium">Customer Service</span>
        </motion.div>

        {/* Title and Subtitle with a vertical bar accent on the left */}
        <motion.div
          variants={itemVariants}
          className="border-l-[3px] border-zinc-900 pl-6 md:pl-8 py-1.5 flex flex-col justify-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-cormorant font-light text-zinc-950 tracking-wide leading-tight">
            Elentra Customer Service
          </h1>
          <p className="text-sm sm:text-base text-zinc-500 font-montserrat font-light mt-3">
            Help, support and advice for Elentra home appliances
          </p>
        </motion.div>

        {/* Detailed description paragraph */}
        <motion.div variants={itemVariants} className="mt-14 w-full">
          <p className="text-base md:text-lg text-zinc-800 leading-relaxed font-montserrat font-light">
            For help, support and advice about Elentra home appliances, get in contact with the dedicated{" "}
            <strong className="font-semibold text-zinc-950">Spare Parts</strong> and{" "}
            <strong className="font-semibold text-zinc-950">Service Department</strong> in your city. Our certified support network is always available to guide you through product troubleshooting, official warranty coverage, and genuine spare parts lookup.
          </p>
        </motion.div>

        {/* Country links section */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-wrap gap-x-2 gap-y-3 items-center text-sm sm:text-base text-zinc-800 font-montserrat font-light leading-relaxed w-full"
        >
          {cities.map((city, index) => (
            <span key={city.name} className="inline-flex items-center">
              <Link
                href={city.href}
                className="underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-950 hover:text-zinc-950 font-medium transition-all"
              >
                {city.name}
              </Link>
              {index < cities.length - 1 && (
                <span className="text-zinc-300 ml-2 select-none" aria-hidden="true">
                  -
                </span>
              )}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}