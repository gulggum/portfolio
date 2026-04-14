import { useEffect, useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  // 스크롤 감지 - 50px 넘으면 배경 생김
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-10 py-5 flex justify-between items-center transition-all duration-300
      ${scrolled ? "bg-white/90 backdrop-blur-sm" : "bg-transparent"}`}
    >
      <span className="text-lg font-bold tracking-tight">HY's Portfolio</span>

      <nav className="flex gap-10">
        {navLinks.map((link: NavLink) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-gray-500 transition-colors duration-200 "
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0ABAB5")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
