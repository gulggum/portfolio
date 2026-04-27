import styled, { css } from "styled-components";
import type { BotType } from "../../types/robot";
import { fadeUp } from "../../styles/animation";
import Bot from "../Bot";
import { botMap } from "../../data/botMap";
import ChatBubble from "../office/ChatBubble";
import pcBg from "../../assets/images/company/office_PC.png";

const DesktopLayout = ({
  active,
  setActive,
  getSize,
}: {
  active: BotType | null;
  setActive: (type: BotType | null) => void;
  getSize: (type: BotType) => number;
}) => {
  return (
    //좌우 스크롤 감싸는 래퍼
    <ScrollWrapper>
      <Stage>
        {/* 배경 이미지 — 원본 사이즈 고정으로 좌우 스크롤 가능 */}
        <BgImage src={pcBg} />

        {Object.entries(botMap).map(([type, bot], index) => {
          const pos = bot.position.pc;

          return (
            <BotWrapper
              key={type}
              $delay={index * 0.1}
              $top={pos.top}
              $left={pos.left}
              onClick={() => setActive(type as BotType)}
            >
              <Bot
                src={bot.image}
                alt={bot.name}
                active={active === type}
                isCeo={type === "ceo"}
                color={bot.color}
                size={getSize(type as BotType)}
              />

              {/* 호버 시 나타나는 이름 툴팁 */}
              <NameTag className="name">{bot.name}</NameTag>

              {/* 클릭된 봇만 말풍선 열림 */}
              {active === type && (
                <ChatBubble
                  type={type as BotType}
                  onClose={() => setActive(null)}
                />
              )}
            </BotWrapper>
          );
        })}
      </Stage>
    </ScrollWrapper>
  );
};

export default DesktopLayout;

/* 좌우 스크롤 컨테이너 */
const ScrollWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;

  /* 티파니 스크롤바 */
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 999px;
  }
`;

/* 배경 원본 사이즈로 고정 — 이 안에서 봇들 absolute 배치 */
const Stage = styled.div`
  position: relative;
  width: 1536px; /* 배경 이미지 원본 너비 */
  height: 1024px; /* 배경 이미지 원본 높이 */
`;

const BgImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const BotWrapper = styled.div<{
  $delay: number;
  $top: string;
  $left: string;
}>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${({ $delay }) => css`
    ${fadeUp} 0.5s ease ${$delay}s both
  `};

  /* 호버 시 이름 툴팁 올라옴 */
  &:hover .name {
    opacity: 1;
    transform: translate(-50%, -8px);
  }
`;

const NameTag = styled.div`
  position: absolute;
  bottom: 110%;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 500;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 999px;
  white-space: nowrap;
  opacity: 0;
  transition: all 0.2s ease;
  pointer-events: none;
`;
