import React from "react";

// A label/value "spec sheet" line — the recurring data-row motif used in the
// Hero panel, Education and Experience instead of generic prose/cards.
const SpecRow = ({ label, value, valueColor, dense = false }) => (
  <div
    className={`flex items-center justify-between gap-4 ${dense ? "py-2" : "py-3"}`}
    style={{ borderBottom: "1px dashed var(--border)" }}
  >
    <span className="font-mono text-[10px] uppercase tracking-[0.2em] shrink-0" style={{ color: "var(--text-3)" }}>
      {label}
    </span>
    <span
      className="text-sm font-semibold text-right truncate"
      style={{ color: valueColor || "var(--text-1)" }}
    >
      {value}
    </span>
  </div>
);

export default SpecRow;
