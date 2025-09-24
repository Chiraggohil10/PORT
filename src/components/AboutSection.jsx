// src/components/AboutSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLayerGroup, FaRocket, FaDownload, FaArrowRight } from 'react-icons/fa';
import image from '../assets/img2.avif';
import SkillAbout from './SkillAbout';

const AboutSection = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const cardHover = {
    hover: {
      y: -10,
      scale: 1.03,
      boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.25)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section 
      id="about" 
      className="relative py-16 px-4 md:px-8  overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-700 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-emerald-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block text-sm font-mono text-amber-400 mb-3 px-3 py-1 rounded-full bg-slate-800 border border-amber-400/20"
            whileHover={{ scale: 1.05 }}
          >
            ABOUT ME
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Know Me <span className="text-amber-400">Better</span>
          </motion.h2>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border-4 border-slate-700">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-emerald-400/10"></div>
                <motion.img 
                  src={image}
                  alt="About" 
                  className="w-full h-auto object-cover z-10"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.4 }
                  }}
                />
              </div>
              
              <motion.div 
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-emerald-500 text-sm font-bold text-slate-900 px-3 py-3 rounded-full flex items-center gap-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <FaRocket className="text-lg" />
                <span>Full-Stack Developer</span>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              className="text-3xl font-bold text-white mb-8"
              variants={item}
            >
              Who <span className="text-amber-400">Am I?</span>
            </motion.h3>
            
            <motion.div 
              className="mb-8"
              variants={item}
            >
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                I'm a passionate <span className="text-amber-400 font-medium">Full-Stack Developer</span> with expertise in creating modern web applications. My journey began with frontend development using React and JavaScript, and has expanded to include backend technologies like Node.js and databases.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I specialize in building <span className="text-emerald-400 font-medium">responsive, user-centric applications</span> that deliver exceptional experiences. With a constant drive to learn and adapt, I stay at the forefront of web development trends and technologies.
              </p>
            </motion.div>
            
            
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={item}
            >
              <motion.button 
                className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-all group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me 
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </motion.button>
              
              <motion.a 
                href="/ChiragGohilResume.pdf" 
                download="ChiragGohilResume.pdf"
                className="flex items-center gap-2 text-white font-semibold py-3 px-6 rounded-lg border-2 border-slate-600 hover:border-amber-500 bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm transition-all group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV 
                <FaDownload className="text-amber-400 transition-transform group-hover:translate-y-0.5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        <SkillAbout />
      </div>
      
      {/* Floating elements */}
      <motion.div 
        className="absolute top-1/3 left-10 w-6 h-6 rounded-full bg-amber-400"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-20 w-4 h-4 rounded-full bg-emerald-400"
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
};

export default AboutSection;