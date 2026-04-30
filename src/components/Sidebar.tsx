// components/Sidebar.tsx
import { useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { useThemeToggle } from "../context/ThemeContext";
import { FiHome, FiUser, FiFolder, FiCode, FiMail } from "react-icons/fi";
import { useModal } from "../context/ModalContext";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // 펼침 상태
  const { isDark, onToggle } = useThemeToggle();
  const navigate = useNavigate();
  const location = useLocation();
  const { openModal } = useModal();

  const navItems = [
    { icon: <FiHome />, label: "홈", path: "/home" },
    { icon: <FiUser />, label: "소개", action: () => openModal("about") },
    {
      icon: <FiFolder />,
      label: "프로젝트",
      action: () => openModal("projects"),
    },
    { icon: <FiCode />, label: "기술스택", action: () => openModal("skills") },
    { icon: <FiMail />, label: "연락하기", action: () => openModal("contact") },
  ];

  return (
    <>
      <Nav
        $isOpen={isOpen}
        onMouseEnter={() => setIsOpen(true)} // 호버 시 펼침
        onMouseLeave={() => setIsOpen(false)} // 호버 끝나면 닫힘
      >
        {/* 상단 토글 버튼 */}
        {isOpen && (
          <TopArea>
            {isOpen && <LogoText>HEEYEON</LogoText>}
            <ThemeToggle isDark={isDark} onToggle={onToggle} />
          </TopArea>
        )}

        {/* 네비게이션 항목 */}
        <NavList>
          {navItems.map((item) => (
            <NavItem
              key={item.label} // ← path 대신 label로 (항상 존재)
              $active={!!item.path && location.pathname === item.path} // ← path 있을 때만 활성화
              onClick={() => {
                if (item.action)
                  item.action(); // 모달 열기
                else if (item.path) navigate(item.path); // 페이지 이동
              }}
            >
              <IconBox>{item.icon}</IconBox>
              <Label $isOpen={isOpen}>{item.label}</Label>
            </NavItem>
          ))}
        </NavList>
      </Nav>
      {/* 모바일 하단 탭바 */}
      <BottomNav>
        {navItems.map((item) => (
          <BottomNavItem
            key={item.label}
            $active={!!item.path && location.pathname === item.path}
            onClick={() => {
              if (item.action) item.action();
              else if (item.path) navigate(item.path);
            }}
          >
            <BottomIcon>{item.icon}</BottomIcon>
            <BottomLabel>{item.label}</BottomLabel>
          </BottomNavItem>
        ))}
      </BottomNav>
    </>
  );
};

export default Sidebar;

const Nav = styled.nav<{ $isOpen: boolean }>`
  @media (max-width: 768px) {
    display: none;
  }
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

/* 모바일 하단 탭바 — PC에서 숨기기 */
const BottomNav = styled.nav`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: ${({ theme }) => theme.colors.surface};
    border-top: 1px solid ${({ theme }) => theme.colors.surfaceLight};
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
    padding: 8px 0 20px; /* 하단 safe area */
  }
`;

const BottomNavItem = styled.button<{ $active: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 4px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.muted};
`;

const BottomIcon = styled.span`
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const BottomLabel = styled.span`
  font-size: 10px;
  font-weight: 500;
  white-space: nowrap;
`;
