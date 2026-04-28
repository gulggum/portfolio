import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FiGithub, FiMail, FiDownload, FiSend } from "react-icons/fi";

const ContactModal = ({ onClose }: { onClose: () => void }) => {
  // 폼 입력 상태
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // 나중에 EmailJS 연결할 부분
  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setSending(true);

    // 🔜 여기에 EmailJS 연결 예정
    setTimeout(() => {
      setSending(false);
      setSent(true); // 전송 완료 상태
    }, 1000);
  };

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>✕</CloseBtn>

        {/* 헤더 */}
        <Header>
          <Tag>CONTACT</Tag>
          <Title>연락하기</Title>
          <Subtitle>함께 일하고 싶으시다면 편하게 연락주세요 😊</Subtitle>
        </Header>

        {/* 링크 버튼들 */}
        <LinkGroup>
          <LinkCard
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
            <LinkText>
              <LinkLabel>GitHub</LinkLabel>
              <LinkSub>github.com/gulggum</LinkSub>
            </LinkText>
          </LinkCard>

          <LinkCard href="mailto:your@email.com">
            <FiMail />
            <LinkText>
              <LinkLabel>Email</LinkLabel>
              <LinkSub>devhy5174@gmail.com</LinkSub>
            </LinkText>
          </LinkCard>

          {/* 이력서 다운로드 — 파일 경로 나중에 연결 */}
          <LinkCard as="a" href="/resume.pdf" download>
            <FiDownload />
            <LinkText>
              <LinkLabel>이력서 다운로드</LinkLabel>
              <LinkSub>PDF 형식</LinkSub>
            </LinkText>
          </LinkCard>
        </LinkGroup>

        <Divider />

        {/* 문의 폼 */}
        <FormSection>
          <SectionTitle>📬 문의하기</SectionTitle>

          {sent ? (
            // 전송 완료 화면
            <SentBox>
              <SentEmoji>🎉</SentEmoji>
              <SentText>메시지가 전송됐어요!</SentText>
              <SentSub>빠르게 답변드릴게요 😊</SentSub>
            </SentBox>
          ) : (
            <Form>
              <FormRow>
                <FormGroup>
                  <FormLabel>이름</FormLabel>
                  <FormInput
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="홍길동"
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel>이메일</FormLabel>
                  <FormInput
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                  />
                </FormGroup>
              </FormRow>

              <FormGroup>
                <FormLabel>메시지</FormLabel>
                <FormTextarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="안녕하세요! 함께 일하고 싶어서 연락드려요 :)"
                  rows={4}
                />
              </FormGroup>

              <SubmitBtn
                onClick={handleSubmit}
                disabled={sending || !form.name || !form.email || !form.message}
              >
                <FiSend />
                {sending ? "전송 중..." : "보내기"}
              </SubmitBtn>
            </Form>
          )}
        </FormSection>
      </Modal>
    </Overlay>
  );
};

export default ContactModal;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.2s ease;
  padding: 20px;
`;

const Modal = styled.div`
  position: relative;
  width: 100%;
  max-width: 520px;
  max-height: 85vh;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.surfaceLight};
  border-radius: ${({ theme }) => theme.radius.xl};
  box-shadow: ${({ theme }) => theme.shadow.medium};
  padding: 40px;
  animation: ${slideUp} 0.3s ease;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 999px;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.muted};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Header = styled.div`
  margin-bottom: 28px;
`;

const Tag = styled.div`
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 999px;
  padding: 4px 12px;
  margin-bottom: 12px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 8px 0;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.muted} !important;
`;

/* 링크 카드들 */
const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
`;

const LinkCard = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.surfaceLight};
  background: ${({ theme }) => theme.colors.surfaceLight};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;

  svg {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateX(4px); /* 오른쪽으로 살짝 밀리는 효과 */
  }
`;

const LinkText = styled.div``;

const LinkLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const LinkSub = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.muted};
  margin-top: 2px;
`;

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.surfaceLight};
  margin: 24px 0;
`;

const FormSection = styled.div``;

const SectionTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

/* 이름/이메일 가로 배치 */
const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const FormLabel = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.muted};
`;

const inputStyle = `
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
  font-family: inherit;
  width: 100%;
  box-sizing: border-box;
`;

const FormInput = styled.input`
  ${inputStyle}
  border-color: ${({ theme }) => theme.colors.surfaceLight};
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }
`;

const FormTextarea = styled.textarea`
  ${inputStyle}
  border-color: ${({ theme }) => theme.colors.surfaceLight};
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  resize: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }
`;

const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 14px;
  font-weight: 600;
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

/* 전송 완료 화면 */
const SentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  gap: 8px;
`;

const SentEmoji = styled.div`
  font-size: 40px;
`;

const SentText = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

const SentSub = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.muted};
`;
