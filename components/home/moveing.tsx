"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MovingSection() {
  const airfryerRef = useRef<HTMLDivElement>(null);
  const airfryerContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!airfryerRef.current || !airfryerContainerRef.current) return;

    const ctx = gsap.context(() => {
      // Create a timeline to sequence the animations on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: airfryerContainerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // 1. Start on the left side (shifted right to -22vw) and glide to the right side (20vw)
      tl.fromTo(
        airfryerRef.current,
        {
          x: "-22vw",
          y: "0vh",
        },
        {
          x: "20vw",
          y: "0vh",
          duration: 2.0,
          ease: "power1.inOut",
        }
      )
      // 2. Glide from the right side back to the left side
      .to(
        airfryerRef.current,
        {
          x: "-22vw",
          y: "0vh",
          duration: 2.0,
          ease: "power1.inOut",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const sections = [
    {
      id: 1,
      position: "right",
      category: "01 / CONVECTION",
      title: "Intelligent Aero-Crisp Technology",
      description: "Superheated cyclonic air wraps your food to deliver that signature golden-crisp finish with up to 90% less oil. Professional convection, simplified.",
      link: "/products",
    },
    {
      id: 2,
      position: "left",
      category: "02 / PRECISION",
      title: "Smart Thermal Probe Assist",
      description: "Integrated digital thermal sensor probes monitor internal temperature in real-time, automatically adjusting cook heat to guarantee perfectly tender results every time.",
      link: "/products",
    },
    {
      id: 3,
      position: "right",
      category: "03 / CONNECTIVITY",
      title: "Seamless Smart Integration",
      description: "Command your kitchen remotely. Monitor cooking progress, access chef-curated presets, and receive real-time notifications directly on your smart device.",
      link: "/products",
    },
  ];

  return (
    <section ref={airfryerContainerRef} className="relative bg-white grid grid-cols-1 grid-rows-1">
      {/* Sticky Airfryer Section - Act as background overlay */}
      <div className="col-start-1 row-start-1 sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none z-10">
        <div
          ref={airfryerRef}
          className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] relative"
        >
          <Image
            src="/products/airfryer.png"
            alt="Air Fryer"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Content Sections - Stacked on top of the sticky area */}
      <div className="col-start-1 row-start-1 relative z-20">
        {sections.map((section) => (
          <div
            key={section.id}
            id={`moving-section-${section.id}`}
            className="min-h-[100vh] flex items-center justify-center py-20 px-4"
          >
            <div className="max-w-7xl mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, x: section.position === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`${
                  section.position === "right" ? "ml-auto text-left" : "mr-auto text-left"
                } max-w-xl`}
              >
                {/* Category Indicator */}
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cream-600 block mb-3 font-montserrat">
                  {section.category}
                </span>

                {/* Section Title */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-5 font-cormorant leading-tight">
                  {section.title}
                </h2>

                {/* Section Description */}
                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mb-0 font-light">
                  {section.description}
                </p>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
