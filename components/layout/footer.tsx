"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-white text-zinc-900 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <h2 className="text-3xl font-cormorant font-semibold mb-4 text-zinc-900 tracking-wide">Elentra</h2>
            <p className="text-zinc-500 text-sm leading-relaxed font-light">
              Transform your home with cutting-edge appliances designed for modern living.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xs uppercase tracking-[0.2em] font-montserrat font-semibold mb-6 text-zinc-800">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-zinc-500 hover:text-cream-600 transition-colors duration-300 text-sm font-light">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-zinc-500 hover:text-cream-600 transition-colors duration-300 text-sm font-light">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-zinc-500 hover:text-cream-600 transition-colors duration-300 text-sm font-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-500 hover:text-cream-600 transition-colors duration-300 text-sm font-light">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xs uppercase tracking-[0.2em] font-montserrat font-semibold mb-6 text-zinc-800">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-zinc-500 hover:text-cream-600 transition-colors duration-300 text-sm font-light">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-zinc-500 hover:text-cream-600 transition-colors duration-300 text-sm font-light">
                  Catalog
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-zinc-500 hover:text-cream-600 transition-colors duration-300 text-sm font-light">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/" className="text-zinc-500 hover:text-cream-600 transition-colors duration-300 text-sm font-light">
                  Home
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xs uppercase tracking-[0.2em] font-montserrat font-semibold mb-6 text-zinc-800">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#products" className="text-zinc-500 hover:text-cream-600 transition-colors duration-300 text-sm font-light">
                  Catalog
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-zinc-500 hover:text-cream-600 transition-colors duration-300 text-sm font-light">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-zinc-500 hover:text-cream-600 transition-colors duration-300 text-sm font-light">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-500 hover:text-cream-600 transition-colors duration-300 text-sm font-light">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Contact Info Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-zinc-100"
        >
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-cream-500" />
            <span className="text-zinc-600 text-sm font-light">123 Home Street, City, State 12345</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-cream-500" />
            <span className="text-zinc-600 text-sm font-light">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-cream-500" />
            <span className="text-zinc-600 text-sm font-light font-montserrat">support@elentra.com</span>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center pt-8 border-t border-zinc-100"
        >
          <p className="text-zinc-400 text-xs font-montserrat tracking-wider">
            © 2024 Elentra - All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
