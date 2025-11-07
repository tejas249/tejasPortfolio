import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/tejas2.jpg"; // your image

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.6 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={container}
      className="w-full min-h-screen flex flex-col gap-8 pt-32 px-6 md:px-20"
    >
      {/* Avatar */}
      <motion.div variants={item} className="flex items-center gap-3">
        <div className="h-24 w-24 rounded-full overflow-hidden border shadow-sm">
          <img
            src={profilePic}
            alt="profile"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-3 w-3 bg-white rounded-full shadow border" />
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={item}
        className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight"
      >
        Hi, I'm <span className="text-black font-bold">Tejas</span> — A Full
        Stack web developer.
      </motion.h1>

      {/* Subtext */}
      <motion.p
        variants={item}
        className="text-lg text-gray-600 max-w-3xl leading-relaxed"
      >
        I build interactive web apps using{" "}
        <span className="px-2 py-1 rounded-md border bg-gray-100 text-gray-800">
          Typescript
        </span>
        ,{" "}
        <span className="px-2 py-1 rounded-md border bg-gray-100 text-gray-800">
          React
        </span>
        ,{" "}
        <span className="px-2 py-1 rounded-md border bg-gray-100 text-gray-800">
          Next.js
        </span>{" "}
        and{" "}
        <span className="px-2 py-1 rounded-md border bg-gray-100 text-gray-800">
          PostgreSQL
        </span>
        . With a focus on <span className="font-semibold">UI design</span>.
        Enthusiastic about{" "}
        <span className="font-semibold">Three.js</span>, driven by a strong eye
        for design.
      </motion.p>

      {/* Buttons */}
      <motion.div variants={item} className="flex gap-4 mt-4">
        <button className="border px-4 py-2 rounded-lg hover:bg-gray-100 transition">
          Resume / CV
        </button>
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
          Get in touch
        </button>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        variants={item}
        className="flex gap-5 text-gray-600 text-xl mt-4"
      >
        {/* Replace with your icons */}
        <span>🌐</span>
        <span>💼</span>
        <span>📷</span>
        <span>📧</span>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
