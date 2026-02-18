
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Terminal as TerminalIcon, 
  Database as DatabaseIcon, 
  Cloud, 
  Settings, 
  CheckCircle2, 
  Zap,
  Layout,
  FileCode
} from "lucide-react";

const skillPanels = [
  {
    title: "App.tsx",
    category: "Frontend",
    icon: Layout,
    color: "text-blue-400",
    skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "Shadcn UI"],
    colSpan: "md:col-span-2",
  },
  {
    title: "api.service.ts",
    category: "Backend",
    icon: Code2,
    color: "text-yellow-400",
    skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "Java", "Python"],
    colSpan: "md:col-span-2",
  },
  {
    title: "schema.sql",
    category: "Databases",
    icon: DatabaseIcon,
    color: "text-purple-400",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "Redis", "Firebase"],
    colSpan: "md:col-span-2",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Technical <span className="gradient-text">Workspace</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg">My engineering toolkit organized by functional domains.</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* IDE Layout Container */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            
            {/* Main Editor Panes */}
            {skillPanels.map((panel, index) => (
              <motion.div
                key={panel.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${panel.colSpan} glass-card rounded-xl overflow-hidden border border-white/5 flex flex-col group hover:border-primary/30 transition-all duration-300`}
              >
                {/* Panel Header (Tab Style) */}
                <div className="bg-[#1e1e1e]/60 border-b border-white/5 px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1 mr-2">
                      <div className="w-2 h-2 rounded-full bg-red-500/30" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/30" />
                      <div className="w-2 h-2 rounded-full bg-green-500/30" />
                    </div>
                    <panel.icon className={`w-3.5 h-3.5 ${panel.color}`} />
                    <span className="text-[11px] font-mono text-muted-foreground tracking-wide">{panel.title}</span>
                  </div>
                  <Settings className="w-3 h-3 text-muted-foreground/30" />
                </div>

                {/* Panel Content */}
                <div className="p-6 bg-[#0d1117]/40 flex-1">
                  <div className="flex flex-wrap gap-2">
                    {panel.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-muted/50 border-white/5 hover:bg-primary/20 hover:text-primary transition-all cursor-default py-1 px-3 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Wide DevOps Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="md:col-span-4 glass-card rounded-xl overflow-hidden border border-white/5 flex flex-col hover:border-primary/30 transition-all"
            >
              <div className="bg-[#1e1e1e]/60 border-b border-white/5 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <div className="flex gap-1 mr-2">
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                  </div>
                  <Cloud className="w-3.5 h-3.5 text-sky-400" />
                  <span className="text-[11px] font-mono text-muted-foreground tracking-wide">deployment.yaml</span>
                </div>
              </div>
              
              <div className="p-8 bg-[#0d1117]/40">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {["AWS", "Docker", "Vercel", "Git/CI-CD"].map((tool) => (
                    <div key={tool} className="flex flex-col items-center gap-3 group/tool">
                      <div className="w-12 h-12 rounded-xl bg-muted/30 flex items-center justify-center border border-white/5 group-hover/tool:border-primary/50 group-hover/tool:bg-primary/5 transition-all">
                         <Zap className="w-5 h-5 text-muted-foreground group-hover/tool:text-primary" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Terminal Status Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="md:col-span-2 glass-card rounded-xl overflow-hidden border border-white/5 flex flex-col bg-[#0d1117]/80"
            >
              <div className="bg-[#1e1e1e]/90 border-b border-white/5 px-4 py-2 flex items-center gap-2">
                <TerminalIcon className="w-3.5 h-3.5 text-green-400" />
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Output</span>
              </div>
              
              <div className="p-6 font-mono text-[11px] leading-relaxed space-y-2">
                <div className="flex items-center gap-2 text-green-400">
                  <span className="text-muted-foreground/50">$</span>
                  <span>npm run build --prod</span>
                </div>
                <div className="flex items-center gap-2 text-sky-400">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Next.js optimized bundle</span>
                </div>
                <div className="flex items-center gap-2 text-sky-400">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Docker image built</span>
                </div>
                <div className="flex items-center gap-2 text-sky-400">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>AWS infrastructure live</span>
                </div>
                <div className="flex items-center gap-2 text-green-400 mt-4">
                  <span className="animate-pulse">●</span>
                  <span>Deployment: SUCCESSFUL</span>
                  <span className="w-1 h-3 bg-white animate-pulse" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
