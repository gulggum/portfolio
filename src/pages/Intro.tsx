import { useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import introCompany from "../assets/images/company/intro_company.png";
import { FiCpu, FiHeart, FiTrendingUp } from "react-icons/fi";
import Card from "../components/Card";
import { ThemeToggle } from "../components/ThemeToggle";
import { useThemeToggle } from "../context/ThemeContext";
import { useState } from "react";

const Intro = () => {
  const navigate = useNavigate();
  const { isDark, onToggle } = useThemeToggle();
  const [isEntering, setIsEntering] = useState(false); // 애니메이션 상태

  const handleEnter = () => {
    if (isEntering) return;
    setIsEntering(true); // 애니메이션 시작

    // 애니메이션 끝나고 이동 (0.8s)
    setTimeout(() => navigate("/home"), 800);
  };

  return (
    <Container $isEntering={isEntering}>
      {/* 우측 상단 토글 */}
      <ToggleWrapper>
        <ThemeToggle isDark={isDark} onToggle={onToggle} />
      </ToggleWrapper>

      <CompanyImage
        src={introCompany}
        alt="company"
        onClick={handleEnter}
        $isEntering={isEntering}
      />

      <SubText $isEntering={isEntering}>안녕하세요!</SubText>
      <Title $isEntering={isEntering}>HEEYEON'S PORTFOLIO OFFICE </Title>

      <CardWrapper $isEntering={isEntering}>
        {/* secondary 없으니 primary / primarySoft / muted 로 대체 */}
        <Card icon={<FiCpu />} color="primary" text="AI 기반 서비스" />
        <Card icon={<FiHeart />} color="primary" text="사용자 중심" />
        <Card icon={<FiTrendingUp />} color="primary" text="지속적인 성장" />
      </CardWrapper>
      {/* 빨려들어가는 오버레이 */}
      {isEntering && <EnterOverlay />}
    </Container>
  );
};

export default Intro;

/* 빨려들어가는 애니메이션 */
const suckIn = keyframes`
  0%   { transform: scale(1); opacity: 1; }
  60%  { transform: scale(1.15); opacity: 1; }
  100% { transform: scale(8); opacity: 0; }
`;
const fadeOut = keyframes`
  0%   { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-20px); }
`;
const overlayIn = keyframes`
  0%   { opacity: 0; }
  50%  { opacity: 0; }
  100% { opacity: 1; }
`;

const Container = styled.div<{ $isEntering: boolean }>`
  position: relative; /* 토글 absolute 기준 */
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.md};
  transition: background 0.3s ease; /* 테마 전환 부드럽게 */
  overflow: hidden; /* 이미지 커질 때 넘침 방지 */
`;

const ToggleWrapper = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  z-index: 555;
`;

const CompanyImage = styled.img<{ $isEntering: boolean }>`
  width: 85vw;
  max-width: 700px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  cursor: pointer;
  animation: float 3s ease-in-out infinite;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  /* 클릭 전 float 애니메이션 */
  ${({ $isEntering }) =>
    !$isEntering &&
    css`
      animation: float 3s ease-in-out infinite;
      &:hover {
        transform: scale(1.05);
      }
    `}

  /* 클릭 후 빨려들어가는 애니메이션 */
  ${({ $isEntering }) =>
    $isEntering &&
    css`
      animation: ${suckIn} 0.8s ease-in forwards;
      cursor: default;
    `}

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const SubText = styled.p<{ $isEntering: boolean }>`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  ${({ $isEntering }) =>
    $isEntering &&
    css`
      animation: ${fadeOut} 0.4s ease forwards;
    `}
`;

const Title = styled.h1<{ $isEntering: boolean }>`
  font-size: 20px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  transition: color 0.3s ease;

  @media (min-width: 640px) {
    font-size: 28px;
  }

  ${({ $isEntering }) =>
    $isEntering &&
    css`
      animation: ${fadeOut} 0.4s ease 0.1s forwards;
    `}
`;

const CardWrapper = styled.div<{ $isEntering: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;

  ${({ $isEntering }) =>
    $isEntering &&
    css`
      animation: ${fadeOut} 0.4s ease 0.05s forwards;
    `}

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.lg};
    max-width: 600px;
  }
`;
/* 화면 전환 오버레이 */
const EnterOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.bg};
  z-index: 999;
  animation: ${overlayIn} 0.8s ease forwards;
  pointer-events: none;
`;
