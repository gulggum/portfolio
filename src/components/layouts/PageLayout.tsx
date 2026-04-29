// 사이드바 + 컨텐츠 감싸는 레이아웃 (Intro 제외한 모든 페이지에 사용)
import styled from "styled-components";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router";

const PageLayout = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  );
};

export default PageLayout;

const Wrapper = styled.div`
  display: flex;
`;

const Main = styled.main`
  margin-left: 60px; /* 사이드바 닫힌 너비만큼 */
  flex: 1;
  min-height: 100vh;
  /* 모바일에서 margin 제거 */
  @media (max-width: 768px) {
    margin-left: 0;
    overflow-y: auto;
    height: 100dvh;
  }
`;
