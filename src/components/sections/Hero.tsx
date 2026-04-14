import { motion, type Variants } from "framer-motion";

// 각 요소 페이드인 애니메이션 설정
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // 순서대로 딜레이
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-10 pt-24"
    >
      {/* 직업 - 제일 먼저 */}
      <motion.p
        className="text-sm font-medium text-gray-400 mb-4 tracking-widest uppercase"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        Frontend Developer
      </motion.p>

      {/* 이름 - 크게 */}
      <motion.h1
        className="font-extrabold leading-none tracking-tighter text-black"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        이 희연
      </motion.h1>

      {/* 한 줄 소개 */}
      <motion.p
        className="mt-6 text-lg text-gray-500 max-w-lg"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        사용자 경험을 고민하는 프론트엔드 개발자입니다.
      </motion.p>

      {/* 스크롤 유도 화살표 */}
      <motion.div
        className="mt-16 flex flex-col items-start gap-1"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        <span className="text-xs text-[#0ABAB5] tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          className="text-gray-300 text-lg"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
