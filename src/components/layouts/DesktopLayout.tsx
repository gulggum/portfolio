//배경+봇(Home내부 콘텐츠)
import styled, { css } from "styled-components";
import type { BotType } from "../../types/robot";
import { fadeUp } from "../../styles/animation";
import Bot from "../Bot";
import { botMap } from "../../data/botMap";
import ChatBubble from "../office/ChatBubble";
import pcBg from "../../assets/images/company/office_PC.png";
import MyCharacter from "../office/MyCharacter";

const DesktopLayout = ({
  active,
  setActive,
  botSize,
}: {
  active: BotType | null;
  setActive: (type: BotType | null) => void;
  botSize: number;
}) => {
  return (
    //좌우 스크롤 감싸는 래퍼
    <ScrollWrapper>
      <Stage>
        {/* 배경 이미지 — 원본 사이즈 고정으로 좌우 스크롤 가능 */}
        <BgImage src={pcBg} />
        <MyCharacter />
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
                size={botSize}
              />

              {/* 호버 시 나타나는 이름 툴팁 */}
              <Label>
                <LabelName>{bot.name}</LabelName>
                <LabelDesc>{bot.preview}</LabelDesc>
              </Label>

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
  overflow-y: auto;

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
  width: max(1536px, 100vw); /* 배경 이미지 원본 너비 */
  aspect-ratio: 1536 / 1024; /* 원본 비율 유지 — 절대 안 잘림 */
`;

const BgImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
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
const Label = styled.div`
  position: absolute;
  top: 20%;
  left: 105%;
  pointer-events: none;
`;

const LabelName = styled.div`
  display: inline-block;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.sm};
  padding: 4px 10px;
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 4px;
  white-space: nowrap;
`;

const LabelDesc = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.white}; /* 배경 위에서 잘 보이게 */
  line-height: 1.4;
  white-space: nowrap;
  padding-left: 2px;
`;
