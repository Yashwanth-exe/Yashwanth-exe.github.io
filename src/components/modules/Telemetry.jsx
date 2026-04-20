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

const Telemetry = () => {
  const links = [
    { name: "GITHUB", icon: <GithubIcon size={18} />, url: "https://github.com/Yashwanth-exe" },
    { name: "LINKEDIN", icon: <LinkedinIcon size={18} />, url: "https://www.linkedin.com/in/yashwanthexe" },
    { name: "EMAIL", icon: <Mail size={18} />, url: "mailto:yashwanthreddy0615@gmail.com" },
    { name: "COMM_LINK", icon: <Phone size={18} />, url: "tel:9370109" }
  ];

  return (
    <div className="flex flex-col h-full justify-between">
      <h2 className="text-sm text-neutral-500 tracking-widest mb-4 md:text-right md:mb-6 font-mono">[ TELEMETRY // CONTACT ]</h2>
      <div className="flex flex-col md:items-end gap-3">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-400 hover:text-accent px-4 py-2.5 transition-all duration-300 border border-neutral-800 hover:border-accent/40 hover:bg-accent/5 bg-black/40 rounded-sm group"
          >
            <span className="group-hover:scale-110 transition-transform duration-200">{link.icon}</span>
            <span className="tracking-widest text-xs font-bold">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Telemetry;
