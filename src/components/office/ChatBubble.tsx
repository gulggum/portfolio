import styled from "styled-components";
import type { BotType } from "../../types/robot";
import { botMap } from "../../data/botMap";
import { fadeUp } from "../../styles/animation";
import { useModal } from "../../context/ModalContext";

const ChatBubble = ({
  type,
  onClose,
  onOpen,
}: {
  type: BotType;
  onClose: () => void;
  onOpen: (initialMessage?: string) => void; // ← 초기 메시지 전달 가능하게
}) => {
  const bot = botMap[type];
  const { openModal } = useModal();

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

      {/* 예시 질문 버튼들 */}
      <SuggestionList>
        {bot.suggestions.map((s) => (
          <SuggestionBtn
            key={s}
            onClick={(e) => {
              e.stopPropagation();
              // "프로젝트 직접 보고 싶어요!" 클릭하면 모달 열기
              if (s === "프로젝트 직접 보고 싶어요!") {
                openModal("projects");
              } else {
                onOpen(s); // 나머지는 채팅으로
              }
            }}
          >
            {s}
          </SuggestionBtn>
        ))}
      </SuggestionList>
      {/* 프로젝트봇일 때만 보이기 */}
      {type === "project" && (
        <ProjectBtn
          onClick={(e) => {
            e.stopPropagation();
            openModal("projects");
          }}
        >
          🗂 프로젝트 보러가기
        </ProjectBtn>
      )}
      {/* 직접 입력 버튼 */}
      <OpenBtn
        onClick={(e) => {
          e.stopPropagation();
          onOpen();
        }}
      >
        {" "}
        직접 물어보기 →
      </OpenBtn>
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

const OpenBtn = styled.button`
  margin-top: 8px;
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;
const SuggestionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 10px 0 8px;
`;

const SuggestionBtn = styled.button`
  text-align: left;
  padding: 6px 10px;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.surfaceLight};
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  font-size: 11px;
  cursor: pointer;
  transition: all 0.2s;
  line-height: 1.4;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primarySoft};
  }
`;

const ProjectBtn = styled.button`
  width: 100%;
  margin-top: 6px;
  padding: 7px;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.surfaceLight};
  background: ${({ theme }) => theme.colors.surfaceLight};
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
