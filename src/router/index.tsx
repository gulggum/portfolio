import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Intro from "../pages/Intro";

// 앱 전체 라우팅 정의
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} /> {/*  첫 화면 */}
        <Route path="/home" element={<Home />} /> {/* 회사 내부 */}
        <Route path="*" element={<NotFound />} /> {/* 404 */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
