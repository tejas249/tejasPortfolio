import React from "react";
import { motion } from "framer-motion";
import { FaGitAlt, FaDocker, FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiMongodb, SiExpress, SiTailwindcss,
         SiCplusplus, SiMysql, SiPostgresql, SiSupabase, SiFirebase, SiNextdotjs, SiPostman,
         SiPrisma, SiRazorpay, SiAnthropic, SiGithubactions, SiVercel, SiGithubpages,
         SiVitest, SiGoogleanalytics, SiGoogletagmanager } from "react-icons/si";
import { FiDatabase, FiBell, FiSmartphone, FiSearch, FiKey, FiServer, FiUsers, FiHeart, FiPlayCircle,
         FiFileText, FiTrendingUp, FiShield, FiLock, FiCpu } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const buildGroups = (isDark) => {
  const neutral = isDark ? "#94a3b8" : "#334155";
  return [
    {
      label: "Languages",
      items: [
        { Icon: SiTypescript,  name: "TypeScript", color: "#60a5fa" },
        { Icon: SiJavascript,  name: "JavaScript", color: "#facc15" },
        { Icon: SiCplusplus,   name: "C++",        color: "#60a5fa" },
        { Icon: FiDatabase,    name: "SQL",        color: "#94a3b8" },
        { Icon: SiHtml5,       name: "HTML5",      color: "#f97316" },
        { Icon: SiCss3,        name: "CSS3",       color: "#3b82f6" },
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
        { Icon: SiAnthropic,   name: "Claude & LLM APIs", color: "#fb923c" },
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
        { Icon: SiPostman,          name: "Postman",      color: "#fb923c" },
        { Icon: SiGoogleanalytics,  name: "Google Analytics (GA4)", color: "#fb923c" },
        { Icon: SiGoogletagmanager, name: "Google Tag Manager",     color: "#60a5fa" },
      ],
    },
    {
      label: "Strengths",
      items: [
        { Icon: FiUsers,      name: "Client handling",         color: "#a78bfa" },
        { Icon: FiHeart,      name: "Customer success",        color: "#f472b6" },
        { Icon: FiPlayCircle, name: "Product demos",           color: "#38bdf8" },
        { Icon: FiFileText,   name: "Technical documentation", color: "#34d399" },
        { Icon: FiTrendingUp, name: "Marketing support",       color: "#fb923c" },
        { Icon: FiShield,     name: "Authentication & RBAC",   color: "#fbbf24" },
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

    <motion.div
      initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <p className="text-sm font-semibold tracking-[0.2em] uppercase text-violet-400 mb-3">What I work with</p>
      <h2 className="text-4xl font-bold tracking-tight" style={{ color: "var(--text-1)" }}>Tech Stack</h2>
      <div className="mt-4 mx-auto w-12 h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-transparent" />
    </motion.div>

    <div className="max-w-4xl mx-auto flex flex-col gap-12">
      {groups.map((group, gi) => (
        <motion.div key={group.label}
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: gi * 0.1 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "var(--text-3)" }}>
            {group.label}
          </p>
          <div className="flex flex-wrap gap-3">
            {group.items.map(({ Icon, name, color }, i) => (
              <motion.div key={name}
                initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.05 + i * 0.05, duration: 0.3 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl cursor-default transition-all duration-200"
                style={{
                  background: "var(--surface)",
                  border:     "1px solid var(--border)",
                  boxShadow:  "var(--card-shadow)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-h)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              >
                <Icon style={{ color, fontSize: "1.1rem", flexShrink: 0 }} />
                <span className="text-sm font-medium" style={{ color: "var(--text-2)" }}>{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
  );
};

export default Technologies;
