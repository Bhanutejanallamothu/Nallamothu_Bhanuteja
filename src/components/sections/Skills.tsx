
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Terminal as TerminalIcon, 
  Database as DatabaseIcon, 
  Cloud, 
  Settings, 
  CheckCircle2, 
  Zap,
  Layout
} from "lucide-react";

const AWSIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12.213 13.924c-1.465 0-2.482-.162-3.05-.487-.56-.316-.84-.737-.84-1.264 0-.585.342-1.036 1.028-1.353.685-.317 1.631-.475 2.839-.475 1.152 0 2.217.152 3.195.457v.343c0 .878-.445 1.545-1.334 2.002-.9.457-1.844.677-2.838.677zm7.505 1.838c-.378-.475-.567-1.134-.567-1.977v-5.228c0-.73-.203-1.274-.608-1.635-.405-.36-1.032-.54-1.88-.54-1.297 0-2.344.43-3.14 1.292-.797.861-1.196 1.942-1.196 3.243v1.644c-1.134-.343-2.316-.514-3.545-.514-1.942 0-3.483.334-4.622 1.002C3.02 12.716 2.45 13.727 2.45 15.08c0 1.257.51 2.22 1.529 2.89 1.02.667 2.427 1 4.223 1 1.635 0 2.998-.272 4.09-.817 1.092-.545 1.638-1.23 1.638-2.056v-.21c.54.544 1.21.966 2.013 1.265.803.3 1.643.45 2.52.45 1.487 0 2.565-.4 3.234-1.2l-.438-.65zm-7.662 5.37c-3.141 1.91-7.051 2.914-10.748 2.651-.555-.034-.144-.82.355-.957 3.425-.943 6.643-2.618 9.213-5.064.38-.36.938.077.58.483a15.704 15.704 0 01-1.913 1.84 15.65 15.65 0 012.513 1.047zm8.43-1.603c-.22-.26-.547-.132-.676.1-.144.258-.046.544.153.792.176.22.424.382.697.356.32-.03.54-.316.48-.65-.052-.27-.267-.5-.654-.598z"/>
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M13.983 11.078h2.119c.102 0 .186-.083.186-.185V9.006a.186.186 0 00-.186-.186h-2.119c-.103 0-.186.084-.186.186v1.887c0 .102.083.185.186.185m-2.954-5.43h2.118c.103 0 .186-.083.186-.186V3.574a.186.186 0 00-.186-.185h-2.118c-.103 0-.186.083-.186.185v1.887c0 .103.083.186.186.186m0 2.715h2.118c.103 0 .186-.083.186-.186V6.29a.186.186 0 00-.186-.185h-2.118c-.103 0-.186.083-.186.185v1.887c0 .103.083.186.186.186m-2.954 2.715h2.119c.102 0 .185-.083.185-.185V9.006a.186.186 0 00-.185-.186H8.075c-.103 0-.186.084-.186.186v1.887c0 .102.083.185.186.185M6.037 11.078h2.119c.103 0 .186-.083.186-.185V9.006a.186.186 0 00-.186-.186H6.037c-.103 0-.186.084-.186.186v1.887c0 .102.083.185.186.185m2.954-2.715h2.119c.103 0 .186-.083.186-.186V6.29a.186.186 0 00-.186-.185H8.991c-.103 0-.186.083-.186.185v1.887c0 .103.083.186.186.186m0 2.715h2.119c.103 0 .186-.083.186-.185V9.006a.186.186 0 00-.186-.186H8.991c-.103 0-.186.084-.186.186v1.887c0 .102.083.185.186.185m-2.954 0h2.119c.103 0 .186-.083.186-.185V9.006a.186.186 0 00-.186-.186H6.037c-.103 0-.186.084-.186.186v1.887c0 .102.083.185.186.185m-2.954 0h2.119c.103 0 .186-.083.186-.185V9.006a.186.186 0 00-.186-.186h-2.12c-.103 0-.185.084-.185.186v1.887c0 .102.083.185.185.185m-2.954 0h2.119c.103 0 .186-.083.186-.185V9.006a.186.186 0 00-.186-.186h-2.12c-.103 0-.185.084-.185.186v1.887c0 .102.082.185.185.185M.053 14.202c.157 4.022 3.608 6.551 7.215 6.551 6.812 0 11.51-4.928 12.498-8.328 2.117-.138 3.725-1.577 4.234-2.82-.358.066-.73.098-1.109.098-1.54 0-2.817-.549-3.233-1.2-.14-.223-.258-.464-.356-.712a.673.673 0 00-.65-.465c-.264 0-.486.158-.612.353-.135.21-.264.409-.38.587-.135.204-.277.398-.423.579-.053.065-.107.128-.162.19-2.1 2.42-5.297 2.457-5.297 2.457H.94c-.633 0-.885.318-.887.319l-.001.013s-.125.794-.001 2.367"/>
  </svg>
);

const VercelIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M24 22.525H0l12-21.05 12 21.05z"/>
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.187 0L8.708 2.624l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.883.719-2.603 0-.515-.516-.659-1.258-.44-1.9L12.46 8.864c-.211.051-.43.078-.653.078-.445 0-.875-.171-1.203-.498-.336-.337-.507-.779-.498-1.235l-2.77-2.77L.452 10.929c-.603.604-.603 1.582 0 2.188l10.479 10.478c.604.604 1.582.604 2.187 0l10.428-10.428c.603-.603.603-1.582 0-2.187z"/>
  </svg>
);

const toolIcons: Record<string, React.ComponentType> = {
  "AWS": AWSIcon,
  "Docker": DockerIcon,
  "Vercel": VercelIcon,
  "Git/CI-CD": GitIcon,
};

const skillPanels = [
  {
    title: "App.tsx",
    category: "Frontend",
    icon: Layout,
    color: "text-blue-400",
    skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "Shadcn UI"],
    colSpan: "md:col-span-2",
  },
  {
    title: "api.service.ts",
    category: "Backend",
    icon: Code2,
    color: "text-yellow-400",
    skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "Java", "Python"],
    colSpan: "md:col-span-2",
  },
  {
    title: "schema.sql",
    category: "Databases",
    icon: DatabaseIcon,
    color: "text-purple-400",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "Redis", "Firebase"],
    colSpan: "md:col-span-2",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Technical <span className="gradient-text">Workspace</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg">My engineering toolkit organized by functional domains.</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* IDE Layout Container */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            
            {/* Main Editor Panes */}
            {skillPanels.map((panel, index) => (
              <motion.div
                key={panel.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${panel.colSpan} glass-card rounded-xl overflow-hidden border border-white/5 flex flex-col group hover:border-primary/30 transition-all duration-300`}
              >
                {/* Panel Header (Tab Style) */}
                <div className="bg-[#1e1e1e]/60 border-b border-white/5 px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1 mr-2">
                      <div className="w-2 h-2 rounded-full bg-red-500/30" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/30" />
                      <div className="w-2 h-2 rounded-full bg-green-500/30" />
                    </div>
                    <panel.icon className={`w-3.5 h-3.5 ${panel.color}`} />
                    <span className="text-[11px] font-mono text-muted-foreground tracking-wide">{panel.title}</span>
                  </div>
                  <Settings className="w-3 h-3 text-muted-foreground/30" />
                </div>

                {/* Panel Content */}
                <div className="p-6 bg-[#0d1117]/40 flex-1">
                  <div className="flex flex-wrap gap-2">
                    {panel.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-muted/50 border-white/5 hover:bg-primary/20 hover:text-primary transition-all cursor-default py-1 px-3 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Wide DevOps Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="md:col-span-4 glass-card rounded-xl overflow-hidden border border-white/5 flex flex-col hover:border-primary/30 transition-all"
            >
              <div className="bg-[#1e1e1e]/60 border-b border-white/5 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <div className="flex gap-1 mr-2">
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                  </div>
                  <Cloud className="w-3.5 h-3.5 text-sky-400" />
                  <span className="text-[11px] font-mono text-muted-foreground tracking-wide">deployment.yaml</span>
                </div>
              </div>
              
              <div className="p-8 bg-[#0d1117]/40">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {["AWS", "Docker", "Vercel", "Git/CI-CD"].map((tool) => {
                    const Icon = toolIcons[tool] || Zap;
                    return (
                      <div key={tool} className="flex flex-col items-center gap-3 group/tool">
                        <div className="w-12 h-12 rounded-xl bg-muted/30 flex items-center justify-center border border-white/5 group-hover/tool:border-primary/50 group-hover/tool:bg-primary/5 transition-all">
                           <div className="text-muted-foreground group-hover/tool:text-primary transition-colors">
                              <Icon />
                           </div>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{tool}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Terminal Status Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="md:col-span-2 glass-card rounded-xl overflow-hidden border border-white/5 flex flex-col bg-[#0d1117]/80"
            >
              <div className="bg-[#1e1e1e]/90 border-b border-white/5 px-4 py-2 flex items-center gap-2">
                <TerminalIcon className="w-3.5 h-3.5 text-green-400" />
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Output</span>
              </div>
              
              <div className="p-6 font-mono text-[11px] leading-relaxed space-y-2">
                <div className="flex items-center gap-2 text-green-400">
                  <span className="text-muted-foreground/50">$</span>
                  <span>npm run build --prod</span>
                </div>
                <div className="flex items-center gap-2 text-sky-400">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Next.js optimized bundle</span>
                </div>
                <div className="flex items-center gap-2 text-sky-400">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Docker image built</span>
                </div>
                <div className="flex items-center gap-2 text-sky-400">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>AWS infrastructure live</span>
                </div>
                <div className="flex items-center gap-2 text-green-400 mt-4">
                  <span className="animate-pulse">●</span>
                  <span>Deployment: SUCCESSFUL</span>
                  <span className="w-1 h-3 bg-white animate-pulse" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
