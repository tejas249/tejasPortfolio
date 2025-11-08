import React from "react";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaYoutube 
} from "react-icons/fa";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiPostgresql, 
  SiBun 
} from "react-icons/si";
import profilePic from "../assets/tejas2.jpg";

const techStack = [
  { name: "Typescript", icon: <SiTypescript className="inline text-blue-500 mr-1" /> },
  { name: "React", icon: <SiReact className="inline text-cyan-400 mr-1" /> },
  { name: "Next.js", icon: <SiNextdotjs className="inline text-gray-300 mr-1" /> },
  { name: "Bun", icon: <SiBun className="inline text-gray-200 mr-1" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="inline text-sky-500 mr-1" /> },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[#0d0d0d] text-white">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <img
          src={profilePic}
          alt="Tejas Kamble"
          className="w-28 h-28 rounded-full border-4 border-[#1f1f1f] object-cover shadow-lg"
        />
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-semibold text-gray-100"
      >
        Hi, I'm <span className="text-white font-bold">Tejas</span> — A{" "}
        <span className="text-gray-300">Full Stack Web Developer.</span>
      </motion.h1>

      {/* Description with staggered badges */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="max-w-2xl mt-5 text-lg sm:text-xl text-gray-400"
      >
        I build interactive web apps using{" "}
        <motion.span 
          className="inline-flex flex-wrap justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {techStack.map((tech, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="mx-1 my-1 inline-flex items-center rounded-md border border-gray-700 bg-[#121212] px-2 py-1 text-sm text-gray-300 shadow-sm hover:bg-[#1a1a1a] transition-all duration-300"
            >
              {tech.icon} {tech.name}
            </motion.span>
          ))}
        </motion.span>
        . <br />
        With a focus on{" "}
        <span className="font-semibold text-gray-200">UI design</span>, enthusiastic about{" "}
        <span className="font-semibold text-gray-200">Three.js</span>, driven by a keen eye for{" "}
        <span className="font-semibold text-gray-200">aesthetics & performance.</span>
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 1.5, staggerChildren: 0.2 },
          },
        }}
        className="mt-8 flex flex-wrap justify-center gap-4"
      >
        <motion.a
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          href="#resume"
          className="border border-gray-600 hover:bg-gray-100 hover:text-black transition-all duration-300 rounded-full px-6 py-2 font-medium text-sm flex items-center gap-2"
        >
          📄 Resume / CV
        </motion.a>
        <motion.a
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          href="#contact"
          className="bg-white text-black hover:bg-gray-200 transition-all duration-300 rounded-full px-6 py-2 font-medium text-sm flex items-center gap-2"
        >
          ✉️ Get in touch
        </motion.a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-8 flex justify-center gap-6 text-2xl text-gray-400"
      >
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300">
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300">
          <FaGithub />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300">
          <FaYoutube />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300">
          <FaInstagram />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
