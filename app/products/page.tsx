"use client";

import { useState } from "react";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  specs: string[];
  description: string;
  status: "In Stock" | "Limited Edition" | "Pre-order";
  image: string;
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Kitchen Appliances",
    "Refrigeration",
    "Climate Control",
    "Laundry Care",
    "Cleaning",
    "Smart Home"
  ];

  const products: Product[] = [
    {
      id: "1",
      name: "AeroSteam Induction Cooktop",
      category: "Kitchen Appliances",
      price: "$2,499",
      specs: ["Flush mount", "Integrated downdraft extractor", "Vapor Control"],
      description: "Combining rapid induction heating with integrated steam extraction in a sleek, edge-free ceramic design.",
      status: "In Stock",
      image: "/products/cooktop.jpg"
    },
    {
      id: "2",
      name: "Quantum Wave Smart Oven",
      category: "Kitchen Appliances",
      price: "$3,299",
      specs: ["Double convection", "Self-cleaning carbon grid", "AI camera sensor"],
      description: "Features dual-zone temperature matching and built-in camera monitoring for perfect browning results.",
      status: "Limited Edition",
      image: "/products/oven.jpg"
    },
    {
      id: "3",
      name: "AeroFresh 4-Door Refrigerator",
      category: "Refrigeration",
      price: "$4,599",
      specs: ["Triple-zone evaporator", "Flat stainless profile", "Humidity matrix"],
      description: "Keeps delicate greens fresh twice as long with split zone humidity control and discrete filtered water tap.",
      status: "In Stock",
      image: "/products/fridge.jpg"
    },
    {
      id: "4",
      name: "Sommelier Pro Wine Vault",
      category: "Refrigeration",
      price: "$2,899",
      specs: ["Anti-vibration base", "UV filtered glass", "Dual humidity zones"],
      description: "Stores up to 72 bottles under custom light scenarios and sound-dampened conditions.",
      status: "Pre-order",
      image: "/products/wine.jpg"
    },
    {
      id: "5",
      name: "AeroSilent Split System",
      category: "Climate Control",
      price: "$1,899",
      specs: ["18dB Sound Level", "HEPA H14 filtration", "Coanda air deflection"],
      description: "Engineered to deliver filtered fresh air in virtual silence, automatically sensing ambient particulate load.",
      status: "In Stock",
      image: "/products/ac.jpg"
    },
    {
      id: "6",
      name: "Thermos Pro Radar Control",
      category: "Climate Control",
      price: "$399",
      specs: ["Radar occupancy sensing", "AI thermal predictive learning", "Minimalist glass dial"],
      description: "Adjusts rooms dynamically when occupied and learns thermal efficiency curves of the home.",
      status: "In Stock",
      image: "/products/thermostat.jpg"
    },
    {
      id: "7",
      name: "HydroClean Pro Washer",
      category: "Laundry Care",
      price: "$1,699",
      specs: ["Direct-drive brushless motor", "Sub-drum suspension", "Auto-dose dispenser"],
      description: "Minimizes fabric stress and micro-tear profiles via variable tumbling dynamics and water injection.",
      status: "In Stock",
      image: "/products/washer.jpg"
    },
    {
      id: "8",
      name: "AeroDry Heat Pump Dryer",
      category: "Laundry Care",
      price: "$1,499",
      specs: ["Closed-loop heating", "Real-time moisture matrix", "Lint flush"],
      description: "Uses a highly efficient closed-loop compressor to dry garments at lower, gentler temperatures.",
      status: "In Stock",
      image: "/products/dryer.jpg"
    },
    {
      id: "9",
      name: "RoboClean X10 Station",
      category: "Cleaning",
      price: "$899",
      specs: ["6000Pa vacuum suction", "Rotary hot mop scrubbing", "Auto empty/wash"],
      description: "Fully automated dry and wet sweep robot using dual-channel LiDAR radar and reactive camera avoidances.",
      status: "In Stock",
      image: "/products/robot.jpg"
    },
    {
      id: "10",
      name: "Cyclonic Stick V15",
      category: "Cleaning",
      price: "$599",
      specs: ["150AW brush motor", "Laser particle indicator", "Carbon wand"],
      description: "Ultra-light handheld vacuum detailing hidden dust arrays via integrated narrow-angle green laser.",
      status: "In Stock",
      image: "/products/vacuum.jpg"
    },
    {
      id: "11",
      name: "Nexus Hub Pro Center",
      category: "Smart Home",
      price: "$499",
      specs: ["10\" flush glass console", "Zigbee / Matter / Thread", "Vocal array"],
      description: "Your home dashboard showing real-time utility parameters, filter stats, and active cycles across all appliances.",
      status: "In Stock",
      image: "/products/hub.jpg"
    },
    {
      id: "12",
      name: "AeroPurify Station Pro",
      category: "Smart Home",
      price: "$699",
      specs: ["Particulate load tracker", "VOC chemical analyzer", "Direct HVAC bypass"],
      description: "Continuous evaluation of ambient air matrices, triggering ventilation fans to clear kitchen fumes dynamically.",
      status: "In Stock",
      image: "/products/purifier.jpg"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-secondary mb-4">
            Our Products
          </h1>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
            Discover our complete collection of premium home appliances designed for modern living.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-16">
          {/* Search Bar */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 bg-white border border-zinc-200 rounded-lg focus:outline-none focus:border-zinc-400 transition-all text-secondary"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-secondary text-white"
                    : "bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group"
            >
              <div className="bg-white border border-zinc-200 rounded-lg overflow-hidden hover:border-zinc-400 transition-all duration-300">
                {/* Product Image */}
                <div className="h-64 bg-zinc-50 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-zinc-200 flex items-center justify-center">
                      <svg className="w-10 h-10 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`text-xs font-medium uppercase tracking-wider py-1 px-3 rounded-full ${
                      product.status === "In Stock"
                        ? "bg-emerald-500 text-white"
                        : product.status === "Limited Edition"
                        ? "bg-amber-500 text-white"
                        : "bg-blue-500 text-white"
                    }`}>
                      {product.status}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-2 group-hover:text-zinc-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-zinc-500 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.specs.slice(0, 2).map((spec, index) => (
                      <span
                        key={index}
                        className="text-xs bg-zinc-50 text-zinc-600 px-3 py-1 rounded-full border border-zinc-200"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="pt-4 border-t border-zinc-200">
                    <span className="text-2xl font-bold text-secondary">
                      {product.price}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-zinc-400">No products found matching your criteria.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center border border-zinc-200 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-zinc-500 mb-8 max-w-2xl mx-auto">
            Our experts are here to help you find the perfect appliances for your home.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-secondary text-white font-semibold px-8 py-3 rounded-lg hover:bg-zinc-800 transition-all"
          >
            Contact Our Experts
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
