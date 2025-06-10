import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();


const lightTheme = {
  background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
  headingColor: "#2c3e50",
  bodyColor: "#5a6c7d", 
  secondaryTextColor: '#1565c0', 
  headerBackground: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  headerColor: "#ffffff",
  font: "Roboto",
  headerButtonColor: '#e8b3ff', 
  cardBackgroundColor: '#ffffff',

  buttonBackground: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  buttonColor: "#ffffff",
  buttonHoverBackground: "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
  buttonShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
  buttonHoverShadow: "0 6px 20px rgba(102, 126, 234, 0.5)",

  defaultButtonColor: "#667eea",
  defaultButtonHoverBg: "#667eea",
  defaultButtonHoverColor: "#ffffff"
};

const darkTheme = {
  background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f1419 100%)",
  headingColor: "#f8fafc",
  bodyColor: "#cbd5e1",
  secondaryTextColor: '#7dd3fc', 
  headerBackground: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
  headerColor: "#f1f5f9",
  font: "Roboto",
  headerButtonColor: '#4a6b7a', 
  cardBackgroundColor: '#1e293b',

  buttonBackground: "linear-gradient(135deg, #1a4d5c 0%, #2c5364 50%, #3d6b7a 100%)",
  buttonColor: "#f1f5f9",
  buttonHoverBackground: "linear-gradient(135deg, #1f5a6b 0%, #356873 50%, #4a7889 100%)",
  buttonShadow: "0 4px 15px rgba(44, 83, 100, 0.4)",
  buttonHoverShadow: "0 6px 20px rgba(44, 83, 100, 0.6)",

  defaultButtonColor: "#4a6b7a",
  defaultButtonHoverBg: "#4a6b7a",
  defaultButtonHoverColor: "#f1f5f9"
};

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setThemeMode(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

 
  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

    const theme = themeMode === 'light' ? lightTheme : darkTheme;


  return (
    <ThemeContext.Provider value={{ theme, themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
