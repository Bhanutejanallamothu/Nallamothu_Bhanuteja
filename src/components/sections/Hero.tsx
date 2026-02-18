
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="hero-glow top-1/4 -left-1/4" />
      <div className="hero-glow bottom-1/4 -right-1/4" style={{ background: "radial-gradient(circle, rgba(142, 68, 173, 0.15) 0%, rgba(72, 219, 251, 0.05) 100%)" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
          >
            <span className="text-sm font-medium text-primary">Full-stack Software Engineer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
          >
            Building visually refined,<br />
            <span className="gradient-text">high-performance apps.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            I'm <span className="text-foreground font-semibold">Nallamothu Bhanuteja</span>, 
            a developer specializing in building scalable web applications with 
            a focus on premium UI/UX and robust architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="rounded-full px-8 gap-2 group" asChild>
              <a href="#projects">
                View Projects 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 gap-2" asChild>
              <a href="#contact">
                Contact Me
              </a>
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full px-8 gap-2" asChild>
              <a href="/resume.pdf" download>
                <Download className="w-4 h-4" />
                Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex items-center justify-center space-x-8"
          >
            <a href="https://github.com/Bhanutejanallamothu" target="_blank" rel="noopener noreferrer" className="group">
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-all transform group-hover:scale-110" />
            </a>
            <a href="https://www.linkedin.com/in/bhanuteja-nallamothu-4b8677315/" target="_blank" rel="noopener noreferrer" className="group">
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-all transform group-hover:scale-110" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Subtle mouse spotlight or scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
