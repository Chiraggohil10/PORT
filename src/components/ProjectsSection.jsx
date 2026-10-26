import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa';
import Project1 from '../assets/project1.webp';
import Tomatoo from '../assets/tomatoo.webp';
import Amazone from '../assets/amazone.webp';
import ProjectDetailModal from './ui/ProjectDetailModal';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  const filters = ['All', 'Full Stack', 'Frontend'];

  const projects = [
    {
      id: 1,
      title: 'College Management System',
      category: 'Full Stack',
      description: 'A comprehensive educational ERP system streamlining academic operations, course scheduling, and student database management.',
      details: 'Built with the MERN stack (MongoDB, Express, React, Node.js), this system integrates complex workflows for administrators, instructors, and students. Features role-based access control, secure REST endpoints, database schema optimization, and real-time report generation sheets.',
      image: Project1,
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT Auth'],
      demoLink: null,
      githubLink: null,
      features: [
        'Granular Role-based Access Control (RBAC) for admins, faculty, and students',
        'Dynamic course scheduling engine with conflict validation',
        'Database indexing on query paths to handle high-concurrency requests',
        'Secure billing transaction tracking and fee receipt generation'
      ],
      challenge: 'Maintaining data consistency across complex relational schemas in a NoSQL database. Resolved by structuring normalized sub-documents, implementing transactional aggregations, and performance-tuning MongoDB indexes.'
    },
    {
      id: 2,
      title: 'Tomato Food Delivery Web App',
      category: 'Frontend',
      description: 'A high-fidelity food ordering platform featuring modern responsive UI, cart caching, and dynamic routing architectures.',
      details: 'A polished food delivery application created to demonstrate responsive layouts, nested router setups, and local storage state persistence. Features an interactive menu categorizer, adding items to order list, real-time total calculations, and custom animation checkout triggers.',
      image: Tomatoo,
      tags: ['React.js', 'React Router', 'CSS Grid', 'Local Storage'],
      demoLink: 'https://testy-food-delivery.netlify.app/',
      githubLink: null,
      features: [
        'Fluid responsive grids optimized for mobile-first user experiences',
        'Global state management representing dynamic food items basket',
        'Throttled search filters providing immediate menu matching',
        'Simulated secure checkout flow with form valid checks'
      ],
      challenge: 'Synchronizing client state (cart items) across multiple navigation paths. Solved by implementing React Context API to establish a unified single-source state, maintaining high performance under frequent updates.'
    },
    {
      id: 3,
      title: 'Amazon E-Commerce Clone',
      category: 'Frontend',
      description: 'A pixel-perfect responsive clone of the Amazon marketplace homepage emphasizing fluid layouts and CSS animations.',
      details: 'This project focuses on structural styling replication using semantic HTML5 elements and vanilla CSS configurations. Features flexbox layouts, grid alignments, hover-triggered menus, sliding product carousels, and responsive scaling optimized for all viewports.',
      image: Amazone,
      tags: ['HTML5', 'CSS3', 'Flexbox / Grid', 'Responsive Layout'],
      demoLink: 'https://learnamazon.netlify.app/',
      githubLink: null,
      features: [
        'Strict visual alignment matching the official production interface',
        'Interactive carousels displaying product groups',
        'Clean dropdown settings configurations matching high usability patterns',
        'Optimized responsive layout that scales down to mobile screen sizes'
      ],
      challenge: 'Recreating complex nested menu drawers without JavaScript-heavy libraries. Resolved by constructing efficient CSS transitions, hover classes, and absolute positioning layers.'
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="section-wrap">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3.5 py-1.5 rounded-full border border-blue-500/10 bg-blue-500/5 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            Projects
          </span>
          <h2 className="text-fluid-h2 font-extrabold text-zinc-900 dark:text-zinc-50 mb-4 font-display">
            Selected engineering{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
              case studies
            </span>
          </h2>
          <p className="text-fluid-body text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            A review of selected projects highlighting frontend components, API routing, and layout architecture.
          </p>
        </motion.div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 max-w-xs mx-auto">
          {filters.map((f) => {
            const isSelected = activeFilter === f;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`relative px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  isSelected 
                    ? 'text-white dark:text-zinc-900 z-10' 
                    : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeProjFilter"
                    className="absolute inset-0 bg-zinc-900 dark:bg-zinc-100 rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {f}
              </button>
            );
          })}
        </div>

        {/* Projects List */}
        <motion.div
          className="space-y-12"
          layout={!prefersReducedMotion}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const hasDemoLink = typeof project.demoLink === 'string' && project.demoLink.startsWith('http');
              const hasGithubLink = typeof project.githubLink === 'string' && project.githubLink.startsWith('http');

              return (
                <motion.article
                  key={project.id}
                  layout={!prefersReducedMotion}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="glow-card p-6 sm:p-8 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-lg relative"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Visual Preview Column */}
                    <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="relative overflow-hidden aspect-[16/10] rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 group/img">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-103"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-zinc-950/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    </div>

                    {/* Meta Description Column */}
                    <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <span className="text-[10px] font-bold text-blue-600 dark:text-blue-500 bg-blue-500/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold font-display text-zinc-900 dark:text-zinc-50 mt-3 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 mb-5 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-xxs font-bold text-zinc-500 border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-400 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action trigger row */}
                      <div className="flex flex-wrap items-center gap-5 sm:gap-6 pt-2 border-t border-zinc-150 dark:border-zinc-800/60">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-300 transition-colors cursor-pointer"
                        >
                          <span>Case Study</span>
                          <FaArrowRight className="text-xxs" />
                        </button>

                        {hasDemoLink && (
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400 transition-colors"
                          >
                            <span>Live Demo</span>
                            <FaExternalLinkAlt className="text-xs" />
                          </a>
                        )}

                        {hasGithubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-bold text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors"
                          >
                            <span>Code</span>
                            <FaGithub className="text-sm" />
                          </a>
                        )}

                        {!hasDemoLink && !hasGithubLink && (
                          <span className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wide">
                            Enterprise Access Only
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Project Case Study Details Overlay Modal */}
        <ProjectDetailModal 
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
        
      </div>
    </section>
  );
};

export default ProjectsSection;
