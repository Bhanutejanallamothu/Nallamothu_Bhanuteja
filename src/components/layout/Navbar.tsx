"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`flex items-center justify-between mx-auto max-w-6xl px-6 py-3 rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-background/80 backdrop-blur-lg border-border shadow-lg"
              : "bg-transparent border-transparent"
          }`}
        >
          <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
            <span className="gradient-text">B</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center space-x-4">
              <a href="https://github.com/Bhanutejanallamothu" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/bhanuteja-nallamothu-4b8677315/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 p-6 glass-card rounded-2xl md:hidden z-50"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium py-2 border-b border-border/50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4">
                <div className="flex space-x-4">
                   <a href="https://github.com/Bhanutejanallamothu" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/bhanuteja-nallamothu-4b8677315/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <Button size="sm" variant="outline" asChild>
                  <a href="mailto:nallamothubhanuteja110@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Me
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
