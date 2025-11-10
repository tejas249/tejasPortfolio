import React from "react";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin
} from "react-icons/fa";
import { 
  SiReact, 
  
  SiShadcnui,
  SiSupabase,
  SiJavascript,
  SiNextui
} from "react-icons/si";
import profilePic from "../assets/tejas2.jpg";

const techStack = [
  { name: "Javascript", icon: <SiJavascript className="inline text-blue-500 mr-1" /> },
  { name: "React", icon: <SiReact className="inline text-cyan-400 mr-1" /> },
  { name: "Next.js", icon: <SiNextui className="inline text-gray-300 mr-1" /> },
  { name: "Shadcn", icon: <SiShadcnui className="inline text-gray-200 mr-1" /> },
  { name: "Supabase", icon: <SiSupabase className="inline text-sky-500 mr-1" /> },
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
        <motion.img
          src={profilePic}
          alt="Tejas Kamble"
          className="w-28 h-28 rounded-full border-4 border-[#1f1f1f] object-cover shadow-lg hover:cursor-pointer hover:shadow-md hover:shadow-white "
          whileHover={{rotate:20}}
        />
      </motion.div>


      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-semibold text-gray-100 "
      >
        Hi, I'm <span className="text-white font-bold">Tejas</span>
        <span className="bg-gradient-to-bl from-stone-50 to-slate-900 bg-clip-text text-transparent hover:text-white"> Full Stack Developer.</span>
      </motion.h1>

    
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="max-w-2xl mt-7 text-lg sm:text-xl text-gray-400"
      >
        I build interactive web apps using{" "}
        <motion.span 
          className="inline-flex flex-wrap justify-center  hover:cursor-pointer"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          drag whileDrag={{ scale: 1.2, backgroundColor: "#f00" }}
        >
          {techStack.map((tech, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="mx-1 h-10 mt-5 my-1 p-2 inline-flex items-center rounded-md border border-gray-700 bg-[#121212] px-2 py-1 text-sm text-gray-300 shadow-sm hover:bg-[#1a1a1a] transition-all duration-300 hover:border-white border-dotted"
            >
              {tech.icon} {tech.name}
            </motion.span>
          ))}
        </motion.span>
      </motion.p>

      
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
          href="https://drive.google.com/file/d/1a5xESYrI4OzKIsddqK81XmN066BTvaRn/view?usp=share_link"
          className="border bg-gray-900 border-gray-600 transition-all duration-300 rounded-full px-6 py-2 font-medium text-sm flex items-center gap-2 hover:shadow-sm hover:shadow-white"
        >
          📄 Resume / CV
        </motion.a>
        <motion.a
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          href="#contact"
          className="bg-gray-900 text-white  hover:shadow-sm hover:shadow-white transition-all duration-300 rounded-full px-6 py-2 font-medium text-sm flex items-center gap-2"
        >
          ✉️ Get in touch
        </motion.a>
      </motion.div>

  
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-8 flex justify-center gap-6 text-2xl text-gray-400"
      >
        <a href="https://www.linkedin.com/in/tejas249/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300">
          <FaLinkedin />
        </a>
        <a href="https://github.com/tejas249" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300">
          <FaGithub />
        </a>
        
      </motion.div>
    </section>
  );
};

export default Hero;
