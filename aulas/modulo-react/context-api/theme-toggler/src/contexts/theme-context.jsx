import { createContext, useState } from "react";

export const themes = {
  light: {
    background: "#eee",
    color: "#000"
  },
  dark: {
    background: "#000",
    color: "#fff"
  }
};

export const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
