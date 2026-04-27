import bot from "../assets/images/characters/bot.png";
import type { BotConfig, BotType } from "../types/robot";

export const botMap: Record<
  BotType,
  BotConfig & {
    position: {
      pc: { top: string; left: string };
      mobile: { top: string; left: string };
    };
  }
> = {
  intro: {
    name: "소개봇",
    image: bot,
    color: "primary", // ✅ 새 테마 키
    getContent: () => "안녕하세요! 저는 이희연을 소개하는 봇이에요.",
    position: {
      pc: { top: "45%", left: "25%" },
      mobile: { top: "5%", left: "50%" },
    },
    preview: "이희연을 소개합니다",
    dialogues: [
      {
        text: "안녕하세요! 👋\n저는 소개봇이에요.\n이희연님에 대해 알고 싶은 게 있으신가요?",
        options: [{ label: "자기소개 보기", next: 1 }],
      },
      {
        text: "사용자 경험을 중요하게 생각하는\n프론트엔드 개발자 이희연입니다 😊",
        options: [{ label: "처음으로", next: 0 }],
      },
    ],
  },

  project: {
    name: "프로젝트봇",
    image: bot,
    color: "primarySoft", // ✅ 새 테마 키
    getContent: () => "프로젝트를 소개해드릴게요!",
    position: {
      pc: { top: "70%", left: "12%" },
      mobile: { top: "28%", left: "50%" },
    },
    preview: "실제 프로젝트 경험 소개",
    dialogues: [
      {
        text: "안녕하세요! 🚀\n프로젝트봇이에요.\n어떤 프로젝트가 궁금하세요?",
        options: [{ label: "키즈스톡 보기", next: 1 }],
      },
      {
        text: "키즈스톡은 어린이를 위한 경제 학습 서비스예요!\n쉽고 재미있게 주식을 배울 수 있어요 📈",
        options: [{ label: "뒤로가기", next: 0 }],
      },
    ],
  },

  dev: {
    name: "기술스택봇",
    image: bot,
    color: "primary", // ✅ 새 테마 키
    getContent: () => "기술 스택을 소개해드릴게요!",
    position: {
      pc: { top: "48%", left: "60%" },
      mobile: { top: "49%", left: "50%" },
    },
    preview: "React, TypeScript 기반 개발",
    dialogues: [
      {
        text: "안녕하세요! 👩‍💻\n기술스택봇이에요.\n어떤 기술이 궁금하세요?",
        options: [
          { label: "프론트엔드", next: 1 },
          { label: "기타 도구", next: 2 },
        ],
      },
      {
        text: "React, TypeScript, Vue, Vite를\n능숙하게 사용할 수 있어요!",
        options: [{ label: "뒤로가기", next: 0 }],
      },
      {
        text: "Git, Figma, styled-components 등\n다양한 도구를 활용하고 있어요!",
        options: [{ label: "뒤로가기", next: 0 }],
      },
    ],
  },

  contact: {
    name: "연락봇",
    image: bot,
    color: "muted", // ✅ 새 테마 키
    getContent: () => "연락처를 안내해드릴게요!",
    position: {
      pc: { top: "53%", left: "78%" },
      mobile: { top: "70%", left: "50%" },
    },
    preview: "이메일, 깃허브, 이력서",
    dialogues: [
      {
        text: "안녕하세요! 📬\n연락봇이에요.\n어떻게 연락하고 싶으세요?",
        options: [
          { label: "이메일", next: 1 },
          { label: "깃허브", next: 2 },
        ],
      },
      {
        text: "이메일로 연락 주세요!\nyour@email.com",
        options: [{ label: "뒤로가기", next: 0 }],
      },
      {
        text: "깃허브에서 코드를 확인하세요!\ngithub.com/yourname",
        options: [{ label: "뒤로가기", next: 0 }],
      },
    ],
  },

  growth: {
    name: "성장봇",
    image: bot,
    color: "primary", // ✅ 새 테마 키
    getContent: () => "개발 여정을 소개해드릴게요!",
    position: {
      pc: { top: "75%", left: "88%" },
      mobile: { top: "87%", left: "50%" },
    },
    preview: "개발 여정 & 현재 공부 중인 것",
    dialogues: [
      {
        text: "안녕하세요! 🌱\n성장봇이에요.\n개발 여정이 궁금하세요?",
        options: [{ label: "여정 보기", next: 1 }],
      },
      {
        text: "꾸준히 성장 중인 프론트엔드 개발자예요!\n현재는 TypeScript와 React 심화를 공부 중이에요 💪",
        options: [{ label: "뒤로가기", next: 0 }],
      },
    ],
  },
};
