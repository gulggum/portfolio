import type { ColorKey } from "../theme/theme";

export type BotType = "intro" | "project" | "dev" | "contact" | "growth";

export interface BotConfig {
  name: string;
  image: string;
  color?: ColorKey;
  preview: string; //말풍선 첫 인사
  suggestions: string[]; //예시 질문 버튼
}
