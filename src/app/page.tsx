"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import UXShowcase from "@/components/sections/UXShowcase";
import Contact from "@/components/sections/Contact";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <UXShowcase />
      <Contact />
      <Toaster />
      
      {/* Premium Abstract IDE Workspace Background */}
      <div className="ide-workspace-bg">
        {/* Subtle mesh gradients for depth */}
        <div className="ide-mesh-gradient" />
        
        {/* Editor-style grid system */}
        <div className="ide-grid" />
        
        {/* Faint panel divisions mirroring an IDE layout */}
        <div className="ide-panels" />
        
        {/* Decorative code-line abstract pattern */}
        <div className="code-lines-pattern" />
        
        {/* Floating blurred accent shapes */}
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      </div>
    </main>
  );
}