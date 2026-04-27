import styled from "styled-components";
import type { BotType } from "../../types/robot";
import { botMap } from "../../data/botMap";
import { fadeUp } from "../../styles/animation";

const ChatBubble = ({
  type,
  onClose,
}: {
  type: BotType;
  onClose: () => void;
}) => {
  const bot = botMap[type];

  return (
    // 말풍선 바깥 클릭 시 닫힘
    <BubbleContainer onClick={onClose}>
      {/* 말풍선 꼬리 */}
      <Tail />

      {/* 봇 이름 */}
      <Name>{bot.name}</Name>

      {/* 로딩 느낌 도트 애니메이션 */}
      <Dots>
        <Dot />
        <Dot delay="0.1s" />
        <Dot delay="0.2s" />
      </Dots>

      {/* 봇 한줄 소개 */}
      <Content>{bot.preview}</Content>
    </BubbleContainer>
  );
};

export default ChatBubble;

const BubbleContainer = styled.div`
  position: absolute;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;

  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.surfaceLight};
  padding: 12px 16px;
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.medium}; /* 티파니 글로우 */

  width: 220px;
  font-size: 14px;

  animation: ${fadeUp} 0.3s ease-out;
`;

/* 말풍선 아래 삼각형 꼬리 */
const Tail = styled.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  width: 12px;
  height: 12px;
  background: ${({ theme }) => theme.colors.surface};
  transform: translateX(-50%) rotate(45deg);
  border-right: 1px solid ${({ theme }) => theme.colors.surfaceLight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.surfaceLight};
`;

const Name = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary}; /* 이름은 티파니 포인트 */
  margin-bottom: 6px;
`;

const Dots = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
`;

const Dot = styled.span<{ delay?: string }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  animation: bounce 1s infinite;
  animation-delay: ${({ delay }) => delay || "0s"};

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-4px);
    }
  }
`;

const Content = styled.div`
  color: ${({ theme }) => theme.colors.muted}; /* 본문은 muted */
  line-height: 1.4;
`;
