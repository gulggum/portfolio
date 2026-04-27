import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
  isDark: true,
  onToggle: () => {},
});
export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeContext.Provider
      value={{ isDark, onToggle: () => setIsDark(!isDark) }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// 어디서든 이걸로 꺼내 씀
export const useThemeToggle = () => useContext(ThemeContext);
