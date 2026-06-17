"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerating progress curve
        const increment = prev < 60 ? 3 : prev < 85 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 30);

    // Minimum display time for dramatic effect
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (typeof window !== "undefined") {
        (window as any).__preloaderFinished = true;
        window.dispatchEvent(new Event("preloaderFinished"));
      }
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  // Initialize flag on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).__preloaderFinished = false;
    }
  }, []);

  // Prevent scrolling while preloader is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  const brandName = "ELENTRA";

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.2,
            },
          }}
        >
          {/* Subtle grid pattern background */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(203,167,102,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(203,167,102,0.4) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Champagne accent glow */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(203,167,102,0.08) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative flex flex-col items-center gap-12">
            {/* Brand Name - Staggered Letter Reveal */}
            <div className="flex items-center gap-[0.15em]">
              {brandName.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  className="text-5xl sm:text-6xl md:text-7xl font-cormorant font-light text-zinc-900 tracking-[0.2em] inline-block"
                  initial={{ opacity: 0, y: 40, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Progress Bar */}
            <motion.div
              className="relative w-48 sm:w-56 flex flex-col items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              {/* Track */}
              <div className="h-[1px] w-full bg-zinc-150 rounded-full overflow-hidden">
                {/* Fill */}
                <motion.div
                  className="h-full bg-gradient-to-r from-cream-700 via-cream-500 to-cream-400 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              {/* Zero-padded centered counter with a minimal label */}
              <div className="flex flex-col items-center gap-1">
                <span className="text-[10px] text-zinc-400 font-montserrat font-light tracking-[0.3em]">
                  {String(progress).padStart(3, "0")}
                </span>
                <span className="text-[8px] uppercase tracking-[0.4em] text-zinc-300 font-montserrat font-medium">
                  LOADING
                </span>
              </div>
            </motion.div>
          </div>

          {/* Corner accents */}
          <motion.div
            className="absolute top-8 left-8 w-8 h-8 border-l border-t border-zinc-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          />
          <motion.div
            className="absolute top-8 right-8 w-8 h-8 border-r border-t border-zinc-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          />
          <motion.div
            className="absolute bottom-8 left-8 w-8 h-8 border-l border-b border-zinc-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-8 h-8 border-r border-b border-zinc-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
