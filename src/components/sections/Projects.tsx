
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  ExternalLink, 
  Github, 
  Layout, 
  Code2, 
  Database as DbIcon, 
  Cloud, 
  ArrowDown, 
  Zap 
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "kl-radio",
    title: "KL Radio",
    subtitle: "Digital Broadcasting Platform",
    description: "Full-stack live streaming web platform supporting 500+ concurrent users.",
    live: "https://www.klradio.in/",
    github: "https://github.com/Bhanutejanallamothu/Klradio",
    image: PlaceHolderImages.find(img => img.id === "kl-radio")?.imageUrl || "https://picsum.photos/seed/kl/800/600",
    stack: {
      frontend: ["React", "Next.js", "Tailwind"],
      backend: ["Node.js", "Express", "WebSockets"],
      database: ["PostgreSQL"],
      cloud: ["Vercel", "Render"]
    }
  },
  {
    id: "virtual-intern-pro",
    title: "Virtual Intern Pro",
    subtitle: "Management System",
    description: "A comprehensive platform connecting students with virtual internships.",
    live: "https://studio-tngx.vercel.app/login",
    github: "https://github.com/Bhanutejanallamothu/Virtual_Intern_Pro",
    image: PlaceHolderImages.find(img => img.id === "vip")?.imageUrl || "https://picsum.photos/seed/vip/800/600",
    stack: {
      frontend: ["Next.js", "Tailwind", "Zustand"],
      backend: ["Firebase Auth", "Serverless"],
      database: ["Firestore"],
      cloud: ["Vercel", "Firebase"]
    }
  },
  {
    id: "hms",
    title: "Hospital Management",
    subtitle: "Digital Health Platform",
    description: "Healthcare management with real-time data synchronization.",
    live: "https://hms-liard-six.vercel.app/",
    github: "https://github.com/Bhanutejanallamothu/health",
    image: PlaceHolderImages.find(img => img.id === "hms")?.imageUrl || "https://picsum.photos/seed/hospital/800/600",
    stack: {
      frontend: ["Next.js", "React", "TypeScript"],
      backend: ["Node.js", "REST API"],
      database: ["PostgreSQL"],
      cloud: ["Vercel"]
    }
  },
  {
    id: "ybs",
    title: "YBS Industries",
    subtitle: "Business Website",
    description: "SEO-optimized responsive business website with modern UI.",
    live: "https://main-1-ik9v.vercel.app",
    github: "https://github.com/Bhanutejanallamothu",
    image: PlaceHolderImages.find(img => img.id === "ybs")?.imageUrl || "https://ik.imagekit.io/bhanuteja110/unnamed.jpg?updatedAt=1762627770947",
    stack: {
      frontend: ["Next.js", "Tailwind", "Framer"],
      backend: ["Static Gen"],
      database: ["Contentful"],
      cloud: ["Vercel"]
    }
  },
];

const StackLayer = ({ 
  icon: Icon, 
  label, 
  tech, 
  delay, 
  isHovered 
}: { 
  icon: any, 
  label: string, 
  tech: string[], 
  delay: number,
  isHovered: boolean 
}) => (
  <motion.div
    initial={{ opacity: 0.6, y: 0 }}
    animate={{ 
      opacity: isHovered ? 1 : 0.6,
      scale: isHovered ? 1.02 : 1,
      borderColor: isHovered ? "rgba(72, 219, 251, 0.4)" : "rgba(255, 255, 255, 0.05)"
    }}
    transition={{ delay: isHovered ? delay : 0, duration: 0.3 }}
    className={cn(
      "relative p-3 rounded-xl border bg-background/40 backdrop-blur-sm transition-all duration-300",
      isHovered && "shadow-[0_0_20px_rgba(72,219,251,0.15)] bg-primary/5"
    )}
  >
    <div className="flex items-center gap-3">
      <div className={cn(
        "p-1.5 rounded-lg bg-white/5 transition-colors duration-300",
        isHovered && "bg-primary/20 text-primary"
      )}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1">
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
          {label}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span key={t} className="text-[11px] font-mono text-foreground/80">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Zap className="w-3 h-3" /> System Architecture
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Full-Stack <span className="gradient-text">Architecture</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Visualizing complex applications as layered tech stacks, from interactive interfaces to scalable infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 glass-card rounded-[2rem] border-white/5 hover:border-primary/20 transition-all duration-500 overflow-hidden">
                {/* Visual Side */}
                <div className="flex flex-col">
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-white/5">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight mb-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 transition-colors text-muted-foreground hover:text-primary">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 transition-colors text-muted-foreground hover:text-primary">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Architecture Side */}
                <div className="relative flex flex-col gap-3">
                  {/* Connection Line */}
                  <div className="absolute left-[27px] top-6 bottom-6 w-px border-l border-dashed border-white/10 z-0" />
                  
                  <StackLayer 
                    icon={Layout} 
                    label="Frontend" 
                    tech={project.stack.frontend} 
                    delay={0.1}
                    isHovered={hoveredProject === project.id}
                  />
                  <div className="flex justify-center -my-2 z-10">
                    <ArrowDown className={cn(
                      "w-3 h-3 text-muted-foreground/30 transition-colors duration-500",
                      hoveredProject === project.id && "text-primary animate-pulse"
                    )} />
                  </div>
                  <StackLayer 
                    icon={Code2} 
                    label="Backend" 
                    tech={project.stack.backend} 
                    delay={0.2}
                    isHovered={hoveredProject === project.id}
                  />
                  <div className="flex justify-center -my-2 z-10">
                    <ArrowDown className={cn(
                      "w-3 h-3 text-muted-foreground/30 transition-colors duration-500",
                      hoveredProject === project.id && "text-primary animate-pulse"
                    )} />
                  </div>
                  <StackLayer 
                    icon={DbIcon} 
                    label="Database" 
                    tech={project.stack.database} 
                    delay={0.3}
                    isHovered={hoveredProject === project.id}
                  />
                  <div className="flex justify-center -my-2 z-10">
                    <ArrowDown className={cn(
                      "w-3 h-3 text-muted-foreground/30 transition-colors duration-500",
                      hoveredProject === project.id && "text-primary animate-pulse"
                    )} />
                  </div>
                  <StackLayer 
                    icon={Cloud} 
                    label="Infrastructure" 
                    tech={project.stack.cloud} 
                    delay={0.4}
                    isHovered={hoveredProject === project.id}
                  />

                  {/* Dynamic Request Flow Indicator */}
                  <AnimatePresence>
                    {hoveredProject === project.id && (
                      <motion.div
                        initial={{ top: "0%" }}
                        animate={{ top: "100%" }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute left-[27px] w-1.5 h-1.5 bg-primary rounded-full -translate-x-1/2 shadow-[0_0_8px_rgba(72,219,251,0.8)] z-20"
                      />
                    )}
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Corner Badge (IDE Style) */}
              <div className="absolute -top-3 -right-3 px-3 py-1 rounded bg-background border border-white/10 text-[10px] font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity z-30">
                deploy.status: stable
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
