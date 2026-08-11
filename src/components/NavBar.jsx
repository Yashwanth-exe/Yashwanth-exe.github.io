import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { id: 'hero', label: 'IDENT' },
  { id: 'about', label: 'ABOUT' },
  { id: 'trajectory', label: 'LOG' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'skills', label: 'SKILLS' },
];

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
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
          className="h-full"
          style={{
            background: theme === 'dark' 
              ? 'linear-gradient(to right, var(--color-accent), #00d4ff)' 
              : 'linear-gradient(to right, var(--color-accent), #0284c7)',
            width: `${scrollProgress}%`,
          }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Breadcrumb Path Nav */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: isVisible ? 0 : -80 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-3 left-1/2 -translate-x-1/2 z-[150] px-3 py-1.5 flex items-center rounded-sm"
        style={{
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--nav-border)',
          boxShadow: '0 4px 30px rgba(0,0,0,0.4)',
        }}
      >
        {navItems.map(({ id, label }, index) => (
          <React.Fragment key={id}>
            <button
              onClick={() => scrollToSection(id)}
              className={`px-1.5 py-1.5 text-xs font-mono tracking-widest transition-all duration-300 ${
                activeSection === id
                  ? 'text-accent font-bold'
                  : 'text-subtle hover:text-primary'
              }`}
            >
              {label}
            </button>
            {index < navItems.length - 1 && (
              <span className="text-ghost text-xs font-mono px-1.5">/</span>
            )}
          </React.Fragment>
        ))}

        <span className="text-ghost text-xs font-mono px-1.5">|</span>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="px-1.5 py-1.5 text-subtle hover:text-accent transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
        </button>
      </motion.nav>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-[150] p-3 text-muted hover:text-accent transition-colors rounded-sm"
            style={{
              background: 'var(--nav-bg)',
              backdropFilter: 'blur(12px)',
              border: '1px solid var(--nav-border)',
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
