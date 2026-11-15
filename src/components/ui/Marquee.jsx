import React from "react";

// Infinite-loop transmission ticker. Duplicates the item list once so the
// translateX(-50%) loop is seamless.
const Marquee = ({ items, className = "" }) => (
  <div className={`marquee-row overflow-hidden ${className}`} style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
    <div className="marquee-track">
      {[0, 1].map((rep) => (
        <div key={rep} className="flex items-center shrink-0">
          {items.map((item, i) => (
            <span
              key={`${rep}-${i}`}
              className="flex items-center gap-3 px-6 font-mono text-[11px] uppercase tracking-[0.2em] whitespace-nowrap"
              style={{ color: "var(--text-3)" }}
            >
              {item}
              <span style={{ color: "var(--accent)" }}>&bull;</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Marquee;
