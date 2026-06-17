"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full md:sticky md:bottom-0 md:-z-10">
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
      <div className="bg-[#0f0f0f] text-zinc-400 py-20 px-6 sm:px-8 border-t border-zinc-900 font-light text-sm">
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
              <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-4 font-montserrat uppercase">
                Innovative<br />
                appliances for<br />
                modern living®
              </h2>
            </div>
            <div className="text-zinc-600 text-xs font-montserrat tracking-wider mt-8 lg:mt-0">
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
              <div className="space-y-2.5">
                <a
                  href="mailto:info@elentra.com.np"
                  className="flex items-center gap-2 text-white hover:text-cream-500 transition-colors w-max"
                >
                  <Mail className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                  <span>info@elentra.com.np</span>
                </a>
                <p className="flex items-center gap-2 font-montserrat text-zinc-300 font-normal text-xs">
                  <Phone className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                  <span>+977 1 4000000</span>
                </p>
                <p className="flex items-start gap-2 leading-relaxed text-zinc-400 text-xs">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500 mt-0.5 shrink-0" />
                  <span>Maharajgunj, Kathmandu, Nepal</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-zinc-500 text-xs font-semibold uppercase tracking-widest font-montserrat mb-3">
                Lalitpur Showroom
              </h3>
              <div className="space-y-2.5">
                <a
                  href="mailto:sales@elentra.com.np"
                  className="flex items-center gap-2 text-white hover:text-cream-500 transition-colors w-max"
                >
                  <Mail className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                  <span>sales@elentra.com.np</span>
                </a>
                <p className="flex items-center gap-2 font-montserrat text-zinc-300 font-normal text-xs">
                  <Phone className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                  <span>+977 1 5000000</span>
                </p>
                <p className="flex items-start gap-2 leading-relaxed text-zinc-400 text-xs">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500 mt-0.5 shrink-0" />
                  <span>Pulchowk, Lalitpur, Nepal</span>
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
                <Link href="/smart-home" className="text-zinc-400 hover:text-white transition-colors duration-200">
                  Smart Home
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
              <div className="flex items-center gap-5 text-white">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream-500 transition-colors p-1"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream-500 transition-colors p-1"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream-500 transition-colors p-1"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </footer>
  );
}
