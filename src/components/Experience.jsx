import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const experiences = [
  {
    company: "Katonic AI",
    role: "Full Stack Engineer",
    duration: "Jun 2026 – Present",
    roleHistory: [
      { role: "Full Stack Engineer", duration: "Jun 2026 – Present" },
      { role: "Full Stack Engineer Intern", duration: "Dec 2025 – Jun 2026" },
    ],
    location: "Remote",
    dotColor: "#8b5cf6",
    highlights: [
      "Promoted to Full Stack Engineer in June 2026 after delivering production-ready frontend, backend, and AI integration work.",
      "Owned & maintained the production website serving 2,000+ daily users, built with React.js and Next.js -delivering scalable, responsive, production-ready experiences.",
      "Integrated Claude & LLM APIs to build AI-powered document generation, presentation creation, and enterprise automation workflows.",
      "Developed secure backend services with REST APIs and JWT authentication, enabling seamless frontend-to-AI communication.",
      "Boosted visibility and engagement through SEO optimization, Google Analytics 4 (GA4), and Google Tag Manager (GTM).",
      "Collaborated with DevOps engineers to deploy full-stack applications using Docker, Claude Code, and GitHub Actions workflows.",
    ],
    tech: ["React.js", "Next.js", "REST API", "JWT", "Docker", "GA4", "GTM", "Claude API"],
  },
  {
    company: "KPIT Technologies",
    role: "Intern",
    duration: "Jan 2025 – Nov 2025",
    location: "Remote",
    dotColor: "#06b6d4",
    highlights: [
      "Completed KPIT's NOVA Skill-1 (C++) and Skill-2 (Java) tracks, solving 150+ problems and clearing multiple internal coding marathons.",
      "Built OOP-based mini-projects including a Car Functionality System, applying real-world design patterns in C++ and Java.",
      "Gained hands-on experience with debugging, code reviews, and Git workflows in a professional engineering environment.",
    ],
    tech: ["C++", "Java", "OOP", "Git", "Debugging"],
  },
];

const Experience = () => {
  const { isDark } = useTheme();
  const accentText  = isDark ? "#a78bfa" : "#5b21b6";   /* violet-400 dark / violet-800 light */
  const pillBg      = isDark ? "rgba(139,92,246,0.14)"  : "rgba(109,40,217,0.10)";
  const pillBorder  = isDark ? "rgba(139,92,246,0.28)"  : "rgba(109,40,217,0.30)";
  const pillText    = isDark ? "#c4b5fd"                : "#4c1d95"; /* violet-300 dark / violet-900 light */

  return (
  <section id="experience" className="py-24 px-4">

    <motion.div
      initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: accentText }}>Career</p>
      <h2 className="text-4xl font-bold tracking-tight" style={{ color: "var(--text-1)" }}>Experience</h2>
      <div className="mt-4 mx-auto w-12 h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-transparent" />
    </motion.div>

    <div className="relative max-w-3xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-px"
        style={{ background: "linear-gradient(to bottom, rgba(139,92,246,0.6), rgba(6,182,212,0.3), transparent)" }}
      />

      <div className="flex flex-col gap-10">
        {experiences.map((exp, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
            className="relative pl-16"
          >
            {/* Timeline dot */}
            <div className="absolute top-6 w-3.5 h-3.5 rounded-full border-2"
              style={{
                left: "18px", transform: "translateX(-50%)",
                background: exp.dotColor,
                borderColor: "var(--bg)",
                boxShadow: `0 0 12px ${exp.dotColor}88`,
              }}
            />

            {/* Card */}
            <div className="rounded-2xl overflow-hidden transition-all duration-300 group"
              style={{
                background:   i === 0
                  ? isDark ? "rgba(139,92,246,0.07)" : "rgba(109,40,217,0.05)"
                  : "var(--surface)",
                border: i === 0
                  ? `1px solid ${isDark ? "rgba(139,92,246,0.40)" : "rgba(109,40,217,0.35)"}`
                  : "1px solid var(--border)",
                backdropFilter: "blur(12px)",
                boxShadow: i === 0
                  ? isDark
                    ? "0 0 0 1px rgba(139,92,246,0.15), 0 8px 32px rgba(139,92,246,0.15), var(--card-shadow)"
                    : "0 0 0 1px rgba(109,40,217,0.12), 0 8px 32px rgba(109,40,217,0.10), var(--card-shadow)"
                  : "var(--card-shadow)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = i === 0
                  ? isDark ? "rgba(139,92,246,0.65)" : "rgba(109,40,217,0.55)"
                  : "var(--border-h)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = i === 0
                  ? isDark ? "rgba(139,92,246,0.40)" : "rgba(109,40,217,0.35)"
                  : "var(--border)";
              }}
            >
              {/* Top accent bar - only on Katonic */}
              {i === 0 && (
                <div className="h-[3px] w-full" style={{ background: "linear-gradient(to right, #7c3aed, #2563eb, #06b6d4)" }} />
              )}

              <div className="p-6">
              {/* Top row */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-xl font-bold" style={{ color: "var(--text-1)" }}>{exp.company}</h3>
                  {exp.roleHistory ? (
                    <div className="relative mt-4 ml-1 border-l pl-4 space-y-3" style={{ borderColor: isDark ? "rgba(167,139,250,0.35)" : "rgba(109,40,217,0.28)" }}>
                      {exp.roleHistory.map((role, j) => (
                        <div key={role.role} className="relative">
                          <span
                            className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full border-2"
                            style={{ background: j === 0 ? accentText : "var(--surface)", borderColor: accentText }}
                          />
                          <p className={j === 0 ? "text-base font-semibold" : "text-sm font-medium"} style={{ color: j === 0 ? "var(--text-1)" : accentText }}>{role.role}</p>
                          <p className="text-xs mt-0.5" style={{ color: "var(--text-3)" }}>{role.duration}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm font-medium mt-0.5" style={{ color: accentText }}>{exp.role}</p>
                  )}
                </div>
                <div className="flex flex-col gap-1.5 items-end">
                  <div className="flex items-center gap-2">
                    {i === 0 && (
                      <span className="flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                        style={{ background: "rgba(34,197,94,0.12)", color: isDark ? "#86efac" : "#15803d", border: `1px solid ${isDark ? "rgba(34,197,94,0.30)" : "rgba(22,163,74,0.35)"}` }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Current
                      </span>
                    )}
                    {!exp.roleHistory && (
                      <span className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ background: pillBg, color: pillText, border: `1px solid ${pillBorder}` }}
                      >
                        {exp.duration}
                      </span>
                    )}
                  </div>
                  <span className="text-xs" style={{ color: "var(--text-3)" }}>{exp.location}</span>
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-2.5 mb-6">
                {exp.highlights.map((pt, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
                    <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: exp.dotColor }} />
                    {pt}
                  </li>
                ))}
              </ul>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-md font-medium"
                    style={{ background: "var(--surface-alt)", border: "1px solid var(--border)", color: "var(--text-2)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              </div>{/* end p-6 */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Experience;
