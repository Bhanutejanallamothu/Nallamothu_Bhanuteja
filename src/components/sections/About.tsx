
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Layout, Database, Cloud } from "lucide-react";

const focusAreas = [
  {
    icon: Layout,
    title: "Frontend Engineering",
    description: "Expertise in React.js and Next.js, building interactive, responsive interfaces with a keen eye for design.",
  },
  {
    icon: Code2,
    title: "Backend Development",
    description: "Building scalable services and robust REST APIs using Node.js, Express, and Spring Boot.",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Architecting efficient data models with relational databases like MySQL and PostgreSQL.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Deployment and management across AWS, Docker, Vercel, and Render with a performance-first mindset.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
                Engineering with a <span className="gradient-text">UI/UX Mindset</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I'm a Full-stack Software Engineer based in Telangana, India. My passion lies in bridging the gap between design and functionality, creating web experiences that are not only powerful but also delightful to use.
                </p>
                <p>
                  Specializing in the React ecosystem, I build high-performance applications that scale. Whether it's architecting complex streaming platforms or fine-tuning database queries, I approach every challenge with technical precision and creative flair.
                </p>
                <div className="pt-4 flex flex-wrap gap-3">
                   {["Product Focus", "Pixel Perfect", "Scalable Systems", "Modern Stack"].map((chip) => (
                     <span key={chip} className="px-4 py-1 rounded-full border border-border bg-muted/50 text-sm font-medium">
                       {chip}
                     </span>
                   ))}
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 glass-card rounded-2xl hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <area.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 tracking-tight">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
