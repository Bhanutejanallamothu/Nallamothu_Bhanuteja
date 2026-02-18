
"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface InteractiveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline";
}

export default function InteractiveButton({
  children,
  className,
  variant = "primary",
  ...props
}: InteractiveButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  // Spotlight position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Tilt values
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });

  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    
    // Calculate normalized mouse position (-0.5 to 0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
    
    // Update CSS variables for spotlight
    const spotlightX = (e.clientX - rect.left).toFixed(2);
    const spotlightY = (e.clientY - rect.top).toFixed(2);
    buttonRef.current.style.setProperty("--x", `${spotlightX}px`);
    buttonRef.current.style.setProperty("--y", `${spotlightY}px`);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  }

  const baseStyles = "relative px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group border select-none";
  const variants = {
    primary: "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_rgba(72,219,251,0.3)] hover:shadow-[0_0_35px_rgba(72,219,251,0.5)] active:shadow-[0_0_15px_rgba(72,219,251,0.4)]",
    outline: "bg-background/40 backdrop-blur-md text-foreground border-white/10 hover:border-primary/50 hover:bg-background/60",
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.96 }}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {/* Spotlight Layer */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at var(--x) var(--y), ${variant === 'primary' ? 'rgba(255,255,255,0.4)' : 'rgba(72,219,251,0.2)'} 0%, transparent 80%)`,
        }}
      />
      
      {/* Content Layer (translated slightly forward for 3D effect) */}
      <span style={{ transform: "translateZ(20px)" }} className="relative z-10 flex items-center gap-2 tracking-tight">
        {children}
      </span>
    </motion.button>
  );
}
