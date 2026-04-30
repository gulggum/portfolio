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
    color: "primary",
    preview: "이희연님에 대해 궁금한 게 있으신가요? ",
    suggestions: [
      "어떤 사람인가요?",
      "강점이 뭔가요?",
      "개발을 시작한 계기가 있나요?",
    ],
    position: {
      pc: { top: "45%", left: "10%" },
      mobile: { top: "5%", left: "50%" },
    },
  },

  project: {
    name: "프로젝트봇",
    image: bot,
    color: "primary",
    preview: "프로젝트들이 궁금하신가요? ",
    suggestions: [
      "어떤 프로젝트를 만들었나요?",
      "키즈스톡은 어떤 서비스인가요?",
      "가장 어려웠던 작업은 뭔가요?",
      "프로젝트 직접 보고 싶어요!",
    ],
    position: {
      pc: { top: "70%", left: "12%" },
      mobile: { top: "28%", left: "50%" },
    },
  },

  dev: {
    name: "기술스택봇",
    image: bot,
    color: "primary",
    preview: "기술 스택이 궁금하신가요? ",
    suggestions: [
      "주로 쓰는 기술은 뭔가요?",
      "TypeScript 경험이 있나요?",
      "어떤 기술을 배우고 있나요?",
    ],
    position: {
      pc: { top: "48%", left: "55%" },
      mobile: { top: "49%", left: "50%" },
    },
  },

  contact: {
    name: "연락봇",
    image: bot,
    color: "muted",
    preview: "함께 일하고 싶으시다면 연락주세요! ",
    suggestions: [
      "어떻게 연락할 수 있나요?",
      "어떤 협업 방식을 선호하나요?",
      "이력서를 볼 수 있나요?",
    ],
    position: {
      pc: { top: "53%", left: "78%" },
      mobile: { top: "70%", left: "50%" },
    },
  },

  growth: {
    name: "성장봇",
    image: bot,
    color: "primary",
    preview: "개발 여정이 궁금하신가요? ",
    suggestions: [
      "개발을 시작하게 된 계기가 궁금해요",
      "어떤 과정을 거쳐 성장했나요?",
      "앞으로 어떤 개발자가 되고 싶나요?",
    ],
    position: {
      pc: { top: "75%", left: "88%" },
      mobile: { top: "87%", left: "50%" },
    },
  },
};
