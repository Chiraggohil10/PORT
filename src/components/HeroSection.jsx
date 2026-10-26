import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaCode, FaTerminal, FaBriefcase, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import ChiragWebP from '../assets/chirag1.webp';
import { scrollToSection } from '../utils/scrollToSection';

// Custom animated counter hook/component for interactive stats
const Counter = ({ target, duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const numericTarget = parseInt(target.replace(/\D/g, ''), 10);
  const suffix = target.replace(/\d/g, '');

  useEffect(() => {
    let start = 0;
    const end = numericTarget;
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = Math.max(Math.floor(totalMiliseconds / end), 30);
    
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [numericTarget, duration]);

  return <span>{count}{suffix}</span>;
};

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseDevice, setIsMouseDevice] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Only track mouse movement if the user has a fine-pointing device (e.g. mouse) and hasn't requested reduced motion
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsMouseDevice(mediaQuery.matches);

    if (mediaQuery.matches && !prefersReducedMotion) {
      const handleMouseMove = (e) => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 15,
          y: (e.clientY / window.innerHeight - 0.5) * 15,
        });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [prefersReducedMotion]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 md:py-24">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 md:w-96 md:h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 md:w-96 md:h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

      <div className="section-wrap flex flex-col lg:flex-row items-center lg:justify-between gap-12 xl:gap-16">
        {/* Left Content Column */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left z-10"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Availability badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-6 shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Available for new opportunities</span>
          </motion.div>

          <motion.h1
            className="text-fluid-display font-extrabold text-zinc-900 dark:text-zinc-50 mb-4 leading-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400">
              Chirag Gohil
            </span>
          </motion.h1>

          <motion.h2
            className="text-fluid-h3 font-semibold text-zinc-600 dark:text-zinc-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Frontend Architect & React Specialist
          </motion.h2>

          <motion.p
            className="text-fluid-body text-zinc-500 dark:text-zinc-400 mb-8 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            I build high-performance, pixel-perfect user interfaces and modern full-stack systems. 
            Specializing in clean architectures, accessible user journeys, and robust web standards.
          </motion.p>

          {/* Call to actions */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="flex-1 px-8 py-3.5 bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-md shadow-zinc-500/10 cursor-pointer flex items-center justify-center gap-2"
            >
              <FaBriefcase className="text-xs" />
              <span>Explore Projects</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="flex-1 px-8 py-3.5 bg-white border border-zinc-200 text-zinc-900 dark:bg-zinc-900/60 dark:border-zinc-800 dark:text-zinc-50 text-sm font-semibold rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2"
            >
              <FaEnvelope className="text-xs" />
              <span>Get In Touch</span>
            </button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-zinc-200/60 dark:border-zinc-800/60 max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {[
              { target: '3+', label: 'Years Experience' },
              { target: '20+', label: 'Projects Completed' },
              { target: '99%', label: 'Delivery Focus' },
            ].map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-500 font-display">
                  <Counter target={stat.target} />
                </div>
                <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Visual Column (Avatar Card) */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
            {/* Glowing Backdrop Canvas */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-blue-500/20 via-indigo-500/10 to-violet-500/20 dark:from-blue-500/10 dark:via-indigo-500/5 dark:to-violet-500/10 blur-2xl pointer-events-none" />

            {/* Glowing borders */}
            <div className="absolute -inset-1.5 rounded-[2.25rem] border border-blue-500/15 dark:border-blue-500/10 animate-pulse-slow pointer-events-none" />

            {/* Main Interactive card */}
            <div
              className="glow-card relative p-3 backdrop-blur-xl shadow-2xl transition-transform duration-200"
              style={{
                transform: isMouseDevice && !prefersReducedMotion
                  ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) rotateX(${-mousePosition.y * 0.15}deg) rotateY(${mousePosition.x * 0.15}deg)`
                  : 'none',
              }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-950 aspect-[1/1.18]">
                <img
                  src={ChiragWebP}
                  alt="Chirag Gohil"
                  className="w-full h-full object-cover object-top filter grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-500"
                  decoding="async"
                  fetchPriority="high"
                />
                
                {/* Visual Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent pointer-events-none" />

                {/* Profile Brief Badge */}
                <div className="absolute left-4 right-4 bottom-4 rounded-xl border border-white/10 bg-zinc-900/90 backdrop-blur-md px-4 py-3.5 text-left">
                  <p className="text-sm font-bold text-white font-display">Chirag Gohil</p>
                  <p className="text-[11px] text-zinc-400 font-semibold tracking-wide mt-0.5">REACT ARCHITECT | FULL STACK ENGINEER</p>
                </div>
              </div>

              {/* Stat badges */}
              <div className="mt-3 grid grid-cols-2 gap-2 text-center">
                <div className="rounded-xl border border-zinc-150 bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-900/60 px-3 py-2">
                  <p className="text-sm font-bold text-blue-600 dark:text-blue-500 font-display">20+</p>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-semibold mt-0.5">Projects Delivered</p>
                </div>
                <div className="rounded-xl border border-zinc-150 bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-900/60 px-3 py-2">
                  <p className="text-sm font-bold text-indigo-600 dark:text-indigo-500 font-display">100%</p>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-semibold mt-0.5">Client Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Floating Technical Decor Badges */}
            <motion.div
              className="absolute -top-3 -right-3 rounded-xl border border-zinc-200 bg-white/95 dark:border-zinc-800 dark:bg-zinc-900 px-3.5 py-2 shadow-lg flex items-center gap-2 pointer-events-none"
              animate={prefersReducedMotion ? {} : { y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaCode className="text-blue-500 text-xs" />
              <span className="text-[10px] font-bold text-zinc-700 dark:text-zinc-300 tracking-wider">CLEAN CODE</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-3 -left-3 rounded-xl border border-zinc-200 bg-white/95 dark:border-zinc-800 dark:bg-zinc-900 px-3.5 py-2 shadow-lg flex items-center gap-2 pointer-events-none"
              animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            >
              <FaTerminal className="text-indigo-500 text-xs" />
              <span className="text-[10px] font-bold text-zinc-700 dark:text-zinc-300 tracking-wider">REACT SYSTEM</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
           onClick={() => scrollToSection('about')}>
        <span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaChevronDown className="text-xs text-zinc-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
