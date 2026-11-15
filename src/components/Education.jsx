import React from "react";
import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi2";
import SectionHeading from "./ui/SectionHeading";
import CornerFrame from "./ui/CornerFrame";
import SpecRow from "./ui/SpecRow";
import { fadeUp } from "../lib/motion";

const education = {
  institution: "JSPM Rajarshi Shahu College of Engineering",
  location: "Tathwade, Pune, Maharashtra",
  degree: "B.Tech - Computer Science & Engineering",
  cgpa: "7.5 / 10",
  duration: "2021 – 2025",
  highlights: [
    "Studied core CS fundamentals: Data Structures, Algorithms, DBMS, OS, and Computer Networks.",
    "Built multiple full-stack projects applying modern web technologies across coursework.",
    "Participated in coding competitions and technical events throughout the program.",
  ],
};

const Education = () => (
  <section id="education" className="py-24 px-4">

    <SectionHeading index="05" title="Education" eyebrow="Background" />

    <div className="-mt-10 max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-14 items-start">

      {/* ── Left: statement ── */}
      <motion.div {...fadeUp(0)} className="flex flex-col gap-4">
        <div
          className="w-12 h-12 flex items-center justify-center"
          style={{ background: "var(--accent-soft-bg)", border: "1px solid var(--accent-soft-br)" }}
        >
          <HiAcademicCap size={24} style={{ color: "var(--accent-text)" }} />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold leading-snug" style={{ color: "var(--text-1)" }}>
          {education.institution}
        </h3>
        <p className="font-mono text-xs font-medium uppercase tracking-wide" style={{ color: "var(--accent-text)" }}>
          {education.degree}
        </p>
      </motion.div>

      {/* ── Right: spec panel ── */}
      <motion.div {...fadeUp(0.1)}>
        <CornerFrame
          className="p-6"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <div className="mb-6">
            <SpecRow label="Location" value={education.location} />
            <SpecRow label="CGPA"     value={education.cgpa} valueColor="var(--accent-text)" />
            <SpecRow label="Duration" value={education.duration} />
          </div>

          <ul className="space-y-2.5">
            {education.highlights.map((pt, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex gap-3 text-sm leading-relaxed"
                style={{ color: "var(--text-2)" }}
              >
                <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                {pt}
              </motion.li>
            ))}
          </ul>
        </CornerFrame>
      </motion.div>
    </div>
  </section>
);

export default Education;
