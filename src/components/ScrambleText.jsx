import React, { useState, useEffect, useRef } from 'react';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';

const ScrambleText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  const glitchIndicesRef = useRef([]);

  useEffect(() => {
    let timeoutId;
    const triggerGlitch = () => {
      // randomly trigger every 3 to 7 seconds
      const nextTime = 3000 + Math.random() * 4000;
      timeoutId = setTimeout(() => {
        // Pick 2-3 random indices to scramble
        const numToScramble = 2 + Math.floor(Math.random() * 2);
        const indices = [];
        for(let i=0; i<numToScramble; i++) {
          let randIdx = Math.floor(Math.random() * text.length);
          indices.push(randIdx);
        }
        glitchIndicesRef.current = indices;

        setIsGlitching(true);
        triggerGlitch();
      }, nextTime);
    };
    triggerGlitch();

    return () => clearTimeout(timeoutId);
  }, [text]);

  useEffect(() => {
    if (!isGlitching) return;

    let iterations = 0;
    const maxIterations = 14; // about 700ms
    
    const interval = setInterval(() => {
      setDisplayText(text.split('').map((char, index) => {
        if (glitchIndicesRef.current.includes(index)) {
          if (char === ' ' || char === '[' || char === ']' || char === '/') return char;
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
