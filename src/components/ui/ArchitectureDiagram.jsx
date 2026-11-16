import React from "react";

const APPS = ["Marketing site", "Booking page", "Owner app", "Admin console"];
const HOSTS = ["visitzee.in", "name.visitzee.in", "app.visitzee.in", "admin.visitzee.in"];
const Y = [24, 104, 184, 264];

// Left nodes -> API -> database, with animated data flow along each path.
const ArchitectureDiagram = () => (
  <svg viewBox="0 0 820 360" className="w-full h-auto" role="img" aria-label="Four apps share one Next.js API and one PostgreSQL database">
    {APPS.map((name, i) => {
      const d = `M 220 ${Y[i] + 32} C 290 ${Y[i] + 32}, 300 180, 350 180`;
      return (
        <g key={name}>
          <path d={d} fill="none" stroke="var(--border-h)" strokeWidth="1.5" />
          <path d={d} fill="none" stroke="var(--accent)" strokeWidth="1.5" className="svg-flow" />
          <circle r="3.5" fill="var(--accent)">
            <animateMotion dur={`${2.4 + i * 0.3}s`} repeatCount="indefinite" path={d} begin={`${i * 0.4}s`} />
          </circle>
          <rect x="20" y={Y[i]} width="200" height="64" rx="14" fill="var(--bg-raised)" stroke="var(--border)" />
          <text x="40" y={Y[i] + 28} fill="var(--text-1)" fontSize="14" fontWeight="600">{name}</text>
          <text x="40" y={Y[i] + 47} fill="var(--text-3)" fontSize="11" fontFamily="var(--font-mono)">{HOSTS[i]}</text>
        </g>
      );
    })}

    <path d="M 490 180 L 600 180" stroke="var(--border-h)" strokeWidth="1.5" />
    <path d="M 490 180 L 600 180" stroke="var(--accent)" strokeWidth="1.5" className="svg-flow" />
    <circle r="3.5" fill="var(--accent)"><animateMotion dur="1.6s" repeatCount="indefinite" path="M 490 180 L 600 180" /></circle>

    <rect x="350" y="130" width="140" height="100" rx="16" fill="var(--accent-soft-bg)" stroke="var(--accent-soft-br)" />
    <text x="420" y="172" textAnchor="middle" fill="var(--text-1)" fontSize="14" fontWeight="600">Next.js API</text>
    <text x="420" y="193" textAnchor="middle" fill="var(--text-3)" fontSize="11" fontFamily="var(--font-mono)">Server Actions</text>

    <ellipse cx="680" cy="146" rx="62" ry="16" fill="var(--bg-raised)" stroke="var(--border-h)" />
    <path d="M 618 146 V 214 A 62 16 0 0 0 742 214 V 146" fill="var(--bg-raised)" stroke="var(--border-h)" />
    <ellipse cx="680" cy="146" rx="62" ry="16" fill="var(--surface-alt)" stroke="var(--border-h)" />
    <text x="680" y="188" textAnchor="middle" fill="var(--text-1)" fontSize="14" fontWeight="600">PostgreSQL</text>
    <text x="680" y="208" textAnchor="middle" fill="var(--text-3)" fontSize="11" fontFamily="var(--font-mono)">no double-booking</text>
  </svg>
);

export default ArchitectureDiagram;
