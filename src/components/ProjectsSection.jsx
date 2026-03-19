// src/components/ProjectsSection.js
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
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

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="section-solid-bg" />
      <div className="section-grid-pattern" />

      <div className="section-wrap">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            PROJECTS
          </span>
          <h2 className="text-fluid-h2 font-bold text-slate-900 mb-4 mt-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Work</span>
          </h2>
          <motion.p
            className="text-fluid-body text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A selection of projects showcasing modern development practices
          </motion.p>
        </motion.div>

        <div className="space-y-10 sm:space-y-12 lg:space-y-14">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
            >
              <div className={`pointer-events-none absolute -inset-4`} />

              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-10 items-center">
                <motion.div
                  className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="relative overflow-hidden aspect-[16/10] rounded-[1.75rem] ring-1 ring-slate-200 bg-slate-100">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.55 }}
                    />
                  </div>
                </motion.div>

                <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  

                  <h3 className="text-fluid-h3 font-bold text-slate-900 mb-3 break-words">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed break-words mb-3">
                    {project.description}
                  </p>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed break-words mb-5">
                    {project.details}
                  </p>

                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-700 border border-slate-300 rounded-full bg-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-5 sm:gap-6">
                    {project.demoLink && (
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-blue-700 hover:text-blue-800 transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        Live Demo <FaExternalLinkAlt className="text-sm" />
                      </motion.a>
                    )}

                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-700 hover:text-slate-900 transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        Source Code <FaGithub className="text-base" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              {index < projects.length - 1 && (
                <div className="mt-10 sm:mt-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
