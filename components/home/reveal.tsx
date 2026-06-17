"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RevealSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  
  // Second image refs
  const imageWrapper2Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLImageElement>(null);

  // Third image refs
  const imageWrapper3Ref = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (
      !containerRef.current ||
      !stickyRef.current ||
      !textRef.current ||
      !imageWrapperRef.current ||
      !imageRef.current ||
      !imageWrapper2Ref.current ||
      !image2Ref.current ||
      !imageWrapper3Ref.current ||
      !image3Ref.current
    )
      return;

    const ctx = gsap.context(() => {
      // Set initial centering and translations to avoid Tailwind/React inline style conflicts
      gsap.set(imageWrapperRef.current, { xPercent: -50, yPercent: -50 });
      gsap.set(imageWrapper2Ref.current, { xPercent: 100 });
      gsap.set(imageWrapper3Ref.current, { xPercent: 100 });

      // Complete scroll timeline spanning 320vh for scroll space
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // Smoothly animate the background color back to white during Phase 3
      tl.to(stickyRef.current, {
        backgroundColor: "#ffffff",
        duration: 0.35,
        ease: "power2.inOut",
      }, 0.65);

      // --- PHASE 1: Text Fades, Background Image 1 Expands (Progress 0 to 0.3) ---
      tl.to(textRef.current, {
        opacity: 0,
        y: -60,
        duration: 0.3,
        ease: "power1.out",
      }, 0);

      tl.to(imageWrapperRef.current, {
        opacity: 1,
        width: "100vw",
        height: "100vh",
        borderRadius: "0px",
        duration: 0.3,
        ease: "power2.inOut",
      }, 0);

      tl.to(imageRef.current, {
        scale: 1.12,
        duration: 0.3,
        ease: "power2.inOut",
      }, 0);

      // --- PHASE 2: Image 1 Slides out left, Image 2 Slides in from right (Progress 0.3 to 0.65) ---
      tl.to(imageWrapperRef.current, {
        xPercent: -150,
        duration: 0.35,
        ease: "power2.inOut",
      }, 0.3);

      tl.to(imageWrapper2Ref.current, {
        xPercent: 0, // slides to center
        duration: 0.35,
        ease: "power2.inOut",
      }, 0.3);

      tl.fromTo(image2Ref.current,
        { scale: 1.2 },
        {
          scale: 1.05,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0.3
      );

      // --- PHASE 3: Image 2 Slides out left, Image 3 Slides in from right (Progress 0.65 to 1.0) ---
      tl.to(imageWrapper2Ref.current, {
        xPercent: -100,
        duration: 0.35,
        ease: "power2.inOut",
      }, 0.65);

      tl.to(imageWrapper3Ref.current, {
        xPercent: 0, // slides to center
        duration: 0.35,
        ease: "power2.inOut",
      }, 0.65);

      tl.fromTo(image3Ref.current,
        { scale: 1.2 },
        {
          scale: 1.05,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0.65
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "320vh" }}>
      {/* Pinned Viewport */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ backgroundColor: "#c6fcff" }}
      >
        
        {/* Expanding Image Wrapper 1 */}
        <div
          ref={imageWrapperRef}
          style={{ opacity: 0 }}
          className="absolute left-1/2 top-1/2 w-[280px] h-[180px] sm:w-[400px] sm:h-[260px] md:w-[500px] md:h-[325px] overflow-hidden rounded-2xl shadow-2xl z-10 flex-shrink-0"
        >
          <Image
            ref={imageRef}
            src="/cta/fridge.jpg"
            alt="Luxury Appliance 1"
            fill
            className="object-cover scale-100"
            unoptimized
          />
        </div>

        {/* Image Wrapper 2 */}
        <div
          ref={imageWrapper2Ref}
          className="absolute left-0 top-0 w-full h-screen overflow-hidden z-10 flex-shrink-0"
        >
          <Image
            ref={image2Ref}
            src="/cta/new.png"
            alt="Luxury Appliance 2"
            fill
            className="object-cover scale-100"
            unoptimized
          />
        </div>

        {/* Image Wrapper 3 */}
        <div
          ref={imageWrapper3Ref}
          className="absolute left-0 top-0 w-full h-screen overflow-hidden z-10 flex-shrink-0"
        >
          <Image
            ref={image3Ref}
            src="/about/story.png"
            alt="Luxury Appliance 3"
            fill
            className="object-cover scale-100"
            unoptimized
          />
        </div>

        {/* Centered Text */}
        <div
          ref={textRef}
          className="absolute inset-0 flex items-center justify-center max-w-4xl mx-auto px-4 text-center z-20 pointer-events-none"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-secondary leading-tight font-cormorant italic">
            Meet the smartest home appliances known to modern living
          </h2>
        </div>

      </div>
    </div>
  );
}










