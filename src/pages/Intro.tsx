import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import introCompany from "../assets/images/company/intro_company.png";
import { FiCpu, FiHeart, FiTrendingUp } from "react-icons/fi";
import Card from "../components/Card";
import { ThemeToggle } from "../components/ThemeToggle";
import { useThemeToggle } from "../context/ThemeContext";

const Intro = () => {
  const navigate = useNavigate();
  const { isDark, onToggle } = useThemeToggle();

  return (
    <Container>
      {/* 우측 상단 토글 */}
      <ToggleWrapper>
        <ThemeToggle isDark={isDark} onToggle={onToggle} />
      </ToggleWrapper>

      <CompanyImage
        src={introCompany}
        alt="company"
        onClick={() => navigate("/home")}
      />

      <SubText>안녕하세요!</SubText>
      <Title>저희 회사를 소개합니다 ✨</Title>

      <CardWrapper>
        {/* secondary 없으니 primary / primarySoft / muted 로 대체 */}
        <Card icon={<FiCpu />} color="primary" text="AI 기반 서비스" />
        <Card icon={<FiHeart />} color="primary" text="사용자 중심" />
        <Card icon={<FiTrendingUp />} color="primary" text="지속적인 성장" />
      </CardWrapper>
    </Container>
  );
};

export default Intro;

const Container = styled.div`
  position: relative; /* 토글 absolute 기준 */
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.md};
  transition: background 0.3s ease; /* 테마 전환 부드럽게 */
`;

const ToggleWrapper = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
`;

const CompanyImage = styled.img`
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
`;

const SubText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  transition: color 0.3s ease;

  @media (min-width: 640px) {
    font-size: 28px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.lg};
    max-width: 600px;
  }
`;
