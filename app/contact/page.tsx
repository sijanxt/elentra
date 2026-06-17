"use client";

import { useState } from "react";
import PageHero from "@/components/ui/page-hero";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    purpose: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your submit logic here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        title="Let's bring innovation closer to you."
        description="Whether you're looking for premium home appliances or have questions about our products we'd love to hear from you!"
        bgImage="/hero/contact_hero.png"
        bgOpacity={0.65}
      />

      <div className="py-20 px-6 sm:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Conversational Form */}
          <form onSubmit={handleSubmit} className="space-y-8 text-lg sm:text-xl leading-loose text-zinc-800">
            {/* Line 1 - Name and Address on same row */}
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-4">
              <span className="font-light">Hello, I'm</span>
              <input
                type="text"
                placeholder="Full Name*"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="inline-flex min-w-[180px] flex-1 max-w-xs px-2 pb-1 border-b border-zinc-200 bg-transparent text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 transition-colors font-medium font-montserrat text-base"
                required
              />
              <span className="font-light">and I'm from</span>
              <input
                type="text"
                placeholder="Your Address*"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="inline-flex min-w-[200px] flex-1 max-w-xs px-2 pb-1 border-b border-zinc-200 bg-transparent text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 transition-colors font-medium font-montserrat text-base"
                required
              />
            </div>

            {/* Line 2 */}
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-4">
              <span className="font-light">I'm reaching out because</span>
              <input
                type="text"
                placeholder="Select a purpose..."
                value={formData.purpose}
                onChange={(e) => handleInputChange("purpose", e.target.value)}
                className="inline-flex min-w-[220px] flex-1 max-w-md px-2 pb-1 border-b border-zinc-200 bg-transparent text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 transition-colors font-medium font-montserrat text-base"
                required
              />
            </div>

            {/* Line 3 - Email and Phone on same row */}
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-4">
              <span className="font-light">You can contact me at</span>
              <input
                type="email"
                placeholder="Email Address*"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="inline-flex min-w-[200px] flex-1 max-w-xs px-2 pb-1 border-b border-zinc-200 bg-transparent text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 transition-colors font-medium font-montserrat text-base"
                required
              />
              <span className="font-light">and my number is</span>
              <span className="text-zinc-500 font-light">+977</span>
              <input
                type="tel"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="inline-flex min-w-[160px] flex-1 max-w-[200px] px-2 pb-1 border-b border-zinc-200 bg-transparent text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 transition-colors font-medium font-montserrat text-base"
                required
              />
            </div>

            {/* Line 4 - Textarea */}
            <div className="space-y-4 pt-4">
              <span className="block font-light">Here's a bit more I'd like to share:</span>
              <textarea
                placeholder="Share your interest, store details, questions..."
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                rows={4}
                className="w-full px-2 py-2 border-0 border-b border-zinc-200 bg-transparent text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 transition-colors resize-none font-light text-base"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-8">
              <button
                type="submit"
                className="group px-8 py-3 text-sm bg-transparent border border-zinc-900 hover:bg-zinc-900 text-zinc-900 hover:text-white font-medium rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                Submit Inquiry
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
