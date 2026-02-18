"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Send, Download, Terminal, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [activeField, setActiveField] = useState<"name" | "email" | "message" | "submit">("name");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Typewriter states for heading
  const [typedHeader, setTypedHeader] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullHeader = "Let's Connect";

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    let charIdx = isDeleting ? typedHeader.length : 0;
    let timeout: NodeJS.Timeout;

    const tick = () => {
      const typingSpeed = 70;
      const deleteSpeed = 130;

      if (!isDeleting) {
        if (charIdx < fullHeader.length) {
          setTypedHeader(fullHeader.substring(0, charIdx + 1));
          charIdx++;
          timeout = setTimeout(tick, typingSpeed);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIdx > 0) {
          setTypedHeader(fullHeader.substring(0, charIdx - 1));
          charIdx--;
          timeout = setTimeout(tick, deleteSpeed);
        } else {
          setIsDeleting(false);
          timeout = setTimeout(tick, 500);
        }
      }
    };

    timeout = setTimeout(tick, 800);
    return () => clearTimeout(timeout);
  }, [isDeleting, typedHeader, fullHeader]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleKeyDown = (e: React.KeyboardEvent, current: string) => {
    if (e.key === "Enter" && !e.shiftKey) {
      if (current === "name") {
        e.preventDefault();
        emailInputRef.current?.focus();
      } else if (current === "email") {
        e.preventDefault();
        messageInputRef.current?.focus();
      }
    }
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const { name, email, message } = formData;
    
    if (!name || !email || !message) {
      return;
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    setIsSubmitted(true);
    setTimeout(() => {
      window.location.href = `mailto:nallamothubhanuteja110@gmail.com?subject=${subject}&body=${body}`;
      setIsSubmitted(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
       <div className="hero-glow bottom-0 left-1/2 -translate-x-1/2 opacity-30" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight min-h-[1.2em] font-mono">
                {typedHeader.split("Connect")[0]}
                {typedHeader.includes("Connect") && <span className="gradient-text">Connect</span>}
                <span className="w-[3px] h-[0.9em] bg-primary inline-block ml-1 animate-pulse align-middle" />
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
                <a href="https://ik.imagekit.io/bhanuteja110/Nallamothu_Bhanuteja.pdf" target="_blank" rel="noopener noreferrer">
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
              className="relative"
            >
              <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col h-[500px]">
                <div className="bg-[#1e1e1e]/80 border-b border-white/5 px-4 py-2 flex items-center justify-between shrink-0">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">bash — contact.sh</div>
                  <Terminal className="w-3 h-3 text-muted-foreground/30" />
                </div>

                <div 
                  className="p-8 font-mono text-sm md:text-base flex-1 overflow-y-auto custom-scrollbar cursor-text"
                  onClick={() => {
                    if (activeField === "name") nameInputRef.current?.focus();
                  }}
                >
                  <div className="space-y-6">
                    <div 
                      className={cn("group transition-opacity duration-300", activeField !== "name" && !formData.name ? "opacity-40" : "opacity-100")}
                      onClick={(e) => { e.stopPropagation(); nameInputRef.current?.focus(); }}
                    >
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white">name</span>
                      </div>
                      <div className="flex items-center gap-2 pl-6">
                        <span className="text-muted-foreground/50">$</span>
                        <input
                          ref={nameInputRef}
                          name="name"
                          type="text"
                          value={formData.name}
                          onFocus={() => setActiveField("name")}
                          onChange={handleInputChange}
                          onKeyDown={(e) => handleKeyDown(e, "name")}
                          placeholder="your name..."
                          className="bg-transparent border-none outline-none text-foreground w-full placeholder:text-muted-foreground/20"
                          autoComplete="off"
                        />
                      </div>
                    </div>

                    <div 
                      className={cn("group transition-opacity duration-300", activeField !== "email" && !formData.email ? "opacity-40" : "opacity-100")}
                      onClick={(e) => { e.stopPropagation(); emailInputRef.current?.focus(); }}
                    >
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white">email</span>
                      </div>
                      <div className="flex items-center gap-2 pl-6">
                        <span className="text-muted-foreground/50">$</span>
                        <input
                          ref={emailInputRef}
                          name="email"
                          type="email"
                          value={formData.email}
                          onFocus={() => setActiveField("email")}
                          onChange={handleInputChange}
                          onKeyDown={(e) => handleKeyDown(e, "email")}
                          placeholder="your@email.com"
                          className="bg-transparent border-none outline-none text-foreground w-full placeholder:text-muted-foreground/20"
                          autoComplete="off"
                        />
                      </div>
                    </div>

                    <div 
                      className={cn("group transition-opacity duration-300", activeField !== "message" && !formData.message ? "opacity-40" : "opacity-100")}
                      onClick={(e) => { e.stopPropagation(); messageInputRef.current?.focus(); }}
                    >
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white">message</span>
                      </div>
                      <div className="flex items-start gap-2 pl-6">
                        <span className="text-muted-foreground/50 mt-1">$</span>
                        <textarea
                          ref={messageInputRef}
                          name="message"
                          value={formData.message}
                          onFocus={() => setActiveField("message")}
                          onChange={handleInputChange}
                          onKeyDown={(e) => handleKeyDown(e, "message")}
                          placeholder="type your message here..."
                          className="bg-transparent border-none outline-none text-foreground w-full resize-none min-h-[100px] placeholder:text-muted-foreground/20"
                          autoComplete="off"
                        />
                      </div>
                    </div>

                    <AnimatePresence>
                      {(formData.name && formData.email && formData.message) && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="pt-4 border-t border-white/5"
                        >
                          <div className="flex items-center gap-2 text-primary mb-4">
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-white">send</span>
                          </div>
                          <div className="pl-6">
                            <button
                              onClick={(e) => { e.stopPropagation(); handleSubmit(); }}
                              className="group flex items-center gap-2 px-4 py-2 rounded bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-bold uppercase tracking-widest text-xs"
                            >
                              <span className="text-muted-foreground/50 group-hover:text-primary-foreground/50">$</span>
                              run transmit.sh
                              <Send className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <AnimatePresence>
                      {isSubmitted && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2 text-green-400 pl-6 mt-4"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>✔ Message transmitted successfully.</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
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
