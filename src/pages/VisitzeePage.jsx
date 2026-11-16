import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { VISITZEE } from "../constants";
import { useTheme } from "../context/ThemeContext";
import logoOnDark from "../assets/brand/visitzee-logo-on-dark.svg";
import logoOnLight from "../assets/brand/visitzee-logo-on-light.svg";
import Marquee from "../components/ui/Marquee";
import ArchitectureDiagram from "../components/ui/ArchitectureDiagram";
import CountUp from "../components/ui/CountUp";
import { Gallery } from "../components/visitzee/Gallery";
import { AppCard, LinkBtn } from "../components/visitzee/AppCards";
import FeatureBento from "../components/visitzee/FeatureBento";
import { fadeUp } from "../lib/motion";

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

const VisitzeePage = () => {
  const v = VISITZEE;
  const { isDark } = useTheme();
  const num = (s) => parseInt(s, 10);
  return (
    <article className="px-5 sm:px-6 pt-6 pb-28">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp(0)}>
          <Link to="/" className="inline-flex items-center gap-2 text-sm mb-10" style={{ color: "var(--text-3)" }}>
            <ArrowLeft size={15} /> All projects
          </Link>
        </motion.div>

        {/* Header */}
        <header className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-end">
          <div>
            <span className="tag mb-6" style={{ color: "var(--ok)", borderColor: "rgba(74,222,128,0.3)", background: "rgba(74,222,128,0.08)" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--ok)" }} /> Live in production · {v.role}
            </span>
            <motion.h1 {...fadeUp(0.05)} className="mb-7">
              <img src={isDark ? logoOnDark : logoOnLight} alt="Visitzee" width="941" height="260" className="h-16 sm:h-24 w-auto" />
            </motion.h1>
            <p className="text-xl sm:text-2xl leading-snug max-w-xl" style={{ color: "var(--text-2)" }}>{v.tagline}</p>
          </div>
          <motion.div {...fadeUp(0.2)} className="flex flex-col gap-6">
            <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-2)" }}>{v.pitch}</p>
            <div className="flex flex-wrap gap-2.5">
              {v.links.map((l, i) => (
                <LinkBtn key={l.label} href={l.href} active icon={<ExternalLink size={13} />} label={l.label} primary={i === 0} />
              ))}
            </div>
          </motion.div>
        </header>

        {/* Stats */}
        <motion.div {...fadeUp(0.1)} className="mt-14 grid grid-cols-2 sm:grid-cols-5 gap-px rounded-3xl overflow-hidden" style={{ background: "var(--border)", border: "1px solid var(--border)" }}>
          {v.stats.map((st) => (
            <div key={st.label} className="p-6" style={{ background: "var(--bg)" }}>
              <p className="text-4xl font-bold tracking-tight"><CountUp to={num(st.value)} suffix={st.value.replace(/[0-9]/g, "")} /></p>
              <p className="text-xs mt-1" style={{ color: "var(--text-3)" }}>{st.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Gallery */}
        <div className="mt-14"><Gallery gallery={v.gallery} /></div>

        {/* Problem / approach */}
        <Block kicker="Overview" title="From phone calls to a live booking site">
          <div className="grid md:grid-cols-2 gap-4">
            {[v.caseStudy.problem, v.caseStudy.approach].map((c, i) => (
              <motion.div key={c.title} {...fadeUp(i * 0.08)} className="surface p-7 sm:p-9">
                <Kicker>{i === 0 ? "The problem" : "The approach"}</Kicker>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">{c.title}</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-2)" }}>{c.body}</p>
              </motion.div>
            ))}
          </div>
        </Block>

        {/* Architecture */}
        <Block kicker="Architecture" title="One product, four apps">
          <div className="hidden md:block surface p-6 sm:p-8 mb-4"><ArchitectureDiagram /></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {v.apps.map((app, i) => <AppCard key={app.name} app={app} delay={i * 0.06} />)}
          </div>
        </Block>

        {/* Under the hood: bento */}
        <Block kicker="Under the hood" title="Built like a real product, not a demo">
          <FeatureBento features={v.features} />
        </Block>

        {/* Stack */}
        <motion.div {...fadeUp()} className="mt-24">
          <p className="eyebrow text-center mb-5">Built with</p>
          <div className="py-3" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
            <Marquee items={v.stack} />
          </div>
        </motion.div>

        <div className="mt-16 flex justify-center">
          <Link to="/" className="btn"><ArrowLeft size={15} /> Back to all projects</Link>
        </div>
      </div>
    </article>
  );
};

export default VisitzeePage;
