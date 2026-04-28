import { createContext, useContext, useState } from "react";

// 모달 타입 정의
export type ModalType = "about" | "skills" | "contact" | "projects" | null;

interface ModalContextType {
  modalType: ModalType; // 현재 열린 모달
  openModal: (type: ModalType) => void; // 모달 열기
  closeModal: () => void; // 모달 닫기
}

const ModalContext = createContext<ModalContextType>({
  modalType: null,
  openModal: () => {},
  closeModal: () => {},
});

// 어디서든 꺼내 쓰는 훅
export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalType, setModalType] = useState<ModalType>(null);

  return (
    <ModalContext.Provider
      value={{
        modalType,
        openModal: (type) => setModalType(type),
        closeModal: () => setModalType(null),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
