// components/modals/AboutModal.tsx
import styled from "styled-components";
import { profileData } from "../../data/profileData";
import { fadeIn, slideUp } from "../../styles/animation.ts";

const AboutModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        {/* 닫기 버튼 */}
        <CloseBtn onClick={onClose}>✕</CloseBtn>

        {/* 상단 헤더 */}
        <Header>
          <Tag>FRONTEND DEVELOPER</Tag>
          <Name>{profileData.intro.name}</Name>
          <Desc>{profileData.intro.description}</Desc>
        </Header>

        <Divider />

        {/* 성향 섹션 */}
        <Section>
          <SectionTitle>💭 성향</SectionTitle>
          <TagList>
            {profileData.personality.map((item, i) => (
              <PersonalityTag key={i} $delay={i * 0.05}>
                {item}
              </PersonalityTag>
            ))}
          </TagList>
        </Section>

        <Divider />

        {/* 강점 섹션 */}
        <Section>
          <SectionTitle>💪 강점</SectionTitle>
          <StrengthList>
            {profileData.strengths.map((item, i) => (
              <StrengthItem key={i} $delay={i * 0.05}>
                <Dot />
                {item}
              </StrengthItem>
            ))}
          </StrengthList>
        </Section>

        <Divider />

        {/* 성장 과정 */}
        <Section>
          <SectionTitle>📈 개발 성장 과정</SectionTitle>
          <GrowthList>
            {profileData.growth.map((item, i) => (
              <GrowthItem key={i} $delay={i * 0.05}>
                <GrowthIndex>0{i + 1}</GrowthIndex>
                <GrowthText>{item}</GrowthText>
              </GrowthItem>
            ))}
          </GrowthList>
        </Section>
        <Divider />
        <Section>
          <SectionTitle>🌱 커리어 전환 성장 과정</SectionTitle>
          {/* 활동 리스트 */}
          <PeriodRow>
            <PeriodBadge>{profileData.career.careerGap.period}</PeriodBadge>
          </PeriodRow>
          <GrowthList>
            {profileData.career.careerGap.activity.map((item, i) => (
              <GrowthItem key={i} $delay={i * 0.05}>
                <GrowthIndex>0{i + 1}</GrowthIndex>
                <GrowthText>{item}</GrowthText>
              </GrowthItem>
            ))}
          </GrowthList>
        </Section>

        <Divider />

        {/* 면접용 메시지 */}
        <MessageBox>
          <MessageLabel>✉️ 자기소개서</MessageLabel>
          <MessageText>{profileData.candidateMessage}</MessageText>
        </MessageBox>
      </Modal>
    </Overlay>
  );
};

export default AboutModal;

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
  max-width: 600px;
  max-height: 85vh;
  overflow-y: auto;

  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.surfaceLight};
  border-radius: ${({ theme }) => theme.radius.xl};
  box-shadow: ${({ theme }) => theme.shadow.medium};

  padding: 40px;
  animation: ${slideUp} 0.3s ease;

  /* 스크롤바 */
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
  margin-bottom: 24px;
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

const Name = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 12px 0;
`;

const Desc = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.muted} !important;
`;

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.surfaceLight};
  margin: 24px 0;
`;

const Section = styled.div``;

const SectionTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 14px;
`;

/* 성향 태그 */
const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const PersonalityTag = styled.div<{ $delay: number }>`
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 13px;
  background: ${({ theme }) => theme.colors.primarySoft};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;

  animation: ${slideUp} 0.4s ease both;
  animation-delay: ${({ $delay }) => $delay}s;
`;

/* 강점 리스트 */
const StrengthList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StrengthItem = styled.li<{ $delay: number }>`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;

  animation: ${slideUp} 0.4s ease both;
  animation-delay: ${({ $delay }) => $delay}s;
`;

const Dot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  margin-top: 6px;
  flex-shrink: 0;
`;

/* 성장 과정 */
const GrowthList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const GrowthItem = styled.div<{ $delay: number }>`
  display: flex;
  align-items: flex-start;
  gap: 14px;

  animation: ${slideUp} 0.4s ease both;
  animation-delay: ${({ $delay }) => $delay}s;
`;

const GrowthIndex = styled.span`
  font-size: 11px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.6;
  flex-shrink: 0;
  margin-top: 2px;
`;

const GrowthText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;
`;

/* 면접 메시지 */
const MessageBox = styled.div`
  background: ${({ theme }) => theme.colors.primarySoft};

  border-radius: ${({ theme }) => theme.radius.md};
  padding: 20px;
`;

const MessageLabel = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
  letter-spacing: 1px;
`;

const MessageText = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text} !important;
  margin: 0 !important;
  white-space: pre-line;
`;
//커리어 전환과정
const PeriodRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

const PeriodBadge = styled.span`
  font-size: 12px;
  font-weight: 600;
  background: ${({ theme }) => theme.colors.primary}20;
  color: ${({ theme }) => theme.colors.primary};
  padding: 3px 10px;
  border-radius: 999px;
`;
