"use client";

import { motion } from "framer-motion";

interface TitleProps {
  creamText: string;
  primaryText: string;
  dark?: boolean;
  align?: "left" | "center" | "right";
  animate?: boolean;
  className?: string;
}

export default function Title({
  creamText,
  primaryText,
  dark = false,
  align = "center",
  animate = true,
  className = "",
}: TitleProps) {
  const alignmentClass =
    align === "left"
      ? "justify-start text-left"
      : align === "right"
      ? "justify-end text-right"
      : "justify-center text-center";

  const containerClasses = `flex flex-wrap items-center gap-3 sm:gap-4 ${alignmentClass} ${className}`;

  const creamColor = dark ? "text-cream-400" : "text-cream-600";
  const primaryColor = dark ? "text-white" : "text-zinc-900";
  const shadowClass = dark ? "drop-shadow-lg" : "";

  const headingElements = (
    <>
      <h2 className={`text-3xl sm:text-4xl font-medium ${creamColor} ${shadowClass}`}>
        {creamText}
      </h2>
      <h2 className={`text-3xl sm:text-4xl font-medium ${primaryColor} ${shadowClass}`}>
        {primaryText}
      </h2>
    </>
  );

  if (!animate) {
    return (
      <div className={containerClasses}>
        {headingElements}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={containerClasses}
    >
      {headingElements}
    </motion.div>
  );
}
