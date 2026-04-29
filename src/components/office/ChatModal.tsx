import { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import type { BotType } from "../../types/robot";
import type { Message } from "../../types/chat";
import { botMap } from "../../data/botMap";
import { getSystemPrompt } from "../../data/systemPrompts";

interface Props {
  type: BotType;
  onClose: () => void;
  initialMessage?: string;
}

const ChatModal = ({ type, onClose, initialMessage }: Props) => {
  const bot = botMap[type];
  const hasSent = useRef(false); // 중복 실행 방지용

  // 대화 메시지 목록
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      // 봇마다 첫 인사 다르게
      content: `안녕하세요! 저는 ${bot.name}이에요. 무엇이든 물어보세요 😊`,
    },
  ]);

  // 입력창 텍스트 상태
  const [input, setInput] = useState("");

  // 로딩 상태 (API 응답 기다리는 중)
  const [loading, setLoading] = useState(false);

  // 메시지 끝으로 자동 스크롤하기 위한 ref
  const bottomRef = useRef<HTMLDivElement>(null);

  // 메시지 추가될 때마다 자동 스크롤
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // initialMessage 있으면 자동 전송
  useEffect(() => {
    if (initialMessage && !hasSent.current) {
      hasSent.current = true; // 한 번 실행 후 막기
      handleSend(initialMessage);
    }
  }, []);

  // 메시지 전송 (나중에 여기서 API 호출)
  const handleSend = async (text?: string) => {
    const content = text || input;
    if (!content.trim() || loading) return;

    const userMessage: Message = { role: "user", content };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages,
          systemPrompt: getSystemPrompt(type),
        }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.content },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "오류가 발생했어요. 다시 시도해주세요 😢",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // 엔터키로 전송
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    // 모달 바깥 클릭 시 닫힘
    <Overlay onClick={onClose}>
      {/* e.stopPropagation — 모달 안 클릭은 닫히지 않게 */}
      <Modal onClick={(e) => e.stopPropagation()}>
        {/* 상단 헤더 */}
        <Header>
          <BotInfo>
            <BotImg src={bot.image} alt={bot.name} />
            <div>
              <BotName>{bot.name}</BotName>
              <BotStatus>● 온라인</BotStatus>
            </div>
          </BotInfo>
          <CloseBtn onClick={onClose}>✕</CloseBtn>
        </Header>

        {/* 메시지 목록 */}
        <MessageList>
          {messages.map((msg, i) => (
            <MessageRow key={i} $isUser={msg.role === "user"}>
              <Bubble $isUser={msg.role === "user"}>{msg.content}</Bubble>
            </MessageRow>
          ))}

          {/* 로딩 중 도트 애니메이션 */}
          {loading && (
            <MessageRow $isUser={false}>
              <Bubble $isUser={false}>
                <Dots>
                  <Dot />
                  <Dot delay="0.1s" />
                  <Dot delay="0.2s" />
                </Dots>
              </Bubble>
            </MessageRow>
          )}

          {/* 자동 스크롤 앵커 */}
          <div ref={bottomRef} />
        </MessageList>

        {/* 예시 질문 버튼 — 입력창 위에 */}
        <SuggestionArea>
          {bot.suggestions.map((s) => (
            <SuggestionChip
              key={s}
              onClick={() => handleSend(s)}
              disabled={loading}
            >
              {s}
            </SuggestionChip>
          ))}
        </SuggestionArea>

        {/* 입력창 */}
        <InputArea>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="메시지를 입력하세요..."
            disabled={loading}
          />
          <SendBtn
            onClick={() => handleSend()}
            disabled={loading || !input.trim()}
          >
            전송
          </SendBtn>
        </InputArea>
      </Modal>
    </Overlay>
  );
};

export default ChatModal;

/* 배경 딤처리 */
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Modal = styled.div`
  width: 420px;
  height: 580px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.xl};
  box-shadow: ${({ theme }) => theme.shadow.medium};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${fadeIn} 0.3s ease-out;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.surfaceLight};
`;

const BotInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const BotImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const BotName = styled.div`
  font-weight: 700;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
`;

const BotStatus = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.primary}; /* 티파니 온라인 표시 */
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.muted};
  cursor: pointer;
  padding: 4px;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

/* 스크롤 가능한 메시지 영역 */
const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.surfaceLight};
    border-radius: 999px;
  }
`;

/* 내 메시지는 오른쪽, 봇은 왼쪽 */
const MessageRow = styled.div<{ $isUser: boolean }>`
  display: flex;
  justify-content: ${({ $isUser }) => ($isUser ? "flex-end" : "flex-start")};
`;

const Bubble = styled.div<{ $isUser: boolean }>`
  max-width: 75%;
  padding: 10px 14px;
  border-radius: ${({ $isUser }) =>
    $isUser ? "16px 16px 4px 16px" : "16px 16px 16px 4px"};

  /* 내 메시지 → 티파니, 봇 메시지 → 서피스 */
  background: ${({ $isUser, theme }) =>
    $isUser ? theme.colors.primary : theme.colors.surfaceLight};
  color: ${({ $isUser, theme }) =>
    $isUser ? theme.colors.white : theme.colors.text};

  font-size: 14px;
  line-height: 1.5;
  word-break: keep-all;
`;

const InputArea = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.surfaceLight};
`;

const Input = styled.textarea`
  flex: 1;
  resize: none;
  height: 44px;
  padding: 10px 14px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.surfaceLight};
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-family: ${({ theme }) => theme.font.main};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }
`;

const SendBtn = styled.button`
  padding: 0 18px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    opacity: 0.85;
  }
`;

const Dots = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const Dot = styled.span<{ delay?: string }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.muted};
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

const SuggestionArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 10px 20px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.surfaceLight};
`;

const SuggestionChip = styled.button`
  padding: 5px 12px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.surfaceLight};
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.muted};
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
