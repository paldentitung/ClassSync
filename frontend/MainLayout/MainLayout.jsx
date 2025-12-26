import React, { useContext } from "react";
import SideBar from "../Components/SideBar";
import { SideBarContext } from "../Context/SidebarContext";
const MainLayout = ({ children }) => {
  const { isExpanded, showSideBar } = useContext(SideBarContext);
  return (
    <div className="min-h-screen flex overflow-hidden">
      <aside className={` h-full hidden md:block`}>
        <SideBar />
      </aside>
      <main
        className={`flex-1 flex flex-col gap-4  bg-gray-50 transition-all duration-500 ease-in-out
    ml-0
    ${isExpanded ? "md:ml-64" : "md:ml-20"}
  `}
      >
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
