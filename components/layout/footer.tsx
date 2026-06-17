"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-100">
      <div className="max-w-7xl mx-auto  py-16">
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
            <h2 className="text-3xl font-bold mb-4">Elentra</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
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
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors text-sm">
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
            <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Catalog
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors text-sm">
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
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#products" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Catalog
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors text-sm">
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-zinc-800"
        >
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-zinc-500" />
            <span className="text-zinc-400 text-sm">123 Home Street, City, State 12345</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-zinc-500" />
            <span className="text-zinc-400 text-sm">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-zinc-500" />
            <span className="text-zinc-400 text-sm">support@elentra.com</span>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center pt-8 border-t border-zinc-800"
        >
          <p className="text-zinc-500 text-sm">
            © 2024 Elentra - All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
