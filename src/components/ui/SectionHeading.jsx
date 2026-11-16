import React from "react";
import { motion } from "framer-motion";
import SplitText from "./SplitText";
import { fadeUp } from "../../lib/motion";

/**
 * Section header: a small numbered eyebrow, then a large title.
 * The title is the only display type on the page, so the section reads at a glance.
 */
const SectionHeading = ({ index, title, eyebrow, className = "" }) => (
  <div className={`mb-12 sm:mb-16 max-w-3xl ${className}`}>
    <motion.p {...fadeUp(0)} className="eyebrow mb-4 flex items-center gap-2.5">
      <span style={{ color: "var(--accent-text)" }}>{index}</span>
      <span className="w-6 h-px" style={{ background: "var(--border-h)" }} />
      <span className="uppercase tracking-[0.12em]">{eyebrow}</span>
    </motion.p>
    <SplitText
      as="h2"
      text={title}
      className="text-4xl sm:text-6xl font-bold tracking-[-0.03em] leading-[1.02]"
      style={{ color: "var(--text-1)" }}
    />
  </div>
);

export default SectionHeading;
