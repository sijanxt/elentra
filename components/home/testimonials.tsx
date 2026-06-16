"use client";

import { useState } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner, Austin TX",
      image: "SJ",
      rating: 5,
      text: "The AeroFresh refrigerator has completely transformed our kitchen. The triple-zone system keeps our produce fresh for weeks! Installation was seamless and the team was incredibly professional."
    },
    {
      name: "Michael Chen",
      role: "Interior Designer, Seattle",
      image: "MC",
      rating: 5,
      text: "I recommend Elentra to all my clients. The sleek design and whisper-quiet operation of their appliances perfectly complement modern homes. Outstanding quality and customer service."
    },
    {
      name: "Emily Rodriguez",
      role: "Chef, Miami",
      image: "ER",
      rating: 5,
      text: "The Quantum Wave Smart Oven is a game-changer! The AI camera sensor ensures perfect results every time. It's like having a sous chef in my kitchen. Absolutely worth the investment."
    },
    {
      name: "David Thompson",
      role: "Real Estate Developer, NYC",
      image: "DT",
      rating: 5,
      text: "We've equipped 50+ luxury apartments with Elentra appliances. Residents love the smart home integration and energy efficiency. The 5-year warranty gives everyone peace of mind."
    },
    {
      name: "Lisa Patel",
      role: "Sustainability Consultant, SF",
      image: "LP",
      rating: 5,
      text: "Finally, appliances that match my eco-conscious values! The energy savings are impressive, and the build quality means these will last for years. Elentra is the future of home appliances."
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-primary py-28 px-4 sm:px-6 lg:px-8 border-b border-zinc-200/40 dark:border-zinc-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-cream-600 dark:text-cream-400 font-bold mb-3 block">
            Customer Stories
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight mb-6">
            Loved by Thousands
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
            Hear what our customers have to say about their Elentra experience.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative bg-white dark:bg-zinc-900 rounded-3xl p-8 sm:p-12 border border-zinc-200/40 dark:border-zinc-900/40 mb-12 animate-fade-in">
          <div className="absolute top-8 left-8 text-cream-500/20 text-6xl font-serif">"</div>
          
          <div className="relative z-10">
            {/* Rating Stars */}
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed text-center mb-8 font-light max-w-3xl mx-auto">
              {testimonials[activeIndex].text}
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cream-400 to-cream-600 flex items-center justify-center text-white font-bold text-lg">
                {testimonials[activeIndex].image}
              </div>
              <div className="text-left">
                <h4 className="font-bold text-zinc-900 dark:text-zinc-50">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-cream-500 dark:hover:bg-cream-600 text-zinc-700 dark:text-zinc-300 hover:text-white transition-all duration-300 flex items-center justify-center group"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-cream-600 w-8"
                    : "bg-zinc-300 dark:bg-zinc-700 hover:bg-cream-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-cream-500 dark:hover:bg-cream-600 text-zinc-700 dark:text-zinc-300 hover:text-white transition-all duration-300 flex items-center justify-center group"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 pt-16 border-t border-zinc-200/40 dark:border-zinc-900/40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <h3 className="text-4xl font-extrabold text-cream-600 dark:text-cream-400 mb-2">50K+</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Happy Customers</p>
            </div>
            <div className="animate-fade-in animation-delay-100">
              <h3 className="text-4xl font-extrabold text-cream-600 dark:text-cream-400 mb-2">4.9★</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Average Rating</p>
            </div>
            <div className="animate-fade-in animation-delay-200">
              <h3 className="text-4xl font-extrabold text-cream-600 dark:text-cream-400 mb-2">98%</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Satisfaction Rate</p>
            </div>
            <div className="animate-fade-in animation-delay-300">
              <h3 className="text-4xl font-extrabold text-cream-600 dark:text-cream-400 mb-2">24/7</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
