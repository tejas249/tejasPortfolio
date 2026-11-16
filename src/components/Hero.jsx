import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight, FiDownload, FiMail } from "react-icons/fi";
import { SiTypescript, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiMongodb, SiTailwindcss, SiDocker, SiVercel, SiPython } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import SplitText from "./ui/SplitText";
import BentoTile from "./ui/BentoTile";
import CountUp from "./ui/CountUp";
import calendarShot from "../assets/projects/visitzee-owner-calendar.webp";
import { fadeUp } from "../lib/motion";

const ROW_A = [
  [SiTypescript, "TypeScript", "#60a5fa"], [SiNextdotjs, "Next.js", "#94a3b8"], [RiReactjsLine, "React", "#22d3ee"],
  [SiNodedotjs, "Node.js", "#4ade80"], [SiPostgresql, "PostgreSQL", "#38bdf8"],
];
const ROW_B = [
  [SiPrisma, "Prisma", "#a5b4fc"], [SiTailwindcss, "Tailwind", "#2dd4bf"], [SiMongodb, "MongoDB", "#34d399"],
  [SiDocker, "Docker", "#38bdf8"], [SiVercel, "Vercel", "#94a3b8"], [SiPython, "Python", "#fbbf24"],
];

const IconRow = ({ items, reverse }) => (
  <div className="marquee-row overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)" }}>
    <div className={`marquee-track ${reverse ? "marquee-reverse" : ""}`} style={{ animationDuration: "26s" }}>
      {[0, 1].map((rep) => (
        <div key={rep} className="flex shrink-0 gap-2 pr-2">
          {items.map(([Icon, name, color]) => (
            <span key={`${rep}-${name}`} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-[13px] whitespace-nowrap"
              style={{ background: "var(--surface-alt)", border: "1px solid var(--border)", color: "var(--text-2)" }}>
              <Icon style={{ color }} /> {name}
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

/* Animated SVG: radar pulse around a pin, over a dot grid */
const Radar = () => (
  <svg viewBox="0 0 240 150" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
    <defs>
      <pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill="var(--text-3)" opacity="0.35" />
      </pattern>
      <radialGradient id="fade" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="white" /><stop offset="100%" stopColor="black" />
      </radialGradient>
      <mask id="m"><rect width="240" height="150" fill="url(#fade)" /></mask>
    </defs>
    <rect width="240" height="150" fill="url(#dots)" mask="url(#m)" />
    {[0, 1.2, 2.4].map((d) => (
      <circle key={d} cx="170" cy="75" r="60" fill="none" stroke="var(--accent)" strokeWidth="1.2" className="radar-ring" style={{ animationDelay: `${d}s` }} />
    ))}
    <circle cx="170" cy="75" r="5" fill="var(--accent)" />
    <circle cx="170" cy="75" r="10" fill="var(--accent)" opacity="0.2" />
  </svg>
);

const Hero = () => (
  <section id="about" className="relative px-5 sm:px-6 pt-10 sm:pt-14 pb-24">
    <div className="max-w-6xl mx-auto">
      <div className="max-w-4xl mb-12 sm:mb-16">
        <motion.div {...fadeUp(0)} className="mb-7">
          <span className="tag">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--ok)" }} />
            Available for work
          </span>
        </motion.div>
        <h1 className="text-[3.25rem] leading-[0.98] sm:text-7xl lg:text-[5.75rem] font-bold tracking-[-0.035em]">
          <SplitText as="span" text="Hi, I'm Tejas." className="block" delay={0.1} />
          <SplitText as="span" text="I ship products end to end." className="block" delay={0.25} style={{ color: "var(--text-3)" }} />
        </h1>
      </div>

      {/* ── Bento grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 lg:auto-rows-[minmax(150px,auto)]">

        {/* Product */}
        <BentoTile delay={0.1} className="md:col-span-6 lg:col-span-7 lg:row-span-2 flex flex-col min-h-[380px]">
          <div className="p-7 sm:p-9 pb-0 relative z-10">
            <div className="flex items-center justify-between mb-4">
              <span className="tag" style={{ color: "var(--ok)", borderColor: "rgba(74,222,128,0.3)", background: "rgba(74,222,128,0.08)" }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--ok)" }} /> Live in production
              </span>
              <Link to="/visitzee" aria-label="Read the Visitzee case study" className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "var(--surface-alt)", color: "var(--text-1)" }}>
                <FiArrowUpRight size={16} />
              </Link>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2">Visitzee</h3>
            <p className="text-[15px] max-w-md" style={{ color: "var(--text-2)" }}>
              A complete SaaS booking platform for local businesses. Designed, built and shipped end to end.
            </p>
          </div>
          <div className="relative mt-6 flex-1 min-h-[200px] ml-7 sm:ml-9 float-y">
            <img src={calendarShot} alt="Visitzee owner calendar" decoding="async"
              className="absolute top-0 left-0 w-[115%] max-w-none rounded-tl-2xl object-cover object-top"
              style={{ border: "1px solid var(--border-h)", boxShadow: "0 30px 60px -20px var(--shadow)" }} />
          </div>
        </BentoTile>

        {/* Stats */}
        <BentoTile delay={0.18} className="md:col-span-3 lg:col-span-5 p-7 flex flex-col justify-between">
          <p className="eyebrow">By the numbers</p>
          <div className="grid grid-cols-3 gap-3 mt-4">
            {[[900, "+", "tests"], [4, "", "apps"], [149, "", "commits"]].map(([n, s, l]) => (
              <div key={l}>
                <p className="text-4xl sm:text-5xl font-bold tracking-tight" style={{ color: "var(--text-1)" }}><CountUp to={n} suffix={s} /></p>
                <p className="text-xs mt-1" style={{ color: "var(--text-3)" }}>{l}</p>
              </div>
            ))}
          </div>
        </BentoTile>

        {/* Location radar */}
        <BentoTile delay={0.24} className="md:col-span-3 lg:col-span-5 min-h-[170px]">
          <Radar />
          <div className="relative z-10 p-7 h-full flex flex-col justify-between">
            <p className="eyebrow">Based in</p>
            <div>
              <p className="text-2xl font-semibold tracking-tight">Pune, India</p>
              <p className="text-sm" style={{ color: "var(--text-3)" }}>Remote, open to work</p>
            </div>
          </div>
        </BentoTile>

        {/* Current role */}
        <BentoTile delay={0.3} className="md:col-span-3 lg:col-span-4 p-7 flex flex-col justify-between">
          <p className="eyebrow">Currently</p>
          <div className="mt-6">
            <p className="text-xl font-semibold tracking-tight">Full Stack Engineer</p>
            <p className="text-sm mt-1" style={{ color: "var(--accent-text)" }}>Katonic AI</p>
          </div>
        </BentoTile>

        {/* Stack */}
        <BentoTile delay={0.36} className="md:col-span-3 lg:col-span-4 p-7 flex flex-col justify-between gap-5">
          <p className="eyebrow">Core stack</p>
          <div className="space-y-2 -mx-7">
            <IconRow items={ROW_A} />
            <IconRow items={ROW_B} reverse />
          </div>
        </BentoTile>

        {/* Links */}
        <BentoTile delay={0.42} className="md:col-span-6 lg:col-span-4 p-7 flex flex-col justify-between gap-5">
          <p className="eyebrow">Let's talk</p>
          <div className="flex flex-wrap gap-2">
            <a href="#contact" className="btn btn-primary !px-4"><FiMail size={15} /> Contact</a>
            <a href="/Tejas_Kamble_Resume.pdf" download="Tejas_Kamble_Resume.pdf" className="btn !px-4"><FiDownload size={15} /> Resume</a>
            <a href="https://github.com/tejas249" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="btn !px-3"><FaGithub size={16} /></a>
            <a href="https://www.linkedin.com/in/tejas249/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="btn !px-3"><FaLinkedin size={16} /></a>
          </div>
        </BentoTile>
      </div>
    </div>
  </section>
);

export default Hero;
