import React from "react";
import { PROJECTS } from "../constants";
import { easeInOut, motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="bg-[#0d0d0d] text-white py-16 px-6 sm:px-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-semibold mb-12"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto ">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            whileHover={{
              scale: 1.03,
              y: -5,
              transition:easeInOut

            }}
            className="relative rounded-2xl border border-gray-800 bg-[#121212]/80 backdrop-blur-md shadow-lg overflow-hidden transition-all duration-500  hover:shadow-white hover:shadow-lg cursor-pointer"
          >
            {/* Image Container */}
            <motion.div
              className="overflow-hidden"
              whileHover={{ scale: 1.02 , transition:easeInOut}}
              transition={{ duration: 0.1 }}
              
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-56 sm:h-60 object-cover rounded-t-2xl transition-transform duration-500 hover:scale-110 lg:hidden"
              />
            </motion.div>

        
            <div className="p-5 sm:p-6 flex flex-col justify-between">
              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xl sm:text-2xl font-semibold mb-2 text-white"
              >
                {project.title}
              </motion.h3>

             
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-gray-400 text-sm sm:text-base mb-4"
              >
                {project.description}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-2 mb-5"
                initial="hidden"
                whileInView="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="rounded-md border border-gray-700 bg-[#1a1a1a]/80 px-2 py-1 text-xs sm:text-sm text-gray-300 hover:border-gray-500 hover:scale-105 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

        
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a
                  whileHover={{
                    scale: 1.07,
                    backgroundColor: "#ffffff",
                    color: "#000000",
                  }}
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center rounded-full border border-gray-400 px-4 py-2 text-sm sm:text-base font-medium text-white hover:shadow-lg transition-all duration-300"
                >
                  Live Demo
                </motion.a>

                <motion.a
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#1f1f1f",
                    color: "#ffffff",
                  }}
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center rounded-full border border-gray-700 bg-[#111111] px-4 py-2 text-sm sm:text-base font-medium text-gray-300 hover:shadow-lg transition-all duration-300"
                >
                  GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
