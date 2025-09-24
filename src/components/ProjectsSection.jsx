// src/components/ProjectsSection.js
import React from "react";
import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaCodeBranch,
  FaServer,
  FaPalette,
} from "react-icons/fa";
import Project1 from "../assets/project1.png";
import Tomatoo from "../assets/tomatoo.png";
import Amazone from "../assets/amazone.png";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "College Management System",
      description:
        "Designed and developed an online platform to manage academic operations including admissions, enrollment, attendance, and exam scheduling.",
      details:
        "Our project provides every facility for college management like student records, faculty records, attendance tracking, exam management, and fee receipts. By making this project we learned that teamwork and unity make all things possible.",
      image: Project1,
      tags: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Tomato Food Delivery",
      description:
        "Developed a food ordering web application using ReactJS with responsive design and API integration.",
      details:
        "This React application allows users to explore menu items, add items to their cart, place orders, and proceed to checkout. It features a responsive design and utilizes React Router for navigation.",
      image: Tomatoo,
      tags: ["React", "Bootstrap", "API Integration"],
      demoLink: "https://testy-food-delivery.netlify.app/",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Amazon Clone",
      description:
        "Created a static front-end clone of Amazon's homepage with responsive layout and product categories.",
      details:
        "This project focused on recreating Amazon's UI using modern HTML and CSS techniques. It features responsive design, product cards, and category navigation.",
      image: Amazone,
      tags: ["HTML5", "CSS3", "Responsive Design"],
      demoLink: "https://learnamazon.netlify.app/",
      githubLink: "#",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardHover = {
    hover: {
      y: -10,
      scale: 1.01,
      boxShadow: "0 25px 60px -15px rgba(251, 191, 36, 0.25)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      {/* Gradient background overlay */}
      <div className="absolute inset-0 z-0 "></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Responsive blob sizes */}
        <div className="absolute top-20 left-1/4 w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-indigo-700 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-40 right-10 sm:right-20 w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-amber-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 sm:right-1/3 w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 bg-emerald-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,41,59,0.4)_0%,rgba(15,23,42,0)_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-10 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block text-sm font-mono text-amber-400 mb-3 px-4 py-2 rounded-full bg-slate-800/50 border border-amber-400/20 backdrop-blur-sm"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(251, 191, 36, 0.1)",
            }}
          >
            PROJECT SHOWCASE
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Featured <span className="text-amber-400">Projects</span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-300 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Explore my recent work showcasing innovative solutions and technical
            expertise
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-12 sm:space-y-14 md:space-y-16"
        >
          {projects.map((project, index) => (
            <motion.div
              className="bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-5 sm:p-6 md:p-8 relative overflow-hidden"
              variants={cardHover}
              whileHover="hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={project.id}
            >
              {/* Project accent */}
              <div
                className={`absolute top-0 left-0 w-0.5 sm:w-1 h-full ${
                  index === 0
                    ? "bg-amber-400"
                    : index === 1
                    ? "bg-emerald-400"
                    : "bg-indigo-400"
                }`}
              ></div>

              {/* Glow effect - hidden on mobile */}
              <div
                className={`hidden sm:block absolute -top-20 -right-20 w-64 h-64 rounded-full ${
                  index === 0
                    ? "bg-amber-500"
                    : index === 1
                    ? "bg-emerald-500"
                    : "bg-indigo-500"
                } opacity-10 blur-3xl`}
              ></div>

              <div
                className={`flex flex-col gap-6 sm:gap-8 md:gap-10 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="w-full md:w-1/2">
                  <div className="rounded-xl overflow-hidden border border-slate-700/50 shadow-xl relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${
                        index === 0
                          ? "from-amber-900/20"
                          : index === 1
                          ? "from-emerald-900/20"
                          : "from-indigo-900/20"
                      } to-transparent z-10`}
                    ></div>

                    <div className="relative aspect-video overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-3 mt-5 sm:mt-6 md:mt-8">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-lg bg-slate-900/40 text-slate-200 border border-slate-700 backdrop-blur-sm"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor:
                            index === 0
                              ? "rgba(251, 191, 36, 0.1)"
                              : index === 1
                              ? "rgba(52, 211, 153, 0.1)"
                              : "rgba(129, 140, 248, 0.1)",
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex flex-row gap-5 sm:space-x-4 space-y-3 sm:space-y-0 mt-6 md:mt-8">
                    {project.demoLink && (
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium py-2.5 sm:py-3 px-5 sm:px-7 rounded-lg transition-all group relative overflow-hidden text-sm sm:text-base"
                        whileHover={{ scale: 1.03 }}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <FaExternalLinkAlt className="text-sm sm:text-base" />
                          <span>Live Demo</span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </motion.a>
                    )}
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 sm:gap-3 text-white font-medium py-2.5 sm:py-3 px-5 sm:px-7 rounded-lg border-2 border-slate-700 hover:border-slate-600 bg-slate-900/40 hover:bg-slate-800/60 backdrop-blur-sm transition-all group text-sm sm:text-base"
                        whileHover={{ scale: 1.03 }}
                      >
                        <span className="flex items-center gap-2">
                          <FaGithub className="text-sm sm:text-base" />
                          <span>View Code</span>
                        </span>
                      </motion.a>
                    )}
                  </div>
                </div>

                <div className="md:w-1/2">
                  <div className="flex items-center mb-2">
                    <span
                      className={`inline-block w-3 h-3 rounded-full mr-3 ${
                        index === 0
                          ? "bg-amber-400"
                          : index === 1
                          ? "bg-emerald-400"
                          : "bg-indigo-400"
                      }`}
                    ></span>
                    <span className="text-sm font-mono text-slate-400">
                      Project {index + 1}/{projects.length}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-6">
                    {project.title}
                  </h3>

                  <div className="space-y-7">
                    <div>
                      <h4 className="text-lg font-bold text-slate-300 mb-3 flex items-center gap-2">
                        <span
                          className={`inline-block w-2 h-2 rounded-full ${
                            index === 0
                              ? "bg-amber-400"
                              : index === 1
                              ? "bg-emerald-400"
                              : "bg-indigo-400"
                          }`}
                        ></span>
                        Project Overview
                      </h4>
                      <p className="text-slate-300 leading-relaxed pl-4 border-l border-slate-700/50">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-slate-300 mb-3 flex items-center gap-2">
                        <span
                          className={`inline-block w-2 h-2 rounded-full ${
                            index === 0
                              ? "bg-amber-400"
                              : index === 1
                              ? "bg-emerald-400"
                              : "bg-indigo-400"
                          }`}
                        ></span>
                        Project Details
                      </h4>
                      <p className="text-slate-300 leading-relaxed pl-4 border-l border-slate-700/50">
                        {project.details}
                      </p>
                    </div>

                    {project.demoLink && (
                      <div>
                        <h4 className="text-lg font-bold text-slate-300 mb-3 flex items-center gap-2">
                          <span
                            className={`inline-block w-2 h-2 rounded-full ${
                              index === 0
                                ? "bg-amber-400"
                                : index === 1
                                ? "bg-emerald-400"
                                : "bg-indigo-400"
                            }`}
                          ></span>
                          Deployment
                        </h4>
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-400 hover:text-amber-300 break-all pl-4 border-l border-slate-700/50 inline-block"
                        >
                          {project.demoLink}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/3 left-10 w-5 h-5 rounded-full bg-amber-400"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-20 w-6 h-6 rounded-full bg-emerald-400"
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  );
};

export default ProjectsSection;
