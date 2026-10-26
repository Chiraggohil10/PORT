import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaSearch, FaHashtag, FaExternalLinkAlt, FaTerminal, 
  FaSun, FaMoon, FaEnvelope, FaFileDownload, FaGithub 
} from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { scrollToSection } from '../../utils/scrollToSection';

const CommandPalette = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { isDark, toggleTheme } = useTheme();
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const actions = [
    { id: 'home', title: 'Go to Home', category: 'Navigation', icon: FaHashtag, action: () => scrollToSection('home') },
    { id: 'about', title: 'Go to About Me', category: 'Navigation', icon: FaHashtag, action: () => scrollToSection('about') },
    { id: 'skills', title: 'Go to Skills', category: 'Navigation', icon: FaHashtag, action: () => scrollToSection('techstack') },
    { id: 'projects', title: 'Go to Projects', category: 'Navigation', icon: FaHashtag, action: () => scrollToSection('projects') },
    { id: 'experience', title: 'Go to Experience', category: 'Navigation', icon: FaHashtag, action: () => scrollToSection('experience') },
    { id: 'services', title: 'Go to Services', category: 'Navigation', icon: FaHashtag, action: () => scrollToSection('services') },
    { id: 'contact', title: 'Go to Contact', category: 'Navigation', icon: FaHashtag, action: () => scrollToSection('contact') },
    { id: 'theme', title: `Switch to ${isDark ? 'Light' : 'Dark'} Mode`, category: 'Actions', icon: isDark ? FaSun : FaMoon, action: toggleTheme },
    { id: 'resume', title: 'Download Resume', category: 'Actions', icon: FaFileDownload, action: () => {
        const link = document.createElement('a');
        link.href = '/ChiragGohilResume.pdf';
        link.download = 'ChiragGohilResume.pdf';
        link.click();
      }
    },
    { id: 'email', title: 'Copy Email Address', category: 'Actions', icon: FaEnvelope, action: () => {
        navigator.clipboard.writeText('gohilchirag90994@gmail.com');
        alert('Email copied to clipboard!');
      } 
    },
    { id: 'github', title: 'Open GitHub Profile', category: 'Social', icon: FaGithub, action: () => window.open('https://github.com/Chiraggohil10', '_blank') },
  ];

  const filtered = actions.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setSelectedIndex(0);
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filtered.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].action();
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filtered, onClose]);

  // Adjust scroll when navigating via keyboard
  useEffect(() => {
    const selectedElement = listRef.current?.children[selectedIndex];
    if (selectedElement) {
      selectedElement.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {/* Search Bar */}
            <div className="flex items-center gap-3 border-b border-zinc-100 px-4 py-3.5 dark:border-zinc-800">
              <FaSearch className="text-zinc-400 dark:text-zinc-500 text-lg shrink-0" />
              <input
                ref={inputRef}
                type="text"
                className="w-full bg-transparent text-base text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-zinc-50 dark:placeholder-zinc-500"
                placeholder="Type a command or search..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedIndex(0);
                }}
              />
              <span className="rounded bg-zinc-100 px-2 py-0.5 text-xxs font-semibold text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 shrink-0">
                ESC
              </span>
            </div>

            {/* List */}
            {filtered.length > 0 ? (
              <div 
                ref={listRef}
                className="max-h-[300px] overflow-y-auto p-2"
              >
                {filtered.map((item, index) => {
                  const isSelected = index === selectedIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        item.action();
                        onClose();
                      }}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-colors ${
                        isSelected 
                          ? 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-900 dark:text-zinc-50' 
                          : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className={`text-base shrink-0 ${
                          isSelected ? 'text-blue-500' : 'text-zinc-400 dark:text-zinc-500'
                        }`} />
                        <span className="text-sm font-medium">{item.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xxs px-2 py-0.5 rounded bg-zinc-200/50 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500">
                          {item.category}
                        </span>
                        {isSelected && <FaTerminal className="text-xs text-zinc-400 animate-pulse" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="p-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
                No results found for &ldquo;<span className="font-semibold">{search}</span>&rdquo;
              </div>
            )}

            {/* Footer help */}
            <div className="flex items-center justify-between border-t border-zinc-100 px-4 py-2.5 bg-zinc-50 dark:bg-zinc-900/50 dark:border-zinc-800 text-xxs text-zinc-400 dark:text-zinc-500">
              <div className="flex items-center gap-3">
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
              </div>
              <div className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 bg-zinc-200 rounded text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 font-mono">⌘</kbd>
                <kbd className="px-1.5 py-0.5 bg-zinc-200 rounded text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 font-mono">K</kbd>
                <span>to trigger</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
