import React, { useContext } from "react";
import SideBar from "../Components/SideBar";
import { SideBarContext } from "../Context/SidebarContext";
const MainLayout = ({ children }) => {
  const { isExpanded } = useContext(SideBarContext);
  return (
    <div className="min-h-screen flex overflow-hidden">
      <aside className={` h-full`}>
        <SideBar />
      </aside>
      <main
        className={`flex-1 flex flex-col gap-4 transition-all duration-500 ease-in-out ${
          isExpanded ? "ml-64" : "ml-20"
        }`}
      >
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
