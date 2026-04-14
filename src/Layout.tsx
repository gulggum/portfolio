import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";

// 전체 페이지 레이아웃 - 고정 navbar + 섹션들
function Layout() {
  return (
    <div>
      <Navbar />
      {/* 각 섹션 id로 스크롤 이동 타겟 */}
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="work" className="min-h-screen px-10 py-24">
          Work
        </section>
        <section id="about" className="min-h-screen px-10 py-24">
          About
        </section>
        <section id="contact" className="min-h-screen px-10 py-24">
          Contact
        </section>
      </main>
    </div>
  );
}

export default Layout;
