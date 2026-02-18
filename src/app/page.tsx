"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import UXShowcase from "@/components/sections/UXShowcase";
import Contact from "@/components/sections/Contact";
import BackgroundWorkspace from "@/components/layout/BackgroundWorkspace";
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
      
      <BackgroundWorkspace />
    </main>
  );
}