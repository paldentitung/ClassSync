import React from "react";
import SideBar from "../Components/SideBar";
import Header from "../Components/Header";
const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      <aside className="h-full ">
        <SideBar />
      </aside>
      <section className="flex-1 flex flex-col gap-4 ">
        <section>{children}</section>
      </section>
    </div>
  );
};

export default MainLayout;
