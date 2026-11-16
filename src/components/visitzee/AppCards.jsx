import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Globe, Calendar, Smartphone, Shield } from "lucide-react";
import { fadeUp } from "../../lib/motion";

const APP_ICONS = { globe: Globe, calendar: Calendar, smartphone: Smartphone, shield: Shield };

/* ── Link button ───────────────────────────────────── */
export const LinkBtn = ({ href, active, icon, label, primary = false }) => (
  <a
    href={active ? href : "#"}
    target={active ? "_blank" : undefined}
    rel="noopener noreferrer"
    onClick={(e) => !active && e.preventDefault()}
    className={`btn ${primary ? "btn-primary" : ""}`}
    style={{ opacity: active ? 1 : 0.35, cursor: active ? "pointer" : "not-allowed", padding: "9px 16px", fontSize: 13 }}
  >
    {icon}{label}
  </a>
);

/* ── App card ──────────────────────────────────────── */
export const AppCard = ({ app, delay }) => {
  const Icon = APP_ICONS[app.icon];
  return (
    <motion.a
      {...fadeUp(delay)}
      href={app.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group surface p-6 flex flex-col transition-colors duration-200 hover:!border-[var(--border-h)]"
    >
      <div className="flex items-center justify-between mb-5">
        <span className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "var(--accent-soft-bg)" }}>
          {Icon && <Icon size={16} style={{ color: "var(--accent-text)" }} />}
        </span>
        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--text-3)" }} />
      </div>
      <h4 className="text-base font-semibold mb-1" style={{ color: "var(--text-1)" }}>{app.name}</h4>
      <p className="font-mono text-xs mb-4" style={{ color: "var(--text-3)" }}>{app.host}</p>
      <ul className="space-y-2 mt-auto">
        {app.points.map((pt) => (
          <li key={pt} className="flex gap-2.5 text-[13px] leading-relaxed" style={{ color: "var(--text-2)" }}>
            <span className="mt-2 shrink-0 w-1 h-1 rounded-full" style={{ background: "var(--accent)" }} />
            {pt}
          </li>
        ))}
      </ul>
    </motion.a>
  );
};


