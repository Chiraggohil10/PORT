import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaGraduationCap, FaBuilding, FaCheck } from 'react-icons/fa';
import { scrollToSection } from '../utils/scrollToSection';

const ExperienceSection = () => {

  const experiences = [
    {
      icon: FaBuilding,
      title: 'Full Stack Developer',
      company: 'Theta Solutions | Bill Saathi',
      period: 'Jan 2026 - Present',
      description: 'Engineering billing ERP platforms with modular frontend widgets and secure backend routing.',
      bullets: [
        'Developing transactional full-stack React dashboards resolving heavy dataset displays.',
        'Architecting REST APIs with robust Express schemas and MongoDB validations.',
        'Consolidating reusable state hook systems to reduce redundancy across modules.'
      ],
      color: '#3B82F6',
    },
    {
      icon: FaCode,
      title: 'Frontend / Full Stack Developer',
      company: 'Dashlani Technology Pvt. Ltd.',
      period: 'Sept 2025 - Jan 2026',
      description: 'Shipped highly responsive user interfaces utilizing modular layout systems and rich API documentation.',
      bullets: [
        'Developed fluid layouts utilizing Tailwind CSS and Framer Motion, maintaining 60 FPS performance.',
        'Engineered Express.js microservices with detailed Swagger API documentation schema systems.',
        'Optimized core bundles reducing load latency by implementing dynamic code-splitting.'
      ],
      color: '#8B5CF6',
    },
    {
      icon: FaBriefcase,
      title: 'Frontend Developer / React Developer',
      company: 'United Tech and Solutions',
      period: 'March 2025 - Sept 2025',
      description: 'Constructed responsive interfaces and integrations for web and hybrid mobile platforms.',
      bullets: [
        'Built responsive web interfaces and mobile screens utilizing React and React Native.',
        'Integrated Firebase for OAuth secure authorizations and real-time database syncing.',
        'Collaborated with designers to build pixel-perfect UI libraries matching brand design rules.'
      ],
      color: '#EC4899',
    },
    {
      icon: FaGraduationCap,
      title: 'Bachelor of Computer Applications (BCA)',
      company: 'Veer Narmad South Gujarat University',
      period: '2021 - 2024',
      description: 'Foundations in computer science theory, databases, algorithms, and modular object-oriented coding.',
      education: true,
      training: {
        title: 'MERN Stack Development Training',
        institute: 'Jspider Institute, Bangalore',
        details: [
          'MongoDB aggregation engines & Express backend design patterns.',
          'React component lifecycles, states, and client hooks configurations.',
          'REST API design schemas, security parameters, and Node runtime executions.'
        ]
      },
      color: '#10B981',
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="section-wrap">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3.5 py-1.5 rounded-full border border-purple-500/10 bg-purple-500/5 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider mb-4">
            My Journey
          </span>
          <h2 className="text-fluid-h2 font-extrabold text-zinc-900 dark:text-zinc-50 mb-4 font-display">
            Experience &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
              professional growth
            </span>
          </h2>
          <p className="text-fluid-body text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            A history of shipping clean client applications, building secure server microservices, and coding responsive systems.
          </p>
        </motion.div>

        {/* Timeline graphics */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central bar (Left-aligned on mobile, centered on desktop) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2 pointer-events-none" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? '' : 'md:flex-row-reverse'
                  } items-start gap-8 md:gap-0`}
                >
                  {/* Card wrapper (left or right column) */}
                  <div className="w-full md:w-[46%] ml-10 md:ml-0">
                    <div className="glow-card p-5 sm:p-6 shadow-md hover:border-zinc-300 dark:hover:border-zinc-700">
                      
                      {/* Date Badge */}
                      <span className="inline-block px-2.5 py-1 text-xxs font-bold text-blue-600 dark:text-blue-500 bg-blue-500/5 rounded-md mb-3">
                        {exp.period}
                      </span>
                      
                      {/* Job Title & Company */}
                      <h3 className="text-lg font-extrabold text-zinc-900 dark:text-zinc-50 font-display leading-snug">
                        {exp.title}
                      </h3>
                      <p className="text-sm font-bold text-zinc-500 dark:text-zinc-400 mt-1 mb-3">
                        {exp.company}
                      </p>

                      {/* Brief description */}
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Key bullet achievements */}
                      {exp.bullets && (
                        <ul className="space-y-2 mb-2">
                          {exp.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-500 dark:text-zinc-400">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      {/* Education specialized JSpider Course Box */}
                      {exp.education && exp.training && (
                        <div className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-7 h-7 rounded-lg bg-emerald-500 text-white flex items-center justify-center shadow-sm">
                              <FaCode className="text-xs" />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-emerald-800 dark:text-emerald-400 font-display">
                                {exp.training.title}
                              </h4>
                              <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-500/80">
                                {exp.training.institute}
                              </p>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {exp.training.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xxs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                <FaCheck className="text-[9px] text-emerald-500 mt-0.5 shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bullet indicator in the middle path */}
                  <div 
                    className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-zinc-950 flex items-center justify-center -translate-x-1/2 shadow-md z-10"
                    style={{ backgroundColor: exp.color }}
                  >
                    <exp.icon className="text-white text-xs" />
                  </div>

                  {/* Place holder column for alternating align */}
                  <div className="hidden md:block w-[46%]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Action Button Row */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-xs sm:text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-4">
            Eager to contribute to collaborative product teams.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all cursor-pointer shadow-sm"
          >
            Let&apos;s Build Together
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default ExperienceSection;
