import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiPhone, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import SplitText from "./ui/SplitText";
import { fadeUp } from "../lib/motion";

const socials = [
  { icon: <FaLinkedin size={16} />, href: "https://www.linkedin.com/in/tejas249/", label: "LinkedIn" },
  { icon: <FaGithub size={16} />, href: "https://github.com/tejas249", label: "GitHub" },
];

const Contact = () => (
  <section id="contact" className="px-5 sm:px-6 py-24 sm:py-32">
    <div className="max-w-5xl mx-auto">
      <SectionHeading index="06" title="Get In Touch" eyebrow="Say hello" />

      <div className="surface p-7 sm:p-12 lg:p-16 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(closest-side, var(--glow), transparent)" }}
        />

        <SplitText
          as="p"
          text="Let's build something together."
          className="relative text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.035em] leading-[0.98] max-w-4xl mb-8"
          style={{ color: "var(--text-1)" }}
        />

        <motion.p {...fadeUp(0.15)} className="relative max-w-xl text-base leading-relaxed mb-10" style={{ color: "var(--text-2)" }}>
          I'm currently open to new opportunities: a full-time role, a freelance project,
          or just a chat about tech. My inbox is always open.
        </motion.p>

        <motion.a
          {...fadeUp(0.2)}
          href={`mailto:${CONTACT.email}`}
          className="group relative inline-flex flex-wrap items-center gap-3 mb-12 max-w-full"
        >
          <span className="btn btn-primary !text-base !px-6 !py-3.5 break-all">
            {CONTACT.email}
            <FiArrowUpRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </motion.a>

        <motion.div {...fadeUp(0.3)} className="relative flex flex-wrap items-center gap-x-8 gap-y-4 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
          <span className="flex items-center gap-2 text-sm" style={{ color: "var(--text-2)" }}>
            <FiMapPin size={14} style={{ color: "var(--text-3)" }} />
            {CONTACT.address}
          </span>
          <a href={`tel:${CONTACT.phoneNo}`} className="flex items-center gap-2 text-sm transition-colors duration-200"
            style={{ color: "var(--text-2)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-2)")}
          >
            <FiPhone size={14} style={{ color: "var(--text-3)" }} />
            {CONTACT.phoneNo.trim()}
          </a>

          <div className="flex items-center gap-2 sm:ml-auto">
            {socials.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{ background: "var(--surface-alt)", border: "1px solid var(--border)", color: "var(--text-2)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-1)"; e.currentTarget.style.borderColor = "var(--border-h)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-2)"; e.currentTarget.style.borderColor = "var(--border)"; }}
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div {...fadeUp(0.4)} className="mt-10 flex items-center justify-between text-xs" style={{ color: "var(--text-3)" }}>
        <span>&copy; {new Date().getFullYear()} Tejas Kamble</span>
        <span className="font-mono">Built with React &amp; Framer Motion</span>
      </motion.div>
    </div>
  </section>
);

export default Contact;
