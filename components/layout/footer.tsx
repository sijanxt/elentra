"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full md:sticky md:bottom-0 md:z-0">
      {/* Top Section: Contact Banner */}
      <div className="bg-white border-t border-zinc-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-4">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 text-zinc-400 text-xs md:text-sm font-semibold tracking-wider font-montserrat uppercase"
          >
            <span>Heard enough?</span>
          </motion.div>

          {/* Center Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex-grow md:ml-12 lg:ml-24"
          >
            <Link href="/contact" className="group relative inline-block">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-zinc-900 pb-3 transition-colors">
                Contact us
              </h2>
            </Link>
          </motion.div>

          {/* Right Cream Circle Link */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-cream-500 flex items-center justify-center text-zinc-950 hover:bg-zinc-900 hover:text-white transition-all duration-300 shadow-md group cursor-pointer shrink-0"
            >
              <ArrowRight
                className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300"
                strokeWidth={2.5}
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section: Dark Footer */}
      <div className="bg-[#0f0f0f] text-zinc-400 py-20 px-6 sm:px-8 border-t border-zinc-900 font-light text-sm font-montserrat">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Brand Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col justify-between h-full min-h-[180px]"
          >
            <div>
              <h2 className="text-white text-3xl md:text-4xl font-light leading-tight tracking-[0.12em] mb-4 font-cormorant uppercase">
                Innovative<br />
                appliances for<br />
                modern living®
              </h2>
            </div>
            <div className="text-zinc-400 text-xs font-montserrat tracking-wider mt-8 lg:mt-auto">
              © 2026 ELENTRA APPLIANCES. ALL RIGHTS RESERVED.
            </div>
          </motion.div>

          {/* Column 2: Locations (Kathmandu & Lalitpur Combined) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-3 flex flex-col justify-between space-y-6"
          >
            <div>
              <h3 className="text-zinc-500 text-xs font-semibold uppercase tracking-widest font-montserrat mb-3">
                Kathmandu (HQ)
              </h3>
              <div className="space-y-1">
                <a
                  href="mailto:info@elentra.com.np"
                  className="block text-white hover:text-cream-500 transition-colors w-max"
                >
                  info@elentra.com.np
                </a>
                <p className="font-montserrat text-zinc-300 font-normal text-xs">+977 1 4000000</p>
                <p className="leading-relaxed text-zinc-400 text-xs">
                  Maharajgunj, Kathmandu, Nepal
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-zinc-500 text-xs font-semibold uppercase tracking-widest font-montserrat mb-3">
                Lalitpur Showroom
              </h3>
              <div className="space-y-1">
                <a
                  href="mailto:sales@elentra.com.np"
                  className="block text-white hover:text-cream-500 transition-colors w-max"
                >
                  sales@elentra.com.np
                </a>
                <p className="font-montserrat text-zinc-300 font-normal text-xs">+977 1 5000000</p>
                <p className="leading-relaxed text-zinc-400 text-xs">
                  Pulchowk, Lalitpur, Nepal
                </p>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 flex flex-col space-y-4"
          >
            <h3 className="text-zinc-500 text-xs font-semibold uppercase tracking-widest font-montserrat mb-2">
              Explore
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-zinc-400 hover:text-white transition-colors duration-200">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-zinc-400 hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-zinc-400 hover:text-white transition-colors duration-200">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Newsletter & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="lg:col-span-3 flex flex-col justify-between space-y-8"
          >
            <div>
              <h3 className="text-zinc-500 text-xs font-semibold uppercase tracking-widest font-montserrat mb-4">
                Want to upgrade your home?
              </h3>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 max-w-sm mt-3 border-b border-zinc-700 pb-1 group focus-within:border-cream-500 transition-colors duration-300">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-transparent text-white text-xs font-light py-1 focus:outline-none placeholder-zinc-500"
                  required
                />
                <button
                  type="submit"
                  className="text-xs text-white hover:text-cream-500 font-semibold tracking-wider uppercase flex items-center gap-1 transition-all cursor-pointer whitespace-nowrap px-1 py-1"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-zinc-500 text-xs font-semibold uppercase tracking-widest font-montserrat mb-4">
                Follow Us
              </h3>
              <ul className="space-y-3 text-zinc-400">
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-200 flex items-center gap-1.5 w-max text-xs"
                  >
                    <span>Facebook</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-200 flex items-center gap-1.5 w-max text-xs"
                  >
                    <span>Instagram</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-200 flex items-center gap-1.5 w-max text-xs"
                  >
                    <span>LinkedIn</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
          
        </div>
      </div>
    </footer>
  );
}
