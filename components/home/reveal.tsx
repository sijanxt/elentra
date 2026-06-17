"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function RevealSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = containerRef.current.offsetHeight;
      
      // Calculate progress (0 to 1)
      // Progress increases as user scrolls through the pinned section
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const scrolled = Math.abs(rect.top);
        const totalScroll = sectionHeight - windowHeight;
        const progress = Math.min(1, scrolled / totalScroll);
        setScrollProgress(progress);
      } else if (rect.top > 0) {
        setScrollProgress(0);
      } else {
        setScrollProgress(1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Easing function for smoother transitions
  const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
  const smoothstep = (min: number, max: number, value: number) => Math.max(0, Math.min(1, (value - min) / (max - min)));

  // Calculate effects based on scroll progress
  const blurAmount = scrollProgress * 100; // Starts at 0, increases to 100px blur
  const imageOpacity = Math.max(0.15, 0.75 - scrollProgress * 0.6); // Starts at 75%, fades to 15%
  const imageScale = 1 + scrollProgress * 0.3; // Image scales up as you scroll

  // Text reveal logic - faster timing (30% to 80% scroll)
  const textProgress = smoothstep(0.3, 0.8, scrollProgress);
  const smoothTextProgress = easeOutQuart(textProgress);
  const textOpacity = smoothTextProgress;

  return (
    <div ref={containerRef} className="relative" style={{ height: "200vh" }}>
      {/* Sticky/Pinned Section */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center bg-zinc-50 overflow-hidden">
        {/* Background Image with Blur Effect */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            filter: `blur(${blurAmount}px)`,
            opacity: imageOpacity,
            transform: `scale(${imageScale})`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <Image
            src="/ourteam/circle.png"
            alt="Circle Background"
            width={1000}
            height={500}
            className="object-contain opacity-70"
            priority
          />
        </div>

        {/* Text Content - Reveals as image blurs */}
        <div
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
          style={{
            opacity: textOpacity,
            transition: "opacity 0.3s ease-out",
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-secondary leading-tight">
            Meet the smartest home appliances known to modern living
          </h2>
        </div>
      </div>
    </div>
  );
}

