import React from "react";
import { motion } from "framer-motion";
import { FaGitAlt, FaDocker, FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiMongodb, SiExpress, SiTailwindcss,
         SiCplusplus, SiMysql, SiPostgresql, SiSupabase, SiFirebase, SiNextdotjs, SiPostman,
         SiPython, SiPrisma, SiRazorpay, SiAnthropic, SiGithubactions, SiVercel, SiGithubpages,
         SiVitest, SiGoogleanalytics, SiGoogletagmanager } from "react-icons/si";
import { FiDatabase, FiBell, FiSmartphone, FiSearch, FiKey, FiServer, FiUsers, FiPlayCircle,
         FiFileText, FiShield, FiLock, FiCpu, FiShare2, FiLayers, FiMessageCircle, FiMail, FiCheckCircle, FiActivity } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import SectionHeading from "./ui/SectionHeading";
import { fadeUp } from "../lib/motion";

const WIDE_GROUPS = ["Languages", "Backend & APIs"];

const buildGroups = (isDark) => {
  const neutral = isDark ? "#94a3b8" : "#334155";
  return [
    {
      label: "Languages",
      items: [
        { Icon: SiTypescript,  name: "TypeScript", color: "#60a5fa" },
        { Icon: SiJavascript,  name: "JavaScript", color: "#facc15" },
        { Icon: SiPython,      name: "Python",     color: "#fbbf24" },
        { Icon: SiCplusplus,   name: "C++",        color: "#60a5fa" },
        { Icon: FiDatabase,    name: "SQL",        color: "#94a3b8" },
        { Icon: SiHtml5,       name: "HTML5",      color: "#f97316" },
        { Icon: SiCss3,        name: "CSS3",       color: "#3b82f6" },
      ],
    },
    {
      label: "AI & Agents",
      items: [
        { Icon: FiShare2,      name: "AI agents",  color: "#a78bfa" },
        { Icon: FiLayers,      name: "RAG (retrieval-augmented generation)", color: "#38bdf8" },
        { Icon: SiAnthropic,   name: "Claude & LLM APIs", color: "#fb923c" },
      ],
    },
    {
      label: "Frontend",
      items: [
        { Icon: RiReactjsLine, name: "React.js",   color: "#22d3ee" },
        { Icon: SiNextdotjs,   name: "Next.js",    color: neutral   },
        { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#2dd4bf" },
        { Icon: FiSmartphone,  name: "Responsive & cross-browser UI", color: "#a78bfa" },
        { Icon: FiSearch,      name: "SEO",        color: "#34d399" },
      ],
    },
    {
      label: "Backend & APIs",
      items: [
        { Icon: FaNodeJs,      name: "Node.js",    color: "#22c55e" },
        { Icon: SiExpress,     name: "Express.js", color: neutral   },
        { Icon: FiServer,      name: "REST APIs",  color: "#38bdf8" },
        { Icon: FiKey,         name: "JWT authentication", color: "#fbbf24" },
        { Icon: SiPrisma,      name: "Prisma",     color: "#a5b4fc" },
        { Icon: SiRazorpay,    name: "Razorpay",   color: "#60a5fa" },
        { Icon: FiBell,        name: "Web Push",   color: "#fbbf24" },
        { Icon: FiMessageCircle, name: "WhatsApp Cloud API", color: "#22c55e" },
        { Icon: FiMail,        name: "Resend (email)", color: "#94a3b8" },
      ],
    },
    {
      label: "Databases",
      items: [
        { Icon: SiPostgresql,  name: "PostgreSQL (Neon)", color: "#38bdf8" },
        { Icon: SiMongodb,     name: "MongoDB",    color: "#16a34a" },
        { Icon: SiMysql,       name: "MySQL",      color: "#38bdf8" },
        { Icon: SiSupabase,    name: "Supabase",   color: "#34d399" },
        { Icon: SiFirebase,    name: "Firebase",   color: "#fbbf24" },
      ],
    },
    {
      label: "DevOps & Cloud",
      items: [
        { Icon: FaGitAlt,        name: "Git",            color: "#f87171" },
        { Icon: SiGithubactions, name: "GitHub Actions (CI/CD)", color: "#60a5fa" },
        { Icon: FaDocker,        name: "Docker",         color: "#38bdf8" },
        { Icon: SiVercel,        name: "Vercel",         color: neutral   },
        { Icon: SiGithubpages,   name: "GitHub Pages",   color: neutral   },
      ],
    },
    {
      label: "Testing & Analytics",
      items: [
        { Icon: SiVitest,           name: "Vitest",       color: "#facc15" },
        { Icon: FiCheckCircle,      name: "Playwright",   color: "#22c55e" },
        { Icon: FiActivity,         name: "Sentry",       color: "#a78bfa" },
        { Icon: SiPostman,          name: "Postman",      color: "#fb923c" },
        { Icon: SiGoogleanalytics,  name: "Google Analytics (GA4)", color: "#fb923c" },
        { Icon: SiGoogletagmanager, name: "Google Tag Manager",     color: "#60a5fa" },
      ],
    },
    {
      label: "Strengths",
      items: [
        { Icon: FiUsers,      name: "Client handling",         color: "#a78bfa" },
        { Icon: FiPlayCircle, name: "Product demos",           color: "#38bdf8" },
        { Icon: FiFileText,   name: "Technical documentation", color: "#34d399" },
        { Icon: FiShield,     name: "RBAC",                    color: "#fbbf24" },
        { Icon: FiLock,       name: "Data encryption",         color: "#60a5fa" },
        { Icon: FiCpu,        name: "AI-assisted development", color: "#c084fc" },
      ],
    },
  ];
};

const Technologies = () => {
  const { isDark } = useTheme();
  const groups = buildGroups(isDark);
  return (
  <section id="skills" className="py-24 px-4">
    <div className="max-w-5xl mx-auto">
    <SectionHeading index="04" title="Tech Stack" eyebrow="What I work with" />

    <div className="-mt-10 grid grid-cols-1 sm:grid-cols-2 border-l border-t" style={{ borderColor: "var(--border)" }}>
      {groups.map((group, gi) => (
        <motion.div
          key={group.label}
          {...fadeUp(gi * 0.05)}
          className={`p-6 border-r border-b ${WIDE_GROUPS.includes(group.label) ? "sm:col-span-2" : ""}`}
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[11px]" style={{ color: "var(--accent-text)" }}>{String(gi + 1).padStart(2, "0")}</span>
            <p className="font-mono text-[11px] font-semibold tracking-widest uppercase" style={{ color: "var(--text-2)" }}>
              {group.label}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2.5">
            {group.items.map(({ Icon, name, color }) => (
              <span key={name} data-cursor-hover className="flex items-center gap-2 text-sm">
                <Icon style={{ color, fontSize: "1rem", flexShrink: 0 }} />
                <span style={{ color: "var(--text-2)" }}>{name}</span>
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
    </div>
  </section>
  );
};

export default Technologies;
