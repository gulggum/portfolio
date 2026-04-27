//모바일용 카드 리스트 (Home 내부 콘텐츠)
import styled from "styled-components";
import type { BotType } from "../../types/robot";
import { botMap } from "../../data/botMap";

const MobileLayout = ({
  setActive,
}: {
  setActive: (type: BotType) => void;
}) => {
  return (
    <Wrapper>
      {Object.entries(botMap).map(([type, bot]) => (
        <Card key={type} onClick={() => setActive(type as BotType)}>
          <BotImage src={bot.image} />
          <Text>
            <Name>{bot.name}</Name>
            <Desc>{bot.preview}</Desc>
          </Text>
        </Card>
      ))}
    </Wrapper>
  );
};

export default MobileLayout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 16px;
  border-radius: 16px;

  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadow.soft};

  cursor: pointer;
  transition: 0.2s;

  &:active {
    transform: scale(0.97);
  }
`;

const BotImage = styled.img`
  width: 60px;
  height: 60px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-weight: 600;
`;

const Desc = styled.div`
  font-size: 13px;
  opacity: 0.7;
`;
