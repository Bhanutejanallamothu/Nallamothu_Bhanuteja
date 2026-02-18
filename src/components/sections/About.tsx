
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Layout, Database, Cloud, Terminal, ChevronRight } from "lucide-react";

const focusAreas = [
  {
    icon: Layout,
    title: "Frontend Engineering",
    description: "Expertise in React.js and Next.js, building interactive, responsive interfaces with a keen eye for design.",
    command: "ui --render",
  },
  {
    icon: Code2,
    title: "Backend Development",
    description: "Building scalable services and robust REST APIs using Node.js, Express, and Spring Boot.",
    command: "api --serve",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Architecting efficient data models with relational databases like MySQL and PostgreSQL.",
    command: "db --query",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Deployment and management across AWS, Docker, Vercel, and Render with a performance-first mindset.",
    command: "deploy --cloud",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Terminal Window for Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              {/* Terminal Header */}
              <div className="bg-[#1e1e1e]/80 border-b border-white/5 px-4 py-2 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">bash — about.sh</div>
                <div className="w-8" />
              </div>

              <div className="p-8 font-mono text-sm md:text-base leading-relaxed">
                <div className="flex items-center gap-2 text-primary mb-4">
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-white">whoami</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-foreground">
                  Engineering with a <span className="gradient-text">UI/UX Mindset</span>
                </h2>
                
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a Full-stack Software Engineer based in Telangana, India. My passion lies in bridging the gap between design and functionality, creating web experiences that are not only powerful but also delightful to use.
                  </p>
                  <p>
                    Specializing in the React ecosystem, I build high-performance applications that scale. Whether it's architecting complex streaming platforms or fine-tuning database queries, I approach every challenge with technical precision and creative flair.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2 text-primary mb-3">
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-white">ls tags/</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Product_Focus", "Pixel_Perfect", "Scalable_Systems", "Modern_Stack"].map((chip) => (
                      <span key={chip} className="px-3 py-0.5 rounded border border-border bg-muted/30 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Console Cards for Skills (Redesigned as IDE Modules) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 glass-card rounded-xl border-white/5 hover:border-primary/50 transition-all duration-300 group relative flex flex-col overflow-hidden"
                >
                  {/* Top Activation Line (IDE Metaphor) */}
                  <div className="absolute top-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500 ease-in-out" />
                  
                  {/* Background Shift on Activation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-2.5 rounded-lg bg-white/5 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_15px_rgba(72,219,251,0.3)]">
                        <area.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <span className="text-[10px] font-mono text-muted-foreground/40 group-hover:text-primary/60 uppercase tracking-tighter transition-colors">
                        {area.command}
                      </span>
                    </div>

                    <h3 className="text-base font-bold mb-2.5 tracking-tight flex items-center gap-2 group-hover:text-foreground transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 group-hover:bg-primary transition-colors animate-pulse" />
                      {area.title}
                    </h3>
                    
                    <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors">
                      {area.description}
                    </p>

                    {/* Module Status Indicator */}
                    <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[9px] font-mono text-primary/50">module: active</span>
                      <Terminal className="w-3 h-3 text-primary/30" />
                    </div>
                  </div>
                  
                  {/* Subtle Corner Decoration */}
                  <div className="absolute bottom-0 right-0 p-1 pointer-events-none opacity-20 group-hover:opacity-100 transition-opacity">
                    <div className="w-1.5 h-1.5 border-r border-b border-primary/40" />
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
