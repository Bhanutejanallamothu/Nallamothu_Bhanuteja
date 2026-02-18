
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Building2, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Technical Lead",
    company: "KL Radio",
    period: "Aug 2024 – Present",
    highlights: [
      "Led 15-member engineering and production team",
      "Architected and deployed full-stack streaming platform",
      "Delivered 50+ live broadcasts with 99% reliability",
      "Managed platform for 500+ concurrent listeners",
      "Streamlined production workflow by 25%",
    ],
  },
  {
    role: "Technology Intern",
    company: "Swecha",
    period: "Jun 2025 – Jul 2025",
    highlights: [
      "Improved Telugu NLP model accuracy by 10%",
      "Increased frontend performance by 18% through code splitting and optimization",
      "Collaborated on large-scale open source Telugu dataset preparation",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
          >
            Professional <span className="gradient-text">Journey</span>
          </motion.h2>
          <p className="text-muted-foreground">Career highlights and engineering impact.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 relative hover:border-primary/30 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                  <div className="flex items-center text-muted-foreground gap-4 text-sm">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <ChevronRight className="w-4 h-4 mt-1 text-primary shrink-0" />
                    <span className="text-base leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
