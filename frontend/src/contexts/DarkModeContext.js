// // src/contexts/DarkModeContext.js
// import React, { createContext, useState, useContext, useEffect } from 'react';

// const DarkModeContext = createContext();

// export const DarkModeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(() => {
//     // Check localStorage or default to light mode
//     return localStorage.getItem('darkMode') === 'true';
//   });

//   useEffect(() => {
//     document.body.classList.toggle('dark-mode', isDarkMode);
//     localStorage.setItem('darkMode', isDarkMode);
//   }, [isDarkMode]);

//   const toggleDarkMode = () => setIsDarkMode(prevMode => !prevMode);

//   return (
//     <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };

// export const useDarkMode = () => useContext(DarkModeContext);


import React, { createContext, useContext, useState } from 'react';

// Create context
const DarkModeContext = createContext();

// Create provider component
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cursorStyle, setCursorStyle] = useState('default');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  const updateCursorStyle = (style) => {
    setCursorStyle(style);
    document.documentElement.style.setProperty('--cursor-color', style === 'animated' ? 'red' : 'blue');
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode, cursorStyle, updateCursorStyle }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook for using context
export const useDarkMode = () => useContext(DarkModeContext);
