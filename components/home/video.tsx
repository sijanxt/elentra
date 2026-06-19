"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 54;

const getFramePath = (index: number) => {
  const paddedIndex = String(index).padStart(3, "0");
  return `/frames/section3_frames/frame_${paddedIndex}.jpg`;
};

export default function Video() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const [loaded, setLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const imgArrayRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);

  useEffect(() => {
    // 1. Preload Images
    let loadedCount = 0;
    const tempImages: HTMLImageElement[] = [];

    const handleImageLoad = () => {
      loadedCount++;
      setLoadingProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
      if (loadedCount === TOTAL_FRAMES) {
        // All images loaded
        setLoaded(true);
      }
    };

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // Continue even if an image fails to load
      tempImages.push(img);
    }
    imgArrayRef.current = tempImages;

    return () => {
      // Clean up image loaders
      tempImages.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    if (!canvas || !containerRef.current) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set initial size of canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Helper to draw image mimicking "object-fit: cover"
    const drawImageProp = (
      context: CanvasRenderingContext2D,
      img: HTMLImageElement,
      x = 0,
      y = 0,
      w = canvas.width,
      h = canvas.height,
      offsetX = 0.5,
      offsetY = 0.5
    ) => {
      const iw = img.width;
      const ih = img.height;
      const r = Math.min(w / iw, h / ih);
      let nw = iw * r;
      let nh = ih * r;
      let cx = 0,
        cy = 0,
        cw = iw,
        ch = ih;

      if (nw < w) {
        const scale = w / nw;
        nw *= scale;
        nh *= scale;
      }
      if (nh < h) {
        const scale = h / nh;
        nw *= scale;
        nh *= scale;
      }

      cw = iw / (nw / w);
      ch = ih / (nh / h);

      cx = (iw - cw) * offsetX;
      cy = (ih - ch) * offsetY;

      if (cx < 0) cx = 0;
      if (cy < 0) cy = 0;
      if (cw > iw) cw = iw;
      if (ch > ih) ch = ih;

      context.drawImage(img, cx, cy, cw, ch, x, y, w, h);
    };

    const renderFrame = (index: number) => {
      const img = imgArrayRef.current[index];
      if (img && img.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawImageProp(ctx, img);
        currentFrameRef.current = index;
      }
    };

    // Draw the first frame immediately
    renderFrame(0);

    // Frame object for GSAP to scrub
    const frameObj = { frame: 0 };

    // GSAP context to keep animations scoped and easy to clean up
    const gsapCtx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      // Scrub frames
      tl.to(
        frameObj,
        {
          frame: TOTAL_FRAMES - 1,
          snap: "frame",
          ease: "none",
          onUpdate: () => {
            renderFrame(Math.round(frameObj.frame));
          },
        },
        0
      );

      // Fade out header as we scroll down (completes in the first 25% of scroll)
      tl.to(
        headerRef.current,
        {
          opacity: 0,
          y: -40,
          duration: 0.25,
          ease: "power2.out",
        },
        0
      );

    }, containerRef);

    // Resize Handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(currentFrameRef.current);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      gsapCtx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, [loaded]);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-zinc-950"
      style={{ height: "350vh" }}
    >
      {/* Pinned Screen Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Loading Overlay */}
        <div
          className={`absolute inset-0 bg-zinc-950 flex flex-col items-center justify-center z-50 transition-opacity duration-700 pointer-events-none ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex flex-col items-center max-w-xs w-full px-6">
            <h3 className="text-white text-xs font-semibold tracking-[0.4em] uppercase mb-4 font-montserrat">
              Elentra
            </h3>
            {/* Minimalist Premium Progress Bar */}
            <div className="w-full h-[1px] bg-zinc-800 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-cream-400 transition-all duration-300 ease-out"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <p className="text-[10px] text-zinc-400 font-mono tracking-widest">
              {loadingProgress}%
            </p>
          </div>
        </div>

        {/* Canvas for Video Frames */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover block"
        />

        {/* Cinematic Vignette & Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-zinc-950/50 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

        {/* Sticky Top Header */}
        <div ref={headerRef} className="absolute top-16 md:top-20 left-0 w-full z-20 px-4 pointer-events-none">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-cream-400 drop-shadow-lg">
              Smart
            </h2>
            <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">
              Living
            </h2>
          </div>
        </div>

      </div>
    </div>
  );
}
