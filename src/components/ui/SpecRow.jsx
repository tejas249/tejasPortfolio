import React from "react";

// A label and value line, used for facts (location, dates, stats).
const SpecRow = ({ label, value, valueColor, dense = false }) => (
  <div
    className={`flex items-center justify-between gap-4 ${dense ? "py-2.5" : "py-3.5"}`}
    style={{ borderBottom: "1px solid var(--border)" }}
  >
    <span className="text-sm shrink-0" style={{ color: "var(--text-3)" }}>
      {label}
    </span>
    <span
      className="text-sm font-semibold text-right truncate tabular-nums"
      style={{ color: valueColor || "var(--text-1)" }}
    >
      {value}
    </span>
  </div>
);

export default SpecRow;
