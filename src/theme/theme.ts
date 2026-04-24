export type Theme = typeof theme;

export type ColorKey = keyof typeof theme.colors;

export const theme = {
  colors: {
    primary: "#F4A7B9",
    primarySoft: "#FADADD",

    secondary: "#CDB4DB",
    accent: "#AFCBFF",

    bg: "#F8F9FB",
    surface: "#F5E6DA",

    text: "#5B5B5B",
    muted: "#9CA3AF",

    white: "#FFFFFF",
    black: "#000000",
  },

  shadow: {
    soft: "0 10px 25px rgba(0,0,0,0.05)",
    medium: "0 15px 35px rgba(0,0,0,0.08)",
  },

  radius: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
  },

  font: {
    main: "Inter, sans-serif",
  },

  // 🔥 spacing 추가 (중요)
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
};
