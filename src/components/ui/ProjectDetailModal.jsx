import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaGithub, FaTools, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const ProjectDetailModal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  const hasDemoLink = typeof project.demoLink === 'string' && project.demoLink.startsWith('http');
  const hasGithubLink = typeof project.githubLink === 'string' && project.githubLink.startsWith('http');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal content */}
          <motion.div
            className="relative w-full max-w-3xl rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 overflow-hidden z-10 my-8"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {/* Header / Image Area */}
            <div className="relative aspect-[16/9] w-full bg-zinc-150 dark:bg-zinc-950">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/10 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2.5 rounded-full border border-white/20 bg-zinc-900/80 hover:bg-zinc-900 text-white transition-all cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
                aria-label="Close modal"
              >
                <FaTimes className="text-sm" />
              </button>

              <div className="absolute left-6 right-6 bottom-4 text-white">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500 text-xxs font-bold uppercase tracking-wider">
                  Featured Case Study
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold font-display mt-2">{project.title}</h3>
              </div>
            </div>

            {/* Scrollable details */}
            <div className="p-6 overflow-y-auto max-h-[50vh] space-y-6">
              
              {/* Technical Description */}
              <div>
                <h4 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-2 font-display">Overview</h4>
                <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {project.details || project.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-2.5 font-display">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-bold rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture & Focus (Bento Section) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="rounded-xl border border-zinc-150 bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-900/60 p-4">
                  <div className="flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-500">
                    <FaTools className="text-sm" />
                    <h5 className="text-xs font-bold uppercase tracking-wider font-display">Core Features</h5>
                  </div>
                  <ul className="space-y-2">
                    {project.features?.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                        <FaCheckCircle className="text-emerald-500 text-xs mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    )) || (
                      <li className="text-xs text-zinc-500">Custom UI components, API integration, and responsive layout configuration.</li>
                    )}
                  </ul>
                </div>

                <div className="rounded-xl border border-zinc-150 bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-900/60 p-4">
                  <div className="flex items-center gap-2 mb-2 text-amber-600 dark:text-amber-500">
                    <FaExclamationTriangle className="text-sm" />
                    <h5 className="text-xs font-bold uppercase tracking-wider font-display">Engineering Challenges</h5>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {project.challenge || 'Structuring modular states, minimizing network requests via throttled search patterns, and verifying fluid component scaling under screen shifts.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer (Action buttons) */}
            <div className="flex items-center justify-between border-t border-zinc-100 bg-zinc-50 px-6 py-4 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="flex items-center gap-4">
                {hasDemoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400 transition-colors"
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
                    className="flex items-center gap-2 text-sm font-bold text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white transition-colors"
                  >
                    <span>Source Code</span>
                    <FaGithub className="text-sm" />
                  </a>
                )}
                {!hasDemoLink && !hasGithubLink && (
                  <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                    Enterprise Source Protected
                  </span>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
