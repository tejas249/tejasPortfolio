import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedin size={16} />, href: "https://www.linkedin.com/in/tejas249/", label: "LinkedIn"  },
  { icon: <FaGithub   size={16} />, href: "https://github.com/tejas249",           label: "GitHub"    },
];

const details = [
  { icon: <FiMapPin size={15} />, label: "Location", value: CONTACT.address,  href: null },
  { icon: <FiPhone  size={15} />, label: "Phone",    value: CONTACT.phoneNo,  href: `tel:${CONTACT.phoneNo}` },
  { icon: <FiMail   size={15} />, label: "Email",    value: CONTACT.email,    href: `mailto:${CONTACT.email}` },
];

const Contact = () => (
  <section id="contact" className="py-24 px-4" style={{ borderTop: "1px solid var(--border)" }}>

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5 }}
      className="text-center mb-14"
    >
      <p className="text-sm font-semibold tracking-[0.2em] uppercase text-violet-400 mb-3">Say Hello</p>
      <h2 className="text-4xl font-bold tracking-tight" style={{ color: "var(--text-1)" }}>Get In Touch</h2>
      <div className="mt-4 mx-auto w-12 h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-transparent" />
    </motion.div>

    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="rounded-2xl overflow-hidden"
        style={{ background: "var(--surface)", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)", }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-h)")}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
      >
        <div className="grid md:grid-cols-2">

          {/* ── Left: CTA ── */}
          <div className="p-8 md:p-10 flex flex-col justify-between gap-8"
            style={{ borderRight: "1px solid var(--border)" }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--text-1)" }}>
                Let's build something together
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
                I'm currently open to new opportunities- whether it's a full-time role,
                freelance project, or just a chat about tech. My inbox is always open.
              </p>
            </div>

            {/* Email CTA */}
            <a
              href={`mailto:${CONTACT.email}`}
              className="group inline-flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-semibold w-fit transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                color: "#fff",
                boxShadow: "0 0 20px rgba(124,58,237,0.25)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 28px rgba(124,58,237,0.45)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 20px rgba(124,58,237,0.25)")}
            >
              <FiMail size={15} />
              Say Hello
              <FiArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{ background: "var(--surface-alt)", border: "1px solid var(--border)", color: "var(--text-2)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-1)"; e.currentTarget.style.borderColor = "var(--border-h)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-2)"; e.currentTarget.style.borderColor = "var(--border)"; }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: Details ── */}
          <div className="p-8 md:p-10 flex flex-col justify-center gap-6">
            {details.map(({ icon, label, value, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="flex items-start gap-4"
              >
                {/* Icon box */}
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.25)", color: "#a78bfa" }}
                >
                  {icon}
                </div>

                <div>
                  <p className="text-[11px] font-semibold tracking-widest uppercase mb-0.5" style={{ color: "var(--text-3)" }}>
                    {label}
                  </p>
                  {href
                    ? <a
                        href={href}
                        className="text-sm font-medium transition-colors duration-200"
                        style={{ color: "var(--text-1)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-1)")}
                      >
                        {value}
                      </a>
                    : <p className="text-sm font-medium" style={{ color: "var(--text-1)" }}>{value}</p>
                  }
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>

  </section>
);

export default Contact;
