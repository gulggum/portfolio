export type BotType = "ceo" | "dev" | "design" | "project" | "data";
export type BotColor = "accent" | "primary" | "secondary" | "warm" | "soft";

export interface BotConfig {
  name: string;
  image: string;
  color: BotColor;
  getContent: () => string;
  dialogues: Dialogue[];
}

// 선택지 타입
export interface DialogueOption {
  label: string; // 버튼 텍스트
  next: number; // 다음 step
}

// 한 단계 대화
export interface Dialogue {
  text: string;
  options: DialogueOption[];
}
