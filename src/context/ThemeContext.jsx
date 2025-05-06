// ThemeContext.js
import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');

  const toggleTheme = () => {
    setThemeMode((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const muiTheme = useMemo(() => {
    const isDark = themeMode === 'dark';
    return createTheme({
      palette: {
        mode: themeMode,
      },
     
    });
  }, [themeMode]);

  const value = useMemo(() => ({ theme: themeMode, toggleTheme }), [themeMode]);

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
