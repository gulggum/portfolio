export type Theme = typeof darkTheme; // 전체 테마 타입
export type ColorKey = keyof typeof darkTheme.colors; // colors 키 타입

export const baseTheme = {
  shadow: {
    soft: "0 10px 25px rgba(0,0,0,0.15)", // 기본 그림자
    medium: "0 15px 35px rgba(10,186,181,0.15)", // 티파니 글로우 그림자
  },
  radius: {
    sm: "8px", // 작은 버튼, 뱃지
    md: "12px", // 카드, 인풋
    lg: "16px", // 모달, 패널
    xl: "24px", // 말풍선, 큰 카드
  },
  font: {
    main: "Inter, sans-serif", // 전체 기본 폰트
  },
  spacing: {
    xs: "4px", // 아이콘 간격 등 미세 여백
    sm: "8px", // 작은 여백
    md: "16px", // 기본 여백
    lg: "24px", // 섹션 내부 여백
    xl: "32px", // 섹션 간 여백
  },
};

export const darkTheme = {
  ...baseTheme,
  colors: {
    primary: "#0ABAB5", // 티파니블루 — 메인 포인트 색상
    primarySoft: "#0d2e2d", // 티파니블루 다크 버전 — 호버, 배경 강조

    bg: "#0F1117", // 전체 배경 — 딥 다크
    surface: "#1A1D27", // 카드, 모달 배경
    surfaceLight: "#242838", // 살짝 밝은 서피스 — 호버, 구분선

    text: "#F0F0F0", // 메인 텍스트
    muted: "#6B7280", // 보조 텍스트, 플레이스홀더

    white: "#FFFFFF",
    black: "#000000",
  },
};

export const lightTheme = {
  ...baseTheme,
  colors: {
    primary: "#0ABAB5", // 티파니블루 — 메인 포인트 색상
    primarySoft: "#E6F7F7", // 티파니블루 연한 버전 — 배경 강조

    bg: "#F8F9FB", // 전체 배경 — 밝은 그레이
    surface: "#FFFFFF", // 카드, 모달 배경
    surfaceLight: "#F0F4F8", // 살짝 어두운 서피스 — 호버, 구분선

    text: "#1A1D27", // 메인 텍스트 — 다크 네이비
    muted: "#9CA3AF", // 보조 텍스트, 플레이스홀더

    white: "#FFFFFF",
    black: "#000000",
  },
};
