import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaDownload, FaSearch, FaSun, FaMoon } from 'react-icons/fa';
import Logo from '../assets/logo.png';
import { useTheme } from '../context/ThemeContext';
import { scrollToSection } from '../utils/scrollToSection';

const Header = ({ isMobileMenuOpen, toggleMobileMenu, closeMobileMenu, onOpenCommandPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const mobileMenuRef = useRef(null);

  const navLinks = [
    { name: 'Home', sectionId: 'home' },
    { name: 'About', sectionId: 'about' },
    { name: 'Skills', sectionId: 'techstack' },
    { name: 'Projects', sectionId: 'projects' },
    { name: 'Experience', sectionId: 'experience' },
    { name: 'Services', sectionId: 'services' },
    { name: 'Contact', sectionId: 'contact' },
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    closeMobileMenu();
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
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
        !e.target.closest('button[aria-label="Mobile menu"]') &&
        !e.target.closest('button[aria-label="Theme menu"]')
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
  }, [isMobileMenuOpen, closeMobileMenu]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) closeMobileMenu();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [closeMobileMenu]);

  return (
    <>
      <header
        className={`fixed w-full z-40 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 border-b ${
          scrolled
            ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-sm border-zinc-200/80 dark:border-zinc-800/80'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.button
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 focus-visible:outline-2 cursor-pointer group"
            whileHover={{ scale: 1.02 }}
          >
            <img src={Logo} alt="Logo" className="w-10 sm:w-11" />
            <span className="text-zinc-900 dark:text-zinc-50 font-bold text-lg sm:text-xl font-display">
              Chirag<span className="text-blue-600 dark:text-blue-500">.dev</span>
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.sectionId)}
                    className="text-sm font-semibold text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors relative py-1 cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>

            <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />

            {/* Command Palette Trigger Button */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:bg-zinc-900 dark:text-zinc-400 text-xs font-medium cursor-pointer transition-colors shadow-sm"
              title="Search commands (Ctrl+K)"
            >
              <FaSearch className="text-xs" />
              <span>Search...</span>
              <kbd className="px-1.5 py-0.5 bg-zinc-200/70 rounded text-[10px] font-mono dark:bg-zinc-800 dark:text-zinc-500">⌘K</kbd>
            </button>

            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800/80 dark:text-zinc-300 transition-colors shadow-sm cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Theme menu"
            >
              {isDark ? <FaSun className="text-sm text-yellow-500" /> : <FaMoon className="text-sm text-blue-600" />}
            </motion.button>

            {/* CV Button */}
            <motion.a
              href="/ChiragGohilResume.pdf"
              download="ChiragGohilResume.pdf"
              className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 rounded-xl text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Resume</span>
              <FaDownload className="text-[11px]" />
            </motion.a>
          </nav>

          {/* Mobile Right Bar */}
          <div className="flex md:hidden items-center gap-3">
            {/* Search Trigger (Mobile) */}
            <button
              onClick={onOpenCommandPalette}
              className="p-2.5 rounded-xl border border-zinc-200 bg-white/90 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 cursor-pointer shadow-sm min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Search"
            >
              <FaSearch className="text-sm" />
            </button>

            {/* Theme Toggle (Mobile) */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-zinc-200 bg-white/90 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 cursor-pointer shadow-sm min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {isDark ? <FaSun className="text-sm text-yellow-500" /> : <FaMoon className="text-sm text-blue-600" />}
            </button>

            {/* Mobile menu trigger */}
            <button
              className="p-2.5 rounded-xl border border-zinc-200 bg-white/90 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 cursor-pointer shadow-sm min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={toggleMobileMenu}
              aria-label="Mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <FaTimes className="text-sm" /> : <FaBars className="text-sm" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />

            {/* Drawer */}
            <motion.div
              ref={mobileMenuRef}
              className="fixed top-0 right-0 h-full w-full sm:max-w-xs z-50 bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 flex flex-col shadow-2xl overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            >
              <div className="p-6 border-b border-zinc-150 dark:border-zinc-800/80">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-2">
                    <img src={Logo} alt="Logo" className="w-9" />
                    <span className="text-zinc-900 dark:text-zinc-50 font-bold text-lg font-display">
                      Chirag<span className="text-blue-600 dark:text-blue-500">.dev</span>
                    </span>
                  </div>
                  <button
                    onClick={closeMobileMenu}
                    className="text-zinc-500 dark:text-zinc-400 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                    aria-label="Close menu"
                  >
                    <FaTimes className="text-base" />
                  </button>
                </div>

                <ul className="space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * index }}
                    >
                      <button
                        type="button"
                        onClick={() => handleNavClick(link.sectionId)}
                        className="block w-full text-left text-lg font-semibold text-zinc-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-500 transition-colors py-2 cursor-pointer"
                      >
                        {link.name}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="p-6 mt-auto">
                <motion.a
                  href="/ChiragGohilResume.pdf"
                  download="ChiragGohilResume.pdf"
                  className="flex items-center justify-center gap-2.5 bg-blue-600 text-white dark:bg-blue-500 font-semibold py-3.5 px-6 rounded-xl transition-all w-full shadow-lg shadow-blue-500/10"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={closeMobileMenu}
                >
                  <FaDownload className="text-xs" />
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
