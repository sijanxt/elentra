"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface SoundToggleProps {
  isOpaque?: boolean;
}

export default function SoundToggle({ isOpaque = true }: SoundToggleProps) {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio on mount
  useEffect(() => {
    const audio = new Audio("/audio/music.mp3");
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggleSound = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      const audio = audioRef.current;
      if (audio) {
        if (next) {
          audio.pause();
        } else {
          audio.play().catch(() => {
            // Browser may block autoplay — silently handle
          });
        }
      }
      return next;
    });
  }, []);

  // Animated bars configuration
  const bars = [
    { height: { muted: 4, active: 14 }, delay: 0 },
    { height: { muted: 4, active: 20 }, delay: 0.1 },
    { height: { muted: 4, active: 10 }, delay: 0.2 },
    { height: { muted: 4, active: 18 }, delay: 0.15 },
  ];

  return (
    <motion.button
      id="sound-toggle"
      onClick={toggleSound}
      className="relative flex items-center gap-2.5 group cursor-pointer focus:outline-none py-1.5 px-3 rounded-full transition-all duration-300"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.5 }}
      aria-label={isMuted ? "Unmute sound" : "Mute sound"}
    >
      {/* Label */}
      <motion.span
        className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 hidden sm:inline ${
          isOpaque ? "text-zinc-500 group-hover:text-zinc-800" : "text-white/80 group-hover:text-white"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        {isMuted ? "Sound Off" : "Sound On"}
      </motion.span>

      {/* Sound Bars */}
      <div className="flex items-center gap-[3px] h-6 w-6 justify-center">
        {bars.map((bar, i) => (
          <motion.span
            key={i}
            className={`w-[2px] rounded-full transition-colors duration-300 ${
              isOpaque ? "bg-zinc-500 group-hover:bg-cream-500" : "bg-white group-hover:bg-cream-300"
            }`}
            animate={
              isMuted
                ? { height: bar.height.muted }
                : {
                    height: [
                      bar.height.active * 0.4,
                      bar.height.active,
                      bar.height.active * 0.6,
                      bar.height.active * 0.9,
                      bar.height.active * 0.4,
                    ],
                  }
            }
            transition={
              isMuted
                ? { duration: 0.3, delay: bar.delay }
                : {
                    duration: 1.2,
                    repeat: Infinity,
                    repeatType: "reverse" as const,
                    ease: "easeInOut",
                    delay: bar.delay,
                  }
            }
          />
        ))}
      </div>

      {/* Subtle ring indicator */}
      <motion.div
        className={`absolute inset-0 rounded-full border transition-colors duration-300 ${
          isOpaque 
            ? "border-zinc-200 group-hover:border-cream-500" 
            : "border-white/20 group-hover:border-white/55"
        }`}
      />
    </motion.button>
  );
}
