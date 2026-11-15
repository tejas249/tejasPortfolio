import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  FiLayers, FiCreditCard, FiMessageCircle, FiMail, FiShield, FiLock,
  FiCalendar, FiServer, FiGitBranch, FiCheckCircle,
} from "react-icons/fi";
import { VISITZEE } from "../constants";
import SectionHeading from "./ui/SectionHeading";
import CornerFrame from "./ui/CornerFrame";
import Marquee from "./ui/Marquee";
import SpecRow from "./ui/SpecRow";
import { fadeUp } from "../lib/motion";

const FEATURE_ICONS = {
  layers: FiLayers, card: FiCreditCard, message: FiMessageCircle, mail: FiMail, shield: FiShield,
  lock: FiLock, calendar: FiCalendar, server: FiServer, git: FiGitBranch, check: FiCheckCircle,
};

const panel = { background: "var(--surface)", border: "1px solid var(--border)" };

const SubHeading = ({ n, title }) => (
  <motion.div {...fadeUp()} className="pb-5" style={{ borderBottom: "1px solid var(--border)" }}>
    <div className="pl-6">
      <span className="block font-mono text-[11px] uppercase tracking-wide mb-2" style={{ color: "var(--accent-text)" }}>{n}</span>
      <h3 className="text-xl sm:text-2xl font-bold tracking-tight" style={{ color: "var(--text-1)" }}>{title}</h3>
    </div>
  </motion.div>
);

/* ── Screenshot gallery ──────────────────────────── */
const Gallery = ({ gallery }) => {
  const [group, setGroup]  = useState(0);
  const [active, setActive] = useState(0);
  const current = gallery[group];
  const screen  = current.screens[active];
  const many    = current.screens.length > 1;
  const step = (dir) => setActive((a) => (a + dir + current.screens.length) % current.screens.length);

  return (
    <motion.div {...fadeUp(0.1)}>
      <CornerFrame className="p-4 sm:p-6" style={panel}>
      <div className="flex flex-wrap gap-5 mb-4" style={{ borderBottom: "1px solid var(--border)" }}>
        {gallery.map((g, i) => (
          <button
            key={g.key}
            onClick={() => { setGroup(i); setActive(0); }}
            data-cursor-hover
            className="font-mono text-[11px] font-semibold uppercase tracking-wide pb-3 border-b-2 -mb-px transition-colors"
            style={{
              borderBottomColor: i === group ? "var(--accent)" : "transparent",
              color: i === group ? "var(--text-1)" : "var(--text-3)",
            }}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div className={`relative overflow-hidden flex items-center justify-center mt-4 ${current.kind === "phone" ? "h-[460px]" : "aspect-[16/10]"}`}
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
          />
        </AnimatePresence>
        {many && [
          { dir: -1, side: "left-0",  icon: <FaChevronLeft size={12} />,  label: "Previous screen" },
          { dir:  1, side: "right-0", icon: <FaChevronRight size={12} />, label: "Next screen" },
        ].map(({ dir, side, icon, label }) => (
          <button key={label} onClick={() => step(dir)} aria-label={label} data-cursor-hover
            className={`absolute ${side} top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center`}
            style={{ background: "rgba(6,6,6,0.7)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}>
            {icon}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mt-4">
        <div className="md:max-w-md">
          <p className="text-sm font-semibold" style={{ color: "var(--text-1)" }}>
            {screen.title}
            {many && (
              <span className="ml-2 font-mono text-[11px] font-medium" style={{ color: "var(--text-3)" }}>
                {String(active + 1).padStart(2, "0")} / {String(current.screens.length).padStart(2, "0")}
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
                data-cursor-hover
                className="shrink-0 w-14 h-10 overflow-hidden flex items-center justify-center"
                style={{
                  border: `2px solid ${i === active ? "var(--accent)" : "var(--border)"}`,
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
      </CornerFrame>
    </motion.div>
  );
};

/* ── Reusable link button (sharp) ─────────────────── */
const LinkBtn = ({ href, active, icon, label, primary = false }) => (
  <a
    href={active ? href : "#"}
    target={active ? "_blank" : undefined}
    rel="noopener noreferrer"
    data-cursor-hover
    onClick={(e) => !active && e.preventDefault()}
    className={`btn-sharp ${primary ? "btn-accent" : ""}`}
    style={{ opacity: active ? 1 : 0.35, cursor: active ? "pointer" : "not-allowed", padding: "9px 16px", fontSize: "11px" }}
  >
    {icon}{label}
  </a>
);


/* ── Section: Visitzee case study (sticky two-column layout) ── */
const Projects = () => {
  const v = VISITZEE;

  return (
    <section id="visitzee" className="py-24 px-4">

      <div className="max-w-6xl mx-auto">
        <SectionHeading index="02" title={v.title} eyebrow="Featured product" />

        <div className="-mt-10 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16">

          {/* ── Left: pinned overview panel ── */}
          <div className="lg:sticky lg:top-28 lg:self-start flex flex-col gap-6 h-fit">
            <p className="text-lg sm:text-xl font-medium leading-snug" style={{ color: "var(--text-1)" }}>{v.tagline}</p>

            <div className="flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-wide">
              <span className="flex items-center gap-1.5" style={{ color: "#4ade80" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Live in production
              </span>
              <span style={{ color: "var(--text-3)" }}>{v.role}</span>
            </div>

            <p className="text-sm leading-relaxed" style={{ color: "var(--text-3)" }}>{v.pitch}</p>

            <div className="flex flex-wrap gap-2.5">
              {v.links.map((l, i) => (
                <LinkBtn key={l.label} href={l.href} active icon={<FaExternalLinkAlt size={10} />} label={l.label} primary={i === 0} />
              ))}
            </div>

            <CornerFrame className="p-5 mt-2" style={panel}>
              {v.stats.map((st) => (
                <SpecRow key={st.label} label={st.label} value={st.value} valueColor="var(--accent-text)" />
              ))}
            </CornerFrame>
          </div>

          {/* ── Right: gallery (paired with the sticky overview) ── */}
          <div>
            <Gallery gallery={v.gallery} />
          </div>
        </div>

        {/* ── Below: full-width, no longer paired with the sidebar ── */}
        <div className="mt-16">
          <SubHeading n="ARCHITECTURE" title="One product, four apps" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t" style={{ borderColor: "var(--border)" }}>
            {v.apps.map((app, i) => (
              <motion.div key={app.name} {...fadeUp(i * 0.06)} className="p-6 border-r border-b" style={{ borderColor: "var(--border)" }}>
                <p className="font-mono text-[11px] mb-2" style={{ color: "var(--accent-text)" }}>{app.host}</p>
                <h4 className="text-base font-bold mb-3" style={{ color: "var(--text-1)" }}>{app.name}</h4>
                <ul className="space-y-2">
                  {app.points.map((pt) => (
                    <li key={pt} className="flex gap-2 text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>
                      <span className="mt-1.5 shrink-0 w-1 h-1" style={{ background: "var(--accent)" }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <SubHeading n="UNDER THE HOOD" title="Built like a real product, not a demo" />
          <div className="grid grid-cols-1 sm:grid-cols-2 border-l border-t" style={{ borderColor: "var(--border)" }}>
            {v.features.map((f, i) => {
              const Icon = FEATURE_ICONS[f.icon];
              return (
                <motion.div key={f.title} {...fadeUp((i % 2) * 0.06)} className="flex gap-4 p-6 border-r border-b" style={{ borderColor: "var(--border)" }}>
                  <div className="w-9 h-9 shrink-0 flex items-center justify-center" style={{ border: "1px solid var(--accent-soft-br)" }}>
                    <Icon size={16} style={{ color: "var(--accent-text)" }} />
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
        <motion.div {...fadeUp()} className="text-center mt-16">
          <p className="font-mono text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--text-3)" }}>Built with</p>
          <div className="py-3" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
            <Marquee items={v.stack} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
