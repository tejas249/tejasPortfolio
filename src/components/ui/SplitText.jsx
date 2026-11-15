import React from "react";
import { motion } from "framer-motion";
import { EASE } from "../../lib/motion";
import { useInView } from "../../hooks/useInView";

/**
 * Word-by-word mask reveal, used for headlines and section titles.
 * Each word sits in an overflow-hidden box so it wipes up into view.
 * Driven by a single IntersectionObserver on the wrapper (not per-word
 * whileInView), so it resolves reliably for above-the-fold content too.
 */
const SplitText = ({
  text,
  as: As = "span",
  className = "",
  style,
  delay = 0,
  stagger = 0.045,
  once = true,
}) => {
  const [ref, inView] = useInView({ once, margin: "-40px" });
  const words = text.split(" ");

  return (
    <As ref={ref} className={className} style={style}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
        >
          <motion.span
            style={{ display: "inline-block", willChange: "transform" }}
            initial={false}
            animate={{ y: inView ? "0%" : "115%" }}
            transition={{ duration: 0.75, ease: EASE, delay: inView ? delay + i * stagger : 0 }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </As>
  );
};

export default SplitText;
