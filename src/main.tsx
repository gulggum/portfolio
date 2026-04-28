import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeContextProvider } from "./context/ThemeContext";
import { ModalProvider } from "./context/ModalContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ThemeContextProvider>
  </StrictMode>,
);
