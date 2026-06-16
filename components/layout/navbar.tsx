"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-sm" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className={`text-3xl transition-colors duration-300 ${
              isScrolled ? "text-secondary" : "text-white"
            }`}>
              Elentra
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-8">
            {[
              { name: "Home", href: "/" },
              { name: "Shop", href: "/products" },
              { name: "Categories", href: "/products" },
              { name: "Smart Home", href: "/products" },
              { name: "Deals", href: "/products" },
              { name: "Support", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors duration-300 text-base font-semibold ${
                  isScrolled 
                    ? "text-secondary hover:text-cream-600" 
                    : "text-white hover:text-white/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Get Quote Button - Right Side */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className={`px-5 py-1.5 text-sm rounded-full font-semibold transition-all duration-300 border-2 ${
                isScrolled
                  ? "border-secondary text-secondary hover:bg-secondary hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-secondary"
              }`}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`focus:outline-none transition-colors duration-300 ${
                isScrolled ? "text-secondary hover:text-cream-600" : "text-white hover:text-white/80"
              }`}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-zinc-200/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { name: "Home", href: "/" },
              { name: "Shop", href: "/products" },
              { name: "Categories", href: "/products" },
              { name: "Smart Home", href: "/products" },
              { name: "Deals", href: "/products" },
              { name: "Support", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-cream-600 hover:bg-zinc-50 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mx-3 mt-4 text-center bg-cream-600 hover:bg-cream-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
