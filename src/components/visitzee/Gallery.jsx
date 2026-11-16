import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fadeUp } from "../../lib/motion";

/* ── Screenshot gallery, framed like the product it shows ── */
export const Gallery = ({ gallery }) => {
  const [group, setGroup] = useState(0);
  const [active, setActive] = useState(0);
  const current = gallery[group];
  const screen = current.screens[active];
  const many = current.screens.length > 1;
  const isPhone = current.kind === "phone";
  const step = (dir) => setActive((a) => (a + dir + current.screens.length) % current.screens.length);

  return (
    <motion.div {...fadeUp(0.1)} className="surface-raised p-3 sm:p-4 min-w-0">
      {/* Segmented switch */}
      <div className="flex flex-wrap gap-1 p-1 rounded-full mb-4 w-fit max-w-full" style={{ background: "var(--surface-alt)" }}>
        {gallery.map((g, i) => (
          <button
            key={g.key}
            onClick={() => { setGroup(i); setActive(0); }}
            className="px-4 py-1.5 rounded-full text-[13px] font-semibold cursor-pointer transition-colors duration-200"
            style={{
              background: i === group ? "var(--bg-raised)" : "transparent",
              color: i === group ? "var(--text-1)" : "var(--text-3)",
              boxShadow: i === group ? "0 1px 2px rgba(0,0,0,0.25)" : "none",
            }}
          >
            {g.label}
          </button>
        ))}
      </div>

      {/* Window / device frame */}
      <div
        className={`relative overflow-hidden flex items-center justify-center rounded-2xl ${isPhone ? "h-[480px]" : "aspect-[16/10]"}`}
        style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={`${group}-${active}`}
            src={screen.src}
            alt={`Visitzee: ${screen.title}`}
            initial={{ opacity: 0, scale: 0.99 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            decoding="async"
            className={isPhone ? "h-full w-auto py-4" : "w-full h-full object-cover object-top"}
            style={isPhone ? { borderRadius: 28 } : undefined}
          />
        </AnimatePresence>

        {many && [
          { dir: -1, side: "left-3", icon: <ChevronLeft size={16} />, label: "Previous screen" },
          { dir: 1, side: "right-3", icon: <ChevronRight size={16} />, label: "Next screen" },
        ].map(({ dir, side, icon, label }) => (
          <button key={label} onClick={() => step(dir)} aria-label={label}
            className={`absolute ${side} top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer`}
            style={{ background: "rgba(10,10,10,0.72)", color: "#fff", backdropFilter: "blur(8px)" }}>
            {icon}
          </button>
        ))}
      </div>

      {/* Caption + thumbnails */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mt-4 px-1">
        <div className="md:max-w-md min-w-0">
          <p className="text-base font-semibold" style={{ color: "var(--text-1)" }}>
            {screen.title}
            {many && (
              <span className="ml-2 font-mono text-xs font-normal" style={{ color: "var(--text-3)" }}>
                {String(active + 1).padStart(2, "0")} / {String(current.screens.length).padStart(2, "0")}
              </span>
            )}
          </p>
          <p className="text-sm leading-relaxed mt-1" style={{ color: "var(--text-2)" }}>{screen.body}</p>
        </div>
        {many && (
          <div className="flex gap-2 overflow-x-auto pb-1 shrink-0">
            {current.screens.map((sc, i) => (
              <button
                key={sc.src}
                onClick={() => setActive(i)}
                aria-label={`Show ${sc.title}`}
                className="shrink-0 w-16 h-11 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer"
                style={{
                  border: `2px solid ${i === active ? "var(--accent)" : "transparent"}`,
                  opacity: i === active ? 1 : 0.55,
                  background: "var(--surface-alt)",
                }}
              >
                <img src={sc.src} alt="" loading="lazy" decoding="async"
                  className={isPhone ? "h-full w-auto" : "w-full h-full object-cover object-top"} />
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};


export default Gallery;
