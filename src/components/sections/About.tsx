
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

            {/* Console Cards for Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 glass-card rounded-xl hover:border-primary/50 transition-all group relative border-white/5"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <area.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-[9px] font-mono text-muted-foreground/50 uppercase tracking-tighter">
                      {area.command}
                    </span>
                  </div>
                  <h3 className="text-base font-bold mb-2 tracking-tight flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {area.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Terminal className="w-3 h-3 text-primary/30" />
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
