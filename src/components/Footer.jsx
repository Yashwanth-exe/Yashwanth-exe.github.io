import React from 'react';
import { Mail, Phone } from 'lucide-react';

const GithubIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.52-1.59 6.52-7.14 0-1.6-.57-2.9-1.5-3.92.15-.38.65-1.85-.15-3.87 0 0-1.24-.4-4 1.5-1.18-.33-2.45-.5-3.72-.5-1.27 0-2.54.17-3.72.5-2.76-1.9-4-1.5-4-1.5-.8 2.02-.3 3.49-.15 3.87-1 1.02-1.5 2.32-1.5 3.92 0 5.5 3.33 6.78 6.5 7.14-.8.7-1.02 1.94-1.02 3.02v4"/>
  </svg>
);

const LinkedinIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "GITHUB", icon: <GithubIcon size={16} />, url: "https://github.com/Yashwanth-exe" },
    { name: "LINKEDIN", icon: <LinkedinIcon size={16} />, url: "https://www.linkedin.com/in/yashwanthexe" },
    { name: "EMAIL", icon: <Mail size={16} />, url: "mailto:yashwanthreddy0615@gmail.com" },
    { name: "COMM", icon: <Phone size={16} />, url: "tel:9370109" },
  ];

  return (
    <footer className="w-full border-t border-neutral-800/50 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: System status */}
        <div className="flex items-center gap-3 text-xs font-mono text-neutral-600 tracking-widest">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500/70 animate-pulse-glow"></span>
          <span>© {currentYear} YASHWANTH // SYS_ACTIVE</span>
        </div>

        {/* Center: Links */}
        <div className="flex items-center gap-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-accent transition-colors duration-300 p-2"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Right: Built with */}
        <div className="text-[10px] font-mono text-neutral-700 tracking-widest">
          BUILT WITH REACT + VITE
        </div>
      </div>
    </footer>
  );
};

export default Footer;
