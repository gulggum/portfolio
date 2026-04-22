import { useNavigate } from "react-router-dom";
import introCompany from "../assets/images/company/intro_company.png";
import { FiCpu, FiHeart, FiTrendingUp } from "react-icons/fi";
import { type ReactNode } from "react";

// 🔹 카드 props 타입 정의
type CardProps = {
  icon: ReactNode;
  text: string;
  color: string;
};

function Intro() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-4">
      {/* 🏢 회사 이미지 */}
      <img
        src={introCompany}
        alt="company"
        className="
  w-[85vw] 
  max-w-[700px] 
  mb-6
  cursor-pointer
  animate-float
  transition
  hover:scale-105
"
        onClick={() => navigate("/home")}
      />

      {/* 텍스트 */}
      <p className="text-lg font-medium text-primary mb-2">안녕하세요!</p>
      <h1 className="text-xl sm:text-3xl font-extrabold text-text text-center mb-8">
        저희 회사를 소개합니다 ✨
      </h1>

      {/* 카드 영역 - 모바일 세로 / PC 가로 */}
      <div
        className="
  flex 
  flex-col 
  gap-3 
  w-full 
  max-w-[400px]

  sm:flex-row 
  sm:max-w-none 
  sm:w-auto 
  sm:gap-6
"
      >
        <Card
          icon={<FiCpu className="stroke-[2.5]" />}
          color="text-accent"
          text="AI 기반 서비스"
        />
        <Card
          icon={<FiHeart className="stroke-[2.5]" />}
          color="text-primary"
          text="사용자 중심"
        />
        <Card
          icon={<FiTrendingUp className="stroke-[2.5]" />}
          color="text-secondary"
          text="지속적인 성장"
        />
      </div>
    </div>
  );
}

export default Intro;

// 🔹 카드 컴포넌트
function Card({ icon, text, color }: CardProps) {
  return (
    <div
      className="
        bg-white 
        rounded-2xl 
        shadow-soft 
        transition

        flex flex-col items-center justify-center   // ✅ 모바일: 가로 버튼

        w-full 
        px-5 py-6   
   

        sm:flex-col sm:justify-center       // ✅ PC: 카드형
        sm:h-auto 
        sm:w-[120px] md:w-[180px]    
                     md:px-6 md:py-7  
        sm:px-6 sm:py-4
         
      "
    >
      {/* 아이콘 */}
      <div className={`text-3xl ${color} mb-3`}>{icon}</div>

      {/* 텍스트 */}
      <p className="text-sm text-text text-center">{text}</p>
    </div>
  );
}
