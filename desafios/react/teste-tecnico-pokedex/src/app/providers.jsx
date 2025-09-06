import { ThemeProvider } from "styled-components";
import { ThemeContextProvider, useThemeCtx } from "../context/ThemeContext";
import { GlobalStyle } from "../styles/GlobalStyle";
import { dark, light } from "../styles/theme";

function ThemedProviders({ children }) {
  const { theme } = useThemeCtx();
  return (
    <ThemeProvider theme={theme === light ? light : dark}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default function AppProviders({ children }) {
  return (
    <ThemeContextProvider>
      <ThemedProviders>{children}</ThemedProviders>
    </ThemeContextProvider>
  );
}
