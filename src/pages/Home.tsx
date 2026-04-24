import { useEffect, useState } from "react";
import pcBg from "../assets/images/company/office_PC.png";
import mobileBg from "../assets/images/company/office_mobile.png";

import ChatBubble from "../components/office/ChatBubble";
import { botMap } from "../data/botMap";
import type { BotType } from "../types/robot";
import Bot from "../components/Bot";
import styled from "styled-components";

const Home = () => {
  const [active, setActive] = useState<BotType | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <Container>
      {/* 배경 */}
      <BgImage src={mobileBg} className="mobile" />
      <BgImage src={pcBg} className="pc" />

      {/* 캐릭터 */}
      {Object.entries(botMap).map(([type, bot]) => (
        <BotWrapper
          key={type}
          onClick={() => setActive(type as BotType)}
          style={{
            top: bot.position.top,
            left: bot.position.left,
          }}
        >
          <Bot
            src={bot.image}
            alt={bot.name}
            active={active === type}
            isCeo={type === "ceo"}
            color={bot.color}
          />

          <NameTag className="name">{bot.name}</NameTag>
        </BotWrapper>
      ))}

      {/* 말풍선 */}
      {active && <ChatBubble type={active} onClose={() => setActive(null)} />}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const BgImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  &.mobile {
    display: block;
  }

  &.pc {
    display: none;
  }

  @media (min-width: 640px) {
    &.mobile {
      display: none;
    }
    &.pc {
      display: block;
    }
  }
`;

const BotWrapper = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 10;

  &:hover .name {
    opacity: 1;
    transform: translate(-50%, -5px);
  }
`;

const NameTag = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, 0);

  margin-bottom: 6px;
  padding: 4px 8px;
  font-size: 12px;

  background: black;
  color: white;
  border-radius: 6px;

  white-space: nowrap;

  opacity: 0;
  transition: all 0.2s ease;
`;
