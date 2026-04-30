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
        major: "경영학과",
        period: "2008년 입학 · 2010년 졸업",
      },
      {
        school: "제로베이스 프론트엔드 야간스쿨",
        major: "프론트엔드 개발",
        period: "2025.03 ~ 2026.03",
        note: "프론트엔드 과정 수강, 커리큘럼 기반 프로젝트 진행",
      },
    ],
    certificates: [
      {
        name: "웹디자인기능사",
        date: "2024.04",
      },
    ],
    careerGap: {
      period: "2015년 ~ 2025년",
      reason: "육아",
      activity: [
        "육아와 병행하며 공인중개사 자격증 취득",
        "인천여성의광장 웹디자인 과정 수강 및 웹디자인기능사 취득",
        "온라인 강의(드림코더, 노마드코더)를 통해 HTML/CSS/JavaScript 기초 학습",
        "학습 과정에서 한계를 느껴 2025년 3월 프론트엔드 부트캠프 참여",
        "부트캠프에서 React/TypeScript 기반 프로젝트 경험",
        "AI를 활용한 프로젝트 개발 및 포트폴리오 제작",
      ],
      message:
        "늦게 시작했지만 꾸준히 학습을 이어왔고, 육아 경험을 통해 사용자 입장에서 생각하는 UX 감각으로 이어졌다고 생각합니다.",
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
    "막히는 문제를 끝까지 해결하려는 끈기와 집요함",
    "처음 겪는 기술도 두려워하지 않고 부딪히는 실행력",
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
        "뉴스-퀴즈-투자 흐름을 연결한 사용자 중심 UX 설계",
        "Supabase Auth 익명 로그인 + 이메일 로그인 통합 구현",
        "isLoading 상태가 종료되지 않아 발생한 무한 로딩 문제를 비동기 흐름 분석 후 try/finally로 해결 경험",
        "Context 분산으로 인한 상태 흐름 혼란을 도메인 단위로 통합하여 전역 상태 구조 개선",
        "Promise.all 병렬 쿼리로 로그인 성능 개선",
        "localStorage와 DB 혼용으로 발생한 데이터 불일치 문제를 UI 로직 수정으로 해결",
        "새 테이블 추가 시 RLS(Row Level Security)권한 오류 원인 파악 및 해결 경험",
        "Vercel Cron Job으로 주식 데이터 매일 오전 9시 자동 업데이트",
        "AI 프롬프트 활용해 어린이 친화적 뉴스 콘텐츠 직접 제작 및 관리",
        "관리자 페이지에서 콘텐츠 관리 및 데이터 반영 구조 구현",
        "Google Play 앱 배포 과정 경험 (AAB 생성, 심사 제출)",
        "업로드 키 재설정 과정에서 keystore / pem / SHA1 개념 이해 및 문제 해결",
        "잘못된 키 서명 오류(SHA1 mismatch) 원인 분석 및 해결 경험",
        "Android Studio를 활용한 WebView 기반 앱 빌드 및 배포 성공",
      ],
      insight:
        "단순한 포트폴리오가 아닌 실제 어린이가 사용하는 서비스를 목표로, 기능 구현을 넘어 상태 관리와 데이터 흐름 문제를 직접 겪고 해결하며, 구조를 개선하는 방식으로 개발하는 경험을 했습니다. 특히 사용자 입장에서 이해하기 쉬운 흐름을 만드는 데 집중했습니다.",
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
        "요즘 AI를 활용한 서비스가 자연스러운 흐름이 되고 있다고 느껴, 포트폴리오도 단순히 보여주는 형태가 아니라 직접 대화하며 알아가는 구조로 만들고 싶었습니다. 사무실 컨셉의 공간을 구성하고, 각 기능별 AI 봇을 배치해 면접관이 궁금한 내용을 직접 질문할 수 있도록 했습니다. 또한 AI가 임의로 답변하지 않도록 프롬프트를 제한해, 실제 입력된 데이터 기반으로만 응답하도록 설계했습니다.",
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
      "Supabase를 통해 DB 구조와 권한 설정을 직접 다뤄본 경험",
      "프론트엔드 개발을 기반으로 백엔드 흐름에 대한 이해를 확장 중",
      "Claude API 등 AI 서비스 통합 경험 쌓는 중",
    ],
  },

  // 💪 강점
  strengths: [
    "사용자 입장에서 이해하기 쉬운 흐름과 UI를 고민하며 개선하는 능력",
    "문제를 단순히 고치는 것이 아니라, 원인을 추적해 구조적으로 해결하는 디버깅 능력",
    "기획 → 디자인 → 개발 → 배포까지 전체 흐름을 직접 경험한 점",
    "상태 관리와 데이터 흐름 문제를 실제로 겪고 개선한 경험",
    "모르는 개념을 넘기지 않고 끝까지 확인하는 학습 태도",
    "AI를 활용해 빠르게 구현하면서도 코드 흐름을 이해하고 수정하는 방식",
    "문제가 발생하면 로그 확인과 조건 분리를 통해 원인을 좁혀가는 문제 해결 방식",
  ],

  // 📈 성장 과정
  growth: [
    "HTML/CSS → JavaScript → React → TypeScript 순으로 기초 확장",
    "localStorage 기반 → Supabase DB 구조로 데이터 관리 전환",
    "순차 처리 → Promise.all 병렬 처리로 성능 개선 경험",
    "props drilling → Context API로 상태 관리 구조 개선",
    "isLoading 무한 로딩 문제를 finally로 해결하며 비동기 흐름 이해",
    "RLS 권한 오류 원인 파악 및 해결 경험",
    "Google Play 배포 과정에서 keystore / SHA1 문제 직접 해결",
    "기능 구현에서 구조 개선 중심으로 개발 방식 변화",
  ],

  // 🤖 개발 스타일
  devStyle: {
    title: "AI 활용 + 구조 이해 중심 개발",
    description:
      "AI를 활용해 빠르게 구현하지만 그대로 사용하지 않고, 왜 이렇게 동작하는지 이해한 뒤 적용합니다. 문제 발생 시 상태 흐름을 확인하고 원인을 좁혀가며 해결하는 방식으로 개발합니다.",
    examples: [
      "Context와 props의 역할을 비교하며 구조를 선택한 경험",
      "isLoading 무한 로딩 문제를 비동기 흐름 관점에서 해결",
      "AI가 준 코드의 오류를 직접 수정하고 구조를 다시 정리",
      "컴포넌트 흐름을 스스로 정리하고 설명할 수 있음",
      "데이터 흐름(localStorage vs DB)을 구분해 문제 해결",
      "z-index 충돌, 스크롤 이중 문제 등 레이아웃 이슈 해결",
      "Google Play AAB 버전 코드 관리 및 keystore 인증 문제 경험",
    ],
  },

  // 💬 면접용 메시지
  candidateMessage: `안녕하세요, 사용자 경험을 중요하게 생각하며 개발하는 프론트엔드 개발자입니다.

기능이 동작하는 것에서 멈추지 않고, 왜 이렇게 동작하는지 구조를 이해하려는 특징이 있습니다. HTML/CSS부터 시작해 JavaScript, React, TypeScript까지 단계적으로 학습했고, Supabase를 활용해 인증, 데이터 저장, 권한 설정까지 연결되는 흐름을 직접 경험했습니다.

대표 프로젝트인 ‘키즈스톡’을 통해 상태 관리와 데이터 흐름 문제를 실제로 겪고 해결했습니다. Context가 분산되며 상태 흐름이 꼬이고, isLoading이 false로 내려가지 않아 무한 로딩이 발생하는 문제를 비동기 흐름 관점에서 분석하고 try/finally 구조로 해결했습니다. 이후 Context를 도메인 단위로 통합하고 Provider 구조를 정리해 전역 상태를 개선했습니다.

또한 localStorage와 DB가 혼용되면서 데이터가 초기화된 것처럼 보이는 문제를 겪었고, DB 확인과 코드 추적을 통해 UI 로직 문제임을 파악하고 수정했습니다. 이 과정에서 데이터 저장과 표현을 구분해서 보는 기준을 갖게 되었습니다.

Google Play 배포 과정에서는 keystore와 SHA1 문제를 직접 해결하며 빌드와 배포 흐름까지 경험했습니다.

AI를 활용해 빠르게 구현하지만, 그대로 사용하는 것이 아니라 코드 흐름과 구조를 이해한 뒤 적용하는 방식을 사용합니다. 문제를 만나면 원인을 추적하고 구조적으로 해결하려는 개발자입니다.`,
};
