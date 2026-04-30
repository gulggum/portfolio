# My Company Portfolio

면접관이 AI 봇에게 직접 질문하며 지원자를 탐색할 수 있도록 만든 인터랙티브 포트폴리오입니다.

개인 포트폴리오를 하나의 회사 형태로 구성했으며,  
사무실 공간에 배치된 AI 봇과의 대화를 통해 프로젝트와 경험을 자연스럽게 확인할 수 있습니다.

---

## Concept

- 지원자를 하나의 회사로 표현하고, 각 AI 봇은 역할별 정보를 담당
- 봇을 클릭하면 Claude API 기반 채팅으로 자유롭게 질문 가능
- 사이드바에서 소개, 기술 스택, 프로젝트, 연락처 정보 확인 가능
- 인트로 → 사무실 입장 → 봇과 대화하는 흐름 중심 UI 설계

---

## Tech Stack

- React
- TypeScript
- Vite
- styled-components
- React Router
- Claude API (Anthropic)
- Vercel (배포 및 Serverless Function)

---

## Features

- 인트로 애니메이션 (회사 입장 연출)
- 사무실 배경과 캐릭터 기반 인터랙션 UI (좌우 스크롤)
- 봇별 Claude API 시스템 프롬프트 분리
- 소개 / 기술 스택 / 프로젝트 캐러셀 / 연락하기 모달 구성
- 다크 모드 / 라이트 모드 지원
- 반응형 UI 구현 / 모바일 환경에서 하단 탭바 중심으로 UI 재구성
- API 키 보호 (Vercel Edge Function)

---

## Projects

배포 링크  
https://portfolio-sigma-seven-ujq42n81oj.vercel.app/

---

## Contact

- GitHub: https://github.com/gulggum
- Portfolio Repository: https://github.com/gulggum/portfolio
- Email: devhy5174@gmail.com
