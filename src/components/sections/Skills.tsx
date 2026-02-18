
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    name: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript (ES6+)"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "Java", "Python"],
  },
  {
    name: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Vercel", "Render", "Git/GitHub", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
          >
            Technical <span className="gradient-text">Toolkit</span>
          </motion.h2>
          <p className="text-muted-foreground">My specialized skills across the modern software stack.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="p-8 glass-card rounded-2xl"
            >
              <h3 className="text-lg font-bold mb-6 tracking-wide uppercase text-primary/80">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge variant="secondary" className="px-3 py-1 rounded-md text-sm bg-background border-border hover:border-primary/50 transition-colors">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
