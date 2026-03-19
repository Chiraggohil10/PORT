import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {FaCode, FaTerminal } from 'react-icons/fa';
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
              className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={(e) => scrollToSection(e, '#projects')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-sm sm:text-base text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              <motion.button
                onClick={(e) => scrollToSection(e, '#contact')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-sm sm:text-base text-blue-600 font-semibold rounded-xl border-2 border-blue-200 shadow-md hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12"
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
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            }}
          >
            <div className="relative">
              {/* Decorative rings */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-[18rem] h-[18rem] sm:w-[21rem] sm:h-[21rem] lg:w-[24rem] lg:h-[24rem] rounded-full border-2 border-blue-400/30 -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 w-[20rem] h-[20rem] sm:w-[23rem] sm:h-[23rem] lg:w-[26rem] lg:h-[26rem] rounded-full border-2 border-indigo-400/30 -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Main image container */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <motion.img
                  src={Chirag}
                  alt="Chirag Gohil"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
              </div>

              {/* Floating badges */}
              <motion.div
                className="hidden sm:block absolute -top-4 -right-4 bg-white px-3 py-2 rounded-lg shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <FaCode className="text-blue-600" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">Clean Code</span>
                </div>
              </motion.div>

              <motion.div
                className="hidden sm:block absolute -bottom-4 -left-4 bg-white px-3 py-2 rounded-lg shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <FaTerminal className="text-indigo-600" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">Full Stack</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
