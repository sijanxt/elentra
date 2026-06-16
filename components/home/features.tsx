"use client";

import { motion } from "framer-motion";
import { Zap, Home, Shield, Wrench, MessageCircle, CreditCard } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Energy Efficient",
      description: "Save up to 40% on energy bills with our A+++ rated appliances."
    },
    {
      icon: Home,
      title: "Smart Home Ready",
      description: "Seamlessly integrate with Alexa, Google Home, and Apple HomeKit."
    },
    {
      icon: Shield,
      title: "5-Year Warranty",
      description: "Industry-leading warranty with free repairs and replacements."
    },
    {
      icon: Wrench,
      title: "Free Installation",
      description: "Professional installation by certified technicians included."
    },
    {
      icon: MessageCircle,
      title: "24/7 Support",
      description: "Round-the-clock customer support with expert guidance."
    },
    {
      icon: CreditCard,
      title: "Flexible Financing",
      description: "Easy payment plans with 0% APR financing options available."
    }
  ];

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Why Choose Elentra
          </h2>
          <p className="text-zinc-600">
            Experience quality and innovation that sets us apart.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="flex flex-col items-start">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-cream-100 flex items-center justify-center mb-4 text-cream-600 group-hover:bg-cream-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
