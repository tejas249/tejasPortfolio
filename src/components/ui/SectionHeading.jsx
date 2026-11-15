import React from "react";
import { motion } from "framer-motion";
import SplitText from "./SplitText";
import { fadeUp } from "../../lib/motion";

/**
 * Consistent numbered section header: 00N / 00T — EYEBROW, then a big split-reveal title.
 */
const SectionHeading = ({ index, total = "06", title, eyebrow, align = "left" }) => {
  const isCenter = align === "center";
  return (
    <div className={`mb-14 sm:mb-16 ${isCenter ? "text-center" : ""}`}>
      <motion.div
        {...fadeUp(0)}
        className={`flex items-center gap-3 mb-5 ${isCenter ? "justify-center" : ""}`}
      >
        <span className="font-mono text-xs tracking-widest shrink-0" style={{ color: "var(--accent-text)" }}>
          {index} / {total}
        </span>
        {!isCenter && <span className="h-px flex-1" style={{ background: "var(--border)" }} />}
        {eyebrow && (
          <span
            className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] shrink-0"
            style={{ color: "var(--text-3)" }}
          >
            {eyebrow}
          </span>
        )}
      </motion.div>
      <SplitText
        as="h2"
        text={title}
        className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter"
        style={{ color: "var(--text-1)" }}
      />
    </div>
  );
};

export default SectionHeading;
