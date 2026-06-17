"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

      // 1. Appear from top-left to the right side
      tl.fromTo(
        airfryerRef.current,
        {
          x: "-100vw",
          y: "-100vh",
        },
        {
          x: "35vw",
          y: "0vh",
          duration: 2.4,
          ease: "power1.out",
        }
      )
      // 2. Move from the right side to the left side
      .to(
        airfryerRef.current,
        {
          x: "-35vw",
          y: "0vh",
          duration: 1.6,
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
      title: "Smart Kitchen Solutions",
      description: "Experience the future of cooking with our intelligent kitchen appliances designed to make your life easier and more efficient.",
    },
    {
      id: 2,
      position: "left",
      title: "Advanced Cooling Technology",
      description: "Keep your food fresh longer with our state-of-the-art refrigeration systems that combine style with functionality.",
    },
    {
      id: 3,
      position: "right",
      title: "Effortless Cleaning",
      description: "Revolutionary cleaning appliances that save time and energy while delivering professional-grade results.",
    },
  ];

  return (
    <section ref={airfryerContainerRef} className="relative bg-zinc-50 grid grid-cols-1 grid-rows-1">
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
            className="min-h-[100vh] flex items-center justify-center py-20 px-4"
          >
            <div className="max-w-7xl mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, x: section.position === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`${
                  section.position === "right" ? "ml-auto text-right" : "mr-auto text-left"
                } max-w-2xl`}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6">
                  {section.title}
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed">
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
