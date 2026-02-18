
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Smartphone, 
  MousePointer2, 
  Database, 
  Server,
  Globe,
  ArrowRight,
  Activity,
  Cpu,
  Layers,
  Share2
} from "lucide-react";
import { cn } from "@/lib/utils";

const flowStages = [
  {
    id: "frontend",
    icon: MousePointer2,
    label: "Client Layer",
    title: "Interactive UI",
    description: "State-driven micro-interactions and smooth Framer Motion animations for instant feedback.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    id: "backend",
    icon: Server,
    label: "API Layer",
    title: "High Performance",
    description: "Optimized server-side logic and RESTful architectures designed for low-latency processing.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20"
  },
  {
    id: "database",
    icon: Database,
    label: "Data Layer",
    title: "System Persistence",
    description: "Relational data modeling and indexed query optimization for high-concurrency environments.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20"
  },
  {
    id: "delivery",
    icon: Globe,
    label: "Edge Layer",
    title: "Global Delivery",
    description: "Responsive cross-device rendering distributed via global CDN for sub-2s load times.",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20"
  },
];

export default function UXShowcase() {
  const [activeStage, setActiveStage] = useState<string | null>(null);

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
              <Cpu className="w-3 h-3" /> runtime_architecture.v2
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              Full-Stack <span className="gradient-text">Request Flow</span>
            </motion.h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Visualizing the complete lifecycle of a user request as it traverses through my engineering stack.
            </p>
          </div>

          {/* Architecture Flow Visualization */}
          <div className="relative">
            
            {/* Main Flow Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-white/10 -translate-y-1/2 hidden lg:block z-0" />
            
            {/* Animated Request Pulse (Looping) */}
            <motion.div
              animate={{ 
                left: ["0%", "100%"],
                opacity: [0, 1, 1, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "linear",
                times: [0, 0.1, 0.9, 1]
              }}
              className="absolute top-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent -translate-y-1/2 hidden lg:block z-10"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {flowStages.map((stage, index) => (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setActiveStage(stage.id)}
                  onMouseLeave={() => setActiveStage(null)}
                  className="group"
                >
                  <div className={cn(
                    "glass-card p-8 rounded-[2rem] border-white/5 hover:border-primary/40 transition-all duration-500 h-full flex flex-col items-center text-center relative",
                    activeStage === stage.id && "shadow-[0_0_30px_rgba(72,219,251,0.1)] scale-[1.02]"
                  )}>
                    {/* Stage Label (Terminal Style) */}
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground/60 mb-6">
                      {stage.label}
                    </span>

                    {/* Icon Node */}
                    <div className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(72,219,251,0.2)]",
                      stage.bg, stage.border,
                      activeStage === stage.id && "scale-110 border-primary/50"
                    )}>
                      <stage.icon className={cn("w-7 h-7 transition-colors", stage.color, activeStage === stage.id && "text-primary")} />
                    </div>

                    <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {stage.description}
                    </p>

                    {/* Runtime Status */}
                    <div className="mt-8 pt-6 border-t border-white/5 w-full flex items-center justify-center gap-2">
                       <div className={cn(
                         "w-1.5 h-1.5 rounded-full animate-pulse",
                         activeStage === stage.id ? "bg-primary" : "bg-green-500/50"
                       )} />
                       <span className="text-[9px] font-mono text-muted-foreground/40 uppercase tracking-tighter">
                         status: {activeStage === stage.id ? 'processing_request' : 'stable_ready'}
                       </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* System Metrics Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 glass-card p-10 rounded-[2.5rem] bg-gradient-to-br from-[#0d1117] to-background border-white/5 relative overflow-hidden group"
          >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none ide-grid" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative z-10">
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                    <Activity className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest">Health Monitor</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight">System Performance: <span className="text-primary">99%</span></h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every interaction is optimized for high-fidelity throughput, ensuring minimal latency across the entire stack.
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-[10px] font-mono text-muted-foreground uppercase">Frontend OK</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-[10px] font-mono text-muted-foreground uppercase">API OK</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-[10px] font-mono text-muted-foreground uppercase">DB OK</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { label: "Throughput", value: "High", sub: "Load Balance" },
                  { label: "TTFB", value: "<150ms", sub: "Response Time" },
                  { label: "Consistency", value: "Eventual", sub: "Data Model" },
                  { label: "Core Vitals", value: "98/100", sub: "User Metric" },
                ].map((stat) => (
                  <div key={stat.label} className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center text-center hover:bg-primary/10 hover:border-primary/20 transition-all duration-300">
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-0.5">{stat.label}</div>
                    <div className="text-[9px] text-muted-foreground/40 font-mono">{stat.sub}</div>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

          {/* Network Path Footer */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-30 grayscale pointer-events-none">
             <div className="flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span className="text-[10px] font-mono uppercase">User Interface</span>
             </div>
             <ArrowRight className="w-3 h-3" />
             <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                <span className="text-[10px] font-mono uppercase">Microservices</span>
             </div>
             <ArrowRight className="w-3 h-3" />
             <div className="flex items-center gap-2">
                <Database className="w-4 h-4" />
                <span className="text-[10px] font-mono uppercase">Master DB</span>
             </div>
             <ArrowRight className="w-3 h-3" />
             <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span className="text-[10px] font-mono uppercase">Edge Cache</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
