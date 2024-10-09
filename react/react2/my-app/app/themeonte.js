import React, { createContext, useContext } from "react";

// // Create the context
const ThemeContext = createContext();

// // Custom hook for consuming the theme context
export const useTheme = () => useContext(ThemeContext);

// // Theme provider component
