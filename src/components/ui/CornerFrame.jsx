import React from "react";

// Viewfinder-style corner ticks around any block, for the technical/spec-sheet motif.
const CornerFrame = ({ children, className = "", style }) => (
  <div className={`corner-frame ${className}`} style={style}>
    <span className="cf-tr" />
    <span className="cf-br" />
    {children}
  </div>
);

export default CornerFrame;
