import ceo from "../assets/images/characters/ceo.png";
import devBot from "../assets/images/characters/dev.png";
import designBot from "../assets/images/characters/design.png";
import projectBot from "../assets/images/characters/project.png";
import dataBot from "../assets/images/characters/data.png";
import type { BotConfig, BotType } from "../types/robot";

export const botMap: Record<
  BotType,
  BotConfig & { position: { top: string; left: string } }
> = {
  ceo: {
    name: "대표봇",
    image: ceo,
    getContent: () => "전체 기획과 방향을 담당하고 있어요.",
    position: { top: "50%", left: "35%" },

    dialogues: [
      {
        text: "안녕하세요! 👋\n대표봇이에요.\n이 포트폴리오의 전체 구조를 소개해드릴게요!",
        options: [{ label: "구조 설명 보기", next: 1 }],
      },
      {
        text: "이 공간은 '이희연님의 회사' 컨셉으로 구성되어 있어요!\n각 캐릭터를 클릭하면 역할별 정보를 확인할 수 있어요 😊",
        options: [{ label: "처음으로", next: 0 }],
      },
    ],
  },

  dev: {
    name: "개발봇",
    image: devBot,
    getContent: () => "React, TypeScript 기반 개발",
    position: { top: "70%", left: "60%" },

    dialogues: [
      {
        text: "안녕하세요! 👩‍💻\n프론트엔드 개발을 담당하는 개발봇이에요.\n무엇이 궁금하신가요?",
        options: [
          { label: "기술 스택", next: 1 },
          { label: "프로젝트", next: 2 },
        ],
      },
      {
        text: "React, TypeScript를 중심으로\n사용자 친화적인 UI를 구현하고 있어요!",
        options: [{ label: "뒤로가기", next: 0 }],
      },
      {
        text: "키즈스톡 프로젝트를 통해\n어린이 경제 학습 서비스를 개발했어요!",
        options: [{ label: "뒤로가기", next: 0 }],
      },
    ],
  },

  design: {
    name: "디자인봇",
    image: designBot,
    getContent: () => "감성 UI/UX 디자인 담당",
    position: { top: "58%", left: "75%" },

    dialogues: [
      {
        text: "안녕하세요! 🎨\n디자인을 담당하는 디자인봇이에요.\n어떤 부분을 보시겠어요?",
        options: [{ label: "디자인 스타일", next: 1 }],
      },
      {
        text: "파스텔톤과 귀여운 감성을 기반으로\n사용자 경험을 중요하게 생각하고 있어요!",
        options: [{ label: "뒤로가기", next: 0 }],
      },
    ],
  },

  project: {
    name: "프로젝트봇",
    image: projectBot,
    getContent: () => "프로젝트 설명",
    position: { top: "65%", left: "25%" },

    dialogues: [
      {
        text: "안녕하세요! 🚀\n프로젝트봇이에요.\n프로젝트를 확인해보실래요?",
        options: [{ label: "키즈스톡 보기", next: 1 }],
      },
      {
        text: "키즈스톡은 어린이를 위한 경제 학습 서비스로,\n쉽고 재미있게 주식을 배울 수 있도록 만들었어요!",
        options: [{ label: "뒤로가기", next: 0 }],
      },
    ],
  },

  data: {
    name: "데이터봇",
    image: dataBot,
    getContent: () => "강점 및 역량",
    position: { top: "80%", left: "20%" },

    dialogues: [
      {
        text: "안녕하세요! 📊\n강점을 소개하는 데이터봇이에요.\n확인해보실래요?",
        options: [{ label: "강점 보기", next: 1 }],
      },
      {
        text: "UI 감각, 기획력, 인터랙션 구현 능력을 강점으로 가지고 있어요!",
        options: [{ label: "뒤로가기", next: 0 }],
      },
    ],
  },
};
