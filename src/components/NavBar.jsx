import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'IDENT' },
  { id: 'about', label: 'ABOUT' },
  { id: 'trajectory', label: 'LOG' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'skills', label: 'SKILLS' },
];

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = windowHeight > 0 ? (currentScrollY / windowHeight) * 100 : 0;

      setScrollProgress(progress);
      setShowScrollTop(currentScrollY > 500);

      // Auto-hide logic: hide on scroll down, show on scroll up
      if (currentScrollY > 100) {
        setIsVisible(currentScrollY < lastScrollY || currentScrollY < 200);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Intersection Observer for active section tracking
  useEffect(() => {
    const observers = [];
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-20% 0px -60% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[200] bg-transparent">
        <motion.div
          className="h-full bg-gradient-to-r from-accent to-accent-cyan"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Floating Nav */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: isVisible ? 0 : -80 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-3 left-1/2 -translate-x-1/2 z-[150] px-1 py-1 flex items-center gap-0.5 rounded-sm"
        style={{
          background: 'rgba(10, 10, 10, 0.7)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(50, 50, 50, 0.5)',
          boxShadow: '0 4px 30px rgba(0,0,0,0.4)',
        }}
      >
        {navItems.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`relative px-4 py-2 text-xs font-mono tracking-widest transition-all duration-300 rounded-sm ${
              activeSection === id
                ? 'text-accent'
                : 'text-neutral-500 hover:text-neutral-300'
            }`}
          >
            {label}
            {activeSection === id && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-accent rounded-full"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </motion.nav>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-[150] p-3 text-neutral-400 hover:text-accent transition-colors rounded-sm"
            style={{
              background: 'rgba(10, 10, 10, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(50, 50, 50, 0.5)',
            }}
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
