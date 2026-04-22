/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F4A7B9", // 메인 버튼 / CTA
        primarySoft: "#FADADD", // hover / 연한 배경

        secondary: "#CDB4DB", // 보조 (lavender)
        accent: "#AFCBFF", // 강조 포인트 (sky)

        bg: "#F8F9FB", // 전체 배경
        surface: "#F5E6DA", // 카드 배경

        text: "#5B5B5B",
        muted: "#9CA3AF",
      },

      //  그림자 (카드, 버튼)
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.05)",
      },

      //  둥근 모서리 (귀여운 UI용)
      borderRadius: {
        xl2: "1.5rem",
      },
      //  폰트 (기본 sans-serif 확장)
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
