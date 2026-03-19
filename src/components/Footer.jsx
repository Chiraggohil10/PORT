import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaPhoneAlt,
} from 'react-icons/fa';
import { IoMdMailUnread } from 'react-icons/io';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Tech Stack', href: '#techstack' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const serviceHighlights = [
    'Frontend Engineering',
    'Backend APIs',
    'Full Stack Delivery',
    'Responsive UI Systems',
    'Performance Optimization',
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/Chiraggohil10',
      label: 'GitHub',
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/chirag-gohil-42b261255/',
      label: 'LinkedIn',
    },
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/chirag_gohil_1910/',
      label: 'Instagram',
    },
  ];

  return (
    <footer className="relative overflow-hidden pt-12 sm:pt-14 pb-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="section-solid-bg" />
      <div className="section-grid-pattern" />

      <div className="section-wrap">
        <motion.div
          className="relative rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-sm p-5 sm:p-6 lg:p-8 shadow-sm"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-x-0 top-0 h-1.5 rounded-t-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-5">
              <p className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-blue-100 text-blue-700 mb-4">
                AVAILABLE FOR PROJECTS
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-3">
                Let us build something that users actually love.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5 max-w-xl">
                I help teams ship modern, fast, and scalable web products with clean architecture and polished user experience.
              </p>

              <motion.a
                href="#contact"
                whileHover={{ x: 3 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white text-sm sm:text-base font-semibold hover:bg-slate-800 transition-colors"
              >
                Start Your Project
                <FaArrowRight className="text-sm" />
              </motion.a>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[1fr_1fr_1.3fr] gap-6 sm:gap-8">
              <div>
                <h3 className="text-sm font-bold tracking-wide text-slate-900 mb-3">Quick Links</h3>
                <ul className="space-y-2.5">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm sm:text-base text-slate-600 hover:text-blue-700 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold tracking-wide text-slate-900 mb-3">Core Services</h3>
                <ul className="space-y-2.5">
                  {serviceHighlights.map((service) => (
                    <li key={service} className="flex items-center gap-2.5 text-sm sm:text-base text-slate-600">
                      <FaCheckCircle className="text-blue-600 text-xs shrink-0" />
                      <span className="leading-none whitespace-nowrap">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold tracking-wide text-slate-900 mb-3">Contact</h3>
                <ul className="space-y-2.5 mb-4">
                  <li className="flex items-center gap-2.5 text-sm sm:text-base text-slate-600 break-all">
                    <IoMdMailUnread  className="text-blue-600 text-xs shrink-0" />
                    <a href="mailto:gohilchirag90994@gmail.com" className="hover:text-blue-700 transition-colors">
                      gohilchirag90994@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5 text-sm sm:text-base text-slate-600">
                    <FaPhoneAlt  className="text-blue-600 text-xs shrink-0" />
                    <span>+91 90994 23494</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-sm sm:text-base text-slate-600">
                    <FaMapMarkerAlt className="text-blue-600 text-xs shrink-0" />
                    <span>Bangalore, India</span>
                  </li>
                </ul>

                <div className="flex items-center gap-2">
                  {socialLinks.map((item) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      whileHover={{ y: -2 }}
                      className="w-9 h-9 rounded-lg border border-slate-200 bg-white text-slate-700 hover:text-blue-700 hover:border-blue-200 transition-all flex items-center justify-center"
                    >
                      <item.icon className="text-base" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 sm:mt-8 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          <p className="text-xs sm:text-sm text-slate-600 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Chirag Gohil. Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

