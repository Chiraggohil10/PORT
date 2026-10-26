import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
  FaMapMarkerAlt,
  FaCheck,
  FaPhoneAlt,
} from 'react-icons/fa';
import { IoMdMailUnread } from 'react-icons/io';
import { scrollToSection } from '../utils/scrollToSection';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'About', sectionId: 'about' },
    { label: 'Skills', sectionId: 'techstack' },
    { label: 'Projects', sectionId: 'projects' },
    { label: 'Experience', sectionId: 'experience' },
    { label: 'Services', sectionId: 'services' },
    { label: 'Contact', sectionId: 'contact' },
  ];

  const serviceHighlights = [
    'React SPAs & SSR systems',
    'Node REST API architectures',
    'Full Stack Product development',
    'Responsive layouts configuration',
    'Core Web Vitals tuning',
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Chiraggohil10', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/chirag-gohil-42b261255/', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/chirag_gohil_1910/', label: 'Instagram' },
  ];

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/20">
      <div className="section-wrap">
        
        {/* Upper interactive card block */}
        <motion.div
          className="glow-card p-6 sm:p-8 shadow-sm mb-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Branding Column */}
            <div className="lg:col-span-5 space-y-4">
              {/* Pulsing Availability status indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/10 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Available for freelance contracts</span>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-extrabold font-display text-zinc-900 dark:text-zinc-50 leading-tight">
                Let&apos;s engineer something users actually love.
              </h2>
              
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm">
                I help startups and engineering teams ship modern React products, backend microservices, and speed-optimized layouts.
              </p>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-4.5 py-2.5 bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 text-xs font-bold rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors cursor-pointer shadow-sm"
              >
                <span>Hire Chirag</span>
                <FaArrowRight className="text-[10px]" />
              </button>
            </div>

            {/* Link Navigation Columns */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
              
              {/* Quick links */}
              <div>
                <h3 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-3.5 font-display">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => scrollToSection(link.sectionId)}
                        className="text-xs sm:text-sm text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-500 transition-colors cursor-pointer text-left font-medium"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Core capabilities */}
              <div>
                <h3 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-3.5 font-display">
                  Capabilities
                </h3>
                <ul className="space-y-2.5">
                  {serviceHighlights.map((serv) => (
                    <li key={serv} className="flex items-start gap-2 text-xxs sm:text-xs text-zinc-500 dark:text-zinc-400">
                      <FaCheck className="text-[9px] text-blue-500 mt-1 shrink-0" />
                      <span className="leading-tight font-medium">{serv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contacts */}
              <div className="col-span-2 sm:col-span-1">
                <h3 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-3.5 font-display">
                  Contact details
                </h3>
                <ul className="space-y-2.5 mb-4 text-xxs sm:text-xs text-zinc-500 dark:text-zinc-400">
                  <li className="flex items-center gap-2">
                    <IoMdMailUnread className="text-blue-500 text-sm shrink-0" />
                    <a href="mailto:gohilchirag90994@gmail.com" className="hover:text-blue-600 transition-colors break-all font-semibold">
                      gohilchirag90994@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2 font-semibold">
                    <FaPhoneAlt className="text-blue-500 text-xs shrink-0" />
                    <span>+91 90994 23494</span>
                  </li>
                  <li className="flex items-center gap-2 font-semibold">
                    <FaMapMarkerAlt className="text-blue-500 text-xs shrink-0" />
                    <span>Bangalore, India</span>
                  </li>
                </ul>

                {/* Social icons */}
                <div className="flex items-center gap-1.5 pt-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg border border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-150 flex items-center justify-center transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="text-xs" />
                    </a>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </motion.div>

        {/* Lower Row */}
        <div className="pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xxs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} Chirag Gohil. All rights reserved.</span>
          <span>Crafted with React & Tailwind CSS</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
