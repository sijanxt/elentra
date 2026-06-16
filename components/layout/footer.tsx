import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary">
      <div className="max-w-7xl mx-auto  py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold mb-4">Elentra</h2>
            <p className="text-secondary/80 text-sm leading-relaxed">
              Transform your home with cutting-edge appliances designed for modern living.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-secondary/70 hover:text-secondary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-secondary/70 hover:text-secondary transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-secondary/70 hover:text-secondary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary/70 hover:text-secondary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-secondary/70 hover:text-secondary transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-secondary/70 hover:text-secondary transition-colors text-sm">
                  Catalog
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-secondary/70 hover:text-secondary transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/" className="text-secondary/70 hover:text-secondary transition-colors text-sm">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#products" className="text-secondary/70 hover:text-secondary transition-colors text-sm">
                  Catalog
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-secondary/70 hover:text-secondary transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-secondary/70 hover:text-secondary transition-colors text-sm">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary/70 hover:text-secondary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-secondary/20">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-secondary/60" />
            <span className="text-secondary/80 text-sm">123 Home Street, City, State 12345</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-secondary/60" />
            <span className="text-secondary/80 text-sm">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-secondary/60" />
            <span className="text-secondary/80 text-sm">support@elentra.com</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center pt-8 border-t border-secondary/20">
          <p className="text-secondary/60 text-sm">
            © 2024 Elentra - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
