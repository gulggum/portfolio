import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/GlobalStyle";
import Router from "./router";
import { darkTheme, lightTheme } from "./theme/theme";
import { useThemeToggle } from "./context/ThemeContext";

const App = () => {
  const { isDark } = useThemeToggle();

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;
