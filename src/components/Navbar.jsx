import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiBars3, HiMoon, HiSun, HiXMark } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { CONTACT } from "../constants";
import { useTheme } from "../context/ThemeContext";

const NAV_LINKS = [
  { label: "Home",       href: "/",                            match: (p) => p === "/" },
  { label: "Visitzee",   href: "/visitzee",                    match: (p) => p.startsWith("/visitzee") },
  { label: "Experience", href: "/experience/katonic-ai",       match: (p) => p.startsWith("/experience") },
];

const SOCIAL_LINKS = [
  { icon: <FaLinkedin size={15} />, href: "https://www.linkedin.com/in/tejas249/", label: "LinkedIn" },
  { icon: <FaGithub   size={15} />, href: "https://github.com/tejas249",          label: "GitHub"   },
];

// Internal paths go through the router; external links stay plain anchors.
const NavA = ({ href, ...p }) => (href && href.startsWith("/") ? <Link to={href} {...p} /> : <a href={href} {...p} />);

const iconBtn =
  "w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200";

const Navbar = () => {
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 1280) setMenuOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  const go = (label) => {
        setMenuOpen(false);
  };

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto max-w-6xl mx-auto rounded-full transition-all duration-300"
        style={{
          background: scrolled || menuOpen ? "var(--nav-bg)" : "transparent",
          border: `1px solid ${scrolled || menuOpen ? "var(--nav-border)" : "transparent"}`,
          backdropFilter: scrolled ? "blur(16px) saturate(140%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px) saturate(140%)" : "none",
        }}
      >
        <div className="flex items-center justify-between h-14 pl-5 pr-2">
          <NavA href="/" onClick={() => go("About")} className="flex items-center gap-2.5 shrink-0" style={{ color: "var(--text-1)" }}>
            <span className="w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-bold text-white" style={{ background: "var(--accent)" }}>
              T
            </span>
            <span className="text-sm font-semibold tracking-tight">Tejas Kamble</span>
          </NavA>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {NAV_LINKS.map((l) => {
              const isActive = l.match(pathname);
              return (
                <NavA
                  key={l.label}
                  href={l.href}
                  onClick={() => go(l.label)}
                  className="px-3.5 py-1.5 rounded-full text-sm transition-colors duration-200"
                  style={{
                    color: isActive ? "var(--text-1)" : "var(--text-2)",
                    background: isActive ? "var(--surface-alt)" : "transparent",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-1)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = isActive ? "var(--text-1)" : "var(--text-2)"; }}
                >
                  {l.label}
                </NavA>
              );
            })}
          </nav>

          <div className="hidden xl:flex items-center gap-1.5">
            {SOCIAL_LINKS.map(({ icon, href, label }) => (
              <NavA key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className={iconBtn} style={{ color: "var(--text-2)" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--surface-alt)"; e.currentTarget.style.color = "var(--text-1)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--text-2)"; }}
              >
                {icon}
              </NavA>
            ))}
            <button onClick={toggle} aria-label="Toggle theme" className={iconBtn} style={{ color: "var(--text-2)", background: "var(--surface-alt)" }}>
              {isDark ? <HiSun size={16} /> : <HiMoon size={16} />}
            </button>
            <NavA href={`mailto:${CONTACT.email}`} onClick={() => go("Contact")} className="btn btn-primary ml-1.5 !py-2 !px-4 !text-[13px]">
              Get in touch
            </NavA>
          </div>

          {/* Mobile controls */}
          <div className="flex xl:hidden items-center gap-1.5">
            <button onClick={toggle} aria-label="Toggle theme" className={iconBtn} style={{ color: "var(--text-2)", background: "var(--surface-alt)" }}>
              {isDark ? <HiSun size={16} /> : <HiMoon size={16} />}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className={iconBtn}
              style={{ color: "var(--text-1)", background: "var(--surface-alt)" }}
            >
              {menuOpen ? <HiXMark size={18} /> : <HiBars3 size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="xl:hidden overflow-hidden"
            >
              <div className="px-3 pb-3 pt-1 flex flex-col">
                {NAV_LINKS.map((l) => (
                  <NavA key={l.label} href={l.href} onClick={() => go(l.label)}
                    className="px-4 py-3 rounded-2xl text-base"
                    style={{ color: l.match(pathname) ? "var(--text-1)" : "var(--text-2)" }}
                  >
                    {l.label}
                  </NavA>
                ))}
                <div className="flex items-center justify-between px-4 pt-4 mt-2" style={{ borderTop: "1px solid var(--border)" }}>
                  <div className="flex items-center gap-1.5">
                    {SOCIAL_LINKS.map(({ icon, href, label }) => (
                      <NavA key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                        className={iconBtn} style={{ color: "var(--text-2)", background: "var(--surface-alt)" }}>
                        {icon}
                      </NavA>
                    ))}
                  </div>
                  <span className="font-mono text-xs" style={{ color: "var(--text-3)" }}>Pune, IN</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};

export default Navbar;
