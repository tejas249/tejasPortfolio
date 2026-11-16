import React from "react";
import {
  Layers, CreditCard, MessageCircle, Mail, Shield, Lock, Calendar, Server, GitBranch, CheckCircle2,
} from "lucide-react";
import BentoTile from "../ui/BentoTile";

const ICONS = {
  layers: Layers, card: CreditCard, message: MessageCircle, mail: Mail, shield: Shield,
  lock: Lock, calendar: Calendar, server: Server, git: GitBranch, check: CheckCircle2,
};

/* ── Visuals: each one shows the feature's mechanism, not decoration ── */

// Two bookings race for one slot; the database accepts one and rejects the other.
const DoubleBookVisual = () => (
  <svg viewBox="0 0 520 150" className="w-full h-auto" aria-hidden>
    <line x1="20" y1="132" x2="500" y2="132" stroke="var(--border-h)" />
    {["3:00", "3:30", "4:00", "4:30"].map((t, i) => (
      <text key={t} x={60 + i * 120} y="148" fontSize="10" fill="var(--text-3)" fontFamily="var(--font-mono)" textAnchor="middle">{t}</text>
    ))}
    <rect x="180" y="20" width="160" height="90" rx="14" fill="none" stroke="var(--border-h)" strokeDasharray="4 5" />
    <g className="svgbox bk-a">
      <rect x="180" y="20" width="160" height="90" rx="14" fill="rgba(74,222,128,0.14)" stroke="var(--ok)" />
      <text x="200" y="58" fontSize="14" fontWeight="600" fill="var(--text-1)">Ananya R.</text>
      <text x="200" y="80" fontSize="11" fill="var(--ok)">Confirmed</text>
    </g>
    <g className="svgbox bk-b">
      <rect x="196" y="36" width="160" height="90" rx="14" fill="var(--bg-raised)" stroke="var(--accent)" strokeWidth="1.5" />
      <text x="216" y="74" fontSize="14" fontWeight="600" fill="var(--text-1)">Ravi T.</text>
      <text x="216" y="96" fontSize="11" fill="var(--accent-text)">Rejected</text>
    </g>
    <g className="bk-note">
      <text x="450" y="60" fontSize="11" fill="var(--accent-text)" fontFamily="var(--font-mono)" textAnchor="middle">exclusion</text>
      <text x="450" y="76" fontSize="11" fill="var(--accent-text)" fontFamily="var(--font-mono)" textAnchor="middle">constraint</text>
    </g>
  </svg>
);

const SubdomainVisual = () => (
  <div className="flex flex-col gap-2 font-mono text-[11px]" aria-hidden>
    {["glowstudio", "fadeclinic", "peakfit"].map((n, i) => (
      <div key={n} className="float-y flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: "var(--surface-alt)", border: "1px solid var(--border)", animationDelay: `${i * 0.7}s`, marginLeft: i * 14 }}>
        <Lock size={11} style={{ color: "var(--ok)" }} />
        <span style={{ color: "var(--text-1)" }}>{n}</span><span style={{ color: "var(--text-3)" }}>.visitzee.in</span>
      </div>
    ))}
  </div>
);

const CipherVisual = () => (
  <div className="space-y-2 font-mono text-[12px]" aria-hidden>
    {[["name", "Asha Kulkarni", "9fA2•c71e…Qx0"], ["phone", "+91 98••• 12345", "b3Zr•4Kd8…p91"]].map(([k, plain, enc], i) => (
      <div key={k} className="flex items-center gap-3 px-3 py-2 rounded-xl" style={{ background: "var(--surface-alt)", border: "1px solid var(--border)" }}>
        <span style={{ color: "var(--text-3)" }} className="w-10">{k}</span>
        <span className="relative flex-1 h-4">
          <span className="cipher-a absolute inset-0" style={{ color: "var(--text-1)", animationDelay: `${i * 0.3}s` }}>{plain}</span>
          <span className="cipher-b absolute inset-0" style={{ color: "var(--accent-text)", animationDelay: `${i * 0.3}s` }}>{enc}</span>
        </span>
      </div>
    ))}
  </div>
);

const PipelineVisual = () => {
  const steps = ["Push", "CI", "Migrate", "Deploy", "Smoke"];
  const d = "M 40 40 L 420 40";
  return (
    <svg viewBox="0 0 460 80" className="w-full h-auto" aria-hidden>
      <path d={d} stroke="var(--border-h)" strokeWidth="1.5" />
      <path d={d} stroke="var(--accent)" strokeWidth="1.5" className="svg-flow" />
      <circle r="4" cy="0" fill="var(--accent)"><animateMotion dur="4s" repeatCount="indefinite" path={d} /></circle>
      {steps.map((s, i) => (
        <g key={s}>
          <circle cx={40 + i * 95} cy="40" r="11" fill="var(--bg-raised)" stroke="var(--accent)" className="node-pulse" style={{ animationDelay: `${i * 0.6}s` }} />
          <path d={`M ${35 + i * 95} 40 l 3.5 3.5 l 7 -7`} fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" />
          <text x={40 + i * 95} y="72" textAnchor="middle" fontSize="11" fill="var(--text-2)">{s}</text>
        </g>
      ))}
    </svg>
  );
};

const TestsVisual = () => (
  <div className="space-y-3 text-[11px]" aria-hidden>
    {[["Unit", "92%"], ["Real database", "78%"], ["End to end", "60%"]].map(([l, w], i) => (
      <div key={l}>
        <div className="flex justify-between mb-1" style={{ color: "var(--text-3)" }}><span>{l}</span></div>
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--surface-alt)" }}>
          <div className="grow-bar h-full rounded-full" style={{ width: w, background: "var(--ok)", animationDelay: `${i * 0.25}s` }} />
        </div>
      </div>
    ))}
  </div>
);

// title -> grid span and optional visual
const LAYOUT = {
  "No double bookings":       { span: "md:col-span-2 lg:col-span-4", Visual: DoubleBookVisual },
  "Two-factor admin access":  { span: "lg:col-span-2" },
  "Multi-tenant SaaS":        { span: "lg:col-span-2", Visual: SubdomainVisual },
  "Encryption and privacy":   { span: "lg:col-span-2", Visual: CipherVisual },
  "Razorpay payments":        { span: "lg:col-span-2" },
  "WhatsApp notifications":   { span: "lg:col-span-2" },
  "Email integration":        { span: "lg:col-span-2" },
  "Backend and data":         { span: "lg:col-span-2" },
  "DevOps and DNS":           { span: "md:col-span-2 lg:col-span-4", Visual: PipelineVisual },
  "Tested and hardened":      { span: "lg:col-span-2", Visual: TestsVisual },
};
const ORDER = Object.keys(LAYOUT);

const FeatureBento = ({ features }) => {
  const byTitle = Object.fromEntries(features.map((f) => [f.title, f]));
  const items = [...ORDER.map((t) => byTitle[t]).filter(Boolean), ...features.filter((f) => !LAYOUT[f.title])];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
      {items.map((f, i) => {
        const Icon = ICONS[f.icon];
        const { span = "lg:col-span-2", Visual } = LAYOUT[f.title] || {};
        return (
          <BentoTile key={f.title} delay={(i % 3) * 0.06} className={`${span} p-6 sm:p-7 flex flex-col`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--accent-soft-bg)" }}>
                <Icon size={16} style={{ color: "var(--accent-text)" }} />
              </span>
              <h4 className="text-base font-semibold tracking-tight" style={{ color: "var(--text-1)" }}>{f.title}</h4>
            </div>
            <p className="text-[13.5px] leading-relaxed" style={{ color: "var(--text-2)" }}>{f.body}</p>
            {Visual && <div className="mt-auto pt-6"><Visual /></div>}
          </BentoTile>
        );
      })}
    </div>
  );
};

export default FeatureBento;
