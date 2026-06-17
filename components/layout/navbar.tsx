"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import SoundToggle from "../ui/sound-toggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
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

  return (
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
              { name: "Smart Home", href: "/smart-home" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors duration-300 text-base font-semibold ${
                  shouldShowOpaque 
                    ? "text-secondary hover:text-cream-600" 
                    : "text-white hover:text-white/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Section: Sound Toggle & Mobile Menu button */}
          <div className="flex items-center gap-4">
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
              { name: "Smart Home", href: "/smart-home" },
              { name: "Deals", href: "/products" },
              { name: "Contact", href: "/contact" },
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
          </div>
        </div>
      )}
    </nav>
  );
}
