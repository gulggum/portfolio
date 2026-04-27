import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Intro from "../pages/Intro";
import PageLayout from "../components/layouts/PageLayout";

// 앱 전체 라우팅 정의
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} /> {/*  첫 화면 */}
        <Route path="*" element={<NotFound />} /> {/* 404 */}
        {/* 사이드바 있는 페이지 — PageLayout이 껍데기 역할 */}
        <Route element={<PageLayout />}>
          <Route path="/home" element={<Home />} />
          {/* 나중에 추가할 페이지들 */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/projects" element={<Projects />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
