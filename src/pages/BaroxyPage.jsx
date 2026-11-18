import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Dices, Palette, Eye, Link2, ShieldCheck, FlaskConical } from "lucide-react";
import { BAROXY } from "../constants";
import bxIcon from "../assets/brand/baroxy-icon.svg";
import Marquee from "../components/ui/Marquee";
import CountUp from "../components/ui/CountUp";
import BentoTile from "../components/ui/BentoTile";
import { LinkBtn } from "../components/visitzee/AppCards";
import { fadeUp } from "../lib/motion";

const ICONS = { dice: Dices, palette: Palette, eye: Eye, link: Link2, shield: ShieldCheck, flask: FlaskConical };
const SWATCHES = [["Background", "#2a0f1a"], ["Surface", "#4a1730"], ["Text", "#f3ece2"], ["Border", "#7a3a52"], ["Accent", "#6b1d3a"], ["Highlight", "#e0a085"]];

const Kicker = ({ children }) => <p className="eyebrow mb-3" style={{ color: "var(--accent-text)" }}>{children}</p>;

const Block = ({ kicker, title, children }) => (
  <section className="mt-24 sm:mt-28">
    <motion.div {...fadeUp()} className="mb-8 max-w-2xl">
      <Kicker>{kicker}</Kicker>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em]" style={{ color: "var(--text-1)" }}>{title}</h2>
    </motion.div>
    {children}
  </section>
);

const Code = ({ children }) => (
  <code className="block font-mono text-[12px] leading-relaxed rounded-xl px-3.5 py-3 whitespace-pre-wrap break-words"
    style={{ background: "var(--surface-alt)", border: "1px solid var(--border)", color: "var(--text-1)" }}>
    <span style={{ color: "var(--text-3)" }}>$ </span>{children}
  </code>
);

/* A preset's anatomy, drawn once: the roles a preset defines */
const PresetCard = () => (
  <div className="surface p-6 sm:p-7" aria-hidden>
    <p className="eyebrow mb-4">What one preset defines</p>
    <div className="grid grid-cols-3 gap-2">
      {SWATCHES.map(([n, c]) => (
        <div key={n}>
          <div className="h-14 rounded-xl" style={{ background: c, border: "1px solid var(--border-h)" }} />
          <p className="text-[11px] mt-1.5" style={{ color: "var(--text-3)" }}>{n}</p>
        </div>
      ))}
    </div>
    <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[12px]" style={{ color: "var(--text-2)" }}>
      {["Type pairing", "Radius and spacing", "Motion feel"].map((t) => (
        <span key={t} className="px-2 py-2 rounded-lg" style={{ background: "var(--surface-alt)", border: "1px solid var(--border)" }}>{t}</span>
      ))}
    </div>
  </div>
);

const BaroxyPage = () => {
  const b = BAROXY;
  return (
    <article className="px-5 sm:px-6 pt-6 pb-28">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp(0)}>
          <Link to="/" className="inline-flex items-center gap-2 text-sm mb-10" style={{ color: "var(--text-3)" }}>
            <ArrowLeft size={15} /> All projects
          </Link>
        </motion.div>

        <header className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-end">
          <div>
            <span className="tag mb-6" style={{ color: "var(--ok)", borderColor: "rgba(74,222,128,0.3)", background: "rgba(74,222,128,0.08)" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--ok)" }} /> Live · {b.role}
            </span>
            <motion.h1 {...fadeUp(0.05)} className="flex items-center gap-4 sm:gap-6 mb-6">
              <img src={bxIcon} alt="" width="96" height="96" className="w-16 h-16 sm:w-24 sm:h-24" />
              <span className="text-6xl sm:text-8xl font-bold tracking-[-0.04em]">{b.title}</span>
            </motion.h1>
            <p className="text-xl sm:text-2xl leading-snug max-w-xl" style={{ color: "var(--text-2)" }}>{b.tagline}</p>
          </div>
          <motion.div {...fadeUp(0.2)} className="flex flex-col gap-6">
            <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-2)" }}>{b.pitch}</p>
            <div className="flex flex-wrap gap-2.5">
              {b.links.map((l, i) => <LinkBtn key={l.label} href={l.href} active icon={<ExternalLink size={13} />} label={l.label} primary={i === 0} />)}
            </div>
          </motion.div>
        </header>

        <motion.div {...fadeUp(0.1)} className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-3xl overflow-hidden" style={{ background: "var(--border)", border: "1px solid var(--border)" }}>
          {b.stats.map((st) => (
            <div key={st.label} className="p-6" style={{ background: "var(--bg)" }}>
              <p className="text-4xl font-bold tracking-tight"><CountUp to={parseInt(st.value, 10)} /></p>
              <p className="text-xs mt-1" style={{ color: "var(--text-3)" }}>{st.label}</p>
            </div>
          ))}
        </motion.div>

        <Block kicker="Overview" title="Why every AI-coded app looks the same">
          <div className="grid md:grid-cols-2 gap-4">
            {[b.caseStudy.problem, b.caseStudy.approach].map((c, i) => (
              <motion.div key={c.title} {...fadeUp(i * 0.08)} className="surface p-7 sm:p-9">
                <Kicker>{i === 0 ? "The problem" : "The approach"}</Kicker>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">{c.title}</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-2)" }}>{c.body}</p>
              </motion.div>
            ))}
          </div>
        </Block>

        <Block kicker="How it works" title="One brief in, one locked identity out">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-4">
            <div className="grid gap-4">
              {b.steps.map((s, i) => (
                <motion.div key={s.title} {...fadeUp(i * 0.08)} className="surface p-6 flex gap-5 items-start">
                  <span className="font-mono text-sm shrink-0 w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "var(--accent-soft-bg)", color: "var(--accent-text)" }}>{i + 1}</span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
                    <p className="text-[14px] leading-relaxed mt-1" style={{ color: "var(--text-2)" }}>{s.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <PresetCard />
          </div>
        </Block>

        <Block kicker="Three ways in" title="Use it on the web, in the terminal or from your agent">
          <div className="grid md:grid-cols-3 gap-4">
            {b.surfaces.map((s, i) => (
              <BentoTile key={s.name} delay={i * 0.06} className="p-6 sm:p-7 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight">{s.name}</h3>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${s.name}`} style={{ color: "var(--text-3)" }}><ExternalLink size={15} /></a>
                </div>
                <p className="font-mono text-xs" style={{ color: "var(--text-3)" }}>{s.note}</p>
                <p className="text-[14px] leading-relaxed" style={{ color: "var(--text-2)" }}>{s.body}</p>
                {s.code && <div className="mt-auto pt-3"><Code>{s.code}</Code></div>}
              </BentoTile>
            ))}
          </div>
        </Block>

        <Block kicker="Under the hood" title="Built like a real product, not a demo">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {b.features.map((f, i) => {
              const Icon = ICONS[f.icon];
              return (
                <BentoTile key={f.title} delay={(i % 3) * 0.06} className="p-6 sm:p-7 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--accent-soft-bg)" }}>
                      <Icon size={16} style={{ color: "var(--accent-text)" }} />
                    </span>
                    <h4 className="text-base font-semibold tracking-tight">{f.title}</h4>
                  </div>
                  <p className="text-[13.5px] leading-relaxed" style={{ color: "var(--text-2)" }}>{f.body}</p>
                </BentoTile>
              );
            })}
          </div>
        </Block>

        <motion.div {...fadeUp()} className="mt-24">
          <p className="eyebrow text-center mb-5">Built with</p>
          <div className="py-3" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
            <Marquee items={b.stack} />
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            {b.npm.map((l) => <LinkBtn key={l.label} href={l.href} active icon={<ExternalLink size={13} />} label={l.label} />)}
          </div>
        </motion.div>

        <div className="mt-16 flex justify-center">
          <Link to="/" className="btn"><ArrowLeft size={15} /> Back to all projects</Link>
        </div>
      </div>
    </article>
  );
};

export default BaroxyPage;
