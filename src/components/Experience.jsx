import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
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

const Experience = () => {
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section id="experience" className="px-5 sm:px-6 py-24 sm:py-28">
      <div className="max-w-4xl mx-auto">
        <SectionHeading index="03" title="Experience" eyebrow="Career" />

        {/* Company switcher */}
        <div className="flex flex-wrap gap-1 p-1 rounded-full mb-6 w-fit max-w-full" style={{ background: "var(--surface-alt)" }}>
          {experiences.map((e, i) => (
            <button
              key={e.company}
              onClick={() => setActive(i)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200"
              style={{
                background: i === active ? "var(--bg-raised)" : "transparent",
                color: i === active ? "var(--text-1)" : "var(--text-3)",
                boxShadow: i === active ? "0 1px 2px rgba(0,0,0,0.25)" : "none",
              }}
            >
              {e.current && <span className="w-1.5 h-1.5 rounded-full animate-pulse shrink-0" style={{ background: "var(--ok)" }} />}
              {e.company}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="surface p-6 sm:p-9"
          >
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: "var(--text-1)" }}>{exp.company}</h3>
                {!exp.roleHistory && (
                  <p className="text-sm mt-1" style={{ color: "var(--accent-text)" }}>{exp.role}</p>
                )}
              </div>
              {exp.current && (
                <span className="tag" style={{ color: "var(--ok)", borderColor: "rgba(74,222,128,0.3)", background: "rgba(74,222,128,0.08)" }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--ok)" }} />
                  Current
                </span>
              )}
            </div>

            <div className="mb-7">
              <SpecRow label="Location" value={exp.location} dense />
              <SpecRow label="Duration" value={exp.duration} dense />
            </div>

            {/* Bullets */}
            {exp.roleHistory ? (
              <div className="space-y-9 mb-8">
                {exp.roleHistory.map((r) => (
                  <div key={r.role}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                      <p className="text-base font-semibold" style={{ color: "var(--text-1)" }}>{r.role}</p>
                      <span className="tag">{r.duration}</span>
                    </div>
                    <ul className="space-y-3">
                      {r.highlights.map((pt, k) => (
                        <li key={k} className="flex gap-3 text-[15px] leading-relaxed" style={{ color: "var(--text-2)" }}>
                          <span className="mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: exp.current ? "var(--accent)" : "var(--text-3)" }} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="space-y-3 mb-8">
                {exp.highlights.map((pt, j) => (
                  <li key={j} className="flex gap-3 text-[15px] leading-relaxed" style={{ color: "var(--text-2)" }}>
                    <span className="mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "var(--text-3)" }} />
                    {pt}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experience;
