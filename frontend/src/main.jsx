import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { RoleProvider } from "../Context/RoleContext.jsx";
import { SidebarProvider } from "../Context/SidebarContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RoleProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </RoleProvider>
    </BrowserRouter>
  </StrictMode>
);
