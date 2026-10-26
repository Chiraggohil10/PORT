import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FaArrowRight,
  FaCode,
  FaDownload,
  FaMobileAlt,
  FaRocket,
  FaServer,
  FaUserCheck,
} from 'react-icons/fa';
import image from '../assets/img2.avif';
import { scrollToSection } from '../utils/scrollToSection';

const AboutSection = () => {
  const prefersReducedMotion = useReducedMotion();

  const skills = [
    { name: 'React.js & Frontend Architecture', level: 94, icon: FaCode, color: 'from-blue-500 to-indigo-600' },
    { name: 'Node.js & Backend Architecture', level: 88, icon: FaServer, color: 'from-violet-500 to-purple-600' },
    { name: 'Mobile-First Responsive UX', level: 95, icon: FaMobileAlt, color: 'from-cyan-500 to-blue-600' },
    { name: 'Performance & Optimization', level: 90, icon: FaRocket, color: 'from-blue-600 to-indigo-700' },
  ];

  const highlights = [
    { title: 'Scalable UI', desc: 'Modular components structured for enterprise extension.' },
    { title: 'API-First', desc: 'Secure Restful API endpoints built on clear schemas.' },
    { title: 'Accessible UX', desc: 'A11y compliant layouts offering inclusive interfaces.' },
    { title: 'High Performance', desc: 'Light bundle weights ensuring rapid load performance.' },
  ];

  const stats = [
    { value: '3+', label: 'Years Exp' },
    { value: '20+', label: 'Projects' },
    { value: '15+', label: 'Clients' },
    { value: '100%', label: 'Delivery' },
  ];

  const handleResumeDownload = () => {
    // Log CV download event (Resume Download Tracking)
    console.log('[Analytics] Resume downloaded at: ' + new Date().toISOString());
    if (typeof window !== 'undefined') {
      localStorage.setItem('cv_download_timestamp', new Date().toISOString());
    }
  };

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
      {/* Decorative blurred backgrounds */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="section-wrap">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex px-3.5 py-1.5 rounded-full border border-blue-500/10 bg-blue-500/5 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            About Me
          </span>
          <h2 className="text-fluid-h2 font-extrabold text-zinc-900 dark:text-zinc-50 mb-4 font-display">
            From design concepts to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
              production-grade delivery
            </span>
          </h2>
          <p className="text-fluid-body text-zinc-500 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            I am a full-stack engineer focused on clean code, responsive layouts, and performance optimization. 
            I bridge design and engineering to build modern web products with modular, maintainable code structures.
          </p>
        </motion.div>

        {/* Bento/Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Visual Column - Avatar & Quick Stats */}
          <motion.div
            className="lg:col-span-5 w-full flex flex-col items-center"
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-[360px] pb-8">
              {/* Blur behind image */}
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-violet-500/20 dark:from-blue-500/10 blur-xl pointer-events-none" />

              <div className="glow-card relative p-2 shadow-xl">
                <img
                  src={image}
                  alt="Chirag Gohil Coding"
                  className="w-full aspect-[4/5] object-cover rounded-xl filter grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Floating badge */}
                <div className="absolute top-4 left-4 rounded-xl border border-white/10 bg-zinc-900/90 backdrop-blur-md px-3 py-1.5 shadow-md flex items-center gap-1.5">
                  <FaUserCheck className="text-emerald-500 text-xs animate-pulse" />
                  <span className="text-[10px] font-bold text-white tracking-wider uppercase">User Centered</span>
                </div>
              </div>
            </div>

            {/* Micro Stats Grid */}
            <div className="w-full max-w-[360px] grid grid-cols-4 gap-2.5 mt-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glow-card p-3 text-center shadow-sm"
                >
                  <p className="text-lg font-bold text-blue-600 dark:text-blue-500 font-display leading-tight">{stat.value}</p>
                  <p className="text-[9px] font-bold text-zinc-500 dark:text-zinc-400 mt-1 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Details Column - Text & Progress Bars */}
          <motion.div
            className="lg:col-span-7 w-full"
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-fluid-h3 font-bold text-zinc-900 dark:text-zinc-50 mb-5 font-display">
              Technical excellence meets structured engineering.
            </h3>
            
            <p className="text-fluid-body text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed">
              I specialize in frontend technologies, specifically constructing reusable UI systems with React, 
              managing application states efficiently, and optimizing bundle delivery to achieve fast FCP times. 
              Additionally, I build clean REST APIs using Node.js, Express, and MongoDB.
            </p>

            {/* Technical Highlights list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => (
                <div key={item.title} className="glow-card p-4 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-xs">
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 font-display">{item.title}</h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Core Skills Progress bar */}
            <div className="space-y-4 mb-8">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <skill.icon className="text-blue-600 dark:text-blue-500 text-xs" />
                      <span className="text-xs sm:text-sm font-bold text-zinc-700 dark:text-zinc-300">{skill.name}</span>
                    </div>
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: prefersReducedMotion ? 0.2 : 0.8, delay: 0.1 * index }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Resume / Contact Button Action Row */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all cursor-pointer shadow-md"
              >
                <span>Hire Me</span>
                <FaArrowRight className="text-xxs" />
              </button>

              <a
                href="/ChiragGohilResume.pdf"
                download="ChiragGohilResume.pdf"
                onClick={handleResumeDownload}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-zinc-200 text-zinc-900 dark:bg-zinc-900/60 dark:border-zinc-800 dark:text-zinc-50 text-sm font-semibold rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all cursor-pointer shadow-sm"
              >
                <span>Download Resume</span>
                <FaDownload className="text-xs" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
