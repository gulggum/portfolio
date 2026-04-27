import styled from "styled-components";

interface Props {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle = ({ isDark, onToggle }: Props) => {
  return (
    <Track $isDark={isDark} onClick={onToggle} aria-label="테마 전환">
      <Thumb $isDark={isDark}>{isDark ? "🌙" : "☀️"}</Thumb>
    </Track>
  );
};

const Track = styled.button<{ $isDark: boolean }>`
  position: relative;
  width: 56px;
  height: 28px;
  border-radius: 999px;
  border: 1.5px solid ${({ theme }) => theme.colors.primary};
  background: ${({ $isDark, theme }) =>
    $isDark ? theme.colors.surface : theme.colors.primarySoft};
  cursor: pointer;
  padding: 0;
  transition: background 0.3s ease;
  outline: none;

  /* 글로우 효과 */
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.primary}44;
`;

const Thumb = styled.span<{ $isDark: boolean }>`
  position: absolute;
  top: 3px;
  left: ${({ $isDark }) => ($isDark ? "3px" : "29px")}; /* 슬라이드 핵심 */
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  transition: left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); /* 통통 튀는 느낌 */
`;
