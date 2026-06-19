"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full md:sticky md:bottom-0 md:z-0">
      {/* Bottom Section: Dark Footer */}
      <div className="bg-[#0f0f0f] text-zinc-400 min-h-screen flex flex-col justify-between pt-32 pb-8 border-t border-zinc-900 font-light text-sm font-montserrat">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Column 1: Brand Pitch */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 flex flex-col justify-start"
            >
              <div>
                <h2 className="text-white text-[2rem] md:text-[2.5rem] font-medium  tracking-[0.15em] mb-6 font-cormorant capitalize">
                  Innovative<br />
                  appliances for<br />
                  modern living®
                </h2>
              </div>
            </motion.div>

            {/* Column 2: Locations (Kathmandu & Lalitpur Combined) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-3 flex flex-col justify-between space-y-8"
            >
              <div>
                <h3 className="text-zinc-500 text-xs font-semibold uppercase tracking-widest font-montserrat mb-4">
                  Kathmandu (HQ)
                </h3>
                <div className="space-y-2">
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
                <h3 className="text-zinc-500 text-xs font-semibold uppercase tracking-widest font-montserrat mb-4">
                  Lalitpur Showroom
                </h3>
                <div className="space-y-2">
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
              <ul className="space-y-4">
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
                <ul className="space-y-4 text-zinc-400">
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

        {/* Giant ELENTRA text (FULL WIDTH - centered vertically) */}
        <div className="w-full select-none pointer-events-none text-center my-auto py-10 border-y border-zinc-900/50 overflow-hidden">
          <h1 className="text-[15vw] font-bold leading-none tracking-[0.08em] text-transparent [-webkit-text-stroke:1px_#222222] uppercase font-montserrat w-full block">
            Elentra
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
          {/* Bottom Copyright & WebX Nepal Logo */}
          <div className="mt-8 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs tracking-wider text-zinc-500 font-montserrat">
            <div>
              © 2026 ELENTRA APPLIANCES. ALL RIGHTS RESERVED.
            </div>
            <div className="flex items-center gap-3">
              <span>Designed & Developed by</span>
              <a
                href="https://www.webxnepal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-opacity hover:opacity-100"
              >
                <img
                  src="https://www.webxnepal.com/logo/logo.svg"
                  alt="WebX Nepal"
                  className="h-4 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
