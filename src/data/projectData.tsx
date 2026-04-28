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
      "어린이를 위한 주식 체험 금융 교육 앱. 게임 같은 UI로 회사와 금융 개념을 안전하게 탐색할 수 있도록 설계.",
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
      "PokeAPI를 활용한 포켓몬 도감 클론코딩. React + TypeScript로 구현.",
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
      "순수 JavaScript로 구현한 푸드 쇼핑몰. 바닐라 JS의 DOM 조작과 이벤트 처리를 활용.",
    techStack: ["HTML", "CSS", "JavaScript"],
    deployUrl: "https://gulggum.github.io/shop-clone-project/",
    githubUrl: "https://github.com/gulggum/shop-clone-project",
    isMain: true,
  },
  {
    id: "react-shop",
    name: "쇼핑몰 (React)",
    thumbnail: "/src/assets/images/projects/react-shop.png",
    description: "React + Vite + TypeScript 기반 쇼핑몰 클론코딩.",
    techStack: ["React", "TypeScript", "Vite"],
    deployUrl: "https://react-shop-app-iota.vercel.app/",
    githubUrl: "https://github.com/gulggum/React-shop-app",
    isMain: false,
  },
  {
    id: "vue-shop",
    name: "쇼핑몰 (Vue)",
    thumbnail: "/src/assets/images/projects/vue-shop.png",
    description: "React 프로젝트를 기반으로 Vue 버전으로 재구현.",
    techStack: ["Vue", "TypeScript", "Vite"],
    deployUrl: "https://vue-shop-app-kappa.vercel.app/",
    githubUrl: "https://github.com/gulggum/Vue-shop-app",
    isMain: false,
  },
  {
    id: "todo",
    name: "투두리스트",
    thumbnail: "/src/assets/images/projects/todo.png",
    description: "Context API + useReducer 패턴으로 구현한 투두리스트 앱.",
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
