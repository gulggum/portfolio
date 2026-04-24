import { useEffect, useState } from "react";
import pcBg from "../assets/images/company/office_PC.png";
import mobileBg from "../assets/images/company/office_mobile.png";

import ChatBubble from "../components/office/ChatBubble";
import { botMap } from "../data/botMap";
import type { BotType } from "../types/robot";

const Home = () => {
  const [active, setActive] = useState<BotType | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 배경 */}
      <img
        src={mobileBg}
        className="absolute inset-0 sm:hidden w-full h-full object-cover"
      />
      <img
        src={pcBg}
        className="absolute inset-0 hidden sm:block w-full h-full object-cover"
      />

      {/*  캐릭터 + hover + click */}
      {Object.entries(botMap).map(([type, bot]) => (
        <div
          key={type}
          className="absolute group cursor-pointer z-10"
          style={{
            top: bot.position.top,
            left: bot.position.left,
            transform: "translate(-50%, -50%)",
          }}
          onClick={() => setActive(type as BotType)}
        >
          {/* 캐릭터 */}
          <img
            src={bot.image}
            alt={bot.name}
            className={`
        w-[18vw] max-w-[200px]

        animate-float
        transition-transform duration-300
        group-hover:scale-110
          ${active === type ? "scale-110" : ""}
        
      `}
          />

          {/* hover 이름 */}
          <div
            className="
        absolute bottom-full left-1/2
        -translate-x-1/2 mb-2

        px-2 py-1 text-xs
        bg-black text-white rounded

        opacity-0 group-hover:opacity-100
        transition
        whitespace-nowrap
      "
          >
            {bot.name}
          </div>
        </div>
      ))}

      {/*  말풍선 */}
      {active && <ChatBubble type={active} onClose={() => setActive(null)} />}
    </div>
  );
};

export default Home;
