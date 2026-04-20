import React, { useState, useEffect } from 'react';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';

const ScrambleText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    let timeoutId;
    const triggerGlitch = () => {
      // randomly trigger every 3 to 7 seconds
      const nextTime = 3000 + Math.random() * 4000;
      timeoutId = setTimeout(() => {
        setIsGlitching(true);
        triggerGlitch();
      }, nextTime);
    };
    triggerGlitch();

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!isGlitching) return;

    let iterations = 0;
    const maxIterations = 8;
    
    const interval = setInterval(() => {
      setDisplayText(text.split('').map((char, index) => {
        if (char === ' ' || char === '[' || char === ']' || char === '/') return char;
        if (Math.random() < 0.4) {
          return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        }
        return text[index];
      }).join(''));

      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsGlitching(false);
      }
      iterations++;
    }, 50);

    return () => clearInterval(interval);
  }, [isGlitching, text]);

  return (
    <span className={isGlitching ? 'text-accent' : 'transition-colors duration-300'} style={isGlitching ? { textShadow: '0 0 12px rgba(255,107,0,0.8)' } : {}}>
      {displayText}
    </span>
  );
};

export default ScrambleText;
