"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitBranch, GitCommit, Calendar, Building2, ChevronRight, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    hash: "f7a2b8e",
    role: "Technical Lead",
    company: "KL Radio",
    period: "Aug 2024 – Present",
    isCurrent: true,
    highlights: [
      "Led 15-member engineering and production team",
      "Architected and deployed full-stack streaming platform",
      "Delivered 50+ live broadcasts with 99% reliability",
      "Managed platform for 500+ concurrent listeners",
      "Streamlined production workflow by 25%",
    ],
  },
  {
    hash: "d4c1f9a",
    role: "Technology Intern",
    company: "Swecha",
    period: "Jun 2025 – Jul 2025",
    isCurrent: false,
    highlights: [
      "Improved Telugu NLP model accuracy by 10%",
      "Increased frontend performance by 18% through code splitting and optimization",
      "Collaborated on large-scale open source Telugu dataset preparation",
    ],
  },
];

const GitNode = ({ isCurrent }: { isCurrent: boolean }) => (
  <div className="relative flex items-center justify-center">
    <div className={cn(
      "w-4 h-4 rounded-full border-2 z-10 bg-background transition-all duration-300",
      isCurrent ? "border-primary shadow-[0_0_10px_rgba(72,219,251,0.8)]" : "border-muted-foreground/40"
    )} />
    {isCurrent && (
      <div className="absolute w-4 h-4 rounded-full bg-primary animate-ping opacity-20" />
    )}
  </div>
);

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <GitBranch className="w-5 h-5 text-primary" />
            </div>
            <div className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">$</span> git log --career --graph
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Professional <span className="gradient-text">Journey</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Branch Line */}
          <div className="absolute left-[7px] md:left-[119px] top-2 bottom-0 w-px border-l border-dashed border-muted-foreground/20" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.hash}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8"
              >
                {/* Hash & Date Column (Desktop) */}
                <div className="hidden md:flex flex-col items-end pt-1">
                  <span className="font-mono text-xs text-primary/60 font-bold mb-1 group-hover:text-primary transition-colors">
                    commit {exp.hash}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                    {exp.period.split(' – ')[0]}
                  </span>
                </div>

                {/* Git Node & Content */}
                <div className="flex gap-6 md:gap-8">
                  <div className="relative pt-1.5 shrink-0">
                    <GitNode isCurrent={exp.isCurrent} />
                  </div>

                  <div className="flex-1 pb-4">
                    <div className="glass-card rounded-2xl p-6 md:p-8 border-white/5 group-hover:border-primary/30 transition-all duration-500">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                              {exp.role}
                            </h3>
                            {exp.isCurrent && (
                              <span className="px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-tighter">
                                HEAD
                              </span>
                            )}
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground font-medium">
                            <span className="flex items-center gap-1.5">
                              <Building2 className="w-4 h-4 text-primary/60" />
                              {exp.company}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-4 h-4 text-primary/60" />
                              {exp.period}
                            </span>
                          </div>
                        </div>
                        
                        <div className="md:hidden font-mono text-[10px] text-primary/40 uppercase font-bold">
                          commit: {exp.hash}
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {exp.highlights.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground group/item">
                            <ChevronRight className="w-4 h-4 mt-1 text-primary/40 group-hover/item:text-primary transition-colors shrink-0" />
                            <span className="text-sm md:text-base leading-relaxed group-hover/item:text-foreground transition-colors">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Diff View Indicator */}
                      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <div className="flex gap-3 font-mono text-[10px] text-muted-foreground/60 uppercase tracking-tighter">
                          <span>files changed: 12</span>
                          <span className="text-green-500/60">insertions: 48(+)</span>
                          <span className="text-red-500/60">deletions: 12(-)</span>
                        </div>
                        <Terminal className="w-3.5 h-3.5 text-primary/30" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
