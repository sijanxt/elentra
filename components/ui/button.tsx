"use client";

import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "premium";
  size?: "sm" | "md" | "lg";
  dark?: boolean;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  variant = "premium",
  size = "md",
  dark = false,
  className = "",
  icon,
  iconPosition = "right",
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  // Size styles mapping
  const sizeStyles = {
    sm: "py-1.5 px-4 text-[10px] tracking-[0.18em]",
    md: "py-3 px-6 text-[11px] tracking-[0.2em] font-semibold",
    lg: "py-4 px-8 text-xs tracking-[0.22em] font-bold",
  };

  // Variant styles mapping
  const variantStyles = {
    premium: dark
      ? "text-white/80 hover:text-white bg-transparent border border-white/20 hover:border-white/55"
      : "text-zinc-500 hover:text-zinc-800 bg-transparent border border-zinc-200 hover:border-cream-500",
    primary: "bg-cream-500 text-zinc-950 hover:bg-zinc-900 hover:text-white border border-transparent shadow-sm",
    secondary: "bg-zinc-900 text-white hover:bg-cream-600 border border-transparent shadow-sm",
    outline: dark
      ? "text-white border border-white/20 hover:border-white hover:bg-white/5"
      : "text-secondary border border-zinc-200 hover:border-secondary hover:bg-zinc-50/80",
    ghost: "text-zinc-500 hover:text-zinc-800 hover:bg-zinc-50/50 bg-transparent border-transparent",
  };

  const combinedClasses = `
    relative inline-flex items-center justify-center gap-2.5 
    font-montserrat uppercase rounded-full transition-colors duration-300 
    focus:outline-none cursor-pointer overflow-hidden group
    ${sizeStyles[size]} 
    ${variantStyles[variant]} 
    ${className}
  `.replace(/\s+/g, " ").trim();

  // Variants for the button itself (controls hover/tap scales)
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1,
    },
    tap: { 
      scale: 0.98
    }
  };

  const contentElements = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2.5">
        {icon && iconPosition === "left" && (
          <span className="flex items-center justify-center shrink-0">
            {icon}
          </span>
        )}
        {typeof children === "string" ? <span>{children}</span> : children}
        {icon && iconPosition === "right" && (
          <span className="flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </span>
      
      {/* Premium subtle ring overlay for premium variant */}
      {variant === "premium" && (
        <div
          className={`absolute inset-0 rounded-full border transition-colors duration-300 pointer-events-none ${
            dark 
              ? "border-white/20 group-hover:border-white/55" 
              : "border-zinc-200 group-hover:border-cream-500"
          }`}
        />
      )}
    </>
  );

  // If href is passed, render a Next.js Link component with motion.a
  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className={combinedClasses}
          target={target}
          rel={rel}
          {...(props as any)}
        >
          {contentElements}
        </motion.a>
      </Link>
    );
  }

  // Animation for scale on hover / tap for standard button
  return (
    <motion.button
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      className={combinedClasses}
      {...props}
    >
      {contentElements}
    </motion.button>
  );
}
