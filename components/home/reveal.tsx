"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Progress from 0 (section enters viewport) to 1 (section leaves viewport)
      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height))
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Phase calculations based on scroll progress
  // Phase 1 (0-0.35): Circles appear crisp and sharp
  // Phase 2 (0.35-0.65): Circles blur and expand into glowing background
  // Phase 3 (0.65-1): Text fades in over the glow

  const circleOpacity =
    scrollProgress < 0.15
      ? scrollProgress / 0.15
      : scrollProgress < 0.5
      ? 1
      : Math.max(0, 1 - (scrollProgress - 0.5) / 0.3);

  const circleBlur =
    scrollProgress < 0.3 ? 0 : Math.min(60, (scrollProgress - 0.3) * 200);

  const circleScale =
    scrollProgress < 0.3
      ? 1
      : 1 + (scrollProgress - 0.3) * 2.5;

  const glowOpacity =
    scrollProgress < 0.35
      ? 0
      : scrollProgress < 0.7
      ? (scrollProgress - 0.35) / 0.35
      : 1;

  const textOpacity =
    scrollProgress < 0.55
      ? 0
      : Math.min(1, (scrollProgress - 0.55) / 0.25);

  const textTranslateY =
    scrollProgress < 0.55
      ? 40
      : Math.max(0, 40 - (scrollProgress - 0.55) * 160);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white"
      style={{ height: "200vh" }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        {/* Background ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: glowOpacity,
            background: `
              radial-gradient(ellipse 80% 60% at 50% 50%, rgba(203,167,102,0.12) 0%, transparent 70%),
              radial-gradient(ellipse 60% 40% at 35% 50%, rgba(203,167,102,0.08) 0%, transparent 60%),
              radial-gradient(ellipse 60% 40% at 65% 50%, rgba(203,167,102,0.08) 0%, transparent 60%)
            `,
            transition: "opacity 0.1s ease-out",
          }}
        />

        {/* Circle container */}
        <div
          className="relative flex items-center justify-center gap-8 sm:gap-12 md:gap-16"
          style={{
            opacity: circleOpacity,
            filter: `blur(${circleBlur}px)`,
            transform: `scale(${circleScale})`,
            transition: "filter 0.05s ease-out, transform 0.05s ease-out",
          }}
        >
          {/* Left circle */}
          <div className="relative">
            {/* Outer glow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                width: "140px",
                height: "140px",
                background: "radial-gradient(circle, rgba(203,167,102,0.25) 0%, transparent 70%)",
                filter: "blur(20px)",
                transform: "scale(1.3)",
              }}
            />
            {/* Ring */}
            <svg width="140" height="140" viewBox="0 0 140 140" className="relative z-10">
              <defs>
                <linearGradient id="goldGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#dec58f" />
                  <stop offset="30%" stopColor="#cba766" />
                  <stop offset="60%" stopColor="#b38d4a" />
                  <stop offset="100%" stopColor="#dec58f" />
                </linearGradient>
                <filter id="glowLeft">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <circle
                cx="70"
                cy="70"
                r="52"
                fill="none"
                stroke="url(#goldGradLeft)"
                strokeWidth="16"
                strokeLinecap="round"
                strokeDasharray="290 40"
                strokeDashoffset="20"
                filter="url(#glowLeft)"
              />
            </svg>
          </div>

          {/* Right circle */}
          <div className="relative">
            {/* Outer glow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                width: "120px",
                height: "120px",
                background: "radial-gradient(circle, rgba(203,167,102,0.25) 0%, transparent 70%)",
                filter: "blur(20px)",
                transform: "scale(1.3)",
              }}
            />
            {/* Ring */}
            <svg width="120" height="120" viewBox="0 0 120 120" className="relative z-10">
              <defs>
                <linearGradient id="goldGradRight" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#dec58f" />
                  <stop offset="30%" stopColor="#cba766" />
                  <stop offset="60%" stopColor="#b38d4a" />
                  <stop offset="100%" stopColor="#dec58f" />
                </linearGradient>
                <filter id="glowRight">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <circle
                cx="60"
                cy="60"
                r="44"
                fill="none"
                stroke="url(#goldGradRight)"
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray="245 35"
                strokeDashoffset="-10"
                filter="url(#glowRight)"
              />
            </svg>
          </div>
        </div>

        {/* Text content that fades in */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center pointer-events-none"
          style={{
            opacity: textOpacity,
            transform: `translateY(${textTranslateY}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <p
            className="text-sm sm:text-base tracking-[0.3em] uppercase font-montserrat mb-4"
            style={{ color: "#cba766" }}
          >
            Our Vision
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-3xl"
            style={{ color: "#121214" }}
          >
            Crafted with
            <span
              className="block font-normal italic"
              style={{ color: "#b38d4a" }}
            >
              Timeless Elegance
            </span>
          </h2>
          <div
            className="w-16 h-[1px] mt-8 mb-6"
            style={{ background: "linear-gradient(to right, transparent, #cba766, transparent)" }}
          />
          <p
            className="text-base sm:text-lg font-light max-w-xl leading-relaxed"
            style={{ color: "#555" }}
          >
            Every piece is designed to embody sophistication, blending modern artistry with timeless craftsmanship.
          </p>
        </div>
      </div>
    </section>
  );
}
