import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.font.main};
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
  height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.muted};
  }
`;
