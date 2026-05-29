import React, { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiMoon, HiSun } from "react-icons/hi2";
import { useTheme } from "../context/ThemeContext";

const NAV_LINKS = [
  { label: "About",      href: "#about"      },
  { label: "Experience", href: "#experience" },
  { label: "Education",  href: "#education"  },
  { label: "Skills",     href: "#skills"     },
  { label: "Projects",   href: "#projects"   },
  { label: "Contact",    href: "#contact"    },
];

const Navbar = () => {
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled]   = useState(false);
  const [active,   setActive]     = useState("");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
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

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4">
      <nav
        style={{
          backdropFilter:       "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          background:           navBg,
          border:               "1px solid var(--nav-border)",
          boxShadow:            navShadow,
          transition:           "background 0.3s, box-shadow 0.3s",
        }}
        className="flex items-center gap-1 rounded-full px-3 py-2"
      >
        {/* Nav links */}
        {NAV_LINKS.map(({ label, href }) => {
          const isActive = active === label;
          return (
            <a
              key={label}
              href={href}
              onClick={() => setActive(label)}
              className="px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200"
              style={{
                color:      isActive ? "var(--text-1)" : "var(--text-2)",
                background: isActive ? (isDark ? "rgba(139,92,246,0.22)" : "rgba(109,40,217,0.10)") : "transparent",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color      = "var(--text-1)";
                  e.currentTarget.style.background = "var(--surface-alt)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color      = "var(--text-2)";
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              {label}
            </a>
          );
        })}

        {/* Divider */}
        <div className="mx-1 h-4 w-px" style={{ background: "var(--border)" }} />

        {/* Social icons */}
        {[
          { icon: <FaLinkedin size={14} />, href: "https://www.linkedin.com/in/tejas249/", label: "LinkedIn"   },
          { icon: <FaGithub   size={14} />, href: "https://github.com/tejas249",          label: "GitHub"     },
          { icon: <FaInstagram size={14}/>, href: "https://www.instagram.com/tejas249/",  label: "Instagram"  },
        ].map(({ icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-1.5 rounded-full transition-all duration-200"
            style={{ color: "var(--text-3)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color      = "var(--text-1)";
              e.currentTarget.style.background = "var(--surface-alt)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color      = "var(--text-3)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            {icon}
          </a>
        ))}

        {/* Divider */}
        <div className="mx-1 h-4 w-px" style={{ background: "var(--border)" }} />

        {/* Theme toggle */}
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="p-1.5 rounded-full transition-all duration-200"
          style={{ color: "var(--text-2)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color      = "var(--text-1)";
            e.currentTarget.style.background = "var(--surface-alt)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color      = "var(--text-2)";
            e.currentTarget.style.background = "transparent";
          }}
        >
          {isDark
            ? <HiSun  size={15} className="text-yellow-300" />
            : <HiMoon size={15} className="text-indigo-400"  />
          }
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
