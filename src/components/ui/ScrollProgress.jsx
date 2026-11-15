import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// Thin accent-colored line pinned to the top of the viewport, tracking scroll progress.
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
      style={{ scaleX, background: "var(--accent)" }}
    />
  );
};

export default ScrollProgress;
