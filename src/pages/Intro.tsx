import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import introCompany from "../assets/images/company/intro_company.png";
import { FiCpu, FiHeart, FiTrendingUp } from "react-icons/fi";
import Card from "../components/Card";

function Intro() {
  const navigate = useNavigate();

  return (
    <Container>
      <CompanyImage
        src={introCompany}
        alt="company"
        onClick={() => navigate("/home")}
      />

      <SubText>안녕하세요!</SubText>

      <Title>저희 회사를 소개합니다 ✨</Title>

      <CardWrapper>
        <Card icon={<FiCpu />} color="accent" text="AI 기반 서비스" />
        <Card icon={<FiHeart />} color="primary" text="사용자 중심" />
        <Card icon={<FiTrendingUp />} color="secondary" text="지속적인 성장" />
      </CardWrapper>
    </Container>
  );
}

export default Intro;
const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.md};
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
    width: 100%;
    max-width: 600px;
  }
`;
