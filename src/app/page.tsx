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
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": "Nallamothu Bhanuteja",
        "jobTitle": ["Full Stack Developer", "Cloud Engineer", "UI Developer"],
        "url": "https://www.nallamothubhanuteja.dev/"
      },
      {
        "@type": "WebPage",
        "name": "Bhanuteja | Full Stack Developer & Cloud Engineer",
        "description": "Personal portfolio of Nallamothu Bhanuteja, a Full Stack Developer, Cloud Engineer, and UI Developer."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [{
          "@type": "Question",
          "name": "What does Bhanuteja do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bhanuteja is a Full Stack Developer, Cloud Engineer, and UI Developer specialized in building high-performance web applications with a focus on refined UI/UX. He engineers scalable backend solutions and designs intuitive frontend interfaces."
          }
        }]
      }
    ]
  };

  return (
    <main className="min-h-screen relative selection:bg-primary/30 selection:text-primary-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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