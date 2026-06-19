"use client";

import Image from "next/image";
import Link from "next/link";
import Title from "@/components/ui/title";

interface SpotlightItem {
  title: string;
  desc: string;
  image: string;
  bgClass: string;
  dark: boolean;
  href: string;
}

const spotlightItems: SpotlightItem[] = [
  {
    title: "AeroFresh 4-Door",
    desc: "Triple-zone climate preservation with split-zone humidity matrix.",
    image: "/items/fridge.png",
    bgClass: "bg-gradient-to-b from-[#ececf2] to-[#FAF8F5]",
    dark: false,
    href: "/products/3"
  },
  {
    title: "Quantum Wave Oven",
    desc: "AI-assisted convection baking with integrated camera monitoring.",
    image: "/items/oven.png",
    bgClass: "bg-gradient-to-b from-[#DFE3D5] to-[#F4F6F1]",
    dark: false,
    href: "/products/2"
  },
  {
    title: "AeroSteam Induction",
    desc: "Flush-mount cooktop with silent automatic downdraft vapor extraction.",
    image: "/items/alectricjug.png",
    bgClass: "bg-gradient-to-b from-[#FAF8F5] to-[#ececf2]",
    dark: false,
    href: "/products/1"
  },
  {
    title: "AeroSilent Climate",
    desc: "German-engineered variable speed inverter with silent air HEPA filtration.",
    image: "/items/airventilation.png",
    bgClass: "bg-gradient-to-b from-[#FAF5F3] to-[#ECE0DC]",
    dark: false,
    href: "/products/5"
  },
  {
    title: "RoboClean X10 Station",
    desc: "Fully automated LiDAR dry and wet sweep robotics center.",
    image: "/items/vacuum.png",
    bgClass: "bg-gradient-to-b from-[#ececf2] to-[#ececf2]",
    dark: false,
    href: "/products/9"
  },
  {
    title: "Nexus Hub Pro",
    desc: "Matter-compatible central utility control screen for all home modules.",
    image: "/items/sofaa.png",
    bgClass: "bg-gradient-to-b from-[#E9E4DB] to-[#E9E4DB]",
    dark: false,
    href: "/products/11"
  }
];

export default function NewItems() {
  return (
    <section className="bg-white py-28 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Title
          creamText="Elentra"
          primaryText="Innovation Spotlight"
          desc="Explore our newest releases designed to elevate modern living experiences"
          className="mb-16"
        />

        {/* Promo Grid (2 Columns on MD+) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {spotlightItems.map((item, index) => (
            <Link key={index} href={item.href} className="block group">
              <div
                className={`relative overflow-hidden aspect-[4/3] sm:aspect-[4/3.2] md:aspect-[4/3.3] lg:aspect-[4/3] rounded-[2rem] pt-12 pb-0 px-6 sm:px-8 flex flex-col items-center justify-between text-center shadow-xs transition-all duration-300 cursor-pointer ${item.bgClass}`}
              >
                {/* Text Layout */}
                <div className="flex flex-col items-center max-w-md z-10">
                  <h3 className={`text-2xl sm:text-3xl font-medium tracking-tight font-cormorant mb-2 ${
                    item.dark ? "text-white" : "text-zinc-900"
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs sm:text-sm font-light leading-relaxed max-w-sm font-montserrat ${
                    item.dark ? "text-zinc-400" : "text-zinc-500"
                  }`}>
                    {item.desc}
                  </p>
                </div>

                {/* Centered Image (Fades & Scales on Hover) */}
                <div className="relative w-full h-[80%] mt-auto flex items-center justify-center overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2}
                    unoptimized
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
