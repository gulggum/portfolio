// data/projectData.ts
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
    id: "kidstock",
    name: "키즈스톡",
    thumbnail: "/src/assets/images/projects/kidsStock.png",
    description:
      "어린이가 금융 개념을 직관적으로 이해하기 어렵다는 문제를 해결하기 위해, 게임형 UI와 단계별 인터랙션을 설계한 금융 교육 서비스입니다. TanStack Query를 활용해 서버 상태를 관리하고 비동기 데이터 흐름을 안정적으로 처리했으며, Context API로 전역 상태를 분리해 컴포넌트 구조의 복잡도를 낮췄습니다. AI 도구를 활용해 개발 생산성을 높였지만, 코드 구조와 상태 관리 방식은 직접 이해하고 설계하며 구현했습니다.",
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
    id: "pokemon",
    name: "포켓몬 도감",
    thumbnail: "/src/assets/images/projects/pokemon.png",
    description:
      "PokeAPI를 활용하여 비동기 데이터 처리와 상태 관리 흐름을 학습하기 위해 제작한 프로젝트입니다. API 요청 과정에서 로딩 및 에러 상태를 분리하여 사용자 경험을 개선했으며, 컴포넌트 단위로 책임을 나누어 재사용성을 고려한 구조로 구현했습니다.",
    techStack: ["React", "TypeScript", "Vite", "API"],
    deployUrl: "https://gulggum.github.io/pokemon-drawing-book-react/",
    githubUrl: "https://github.com/gulggum/pokemon-drawing-book-react",
    isMain: true,
  },
  {
    id: "food-shop",
    name: "푸드 쇼핑몰",
    thumbnail: "/src/assets/images/projects/food-shop.png",
    description:
      "프레임워크 없이 순수 JavaScript로 구현한 쇼핑몰 프로젝트입니다. DOM 조작과 이벤트 흐름을 직접 제어하며 웹의 기본 동작 원리를 이해하는 데 집중했습니다. 이벤트 위임을 활용해 불필요한 렌더링을 줄이고, 상태 기반 UI 업데이트 구조를 적용했습니다.",
    techStack: ["HTML", "CSS", "JavaScript"],
    deployUrl: "https://gulggum.github.io/shop-clone-project/",
    githubUrl: "https://github.com/gulggum/shop-clone-project",
    isMain: true,
  },
  {
    id: "react-shop",
    name: "쇼핑몰 (React)",
    thumbnail: "/src/assets/images/projects/react-shop.png",
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
    thumbnail: "/src/assets/images/projects/vue-shop.png",
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
    thumbnail: "/src/assets/images/projects/todo.png",
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
