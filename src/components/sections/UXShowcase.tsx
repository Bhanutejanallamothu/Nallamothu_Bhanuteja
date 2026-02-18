
"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Smartphone, 
  MousePointer2, 
  Paintbrush, 
  Box, 
  CheckCircle2, 
  Activity,
  Server,
  Globe,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const pipelineStages = [
  {
    id: "build",
    icon: Box,
    label: "Build",
    title: "Micro-interactions",
    description: "Component-level polish with Framer Motion and state-driven animations.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    id: "optimize",
    icon: Zap,
    label: "Optimize",
    title: "High Performance",
    description: "Image optimization, code splitting, and lazy loading for instant feedback.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20"
  },
  {
    id: "test",
    icon: Smartphone,
    label: "Test",
    title: "Responsive First",
    description: "Cross-browser validation and fluid layout testing across all device breakpoints.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20"
  },
  {
    id: "deliver",
    icon: Paintbrush,
    label: "Deliver",
    title: "Modern UI",
    description: "Implementation of comprehensive design systems and visual aesthetics.",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20"
  },
];

export default function UXShowcase() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4"
            >
              <Activity className="w-3 h-3" /> quality_assurance.v1
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              Production <span className="gradient-text">Delivery Pipeline</span>
            </motion.h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My engineering workflow focuses on shipping high-performance, tested, and visually polished applications to production.
            </p>
          </div>

          {/* Pipeline Visualization */}
          <div className="relative">
            
            {/* Horizontal Pipeline Line (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-white/10 -translate-y-1/2 hidden lg:block z-0" />
            
            {/* Traveling Pulse (Desktop) */}
            <motion.div
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 w-48 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2 hidden lg:block z-0"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {pipelineStages.map((stage, index) => (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="glass-card p-8 rounded-[2rem] border-white/5 hover:border-primary/30 transition-all duration-500 h-full flex flex-col items-center text-center">
                    {/* Stage Label */}
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-6 font-mono">
                      stage: {stage.label}
                    </span>

                    {/* Icon Node */}
                    <div className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(72,219,251,0.2)]",
                      stage.bg, stage.border
                    )}>
                      <stage.icon className={cn("w-7 h-7", stage.color)} />
                    </div>

                    <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {stage.description}
                    </p>

                    {/* Progress Indicator */}
                    <div className="mt-8 pt-6 border-t border-white/5 w-full flex items-center justify-center gap-2">
                       <CheckCircle2 className="w-3.5 h-3.5 text-green-500/50" />
                       <span className="text-[10px] font-mono text-muted-foreground/40 uppercase">verified</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Deployment Result / Metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 glass-card p-10 rounded-[2.5rem] bg-gradient-to-br from-[#0d1117] to-background border-white/5"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                    <Globe className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest">Production Status</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Deployment: <span className="text-green-400">Stable</span></h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every project is delivered through a rigorous pipeline that ensures high-fidelity results and optimal user experience metrics.
                </p>
              </div>

              <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { label: "Lighthouse", value: "95+", sub: "Performance" },
                  { label: "Load Time", value: "<2s", sub: "Speed Index" },
                  { label: "Uptime", value: "99.9%", sub: "Reliability" },
                  { label: "Core Web", value: "Pass", sub: "Vitals" },
                ].map((stat) => (
                  <div key={stat.label} className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors">
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-0.5">{stat.label}</div>
                    <div className="text-[9px] text-muted-foreground/40 font-mono">{stat.sub}</div>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

          {/* Network Visualization Layer */}
          <div className="mt-12 flex items-center justify-center gap-8 opacity-20 grayscale pointer-events-none">
             <div className="flex items-center gap-2">
                <Server className="w-4 h-4" />
                <span className="text-[10px] font-mono">Edge CDN</span>
             </div>
             <ArrowRight className="w-3 h-3" />
             <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span className="text-[10px] font-mono">Cloud Hosting</span>
             </div>
             <ArrowRight className="w-3 h-3" />
             <div className="flex items-center gap-2">
                <Activity className="w-4 h-4" />
                <span className="text-[10px] font-mono">End User Browser</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

