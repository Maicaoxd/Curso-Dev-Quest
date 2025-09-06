import { createContext, useContext, useEffect, useState } from "react";
import { dark, light } from "../styles/theme";

const ThemeContext = createContext(null);

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || light
  );

  const toggle = () => setTheme((t) => (t === light ? dark : light));
  useEffect(() => localStorage.setItem("theme", theme), [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeCtx = () => useContext(ThemeContext);
