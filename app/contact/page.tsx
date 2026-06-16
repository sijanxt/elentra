"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    email: "",
    phone: "",
    name: "",
    message: "",
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactForm);
    // Add your submit logic here
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscribed:", newsletterEmail);
    // Add your submit logic here
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <div className="relative bg-[#C5D9D9] pt-32 pb-20 px-4 overflow-hidden">
        {/* Decorative Elements */}
        {/* <div className="absolute top-10 left-10 opacity-30">
          <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20L20 10L30 20L20 30L10 20Z M30 20L40 10L50 20L40 30L30 20Z M50 20L60 10L70 20L60 30L50 20Z" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div> */}
        
        {/* <div className="absolute bottom-10 right-10 opacity-30">
          <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 30L20 20L30 30L20 40L10 30Z M30 30L40 20L50 30L40 40L30 30Z M50 30L60 20L70 30L60 40L50 30Z M70 30L80 20L90 30L80 40L70 30Z" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div> */}

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Get in touch with us for any inquiries about our products and services.
          </p>
        </div>
      </div>

      {/* Logo Strip */}
      {/* <div className="bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-gray-400 font-semibold text-xl flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">L</span>
              </div>
              <span>logoipsum</span>
            </div>
            <div className="text-gray-400 font-semibold text-xl flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded"></div>
              <span>LOGOIPSUM</span>
            </div>
            <div className="text-gray-400 font-semibold text-xl">
              LOGO<span className="text-gray-300">ipsum</span>
            </div>
            <div className="text-gray-400 font-semibold text-xl flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 transform rotate-45"></div>
              <span>LOGOIPSUM</span>
            </div>
          </div>
        </div>
      </div> */}

      <div className="px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Contact Form + Newsletter */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              {/* Email and Phone Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="Email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full px-6 py-5 bg-[#C5D9D9] rounded-full text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6B9999]"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                  className="w-full px-6 py-5 bg-[#C5D9D9] rounded-full text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6B9999]"
                  required
                />
              </div>

              {/* Name Input */}
              <input
                type="text"
                placeholder="Name"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                className="w-full px-6 py-5 bg-[#C5D9D9] rounded-full text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6B9999]"
                required
              />

              {/* Message Textarea */}
              <textarea
                placeholder="Message"
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                rows={6}
                className="w-full px-6 py-5 bg-[#C5D9D9] rounded-3xl text-gray-700 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6B9999] resize-none"
                required
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="px-10 py-4 bg-[#5D8A8A] hover:bg-[#4A7070] text-white font-medium rounded-full transition-colors"
              >
                Submit Button
              </button>
            </form>
          </div>

          {/* Newsletter Card - Takes 1 column */}
          <div className="bg-[#6B9999] rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Our Newsletters</h2>
            <p className="text-white/90 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full px-6 py-4 bg-white rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-4 bg-[#2C4A4A] hover:bg-[#1F3535] text-white font-medium rounded-full transition-colors"
              >
                Submit Button
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Phone Card */}
          <div className="bg-[#A8C5C5] rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold text-gray-800">(+876) 765 665</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et tellus, luctus nec.
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-[#B8D4D4] rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-8 h-8 text-gray-700" />
              <h3 className="text-2xl font-bold text-gray-800">mail@influenca.id</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et tellus, luctus nec.
            </p>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-8 h-8 text-gray-700" />
              <h3 className="text-2xl font-bold text-gray-800">London Eye London</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et tellus, luctus nec.
            </p>
          </div>
        </div>

        {/* Map Section */}
        {/* <div className="bg-white rounded-3xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540943553381!2d-0.1217437!3d51.5033635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1234567890123"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div> */}
      </div>
    </div>
    </div>
  );
}
