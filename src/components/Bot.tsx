import styled, { css } from "styled-components";
import { float } from "../styles/animation";
import type { ColorKey } from "../theme/theme";

interface BotProps {
  src: string;
  alt: string;
  active: boolean;
  isCeo: boolean;
  color?: ColorKey;
  size: number;
}

const Bot = ({ src, alt, active, isCeo, color, size }: BotProps) => {
  return (
    <StyledBot
      src={src}
      alt={alt}
      $active={active}
      $isCeo={isCeo}
      $color={color}
      $size={size}
    />
  );
};

export default Bot;

const StyledBot = styled.img<{
  $active: boolean;
  $isCeo: boolean;
  $color?: ColorKey;
  $size: number;
}>`
  width: ${({ $size }) => $size}px;
  height: auto;
  transition: transform 0.3s;

  ${({ $isCeo }) =>
    !$isCeo &&
    css`
      animation: ${float} 3s ease-in-out infinite;
    `}

  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0 0 25px rgba(255, 255, 255, 0.7));
  }
  ${({ theme, $active, $color }) =>
    $active && $color
      ? `
      transform: scale(1.1);
      filter: drop-shadow(0 0 15px ${theme.colors[$color]});
    `
      : ""}
`;
