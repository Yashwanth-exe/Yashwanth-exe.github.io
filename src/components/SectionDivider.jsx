import React from 'react';

const SectionDivider = () => {
  return (
    <div className="w-full max-w-5xl mx-auto flex items-center justify-center py-2">
      <svg width="100%" height="20" viewBox="0 0 800 20" preserveAspectRatio="none" className="opacity-20">
        {/* Left via */}
        <circle cx="50" cy="10" r="3" fill="#ff6b00" opacity="0.6" />
        {/* Trace left segment */}
        <line x1="53" y1="10" x2="200" y2="10" stroke="#ff6b00" strokeWidth="1" opacity="0.3" />
        {/* Right angle bend */}
        <polyline points="200,10 210,10 210,5 350,5" fill="none" stroke="#ff6b00" strokeWidth="1" opacity="0.3" />
        {/* Center via */}
        <circle cx="400" cy="10" r="2.5" fill="#ff6b00" opacity="0.4" />
        {/* Trace from center */}
        <polyline points="450,15 590,15 590,10 600,10" fill="none" stroke="#ff6b00" strokeWidth="1" opacity="0.3" />
        {/* Right trace */}
        <line x1="600" y1="10" x2="750" y2="10" stroke="#ff6b00" strokeWidth="1" opacity="0.3" />
        {/* Right via */}
        <circle cx="750" cy="10" r="3" fill="#ff6b00" opacity="0.6" />
      </svg>
    </div>
  );
};

export default SectionDivider;
