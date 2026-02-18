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
import { Cloud, Database, Server, Cpu } from "lucide-react";

const BackgroundWorkspace = () => {
  return (
    <div className="ide-workspace-bg">
      <div className="ide-mesh-gradient" />
      <div className="ide-grid" />

      {/* 1. IDE Code Layer (Blurred Scrolling Code) */}
      <div className="absolute inset-0 opacity-[0.06] blur-[2px] overflow-hidden pointer-events-none">
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

      {/* 2. Terminal Layer (Drifting Logs) */}
      <div className="absolute inset-0 pointer-events-none">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="animate-drift-logs absolute left-[10%] font-mono text-[9px] text-muted-foreground/40"
            style={{ 
              top: `${20 + i * 25}%`, 
              animationDelay: `${i * 5}s`,
              left: `${15 + i * 15}%` 
            }}
          >
            <div>&gt; npm run build --production</div>
            <div className="text-green-500/30">✓ Compiled successfully in 1240ms</div>
            <div>&gt; docker push ghcr.io/bhanuteja/v1.2.0</div>
            <div>[INFO] Uploading layer: 45.2MB</div>
          </div>
        ))}
      </div>

      {/* 3. Architecture / Network Layer (Glowing SVG Lines) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.08]">
        <path
          d="M 100,200 Q 400,100 700,400 T 1200,300"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary animate-pulse-line"
        />
        <path
          d="M 200,800 Q 500,600 800,900 T 1400,700"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-accent animate-pulse-line"
          style={{ animationDelay: "-5s" }}
        />
      </svg>

      {/* 4. Cloud / Infra Layer (Floating Icons) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] right-[20%] text-primary/10"
        >
          <Cloud size={120} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[10%] text-accent/10"
        >
          <Database size={100} />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[60%] right-[10%] text-green-500/10"
        >
          <Server size={80} />
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[40%] right-[30%] text-white/5"
        >
          <Cpu size={60} />
        </motion.div>
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