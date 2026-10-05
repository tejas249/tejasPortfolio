import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { HiAcademicCap } from "react-icons/hi2";
import { FiMapPin, FiCalendar, FiAward } from "react-icons/fi";

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

const Education = () => {
  const { isDark } = useTheme();
  const accentText = isDark ? "#a78bfa" : "#5b21b6";
  const pillBg     = isDark ? "rgba(139,92,246,0.14)" : "rgba(109,40,217,0.10)";
  const pillBorder = isDark ? "rgba(139,92,246,0.28)" : "rgba(109,40,217,0.30)";
  const pillText   = isDark ? "#c4b5fd"               : "#4c1d95";

  return (
    <section id="education" className="py-24 px-4">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: accentText }}>
          Background
        </p>
        <h2 className="text-4xl font-bold tracking-tight" style={{ color: "var(--text-1)" }}>Education</h2>
        <div className="mt-4 mx-auto w-12 h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-transparent" />
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: "var(--surface)", border: "1px solid var(--border)",
            boxShadow: "var(--card-shadow)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-h)")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
        >
          {/* Top accent bar */}
          <div className="h-1 w-full" style={{ background: "linear-gradient(to right, #7c3aed, #2563eb, transparent)" }} />

          <div className="p-7">
            {/* Header row */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(139,92,246,0.14)", border: "1px solid rgba(139,92,246,0.28)" }}
                >
                  <HiAcademicCap size={22} style={{ color: accentText }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold leading-snug" style={{ color: "var(--text-1)" }}>
                    {education.institution}
                  </h3>
                  <p className="text-sm font-medium mt-0.5" style={{ color: accentText }}>
                    {education.degree}
                  </p>
                </div>
              </div>

              {/* Duration pill */}
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                style={{ background: pillBg, color: pillText, border: `1px solid ${pillBorder}` }}
              >
                {education.duration}
              </span>
            </div>

            {/* Meta row */}
            <div className="flex flex-wrap gap-4 mb-6">
              {[
                { icon: <FiMapPin size={13} />,  text: education.location },
                { icon: <FiAward  size={13} />,  text: `CGPA - ${education.cgpa}` },
                { icon: <FiCalendar size={13} />, text: education.duration },
              ].map(({ icon, text }) => (
                <span key={text} className="flex items-center gap-1.5 text-xs font-medium"
                  style={{ color: "var(--text-3)" }}
                >
                  {icon}{text}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="mb-5 h-px" style={{ background: "var(--border)" }} />

            {/* Highlights */}
            <ul className="space-y-2.5">
              {education.highlights.map((pt, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex gap-3 text-sm leading-relaxed"
                  style={{ color: "var(--text-2)" }}
                >
                  <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: accentText }} />
                  {pt}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
