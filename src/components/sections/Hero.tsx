"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";
import InteractiveButton from "@/components/ui/interactive-button";

export default function Hero() {
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="hero-glow top-1/4 -left-1/4" />
      <div className="hero-glow bottom-1/4 -right-1/4" style={{ background: "radial-gradient(circle, rgba(142, 68, 173, 0.15) 0%, rgba(72, 219, 251, 0.05) 100%)" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
          >
            <span className="text-sm font-medium text-primary flex items-center gap-2">
              <Terminal className="w-4 h-4" /> system.init()
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
          >
            Engineering <span className="gradient-text">Clean Code</span> & <br />
            Seamless Experiences.
          </motion.h1>

          {/* IDE Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl max-w-3xl mx-auto w-full mb-12"
          >
            {/* Window Header */}
            <div className="bg-[#1e1e1e]/80 border-b border-white/5 px-4 py-3 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-xs text-muted-foreground font-mono">portfolio.ts — Bhanuteja</div>
              <div className="w-12" /> {/* Spacer */}
            </div>

            {/* Editor Content */}
            <div className="p-6 md:p-10 bg-[#0d1117]/60 font-mono text-lg md:text-2xl text-left overflow-x-auto">
              <div className="flex gap-6">
                {/* Line Numbers */}
                <div className="hidden sm:flex flex-col text-muted-foreground/30 text-right select-none pr-4 border-r border-white/5">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
                
                {/* Code Area */}
                <div className="space-y-2 whitespace-nowrap">
                  <div>
                    <span className="text-sky-400">Hello</span>, I'm
                  </div>
                  <div className="flex items-center">
                    <span className={`w-0.5 h-8 bg-primary ml-1 transition-opacity duration-100 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} />
                  </div>
                  <div>
                    <span className="text-purple-400">const</span> <span className="text-yellow-200">identity</span> = <span className="text-orange-300">"Developer"</span>;
                  </div>
                  <div className="text-muted-foreground/60 italic text-base md:text-xl">
                    // Full Stack Software Engineer & UI/UX Designer
                  </div>
                  <div>
                    <span className="text-purple-400">return</span> <span className="text-green-400">impact</span>;
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <InteractiveButton 
              variant="primary" 
              onClick={() => document.getElementById('projects')?.scrollIntoView()}
            >
              Explore Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </InteractiveButton>
            
            <InteractiveButton 
              variant="outline" 
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="w-4 h-4" />
              Download Resume
            </InteractiveButton>
          </motion.div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
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
