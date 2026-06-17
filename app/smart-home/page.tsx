"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/page-hero";
import { Lightbulb, Thermometer, Shield, Mic, Lock, Smartphone } from "lucide-react";
import { products } from "@/lib/products";

export default function SmartHomePage() {
  const benefits = [
    {
      icon: Smartphone,
      title: "Remote Control",
      description: "Control your home from anywhere using your smartphone",
    },
    {
      icon: Lightbulb,
      title: "Energy Savings",
      description: "Reduce energy bills by up to 30% with smart automation",
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Monitor and protect your home 24/7 with smart devices",
    },
  ];

  const categories = [
    {
      icon: Lightbulb,
      name: "Smart Lighting",
      description: "Intelligent lighting control and automation",
    },
    {
      icon: Thermometer,
      name: "Climate Control",
      description: "Automated temperature management systems",
    },
    {
      icon: Shield,
      name: "Security Systems",
      description: "Advanced home protection and monitoring",
    },
    {
      icon: Mic,
      name: "Voice Assistants",
      description: "Hands-free home control with voice commands",
    },
    {
      icon: Lock,
      name: "Smart Locks",
      description: "Keyless entry and secure access solutions",
    },
    {
      icon: Smartphone,
      name: "Home Hubs",
      description: "Central control for all smart devices",
    },
  ];

  const integrations = [
    { name: "Amazon Alexa", logo: "🗣️" },
    { name: "Google Home", logo: "🏠" },
    { name: "Apple HomeKit", logo: "🍎" },
    { name: "Samsung SmartThings", logo: "📱" },
  ];

  const steps = [
    {
      number: "01",
      title: "Choose Your Devices",
      description: "Select from our range of smart home products",
    },
    {
      number: "02",
      title: "Professional Installation",
      description: "Our experts set up and configure everything",
    },
    {
      number: "03",
      title: "Start Controlling",
      description: "Manage your home from your phone or voice",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        title="Smart Home Solutions"
        description="Transform your living space with intelligent automation and seamless connectivity"
      />
      {/* Featured Products Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Featured Smart Products
            </h2>
            <p className="text-lg text-zinc-500">
              Discover our top smart home solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.filter((p) => p.category === "Smart Home").map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link href="/products" className="block bg-zinc-100 rounded-3xl overflow-hidden p-6">
                  {/* Product Image */}
                  <div className="aspect-square rounded-2xl relative overflow-hidden mb-4 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="object-contain"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="text-center">
                    <p className="text-xs font-medium text-zinc-400 uppercase tracking-wide mb-2">
                      {product.category}
                    </p>
                    <h3 className="text-xl font-bold text-secondary mb-2">
                      {product.name}
                    </h3>
                    <p className="text-lg font-semibold text-cream-600">
                      {product.price}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Smart Home Categories
            </h2>
            <p className="text-lg text-zinc-500">
              Explore our complete range of smart devices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Link
                    href="/products"
                    className="block bg-white border border-zinc-200 rounded-2xl p-6 hover:border-zinc-400 transition-all duration-300"
                  >
                    <Icon className="w-10 h-10 text-zinc-400 mb-4" strokeWidth={1.5} />
                    <h3 className="text-lg font-semibold text-secondary mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-zinc-500">{category.description}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary mb-4">
              How It Works
            </h2>
            <p className="text-lg text-zinc-500">
              Get started with smart home in 3 simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-zinc-200 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  {step.title}
                </h3>
                <p className="text-zinc-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-champagne">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Works With Your Favorites
            </h2>
            <p className="text-lg text-zinc-700">
              Seamlessly integrates with popular smart home platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 text-center"
              >
                <div className="text-5xl mb-4">{integration.logo}</div>
                <h3 className="font-semibold text-secondary">{integration.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
}
