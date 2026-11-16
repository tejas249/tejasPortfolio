import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion";

// A bento cell. Tracks the pointer so the tile can light up under it.
const BentoTile = ({ className = "", delay = 0, children, as = "div", ...rest }) => {
  const Tag = motion[as] || motion.div;
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <Tag {...fadeUp(delay, 20)} onMouseMove={onMove} className={`bento ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

export default BentoTile;
