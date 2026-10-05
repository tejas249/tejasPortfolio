import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PROJECTS } from "../constants";
import { useTheme } from "../context/ThemeContext";

const flagship         = PROJECTS.find((p) => p.featured);
const supportingProjects = PROJECTS.filter((p) => !p.featured);

/* ── Featured card -image-top stacked layout ────── */
const FeaturedCard = ({ project, index, accentText }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
    className="rounded-2xl overflow-hidden group"
    style={{
      background:     "var(--surface)",
      border:         "1px solid var(--border)",
      boxShadow:      "var(--card-shadow)",
      backdropFilter: "blur(14px)",
      transition:     "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = "rgba(167,139,250,0.55)";
      e.currentTarget.style.boxShadow   = "var(--card-shadow), 0 0 0 1px rgba(167,139,250,0.25), 0 12px 32px rgba(109,40,217,0.18)";
      e.currentTarget.style.transform   = "translateY(-2px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "var(--border)";
      e.currentTarget.style.boxShadow   = "var(--card-shadow)";
      e.currentTarget.style.transform   = "translateY(0)";
    }}
  >
    {/* Image -fixed height, no overflow */}
    <div className="relative h-56 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
      />
      {/* bottom gradient so content blends in */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {/* Title overlaid at bottom of image */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-4">
        <h3 className="text-xl font-bold text-white leading-tight drop-shadow-md">{project.title}</h3>
        <p className="text-sm font-medium mt-0.5 drop-shadow-sm" style={{ color: "#d8b4fe" }}>{project.subtitle}</p>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-2)" }}>
        {project.description}
      </p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.technologies.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-md font-medium"
            style={{ background: "var(--surface-alt)", border: "1px solid var(--border)", color: "var(--text-3)" }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <LinkBtn href={project.githubLink} active={!!project.githubLink} icon={<FaGithub size={12} />} label="GitHub" />
        <LinkBtn href={project.liveLink}   active={!!project.liveLink}   icon={<FaExternalLinkAlt size={10} />} label="Live Demo" primary />
      </div>
    </div>
  </motion.div>
);

/* ── Flagship card: Visitzee ───────────────────── */
const FlagshipCard = ({ project, accentText }) => {
  const { isDark } = useTheme();
  const [group, setGroup]   = useState(0);
  const [active, setActive]  = useState(0);
  const current = project.gallery[group];
  const screen  = current.screens[active];
  const step = (dir) => setActive((a) => (a + dir + current.screens.length) % current.screens.length);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-3xl overflow-hidden"
      style={{
        background:     isDark ? "rgba(139,92,246,0.07)" : "rgba(109,40,217,0.05)",
        border:         `1px solid ${isDark ? "rgba(139,92,246,0.45)" : "rgba(109,40,217,0.35)"}`,
        boxShadow:      isDark
          ? "0 0 0 1px rgba(139,92,246,0.15), 0 16px 48px rgba(139,92,246,0.18)"
          : "0 0 0 1px rgba(109,40,217,0.12), 0 16px 48px rgba(109,40,217,0.12)",
        backdropFilter: "blur(14px)",
      }}
    >
      <div className="h-[3px] w-full" style={{ background: "linear-gradient(to right, #7c3aed, #2563eb, #06b6d4)" }} />

      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Screenshots */}
        <div className="lg:col-span-3 p-5 sm:p-6 flex flex-col gap-3">
          {/* Group tabs */}
          <div className="flex flex-wrap gap-2">
            {project.gallery.map((g, i) => (
              <button
                key={g.key}
                onClick={() => { setGroup(i); setActive(0); }}
                className="text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all"
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

          {/* Viewer */}
          <div className={`relative rounded-xl overflow-hidden flex items-center justify-center ${current.kind === "phone" ? "h-[440px]" : "aspect-[1800/1125]"}`}
            style={{ border: "1px solid var(--border)", background: "var(--surface-alt)" }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={`${group}-${active}`}
                src={screen.src}
                alt={`${project.title}: ${screen.title}`}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={current.kind === "phone" ? "h-full w-auto py-3" : "w-full h-full object-cover"}
                style={current.kind === "phone" ? { borderRadius: 18 } : undefined}
              />
            </AnimatePresence>
            {[
              { dir: -1, side: "left-2",  icon: <FaChevronLeft size={12} />,  label: "Previous screen" },
              { dir:  1, side: "right-2", icon: <FaChevronRight size={12} />, label: "Next screen" },
            ].map(({ dir, side, icon, label }) => (
              <button key={label} onClick={() => step(dir)} aria-label={label}
                className={`absolute ${side} top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center`}
                style={{ background: "rgba(10,10,10,0.7)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}>
                {icon}
              </button>
            ))}
          </div>

          {/* Caption */}
          <div className="min-h-[3.5rem]">
            <p className="text-sm font-semibold" style={{ color: "var(--text-1)" }}>
              {screen.title}
              <span className="ml-2 text-xs font-medium" style={{ color: "var(--text-3)" }}>
                {active + 1} / {current.screens.length}
              </span>
            </p>
            <p className="text-xs leading-relaxed mt-0.5" style={{ color: "var(--text-3)" }}>{screen.body}</p>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            {current.screens.map((sc, i) => (
              <button
                key={sc.src}
                onClick={() => setActive(i)}
                aria-label={`Show ${sc.title}`}
                className="shrink-0 w-16 h-11 rounded-lg overflow-hidden transition-all flex items-center justify-center"
                style={{
                  border: `2px solid ${i === active ? accentText : "var(--border)"}`,
                  opacity: i === active ? 1 : 0.6,
                  background: "var(--surface-alt)",
                }}
              >
                <img src={sc.src} alt="" className={current.kind === "phone" ? "h-full w-auto" : "w-full h-full object-cover object-top"} />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="lg:col-span-2 p-6 sm:p-7 flex flex-col">
          <span
            className="self-start text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-3"
            style={{
              background: isDark ? "rgba(139,92,246,0.18)" : "rgba(109,40,217,0.10)",
              color: isDark ? "#c4b5fd" : "#4c1d95",
              border: `1px solid ${isDark ? "rgba(139,92,246,0.35)" : "rgba(109,40,217,0.30)"}`,
            }}
          >
            ● Live in production
          </span>
          <h3 className="text-3xl font-bold leading-tight" style={{ color: "var(--text-1)" }}>{project.title}</h3>
          <p className="text-sm font-medium mt-1 mb-4" style={{ color: accentText }}>{project.subtitle}</p>

          <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-2)" }}>{project.description}</p>

          <div className="grid grid-cols-3 gap-2 mb-5">
            {project.stats.map((st) => (
              <div key={st.label} className="rounded-xl px-2 py-2.5 text-center"
                style={{ background: "var(--surface-alt)", border: "1px solid var(--border)" }}>
                <p className="text-lg font-bold" style={{ color: accentText }}>{st.value}</p>
                <p className="text-[11px] leading-tight" style={{ color: "var(--text-3)" }}>{st.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-auto">
            {project.links.map((l, i) => (
              <LinkBtn key={l.label} href={l.href} active icon={<FaExternalLinkAlt size={10} />} label={l.label} primary={i === 0} />
            ))}
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="px-6 sm:px-8 pb-7 pt-1">
        <div className="mb-5 h-px" style={{ background: "var(--border)" }} />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 mb-6">
          {project.highlights.map((h) => (
            <li key={h.label} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
              <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: accentText }} />
              <span><strong style={{ color: "var(--text-1)" }}>{h.label}:</strong> {h.text}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-md font-medium"
              style={{ background: "var(--surface-alt)", border: "1px solid var(--border)", color: "var(--text-2)" }}>
              {t}
            </span>
          ))}
        </div>
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

/* ── Section ─────────────────────────────────────── */
const Projects = () => {
  const { isDark } = useTheme();
  const accentText = isDark ? "#a78bfa" : "#5b21b6";

  return (
    <section id="projects" className="py-24 px-4">

      <motion.div
        initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-violet-400 mb-3">What I've built</p>
        <h2 className="text-4xl font-bold tracking-tight" style={{ color: "var(--text-1)" }}>Projects</h2>
        <div className="mt-4 mx-auto w-12 h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-transparent" />
      </motion.div>

      <div className="max-w-5xl mx-auto">

        {/* Flagship */}
        <div className="mb-8">
          <FlagshipCard project={flagship} accentText={accentText} />
        </div>

        {/* Supporting projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {supportingProjects.map((p, i) => (
            <FeaturedCard key={p.title} project={p} index={i} accentText={accentText} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
