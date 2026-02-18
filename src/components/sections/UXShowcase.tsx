
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Box,
  Zap,
  Smartphone,
  Paintbrush,
  CheckCircle2,
  Activity,
  Server,
  Globe,
  Activity as ActivityIcon,
  Terminal as TerminalIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  LineChart, 
  Line, 
  ResponsiveContainer 
} from "recharts";

// Mock data for sparklines
const generateData = () => Array.from({ length: 20 }, (_, i) => ({
  value: Math.floor(Math.random() * 50) + 30
}));

const serviceNodes = [
  {
    id: "build",
    icon: Box,
    label: "Micro-interactions",
    sublabel: "Stage: Build",
    status: "Verified",
    description: "Component-level polish with Framer Motion and state-driven animations.",
    color: "text-blue-400",
    glow: "shadow-[0_0_15px_rgba(96,165,250,0.3)]",
  },
  {
    id: "optimize",
    icon: Zap,
    label: "High Performance",
    sublabel: "Stage: Optimize",
    status: "Verified",
    description: "Image optimization, code splitting, and lazy loading for instant feedback.",
    color: "text-yellow-400",
    glow: "shadow-[0_0_15px_rgba(250,204,21,0.3)]",
  },
  {
    id: "test",
    icon: Smartphone,
    label: "Responsive First",
    sublabel: "Stage: Test",
    status: "Verified",
    description: "Cross-browser validation and fluid layout testing across all device breakpoints.",
    color: "text-purple-400",
    glow: "shadow-[0_0_15px_rgba(192,132,252,0.3)]",
  },
  {
    id: "deliver",
    icon: Paintbrush,
    label: "Modern UI",
    sublabel: "Stage: Deliver",
    status: "Verified",
    description: "Implementation of comprehensive design systems and visual aesthetics.",
    color: "text-green-400",
    glow: "shadow-[0_0_15px_rgba(74,222,128,0.3)]",
  },
];

const metrics = [
  { label: "Lighthouse", value: "95+", trend: "Performance", sub: "P95 Avg" },
  { label: "Load Time", value: "<2s", trend: "Speed Index", sub: "Global Average" },
  { label: "Uptime", value: "99.9%", trend: "Reliability", sub: "SLA Guaranteed" },
  { label: "Core Web", value: "Pass", trend: "Vitals", sub: "Certified" },
];

export default function UXShowcase() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [sparkData] = useState(generateData());

  useEffect(() => {
    const initialLogs = [
      "[INFO] Deployment: Stable",
      "[INFO] Initializing production pipeline...",
      "[INFO] Image optimization: Complete",
      "[SUCCESS] Core Web Vitals audit passed",
    ];
    setLogs(initialLogs);

    const interval = setInterval(() => {
      const newLogs = [
        `[INFO] Pipeline: Stage Build - Optimized (${Math.floor(Math.random() * 50)}ms)`,
        `[INFO] Production Status: Operational`,
        `[INFO] Layout validated across 12 viewports`,
        `[INFO] Edge CDN synchronization: Active`,
      ];
      setLogs(prev => [...prev.slice(-5), newLogs[Math.floor(Math.random() * newLogs.length)]]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      {/* Background patterns */}
      <div className="absolute inset-0 ide-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 px-3 py-1 rounded border border-green-500/20 bg-green-500/5 text-green-400 text-[10px] font-mono font-bold uppercase tracking-widest mb-4 w-fit"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Production Status: Operational
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold tracking-tight mb-2"
              >
                Delivery <span className="gradient-text">Pipeline</span>
              </motion.h2>
              <p className="text-muted-foreground font-mono text-xs">High-fidelity delivery workflow and production metrics monitor.</p>
            </div>
            
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg px-4 py-2 font-mono text-[10px] text-muted-foreground">
              <ActivityIcon className="w-3 h-3 text-primary" />
              <span>Pipeline Status: 99.9% Reliable</span>
            </div>
          </div>

          {/* Service Pipeline (Stages) */}
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-white/10 -translate-y-1/2 hidden lg:block" />
            
            {/* Animated Traffic Pulse */}
            <motion.div
              animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 w-48 h-px bg-gradient-to-r from-transparent via-primary to-transparent -translate-y-1/2 hidden lg:block z-0"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceNodes.map((node, i) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  className={cn(
                    "glass-card p-6 rounded-xl border-white/5 hover:border-primary/40 transition-all duration-300 relative group flex flex-col min-h-[280px]",
                    activeNode === node.id && node.glow
                  )}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={cn(
                      "p-3 rounded-xl bg-white/5 transition-colors duration-300",
                      activeNode === node.id && "bg-primary/20"
                    )}>
                      <node.icon className={cn("w-6 h-6", node.color)} />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[9px] font-mono text-muted-foreground/40 uppercase tracking-widest">{node.sublabel}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-2 tracking-tight text-foreground">{node.label}</h3>
                  <p className="text-xs text-muted-foreground/80 leading-relaxed mb-auto">
                    {node.description}
                  </p>

                  <div className="pt-4 border-t border-white/5 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">{node.status}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Metrics & Terminal Dashboard */}
          <div className="grid grid-cols-1 gap-6">
            
            {/* SRE Terminal Console (Expanded to full width) */}
            <div className="glass-card rounded-xl overflow-hidden flex flex-col h-[320px] bg-black/60 border-white/5">
              <div className="bg-[#1a1a1a] px-4 py-2 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TerminalIcon className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Production Logs</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-white/5" />
                  <div className="w-2 h-2 rounded-full bg-white/5" />
                  <div className="w-2 h-2 rounded-full bg-white/5" />
                </div>
              </div>
              <div className="p-4 font-mono text-[11px] leading-relaxed overflow-hidden">
                <AnimatePresence mode="popLayout">
                  {logs.map((log, i) => (
                    <motion.div
                      key={log + i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={cn(
                        "mb-1.5 break-all",
                        log.includes("[SUCCESS]") ? "text-green-400" : 
                        log.includes("[ERROR]") ? "text-red-400" : 
                        "text-muted-foreground/80"
                      )}
                    >
                      <span className="opacity-30 mr-2">[{new Date().toLocaleTimeString()}]</span>
                      {log}
                    </motion.div>
                  ))}
                </AnimatePresence>
                <motion.div 
                  animate={{ opacity: [0, 1] }} 
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2 h-3.5 bg-primary/50 inline-block ml-1 align-middle"
                />
              </div>
            </div>
          </div>

          {/* Bottom SRE Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-5 rounded-xl border-white/5 hover:bg-white/5 transition-colors group"
              >
                <div className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-tighter mb-1">{metric.label}</div>
                <div className="text-2xl font-bold text-foreground mb-3">{metric.value}</div>
                
                <div className="h-8 w-full opacity-30 group-hover:opacity-60 transition-opacity">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sparkData}>
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="var(--primary)" 
                        strokeWidth={2} 
                        dot={false} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="flex items-center gap-1.5 mt-2">
                  <span className={cn(
                    "text-[8px] font-bold px-1 rounded uppercase bg-primary/20 text-primary"
                  )}>
                    {metric.trend}
                  </span>
                  <span className="text-[9px] font-mono text-muted-foreground/30">{metric.sub}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Infrastructure Footer */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-muted-foreground/40 font-mono text-[10px] uppercase tracking-[0.2em]">
            <div className="flex items-center gap-2">
              <Server className="w-3.5 h-3.5" /> Edge CDN
            </div>
            <div className="text-primary/20">→</div>
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5" /> Cloud Hosting
            </div>
            <div className="text-primary/20">→</div>
            <div className="flex items-center gap-2">
              <ActivityIcon className="w-3.5 h-3.5" /> End User Browser
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
