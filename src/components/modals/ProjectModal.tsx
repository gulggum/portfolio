// components/modals/ProjectModal.tsx
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  FiGithub,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { mainProjects, subProjects } from "../../data/projectData";

const ProjectModal = ({ onClose }: { onClose: () => void }) => {
  // 현재 캐러셀 인덱스
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((i) => (i === 0 ? mainProjects.length - 1 : i - 1));
  const next = () =>
    setCurrent((i) => (i === mainProjects.length - 1 ? 0 : i + 1));

  const project = mainProjects[current];

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>✕</CloseBtn>

        {/* 헤더 */}
        <Header>
          <Tag>PROJECTS</Tag>
          <Title>프로젝트</Title>
          <Subtitle>직접 만든 서비스들을 소개합니다</Subtitle>
        </Header>

        {/* 메인 캐러셀 */}
        <CarouselSection>
          <CarouselLabel>✨ 주요 프로젝트</CarouselLabel>

          <CarouselWrapper>
            {/* 이전 버튼 */}
            <ArrowBtn onClick={prev} $dir="left">
              <FiChevronLeft />
            </ArrowBtn>

            {/* 메인 카드 */}
            <MainCard key={project.id}>
              {/* 썸네일 이미지 */}
              <Thumbnail src={project.thumbnail} alt={project.name} />
              {/* 상단 — 프로젝트명 + 기술스택 */}
              <CardTop>
                <ProjectName>{project.name}</ProjectName>
                <TechList>
                  {project.techStack.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechList>
              </CardTop>

              {/* 설명 */}
              <ProjectDesc>{project.description}</ProjectDesc>

              {/* 링크 버튼 */}
              <LinkRow>
                <LinkBtn
                  href={project.deployUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink /> 배포 링크
                </LinkBtn>
                <LinkBtnOutline
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub /> GitHub
                </LinkBtnOutline>
              </LinkRow>
            </MainCard>

            {/* 다음 버튼 */}
            <ArrowBtn onClick={next} $dir="right">
              <FiChevronRight />
            </ArrowBtn>
          </CarouselWrapper>

          {/* 인디케이터 도트 */}
          <Dots>
            {mainProjects.map((_, i) => (
              <DotBtn
                key={i}
                $active={i === current}
                onClick={() => setCurrent(i)}
              />
            ))}
          </Dots>
        </CarouselSection>

        <Divider />

        {/* 서브 프로젝트 그리드 */}
        <SubSection>
          <CarouselLabel>📁 기타 프로젝트</CarouselLabel>
          <SubGrid>
            {subProjects.map((p) => (
              <SubCard key={p.id}>
                <SubName>{p.name}</SubName>
                <SubDesc>{p.description}</SubDesc>
                <SubTechList>
                  {p.techStack.map((tech) => (
                    <SubTechTag key={tech}>{tech}</SubTechTag>
                  ))}
                </SubTechList>
                <SubLinks>
                  <SubLink
                    href={p.deployUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink />
                  </SubLink>
                  <SubLink
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub />
                  </SubLink>
                </SubLinks>
              </SubCard>
            ))}
          </SubGrid>
        </SubSection>
      </Modal>
    </Overlay>
  );
};

export default ProjectModal;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const cardIn = keyframes`
  from { opacity: 0; transform: scale(0.97); }
  to   { opacity: 1; transform: scale(1); }
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
  max-width: 620px;
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
  margin-bottom: 28px;
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

/* 캐러셀 */
const CarouselSection = styled.div`
  margin-bottom: 8px;
`;

const CarouselLabel = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 14px;
`;

const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ArrowBtn = styled.button<{ $dir: "left" | "right" }>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.surfaceLight};
  background: ${({ theme }) => theme.colors.surfaceLight};
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MainCard = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.surfaceLight};
  border: 1px solid ${({ theme }) => theme.colors.surfaceLight};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 24px;
  animation: ${cardIn} 0.25s ease; /* 카드 전환 애니메이션 */
`;
const Thumbnail = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  object-position: top;
  border-radius: ${({ theme }) => theme.radius.md};
  margin-bottom: 16px;
  border: 1px solid ${({ theme }) => theme.colors.surfaceLight};
`;

const CardTop = styled.div`
  margin-bottom: 14px;
`;

const ProjectName = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const TechTag = styled.span`
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primarySoft};
  color: ${({ theme }) => theme.colors.primary};
`;

const ProjectDesc = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.muted} !important;
  margin: 0 0 20px 0 !important;
`;

const LinkRow = styled.div`
  display: flex;
  gap: 10px;
`;

const LinkBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

const LinkBtnOutline = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

/* 인디케이터 */
const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 16px;
`;

const DotBtn = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? "20px" : "6px")};
  height: 6px;
  border-radius: 999px;
  border: none;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.surfaceLight};
  cursor: pointer;
  transition: all 0.3s ease; /* 활성 도트가 늘어나는 효과 */
  padding: 0;
`;

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.surfaceLight};
  margin: 28px 0;
`;

/* 서브 프로젝트 */
const SubSection = styled.div``;

const SubGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`;

const SubCard = styled.div`
  padding: 16px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.surfaceLight};
  background: ${({ theme }) => theme.colors.surfaceLight};
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const SubName = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 6px;
`;

const SubDesc = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.5;
  margin-bottom: 10px;
`;

const SubTechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 10px;
`;

const SubTechTag = styled.span`
  font-size: 10px;
  padding: 2px 8px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primarySoft};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

const SubLinks = styled.div`
  display: flex;
  gap: 8px;
`;

const SubLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.muted};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
