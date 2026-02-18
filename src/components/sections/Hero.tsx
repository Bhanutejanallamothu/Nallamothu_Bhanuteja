"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Globe, RotateCw, ChevronLeft, ChevronRight } from "lucide-react";
import InteractiveButton from "@/components/ui/interactive-button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  const [urlText, setUrlText] = useState("");
  const [typedLines, setTypedLines] = useState(["", "", ""]);
  const [currentLine, setCurrentLine] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const fullUrl = "http://localhost:8080/profile";
  const fullLines = ["Engineering", "Clean Code &", "Experiences."];
  const portraitImg = PlaceHolderImages.find(img => img.id === "portrait")?.imageUrl || "https://picsum.photos/seed/bhanuteja/800/1000";
  
  // URL typing effect
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

  // Headline typing/deleting loop effect
  useEffect(() => {
    const typingSpeed = 70;
    const deleteSpeed = 130;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing mode
        if (typedLines[currentLine].length < fullLines[currentLine].length) {
          setTypedLines(prev => {
            const next = [...prev];
            next[currentLine] = fullLines[currentLine].substring(0, prev[currentLine].length + 1);
            return next;
          });
        } else if (currentLine < fullLines.length - 1) {
          setCurrentLine(prev => prev + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        // Deleting mode
        if (typedLines[currentLine].length > 0) {
          setTypedLines(prev => {
            const next = [...prev];
            next[currentLine] = prev[currentLine].substring(0, prev[currentLine].length - 1);
            return next;
          });
        } else if (currentLine > 0) {
          setCurrentLine(prev => prev - 1);
        } else {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? deleteSpeed : typedLines[currentLine].length === fullLines[currentLine].length ? pauseTime : typingSpeed);

    return () => clearTimeout(timer);
  }, [typedLines, currentLine, isDeleting]);

  const EditorCursor = () => (
    <span className="w-[3px] h-[0.9em] bg-primary inline-block ml-1 animate-pulse align-middle" />
  );

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="hero-glow top-1/4 -left-1/4" />
      <div className="hero-glow bottom-1/4 -right-1/4" style={{ background: "radial-gradient(circle, rgba(142, 68, 173, 0.15) 0%, rgba(72, 219, 251, 0.05) 100%)" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
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
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] font-mono">
                <div className="min-h-[1.1em]">
                  {typedLines[0]}
                  {currentLine === 0 && !isDeleting && typedLines[0].length < fullLines[0].length && <EditorCursor />}
                </div>
                <div className="min-h-[1.1em]">
                  <span className="gradient-text">
                    {typedLines[1].includes('&') ? typedLines[1].split('&')[0] : typedLines[1]}
                  </span>
                  {typedLines[1].includes('&') && ' &'}
                  {currentLine === 1 && !isDeleting && typedLines[1].length < fullLines[1].length && <EditorCursor />}
                </div>
                <div className="min-h-[1.1em]">
                  {typedLines[2]}
                  {(currentLine === 2 || (!isDeleting && typedLines[2] === fullLines[2])) && <EditorCursor />}
                </div>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
                Full Stack Software Engineer & UI/UX Designer specialized in building high-performance, architecturally sound web applications.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <InteractiveButton 
                  variant="primary" 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </InteractiveButton>
                
                <InteractiveButton 
                  variant="outline" 
                  onClick={() => window.open('https://ik.imagekit.io/bhanuteja110/Nallamothu_Bhanuteja.pdf', '_blank')}
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </InteractiveButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative group flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[480px]">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                
                <div className="relative glass-card rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                  <div className="bg-[#1e1e1e]/90 border-b border-white/5 px-4 py-3 flex items-center gap-3">
                    <div className="flex gap-1.5 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    </div>
                    
                    <div className="hidden sm:flex gap-2 text-muted-foreground/40 shrink-0">
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                    
                    <div className="flex-1 bg-black/40 border border-white/5 rounded-md px-3 py-1 flex items-center gap-2 overflow-hidden">
                      <Globe className="w-3 h-3 text-muted-foreground/40 shrink-0" />
                      <div className="text-[11px] font-mono text-muted-foreground/80 truncate">
                        {urlText}
                        <span className="w-1 h-3.5 bg-primary inline-block ml-0.5 animate-pulse align-middle" />
                      </div>
                    </div>
                    
                    <RotateCw className="w-3.5 h-3.5 text-muted-foreground/40 shrink-0" />
                  </div>

                  <div className="relative aspect-[3/4] bg-[#0d1117]">
                    <Image 
                      src={portraitImg} 
                      alt="Bhanuteja Portrait"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/60 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-4 left-4 right-4 p-3 glass-card rounded-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 border-white/10">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-widest text-primary mb-0.5">Status</p>
                          <p className="text-xs font-mono text-white">server_running: true</p>
                        </div>
                        <div className="flex items-center gap-1.5 text-[9px] font-mono text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                          8080
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

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
