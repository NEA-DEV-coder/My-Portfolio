import React from "react";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../animations/variants";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative py-28 bg-[#111827] overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute right-[-250px] top-[-150px] w-[700px] h-[700px] rounded-full blur-[160px] opacity-20"
        style={{
          background: `
            radial-gradient(circle,
            #3b82f6 0%,
            #8b5cf6 50%,
            transparent 80%)
          `,
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Projects</h2>
          <p className="text-gray-400 mt-4">
            Some of the projects I’ve built recently
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              variants={fadeInUp}
              key={index}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md transition duration-300 hover:scale-[1.02] hover:border-blue-500/40"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl"></div>

              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-2xl lg:text-lg font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4">{project.description}</p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-8">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 transition rounded-lg text-white text-sm"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    className="px-5 py-2 border border-gray-500 hover:border-blue-400 transition rounded-lg text-gray-300 text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
