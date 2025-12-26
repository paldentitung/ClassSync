import React, { useContext } from "react";
import { FaBell, FaUser, FaCog } from "react-icons/fa";
import { SideBarContext } from "../Context/SidebarContext";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";
const Header = ({ title }) => {
  const { showSideBar, setShowSideBar } = useContext(SideBarContext);
  const navigate = useNavigate();
  return (
    <header className="flex justify-between p-6  border-b border-b-gray-300 bg-white items-center sticky top-0 z-30 ">
      <button
        onClick={() => setShowSideBar(!showSideBar)}
        className="flex flex-col gap-1  md:hidden"
      >
        <span className="w-12 h-2 bg-(--mainColor) rounded-md"></span>
        <span className="w-12 h-2 bg-(--mainColor) rounded-md"></span>
        <span className="w-12 h-2 bg-(--mainColor) rounded-md"></span>
      </button>
      <div className="text-2xl font-semibold">{title}</div>
      <div className="flex gap-3 items-center">
        <FaBell size={20} color="##bab6b6" />
        <FaUser
          size={20}
          className="cursor-pointer"
          onClick={() => navigate("/settings")}
        />
        <FaCog
          size={20}
          className="cursor-pointer"
          onClick={() => navigate("/settings")}
        />
      </div>
      {showSideBar && (
        <div className="fixed w-full h-full inset-0 z-50">
          <div
            className=" absolute inset-0 bg-black/50"
            onClick={() => setShowSideBar(false)}
          ></div>
          <SideBar mobile={true} />
        </div>
      )}
    </header>
  );
};

export default Header;
