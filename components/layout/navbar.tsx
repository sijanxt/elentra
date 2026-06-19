"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SoundToggle from "../ui/sound-toggle";
import { products } from "@/lib/products";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  const handleImageError = (imageSrc: string) => {
    setImageErrors((prev) => ({ ...prev, [imageSrc]: true }));
  };
  const shouldShowOpaque = isScrolled || pathname !== "/";

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Check if scrolled past 50px
          setIsScrolled(currentScrollY > 50);

          // Check if scrolled into the footer area (approx 800px from the bottom, only if page is tall enough)
          const scrollHeight = document.documentElement.scrollHeight;
          const clientHeight = document.documentElement.clientHeight;
          const isAtFooter = scrollHeight - clientHeight > 800 && currentScrollY + clientHeight >= scrollHeight - 800;

          if (isAtFooter) {
            setIsVisible(false);
          } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down & past 100px
            setIsVisible(false);
          } else {
            // Scrolling up
            setIsVisible(true);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when search is open
  useEffect(() => {
    if (searchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [searchOpen]);

  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
           product.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      shouldShowOpaque 
        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-zinc-200/50" 
        : "bg-transparent"
    } ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className={`text-3xl font-cormorant font-semibold transition-colors duration-300 ${
              shouldShowOpaque ? "text-secondary" : "text-white"
            }`}>
              Elentra
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-8">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Shop", href: "/products" },
              { name: "Blog", href: "/blog" },
              { name: "Support", href: "/support" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors duration-300 text-sm tracking-wider font-medium font-montserrat uppercase ${
                  shouldShowOpaque 
                    ? "text-secondary hover:text-cream-600" 
                    : "text-white hover:text-white/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Section: Search, Sound Toggle & Mobile Menu button */}
          <div className="flex items-center gap-3">
            {/* Search Trigger Icon */}
            <button
              onClick={() => setSearchOpen(true)}
              className={`p-2 rounded-full hover:bg-zinc-100/10 transition-colors duration-300 ${
                shouldShowOpaque ? "text-secondary hover:text-cream-600 hover:bg-zinc-100" : "text-white hover:text-white/80"
              }`}
              aria-label="Search products"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <SoundToggle isOpaque={shouldShowOpaque} />

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`focus:outline-none transition-colors duration-300 ${
                  shouldShowOpaque ? "text-secondary hover:text-cream-600" : "text-white hover:text-white/80"
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
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-zinc-200/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { name: "Home", href: "/" },
              { name: "Shop", href: "/products" },
              { name: "Categories", href: "/products" },
              { name: "Blog", href: "/blog" },
              { name: "Deals", href: "/products" },
              { name: "Support", href: "/support" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-sm font-medium font-montserrat uppercase tracking-wider text-secondary hover:text-cream-600 hover:bg-zinc-50 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>

    {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] flex flex-col bg-white"
          >
            {/* Header */}
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between border-b border-zinc-100">
              <div className="flex-1 max-w-xl mx-auto flex items-center gap-3 bg-zinc-50 border border-zinc-200/80 px-4 py-2 rounded-full">
                {/* Search Icon */}
                <svg className="w-4 h-4 text-zinc-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {/* Input */}
                <input
                  type="text"
                  placeholder="Search premium appliances..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full text-sm text-secondary bg-transparent border-0 focus:outline-none focus:ring-0 placeholder-zinc-400 p-0"
                />
                {/* Clear query button if typed */}
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")} 
                    className="text-zinc-400 hover:text-zinc-600 p-0.5 rounded-full hover:bg-zinc-200 transition-colors"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                }}
                className="p-2 text-zinc-400 hover:text-zinc-950 rounded-full hover:bg-zinc-100 transition-all duration-300 flex items-center justify-center shrink-0 ml-4"
                aria-label="Close search"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto bg-zinc-50/40 py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                {searchQuery.trim().length > 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-between mb-8 border-b border-zinc-100 pb-3">
                      <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                        Search Results
                      </h4>
                      <span className="text-xs text-cream-600 font-semibold">
                        {filteredProducts.length} items found
                      </span>
                    </div>
                    
                    {filteredProducts.length > 0 ? (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
                        {filteredProducts.map((product) => {
                          const hasImageError = imageErrors[product.image];
                          return (
                            <Link
                              key={product.id}
                              href={`/products/${product.id}`}
                              onClick={() => {
                                setSearchOpen(false);
                                setSearchQuery("");
                              }}
                              className="group flex flex-col"
                            >
                              {/* Image Area */}
                              <div className="aspect-[4/5] relative overflow-hidden bg-white border border-zinc-200/80 rounded-2xl shadow-xs group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                                {(!hasImageError && product.image) ? (
                                  <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={() => handleImageError(product.image)}
                                    unoptimized
                                  />
                                ) : (
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-zinc-50 flex items-center justify-center text-zinc-400">
                                      <svg className="w-10 h-10 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l-2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                                      </svg>
                                    </div>
                                  </div>
                                )}
                              </div>

                              {/* Details Area */}
                              <div className="pt-4 px-1">
                                {/* Product Name */}
                                <h3 className="text-sm font-bold text-zinc-900 group-hover:text-cream-600 transition-colors line-clamp-1">
                                  {product.name}
                                </h3>
                                {/* Price */}
                                <p className="text-xs font-semibold text-zinc-500 mt-1">
                                  {product.price}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="text-center py-20 bg-white rounded-2xl border border-zinc-100 p-8 shadow-sm">
                        <svg className="w-12 h-12 text-zinc-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-sm text-zinc-500 font-light">No premium appliances match "{searchQuery}"</p>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="grid md:grid-cols-3 gap-12"
                  >
                    {/* Suggested Categories */}
                    <div className="md:col-span-2">
                      <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">
                        Explore Categories
                      </h4>
                      <div className="flex flex-wrap gap-2.5">
                        {[
                          "Kitchen Appliances",
                          "Refrigeration",
                          "Climate Control",
                          "Laundry Care",
                          "Cleaning",
                          "Smart Home"
                        ].map((cat) => (
                          <button
                            key={cat}
                            onClick={() => setSearchQuery(cat)}
                            className="px-4 py-2.5 bg-white border border-zinc-200/60 text-zinc-700 hover:border-cream-600 hover:text-cream-600 hover:bg-cream-50/20 text-xs font-semibold rounded-full shadow-xs transition-all duration-300"
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Popular Products */}
                    <div>
                      <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">
                        Popular Products
                      </h4>
                      <div className="space-y-4">
                        {products.slice(0, 3).map((p) => (
                          <Link
                            key={p.id}
                            href={`/products/${p.id}`}
                            onClick={() => {
                              setSearchOpen(false);
                              setSearchQuery("");
                            }}
                            className="flex items-center gap-3.5 group"
                          >
                            <div className="w-12 h-12 relative bg-white border border-zinc-150 rounded-xl overflow-hidden flex items-center justify-center p-2 shadow-xs group-hover:border-cream-300 transition-colors">
                              <Image src={p.image} alt={p.name} fill className="object-contain p-1" unoptimized />
                            </div>
                            <div className="min-w-0">
                              <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block">
                                {p.category}
                              </span>
                              <span className="text-xs font-bold text-zinc-800 group-hover:text-cream-600 transition-colors line-clamp-1">
                                {p.name}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
