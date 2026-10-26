import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
  FaRocket,
  FaPalette,
  FaCheck,
  FaArrowRight,
} from 'react-icons/fa';
import { scrollToSection } from '../utils/scrollToSection';

const ServicesSection = () => {

  const services = [
    {
      icon: FaLaptopCode,
      title: 'Frontend Engineering',
      description: 'Building optimized user interfaces with React and Next.js, focused on accessibility, modularity, and clean structure.',
      color: '#3B82F6',
      features: ['SPA and dynamic SSR rendering', 'Context / Redux state flows', 'Tailwind / CSS-in-JS variables'],
    },
    {
      icon: FaServer,
      title: 'Backend Architecture',
      description: 'Building secure server logic and databases with robust schema validation, authorization patterns, and REST endpoints.',
      color: '#8B5CF6',
      features: ['Node.js & Express servers', 'JWT auth & security validation', 'MongoDB indexing & schemas'],
    },
    {
      icon: FaCode,
      title: 'Full Stack Solutions',
      description: 'Delivering end-to-end applications from database design to hosting setups with consistent coding practices.',
      color: '#EC4899',
      features: ['MERN stack integration', 'RESTful API endpoints client sync', 'Secure hosting & environmental checks'],
    },
    {
      icon: FaMobileAlt,
      title: 'Responsive & Adaptive UI',
      description: 'Constructing mobile-first layouts that scale across sizes with fluid grids, touch targets, and flexible grids.',
      color: '#10B981',
      features: ['Adaptive breakpoint scaling', 'Touch-friendly buttons layout', 'Cross-browser rendering tests'],
    },
    {
      icon: FaRocket,
      title: 'Speed & Optimization',
      description: 'Optimizing bundle payloads, asset weights, and rendering paths to ensure top Core Web Vital grades.',
      color: '#F59E0B',
      features: ['Dynamic imports & dynamic chunks', 'WebP compressing asset conversions', 'Lighthouse audit improvements'],
    },
    {
      icon: FaPalette,
      title: 'UI/UX Implementations',
      description: 'Converting Figma mockups to pixel-perfect frontend code with precise styling offsets and transitions.',
      color: '#06B6D4',
      features: ['Accurate Figma design conversions', 'Micro-interactions & hover animations', 'Accessible semantic HTML structures'],
    },
  ];

  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="section-wrap">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3.5 py-1.5 rounded-full border border-blue-500/10 bg-blue-500/5 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            Services
          </span>
          <h2 className="text-fluid-h2 font-extrabold text-zinc-900 dark:text-zinc-50 mb-4 font-display">
            Scope of dynamic{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
              web solutions
            </span>
          </h2>
          <p className="text-fluid-body text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Scalable development services built to address real-world business challenges and code quality rules.
          </p>
        </motion.div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="glow-card p-6 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm relative group"
            >
              {/* Highlight corner bar */}
              <div 
                className="absolute top-0 left-0 w-1.5 h-full rounded-l-2xl transition-all duration-300 group-hover:w-2"
                style={{ backgroundColor: service.color }}
              />

              <div className="pl-2">
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon className="text-xl" style={{ color: service.color }} />
                  </div>
                  <h3 className="text-lg font-extrabold text-zinc-900 dark:text-zinc-50 font-display leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bullet List */}
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400">
                      <span 
                        className="w-4 h-4 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: `${service.color}10` }}
                      >
                        <FaCheck className="text-[8px]" style={{ color: service.color }} />
                      </span>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-xs sm:text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-5">
            Looking for a custom integration or consultancy? Let us outline the specs.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all cursor-pointer shadow-md"
          >
            <span>Start a Project</span>
            <FaArrowRight className="text-xxs animate-pulse" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;
