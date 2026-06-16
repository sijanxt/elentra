"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What warranty do you offer on your appliances?",
      answer: "All Elentra appliances come with an industry-leading 5-year comprehensive warranty covering parts and labor. Extended warranty options are also available for up to 10 years."
    },
    {
      question: "Do you provide free installation?",
      answer: "Yes! Professional installation by certified technicians is included at no extra cost with every appliance purchase. We'll handle everything from delivery to setup and testing."
    },
    {
      question: "Are your appliances compatible with smart home systems?",
      answer: "Absolutely! Our appliances seamlessly integrate with Amazon Alexa, Google Home, and Apple HomeKit. Control your appliances with voice commands or through our mobile app."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, you can return it for a full refund or exchange within 30 days of delivery."
    },
    {
      question: "How energy-efficient are Elentra appliances?",
      answer: "All our appliances are A+++ rated for energy efficiency. On average, customers save 30-40% on their energy bills compared to standard appliances, with some models offering even greater savings."
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes, we provide flexible financing plans with 0% APR for qualified customers. You can spread your payments over 12, 24, or 36 months with no interest charges."
    },
    {
      question: "How long does delivery take?",
      answer: "Standard delivery takes 5-7 business days. We also offer expedited 2-3 day delivery for an additional fee. You'll receive tracking information once your order ships."
    },
    {
      question: "What if my appliance needs repair?",
      answer: "Contact our 24/7 support team and we'll arrange a service appointment within 48 hours. Most repairs are completed on-site, and we provide loaner units if extended repairs are needed."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-primary py-28 px-4 sm:px-6 lg:px-8 border-b border-zinc-200/40 dark:border-zinc-900/40">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-cream-600 dark:text-cream-400 font-bold mb-3 block">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
            Find answers to common questions about our products and services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-50 dark:bg-zinc-950 rounded-2xl border border-zinc-200/40 dark:border-zinc-900/40 overflow-hidden transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 sm:px-8 py-6 flex items-center justify-between text-left hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50 transition-colors"
              >
                <span className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-50 pr-4">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-cream-500 text-white flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 sm:px-8 pb-6">
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center p-8 bg-gradient-to-br from-cream-50 to-cream-100 dark:from-zinc-950 dark:to-zinc-900 rounded-2xl border border-cream-200/40 dark:border-cream-900/20">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
            Still have questions?
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Our support team is here to help you 24/7
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-cream-600 hover:bg-cream-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Contact Support
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
