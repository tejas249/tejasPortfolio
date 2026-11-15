import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiPhone, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import SplitText from "./ui/SplitText";
import { fadeUp } from "../lib/motion";

const socials = [
  { icon: <FaLinkedin size={16} />, href: "https://www.linkedin.com/in/tejas249/", label: "LinkedIn"  },
  { icon: <FaGithub   size={16} />, href: "https://github.com/tejas249",           label: "GitHub"    },
];

const Contact = () => (
  <section id="contact" className="py-28 px-6">
    <div className="max-w-5xl mx-auto">

      <SectionHeading index="06" title="Get In Touch" eyebrow="Say hello" />

      <div className="-mt-10">
        <SplitText
          as="p"
          text="Let's build something together."
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95] max-w-4xl mb-10"
          style={{ color: "var(--text-1)" }}
        />

        <motion.p {...fadeUp(0.15)} className="max-w-xl text-sm sm:text-base leading-relaxed mb-10" style={{ color: "var(--text-3)" }}>
          I'm currently open to new opportunities- whether it's a full-time role,
          freelance project, or just a chat about tech. My inbox is always open.
        </motion.p>

        <motion.a
          {...fadeUp(0.2)}
          href={`mailto:${CONTACT.email}`}
          data-cursor-hover
          className="group flex flex-wrap items-center gap-3 mb-14 font-mono"
        >
          <span
            className="text-lg sm:text-2xl md:text-4xl font-bold tracking-tight transition-colors duration-200 break-all"
            style={{ color: "var(--accent-text)" }}
          >
            {CONTACT.email}
          </span>
          <FiArrowUpRight size={28} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" style={{ color: "var(--accent-text)" }} />
        </motion.a>

        <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center gap-x-10 gap-y-5 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
          <span className="flex items-center gap-2.5 font-mono text-sm" style={{ color: "var(--text-2)" }}>
            <FiMapPin size={14} style={{ color: "var(--text-3)" }} />
            {CONTACT.address}
          </span>
          <a href={`tel:${CONTACT.phoneNo}`} data-cursor-hover
            className="flex items-center gap-2.5 font-mono text-sm transition-colors duration-200"
            style={{ color: "var(--text-2)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-2)")}
          >
            <FiPhone size={14} style={{ color: "var(--text-3)" }} />
            {CONTACT.phoneNo}
          </a>

          <div className="flex items-center gap-3 ml-auto">
            {socials.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                data-cursor-hover
                className="w-9 h-9 flex items-center justify-center transition-all duration-200"
                style={{ background: "var(--surface-alt)", border: "1px solid var(--border-h)", color: "var(--text-2)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-1)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-2)"; e.currentTarget.style.borderColor = "var(--border-h)"; }}
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>

    {/* Footer meta */}
    <motion.div {...fadeUp(0.4)} className="max-w-5xl mx-auto mt-16 font-mono text-[11px]" style={{ color: "var(--text-3)" }}>
      &copy; {new Date().getFullYear()} Tejas Kamble
    </motion.div>

  </section>
);

export default Contact;
