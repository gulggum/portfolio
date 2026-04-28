import { keyframes } from "styled-components";

//봇사용
export const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;
//fadeUp (말풍선)
export const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, 20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
`;

export const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

export const slideUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;
