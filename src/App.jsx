import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

// Below-the-fold sections lazy loaded to optimize bundle size and page loading speed
const AboutSection = lazy(() => import('./components/AboutSection'));
const TechStackSection = lazy(() => import('./components/TechStackSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const ExperienceSection = lazy(() => import('./components/ExperienceSection'));
const ServicesSection = lazy(() => import('./components/ServicesSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Footer = lazy(() => import('./components/Footer'));

// Global features
const CommandPalette = lazy(() => import('./components/ui/CommandPalette'));

// Premium, minimal loading placeholder for Suspense boundaries
const SectionLoader = () => (
  <div className="w-full min-h-[300px] flex items-center justify-center relative py-16">
    <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
    <div className="flex flex-col items-center gap-4 relative z-10">
      <div className="w-10 h-10 rounded-full border-2 border-zinc-200 border-t-blue-600 animate-spin dark:border-zinc-800 dark:border-t-blue-500" />
      <p className="text-xs font-semibold text-zinc-500 tracking-widest uppercase dark:text-zinc-400">Loading Section...</p>
    </div>
  </div>
);

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Handle scroll to close mobile menu
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen, closeMobileMenu]);

  // Command Palette Keyboard Trigger (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-500/20 dark:selection:bg-blue-500/30">
      {/* Background radial highlight */}
      <div className="fixed inset-0 bg-grid-pattern opacity-60 dark:opacity-30 pointer-events-none z-0" />
      
      <Header
        isMobileMenuOpen={isMobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />
      
      <main className="relative z-10">
        <HeroSection />
        
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
          <TechStackSection />
          <ProjectsSection />
          <ExperienceSection />
          <ServicesSection />
          <ContactSection />
          <Footer />
        </Suspense>
      </main>

      {/* Global Command Palette */}
      <Suspense fallback={null}>
        <CommandPalette 
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
        />
      </Suspense>
    </div>
  );
}

export default App;
