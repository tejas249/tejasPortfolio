import React from 'react';

const Experience = ({ experiences }) => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl text-white">Experience</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {experiences.map((experience, index) => (
          <div key={index} className="w-full max-w-xl lg:w-3/4 bg-stone-800 p-6 rounded shadow-md">
            <h3 className="mb-2 font-semibold text-white">
              {experience.role} -{" "}
              <span className="text-sm text-stone-400">{experience.company}</span>
            </h3>
            <p className="mb-4 text-stone-400">{experience.description}</p>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
