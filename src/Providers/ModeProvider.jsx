import React, { createContext, useState } from 'react';

const ModeContext = createContext();

const ModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleModeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ModeContext.Provider value={{ darkMode, handleModeToggle }}>
      {children}
    </ModeContext.Provider>
  );
};

export { ModeProvider, ModeContext };
