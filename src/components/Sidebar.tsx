// components/Sidebar.tsx
import { useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { useThemeToggle } from "../context/ThemeContext";
import { FiHome, FiUser, FiFolder, FiCode, FiMail } from "react-icons/fi";

const navItems = [
  { icon: <FiHome />, label: "홈", path: "/home" },
  { icon: <FiUser />, label: "소개", path: "/about" },
  { icon: <FiFolder />, label: "프로젝트", path: "/projects" },
  { icon: <FiCode />, label: "기술스택", path: "/skills" },
  { icon: <FiMail />, label: "연락하기", path: "/contact" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // 펼침 상태
  const { isDark, onToggle } = useThemeToggle();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Nav
      $isOpen={isOpen}
      onMouseEnter={() => setIsOpen(true)} // 호버 시 펼침
      onMouseLeave={() => setIsOpen(false)} // 호버 끝나면 닫힘
    >
      {/* 상단 토글 버튼 */}
      <TopArea>
        {isOpen && <LogoText>HEEYEON</LogoText>}
        <ThemeToggle isDark={isDark} onToggle={onToggle} />
      </TopArea>

      {/* 네비게이션 항목 */}
      <NavList>
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            $active={location.pathname === item.path}
            onClick={() => navigate(item.path)}
          >
            <IconBox>{item.icon}</IconBox>
            {/* 펼쳐질 때만 텍스트 표시 */}
            <Label $isOpen={isOpen}>{item.label}</Label>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
};

export default Sidebar;

const Nav = styled.nav<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 100;

  /* 펼침 여부에 따라 너비 변경 */
  width: ${({ $isOpen }) => ($isOpen ? "180px" : "60px")};
  transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

  background: ${({ theme }) => theme.colors.surface};
  border-right: 1px solid ${({ theme }) => theme.colors.surfaceLight};
  box-shadow: ${({ theme }) => theme.shadow.soft};

  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.md} 0;
  overflow: hidden; /* 닫혔을 때 텍스트 안 보이게 */
`;

const TopArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  min-height: 36px;
`;

const LogoText = styled.span`
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  white-space: nowrap;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const NavItem = styled.li<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 10px ${({ theme }) => theme.spacing.sm};
  margin: 0 8px;
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  transition: all 0.2s ease;

  /* 현재 페이지 활성화 */
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primarySoft : "transparent"};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.muted};

  &:hover {
    background: ${({ theme }) => theme.colors.primarySoft};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const IconBox = styled.span`
  font-size: 18px;
  flex-shrink: 0; /* 아이콘은 크기 고정 */
  display: flex;
  align-items: center;
`;

const Label = styled.span<{ $isOpen: boolean }>`
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;

  /* 펼쳐질 때 페이드인 */
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity 0.2s ease 0.1s; /* 너비 애니메이션 후 텍스트 등장 */
`;
