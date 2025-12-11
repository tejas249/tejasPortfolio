import React from "react";
import {
  RiReactjsLine,
  RiNodeTree
} from "react-icons/ri";
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
} from "react-icons/si";

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
    <section className="px-6 py-16 bg-[#0d0d0d]  text-white">
      
      {/* Header */}
      <h2 className="text-center text-4xl font-bold mb-10 tracking-tight bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
        Tech Stack
      </h2>

      {/* Container */}
      <div className="max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 justify-items-center">
        
        {techStack.map(({ Icon, name, color }, index) => (
          <div
            key={index}
            className="
              flex flex-col items-center justify-center 
              w-20 h-20 sm:w-24 sm:h-24 
              rounded-2xl 
              backdrop-blur-md bg-white/5 
              border border-white/10
              hover:bg-white/10 
              hover:scale-[1.06]
              transition-all duration-300
              shadow-md hover:shadow-white/10
              cursor-pointer
            "
          >
            <Icon className={`text-2xl sm:text-3xl ${color}`} />
            <p className="text-[11px] sm:text-xs opacity-80 mt-1">{name}</p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Technologies;
