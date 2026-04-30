// components/office/MyCharacter.tsx
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import myCharacter from "../../assets/images/characters/myCharacter.png";

const MyCharacter = () => {
  const [visible, setVisible] = useState(true); // 말풍선 표시 여부

  return (
    <Wrapper>
      {/* 말풍선 — 클릭하면 닫힘 */}
      {visible && (
        <Bubble onClick={() => setVisible(false)}>
          <BubbleTail />
          <BubbleText>
            안녕하세요! 👋 <br /> 저는 <Strong>이희연</Strong>이에요.
            <br />
            각 봇을 클릭하면 저에 대해
            <br />
            뭐든 물어볼 수 있어요!
          </BubbleText>
          <CloseHint>클릭해서 닫기</CloseHint>
        </Bubble>
      )}

      {/* 캐릭터 이미지 */}
      <CharacterImg
        src={myCharacter}
        alt="이희연"
        onClick={() => setVisible(!visible)} // 클릭하면 말풍선 토글
      />
    </Wrapper>
  );
};

export default MyCharacter;

/* 말풍선 페이드인 */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px) translateX(-50%); }
  to   { opacity: 1; transform: translateY(0) translateX(-50%); }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 53%;
  left: 40%;
  transform: translate(-50%, -50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CharacterImg = styled.img`
  width: 220px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Bubble = styled.div`
  position: absolute;
  bottom: 90%; /* 캐릭터 머리 위 */
  left: 60%;
  transform: translateX(-50%);

  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.surfaceLight};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.medium};

  padding: 14px 18px;
  width: 220px;

  animation: ${fadeIn} 0.4s ease-out;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

/* 말풍선 꼬리 */
const BubbleTail = styled.div`
  position: absolute;
  bottom: -6px;
  left: 30%; /* 캐릭터 쪽으로 */
  width: 12px;
  height: 12px;
  background: ${({ theme }) => theme.colors.surface};
  border-right: 1px solid ${({ theme }) => theme.colors.surfaceLight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.surfaceLight};
  transform: rotate(45deg);
`;

const BubbleText = styled.p`
  font-size: 13px;
  line-height: 1.6;
  color: ${({ theme }) =>
    theme.colors.text} !important; /* p 태그 muted 오버라이드 */
  margin: 0 0 6px 0 !important;
`;

const Strong = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

const CloseHint = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.muted};
`;
