// src/components/HomeSection.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Chirag from '../assets/image.png';

const HomeSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect mobile screens for responsive adjustments
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const floating = {
    animate: {
      y: [0, -3, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      id="home" 
      className="relative pt-16 md:pt-24 pb-12 px-4 min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 md:top-20 md:left-1/4 w-48 h-48 md:w-72 md:h-72 bg-blue-300 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-5 md:top-40 md:right-20 w-40 h-40 md:w-64 md:h-64 bg-indigo-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-5 md:bottom-20 md:left-20 w-52 h-52 md:w-80 md:h-80 bg-cyan-300 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div 
            className="md:w-1/2 order-2 md:order-1 mt-8 md:mt-0"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <motion.span 
                className="inline-block text-sm md:text-base font-mono text-blue-600 mb-3 px-3 py-1 rounded-full bg-blue-100 border border-blue-200"
                whileHover={{ scale: 1.05 }}
              >
                Hello, I'm
              </motion.span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-3 leading-tight"
              variants={item}
            >
              Chirag <span className="text-blue-600">Gohil</span>
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl text-slate-600 mb-4 md:mb-6"
              variants={item}
            >
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-base md:text-lg text-slate-600 mb-8 md:mb-10 max-w-2xl"
              variants={item}
            >
              I craft responsive web applications with modern technologies. 
              Specializing in <span className="text-blue-600 font-semibold">React.js</span> and <span className="text-cyan-600 font-semibold">JavaScript</span>, 
              I build engaging user experiences that bring ideas to life.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-3 md:gap-4"
              variants={item}
            >
              <motion.button 
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2.5 px-5 md:py-3 md:px-6 rounded-lg transition-all group shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me 
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </motion.button>
              
              <motion.a 
                href="/ChiragGohilResume.pdf" 
                download="ChiragGohilResume.pdf"
                className="flex items-center gap-2 text-slate-700 font-semibold py-2.5 px-5 md:py-3 md:px-6 rounded-lg border-2 border-slate-300 hover:border-blue-500 bg-white/70 hover:bg-white backdrop-blur-sm transition-all group shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV 
                <FaDownload className="text-blue-600 transition-transform group-hover:translate-y-0.5" />
              </motion.a>
            </motion.div>
            
          
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="relative rounded-full overflow-hidden border-4 border-slate-200 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 shadow-2xl">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full"
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <motion.img 
                  src={Chirag} 
                  alt="Chirag Gohil" 
                  className="relative rounded-full w-full h-full object-cover z-10"
                  variants={floating}
                  animate="animate"
                />
              </div>
              
              <motion.div 
                className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-xs md:text-sm font-bold text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ rotate: [0, -5, 0], transition: { duration: 0.3 } }}
              >
                Available for work!
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-blue-400/20 border border-blue-400/40"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity
                }}
              />
              <motion.div 
                className="absolute -bottom-6 left-8 w-12 h-12 rounded-full bg-cyan-400/20 border border-cyan-400/40"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>
        
        {/* Skills tags floating animation */}
        <motion.div 
          className="hidden md:flex gap-4 mt-16 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {["HTML5", "CSS3", "JavaScript", "React JS", "Tailwind CSS", "Redux","SCSS"].map((skill, i) => (
            <motion.div
              key={skill}
              className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-700 text-sm border border-slate-200 shadow-md"
              animate={{
                y: [0, -30, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                borderColor: "rgba(59, 130, 246, 0.3)",
                color: "#2563eb"
              }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll indicator - Hidden on mobile */}
      {!isMobile && (
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [0, 10, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity
          }}
        >
          <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-transparent rounded-full"></div>
          <span className="mt-2 text-sm text-slate-600">Scroll down</span>
        </motion.div>
      )}
    </section>
  );
};

export default HomeSection;