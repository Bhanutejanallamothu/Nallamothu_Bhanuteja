
"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitBranch, GitCommit, Calendar, Building2, ChevronRight, Terminal, Hash } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    branch: "kl-radio",
    role: "Technical Lead",
    company: "KL Radio",
    period: "Aug 2024 – Present",
    isCurrent: true,
    commits: [
      { hash: "a1b2c3d", type: "feat", message: "Led 15-member engineering and production team" },
      { hash: "b2c3d4e", type: "arch", message: "Architected and deployed full-stack streaming platform" },
      { hash: "c3d4e5f", type: "perf", message: "Delivered 50+ live broadcasts with 99% reliability" },
      { hash: "d4e5f6g", type: "scale", message: "Managed platform for 500+ concurrent listeners" },
      { hash: "e5f6g7h", type: "opt", message: "Streamlined production workflow by 25%" },
    ],
  },
  {
    branch: "swecha-intern",
    role: "Technology Intern",
    company: "Swecha",
    period: "Jun 2025 – Jul 2025",
    isCurrent: false,
    commits: [
      { hash: "f6g7h8i", type: "ml", message: "Improved Telugu NLP model accuracy by 10%" },
      { hash: "g7h8i9j", type: "perf", message: "Increased frontend performance by 18% through code splitting" },
      { hash: "h8i9j0k", type: "data", message: "Collaborated on large-scale open source Telugu dataset" },
    ],
  },
];

const CommitNode = ({ isLast, isCurrent }: { isLast: boolean; isCurrent: boolean }) => (
  <div className="flex flex-col items-center group/node">
    <div className={cn(
      "w-3 h-3 rounded-full border-2 bg-background z-10 transition-all duration-300",
      isCurrent ? "border-primary shadow-[0_0_8px_rgba(72,219,251,0.6)]" : "border-muted-foreground/30 group-hover/node:border-primary/50"
    )} />
    {!isLast && (
      <div className="w-px h-full bg-muted-foreground/20 border-l border-dashed group-hover/node:border-primary/20 transition-colors" />
    )}
  </div>
);

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto mb-20">
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
              <span className="text-primary">$</span> git log --career --graph --all
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Engineering <span className="gradient-text">History</span>
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-24">
          {experiences.map((exp, expIdx) => (
            <motion.div
              key={exp.branch}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: expIdx * 0.1 }}
              className="relative"
            >
              {/* Branch Label & Role Header */}
              <div className="flex flex-col md:flex-row md:items-end gap-4 mb-12">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                      {exp.role}
                    </h3>
                    {exp.isCurrent && (
                      <span className="px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-tighter animate-pulse">
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
                <div className="md:ml-auto">
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-primary/70">
                    branch: <span className="text-foreground">{exp.branch}</span>
                  </div>
                </div>
              </div>

              {/* Commit History for this Branch */}
              <div className="space-y-0">
                {exp.commits.map((commit, commitIdx) => (
                  <div key={commit.hash} className="flex gap-6 group/commit">
                    <div className="pt-1.5 flex flex-col items-center">
                      <CommitNode 
                        isLast={commitIdx === exp.commits.length - 1} 
                        isCurrent={exp.isCurrent && commitIdx === 0} 
                      />
                    </div>
                    
                    <div className="flex-1 pb-8">
                      <motion.div
                        whileHover={{ x: 8 }}
                        className="glass-card rounded-xl p-4 md:p-5 border-white/5 hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <div className="shrink-0 mt-1">
                              <span className={cn(
                                "text-[10px] font-bold px-1.5 py-0.5 rounded border uppercase tracking-tighter",
                                commit.type === 'feat' && "bg-blue-500/10 border-blue-500/20 text-blue-400",
                                commit.type === 'arch' && "bg-purple-500/10 border-purple-500/20 text-purple-400",
                                commit.type === 'perf' && "bg-green-500/10 border-green-500/20 text-green-400",
                                commit.type === 'scale' && "bg-orange-500/10 border-orange-500/20 text-orange-400",
                                commit.type === 'opt' && "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
                                commit.type === 'ml' && "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
                                commit.type === 'data' && "bg-indigo-500/10 border-indigo-500/20 text-indigo-400"
                              )}>
                                {commit.type}
                              </span>
                            </div>
                            <p className="text-sm md:text-base text-muted-foreground group-hover/commit:text-foreground transition-colors leading-relaxed">
                              {commit.message}
                            </p>
                          </div>
                          
                          <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground/40 shrink-0">
                            <Hash className="w-3 h-3" />
                            {commit.hash}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Branch Merge Indicator */}
              {expIdx < experiences.length - 1 && (
                <div className="absolute -bottom-16 left-[5.5px] w-px h-16 border-l border-dashed border-muted-foreground/20" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Career Summary Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-20 p-6 glass-card rounded-2xl bg-[#0d1117]/80 border-white/5"
        >
          <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
            <Terminal className="w-4 h-4 text-green-400" />
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">career_analytics.sh</span>
          </div>
          <div className="font-mono text-xs md:text-sm space-y-2">
            <div className="flex gap-4">
              <span className="text-muted-foreground/50">Total Commits:</span>
              <span className="text-primary">248 active development cycles</span>
            </div>
            <div className="flex gap-4">
              <span className="text-muted-foreground/50">Impact Score:</span>
              <span className="text-green-400">99.9% deployment reliability</span>
            </div>
            <div className="flex gap-4">
              <span className="text-muted-foreground/50">Tech Focus:</span>
              <span className="text-sky-400">Full-Stack Architecture & UI/UX Engineering</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
