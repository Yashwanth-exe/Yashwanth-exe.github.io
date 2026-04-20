import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const SysId = () => {
  const [text, setText] = useState('');
  const [showTagline, setShowTagline] = useState(false);
  const fullText = "> Electronics and Communication Engineer";

  // Live clock
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowTagline(true), 400);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="flex flex-col justify-center relative">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fast-blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .terminal-cursor {
          animation: fast-blink 1.2s infinite;
        }
        @keyframes name-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}} />

      {/* Status readout strip */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-6 text-[10px] font-mono text-neutral-600 tracking-widest">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500/70 animate-pulse-glow"></span>
          STATUS: ONLINE
        </span>
        <span>CLK: {time}</span>
        <span>LOC: 13.34°N 74.79°E</span>
      </div>
      
      <h2 className="text-sm text-neutral-500 mb-4 z-10 tracking-widest font-mono">[ SYS_ID // ROOT_PROFILE ]</h2>
      
      {/* Name with gradient shimmer */}
      <h1 
        className="text-5xl md:text-7xl font-bold tracking-wider mb-4 z-10 font-display"
        style={{
          background: 'linear-gradient(90deg, #ffffff 0%, #ffffff 40%, #ff6b00 50%, #ffffff 60%, #ffffff 100%)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'name-shimmer 6s linear infinite',
        }}
      >
        YASHWANTH
      </h1>
      
      {/* Typing subtitle */}
      <p className="text-neutral-400 text-base md:text-lg h-6 z-10 font-mono">
        {text}<span className="inline-block w-2.5 h-5 bg-accent ml-2 align-middle terminal-cursor"></span>
      </p>

      {/* Tagline reveal */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={showTagline ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-neutral-600 text-xs md:text-sm mt-3 z-10 font-mono tracking-wide"
      >
        Bridging raw silicon and physical motion.
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute -bottom-16 left-0 flex items-center gap-2 text-neutral-600"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} />
        </motion.div>
        <span className="text-[10px] tracking-widest font-mono">SCROLL</span>
      </motion.div>
    </div>
  );
};

export default SysId;
