import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const experiences = [
  {
    company: "Katonic AI",
    role: "Full Stack Engineer",
    duration: "Jun 2026 – Present",
    roleHistory: [
      {
        role: "Full Stack Engineer",
        duration: "Jun 2026 – Present",
        highlights: [
          "Lead developer of the katonic.ai and eshal.ai websites: a 90+ page Katonic site and eshal.ai, with client and career forms, email notifications, Google Analytics, Tag Manager and SEO; cross-browser compatible, secure, responsive.",
          "Full stack engineer on the Docs, Developers and Distributor portals: improved frontend and backend, fixed technical issues, met development standards, and deployed with the DevOps team (GitHub Actions CI/CD, Docker).",
          "Built the docs and learning experience: full platform docs with screenshots, around 115 demo videos and tutorials, automated product videos, and an Ask AI section answering through the Eshal API plus a chatbot.",
          "Developed learning.katonic.ai: integrated training videos, role-based access for user groups, and learning paths.",
          "Delivered work for enterprise partners: worked with the TAS Networks, HPE, Red Hat and NVIDIA teams on product demo videos, documentation and platform content, and answered their queries with technical support.",
          "Owned delivery end to end across frontend, backend, integrations, analytics, access management and deployments.",
        ],
      },
      {
        role: "Full Stack Engineer Intern",
        duration: "Dec 2025 – May 2026",
        highlights: [
          "Shipped 6+ production-grade full-stack apps with Next.js, TypeScript, Node.js, MongoDB, REST APIs, JWT.",
          "Developed the V2 and V3 Katonic websites, leading their development and maintenance.",
          "Integrated Claude and LLM APIs for AI-powered document generation, presentations and enterprise automation.",
          "Worked with DevOps on deployments using Docker and GitHub Actions; set up GA4 and GTM for SEO and analytics.",
        ],
      },
    ],
    location: "Remote",
    dotColor: "#8b5cf6",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "REST APIs", "JWT", "Docker", "GitHub Actions", "GA4", "GTM", "Claude & LLM APIs"],
  },
  {
    company: "KPIT Technologies",
    role: "Intern",
    duration: "Jan 2025 – Nov 2025",
    location: "Remote",
    dotColor: "#06b6d4",
    highlights: [
      "Completed KPIT's NOVA Skill-1 (C++) and Skill-2 (Java), solving 150+ problems and clearing coding marathons.",
      "Built OOP-based mini-projects such as a Car Functionality System, gaining hands-on OOP, debugging and Git experience.",
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
                  {!exp.roleHistory && (
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
              {exp.roleHistory ? (
                <div className="space-y-6 mb-6">
                  {exp.roleHistory.map((r, j) => (
                    <div key={r.role}>
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                        <p className="text-base font-semibold" style={{ color: "var(--text-1)" }}>{r.role}</p>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full"
                          style={{ background: pillBg, color: pillText, border: `1px solid ${pillBorder}` }}
                        >
                          {r.duration}
                        </span>
                      </div>
                      <ul className="space-y-2.5">
                        {r.highlights.map((pt, k) => (
                          <li key={k} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
                            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: exp.dotColor }} />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-2.5 mb-6">
                  {exp.highlights.map((pt, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: exp.dotColor }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              )}

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
