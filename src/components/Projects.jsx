import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  // Latest projects: Reevio (index 1), AI Fusion (index 2), InsiderJobs (index 3)
  const latestProjects = [PROJECTS[1], PROJECTS[2], PROJECTS[3]];
  // Other projects: Everything else
  const olderProjects = [PROJECTS[0], PROJECTS[4], PROJECTS[5], PROJECTS[6], PROJECTS[7], PROJECTS[8]];

  const [showMore, setShowMore] = React.useState(false);

  return (
    <section className="bg-[#0d0d0d] text-white py-20 px-6 sm:px-10">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent"
      >
        Featured Projects
      </motion.h2>

      {/* ========== LATEST PROJECTS SECTION ========== */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-8 text-center text-gray-300">Latest Works</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {latestProjects.map((project) => (
            <Card key={project.title} project={project} isLatest={true} />
          ))}
        </div>
      </div>

      {/* ========== SHOW MORE BUTTON ========== */}
      {!showMore && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center my-16"
        >
          <button
            onClick={() => setShowMore(true)}
            className="px-10 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-2 border-cyan-500/50 text-white font-semibold hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
          >
            View More Projects
          </button>
        </motion.div>
      )}

      {/* ========== OLDER PROJECTS SECTION ========== */}
      {showMore && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-300">More Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {olderProjects.map((project) => (
              <Card key={project.title} project={project} isLatest={false} />
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;

/* ============================
   REUSABLE CARD COMPONENT
=============================== */

const Card = ({ project, isLatest }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group relative h-full flex flex-col"
    >
      {/* Gradient Border Background */}
      <div
        className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10
          ${isLatest 
            ? 'bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500' 
            : 'bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500'
          }
          blur-xl`}
      />

      <div
        className={`
          relative rounded-xl overflow-hidden
          bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]
          transition-all duration-300 
          group
          hover:shadow-2xl
          flex flex-col h-full
          ${isLatest 
            ? 'border-2 border-cyan-500/30 hover:border-cyan-400/50' 
            : 'border-2 border-blue-500/30 hover:border-blue-400/50'
          }
        `}
      >
        {/* Project Image Container */}
        <div className="relative overflow-hidden h-64 flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Image Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        {/* Hover Overlay */}
       <div
  className="
    absolute top-0 left-0 w-full h-64 
    bg-gradient-to-b from-black/80 to-black/90 opacity-0 
    group-hover:opacity-100 transition-all duration-300 
    flex flex-col justify-center items-center px-2 text-center
  "
>

          <h3 className={`text-2xl font-bold mb-3 ${isLatest ? 'text-cyan-300' : 'text-blue-300'}`}>
            {project.title}
          </h3>

          <p className="text-gray-200 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 justify-center">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className={`rounded-md border px-2 py-1 text-xs font-medium
                  ${isLatest 
                    ? 'border-cyan-500/30 bg-cyan-500/5 text-cyan-200' 
                    : 'border-blue-500/30 bg-blue-500/5 text-blue-200'
                  }`}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs text-gray-400">+{project.technologies.length - 3} more</span>
            )}
          </div>
        </div>

        {/* Project Info & Buttons */}
        <div className={`p-6 border-t border-gray-700/30 bg-[#0a0a0a]/80 backdrop-blur-sm flex-grow flex flex-col justify-between
          ${isLatest 
            ? 'border-t-cyan-500/20' 
            : 'border-t-blue-500/20'
          }`}
        >
          <h3 className="text-lg font-semibold text-white mb-4 truncate">
            {project.title}
          </h3>
          
          <div className="flex gap-3 mt-auto">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex-1 text-center rounded-lg px-4 py-2 
                text-sm font-semibold transition-all duration-300
                ${project.liveLink 
                  ? 'border border-gray-500 text-white hover:bg-white hover:text-black hover:border-white hover:shadow-lg' 
                  : 'border border-gray-600 text-gray-500 cursor-not-allowed opacity-50'
                }
              `}
              onClick={(e) => !project.liveLink && e.preventDefault()}
            >
               Live
            </a>

            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex-1 text-center rounded-lg border border-gray-600 bg-gray-900/50
                px-4 py-2 text-sm font-semibold text-gray-300 
                hover:bg-gray-800 hover:border-gray-500 
                transition-all duration-300
              "
            >
               Github
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
