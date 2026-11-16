import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "./context/ThemeContext";
import { useLenis } from "./hooks/useLenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SectionDivider from "./components/ui/SectionDivider";

/* ── Fixed registration lines: a quiet, technical frame around the page ── */
const RegistrationLines = () => (
  <div className="fixed inset-0 -z-10 hidden lg:block pointer-events-none">
    <div className="max-w-7xl mx-auto h-full relative px-6">
      <div className="absolute top-0 bottom-0 left-6 w-px" style={{ background: "var(--border)" }} />
      <div className="absolute top-0 bottom-0 right-6 w-px" style={{ background: "var(--border)" }} />
    </div>
  </div>
);

/* ── Flat background: a blueprint grid, no blur, no glow ── */
const Background = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden" style={{ background: "var(--bg)" }}>
    <div className="bg-blueprint-grid absolute inset-0" />

    {/* Grain */}
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none",
      opacity: 0.45,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
      backgroundRepeat: "repeat", backgroundSize: "128px 128px",
    }} />
  </div>
);

const AppInner = () => {
  useLenis();
  return (
    <div className="overflow-x-hidden antialiased" style={{ color: "var(--text-1)" }}>
      <Background />
      <RegistrationLines />
      <Navbar />
      <div className="pt-14 xl:pt-16">
        <Hero />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Technologies />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Contact />
      </div>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppInner />
    <Analytics />
  </ThemeProvider>
);

export default App;
