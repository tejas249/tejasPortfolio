import React, { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

// Counts from 0 to `to` once it scrolls into view. Suffix stays static.
const CountUp = ({ to, suffix = "", duration = 1.6 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, to, duration]);
  return <span ref={ref} className="tabular-nums">{n.toLocaleString("en-US")}{suffix}</span>;
};

export default CountUp;
