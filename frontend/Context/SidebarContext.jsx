import { createContext, useState } from "react";

export const SideBarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <SideBarContext.Provider value={{ isExpanded, setIsExpanded }}>
      {children}
    </SideBarContext.Provider>
  );
};
