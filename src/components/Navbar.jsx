import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiBars3, HiMoon, HiSun, HiXMark } from "react-icons/hi2";
import { useTheme } from "../context/ThemeContext";

const NAV_LINKS = [
  { n: "01", label: "About",      href: "#about"      },
  { n: "02", label: "Visitzee",   href: "#visitzee"   },
  { n: "03", label: "Experience", href: "#experience" },
  { n: "04", label: "Skills",     href: "#skills"     },
  { n: "05", label: "Education",  href: "#education"  },
  { n: "06", label: "Contact",    href: "#contact"    },
];

const SOCIAL_LINKS = [
  { icon: <FaLinkedin size={14} />, href: "https://www.linkedin.com/in/tejas249/", label: "LinkedIn"  },
  { icon: <FaGithub   size={14} />, href: "https://github.com/tejas249",          label: "GitHub"    },
];

const useClock = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000 * 15);
    return () => clearInterval(id);
  }, []);
  return time;
};

const Navbar = () => {
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled]   = useState(false);
  const [active,   setActive]     = useState("");
  const [menuOpen, setMenuOpen]   = useState(false);
  const time = useClock();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
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

  const handleNavClick = (label) => {
    setActive(label);
    setMenuOpen(false);
  };

  const onIconEnter = (e) => {
    e.currentTarget.style.color = "var(--text-1)";
    e.currentTarget.style.borderColor = "var(--text-1)";
  };
  const onIconLeave = (e, defaultColor = "var(--text-3)") => {
    e.currentTarget.style.color = defaultColor;
    e.currentTarget.style.borderColor = "var(--border)";
  };

  const NavLink = ({ n, label, href, mobile = false }) => {
    const isActive = active === label;
    return (
      <a
        href={href}
        onClick={() => handleNavClick(label)}
 className={`font-mono flex items-center gap-2 transition-all duration-150 border-b ${
          mobile ? "py-3 text-sm w-full" : "h-16 text-[11px]"
        }`}
        style={{
          color: isActive ? "var(--text-1)" : "var(--text-3)",
          borderBottomColor: isActive ? "var(--accent)" : "transparent",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-1)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = isActive ? "var(--text-1)" : "var(--text-3)"; }}
      >
        <span style={{ color: isActive ? "var(--accent-text)" : "var(--text-3)" }}>{n}</span>
        <span className="uppercase tracking-wider">{label}</span>
      </a>
    );
  };

  const SocialIcons = () => (
    <>
      {SOCIAL_LINKS.map(({ icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
 className="w-8 h-8 flex items-center justify-center border transition-all duration-150"
          style={{ color: "var(--text-3)", borderColor: "var(--border)" }}
          onMouseEnter={onIconEnter}
          onMouseLeave={onIconLeave}
        >
          {icon}
        </a>
      ))}
    </>
  );

  const ThemeToggle = () => (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
 className="w-8 h-8 flex items-center justify-center border transition-all duration-150 shrink-0"
      style={{ color: "var(--text-3)", borderColor: "var(--border)" }}
      onMouseEnter={onIconEnter}
      onMouseLeave={(e) => onIconLeave(e)}
    >
      {isDark ? <HiSun size={14} /> : <HiMoon size={14} />}
    </button>
  );

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        borderBottom: "1px solid var(--border)",
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        transition: "background 0.2s",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        <a href="#about" onClick={() => setMenuOpen(false)} className="font-mono text-sm font-bold shrink-0" style={{ color: "var(--text-1)" }}>
          Tejas<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {NAV_LINKS.map((link) => <NavLink key={link.label} {...link} />)}
        </nav>

        <div className="hidden xl:flex items-center gap-3 h-16">
          <span className="font-mono text-[11px] flex items-center gap-1.5" style={{ color: "var(--text-3)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
            {time} IST
          </span>
          <div className="w-px h-5" style={{ background: "var(--border)" }} />
          <SocialIcons />
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex xl:hidden items-center gap-2 h-14">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
 className="w-8 h-8 flex items-center justify-center border transition-all duration-150"
            style={{ color: "var(--text-2)", borderColor: "var(--border)" }}
          >
            {menuOpen ? <HiXMark size={16} /> : <HiBars3 size={16} />}
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
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="xl:hidden overflow-hidden"
            style={{ borderTop: "1px solid var(--border)", background: "var(--bg)" }}
          >
            <div className="px-6 flex flex-col divide-y" style={{ borderColor: "var(--border)" }}>
              {NAV_LINKS.map((link) => <NavLink key={link.label} {...link} mobile />)}
            </div>
            <div className="flex items-center justify-between px-6 py-4" style={{ borderTop: "1px solid var(--border)" }}>
              <span className="font-mono text-[11px] flex items-center gap-1.5" style={{ color: "var(--text-3)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
                Pune, IN &middot; {time}
              </span>
              <div className="flex items-center gap-2">
                <SocialIcons />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
