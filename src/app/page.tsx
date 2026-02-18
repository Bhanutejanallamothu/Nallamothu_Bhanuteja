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
import { motion } from "framer-motion";
import { Cloud, Database, Server, Cpu, Activity, Zap } from "lucide-react";

const BackgroundWorkspace = () => {
  return (
    <div className="ide-workspace-bg">
      <div className="ide-mesh-gradient" />
      <div className="ide-grid" />

      {/* 1. Scanner Layer (System Health Sweep) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="animate-scanner absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent blur-[1px]" />
      </div>

      {/* 2. IDE Code Layer (Blurred Scrolling Code) */}
      <div className="absolute inset-0 opacity-[0.05] blur-[3px] overflow-hidden pointer-events-none">
        <div className="animate-scroll-code font-mono text-[10px] space-y-4 p-12 whitespace-pre">
          <div className="text-primary">const app = express();</div>
          <div className="text-accent">app.use(cors());</div>
          <div className="text-white">app.get("/api/v1/health", (req, res) =&gt; &#123;</div>
          <div className="pl-4 text-green-400">return res.status(200).json(&#123; status: "active" &#125;);</div>
          <div className="text-white">&#125;);</div>
          <div className="h-12" />
          <div className="text-primary">export default function Dashboard() &#123;</div>
          <div className="pl-4 text-white">const [data, setData] = useState([]);</div>
          <div className="pl-4 text-accent">useEffect(() =&gt; &#123;</div>
          <div className="pl-8 text-white">fetchData().then(res =&gt; setData(res));</div>
          <div className="pl-4 text-accent">&#125;, []);</div>
          <div className="text-white">&#125;</div>
          {/* Repeating for seamless loop */}
          <div className="h-12" />
          <div className="text-primary">const app = express();</div>
          <div className="text-accent">app.use(cors());</div>
          <div className="text-white">app.get("/api/v1/health", (req, res) =&gt; &#123;</div>
          <div className="pl-4 text-green-400">return res.status(200).json(&#123; status: "active" &#125;);</div>
          <div className="text-white">&#125;);</div>
        </div>
      </div>

      {/* 3. Terminal Layer (Drifting Logs) */}
      <div className="absolute inset-0 pointer-events-none">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="animate-drift-logs absolute left-[10%] font-mono text-[9px] text-muted-foreground/30"
            style={{ 
              top: `${20 + i * 25}%`, 
              animationDelay: `${i * 5}s`,
              left: `${15 + i * 15}%` 
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-green-500/40">●</span>
              <span>&gt; npm run build --production</span>
            </div>
            <div className="text-green-500/20">✓ Compiled successfully in 1240ms</div>
            <div>&gt; docker push ghcr.io/bhanuteja/v1.2.0</div>
            <div className="flex items-center gap-1">
              <span className="animate-pulse">[INFO]</span>
              <span>Uploading layer: 45.2MB</span>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Architecture / Network Layer (Glowing SVG Lines + Packets) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.1]">
        <path
          id="path-1"
          d="M 100,200 Q 400,100 700,400 T 1200,300"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary animate-pulse-line"
        />
        <path
          id="path-2"
          d="M 200,800 Q 500,600 800,900 T 1400,700"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-accent animate-pulse-line"
          style={{ animationDelay: "-5s" }}
        />
        
        {/* Animated Data Packets */}
        <circle r="2" fill="currentColor" className="text-primary">
          <animateMotion dur="6s" repeatCount="indefinite">
            <mpath href="#path-1" />
          </animateMotion>
        </circle>
        <circle r="2" fill="currentColor" className="text-accent">
          <animateMotion dur="8s" repeatCount="indefinite" begin="2s">
            <mpath href="#path-2" />
          </animateMotion>
        </circle>
      </svg>

      {/* 5. Cloud / Infra Layer (Sharp Floating Icons + Status LEDs) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[12%] right-[18%] text-primary/20 flex flex-col items-center"
        >
          <div className="relative">
            <Cloud size={140} strokeWidth={1} />
            <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-green-500/40 animate-pulse" />
          </div>
          <span className="font-mono text-[8px] text-primary/40 mt-2 uppercase tracking-widest bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
            region: us-east-1
          </span>
          <span className="font-mono text-[6px] text-primary/20 mt-1 uppercase tracking-tighter">latency: 12ms</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[18%] left-[8%] text-accent/20 flex flex-col items-center"
        >
          <div className="relative">
            <Database size={110} strokeWidth={1} />
            <div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-green-500/40 animate-pulse" />
          </div>
          <span className="font-mono text-[8px] text-accent/40 mt-2 uppercase tracking-widest bg-accent/5 px-2 py-0.5 rounded border border-accent/10">
            db: cluster-prod
          </span>
          <span className="font-mono text-[6px] text-accent/20 mt-1 uppercase tracking-tighter">uptime: 99.9%</span>
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[55%] right-[12%] text-green-500/20 flex flex-col items-center"
        >
          <div className="relative">
            <Server size={90} strokeWidth={1} />
            <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-green-500/40 animate-pulse" />
          </div>
          <span className="font-mono text-[8px] text-green-500/40 mt-2 uppercase tracking-widest bg-green-500/5 px-2 py-0.5 rounded border border-green-500/10">
            node: edge-runtime
          </span>
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[35%] right-[28%] text-white/10 flex flex-col items-center"
        >
          <div className="relative">
            <Cpu size={70} strokeWidth={1} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/30 animate-pulse" />
          </div>
          <span className="font-mono text-[7px] text-white/30 mt-2 uppercase tracking-tighter">arch: arm64</span>
        </motion.div>
      </div>

      {/* Metadata Layer (Activity Monitor) */}
      <div className="absolute bottom-8 right-8 pointer-events-none opacity-20 hidden lg:block">
        <div className="flex items-center gap-4 font-mono text-[9px] text-muted-foreground uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <Activity size={12} className="text-primary animate-pulse" />
            <span>sys_load: 0.24</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={12} className="text-accent" />
            <span>network: active</span>
          </div>
        </div>
      </div>

      {/* Overlay vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-[#0b0f19] opacity-60" />
    </div>
  );
};

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