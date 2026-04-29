import { useEffect, useState } from "react";
import type { BotType } from "../types/robot";
import MobileLayout from "../components/layouts/MobileLayout";
import DesktopLayout from "../components/layouts/DesktopLayout";
import ChatModal from "../components/office/ChatModal";
import AboutModal from "../components/modals/AboutModal";
import { useModal } from "../context/ModalContext";
import SkillsModal from "../components/modals/SkillsModal";
import ContactModal from "../components/modals/ContactModal";
import ProjectModal from "../components/modals/ProjectModal";

const Home = () => {
  const { closeModal, modalType } = useModal();
  // 현재 클릭된 봇 (null이면 아무것도 안 열림)
  const [active, setActive] = useState<BotType | null>(null);
  // 모바일 여부 감지 (768px 기준)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  //챗 모달
  const [chatBot, setChatBot] = useState<BotType | null>(null);
  //각페이지별 팝업창
  const [initialMessage, setInitialMessage] = useState("");

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  //bot 사이즈
  const botSize = isMobile ? 110 : 100;

  const handleOpenChat = (type: BotType, message?: string) => {
    setChatBot(type);
    setInitialMessage(message || "");
  };

  return (
    <>
      {isMobile ? (
        <MobileLayout setActive={setActive} onOpenChat={handleOpenChat} />
      ) : (
        <DesktopLayout
          active={active}
          setActive={setActive}
          botSize={botSize}
          onOpenChat={handleOpenChat} // ← 추가
        />
      )}
      {/* 채팅 모달 — botType 있을 때만 렌더링 */}
      {chatBot && (
        <ChatModal
          type={chatBot}
          initialMessage={initialMessage}
          onClose={() => {
            setChatBot(null);
            setInitialMessage("");
          }}
        />
      )}
      {/* 각 페이지별 모달 랜더링 */}
      {modalType === "about" && <AboutModal onClose={closeModal} />}
      {modalType === "skills" && <SkillsModal onClose={closeModal} />}
      {modalType === "contact" && <ContactModal onClose={closeModal} />}
      {modalType === "projects" && <ProjectModal onClose={closeModal} />}
    </>
  );
};

export default Home;
