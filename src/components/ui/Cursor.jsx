import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Custom dot cursor that expands into a ring over interactive elements.
// Only mounts on fine-pointer (mouse) devices; never touches touch/mobile.
const Cursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;

    setEnabled(true);
    document.documentElement.classList.add("has-cursor");

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const over = (e) => {
      if (e.target.closest?.("a, button, [data-cursor-hover]")) setHovering(true);
    };
    const out = (e) => {
      if (e.target.closest?.("a, button, [data-cursor-hover]")) setHovering(false);
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);

    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, []);

  if (!enabled) return null;

  const size = hovering ? 34 : 8;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100] rounded-full"
      animate={{
        x: pos.x - size / 2,
        y: pos.y - size / 2,
        width: size,
        height: size,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 38, mass: 0.4 }}
      style={{
        border: hovering ? "1.5px solid var(--accent)" : "none",
        background: hovering ? "transparent" : "var(--accent)",
      }}
    />
  );
};

export default Cursor;
