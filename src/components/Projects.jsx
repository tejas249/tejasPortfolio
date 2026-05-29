import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { PROJECTS } from "../constants";
import { useTheme } from "../context/ThemeContext";

const featuredProjects = PROJECTS.slice(0, 2);
const otherProjects    = PROJECTS.slice(2);

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
    }}
    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-h)")}
    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
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

/* ── Grid card ───────────────────────────────────── */
const GridCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.45, delay: (index % 3) * 0.08, ease: "easeOut" }}
    className="flex flex-col rounded-2xl overflow-hidden group"
    style={{
      background:     "var(--surface)",
      border:         "1px solid var(--border)",
      boxShadow:      "var(--card-shadow)",
      backdropFilter: "blur(14px)",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-h)")}
    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
  >
    {/* Image */}
    <div className="relative h-40 overflow-hidden flex-shrink-0">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 p-4 gap-3">
      <div>
        <h3 className="text-sm font-bold leading-snug" style={{ color: "var(--text-1)" }}>{project.title}</h3>
        <p className="text-xs font-medium mt-0.5 text-violet-400">{project.subtitle}</p>
        <p className="text-xs leading-relaxed mt-1.5 line-clamp-2" style={{ color: "var(--text-3)" }}>
          {project.description}
        </p>
      </div>

      <div className="mt-auto">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.technologies.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-[11px] px-2 py-0.5 rounded font-medium"
              style={{ background: "var(--surface-alt)", border: "1px solid var(--border)", color: "var(--text-3)" }}
            >
              {t}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-[11px] px-2 py-0.5 rounded font-medium" style={{ color: "var(--text-3)" }}>
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="flex gap-2">
          <LinkBtn href={project.githubLink} active={!!project.githubLink} icon={<FaGithub size={11} />} label="Code" small />
          <LinkBtn href={project.liveLink}   active={!!project.liveLink}   icon={<FaExternalLinkAlt size={9} />} label="Live" small primary />
        </div>
      </div>
    </div>
  </motion.div>
);

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
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? otherProjects : otherProjects.slice(0, 3);

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

        {/* Featured -2-col on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((p, i) => (
            <FeaturedCard key={p.title} project={p} index={i} accentText={accentText} />
          ))}
        </div>

        {/* Divider */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--text-3)" }}>
            More Projects
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {visible.map((p, i) => <GridCard key={p.title} project={p} index={i} />)}
          </AnimatePresence>
        </div>

        {otherProjects.length > 3 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="text-sm font-semibold px-6 py-2.5 rounded-full"
              style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-2)" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-1)"; e.currentTarget.style.borderColor = "var(--border-h)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-2)"; e.currentTarget.style.borderColor = "var(--border)"; }}
            >
              {showAll ? "Show Less" : `Show ${otherProjects.length - 3} More`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
