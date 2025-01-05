import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from '../styles/themes';

interface ThemeContextProps {
  toggleTheme: () => void;
  themeMode: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Check localStorage for saved theme preference
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;

  // Set default theme based on localStorage or default to light theme
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(savedTheme || 'light');

  // Toggle theme mode and persist it to localStorage
  const toggleTheme = () => {
    const newThemeMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newThemeMode);
    localStorage.setItem('theme', newThemeMode); // Save to localStorage
  };

  useEffect(() => {
    // Optionally, you can save the theme preference immediately after setting it in state
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeMode }}>
      <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within ThemeContextProvider');
  }
  return context;
};
