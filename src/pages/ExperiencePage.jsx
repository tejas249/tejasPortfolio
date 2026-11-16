import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { EXPERIENCE } from "../constants/experience";
import SplitText from "../components/ui/SplitText";
import SpecRow from "../components/ui/SpecRow";
import { fadeUp } from "../lib/motion";

const ExperiencePage = () => {
  const { slug } = useParams();
  const i = EXPERIENCE.findIndex((e) => e.slug === slug);
  if (i < 0) return <Navigate to="/" replace />;
  const e = EXPERIENCE[i];
  const other = EXPERIENCE[(i + 1) % EXPERIENCE.length];

  return (
    <article className="px-5 sm:px-6 pt-6 pb-28">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeUp(0)}>
          <Link to="/" className="inline-flex items-center gap-2 text-sm mb-10" style={{ color: "var(--text-3)" }}>
            <ArrowLeft size={15} /> All experience
          </Link>
        </motion.div>

        <header className="mb-12">
          {e.current && (
            <span className="tag mb-6" style={{ color: "var(--ok)", borderColor: "rgba(74,222,128,0.3)", background: "rgba(74,222,128,0.08)" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--ok)" }} /> Current
            </span>
          )}
          <h1 className="text-5xl sm:text-7xl font-bold tracking-[-0.035em] leading-[0.98] mb-5">
            <SplitText as="span" text={e.company} delay={0.05} />
          </h1>
          <p className="text-lg max-w-xl" style={{ color: "var(--text-2)" }}>{e.summary}</p>
        </header>

        <motion.div {...fadeUp(0.1)} className="surface px-6 sm:px-8 mb-14">
          <SpecRow label="Period" value={e.period} />
          <SpecRow label="Location" value={e.location} />
          <div className="py-3.5 flex items-center justify-between gap-4">
            <span className="text-sm" style={{ color: "var(--text-3)" }}>Roles</span>
            <span className="text-sm font-semibold text-right">{e.roles.map((r) => r.title).join(" · ")}</span>
          </div>
        </motion.div>

        {/* Timeline: the line draws itself as you scroll in */}
        <div className="relative pl-8 sm:pl-12">
          <motion.span aria-hidden className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px origin-top"
            style={{ background: "linear-gradient(var(--accent), var(--border-h))" }}
            initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }} />
          <div className="space-y-12">
            {e.roles.map((r) => (
              <motion.section key={r.title} {...fadeUp(0.05)} className="relative">
                <span aria-hidden className="absolute -left-8 sm:-left-12 top-1.5 w-[15px] sm:w-[23px] flex justify-center">
                  <span className="w-3.5 h-3.5 rounded-full" style={{ background: "var(--bg)", border: "2px solid var(--accent)" }} />
                </span>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
                  <h2 className="text-2xl font-semibold tracking-tight">{r.title}</h2>
                  <span className="tag">{r.duration}</span>
                </div>
                <ul className="space-y-3.5">
                  {r.highlights.map((pt, k) => (
                    <li key={k} className="text-[15px] leading-relaxed" style={{ color: "var(--text-2)" }}>{pt}</li>
                  ))}
                </ul>
              </motion.section>
            ))}
          </div>
        </div>

        <motion.div {...fadeUp()} className="mt-16">
          <p className="eyebrow mb-4">Technologies</p>
          <div className="flex flex-wrap gap-2">{e.tech.map((t) => <span key={t} className="tag">{t}</span>)}</div>
        </motion.div>

        {EXPERIENCE.length > 1 && (
          <Link to={`/experience/${other.slug}`} className="bento mt-16 flex items-center justify-between p-6 sm:p-8 group">
            <div>
              <p className="eyebrow mb-1">Next</p>
              <p className="text-xl font-semibold tracking-tight">{other.company}</p>
            </div>
            <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" style={{ color: "var(--accent-text)" }} />
          </Link>
        )}
      </div>
    </article>
  );
};

export default ExperiencePage;
