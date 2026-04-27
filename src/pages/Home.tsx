import { useEffect, useState } from "react";
import type { BotType } from "../types/robot";
import MobileLayout from "../components/layouts/MobileLayout";
import DesktopLayout from "../components/layouts/DesktopLayout";

const Home = () => {
  // 현재 클릭된 봇 (null이면 아무것도 안 열림)
  const [active, setActive] = useState<BotType | null>(null);
  // 모바일 여부 감지 (768px 기준)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  //bot 사이즈
  const getSize = (type: BotType) => {
    const base = isMobile ? 110 : 120;
    if (isMobile) return base;
    return base;
  };

  return isMobile ? (
    <MobileLayout setActive={setActive} />
  ) : (
    <DesktopLayout active={active} setActive={setActive} getSize={getSize} />
  );
};

export default Home;
