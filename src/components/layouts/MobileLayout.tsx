//모바일용 카드 리스트 (Home 내부 콘텐츠)
import styled from "styled-components";
import type { BotType } from "../../types/robot";
import { botMap } from "../../data/botMap";
import { useModal } from "../../context/ModalContext";
import { useState } from "react";
import { expandAnim, float } from "../../styles/animation";
import mobileBg from "../../assets/images/company/office_mobile.png";
import mobileBgLight from "../../assets/images/company/office_mobile_light.png";
import mobileBot from "../../assets/images/characters/mobile_bot.png";
import { useThemeToggle } from "../../context/ThemeContext";
import { ThemeToggle } from "../ThemeToggle";

// 봇별 포인트 색상
const botColors: Record<BotType, string> = {
  intro: "#0ABAB5",
  project: "#7C6FF7",
  dev: "#4A9EFF",
  contact: "#FF6B9D",
  growth: "#51CF66",
};

const defaultBubble = "안녕하세요! 궁금한 내용을\n선택해 주세요 ✨";

const MobileLayout = ({
  onOpenChat,
}: {
  onOpenChat: (type: BotType, message?: string) => void;
}) => {
  const [selectedBot, setSelectedBot] = useState<BotType | null>(null);
  const { openModal } = useModal();
  const { isDark, onToggle } = useThemeToggle();

  // 현재 말풍선 텍스트
  const bubbleText = selectedBot ? botMap[selectedBot].preview : defaultBubble;

  const handleBotClick = (type: BotType) => {
    // 같은 봇 클릭하면 닫기
    setSelectedBot(selectedBot === type ? null : type);
  };
  return (
    <Container>
      {/* 상단 히어로 영역 */}
      <HeroSection>
        <BgImage src={isDark ? mobileBg : mobileBgLight} alt="background" />
        <HeroOverlay />
        {/* 우측 상단 토글 */}
        <TopRight>
          <ThemeToggle isDark={isDark} onToggle={onToggle} />
        </TopRight>

        <HeroContent>
          <Greeting>안녕하세요!</Greeting>
          <HeroTitle key={bubbleText}>{bubbleText}</HeroTitle>
        </HeroContent>
        {/* 봇 캐릭터 + 말풍선 */}
        <BotWrapper>
          {/* 말풍선 */}
          {/* 봇 이미지 */}
          <BotHeadCharacter src={mobileBot} alt="bot" />
        </BotWrapper>
        <BottomGradient />
      </HeroSection>

      {/* 봇 리스트 */}
      <ListSection>
        <ListLabel>AI 직원 봇</ListLabel>

        {Object.entries(botMap).map(([type, bot]) => {
          const isSelected = selectedBot === type;
          const color = botColors[type as BotType];

          return (
            <BotCard key={type} $color={color} $isSelected={isSelected}>
              {/* 봇 기본 정보 행 */}
              <CardRow onClick={() => handleBotClick(type as BotType)}>
                <BotIconBox $color={color}>
                  <BotImg src={bot.image} alt={bot.name} />
                </BotIconBox>
                <CardText>
                  <BotName>{bot.name}</BotName>
                  <BotDesc>{bot.preview}</BotDesc>
                </CardText>
                <Arrow $isSelected={isSelected}>›</Arrow>
              </CardRow>

              {/* 선택 시 펼쳐지는 버튼들 */}
              {isSelected && (
                <ExpandArea>
                  {/* 예시 질문 버튼 */}
                  {bot.suggestions.map((s) => (
                    <SuggestionBtn
                      key={s}
                      onClick={() => {
                        if (s === "프로젝트 직접 보고 싶어요!") {
                          openModal("projects");
                        } else {
                          onOpenChat(type as BotType, s);
                        }
                      }}
                    >
                      {s}
                    </SuggestionBtn>
                  ))}

                  {/* 직접 대화 버튼 */}
                  <ChatBtn
                    $color={color}
                    onClick={() => onOpenChat(type as BotType)}
                  >
                    직접 물어보기 →
                  </ChatBtn>
                </ExpandArea>
              )}
            </BotCard>
          );
        })}
      </ListSection>
    </Container>
  );
};

export default MobileLayout;

const Container = styled.div`
  min-height: 100dvh;
  background: ${({ theme }) => theme.colors.bg};
  padding-bottom: 80px;
`;

/* 히어로 영역 */
const HeroSection = styled.div`
  position: sticky;
  top: 0;
  z-index: 50;
  height: 280px;
  overflow: visible;

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 60px; /* ← 높이 키우기 */
    background: linear-gradient(
      to bottom,
      transparent,
      ${({ theme }) => theme.colors.bg} /* ← 테마 배경색으로 자연스럽게 */
    );
    z-index: 1;
    pointer-events: none;
  }
`;

const BgImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 40px 24px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Greeting = styled.p`
  font-size: 14px;
  color: #0abab5 !important;
  font-weight: 600;
  margin: 0 0 6px !important;
`;

const HeroTitle = styled.h1`
  font-size: 22px;
  font-weight: 800;
  color: white;
  margin: 0;
  white-space: pre-line;
  line-height: 1.4;
`;
const BottomGradient = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(
    to bottom,
    transparent,
    ${({ theme }) => theme.colors.bg}
  );
  z-index: 1;
  pointer-events: none;
`;

/* 봇 리스트 */
const ListSection = styled.div`
  padding: 32px 16px 0;
  position: relative;
  z-index: 10;
  background: ${({ theme }) => theme.colors.bg};
  overflow: visible;
`;

const ListLabel = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.muted};
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

const BotCard = styled.div<{ $color: string; $isSelected: boolean }>`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid
    ${({ $isSelected, $color, theme }) =>
      $isSelected ? $color + "66" : theme.colors.surfaceLight};
  border-radius: ${({ theme }) => theme.radius.lg};
  margin-bottom: 10px;
  overflow: hidden;
  transition: all 0.2s;
`;

const BotName = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 3px;
`;

const BotDesc = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.4;
`;

const CardRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.primarySoft};
  }

  /* 호버 시 자식 텍스트 색상 변경 */
  &:hover ${BotName} {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover ${BotDesc} {
    color: ${({ theme }) => theme.colors.primary};
    opacity: 1;
  }
`;

const BotIconBox = styled.div<{ $color: string }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({ $color }) => $color + "22"};
  border: 1.5px solid ${({ $color }) => $color + "66"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const BotImg = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

const CardText = styled.div`
  flex: 1;
`;

const Arrow = styled.span<{ $isSelected: boolean }>`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.muted};
  transform: rotate(${({ $isSelected }) => ($isSelected ? "90deg" : "0deg")});
  transition: transform 0.2s ease;
`;

/* 펼쳐지는 영역 */

const ExpandArea = styled.div`
  padding: 0 16px 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  animation: ${expandAnim} 0.2s ease;
`;

const SuggestionBtn = styled.button`
  text-align: left;
  padding: 10px 14px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.surfaceLight};
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #0abab5;
    color: #0abab5;
  }
`;

const ChatBtn = styled.button<{ $color: string }>`
  padding: 11px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: none;
  background: ${({ $color }) => $color};
  color: white;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;
/* 봇 + 말풍선 묶음 */
const BotWrapper = styled.div`
  position: absolute;
  right: -50px;
  bottom: -110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 51;
`;

const BotHeadCharacter = styled.img`
  max-width: 300px;
  animation: ${float} 3s ease-in-out infinite;
`;
const TopRight = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 555;
`;
