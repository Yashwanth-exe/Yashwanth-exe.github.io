import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    const style = getComputedStyle(document.documentElement);
    document.body.style.backgroundColor = style.getPropertyValue('--color-bg').trim();
    document.body.style.color = style.getPropertyValue('--color-primary').trim();

    // Force reflow so existing elements pick up new CSS variable values
    document.body.style.display = 'none';
    void document.body.offsetHeight;
    document.body.style.display = '';
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
