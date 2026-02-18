
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Terminal, Globe, RotateCw, ChevronLeft, ChevronRight } from "lucide-react";
import InteractiveButton from "@/components/ui/interactive-button";
import Image from "next/image";

export default function Hero() {
  const [urlText, setUrlText] = useState("");
  const fullUrl = "http://localhost:8080/profile";
  
  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < fullUrl.length) {
        currentText += fullUrl[currentIndex];
        setUrlText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="hero-glow top-1/4 -left-1/4" />
      <div className="hero-glow bottom-1/4 -right-1/4" style={{ background: "radial-gradient(circle, rgba(142, 68, 173, 0.15) 0%, rgba(72, 219, 251, 0.05) 100%)" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6 inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
              >
                <span className="text-sm font-medium text-primary flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> system.init()
                </span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                Engineering <br />
                <span className="gradient-text">Clean Code</span> & <br />
                Experiences.
              </h1>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
                Full Stack Software Engineer & UI/UX Designer specialized in building high-performance, architecturally sound web applications.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6">
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
              </div>
            </motion.div>

            {/* Right Column: Localhost Browser Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative group"
            >
              {/* Outer Shadow Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative glass-card rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                {/* Browser Header */}
                <div className="bg-[#1e1e1e]/90 border-b border-white/5 px-6 py-4 flex items-center gap-4">
                  {/* Window Controls */}
                  <div className="flex gap-2 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  
                  {/* Navigation Icons */}
                  <div className="hidden sm:flex gap-4 text-muted-foreground/40 shrink-0">
                    <ChevronLeft className="w-4 h-4" />
                    <ChevronRight className="w-4 h-4" />
                  </div>
                  
                  {/* URL Bar */}
                  <div className="flex-1 bg-black/40 border border-white/5 rounded-full px-4 py-1.5 flex items-center gap-2 overflow-hidden">
                    <Globe className="w-3.5 h-3.5 text-muted-foreground/40 shrink-0" />
                    <div className="text-[13px] font-mono text-muted-foreground/80 truncate">
                      {urlText}
                      <span className="w-1.5 h-4 bg-primary inline-block ml-0.5 animate-pulse align-middle" />
                    </div>
                  </div>
                  
                  <RotateCw className="w-4 h-4 text-muted-foreground/40 shrink-0" />
                </div>

                {/* Browser Body: Image Content */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#0d1117]">
                  <Image 
                    src="https://picsum.photos/seed/bhanuteja/800/1000" 
                    alt="Bhanuteja Portrait"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                    data-ai-hint="professional portrait"
                  />
                  {/* Gradient Overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-40" />
                  
                  {/* Interactive Label (Hidden until hover) */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Status</p>
                        <p className="text-sm font-mono text-white">server_running: true</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        8080
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(72,219,251,0.8)]"
          />
        </div>
      </motion.div>
    </section>
  );
}
