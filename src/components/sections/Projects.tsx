"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  {
    id: "kl-radio",
    title: "KL Radio",
    subtitle: "Digital Broadcasting Platform",
    description: "Full-stack live streaming web platform supporting 500+ concurrent users with real-time broadcasting and content management.",
    tech: ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "WebSockets"],
    live: "https://www.klradio.in/",
    github: "https://github.com/Bhanutejanallamothu",
    image: PlaceHolderImages.find(img => img.id === "kl-radio")?.imageUrl || "https://picsum.photos/seed/kl/800/600",
  },
  {
    id: "virtual-intern-pro",
    title: "Virtual Intern Pro",
    subtitle: "Internship Management System",
    description: "A comprehensive platform connecting students with virtual internships, featuring smart matching, student/company dashboards, and real-time messaging.",
    tech: ["React", "Next.js", "Firebase", "Tailwind CSS", "Zustand"],
    live: "https://studio-tngx.vercel.app/login",
    github: "https://github.com/Bhanutejanallamothu/Virtual_Intern_Pro",
    image: PlaceHolderImages.find(img => img.id === "vip")?.imageUrl || "https://picsum.photos/seed/vip/800/600",
  },
  {
    id: "hms",
    title: "Hospital Management",
    subtitle: "Digital Health Platform",
    description: "Healthcare management web application with patient, prescription, and appointment modules, real-time data synchronization.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    live: "https://hms-liard-six.vercel.app/",
    github: "https://github.com/Bhanutejanallamothu",
    image: PlaceHolderImages.find(img => img.id === "hms")?.imageUrl || "https://picsum.photos/seed/hospital/800/600",
  },
  {
    id: "ybs",
    title: "YBS Industries",
    subtitle: "Business Website",
    description: "SEO-optimized responsive business website with modern UI and high performance architecture.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    live: "https://main-1-ik9v.vercel.app",
    github: "https://github.com/Bhanutejanallamothu",
    image: PlaceHolderImages.find(img => img.id === "ybs")?.imageUrl || "https://picsum.photos/seed/ybs/800/600",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
          >
            Featured <span className="gradient-text">Work</span>
          </motion.h2>
          <p className="text-muted-foreground">A selection of my recent full-stack projects.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                  <div className="flex space-x-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <p className="text-sm font-medium text-primary mb-4">{project.subtitle}</p>
                <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-[10px] font-bold uppercase tracking-wider py-0 px-2 opacity-80 group-hover:opacity-100 transition-opacity">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}