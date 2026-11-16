import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { VISITZEE } from "../constants";
import SectionHeading from "./ui/SectionHeading";
import BentoTile from "./ui/BentoTile";
import { fadeUp } from "../lib/motion";

// Landing page keeps each project to one short card; the full story lives on its own route.
const Projects = () => {
  const v = VISITZEE;
  const shot = v.gallery[1].screens[0].src;
  return (
    <section id="projects" className="px-5 sm:px-6 py-24 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="02" title="Projects" eyebrow="Selected work" />

        <BentoTile as="div" className="group">
          <Link to="/visitzee" className="grid lg:grid-cols-[1fr_1.1fr] min-h-[420px]" aria-label="Read the Visitzee case study">
            <div className="p-7 sm:p-10 lg:p-12 flex flex-col relative z-10">
              <span className="tag w-fit mb-6" style={{ color: "var(--ok)", borderColor: "rgba(74,222,128,0.3)", background: "rgba(74,222,128,0.08)" }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--ok)" }} /> Live in production
              </span>
              <h3 className="text-4xl sm:text-5xl font-bold tracking-[-0.03em] mb-4" style={{ color: "var(--text-1)" }}>{v.title}</h3>
              <p className="text-lg leading-snug mb-8 max-w-md" style={{ color: "var(--text-2)" }}>{v.tagline}</p>

              <div className="flex gap-8 mb-8">
                {v.stats.slice(0, 3).map((st) => (
                  <div key={st.label}>
                    <p className="text-3xl font-bold tracking-tight tabular-nums">{st.value}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-3)" }}>{st.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Razorpay"].map((t) => <span key={t} className="tag">{t}</span>)}
              </div>

              <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--accent-text)" }}>
                Read the case study
                <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>

            <div className="relative min-h-[260px] overflow-hidden">
              <img src={shot} alt="Visitzee owner app" loading="lazy" decoding="async"
                className="absolute top-8 left-0 lg:left-4 w-[125%] max-w-none rounded-tl-2xl object-cover object-top transition-transform duration-500 group-hover:-translate-y-1.5"
                style={{ border: "1px solid var(--border-h)", boxShadow: "0 30px 60px -20px var(--shadow)" }} />
            </div>
          </Link>
        </BentoTile>

        <motion.p {...fadeUp(0.1)} className="text-sm mt-5" style={{ color: "var(--text-3)" }}>
          More case studies are coming; each gets its own page.
        </motion.p>
      </div>
    </section>
  );
};

export default Projects;
