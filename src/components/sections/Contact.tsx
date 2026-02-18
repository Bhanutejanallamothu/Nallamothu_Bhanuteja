
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
       {/* Background glow */}
       <div className="hero-glow bottom-0 left-1/2 -translate-x-1/2 opacity-30" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                Let's <span className="gradient-text">Build Something</span> Together
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-md leading-relaxed">
                Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative collaborations.
              </p>

              <div className="space-y-6 mb-12">
                <a 
                  href="mailto:nallamothubhanuteja110@gmail.com" 
                  className="flex items-center gap-4 group w-fit"
                >
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="text-sm">
                    <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Email</p>
                    <p className="text-base font-bold">nallamothubhanuteja110@gmail.com</p>
                  </div>
                </a>

                <div className="flex gap-4">
                  <a 
                    href="https://github.com/Bhanutejanallamothu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110"
                  >
                    <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/bhanuteja-nallamothu-4b8677315/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>

              <Button variant="outline" size="lg" className="rounded-full gap-2" asChild>
                <a href="/resume.pdf" download>
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 md:p-10 rounded-3xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Name</label>
                    <Input placeholder="John Doe" className="bg-background border-border rounded-xl h-12" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Email</label>
                    <Input type="email" placeholder="john@example.com" className="bg-background border-border rounded-xl h-12" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Message</label>
                  <Textarea placeholder="Hi, let's talk about..." className="bg-background border-border rounded-xl min-h-[150px] resize-none" required />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-xl h-14 gap-2 text-base font-bold group">
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>

          <div className="mt-24 pt-12 border-t border-border/50 text-center">
             <p className="text-muted-foreground text-sm font-medium">
                © {new Date().getFullYear()} Nallamothu Bhanuteja. Designed & Built with passion.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
