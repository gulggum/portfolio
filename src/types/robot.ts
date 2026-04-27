import type { ColorKey } from "../theme/theme";

export type BotType = "intro" | "project" | "dev" | "contact" | "growth";

export interface BotConfig {
  name: string;
  image: string;
  color?: ColorKey;
  getContent: () => string;
  dialogues: Dialogue[];
  preview: string; // 모바일 카드에서 보여줄 한줄 요약
}

// 선택지 타입
export interface DialogueOption {
  label: string; // 버튼 텍스트
  next: number; // 다음 대화 인덱스
}

// 한 단계 대화
export interface Dialogue {
  text: string;
  options: DialogueOption[];
}
