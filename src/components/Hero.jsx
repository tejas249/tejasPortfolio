import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiMoon, HiSun } from "react-icons/hi2";
import { useTheme } from "../context/ThemeContext";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight, FiDownload, FiMail, FiMapPin } from "react-icons/fi";
import {
  SiTypescript, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiMongodb, SiTailwindcss, SiDocker,
  SiVercel, SiPython, SiVitest, SiPostman, SiGoogleanalytics, SiGoogletagmanager, SiSupabase, SiFirebase, SiJavascript, SiExpress, SiRazorpay, SiAnthropic, SiGithubactions,
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import SplitText from "./ui/SplitText";
import BentoTile from "./ui/BentoTile";
import CountUp from "./ui/CountUp";
import vzIcon from "../assets/brand/visitzee-icon.svg";
import calendarShot from "../assets/projects/visitzee-owner-overview.webp";
import { EXPERIENCE } from "../constants/experience";
import { CONTACT } from "../constants";
import { fadeUp } from "../lib/motion";

const ROWS = [
  [[SiTypescript, "TypeScript", "#60a5fa"], [SiNextdotjs, "Next.js", "#94a3b8"], [RiReactjsLine, "React", "#22d3ee"], [SiTailwindcss, "Tailwind", "#2dd4bf"], [SiJavascript, "JavaScript", "#facc15"]],
  [[SiNodedotjs, "Node.js", "#4ade80"], [SiExpress, "Express", "#94a3b8"], [SiPrisma, "Prisma", "#a5b4fc"], [SiPostgresql, "PostgreSQL", "#38bdf8"], [SiMongodb, "MongoDB", "#34d399"]],
  [[SiVitest, "Vitest", "#facc15"], [SiPostman, "Postman", "#fb923c"], [SiGoogleanalytics, "Analytics", "#fb923c"], [SiGoogletagmanager, "Tag Manager", "#60a5fa"], [SiSupabase, "Supabase", "#34d399"], [SiFirebase, "Firebase", "#fbbf24"]],
  [[SiAnthropic, "Claude & LLM APIs", "#fb923c"], [SiRazorpay, "Razorpay", "#60a5fa"], [SiDocker, "Docker", "#38bdf8"], [SiGithubactions, "GitHub Actions", "#60a5fa"], [SiVercel, "Vercel", "#94a3b8"], [SiPython, "Python", "#fbbf24"]],
];

const IconRow = ({ items, reverse }) => (
  <div className="marquee-row overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
    <div className={`marquee-track ${reverse ? "marquee-reverse" : ""}`} style={{ animationDuration: "30s" }}>
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

/* Animated SVG: radar pulse over a dot grid, kept to the tile's right side so it never sits under text */
const Radar = () => (
  <svg viewBox="0 0 120 110" className="absolute right-0 top-0 h-full w-[48%]" preserveAspectRatio="xMaxYMid meet" aria-hidden>
    <defs>
      <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.9" fill="var(--text-3)" opacity="0.4" /></pattern>
      <radialGradient id="fade" cx="50%" cy="50%" r="55%"><stop offset="0%" stopColor="white" /><stop offset="100%" stopColor="black" /></radialGradient>
      <mask id="m"><rect width="120" height="110" fill="url(#fade)" /></mask>
    </defs>
    <rect width="120" height="110" fill="url(#dots)" mask="url(#m)" />
    {[0, 1.2, 2.4].map((d) => (
      <circle key={d} cx="60" cy="55" r="44" fill="none" stroke="var(--accent)" strokeWidth="1" className="radar-ring" style={{ animationDelay: `${d}s` }} />
    ))}
    <circle cx="60" cy="55" r="4" fill="var(--accent)" />
    <circle cx="60" cy="55" r="8" fill="var(--accent)" opacity="0.2" />
  </svg>
);

const Eyebrow = ({ children, right }) => (
  <div className="flex items-center justify-between">
    <p className="eyebrow uppercase tracking-[0.12em] !text-[11px]">{children}</p>
    {right}
  </div>
);

const Live = ({ children }) => (
  <span className="tag" style={{ color: "var(--ok)", borderColor: "rgba(74,222,128,0.3)", background: "rgba(74,222,128,0.08)" }}>
    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--ok)" }} /> {children}
  </span>
);

const Arrow = () => (
  <span className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    style={{ background: "var(--surface-alt)", color: "var(--text-1)" }}><FiArrowUpRight size={15} /></span>
);

// wa.me wants digits only, with the country code and no plus sign
const WA_NUMBER = CONTACT.phoneNo.replace(/\D/g, "");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi Tejas, I came across your portfolio and wanted to get in touch.")}`;

const Hero = () => {
  const { isDark, toggle } = useTheme();
  return (
  <section className="px-4 sm:px-6 pb-6 lg:pb-5 lg:h-[calc(100svh-1.25rem)] lg:min-h-[640px]">
    <div className="max-w-[1400px] mx-auto h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-6 gap-3 sm:gap-4">

      {/* Intro */}
      <BentoTile delay={0} className="md:col-span-2 lg:col-span-5 lg:row-span-3 p-6 sm:p-7 flex flex-col justify-between gap-4">
        <div className="flex items-center justify-between gap-3">
          <Live>Available for work</Live>
          <button onClick={toggle} aria-label="Toggle theme" className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
            style={{ background: "var(--surface-alt)", color: "var(--text-2)", border: "1px solid var(--border)" }}>
            {isDark ? <HiSun size={16} /> : <HiMoon size={16} />}
          </button>
        </div>
        <div>
          <h1 className="font-bold tracking-[-0.035em] leading-[0.98] text-[2.6rem] sm:text-6xl lg:text-[clamp(2.2rem,5.2vh,3.8rem)]">
            <SplitText as="span" text="Hi, I'm Tejas." className="block" delay={0.1} />
            <SplitText as="span" text="I ship products end to end." className="block" delay={0.25} style={{ color: "var(--text-3)" }} />
          </h1>
          <motion.p {...fadeUp(0.3)} className="mt-3 text-sm leading-relaxed max-w-lg" style={{ color: "var(--text-2)" }}>
            Full Stack Engineer building with Next.js, TypeScript, Node.js and PostgreSQL, from booking platforms to AI workflows.
          </motion.p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link to="/visitzee" className="btn btn-primary">See my product <FiArrowUpRight size={16} /></Link>
          <a href="/Tejas_Kamble_Resume.pdf" download="Tejas_Kamble_Resume.pdf" className="btn"><FiDownload size={15} /> Resume</a>
        </div>
      </BentoTile>

      {/* Visitzee */}
      <BentoTile delay={0.06} className="group md:col-span-2 lg:col-span-4 lg:row-span-4">
        <Link to="/visitzee" aria-label="Open the Visitzee case study" className="flex flex-col h-full min-h-[360px]">
          <div className="p-6 sm:p-7 relative z-10">
            <Eyebrow right={<Arrow />}>Featured project</Eyebrow>
            <div className="flex items-center gap-3 mt-3 mb-2">
              <img src={vzIcon} alt="" width="36" height="36" className="w-9 h-9 -mr-0.5" />
              <h2 className="text-3xl font-bold tracking-tight">Visitzee</h2>
              <Live>Live</Live>
            </div>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "var(--text-2)" }}>
              A complete SaaS booking platform for local businesses in India and the US. Designed, built and shipped end to end.
            </p>
          </div>
          <div className="relative flex-1 min-h-[160px]">
            <img src={calendarShot} alt="Visitzee owner app" loading="lazy" decoding="async"
              className="absolute top-0 left-6 w-[130%] max-w-none rounded-tl-2xl object-cover object-top transition-transform duration-500 group-hover:-translate-y-1.5"
              style={{ border: "1px solid var(--border-h)", boxShadow: "0 30px 60px -20px var(--shadow)" }} />
          </div>
        </Link>
      </BentoTile>

      {/* Location */}
      <BentoTile delay={0.12} className="lg:col-span-3 lg:row-span-1 min-h-[110px]">
        <Radar />
        <div className="relative z-10 p-5 h-full flex flex-col justify-between">
          <Eyebrow>Based in</Eyebrow>
          <div>
            <p className="text-xl font-semibold tracking-tight flex items-center gap-2"><FiMapPin size={16} style={{ color: "var(--accent-text)" }} /> Pune, India</p>
            <p className="text-xs mt-0.5 pl-6" style={{ color: "var(--text-3)" }}>Remote, open to work</p>
          </div>
        </div>
      </BentoTile>

      {/* Impact */}
      <BentoTile delay={0.18} className="lg:col-span-3 lg:row-span-3 p-5 flex flex-col justify-between gap-3">
        <Eyebrow>Impact</Eyebrow>
        <div className="grid grid-cols-2 grid-rows-2 flex-1 content-center items-center gap-x-3">
          {[[368, "", "GitHub contributions, 2026 · personal"], [1100, "", "GitHub contributions · professional"], [10, "+", "full stack apps shipped"], [200, "+", "product videos automated"]].map(([n, s, l]) => (
            <div key={l}>
              <p className="text-[clamp(1.9rem,4.4vh,2.7rem)] leading-none font-bold tracking-tight"><CountUp to={n} suffix={s} /></p>
              <p className="text-[11.5px] leading-snug mt-1.5" style={{ color: "var(--text-3)" }}>{l}</p>
            </div>
          ))}
        </div>
        <div className="pt-3" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-[11px] mb-2" style={{ color: "var(--text-3)" }}>Worked with teams at</p>
          <div className="flex flex-wrap gap-1.5">
            {["NVIDIA", "HPE", "TAS Networks"].map((n) => (
              <span key={n} className="px-2.5 py-1 rounded-lg text-[11px] font-semibold tracking-wide" style={{ background: "var(--surface-alt)", border: "1px solid var(--border)", color: "var(--text-1)" }}>{n}</span>
            ))}
          </div>
          <p className="text-[11px] mt-2" style={{ color: "var(--text-3)" }}>on marketing tasks</p>
        </div>
      </BentoTile>

      {/* Experience */}
      <BentoTile delay={0.24} className="md:col-span-2 lg:col-span-5 lg:row-span-3 p-6 sm:p-7 flex flex-col gap-3">
        <Eyebrow>Experience</Eyebrow>
        <div className="flex flex-col gap-2.5 flex-1 min-h-0">
          {EXPERIENCE.map((e) => (
            <Link key={e.slug} to={`/experience/${e.slug}`} className="group flex-1 flex items-center justify-between gap-4 rounded-2xl px-5 py-3 transition-colors duration-200"
              style={{ background: "var(--surface-alt)", border: "1px solid var(--border)" }}>
              <div className="min-w-0">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <p className="text-lg font-semibold tracking-tight">{e.company}</p>
                  {e.current && <Live>Current</Live>}
                </div>
                <p className="text-[13px] mt-0.5 truncate" style={{ color: "var(--text-2)" }}>
                  {e.roles[0].title} <span style={{ color: "var(--text-3)" }}>· {e.period}</span>
                </p>
              </div>
              <Arrow />
            </Link>
          ))}
        </div>
      </BentoTile>

      {/* Stack */}
      <BentoTile delay={0.3} className="md:col-span-2 lg:col-span-4 lg:row-span-2 p-6 flex flex-col justify-between gap-3">
        <Eyebrow>Stack</Eyebrow>
        <div className="flex flex-1 flex-col justify-evenly -mx-6">
          <IconRow items={ROWS[0]} />
          <IconRow items={ROWS[1]} reverse />
          <IconRow items={ROWS[3]} />
          <div className="hidden [@media(min-height:840px)]:block"><IconRow items={ROWS[2]} reverse /></div>
        </div>
      </BentoTile>

      {/* Education */}
      <BentoTile delay={0.36} className="lg:col-span-3 p-5 flex flex-col justify-between">
        <Eyebrow>Education</Eyebrow>
        <div>
          <p className="text-[15px] font-semibold tracking-tight leading-snug">B.Tech, Computer Science</p>
          <p className="text-xs mt-0.5" style={{ color: "var(--text-3)" }}>JSPM RSCOE, Pune · 2021–25 · CGPA 7.5</p>
        </div>
      </BentoTile>

      {/* Contact */}
      <BentoTile delay={0.42} className="lg:col-span-3 p-5 flex flex-col justify-between gap-3">
        <Eyebrow right={
          <span className="flex items-center gap-1.5">
            <a href="https://github.com/tejas249" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "var(--surface-alt)", color: "var(--text-2)" }}><FaGithub size={13} /></a>
            <a href="https://www.linkedin.com/in/tejas249/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "var(--surface-alt)", color: "var(--text-2)" }}><FaLinkedin size={13} /></a>
          </span>
        }>Contact</Eyebrow>
        <div className="flex gap-2">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label="Message Tejas on WhatsApp"
            className="btn !py-2 !px-3 !text-[12.5px] flex-1 min-w-0">
            <FaWhatsapp size={16} className="shrink-0" /> WhatsApp
          </a>
          <a href={`mailto:${CONTACT.email}`} aria-label={`Email ${CONTACT.email}`} className="btn !py-2 !px-3 !text-[12.5px] flex-1 min-w-0">
            <FiMail size={14} className="shrink-0" /> Email
          </a>
        </div>
      </BentoTile>
    </div>
  </section>
  );
};

export default Hero;
