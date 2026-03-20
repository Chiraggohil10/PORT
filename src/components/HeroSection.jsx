import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTerminal } from 'react-icons/fa';
import Chirag from '../assets/images.jpg';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);



  return (
    <section id="home" className="relative min-h-screen px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden pt-20">
      <div className="section-solid-bg" />

      {/* Grid pattern */}
      <div className="section-grid-pattern" />

      {/* Floating blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />



      <div className="section-wrap px-0 py-14 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-10 lg:gap-12 xl:gap-16">
          {/* Left content */}
          <motion.div
            className="w-full lg:w-1/2 lg:pr-4 xl:pr-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <motion.h1
              className="text-fluid-display font-bold text-slate-900 mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Chirag Gohil
              </span>
            </motion.h1>

            <motion.h2
              className="text-fluid-h1 font-bold text-slate-700 mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              className="text-fluid-body text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 break-words"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              I build exceptional digital experiences with modern technologies.
              Specializing in scalable web applications using React, Node.js, and cloud technologies.
            </motion.p>

            <motion.div
              className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={(e) => scrollToSection(e, '#projects')}
                className="flex-1 sm:flex-none px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-sm sm:text-base text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>

              <motion.button
                onClick={(e) => scrollToSection(e, '#contact')}
                className="flex-1 sm:flex-none px-6 sm:px-8 py-3 sm:py-4 bg-white text-sm sm:text-base text-blue-600 font-semibold rounded-xl border-2 border-blue-200 shadow-md hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { number: '3+', label: 'Years Experience' },
                { number: '20+', label: 'Projects Completed' },
                { number: '15+', label: 'Happy Clients' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center lg:text-left"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content - Profile Image */}
          <motion.div
            className="w-full lg:w-1/2 lg:pl-4 xl:pl-6 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[24rem] sm:max-w-[29rem] lg:max-w-[29rem]">
              <motion.div
                className="absolute -inset-5 rounded-[2.25rem] bg-gradient-to-br from-blue-500/20 via-indigo-500/15 to-cyan-500/20 blur-2xl"
                animate={{ opacity: [0.45, 0.65, 0.45], scale: [1, 1.03, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              <motion.div
                className="absolute -inset-2 rounded-[2.25rem] border border-blue-200/50"
                animate={{ rotate: [0, 1.5, 0, -1.5, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div
                className="relative rounded-[2rem] border border-white/70 bg-white/90 p-4 sm:p-5 lg:p-4 shadow-[0_25px_65px_-25px_rgba(37,99,235,0.55)] backdrop-blur-xl"
                style={{
                  transform: `translate3d(${mousePosition.x * 0.35}px, ${mousePosition.y * 0.35}px, 0)`,
                }}
              >
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <motion.img
                    src={Chirag}
                    alt="Chirag Gohil"
                    className="h-[23rem] sm:h-[28rem] lg:h-[28rem] w-full object-cover object-top"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.45 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-slate-900/10 to-transparent" />
                  <div className="absolute left-4 right-4 bottom-4 rounded-2xl border border-white/25 bg-white/90 px-4 py-3.5 backdrop-blur">
                    <p className="text-base sm:text-lg font-bold text-slate-900">Chirag Gohil</p>
                    <p className="text-xs sm:text-sm text-slate-600">Full Stack Developer | React | Node.js | MongoDB</p>
                  </div>
                </div>

                <div className="mt-3.5 grid grid-cols-2 gap-2.5 sm:gap-3.5">
                  <div className="rounded-xl border border-blue-100 bg-blue-50/70 px-3 py-2.5 sm:py-3 text-center">
                    <p className="text-sm sm:text-base font-bold text-blue-700">20+</p>
                    <p className="text-[11px] sm:text-xs text-slate-600">Projects</p>
                  </div>
                  <div className="rounded-xl border border-indigo-100 bg-indigo-50/70 px-3 py-2.5 sm:py-3 text-center">
                    <p className="text-sm sm:text-base font-bold text-indigo-700">99%</p>
                    <p className="text-[11px] sm:text-xs text-slate-600">Delivery Focus</p>
                  </div>
                </div>
              </div>

              <motion.div
                className="hidden sm:flex absolute -top-4 -right-4 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-lg items-center gap-2"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.2, repeat: Infinity }}
              >
                <FaCode className="text-blue-600 text-sm" />
                <span className="text-xs font-semibold text-slate-700">Clean Code</span>
              </motion.div>

              <motion.div
                className="hidden sm:flex absolute -bottom-4 -left-4 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-lg items-center gap-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, delay: 1.1 }}
              >
                <FaTerminal className="text-indigo-600 text-sm" />
                <span className="text-xs font-semibold text-slate-700">Full Stack</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

