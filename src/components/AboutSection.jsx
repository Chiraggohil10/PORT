import React from 'react';
import { motion } from 'framer-motion';
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

const AboutSection = () => {
  const skills = [
    { name: 'Frontend Engineering', level: 92, icon: FaCode, color: 'from-sky-500 to-blue-600' },
    { name: 'Backend Architecture', level: 87, icon: FaServer, color: 'from-indigo-500 to-violet-600' },
    { name: 'Responsive UX', level: 95, icon: FaMobileAlt, color: 'from-cyan-500 to-blue-600' },
    { name: 'Product Delivery', level: 89, icon: FaRocket, color: 'from-blue-600 to-indigo-700' },
  ];

  const highlights = [
    'Scalable UI',
    'API-first',
    'Accessible UX',
    'High performance',
  ];

  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Completed' },
    { value: '15+', label: 'Clients Supported' },
    { value: '99%', label: 'Delivery Focus' },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="section-solid-bg" />
      <div className="section-grid-pattern" />

      <motion.div
        className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-400/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl"
        animate={{ scale: [1.15, 1, 1.15], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1.2 }}
      />

      <div className="section-wrap">
        <motion.div
          className="text-center mb-12 sm:mb-14 lg:mb-16"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
            ABOUT ME
          </span>
          <h2 className="text-fluid-h2 font-bold text-slate-900 mb-4">
            Building products that feel{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              fast, clean, and reliable
            </span>
          </h2>
          <p className="text-fluid-body text-slate-600 max-w-5xl mx-auto">
            I design and develop full-stack web experiences with clear architecture, modern UX patterns, and
            production-ready quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <div className="relative mx-auto max-w-md pb-12">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-cyan-500/20 blur-xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-2xl">
                <motion.img
                  src={image}
                  alt="Chirag Gohil"
                  className="w-full h-[360px] sm:h-[440px] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent" />

                <div className="absolute left-4 right-4 bottom-4 rounded-2xl border border-white/30 bg-white/90 backdrop-blur px-4 py-3">
                  <p className="text-slate-900 font-bold text-base sm:text-lg">Full Stack Developer</p>
                  <p className="text-slate-600 text-xs sm:text-sm">React | Node.js | API Design | Cloud Deployment</p>
                </div>
              </div>

              <motion.div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-4 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg flex items-center gap-2 whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
              >
                <span className="text-xs sm:text-sm font-semibold">Focused on scalable delivery</span>
              </motion.div>

              <motion.div
                className="hidden sm:flex absolute top-4 left-4 rounded-xl border border-blue-100 bg-white shadow-lg px-3 py-2 items-center gap-2"
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
              >
                <FaUserCheck className="text-blue-600 text-sm" />
                <span className="text-xs font-semibold text-slate-700">User-Centered Build</span>
              </motion.div>
            </div>

            <div className="mt-8 sm:mt-10 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm sm:text-base font-medium text-slate-700 shadow-sm"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-4 gap-3">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-4 text-center shadow-sm"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.07 }}
                  >
                    <p className="text-xl sm:text-2xl font-bold text-blue-600">{stat.value}</p>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <h3 className="text-fluid-h3 font-bold text-slate-900 mb-5">
              From concept to deployment with modern engineering standards
            </h3>

            <p className="text-fluid-body text-slate-600 mb-4">
              I build maintainable applications by combining thoughtful UI design, clean backend logic, and strong
              performance practices. My approach keeps products easy to scale as requirements evolve.
            </p>
            <p className="text-fluid-body text-slate-600 mb-7">
              Every project is developed with clarity in code structure, responsiveness across devices, and a focus on
              real business outcomes.
            </p>

            <div className="space-y-4 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + index * 0.08 }}
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <skill.icon className="text-blue-600 text-sm" />
                      <span className="text-sm sm:text-base font-semibold text-slate-700">{skill.name}</span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-blue-600">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.95, delay: 0.2 + index * 0.08 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-nowrap gap-3 sm:gap-4">
              <motion.button
                onClick={scrollToContact}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-sm sm:text-base text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me
                <FaArrowRight className="text-sm" />
              </motion.button>

              <motion.a
                href="/ChiragGohilResume.pdf"
                download="ChiragGohilResume.pdf"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-blue-200 bg-white text-sm sm:text-base text-blue-600 font-semibold shadow-md hover:shadow-lg transition-all"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Download CV
                <FaDownload className="text-sm" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
