import { useState } from "react";
import { botMap } from "../../data/botMap";
import type { BotType } from "../../types/robot";

const ChatBubble = ({
  type,
  onClose,
}: {
  type: BotType;
  onClose: () => void;
}) => {
  //현재 캐릭터
  const bot = botMap[type];

  //step : 현재 대화 단계(0 = 첫 인사)
  const [step, setStep] = useState(0);

  return (
    <div
      onClick={onClose}
      className="
        absolute
        z-50

        -translate-x-1/2
        -translate-y-[200%]

        bg-white
        px-4 py-3
        rounded-2xl
        shadow-lg

        w-[220px]
        text-sm

        animate-fadeUp
      "
      style={{
        top: bot.position.top,
        left: bot.position.left,
      }}
    >
      {/* 꼬리 */}
      <div
        className="
        absolute bottom-[-6px] left-1/2
        -translate-x-1/2
        w-3 h-3 bg-white rotate-45
      "
      />

      {/* 이름 */}
      <div className="font-semibold mb-1">{bot.name}</div>

      {/* GPT 느낌 점 */}
      <div className="flex gap-1 mb-2">
        <span className="w-2 h-2 bg-primary rounded-full animate-bounce" />
        <span className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
        <span className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
      </div>

      {bot.getContent()}
    </div>
  );
};

export default ChatBubble;
