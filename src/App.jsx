import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "./context/ThemeContext";
import { useLenis } from "./hooks/useLenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VisitzeePage from "./pages/VisitzeePage";
import BaroxyPage from "./pages/BaroxyPage";
import ExperiencePage from "./pages/ExperiencePage";

/* Fixed ambient backdrop: a soft light and a grain, nothing that competes with content */
const Backdrop = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" style={{ background: "var(--bg)" }}>
    <div className="page-glow absolute inset-0" />
    <div
      style={{
        position: "absolute", inset: 0, opacity: 0.35,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        backgroundSize: "128px 128px",
      }}
    />
  </div>
);

/* New page -> top. Same-page or cross-page hash -> that section. */
const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
};

const Home = () => <Hero />;

const AppInner = () => {
  useLenis();
  const isHome = useLocation().pathname === "/";
  return (
    <div className="overflow-x-hidden antialiased" style={{ color: "var(--text-1)" }}>
      <Backdrop />
      <ScrollManager />
      {/* The landing page is a single bento screen with no header; sub-pages keep it */}
      {!isHome && <Navbar />}
      <main className={isHome ? "pt-5" : "pt-24 xl:pt-28"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visitzee" element={<VisitzeePage />} />
          <Route path="/baroxy" element={<BaroxyPage />} />
          <Route path="/experience/:slug" element={<ExperiencePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
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
