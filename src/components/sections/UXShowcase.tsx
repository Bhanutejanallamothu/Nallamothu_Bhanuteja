
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Smartphone, MousePointer2, Paintbrush } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "High Performance",
    description: "Lighthouse 95+ scores achieved through image optimization, lazy loading, and efficient code splitting.",
  },
  {
    icon: Smartphone,
    title: "Responsive First",
    description: "Fluid layouts that provide seamless experiences across mobile, tablet, and desktop screens.",
  },
  {
    icon: MousePointer2,
    title: "Micro-interactions",
    description: "Subtle hover effects and scroll-triggered animations that enhance user engagement without distractions.",
  },
  {
    icon: Paintbrush,
    title: "Modern Aesthetics",
    description: "Contemporary design systems using glassmorphism, refined typography, and purposeful motion.",
  },
];

export default function UXShowcase() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 glass-card p-12 rounded-[2.5rem] relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 text-center">
                 <div className="inline-flex items-center justify-center p-4 rounded-3xl bg-primary/20 mb-8 border border-primary/20">
                    <Zap className="w-12 h-12 text-primary" />
                 </div>
                 <h2 className="text-4xl font-bold mb-6 tracking-tight">Optimized for <span className="gradient-text">Excellence</span></h2>
                 <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
                    My development process prioritizes speed, accessibility, and visual delight.
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-background rounded-2xl border border-border">
                        <div className="text-3xl font-bold text-primary mb-1">95+</div>
                        <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Lighthouse</div>
                    </div>
                    <div className="p-6 bg-background rounded-2xl border border-border">
                        <div className="text-3xl font-bold text-primary mb-1">&lt;2s</div>
                        <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Load Time</div>
                    </div>
                 </div>
              </div>
            </motion.div>

            <div className="flex-1 grid grid-cols-1 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0 border border-border">
                    <feature.icon className="w-6 h-6 text-foreground/70" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 tracking-tight">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
