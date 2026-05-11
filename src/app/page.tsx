"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import UXShowcase from "@/components/sections/UXShowcase";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import BackgroundWorkspace from "@/components/layout/BackgroundWorkspace";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.nallamothubhanuteja.dev/#person",
        "name": "Nallamothu Bhanuteja",
        "alternateName": "Bhanuteja",
        "jobTitle": ["Full Stack Developer", "Cloud Engineer", "UI/UX Developer"],
        "url": "https://www.nallamothubhanuteja.dev/",
        "email": "mailto:nallamothubhanuteja110@gmail.com",
        "sameAs": [
          "https://www.linkedin.com/in/bhanuteja-nallamothu-4b8677315/",
          "https://github.com/Bhanutejanallamothu"
        ],
        "knowsAbout": [
          "Full Stack Development",
          "React",
          "Next.js",
          "Node.js",
          "Express.js",
          "Spring Boot",
          "REST APIs",
          "Cloud Engineering",
          "AWS",
          "Docker",
          "UI/UX Design",
          "Frontend Engineering",
          "Database Design",
          "PostgreSQL",
          "MySQL",
          "MongoDB"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Full Stack Developer",
          "skills": "React, Next.js, TypeScript, Node.js, Express.js, Spring Boot, AWS, Docker, PostgreSQL, MySQL, MongoDB, UI/UX Design"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.nallamothubhanuteja.dev/#website",
        "url": "https://www.nallamothubhanuteja.dev/",
        "name": "Nallamothu Bhanuteja Portfolio",
        "description": "Full stack developer, cloud engineer, and UI/UX developer portfolio featuring projects, skills, experience, and certifications.",
        "publisher": {
          "@id": "https://www.nallamothubhanuteja.dev/#person"
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": "ProfilePage",
        "@id": "https://www.nallamothubhanuteja.dev/#profile-page",
        "url": "https://www.nallamothubhanuteja.dev/",
        "name": "Nallamothu Bhanuteja | Full Stack Developer & Cloud Engineer",
        "description": "Portfolio of Nallamothu Bhanuteja showcasing full-stack web applications, cloud engineering, UI/UX design, certifications, and engineering experience.",
        "isPartOf": {
          "@id": "https://www.nallamothubhanuteja.dev/#website"
        },
        "mainEntity": {
          "@id": "https://www.nallamothubhanuteja.dev/#person"
        },
        "about": {
          "@id": "https://www.nallamothubhanuteja.dev/#person"
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.nallamothubhanuteja.dev/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.nallamothubhanuteja.dev/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projects",
            "item": "https://www.nallamothubhanuteja.dev/#projects"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Contact",
            "item": "https://www.nallamothubhanuteja.dev/#contact"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.nallamothubhanuteja.dev/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who is Nallamothu Bhanuteja?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nallamothu Bhanuteja is a full stack developer, cloud engineer, and UI/UX developer focused on building high-performance web applications with React, Next.js, Node.js, AWS, and modern frontend design systems."
            }
          },
          {
            "@type": "Question",
            "name": "What technologies does Bhanuteja work with?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bhanuteja works with React, Next.js, TypeScript, Node.js, Express.js, Spring Boot, PostgreSQL, MySQL, MongoDB, AWS, Docker, Vercel, Render, Tailwind CSS, and Framer Motion."
            }
          },
          {
            "@type": "Question",
            "name": "What projects are featured in this portfolio?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The portfolio features KL Radio, Virtual Intern Pro, a Hospital Management System, and YBS Industries Website, demonstrating full-stack engineering, cloud deployment, database design, and UI/UX implementation."
            }
          },
          {
            "@type": "Question",
            "name": "How can I contact Bhanuteja?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can contact Bhanuteja by email at nallamothubhanuteja110@gmail.com or through LinkedIn at linkedin.com/in/bhanuteja-nallamothu-4b8677315."
            }
          }
        ]
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
      <Certifications />
      <Contact />
      <Toaster />
      
      <BackgroundWorkspace />
    </main>
  );
}