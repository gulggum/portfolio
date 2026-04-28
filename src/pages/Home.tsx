import { useEffect, useState } from "react";
import type { BotType } from "../types/robot";
import MobileLayout from "../components/layouts/MobileLayout";
import DesktopLayout from "../components/layouts/DesktopLayout";
import ChatModal from "../components/office/ChatModal";

const Home = () => {
  // 현재 클릭된 봇 (null이면 아무것도 안 열림)
  const [active, setActive] = useState<BotType | null>(null);
  // 모바일 여부 감지 (768px 기준)
  const [isMobile, setIsMobile] = useState(false);
  //챗 모달
  const [chatBot, setChatBot] = useState<BotType | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  //bot 사이즈
  const botSize = isMobile ? 110 : 100;

  return (
    <>
      {isMobile ? (
        <MobileLayout setActive={setActive} />
      ) : (
        <DesktopLayout
          active={active}
          setActive={setActive}
          botSize={botSize}
          onOpenChat={(type) => setChatBot(type)} // ← 추가
        />
      )}

      {/* 채팅 모달 — botType 있을 때만 렌더링 */}
      {chatBot && <ChatModal type={chatBot} onClose={() => setChatBot(null)} />}
    </>
  );
};

export default Home;
