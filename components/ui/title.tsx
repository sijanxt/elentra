"use client";

import { motion } from "framer-motion";

interface TitleProps {
  creamText: string;
  primaryText: string;
  desc?: string;
  dark?: boolean;
  align?: "left" | "center" | "right";
  animate?: boolean;
  className?: string;
}

export default function Title({
  creamText,
  primaryText,
  desc,
  dark = false,
  align = "center",
  animate = true,
  className = "",
}: TitleProps) {
  const outerAlignClass =
    align === "left"
      ? "items-start text-left"
      : align === "right"
      ? "items-end text-right"
      : "items-center text-center";

  const headingAlignClass =
    align === "left"
      ? "justify-start"
      : align === "right"
      ? "justify-end"
      : "justify-center";

  const outerClasses = `flex flex-col gap-3 ${outerAlignClass} ${className}`;
  const headingClasses = `flex flex-wrap items-center gap-3 sm:gap-4 ${headingAlignClass}`;

  const creamColor = dark ? "text-cream-400" : "text-cream-600";
  const primaryColor = dark ? "text-white" : "text-zinc-900";
  const descColor = dark ? "text-zinc-400" : "text-zinc-500";
  const shadowClass = dark ? "drop-shadow-lg" : "";

  const content = (
    <>
      <div className={headingClasses}>
        <h2 className={`text-3xl sm:text-4xl font-medium ${creamColor} ${shadowClass}`}>
          {creamText}
        </h2>
        <h2 className={`text-3xl sm:text-4xl font-medium ${primaryColor} ${shadowClass}`}>
          {primaryText}
        </h2>
      </div>
      {desc && (
        <p className={`text-sm sm:text-base font-light ${descColor} max-w-xl leading-relaxed font-montserrat`}>
          {desc}
        </p>
      )}
    </>
  );

  if (!animate) {
    return (
      <div className={outerClasses}>
        {content}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={outerClasses}
    >
      {content}
    </motion.div>
  );
}
