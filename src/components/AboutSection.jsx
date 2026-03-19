// src/components/AboutSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaDownload, FaArrowRight, FaUser } from 'react-icons/fa';
import image from '../assets/img2.avif';

const AboutSection = () => {
  const skills = [
    { name: 'React/Next.js', level: 90 },
    { name: 'Node.js/Express', level: 85 },
    { name: 'JavaScript/TypeScript', level: 92 },
    { name: 'MongoDB/SQL', level: 80 },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="section-solid-bg" />
      <div className="section-grid-pattern" />
      <div className="section-wrap">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            ABOUT ME
          </span>
          <h2 className="text-fluid-h2 font-bold text-slate-900 mb-4">
            Passionate About Creating{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16">
          {/* Image */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                <motion.img
                  src={image}
                  alt="Chirag Gohil"
                  className="w-full h-auto object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-5 sm:-bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-2.5 rounded-full shadow-lg flex items-center gap-2 whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <FaRocket />
                <span className="text-xs sm:text-sm font-bold">Full Stack Developer</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-fluid-h3 font-bold text-slate-900 mb-6">
              Building Solutions with{' '}
              <span className="text-blue-600">Modern Technology</span>
            </h3>
            
            <p className="text-fluid-body text-slate-600 mb-6">
              I'm a dedicated Full Stack Developer with a passion for creating elegant, efficient, and user-friendly web applications. My journey in tech started with curiosity and has evolved into a career focused on delivering high-quality digital solutions.
            </p>
            
            <p className="text-fluid-body text-slate-600 mb-8">
              I specialize in building responsive applications using modern frameworks and best practices. From concept to deployment, I bring ideas to life with clean code and thoughtful design.
            </p>

            {/* Skills Progress */}
            <div className="space-y-4 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-medium">{skill.name}</span>
                    <span className="text-blue-600 font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <motion.button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-sm sm:text-base text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
                <FaArrowRight />
              </motion.button>
              
              <motion.a
                href="/ChiragGohilResume.pdf"
                download="ChiragGohilResume.pdf"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white text-sm sm:text-base text-blue-600 font-semibold rounded-lg border-2 border-blue-200 shadow-md hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
                <FaDownload />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
