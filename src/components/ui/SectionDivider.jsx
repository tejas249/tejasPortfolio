import React from "react";

// Full-bleed hairline between sections, with registration ticks at the edges -
// breaks the "stack of floating cards" rhythm into one continuous document.
const SectionDivider = () => (
  <div className="relative w-full h-px" style={{ background: "var(--border)" }}>
    <span className="absolute left-6 sm:left-8 top-1/2 -translate-y-1/2 w-px h-2" style={{ background: "var(--border-h)" }} />
    <span className="absolute right-6 sm:right-8 top-1/2 -translate-y-1/2 w-px h-2" style={{ background: "var(--border-h)" }} />
  </div>
);

export default SectionDivider;
