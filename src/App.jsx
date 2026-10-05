import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

/* ── Animated blob ─────────────────────────────────── */
/* The radial gradients already fade to transparent, so no CSS blur() filter is needed.
   A large animated blur() forces an expensive repaint every frame. */
const Blob = ({ style, yRange, duration, delay = 0 }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      style={{ position: "absolute", borderRadius: "50%", willChange: "transform", ...style }}
      animate={reduce ? undefined : { y: yRange }}
      transition={{ duration, delay, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
    />
  );
};

const Background = () => {
  const { isDark } = useTheme();

  const dot = isDark
    ? "radial-gradient(circle, rgba(255,255,255,0.13) 1px, transparent 1px)"
    : "radial-gradient(circle, rgba(15,23,42,0.10) 1px, transparent 1px)";

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ background: "var(--bg)" }}>

      {/* ── Animated blobs ── */}
      <Blob
        yRange={[0, -30, 0]}
        duration={11}
        style={{
          top: "-10%", left: "50%", x: "-50%",
          width: "75vw", height: "60vh",
          background: isDark
            ? "radial-gradient(ellipse at center, rgba(109,40,217,0.18) 0%, transparent 70%)"
            : "radial-gradient(ellipse at center, rgba(99,60,220,0.28) 0%, transparent 65%)",
        }}
      />
      <Blob
        yRange={[0, 28, 0]}
        duration={13}
        delay={1.5}
        style={{
          bottom: "12%", left: "-5%",
          width: "45vw", height: "45vh",
          background: isDark
            ? "radial-gradient(ellipse at center, rgba(20,184,166,0.12) 0%, transparent 70%)"
            : "radial-gradient(ellipse at center, rgba(6,182,212,0.26) 0%, transparent 65%)",
        }}
      />
      <Blob
        yRange={[0, -22, 0]}
        duration={9}
        delay={3}
        style={{
          bottom: "0%", right: "-5%",
          width: "45vw", height: "45vh",
          background: isDark
            ? "radial-gradient(ellipse at center, rgba(168,85,247,0.12) 0%, transparent 70%)"
            : "radial-gradient(ellipse at center, rgba(168,85,247,0.24) 0%, transparent 65%)",
        }}
      />
      {!isDark && (
        <Blob
          yRange={[0, -18, 0]}
          duration={14}
          delay={2}
          style={{
            top: "10%", right: "5%",
            width: "30vw", height: "30vh",
            background: "radial-gradient(ellipse at center, rgba(251,113,133,0.16) 0%, transparent 65%)",
          }}
        />
      )}

      {/* ── Dot grid ── */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: dot,
        backgroundSize: "32px 32px",
        opacity: isDark ? 1 : 0.9,
      }} />

      {/* ── Grain ── */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        opacity: isDark ? 0.55 : 0.35,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat", backgroundSize: "128px 128px",
      }} />
    </div>
  );
};

const AppInner = () => (
  <div className="overflow-x-hidden antialiased" style={{ color: "var(--text-1)" }}>
    <Background />
    <Navbar />
    <div className="container mx-auto px-8 pt-24">
      <Hero />
      <Experience />
      <Education />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  </div>
);

const App = () => (
  <ThemeProvider>
    <AppInner />
    <Analytics />
  </ThemeProvider>
);

export default App;
