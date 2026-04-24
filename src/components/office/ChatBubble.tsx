import { useState } from "react";
import styled from "styled-components";
import { botMap } from "../../data/botMap";
import type { BotType } from "../../types/robot";
import { fadeUp } from "../../styles/animation";

const ChatBubble = ({
  type,
  onClose,
}: {
  type: BotType;
  onClose: () => void;
}) => {
  const bot = botMap[type];
  const [step, setStep] = useState(0);

  return (
    <BubbleContainer
      onClick={onClose}
      style={{
        top: bot.position.top,
        left: bot.position.left,
      }}
    >
      <Tail />

      <Name>{bot.name}</Name>

      <Dots>
        <Dot />
        <Dot delay="0.1s" />
        <Dot delay="0.2s" />
      </Dots>

      <Content>{bot.getContent()}</Content>
    </BubbleContainer>
  );
};

export default ChatBubble;

const BubbleContainer = styled.div`
  position: absolute;
  z-index: 50;

  transform: translate(-50%, -200%);

  background: ${({ theme }) => theme.colors.surface};
  padding: 12px 16px;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadow.soft};

  width: 220px;
  font-size: 14px;

  animation: ${fadeUp} 0.3s ease-out;
`;

const Tail = styled.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);

  width: 12px;
  height: 12px;
  background: ${({ theme }) => theme.colors.surface};
`;

const Name = styled.div`
  font-weight: 600;
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
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.4;
`;
