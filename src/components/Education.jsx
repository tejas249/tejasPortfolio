import React from "react";
import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi2";
import SectionHeading from "./ui/SectionHeading";
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
  <section id="education" className="px-5 sm:px-6 py-24 sm:py-28">
    <div className="max-w-5xl mx-auto">
      <SectionHeading index="05" title="Education" eyebrow="Background" />

      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 items-stretch">
        <motion.div {...fadeUp(0)} className="surface p-7 sm:p-9 flex flex-col gap-5 min-w-0">
          <span className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "var(--accent-soft-bg)" }}>
            <HiAcademicCap size={22} style={{ color: "var(--accent-text)" }} />
          </span>
          <div>
            <h3 className="text-2xl font-semibold leading-snug tracking-tight" style={{ color: "var(--text-1)" }}>
              {education.institution}
            </h3>
            <p className="text-sm mt-2" style={{ color: "var(--accent-text)" }}>{education.degree}</p>
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="surface p-7 sm:p-9 min-w-0">
          <div className="mb-6">
            <SpecRow label="Location" value={education.location} />
            <SpecRow label="CGPA" value={education.cgpa} valueColor="var(--accent-text)" />
            <SpecRow label="Duration" value={education.duration} />
          </div>

          <ul className="space-y-3">
            {education.highlights.map((pt, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex gap-3 text-[15px] leading-relaxed"
                style={{ color: "var(--text-2)" }}
              >
                <span className="mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                {pt}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Education;
