import React from 'react';
import { 
  RiReactjsLine, 
  RiNodeTree 
} from 'react-icons/ri'; 
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  SiBootstrap, 
  SiCplusplus, 
  SiMysql, 
  SiRecoil,
  SiSupabase,
  SiFirebase,
  SiShadcnui,
} from 'react-icons/si';
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const techStack = [
  { Icon: RiReactjsLine, name: "React", color: "text-cyan-400" },
  { Icon: SiHtml5, name: "HTML", color: "text-orange-500" },
  { Icon: SiCss3, name: "CSS", color: "text-blue-500" },
  { Icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
  { Icon: RiNodeTree, name: "Node.js", color: "text-green-500" },
  { Icon: SiExpress, name: "Express", color: "text-gray-300" },
  { Icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
  { Icon: SiCplusplus, name: "C++", color: "text-blue-600" },
  { Icon: SiMysql, name: "SQL", color: "text-blue-400" },
  { Icon: SiTailwindcss, name: "Tailwind", color: "text-teal-400" },
  { Icon: SiBootstrap, name: "Bootstrap", color: "text-purple-500" },
  { Icon: SiRecoil, name: "Recoil", color: "text-indigo-400" },
  { Icon: SiSupabase, name: "Supabase", color: "text-emerald-400" },
  { Icon: SiFirebase, name: "Firebase", color: "text-yellow-500" },
  { Icon: SiShadcnui, name: "Shadcn", color: "text-pink-400" },
];

const Technologies = () => {
  return (
    <div className="px-6 py-16 bg-[#0d0d0d] text-white">
      {/* Title */}
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl font-semibold mb-12"
      >
        Technologies
      </motion.h2>

      {/* Tech Grid */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 80 }}
        transition={{ duration: 1.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center"
      >
        {techStack.map(({ Icon, name, color }, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            variants={iconVariants(2 + index * 0.2)}
            whileHover={{
              scale: 1.2,
              rotate: 0.5,
              boxShadow: "0 0 20px rgba(255,255,255,0.2)",
            }}
            className="flex flex-col items-center justify-center w-32 h-32 border border-gray-700 rounded-2xl shadow-lg transition-all duration-300 bg-[#121212]/70 backdrop-blur-md  hover:shadow-white hover:shadow-lg cursor-pointer"
          >
            <Icon className={`text-6xl mb-2 ${color}`} />
            <p className="text-sm font-medium">{name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
