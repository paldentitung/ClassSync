import React from "react";
import { FaBell, FaUser, FaCog } from "react-icons/fa";
const Header = ({ title }) => {
  return (
    <header className="flex justify-between p-6  border-b border-b-gray-300 bg-white items-center sticky top-0 z-30 ">
      <div className="text-2xl font-semibold">{title}</div>
      <div className="flex gap-3 items-center">
        <FaBell size={20} color="##bab6b6" />
        <FaUser size={20} />
        <FaCog size={20} />
      </div>
    </header>
  );
};

export default Header;
