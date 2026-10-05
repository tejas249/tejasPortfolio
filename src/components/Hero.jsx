import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope, FaRocket } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiMongodb } from "react-icons/si";
import profilePic from "../assets/tejas2.webp";
import { useTheme } from "../context/ThemeContext";

const stack = [
  { icon: <SiTypescript  style={{ color: "#60a5fa" }} />, name: "TypeScript" },
  { icon: <SiNextdotjs   style={{ color: "#94a3b8" }} />, name: "Next.js"    },
  { icon: <SiNodedotjs   style={{ color: "#4ade80" }} />, name: "Node.js"    },
  { icon: <SiPostgresql  style={{ color: "#38bdf8" }} />, name: "PostgreSQL" },
  { icon: <SiPrisma      style={{ color: "#a5b4fc" }} />, name: "Prisma"     },
  { icon: <SiMongodb     style={{ color: "#34d399" }} />, name: "MongoDB"    },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: delay * 0.5 },
});

const Hero = () => {
  const { isDark } = useTheme();
  const nameGradient = isDark
    ? "linear-gradient(135deg, #a78bfa 0%, #38bdf8 100%)"
    : "linear-gradient(135deg, #5b21b6 0%, #0369a1 100%)";

  return (
  <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">

    {/* Avatar */}
    <motion.div {...fadeUp(0)} className="mb-8 relative">
      <div className="absolute inset-0 rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)", transform: "scale(1.4)" }}
      />
      <div className="relative w-28 h-28 rounded-full p-[2px]"
        style={{ background: "linear-gradient(135deg, #8b5cf6, #06b6d4)" }}
      >
        <img src={profilePic} alt="Tejas Kamble" width="112" height="112" fetchpriority="high" decoding="async"
          className="w-full h-full rounded-full object-cover" />
      </div>

      {/* Available badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.4 }}
        className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap"
        style={{
          background: isDark ? "rgba(10,10,10,0.85)" : "rgba(240,253,244,0.95)",
          border: `1px solid ${isDark ? "rgba(34,197,94,0.35)" : "rgba(22,163,74,0.45)"}`,
          color: isDark ? "#86efac" : "#15803d",
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        Available for work
      </motion.div>
    </motion.div>

    {/* Location */}
    <motion.p {...fadeUp(0.1)} style={{ color: "var(--text-3)" }} className="text-xs mb-5 tracking-wide">
      📍 Pune, India
    </motion.p>

    {/* Headline */}
    <motion.div {...fadeUp(0.2)}>
      <h1
        className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-5"
        style={{ color: "var(--text-1)" }}
      >
        Hi, I'm{" "}
        <span className="gradient-text" style={{ background: nameGradient }}>
          Tejas
        </span>
      </h1>
    </motion.div>

    {/* Role */}
    <motion.p {...fadeUp(0.3)} style={{ color: "var(--text-2)" }} className="text-xl sm:text-2xl font-medium mb-4">
      Full Stack Engineer
    </motion.p>

    {/* Tagline */}
    <motion.p {...fadeUp(0.4)} style={{ color: "var(--text-3)" }}
      className="max-w-xl text-sm sm:text-base leading-relaxed mb-10"
    >
      Building smooth, production-ready web experiences, from clean frontends
      to solid backends and AI-powered workflows.
    </motion.p>

    {/* Tech stack pills */}
    <motion.div
      initial="hidden" animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.25 } } }}
      className="flex flex-wrap justify-center gap-2 mb-10"
    >
      {stack.map(({ icon, name }) => (
        <motion.span key={name}
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full cursor-default"
          style={{
            background:  "var(--surface)",
            border:      "1px solid var(--border)",
            color:       "var(--text-2)",
          }}
        >
          {icon}{name}
        </motion.span>
      ))}
    </motion.div>

    {/* CTA */}
    <motion.div {...fadeUp(0.85)} className="flex flex-wrap justify-center gap-3 mb-10">
      <a
        href="#projects"
        className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:opacity-90"
        style={{ background: "linear-gradient(135deg,#7c3aed,#2563eb)", boxShadow: "0 0 20px rgba(124,58,237,0.25)" }}
      >
        <FaRocket size={12} /> View Projects
      </a>
      <a
        href="/Tejas_Kamble_Resume.pdf"
        download="Tejas_Kamble_Resume.pdf"
        className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-[1.03]"
        style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-2)" }}
      >
        <FaDownload size={12} /> Resume / CV
      </a>
      <a
        href="#contact"
        className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-[1.03]"
        style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-2)" }}
        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-1)"; e.currentTarget.style.borderColor = "var(--border-h)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-2)"; e.currentTarget.style.borderColor = "var(--border)"; }}
      >
        <FaEnvelope size={12} /> Get in touch
      </a>
    </motion.div>

    {/* Social */}
    <motion.div {...fadeUp(1)} className="flex items-center gap-5">
      {[
        { icon: <FaLinkedin size={18} />, href: "https://www.linkedin.com/in/tejas249/", label: "LinkedIn" },
        { icon: <FaGithub   size={18} />, href: "https://github.com/tejas249",          label: "GitHub"   },
      ].map(({ icon, href, label }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
          style={{ color: "var(--text-3)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-1)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
        >
          {icon}
        </a>
      ))}
    </motion.div>

    {/* Scroll hint */}
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
    >
      <span className="text-[10px] tracking-widest uppercase" style={{ color: "var(--text-3)" }}>Scroll</span>
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        className="w-px h-6"
        style={{ background: "linear-gradient(to bottom, var(--text-3), transparent)" }}
      />
    </motion.div>
  </section>
  );
};

export default Hero;
