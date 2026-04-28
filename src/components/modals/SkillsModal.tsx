// components/modals/SkillsModal.tsx
import styled, { keyframes } from "styled-components";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiSass,
  SiStyledcomponents,
  SiVite,
  SiSupabase,
  SiVercel,
  SiGit,
  SiRedux,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbLayoutGrid, TbLayoutColumns } from "react-icons/tb";
import { FiCode } from "react-icons/fi";

// 기술스택 데이터 — 아이콘이랑 색상 직접 지정
const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
      { name: "CSS", icon: <SiCss />, color: "#1572B6" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "Vite", icon: <SiVite />, color: "#646CFF" },
      {
        name: "styled-components",
        icon: <SiStyledcomponents />,
        color: "#DB7093",
      },
      { name: "Sass", icon: <SiSass />, color: "#CC6699" },
    ],
  },
  {
    category: "Backend & DB",
    skills: [
      { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E" },
      { name: "Vercel", icon: <SiVercel />, color: "#000000" },
    ],
  },
  {
    category: "State & Data",
    skills: [
      { name: "Context API", icon: <SiReact />, color: "#61DAFB" },
      { name: "TanStack Query", icon: <SiReact />, color: "#FF4154" },
      { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    ],
  },
  {
    category: "Layout",
    skills: [
      { name: "CSS Grid", icon: <TbLayoutGrid />, color: "#0ABAB5" },
      { name: "Flexbox", icon: <TbLayoutColumns />, color: "#0ABAB5" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "VSCode", icon: <VscVscode />, color: "#007ACC" },
    ],
  },
  {
    category: "학습 중 🌱",
    skills: [{ name: "풀스택 전환 목표", icon: <FiCode />, color: "#0ABAB5" }],
  },
];

const SkillsModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>✕</CloseBtn>

        {/* 헤더 */}
        <Header>
          <Tag>TECH STACK</Tag>
          <Title>기술 스택</Title>
          <Subtitle>현재 사용할 수 있는 기술들이에요</Subtitle>
        </Header>

        {/* 카테고리별 그리드 */}
        {skillGroups.map((group, gi) => (
          <Section key={group.category}>
            <CategoryLabel>{group.category}</CategoryLabel>
            <Grid>
              {group.skills.map((skill, si) => (
                <SkillCard
                  key={skill.name}
                  $color={skill.color}
                  $delay={gi * 0.1 + si * 0.05}
                >
                  {/* 아이콘 */}
                  <IconBox $color={skill.color}>{skill.icon}</IconBox>
                  {/* 이름 */}
                  <SkillName>{skill.name}</SkillName>
                </SkillCard>
              ))}
            </Grid>
          </Section>
        ))}
      </Modal>
    </Overlay>
  );
};

export default SkillsModal;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.2s ease;
  padding: 20px;
`;

const Modal = styled.div`
  position: relative;
  width: 100%;
  max-width: 560px;
  max-height: 85vh;
  overflow-y: auto;

  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.surfaceLight};
  border-radius: ${({ theme }) => theme.radius.xl};
  box-shadow: ${({ theme }) => theme.shadow.medium};
  padding: 40px;

  animation: ${slideUp} 0.3s ease;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 999px;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.muted};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Header = styled.div`
  margin-bottom: 32px;
`;

const Tag = styled.div`
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 999px;
  padding: 4px 12px;
  margin-bottom: 12px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 8px 0;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.muted} !important;
`;

const Section = styled.div`
  margin-bottom: 28px;
`;

const CategoryLabel = styled.div`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 12px;
  text-transform: uppercase;
`;

/* 4열 그리드 */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SkillCard = styled.div<{ $color: string; $delay: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 8px;

  background: ${({ theme }) => theme.colors.surfaceLight};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: default;
  transition: all 0.2s ease;

  animation: ${slideUp} 0.4s ease both;
  animation-delay: ${({ $delay }) => $delay}s;

  /* 호버 시 해당 기술 색상으로 테두리 */
  &:hover {
    border-color: ${({ $color }) => $color}66;
    background: ${({ $color }) => $color}11;
    transform: translateY(-4px);
  }
`;

const IconBox = styled.div<{ $color: string }>`
  font-size: 28px;
  color: ${({ $color }) => $color}; /* 기술별 고유 색상 */
  display: flex;
  align-items: center;
`;

const SkillName = styled.div`
  font-size: 11px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  line-height: 1.3;
`;
