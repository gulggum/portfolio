import kidsStockImg from "../assets/images/projects/kidsStock.png";
import portfolioImg from "../assets/images/projects/portfolio.png";
import pokemonImg from "../assets/images/projects/pokemon.png";
import foodShopImg from "../assets/images/projects/food-shop.png";
import reactShopImg from "../assets/images/projects/react-shop.png";
import vueShopImg from "../assets/images/projects/vue-shop.png";
import todoImg from "../assets/images/projects/todo.png";
import togetherWalk from "../assets/images/projects/togetherWalk.png";

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  deployUrl: string;
  githubUrl: string;
  thumbnail: string;
  isMain: boolean; // 메인 카드 여부
}

export const projects: Project[] = [
  {
    id: "walktogether",
    name: "함께걸어요",
    thumbnail: togetherWalk,
    description:
      "걷기·러닝 습관을 게임처럼 즐길 수 있는 모바일 피트니스 커뮤니티 서비스입니다.\n실시간 운동 트래킹, 파티 시스템, 캐릭터 성장 요소를 결합해 운동을 지속할 수 있도록 설계했습니다.\nSupabase Realtime과 알림 시스템을 활용해 사용자 간 상호작용을 강화했습니다.",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "React Router",
      "i18next",
      "PWA",
      "Web Push",
    ],
    deployUrl: "https://workout-app-gules-iota.vercel.app/",
    githubUrl: "https://github.com/devhy5174/workout-app",
    isMain: true,
  },
  {
    id: "kidstock",
    name: "키즈스톡",
    thumbnail: kidsStockImg,
    description:
      "어린이 금융 교육을 위한 게임형 UI 서비스입니다.\nTanStack Query로 서버 상태를 관리하고, Context API로 전역 상태를 분리했습니다.\nAI 도구를 활용하되, 구조와 설계는 직접 이해하며 구현했습니다.",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "Context API",
      "styled-components",
      "Supabase",
    ],
    deployUrl: "https://kids-stock-app.vercel.app/",
    githubUrl: "https://github.com/gulggum/kids-stock-app",
    isMain: true,
  },
  {
    id: "portfolio",
    name: "AI 포트폴리오",
    thumbnail: portfolioImg,
    description:
      "면접관이 AI 봇에게 직접 질문하는 포트폴리오. \n사무실 배경 위에 역할별 봇을 배치하고 Claude API를 연결해 자유롭게 대화할 수 있도록 설계했습니다.",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "styled-components",
      "Claude API",
      "Context API",
      "Vercel",
    ],
    deployUrl: "https://portfolio-sigma-seven-ujq42n81oj.vercel.app/",
    githubUrl: "https://github.com/gulggum/portfolio",
    isMain: true,
  },
  {
    id: "pokemon",
    name: "포켓몬 도감",
    thumbnail: pokemonImg,
    description:
      "PokeAPI를 활용하여 비동기 데이터 처리와 상태 관리 흐름을 학습하기 위해 제작한 프로젝트입니다.\n API 요청 과정에서 로딩 및 에러 상태를 분리하여 사용자 경험을 개선했으며, 컴포넌트 단위로 책임을 나누어 재사용성을 고려한 구조로 구현했습니다.",
    techStack: ["React", "TypeScript", "Vite", "API"],
    deployUrl: "https://gulggum.github.io/pokemon-drawing-book-react/",
    githubUrl: "https://github.com/gulggum/pokemon-drawing-book-react",
    isMain: true,
  },
  {
    id: "food-shop",
    name: "푸드 쇼핑몰",
    thumbnail: foodShopImg,
    description:
      "프레임워크 없이 순수 JavaScript로 구현한 쇼핑몰 프로젝트입니다. \nDOM 조작과 이벤트 흐름을 직접 제어하며 웹의 기본 동작 원리를 이해하는 데 집중했습니다. 이벤트 위임을 활용해 불필요한 렌더링을 줄이고, 상태 기반 UI 업데이트 구조를 적용했습니다.",
    techStack: ["HTML", "CSS", "JavaScript"],
    deployUrl: "https://gulggum.github.io/shop-clone-project/",
    githubUrl: "https://github.com/gulggum/shop-clone-project",
    isMain: true,
  },
  {
    id: "react-shop",
    name: "쇼핑몰 (React)",
    thumbnail: reactShopImg,
    description:
      "React 기반으로 쇼핑몰을 구현하며 컴포넌트 구조 설계와 상태 관리 방식을 학습한 프로젝트입니다. 기능 단위로 컴포넌트를 분리하고 데이터 흐름을 명확하게 구성하는 데 집중했습니다.",
    techStack: ["React", "TypeScript", "Vite"],
    deployUrl: "https://react-shop-app-iota.vercel.app/",
    githubUrl: "https://github.com/gulggum/React-shop-app",
    isMain: false,
  },

  {
    id: "vue-shop",
    name: "쇼핑몰 (Vue)",
    thumbnail: vueShopImg,
    description:
      "React로 구현한 쇼핑몰을 Vue로 재구현하며 프레임워크 간 상태 관리 방식과 반응형 데이터 처리 구조의 차이를 비교한 프로젝트입니다.",
    techStack: ["Vue", "TypeScript", "Vite"],
    deployUrl: "https://vue-shop-app-kappa.vercel.app/",
    githubUrl: "https://github.com/gulggum/Vue-shop-app",
    isMain: false,
  },
  {
    id: "todo",
    name: "투두리스트",
    thumbnail: todoImg,
    description:
      "Context API와 useReducer 패턴을 활용하여 전역 상태 관리 구조를 학습한 프로젝트입니다. 상태 변경 로직을 분리하여 예측 가능한 데이터 흐름을 구현했습니다.",
    techStack: ["React", "TypeScript", "Context API", "useReducer"],
    deployUrl: "https://gulggum.github.io/todo-app-context-reducer/",
    githubUrl: "https://github.com/gulggum/todo-app-context-reducer",
    isMain: false,
  },
];

// 메인 프로젝트만 필터링
export const mainProjects = projects.filter((p) => p.isMain);
// 서브 프로젝트만 필터링
export const subProjects = projects.filter((p) => !p.isMain);
