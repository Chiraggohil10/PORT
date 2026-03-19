import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import Logo from '../assets/logo.png';

const Header = ({ isMobileMenuOpen, toggleMobileMenu, closeMobileMenu }) => {
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#techstack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  // Smooth scroll function
  const scrollToSection = (e, href) => {
    e.preventDefault();
    if (href === '#home' || href === '#') {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed header
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
    closeMobileMenu();
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        !e.target.closest('button[aria-label="Mobile menu"]')
      ) {
        closeMobileMenu();
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) closeMobileMenu();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
   <>
  <header
    className={`fixed w-full z-50 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
      scrolled
        ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-slate-200'
        : 'bg-transparent'
    }`}
  >
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      {/* Logo */}
      <a href="#home" onClick={(e) => scrollToSection(e, '#home')}>
        <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
          <img src={Logo} alt="Logo" className="w-10 sm:w-12 md:w-14" />
          <span className="text-slate-800 font-bold text-lg sm:text-xl hidden sm:block">
            Chirag <span className="text-blue-600">Gohil</span>
          </span>
        </motion.div>
      </a>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center">
        <ul className="flex space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <motion.a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm lg:text-base text-slate-600 hover:text-blue-600 transition-colors font-medium relative group"
                whileHover={{ y: -2 }}
              >
                {link.name}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full"
                  initial={{ width: 0 }}
                />
              </motion.a>
            </li>
          ))}
        </ul>
        <motion.a
          href="/ChiragGohilResume.pdf"
          download="ChiragGohilResume.pdf"
          className="ml-8 relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Simple pill button with subtle effect */}
          <div className="flex items-center gap-2 px-5 lg:px-6 py-2.5 lg:py-3 bg-slate-900 text-white rounded-[14px] w-full text-sm lg:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Animated underline */}
            <span className="relative overflow-hidden">
              Download CV
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </span>
            
            {/* Simple download icon */}
            <FaDownload className="text-sm group-hover:translate-y-0.5 transition-transform duration-300" />
          </div>
        </motion.a>
      </nav>
      <motion.button
        className="md:hidden text-slate-600 text-xl z-50 p-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-md"
        onClick={toggleMobileMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Mobile menu"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </motion.button>
    </div>
  </header>
  <AnimatePresence>
    {isMobileMenuOpen && (
      <>
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-black/70 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={closeMobileMenu}
        />

        {/* Full drawer */}
        <motion.div
          ref={mobileMenuRef}
          className="fixed top-0 right-0 h-full w-full sm:max-w-sm z-50 bg-white flex flex-col shadow-2xl overflow-y-auto"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        >
          <div className="p-6 border-b border-slate-200">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <img src={Logo} alt="Logo" className="w-10" />
                <span className="text-slate-800 font-bold text-lg">
                  Chirag <span className="text-blue-600">Gohil</span>
                </span>
              </div>
              <button
                onClick={closeMobileMenu}
                className="text-slate-600 text-2xl p-2 rounded-lg hover:bg-slate-100"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            <ul className="space-y-6">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="block text-lg sm:text-xl text-slate-700 hover:text-blue-600 transition-colors font-medium py-2"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="p-6 mt-auto">
            <motion.a
              href="/ChiragGohilResume.pdf"
              download="ChiragGohilResume.pdf"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all w-full"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={closeMobileMenu}
            >
              <FaDownload />
              <span>Download Resume</span>
            </motion.a>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
</>

  );
};

export default Header;
