import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiBars3, HiMoon, HiSun, HiXMark } from "react-icons/hi2";
import { useTheme } from "../context/ThemeContext";

const NAV_LINKS = [
  { label: "About",      href: "#about"      },
  { label: "Experience", href: "#experience" },
  { label: "Education",  href: "#education"  },
  { label: "Skills",     href: "#skills"     },
  { label: "Projects",   href: "#projects"   },
  { label: "Contact",    href: "#contact"    },
];

const SOCIAL_LINKS = [
  { icon: <FaLinkedin size={14} />, href: "https://www.linkedin.com/in/tejas249/", label: "LinkedIn"  },
  { icon: <FaGithub   size={14} />, href: "https://github.com/tejas249",          label: "GitHub"    },
];

const Navbar = () => {
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled]   = useState(false);
  const [active,   setActive]     = useState("");
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    const fn = () => {
      if (window.innerWidth >= 1280) setMenuOpen(false);
    };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  const navBg = scrolled
    ? "var(--nav-bg)"
    : isDark ? "rgba(15,15,20,0.45)" : "rgba(255,255,255,0.70)";
  const navShadow = scrolled
    ? isDark
      ? "0 8px 32px rgba(0,0,0,0.4), 0 0 0 0.5px rgba(255,255,255,0.05)"
      : "0 8px 32px rgba(15,23,42,0.12), 0 0 0 1px rgba(15,23,42,0.07)"
    : isDark
      ? "0 4px 24px rgba(0,0,0,0.2)"
      : "0 4px 24px rgba(15,23,42,0.08), 0 0 0 1px rgba(15,23,42,0.06)";

  const navStyle = {
    backdropFilter:       "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    background:           navBg,
    border:               "1px solid var(--nav-border)",
    boxShadow:            navShadow,
    transition:           "background 0.3s, box-shadow 0.3s",
  };

  const handleNavClick = (label) => {
    setActive(label);
    setMenuOpen(false);
  };

  const linkStyle = (isActive, mobile = false) => ({
    color:      isActive ? "var(--text-1)" : "var(--text-2)",
    background: isActive ? (isDark ? "rgba(139,92,246,0.22)" : "rgba(109,40,217,0.10)") : "transparent",
    ...(mobile ? { width: "100%", textAlign: "left" } : {}),
  });

  const onLinkEnter = (e, isActive) => {
    if (!isActive) {
      e.currentTarget.style.color      = "var(--text-1)";
      e.currentTarget.style.background = "var(--surface-alt)";
    }
  };

  const onLinkLeave = (e, isActive) => {
    if (!isActive) {
      e.currentTarget.style.color      = "var(--text-2)";
      e.currentTarget.style.background = "transparent";
    }
  };

  const onIconEnter = (e) => {
    e.currentTarget.style.color      = "var(--text-1)";
    e.currentTarget.style.background = "var(--surface-alt)";
  };

  const onIconLeave = (e, defaultColor = "var(--text-3)") => {
    e.currentTarget.style.color      = defaultColor;
    e.currentTarget.style.background = "transparent";
  };

  const NavLink = ({ label, href, mobile = false }) => {
    const isActive = active === label;
    return (
      <a
        href={href}
        onClick={() => handleNavClick(label)}
        className={`font-medium rounded-full transition-all duration-200 ${
          mobile ? "px-3 py-2.5 text-base w-full" : "px-4 py-1.5 text-sm"
        }`}
        style={linkStyle(isActive, mobile)}
        onMouseEnter={(e) => onLinkEnter(e, isActive)}
        onMouseLeave={(e) => onLinkLeave(e, isActive)}
      >
        {label}
      </a>
    );
  };

  const SocialIcons = ({ className = "" }) => (
    <>
      {SOCIAL_LINKS.map(({ icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`p-1.5 rounded-full transition-all duration-200 ${className}`}
          style={{ color: "var(--text-3)" }}
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
      className="p-1.5 rounded-full transition-all duration-200 shrink-0"
      style={{ color: "var(--text-2)" }}
      onMouseEnter={(e) => onIconEnter(e)}
      onMouseLeave={(e) => onIconLeave(e, "var(--text-2)")}
    >
      {isDark
        ? <HiSun  size={15} className="text-yellow-300" />
        : <HiMoon size={15} className="text-indigo-400"  />
      }
    </button>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-3 sm:pt-5 sm:px-4">
      <nav
        style={navStyle}
        className="w-full max-w-6xl xl:w-auto flex flex-col xl:flex-row xl:items-center gap-1 rounded-2xl xl:rounded-full px-3 py-2"
      >
        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <NavLink key={label} label={label} href={href} />
          ))}

          <div className="mx-1 h-4 w-px shrink-0" style={{ background: "var(--border)" }} />
          <SocialIcons />
          <div className="mx-1 h-4 w-px shrink-0" style={{ background: "var(--border)" }} />
          <ThemeToggle />
        </div>

        {/* Mobile header bar */}
        <div className="flex xl:hidden items-center justify-between w-full min-w-0 gap-2">
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-semibold truncate"
            style={{ color: "var(--text-1)" }}
          >
            Tejas
          </a>

          <div className="flex items-center gap-0.5 shrink-0">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="p-1.5 rounded-full transition-all duration-200"
              style={{ color: "var(--text-2)" }}
              onMouseEnter={onIconEnter}
              onMouseLeave={(e) => onIconLeave(e, "var(--text-2)")}
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
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="xl:hidden overflow-hidden w-full"
            >
              <div
                className="pt-3 pb-1 flex flex-col gap-0.5 border-t mt-1"
                style={{ borderColor: "var(--border)" }}
              >
                {NAV_LINKS.map(({ label, href }) => (
                  <NavLink key={label} label={label} href={href} mobile />
                ))}

                <div
                  className="flex items-center gap-1 pt-2 mt-1 border-t"
                  style={{ borderColor: "var(--border)" }}
                >
                  <SocialIcons />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
