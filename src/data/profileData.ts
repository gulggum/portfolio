export const profileData = {
  // 👤 기본 소개
  intro: {
    name: "이희연",
    role: "프론트엔드 개발자",
    description:
      "단순히 동작하는 코드가 아니라 '왜 동작하는지'를 이해하며 개발합니다. 사용자 경험을 중심에 두고, 귀엽고 편리한 인터페이스를 만드는 것을 즐깁니다.",
  },
  career: {
    education: [
      {
        school: "숭의여자대학교",
        major: "경영과",
        period: "2008년 입학 · 졸업",
      },
      {
        school: "제로베이스 프론트엔드 야간스쿨",
        major: "프론트엔드 개발",
        period: "2025.03 ~ 2026.03",
        note: "과제 전 과정 수료",
      },
    ],
    certificates: [
      {
        name: "웹디자인기능사",
        date: "2025.03",
      },
    ],
    careerGap: {
      period: "졸업 후 ~ 2025년",
      reason: "육아",
      activity: [
        "육아 병행하며 틈틈이 개발 공부 지속",
        "노마드코더 등 온라인 강의로 프론트엔드 기초 학습",
        "제로베이스 야간스쿨 수료로 본격적인 개발 전환",
        "AI 툴을 활용한 바이브코딩으로 실전 프로젝트 제작",
      ],
      message:
        "늦게 시작했지만 육아하면서도 포기하지 않고 꾸준히 공부했습니다. 오히려 그 경험이 사용자 입장에서 생각하는 UX 감각으로 이어졌다고 생각합니다.",
    },
  },

  // 💭 성향
  personality: [
    "기획 아이디어가 많고 서비스 흐름을 설계하는 것을 좋아함",
    "코드가 왜 동작하는지 원리를 파고드는 탐구형",
    "버그 앞에서 포기하지 않는 끈기",
    "사용자 경험을 중요하게 생각하는 UX 중심 사고",
    "AI 툴을 적극 활용해 빠르게 구현하고 원리를 함께 학습하는 스타일",
    "디자인 감각이 있고 직접 AI로 이미지/캐릭터를 제작할 수 있음",
  ],

  // 📌 프로젝트
  projects: [
    {
      name: "키즈스톡 (KidsStock)",
      description:
        "어린이를 위한 주식 시장 교육 시뮬레이션 앱. 가상 화폐, 레벨/업적 시스템, 퀴즈, 출석 보상 등 게이미피케이션 요소로 경제 개념을 재미있게 학습할 수 있도록 설계했습니다.",
      techStack: [
        "React",
        "TypeScript",
        "Vite",
        "styled-components",
        "Supabase",
        "Vercel",
        "TanStack Query",
        "Context API",
      ],
      highlights: [
        "Supabase Auth 익명 로그인 + 이메일 로그인 통합 구현",
        "로그인 로딩 무한 대기 문제 → try/finally 패턴으로 해결 경험",
        "Promise.all 병렬 쿼리로 로그인 성능 개선",
        "새 테이블 추가 시 RLS(Row Level Security)권한 오류 원인 파악 및 해결 경험",
        "Vercel Cron Job으로 주식 데이터 매일 오전 9시 자동 업데이트",
        "AI 프롬프트 활용해 어린이 친화적 뉴스 콘텐츠 직접 제작 및 관리",
        "관리자 대시보드 (차트 + 실시간 통계)",
      ],
      insight:
        "단순한 포트폴리오가 아닌 실제 어린이가 사용하는 서비스를 목표로, 도박성 요소 대신 교육적 동기 부여에 집중했습니다.",
    },
    {
      name: "AI 포트폴리오",
      description:
        "면접관이 AI 봇에게 직접 질문하는 포트폴리오. 사무실 배경 위에 역할별 봇을 배치하고 Claude API를 연결해 자유롭게 대화할 수 있도록 설계했습니다.",
      techStack: [
        "React",
        "TypeScript",
        "Vite",
        "styled-components",
        "Claude API",
        "Context API",
        "Vercel",
      ],
      highlights: [
        "Claude API 연결 및 봇별 시스템 프롬프트 설계",
        "ModalContext / ThemeContext로 전역 상태 관리",
        "다크/라이트 테마 토글 구현",
        "사무실 배경 위 캐릭터 absolute 배치 및 좌우 스크롤",
        "ChatModal 예시 질문 버튼 및 초기 메시지 자동 전송",
        "소개 / 기술스택 / 프로젝트 / 연락하기 모달 구현",
      ],
      insight:
        "요즘 AI 에이전트가 활발하게 활용되는 시대에, 나를 위해 일하는 AI를 직접 만들어보고 싶었습니다. AI를 단순히 사용하는 것에 그치지 않고, 서비스에 직접 통합해 면접관이 자유롭게 체험할 수 있도록 설계했습니다.",
    },
  ],

  // 🛠 기술 스택
  techStack: {
    frontend: [
      "React",
      "TypeScript",
      "JavaScript",
      "styled-components",
      "Vite",
      "HTML/CSS",
      "Sass",
    ],
    backend: ["Supabase", "Vercel Serverless Functions"],
    state: ["Context API", "TanStack Query", "Redux (기초)"],
    tools: ["Git", "VSCode", "Vercel", "Figma", "AI 이미지 생성 툴"],
    learning: [
      "풀스택 전환 목표로 백엔드 영역 확장 중",
      "Claude API 등 AI 서비스 통합 경험 쌓는 중",
    ],
  },

  // 💪 강점
  strengths: [
    "UI 감각과 사용자 경험 중심 설계 능력",
    "문제의 근본 원인을 찾아내는 디버깅 능력",
    "복잡한 인증 흐름 설계 및 구현 경험",
    "기획 → 디자인 → 개발 → 배포 전 과정 경험",
    "모르는 개념을 끝까지 파고드는 학습 태도",
    "AI 툴을 활용한 빠른 프로토타이핑 및 구현 능력",
    "코드를 받아서 쓰는 것이 아니라 흐름을 이해하고 응용하는 능력",
  ],

  // 📈 성장 과정
  growth: [
    "HTML/CSS → JavaScript → React → TypeScript 순서로 기초부터 확장",
    "localStorage 중심 구조 → Supabase DB 구조로 개선",
    "순차 처리 → Promise.all 병렬 처리로 성능 개선",
    "stale closure 문제를 useRef 패턴으로 해결",
    "Supabase DB 트리거 직접 설계 및 디버깅",
    "props drilling → Context API로 상태 관리 구조 개선",
    "AI 툴을 활용한 바이브코딩으로 빠른 실전 경험 축적 중",
    "프론트엔드 → 풀스택 확장 진행 중",
  ],

  // 🤖 개발 스타일
  devStyle: {
    title: "바이브코딩 + 원리 이해",
    description:
      "Claude AI와 함께 코드를 작성하지만, 단순히 복붙하지 않습니다. 왜 이 구조인지, 어떤 흐름인지 이해한 뒤 적용합니다. AI 툴을 잘 쓰는 것도 요즘 개발자의 역량이라고 생각합니다.",
    examples: [
      "Context vs props — 언제 써야 하는지 직접 고민하고 판단",
      "StrictMode 이중 실행 문제를 useRef로 직접 해결",
      "컴포넌트 흐름을 스스로 정리하고 설명할 수 있음",
      "AI가 준 코드에서 버그를 직접 찾아내고 수정",
    ],
  },

  // 💬 면접용 메시지
  candidateMessage:
    "저는 AI 툴을 적극 활용하는 개발자입니다. 하지만 코드를 받아서 붙여넣는 것이 아니라, 왜 이렇게 설계하는지 이해하고 응용합니다. 키즈스톡에서 race condition과 DB 트리거 버그를 직접 해결했고, 이 포트폴리오에서는 Claude API를 직접 서비스에 통합했습니다. AI를 잘 활용하는 것도 실력이라고 생각하며, 빠르게 배우고 끝까지 파고드는 태도로 성장하고 있습니다.",
};
