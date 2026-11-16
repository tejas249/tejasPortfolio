import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { EXPERIENCE } from "../constants/experience";
import SectionHeading from "./ui/SectionHeading";
import BentoTile from "./ui/BentoTile";

// Landing page: one short row per company. Details live on /experience/:slug.
const Experience = () => (
  <section id="experience" className="px-5 sm:px-6 py-24 sm:py-28">
    <div className="max-w-5xl mx-auto">
      <SectionHeading index="03" title="Experience" eyebrow="Career" />

      <div className="flex flex-col gap-4">
        {EXPERIENCE.map((e, i) => (
          <BentoTile key={e.slug} delay={i * 0.08} className="group">
            <Link to={`/experience/${e.slug}`} aria-label={`Read more about ${e.company}`}
              className="grid sm:grid-cols-[200px_1fr_auto] gap-4 sm:gap-8 items-start p-6 sm:p-8">
              <div>
                <p className="font-mono text-xs mb-2" style={{ color: "var(--text-3)" }}>{e.period}</p>
                {e.current && (
                  <span className="tag" style={{ color: "var(--ok)", borderColor: "rgba(74,222,128,0.3)", background: "rgba(74,222,128,0.08)" }}>
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--ok)" }} /> Current
                  </span>
                )}
              </div>
              <div className="min-w-0">
                <h3 className="text-2xl font-semibold tracking-tight" style={{ color: "var(--text-1)" }}>{e.company}</h3>
                <p className="text-sm mt-1 mb-3" style={{ color: "var(--accent-text)" }}>{e.roles[0].title}</p>
                <p className="text-[15px] leading-relaxed mb-4 max-w-xl" style={{ color: "var(--text-2)" }}>{e.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {e.tech.slice(0, 4).map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
              <span className="hidden sm:flex w-10 h-10 rounded-full items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ background: "var(--surface-alt)", color: "var(--text-1)" }}>
                <ArrowUpRight size={17} />
              </span>
            </Link>
          </BentoTile>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
