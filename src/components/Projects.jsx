import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  FiLayers, FiCreditCard, FiMessageCircle, FiMail, FiShield, FiLock,
  FiCalendar, FiServer, FiGitBranch, FiCheckCircle,
} from "react-icons/fi";
import { VISITZEE } from "../constants";
import { useTheme } from "../context/ThemeContext";

const FEATURE_ICONS = {
  layers: FiLayers, card: FiCreditCard, message: FiMessageCircle, mail: FiMail, shield: FiShield,
  lock: FiLock, calendar: FiCalendar, server: FiServer, git: FiGitBranch, check: FiCheckCircle,
};

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

const card = {
  background: "var(--surface)",
  border: "1px solid var(--border)",
  boxShadow: "var(--card-shadow)",
};

const SubHeading = ({ eyebrow, title, accentText }) => (
  <motion.div {...fade()} className="mb-6">
    <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: accentText }}>{eyebrow}</p>
    <h3 className="text-2xl font-bold tracking-tight" style={{ color: "var(--text-1)" }}>{title}</h3>
  </motion.div>
);

/* ── Screenshot gallery ──────────────────────────── */
const Gallery = ({ gallery, accentText }) => {
  const { isDark } = useTheme();
  const [group, setGroup]  = useState(0);
  const [active, setActive] = useState(0);
  const current = gallery[group];
  const screen  = current.screens[active];
  const many    = current.screens.length > 1;
  const step = (dir) => setActive((a) => (a + dir + current.screens.length) % current.screens.length);

  return (
    <motion.div {...fade(0.1)} className="rounded-2xl p-4 sm:p-6" style={card}>
      <div className="flex flex-wrap gap-2 mb-4">
        {gallery.map((g, i) => (
          <button
            key={g.key}
            onClick={() => { setGroup(i); setActive(0); }}
            className="text-xs font-semibold px-3.5 py-1.5 rounded-full"
            style={{
              background: i === group ? (isDark ? "rgba(139,92,246,0.25)" : "rgba(109,40,217,0.14)") : "var(--surface)",
              border: `1px solid ${i === group ? accentText : "var(--border)"}`,
              color: i === group ? (isDark ? "#ede9fe" : "#3b0764") : "var(--text-2)",
            }}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div className={`relative rounded-xl overflow-hidden flex items-center justify-center ${current.kind === "phone" ? "h-[460px]" : "aspect-[16/10]"}`}
        style={{ border: "1px solid var(--border)", background: "var(--surface-alt)" }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={`${group}-${active}`}
            src={screen.src}
            alt={`Visitzee: ${screen.title}`}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            decoding="async"
            className={current.kind === "phone" ? "h-full w-auto py-3" : "w-full h-full object-cover object-top"}
            style={current.kind === "phone" ? { borderRadius: 18 } : undefined}
          />
        </AnimatePresence>
        {many && [
          { dir: -1, side: "left-2",  icon: <FaChevronLeft size={12} />,  label: "Previous screen" },
          { dir:  1, side: "right-2", icon: <FaChevronRight size={12} />, label: "Next screen" },
        ].map(({ dir, side, icon, label }) => (
          <button key={label} onClick={() => step(dir)} aria-label={label}
            className={`absolute ${side} top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center`}
            style={{ background: "rgba(10,10,10,0.7)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}>
            {icon}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mt-4">
        <div className="md:max-w-md">
          <p className="text-sm font-semibold" style={{ color: "var(--text-1)" }}>
            {screen.title}
            {many && (
              <span className="ml-2 text-xs font-medium" style={{ color: "var(--text-3)" }}>
                {active + 1} / {current.screens.length}
              </span>
            )}
          </p>
          <p className="text-xs leading-relaxed mt-0.5" style={{ color: "var(--text-3)" }}>{screen.body}</p>
        </div>
        {many && (
          <div className="flex gap-2 overflow-x-auto pb-1">
            {current.screens.map((sc, i) => (
              <button
                key={sc.src}
                onClick={() => setActive(i)}
                aria-label={`Show ${sc.title}`}
                className="shrink-0 w-14 h-10 rounded-md overflow-hidden flex items-center justify-center"
                style={{
                  border: `2px solid ${i === active ? accentText : "var(--border)"}`,
                  opacity: i === active ? 1 : 0.6,
                  background: "var(--surface-alt)",
                }}
              >
                <img src={sc.src} alt="" loading="lazy" decoding="async" className={current.kind === "phone" ? "h-full w-auto" : "w-full h-full object-cover object-top"} />
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

/* ── Reusable link button ────────────────────────── */
const LinkBtn = ({ href, active, icon, label, primary = false, small = false }) => {
  const { isDark } = useTheme();
  const [hovered, setHovered] = useState(false);
  const px = small ? "10px" : "14px";
  const py = small ? "5px"  : "7px";

  /* Secondary button -much more visible in dark mode */
  const secBorder = isDark
    ? `1px solid rgba(255,255,255,${hovered && active ? "0.28" : "0.18"})`
    : `1px solid var(${hovered && active ? "--border-h" : "--border"})`;
  const secBg    = isDark
    ? (hovered && active ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.06)")
    : (hovered && active ? "var(--surface-alt)"     : "var(--surface)");
  const secColor = isDark
    ? (hovered && active ? "#f1f5f9" : "#cbd5e1")
    : (hovered && active ? "var(--text-1)" : "var(--text-2)");

  /* Primary button -theme-aware */
  const primBorder = `1px solid rgba(109,40,217,${hovered && active ? "0.65" : "0.45"})`;
  const primBg     = isDark
    ? (hovered && active ? "rgba(139,92,246,0.30)" : "rgba(139,92,246,0.15)")
    : (hovered && active ? "rgba(109,40,217,0.18)" : "rgba(109,40,217,0.10)");
  const primColor  = isDark
    ? (hovered && active ? "#ede9fe" : "#c4b5fd")
    : (hovered && active ? "#3b0764" : "#5b21b6");

  const style = {
    display:        "inline-flex",
    alignItems:     "center",
    gap:            "5px",
    fontSize:       small ? "11px" : "12px",
    fontWeight:     600,
    padding:        `${py} ${px}`,
    borderRadius:   "8px",
    cursor:         active ? "pointer" : "not-allowed",
    opacity:        active ? 1 : 0.35,
    textDecoration: "none",
    transition:     "all 0.18s",
    border:      primary ? primBorder : secBorder,
    background:  primary ? primBg     : secBg,
    color:       primary ? primColor  : secColor,
  };

  return (
    <a
      href={active ? href : "#"}
      target={active ? "_blank" : undefined}
      rel="noopener noreferrer"
      style={style}
      onClick={(e) => !active && e.preventDefault()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {icon}{label}
    </a>
  );
};


/* ── Section: Visitzee case study ────────────────── */
const Projects = () => {
  const { isDark } = useTheme();
  const v = VISITZEE;
  const accentText = isDark ? "#a78bfa" : "#5b21b6";

  return (
    <section id="visitzee" className="py-24 px-4">

      {/* Heading */}
      <motion.div {...fade()} className="text-center mb-12">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: accentText }}>Featured product</p>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight" style={{ color: "var(--text-1)" }}>{v.title}</h2>
        <p className="mt-3 text-lg font-medium" style={{ color: "var(--text-2)" }}>{v.tagline}</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="flex items-center gap-1.5 font-semibold px-3 py-1 rounded-full"
            style={{ background: "rgba(34,197,94,0.12)", color: isDark ? "#86efac" : "#15803d", border: `1px solid ${isDark ? "rgba(34,197,94,0.30)" : "rgba(22,163,74,0.35)"}` }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Live in production
          </span>
          <span className="font-medium px-3 py-1 rounded-full" style={{ ...card, color: "var(--text-2)" }}>{v.role}</span>
        </div>
      </motion.div>

      <div className="max-w-5xl mx-auto flex flex-col gap-16">

        {/* Pitch, links and stats */}
        <div>
          <motion.p {...fade()} className="max-w-3xl mx-auto text-center text-base leading-relaxed" style={{ color: "var(--text-2)" }}>
            {v.pitch}
          </motion.p>
          <motion.div {...fade(0.05)} className="flex flex-wrap justify-center gap-3 mt-6">
            {v.links.map((l, i) => (
              <LinkBtn key={l.label} href={l.href} active icon={<FaExternalLinkAlt size={10} />} label={l.label} primary={i === 0} />
            ))}
          </motion.div>
          <motion.div {...fade(0.1)} className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-10">
            {v.stats.map((st) => (
              <div key={st.label} className="rounded-xl px-3 py-4 text-center last:col-span-2 sm:last:col-span-1" style={card}>
                <p className="text-2xl font-bold" style={{ color: accentText }}>{st.value}</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--text-3)" }}>{st.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Screenshots */}
        <Gallery gallery={v.gallery} accentText={accentText} />

        {/* Four apps */}
        <div>
          <SubHeading eyebrow="Architecture" title="One product, four apps, one codebase" accentText={accentText} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {v.apps.map((app, i) => (
              <motion.div key={app.name} {...fade(i * 0.06)} className="rounded-2xl p-5" style={card}>
                <p className="font-mono text-[11px] mb-2" style={{ color: accentText }}>{app.host}</p>
                <h4 className="text-base font-bold mb-3" style={{ color: "var(--text-1)" }}>{app.name}</h4>
                <ul className="space-y-2">
                  {app.points.map((pt) => (
                    <li key={pt} className="flex gap-2 text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>
                      <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full" style={{ background: accentText }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Engineering */}
        <div>
          <SubHeading eyebrow="Under the hood" title="Built like a real product, not a demo" accentText={accentText} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {v.features.map((f, i) => {
              const Icon = FEATURE_ICONS[f.icon];
              return (
                <motion.div key={f.title} {...fade((i % 2) * 0.06)} className="flex gap-4 rounded-2xl p-5" style={card}>
                  <div className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center"
                    style={{ background: isDark ? "rgba(139,92,246,0.14)" : "rgba(109,40,217,0.10)", border: `1px solid ${isDark ? "rgba(139,92,246,0.28)" : "rgba(109,40,217,0.25)"}` }}>
                    <Icon size={18} style={{ color: accentText }} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1" style={{ color: "var(--text-1)" }}>{f.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>{f.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stack */}
        <motion.div {...fade()} className="text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--text-3)" }}>Built with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {v.stack.map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 rounded-md font-medium"
                style={{ background: "var(--surface-alt)", border: "1px solid var(--border)", color: "var(--text-2)" }}>
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
