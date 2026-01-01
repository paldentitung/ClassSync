import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { RoleProvider } from "../Context/RoleContext.jsx";
import { SidebarProvider } from "../Context/SidebarContext.jsx";
import { ModalProvider } from "../Context/ModalContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RoleProvider>
        <ModalProvider>
          <SidebarProvider>
            <App />
          </SidebarProvider>
        </ModalProvider>
      </RoleProvider>
    </BrowserRouter>
  </StrictMode>
);
