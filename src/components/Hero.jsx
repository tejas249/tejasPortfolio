import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope, FaRocket } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiMongodb } from "react-icons/si";
import profilePic from "../assets/tejas2.webp";
import SplitText from "./ui/SplitText";
import CornerFrame from "./ui/CornerFrame";
import SpecRow from "./ui/SpecRow";
import Marquee from "./ui/Marquee";

const stack = [
  { icon: <SiTypescript  style={{ color: "#60a5fa" }} />, name: "TypeScript" },
  { icon: <SiNextdotjs   style={{ color: "#94a3b8" }} />, name: "Next.js"    },
  { icon: <SiNodedotjs   style={{ color: "#4ade80" }} />, name: "Node.js"    },
  { icon: <SiPostgresql  style={{ color: "#38bdf8" }} />, name: "PostgreSQL" },
  { icon: <SiPrisma      style={{ color: "#a5b4fc" }} />, name: "Prisma"     },
  { icon: <SiMongodb     style={{ color: "#34d399" }} />, name: "MongoDB"    },
];

const TICKER_ITEMS = [
  "FULL STACK ENGINEER",
  "AVAILABLE FOR WORK",
  "BASED IN PUNE, INDIA",
  "BUILDER OF VISITZEE",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: delay * 0.5 },
});

const Hero = () => (
  <section id="about" className="min-h-screen flex flex-col justify-center px-6 py-28 relative">
    <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">

      {/* ── Left: statement ── */}
      <div className="flex flex-col items-start text-left min-w-0">
        <motion.p {...fadeUp(0)}
          className="font-mono text-[11px] mb-6 tracking-[0.2em] uppercase flex items-center gap-2 flex-wrap"
          style={{ color: "var(--text-2)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
          Available for work
          <span style={{ color: "var(--text-3)" }}>/</span>
          Pune, India
        </motion.p>

        <h1 className="mb-6 text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9]">
          <SplitText as="span" text="Hi, I'm" className="block" style={{ color: "var(--text-1)" }} delay={0.1} />
          <SplitText as="span" text="Tejas" className="block" style={{ color: "var(--accent-text)" }} delay={0.22} />
        </h1>

        <motion.p {...fadeUp(0.3)}
          className="font-mono text-sm font-medium mb-5 uppercase tracking-[0.15em]"
          style={{ color: "var(--text-2)" }}
        >
          Full Stack Engineer
        </motion.p>

        <motion.p {...fadeUp(0.38)} className="max-w-md text-sm sm:text-base leading-relaxed mb-9" style={{ color: "var(--text-3)" }}>
          Building smooth, production-ready web experiences, from clean frontends
          to solid backends and AI-powered workflows.
        </motion.p>

        <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-0 mb-8 border" style={{ borderColor: "var(--text-1)" }}>
          <a href="#visitzee" className="btn-sharp btn-accent" style={{ border: "none" }}>
            <FaRocket size={12} /> See my product
          </a>
          <a href="/Tejas_Kamble_Resume.pdf" download="Tejas_Kamble_Resume.pdf" className="btn-sharp" style={{ border: "none", borderLeft: "1px solid var(--text-1)" }}
          >
            <FaDownload size={12} /> Resume / CV
          </a>
          <a href="#contact" className="btn-sharp" style={{ border: "none", borderLeft: "1px solid var(--text-1)" }}
          >
            <FaEnvelope size={12} /> Get in touch
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.6)} className="flex items-center gap-5">
          {[
            { icon: <FaLinkedin size={18} />, href: "https://www.linkedin.com/in/tejas249/", label: "LinkedIn" },
            { icon: <FaGithub   size={18} />, href: "https://github.com/tejas249",          label: "GitHub"   },
          ].map(({ icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} style={{ color: "var(--text-3)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-1)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* ── Right: spec panel ── */}
      <motion.div {...fadeUp(0.25)} className="w-full min-w-0">
        <CornerFrame className="p-5 sm:p-6" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>

          <div className="flex items-center gap-4 mb-5 pb-5" style={{ borderBottom: "1px solid var(--border)" }}>
            <div className="w-16 h-16 overflow-hidden shrink-0" style={{ border: "1px solid var(--border-h)" }}>
              <img src={profilePic} alt="Tejas Kamble" width="64" height="64" fetchpriority="high" decoding="async"
                className="w-full h-full object-cover grayscale" />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-1.5" style={{ color: "var(--text-3)" }}>Profile</p>
              <p className="text-base font-bold" style={{ color: "var(--text-1)" }}>Tejas Kamble</p>
            </div>
          </div>

          <div className="mb-5">
            <SpecRow label="Role"     value="Full Stack Engineer" />
            <SpecRow label="Location" value="Pune, India" />
            <SpecRow label="Status"   value="Available for work" valueColor="#4ade80" />
            <SpecRow label="Focus"    value="Web + AI workflows" />
          </div>

          <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-3" style={{ color: "var(--text-3)" }}>Core stack</p>
          <div className="grid grid-cols-3 border" style={{ borderColor: "var(--border)" }}>
            {stack.map(({ icon, name }, i) => (
              <div key={name} className="flex flex-col items-center justify-center gap-1.5 py-3"
                style={{
                  borderRight: (i % 3 !== 2) ? "1px solid var(--border)" : "none",
                  borderTop: i >= 3 ? "1px solid var(--border)" : "none",
                }}
              >
                <span className="text-base">{icon}</span>
                <span className="font-mono text-[9px] uppercase tracking-wide text-center" style={{ color: "var(--text-3)" }}>{name}</span>
              </div>
            ))}
          </div>
        </CornerFrame>
      </motion.div>
    </div>

    {/* Ticker */}
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}
      className="max-w-6xl mx-auto w-full mt-16 py-3"
      style={{ borderTop: "1px dashed var(--border)", borderBottom: "1px dashed var(--border)" }}
    >
      <Marquee items={TICKER_ITEMS} />
    </motion.div>

    {/* Scroll hint */}
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }}
      className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5"
    >
      <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: "var(--text-3)" }}>Scroll</span>
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        className="w-px h-6"
        style={{ background: "linear-gradient(to bottom, var(--text-3), transparent)" }}
      />
    </motion.div>
  </section>
);

export default Hero;
