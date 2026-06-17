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
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // 1. Appear from top-left to the right side
      tl.fromTo(
        airfryerRef.current,
        {
          x: "-80vw",
          y: "-80vh",
        },
        {
          x: "40vw",
          y: "0vh",
          duration: 1,
          ease: "none",
        }
      )
      // 2. Move from the right side to the left side
      .to(
        airfryerRef.current,
        {
          x: "-40vw",
          y: "0vh",
          duration: 1.5,
          ease: "none",
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
    <section className="bg-white">
      {/* GSAP Horizontal Scroll Airfryer Section - AT THE TOP */}
      <div
        ref={airfryerContainerRef}
        className="min-h-[200vh] relative overflow-hidden bg-zinc-50"
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
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
      </div>

      {/* Content Sections Below */}
      {sections.map((section) => (
        <div
          key={section.id}
          className="min-h-[80vh] flex items-center justify-center py-20 px-4"
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
    </section>
  );
}
