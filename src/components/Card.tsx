import type { ReactNode } from "react";
import styled from "styled-components";
import type { ColorKey } from "../theme/theme";

type CardProps = {
  icon: ReactNode;
  text: string;
  color: ColorKey;
};

const Card = ({ icon, text, color }: CardProps) => {
  return (
    <CardBox>
      <Icon $color={color}>{icon}</Icon>
      <Text>{text}</Text>
    </CardBox>
  );
};

export default Card;

const CardBox = styled.div`
  background: ${({ theme }) =>
    theme.colors.surface}; /* 흰색 고정 → 테마 따라감 */
  border: 1px solid ${({ theme }) => theme.colors.surfaceLight};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.soft};

  width: 100%;
  max-width: 300px;
  padding: 12px 14px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: ${({ theme }) => theme.shadow.medium}; /* 티파니 글로우 */
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: 640px) {
    flex: 1;
    padding: 16px;
    max-width: none;
  }

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const Icon = styled.div<{ $color: ColorKey }>`
  font-size: 32px;
  color: ${({ theme, $color }) => theme.colors[$color]}; /* 테마 컬러 그대로 */
  transition: all 0.3s ease;

  ${CardBox}:hover & {
    transform: scale(1.2) rotate(-6deg);
  }
`;

const Text = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.muted}; /* 하드코딩 → 테마 */
  text-align: center;
  font-weight: 500;
  letter-spacing: -0.2px;
  line-height: 1.5;
  transition: all 0.3s ease;

  ${CardBox}:hover & {
    color: ${({ theme }) => theme.colors.text}; /* 호버 시 메인 텍스트 색상 */
    transform: translateY(-2px);
  }
`;
