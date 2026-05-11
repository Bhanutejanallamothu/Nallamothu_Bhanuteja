"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Award, 
  Cloud, 
  FileCode2, 
  Languages, 
  Database, 
  ShieldCheck,
  Terminal
} from "lucide-react";
import { cn } from "@/lib/utils";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    icon: Cloud,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    id: "AWS-CCP",
  },
  {
    title: "Design and Analysis of Algorithms",
    issuer: "NPTEL",
    icon: FileCode2,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    id: "NPTEL-DAA",
  },
  {
    title: "Linguaskill (Cambridge English)",
    issuer: "Cambridge Assessment English",
    icon: Languages,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    id: "CAM-ENG",
  },
  {
    title: "SQL — HackerRank",
    issuer: "HackerRank",
    icon: Database,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    id: "HR-SQL",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                  verified_credentials.json
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Professional <span className="gradient-text">Registry</span>
              </h2>
            </motion.div>
            
            <div className="font-mono text-[10px] text-muted-foreground/40 hidden md:block">
              // system: integrity check passed
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="glass-card p-6 rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-500 flex items-start gap-6 overflow-hidden">
                  {/* Icon Module */}
                  <div className={cn(
                    "shrink-0 w-16 h-16 rounded-xl flex items-center justify-center border transition-all duration-500 group-hover:scale-110",
                    cert.bg,
                    cert.border
                  )}>
                    <cert.icon className={cn("w-8 h-8", cert.color)} />
                  </div>

                  {/* Info Module */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-mono text-muted-foreground uppercase tracking-tighter">
                        ID: {cert.id}
                      </div>
                      <ShieldCheck className="w-4 h-4 text-green-500/40 group-hover:text-green-500 transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-1 tracking-tight text-foreground truncate">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium mb-4">
                      {cert.issuer}
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="text-[10px] font-mono text-muted-foreground/40">
                        Status: <span className="text-green-500/60 uppercase">Active</span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative terminal accent */}
                  <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Terminal className="w-3 h-3 text-primary/20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Verification Status Console */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-4 glass-card rounded-xl bg-black/40 border-white/5 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Registry Sync: Online</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-white/10" />
              <div className="hidden sm:block text-[10px] font-mono text-muted-foreground/40">
                Last integrity check: 2026-05-11
              </div>
            </div>
            <div className="text-[10px] font-mono text-primary/40">
              protocol_v2.1.0
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}