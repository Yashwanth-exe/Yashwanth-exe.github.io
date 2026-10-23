import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Light is the default; only an explicit toggle is remembered
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme-pref') === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    const style = getComputedStyle(document.documentElement);
    document.body.style.backgroundColor = style.getPropertyValue('--color-bg').trim();
    document.body.style.color = style.getPropertyValue('--color-primary').trim();

    // Force reflow so existing elements pick up new CSS variable values
    document.body.style.display = 'none';
    void document.body.offsetHeight;
    document.body.style.display = '';
  }, [theme]);

  const toggleTheme = () => setTheme(t => {
    const next = t === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme-pref', next); } catch { /* storage unavailable */ }
    return next;
  });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
