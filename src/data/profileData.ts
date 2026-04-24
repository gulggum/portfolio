// 🔹 포트폴리오 전체 데이터 (AI / 말풍선에서 사용)
export const profileData = {
  // 👤 기본 소개
  intro: {
    name: "이희연",
    role: "프론트엔드 개발자",
    description:
      "단순히 동작하는 코드가 아니라 '왜 동작하는지'를 이해하며 개발합니다. 사용자 경험을 중심에 두고, 아이디어를 실제 서비스로 구현하는 것을 즐깁니다.",
  },

  // 💭 성향
  personality: [
    "기획 아이디어가 많고 서비스 흐름을 설계하는 것을 좋아함",
    "코드가 왜 동작하는지 원리를 파고드는 탐구형",
    "버그 앞에서 포기하지 않는 끈기",
    "사용자 경험을 중요하게 생각하는 UX 중심 사고",
    "파스텔톤과 귀여운 감성을 좋아하는 디자인 취향",
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
        "onAuthStateChange 단일 리스너 패턴으로 race condition 해결",
        "Promise.all 병렬 쿼리로 로그인 속도 약 3배 개선",
        "DB 트리거 버그 직접 디버깅 및 수정",
        "Vercel 서버리스 함수로 주식 데이터 연동",
        "Gemini AI로 뉴스를 어린이 친화적으로 변환",
        "관리자 대시보드 (차트 + 실시간 통계)",
      ],

      insight:
        "단순한 포트폴리오가 아닌 실제 어린이가 사용하는 서비스를 목표로, 도박성 요소 대신 교육적 동기 부여에 집중했습니다.",
    },
  ],

  // 🛠 기술 스택
  techStack: {
    frontend: ["React", "TypeScript", "styled-components", "Vite"],
    backend: ["Supabase", "Vercel Serverless Functions"],
    state: ["Context API", "TanStack Query"],
    tools: ["Git", "VSCode", "Vercel"],
    learning: ["풀스택 전환 목표로 백엔드 영역 확장 중"],
  },

  // 💪 강점
  strengths: [
    "UI 감각과 사용자 경험 중심 설계 능력",
    "문제의 근본 원인을 찾아내는 디버깅 능력",
    "복잡한 인증 흐름 설계 및 구현 경험",
    "기획 → 디자인 → 개발 → 배포 전 과정 경험",
    "모르는 개념을 끝까지 파고드는 학습 태도",
  ],

  // 📈 성장 과정
  growth: [
    "localStorage 중심 구조 → Supabase DB 구조로 개선",
    "순차 처리 → Promise.all 병렬 처리로 성능 개선",
    "stale closure 문제를 useRef 패턴으로 해결",
    "Supabase DB 트리거 직접 설계 및 디버깅",
    "프론트엔드 → 풀스택 확장 진행 중",
  ],

  // 💬 면접용 메시지
  candidateMessage:
    "저는 '일단 돌아가게' 만드는 개발보다, 왜 이렇게 설계해야 하는지 이해하는 개발자입니다. 키즈스톡을 만들며 race condition, stale closure, DB 트리거 버그 등 실무 문제를 직접 해결했습니다. 아직 배울 것이 많지만, 끝까지 파고드는 태도만큼은 자신 있습니다.",
};
