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
    { name: "GITHUB", icon: <GithubIcon size={20} />, url: "https://github.com/Yashwanth-exe" },
    { name: "LINKEDIN", icon: <LinkedinIcon size={20} />, url: "https://www.linkedin.com/in/yashwanthexe" },
    { name: "EMAIL", icon: <Mail size={20} />, url: "mailto:yashwanthreddy0615@gmail.com" },
    { name: "COMM_LINK", icon: <Phone size={20} />, url: "tel:9370109" }
  ];

  return (
    <div className="h-full flex flex-col justify-between">
      <h2 className="text-sm text-gray-500 mb-6">[ TELEMETRY // CONTACT ]</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-around items-center flex-grow">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-gray-300 hover:text-accent p-3 transition-colors border border-transparent hover:border-accent hover:border-dashed bg-black/20"
          >
            {link.icon}
            <span className="tracking-widest text-xs font-bold">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Telemetry;
