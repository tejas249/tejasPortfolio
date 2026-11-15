import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import CornerFrame from "./ui/CornerFrame";
import SpecRow from "./ui/SpecRow";

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
    current: true,
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "REST APIs", "JWT", "Docker", "GitHub Actions", "GA4", "GTM", "Claude & LLM APIs"],
  },
  {
    company: "KPIT Technologies",
    role: "Intern",
    duration: "Jan 2025 – Nov 2025",
    location: "Remote",
    current: false,
    highlights: [
      "Completed NOVA Skill-1 (C++) and Skill-2 (Java), solving 150+ problems; built an OOP Car Functionality System.",
    ],
    tech: ["C++", "Java", "OOP", "Git", "Debugging"],
  },
];

const card = {
  background: "var(--surface)",
  border: "1px solid var(--border)",
};

const Experience = () => {
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section id="experience" className="py-24 px-4">

      <SectionHeading index="03" title="Experience" eyebrow="Career" />

      <div className="-mt-10 max-w-4xl mx-auto">

        {/* Company switcher */}
        <div className="flex flex-wrap mb-8 border-b" style={{ borderColor: "var(--border)" }}>
          {experiences.map((e, i) => (
            <button
              key={e.company}
              onClick={() => setActive(i)}
              data-cursor-hover
              className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wide px-5 py-3.5 border-b-2 -mb-px transition-colors duration-150"
              style={{
                borderBottomColor: i === active ? "var(--accent)" : "transparent",
                color: i === active ? "var(--text-1)" : "var(--text-3)",
              }}
            >
              {e.current && <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />}
              {e.company}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <CornerFrame style={card}>
              {exp.current && <div className="h-[3px] w-full" style={{ background: "var(--accent)" }} />}

              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: "var(--text-1)" }}>{exp.company}</h3>
                    {!exp.roleHistory && (
                      <p className="font-mono text-xs font-medium mt-1 uppercase tracking-wide" style={{ color: "var(--accent-text)" }}>{exp.role}</p>
                    )}
                  </div>
                  {exp.current && (
                    <span className="flex items-center gap-1 font-mono text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1"
                      style={{ background: "rgba(34,197,94,0.10)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.30)" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Current
                    </span>
                  )}
                </div>

                {/* Meta spec rows */}
                <div className="mb-6">
                  <SpecRow label="Location" value={exp.location} dense />
                  <SpecRow label="Duration" value={exp.duration} dense />
                </div>

                {/* Bullets */}
                {exp.roleHistory ? (
                  <div className="space-y-7 mb-6">
                    {exp.roleHistory.map((r) => (
                      <div key={r.role}>
                        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                          <p className="text-base font-semibold" style={{ color: "var(--text-1)" }}>{r.role}</p>
                          <span className="font-mono text-[11px] font-semibold px-3 py-1 uppercase tracking-wide"
                            style={{ background: "var(--surface-alt)", color: "var(--text-2)", border: "1px solid var(--border)" }}
                          >
                            {r.duration}
                          </span>
                        </div>
                        <ul className="space-y-2.5">
                          {r.highlights.map((pt, k) => (
                            <li key={k} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
                              <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: exp.current ? "var(--accent)" : "var(--text-3)" }} />
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
                        <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "var(--text-3)" }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="font-mono text-[11px] px-2.5 py-1 font-medium"
                      style={{ background: "var(--surface-alt)", border: "1px solid var(--border)", color: "var(--text-2)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </CornerFrame>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experience;
