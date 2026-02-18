
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Server, 
  Database, 
  Globe, 
  MousePointer2, 
  Activity, 
  Cpu, 
  Terminal as TerminalIcon,
  CheckCircle2,
  AlertCircle,
  Zap,
  Layout,
  Network
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
    id: "client",
    icon: MousePointer2,
    label: "Frontend Cluster",
    status: "Healthy",
    build: "#8291",
    latency: "12ms",
    color: "text-blue-400",
    glow: "shadow-[0_0_15px_rgba(96,165,250,0.3)]",
  },
  {
    id: "api",
    icon: Server,
    label: "API Gateway",
    status: "Active",
    build: "#7412",
    latency: "45ms",
    color: "text-yellow-400",
    glow: "shadow-[0_0_15px_rgba(250,204,21,0.3)]",
  },
  {
    id: "db",
    icon: Database,
    label: "Postgres Pool",
    status: "Stable",
    build: "#2938",
    latency: "8ms",
    color: "text-purple-400",
    glow: "shadow-[0_0_15px_rgba(192,132,252,0.3)]",
  },
  {
    id: "edge",
    icon: Globe,
    label: "Edge Network",
    status: "Optimized",
    build: "#5521",
    latency: "2ms",
    color: "text-green-400",
    glow: "shadow-[0_0_15px_rgba(74,222,128,0.3)]",
  },
];

const metrics = [
  { label: "System Uptime", value: "99.99%", trend: "stable", sub: "Last 30 days" },
  { label: "Request Latency", value: "32ms", trend: "down", sub: "P95 Avg" },
  { label: "Error Rate", value: "0.01%", trend: "stable", sub: "Production" },
  { label: "Lighthouse Score", value: "98/100", trend: "up", sub: "Core Vitals" },
];

export default function UXShowcase() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [sparkData] = useState(generateData());

  useEffect(() => {
    const initialLogs = [
      "[INFO] Pulling image: portfolio-ui:latest",
      "[INFO] Resolving dependencies...",
      "[INFO] Health check passed on port 3000",
      "[SUCCESS] Deployment rolled out to production",
    ];
    setLogs(initialLogs);

    const interval = setInterval(() => {
      const newLogs = [
        `[INFO] GET /api/v1/metrics - 200 OK (${Math.floor(Math.random() * 50)}ms)`,
        `[INFO] Health check heartbeat: STABLE`,
        `[INFO] Cache hit for key: user_session_hash`,
        `[INFO] Traffic spike detected: Auto-scaling active`,
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
                Cluster Status: Operational
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold tracking-tight mb-2"
              >
                System <span className="gradient-text">Observability</span>
              </motion.h2>
              <p className="text-muted-foreground font-mono text-xs">Runtime performance and service architecture monitor.</p>
            </div>
            
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg px-4 py-2 font-mono text-[10px] text-muted-foreground">
              <Activity className="w-3 h-3 text-primary" />
              <span>Real-time Traffic: 1.2k req/min</span>
            </div>
          </div>

          {/* Service Pipeline */}
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
                    "glass-card p-6 rounded-xl border-white/5 hover:border-primary/40 transition-all duration-300 relative group",
                    activeNode === node.id && node.glow
                  )}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={cn(
                      "p-2 rounded-lg bg-white/5 transition-colors duration-300",
                      activeNode === node.id && "bg-primary/20"
                    )}>
                      <node.icon className={cn("w-5 h-5", node.color)} />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[9px] font-mono text-muted-foreground/40 uppercase">Build</span>
                      <span className="text-[10px] font-mono font-bold text-foreground">{node.build}</span>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold mb-1 tracking-tight text-foreground">{node.label}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                    <span className="text-[10px] font-mono text-muted-foreground uppercase">{node.status}</span>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[9px] font-mono text-muted-foreground/40 uppercase">Latency</span>
                    <span className={cn("text-xs font-mono font-bold", node.color)}>{node.latency}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Metrics & Terminal Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* SRE Terminal Console */}
            <div className="lg:col-span-2 glass-card rounded-xl overflow-hidden flex flex-col h-[320px] bg-black/60 border-white/5">
              <div className="bg-[#1a1a1a] px-4 py-2 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TerminalIcon className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Deployment Logs</span>
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

            {/* Pod Health Grid & Quick Metrics */}
            <div className="flex flex-col gap-6">
              
              {/* Cluster Pod Grid */}
              <div className="glass-card p-6 rounded-xl border-white/5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Cluster Pods</span>
                  <span className="text-[10px] font-mono text-green-400">16/16 Up</span>
                </div>
                <div className="grid grid-cols-4 gap-3 flex-1">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      animate={{ 
                        scale: [1, 1.05, 1],
                        backgroundColor: i === 7 ? ["#22c55e", "#16a34a", "#22c55e"] : "#22c55e"
                      }}
                      transition={{ repeat: Infinity, duration: 3, delay: i * 0.2 }}
                      className="aspect-square rounded-[2px] bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.2)]"
                    />
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <p className="text-[9px] font-mono text-muted-foreground/60 leading-tight">
                    Region: us-east-1 <br />
                    Orchestration: Kubernetes v1.28
                  </p>
                </div>
              </div>

              {/* Uptime Badge */}
              <div className="glass-card p-6 rounded-xl border-white/5 bg-gradient-to-br from-primary/5 to-transparent">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-1.5 rounded-full bg-primary/20">
                    <Zap className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Perf Index</span>
                </div>
                <div className="text-2xl font-bold text-foreground">A+ <span className="text-xs font-normal text-muted-foreground">Certified</span></div>
                <div className="mt-2 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "98%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-primary" 
                  />
                </div>
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
                <div className="text-lg font-bold text-foreground mb-3">{metric.value}</div>
                
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
                    "text-[8px] font-bold px-1 rounded uppercase",
                    metric.trend === 'up' ? "bg-green-500/20 text-green-400" : 
                    metric.trend === 'down' ? "bg-primary/20 text-primary" : 
                    "bg-white/10 text-muted-foreground"
                  )}>
                    {metric.trend}
                  </span>
                  <span className="text-[9px] font-mono text-muted-foreground/30">{metric.sub}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
