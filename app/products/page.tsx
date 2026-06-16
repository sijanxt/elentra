"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/page-hero";

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
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (imageSrc: string) => {
    setImageErrors((prev) => ({ ...prev, [imageSrc]: true }));
  };

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
      image: "/products/fridge.png"
    },
    {
      id: "2",
      name: "Quantum Wave Smart Oven",
      category: "Kitchen Appliances",
      price: "$3,299",
      specs: ["Double convection", "Self-cleaning carbon grid", "AI camera sensor"],
      description: "Features dual-zone temperature matching and built-in camera monitoring for perfect browning results.",
      status: "Limited Edition",
      image: "/products/fridge.png"
    },
    {
      id: "3",
      name: "AeroFresh 4-Door Refrigerator",
      category: "Refrigeration",
      price: "$4,599",
      specs: ["Triple-zone evaporator", "Flat stainless profile", "Humidity matrix"],
      description: "Keeps delicate greens fresh twice as long with split zone humidity control and discrete filtered water tap.",
      status: "In Stock",
      image: "/products/fridge.png"
    },
    {
      id: "4",
      name: "Sommelier Pro Wine Vault",
      category: "Refrigeration",
      price: "$2,899",
      specs: ["Anti-vibration base", "UV filtered glass", "Dual humidity zones"],
      description: "Stores up to 72 bottles under custom light scenarios and sound-dampened conditions.",
      status: "Pre-order",
      image: "/products/fridge.png"
    },
    {
      id: "5",
      name: "AeroSilent Split System",
      category: "Climate Control",
      price: "$1,899",
      specs: ["18dB Sound Level", "HEPA H14 filtration", "Coanda air deflection"],
      description: "Engineered to deliver filtered fresh air in virtual silence, automatically sensing ambient particulate load.",
      status: "In Stock",
      image: "/products/fridge.png"
    },
    {
      id: "6",
      name: "Thermos Pro Radar Control",
      category: "Climate Control",
      price: "$399",
      specs: ["Radar occupancy sensing", "AI thermal predictive learning", "Minimalist glass dial"],
      description: "Adjusts rooms dynamically when occupied and learns thermal efficiency curves of the home.",
      status: "In Stock",
      image: "/products/fridge.png"
    },
    {
      id: "7",
      name: "HydroClean Pro Washer",
      category: "Laundry Care",
      price: "$1,699",
      specs: ["Direct-drive brushless motor", "Sub-drum suspension", "Auto-dose dispenser"],
      description: "Minimizes fabric stress and micro-tear profiles via variable tumbling dynamics and water injection.",
      status: "In Stock",
      image: "/products/fridge.png"
    },
    {
      id: "8",
      name: "AeroDry Heat Pump Dryer",
      category: "Laundry Care",
      price: "$1,499",
      specs: ["Closed-loop heating", "Real-time moisture matrix", "Lint flush"],
      description: "Uses a highly efficient closed-loop compressor to dry garments at lower, gentler temperatures.",
      status: "In Stock",
      image: "/products/fridge.png"
    },
    {
      id: "9",
      name: "RoboClean X10 Station",
      category: "Cleaning",
      price: "$899",
      specs: ["6000Pa vacuum suction", "Rotary hot mop scrubbing", "Auto empty/wash"],
      description: "Fully automated dry and wet sweep robot using dual-channel LiDAR radar and reactive camera avoidances.",
      status: "In Stock",
      image: "/products/vaccumclenaer.png"
    },
    {
      id: "10",
      name: "Cyclonic Stick V15",
      category: "Cleaning",
      price: "$599",
      specs: ["150AW brush motor", "Laser particle indicator", "Carbon wand"],
      description: "Ultra-light handheld vacuum detailing hidden dust arrays via integrated narrow-angle green laser.",
      status: "In Stock",
      image: "/products/vaccumclenaer.png"
    },
    {
      id: "11",
      name: "Nexus Hub Pro Center",
      category: "Smart Home",
      price: "$499",
      specs: ["10\" flush glass console", "Zigbee / Matter / Thread", "Vocal array"],
      description: "Your home dashboard showing real-time utility parameters, filter stats, and active cycles across all appliances.",
      status: "In Stock",
      image: "/products/fridge.png"
    },
    {
      id: "12",
      name: "AeroPurify Station Pro",
      category: "Smart Home",
      price: "$699",
      specs: ["Particulate load tracker", "VOC chemical analyzer", "Direct HVAC bypass"],
      description: "Continuous evaluation of ambient air matrices, triggering ventilation fans to clear kitchen fumes dynamically.",
      status: "In Stock",
      image: "/products/fridge.png"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        title="Our Products"
        description="Discover our complete collection of premium home appliances designed for modern living."
      />
      
      <div className="max-w-7xl mx-auto py-16">
        {/* Search & Filter */}
        <div className="mb-16">
          {/* Search Bar */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 bg-white border-b border-zinc-200 focus:outline-none focus:border-zinc-400 transition-all text-secondary"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-cream-600 text-white shadow-md"
                    : "bg-white border border-zinc-200 text-zinc-600 hover:border-cream-600 hover:text-cream-600"
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
              <div className="bg-white transition-all duration-300">
                {/* Product Image */}
                <div className="aspect-[4/5] bg-zinc-100 relative overflow-hidden mb-4">
                  {(!imageErrors[product.image] && product.image) ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                      onError={() => handleImageError(product.image)}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-zinc-200 flex items-center justify-center">
                        <svg className="w-16 h-16 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="text-center">
                  <h3 className="text-lg font-medium text-secondary group-hover:text-zinc-600 transition-colors">
                    {product.name}
                  </h3>
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
      </div>
    </div>
  );
}
