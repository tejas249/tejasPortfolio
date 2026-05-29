import React from "react";
import { motion } from "framer-motion";
import { FaGitAlt, FaGithub, FaDocker, FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiHtml5, SiCss3, SiJavascript, SiMongodb, SiExpress, SiTailwindcss,
         SiCplusplus, SiMysql, SiSupabase, SiFirebase, SiShadcnui, SiNextdotjs, SiPostman } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

const buildGroups = (isDark) => {
  const neutral = isDark ? "#94a3b8" : "#334155";
  return [
    {
      label: "Languages",
      items: [
        { Icon: SiCplusplus,   name: "C++",        color: "#60a5fa" },
        { Icon: SiJavascript,  name: "JavaScript", color: "#facc15" },
        { Icon: SiHtml5,       name: "HTML5",      color: "#f97316" },
        { Icon: SiCss3,        name: "CSS3",       color: "#3b82f6" },
      ],
    },
    {
      label: "Frameworks & Libraries",
      items: [
        { Icon: RiReactjsLine, name: "React.js",   color: "#22d3ee" },
        { Icon: SiNextdotjs,   name: "Next.js",    color: neutral   },
        { Icon: FaNodeJs,      name: "Node.js",    color: "#22c55e" },
        { Icon: SiExpress,     name: "Express.js", color: neutral   },
        { Icon: SiTailwindcss, name: "Tailwind",   color: "#2dd4bf" },
        { Icon: SiShadcnui,    name: "Shadcn UI",  color: "#d8b4fe" },
      ],
    },
    {
      label: "Databases",
      items: [
        { Icon: SiMongodb,     name: "MongoDB",    color: "#16a34a" },
        { Icon: SiMysql,       name: "MySQL",      color: "#38bdf8" },
        { Icon: SiSupabase,    name: "Supabase",   color: "#34d399" },
        { Icon: SiFirebase,    name: "Firebase",   color: "#fbbf24" },
      ],
    },
    {
      label: "Tools & DevOps",
      items: [
        { Icon: FaGitAlt,      name: "Git",        color: "#f87171" },
        { Icon: FaGithub,      name: "GitHub",     color: neutral   },
        { Icon: FaDocker,      name: "Docker",     color: "#38bdf8" },
        { Icon: SiPostman,     name: "Postman",    color: "#fb923c" },
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
