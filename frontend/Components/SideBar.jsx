import React, { useContext, useState } from "react";
import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaBook,
  FaClipboardList,
  FaStickyNote,
  FaFileAlt,
  FaTasks,
  FaChartLine,
  FaCog,
  FaSchool,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { RoleContext } from "../Context/RoleContext";
import { SideBarContext } from "../Context/SidebarContext";
import { FaTimes } from "react-icons/fa";
const SideBar = ({ mobile }) => {
  const { role } = useContext(RoleContext);
  const { isExpanded, setIsExpanded, showSideBar, setShowSideBar } =
    useContext(SideBarContext);

  const sidebarItems = [
    {
      id: 1,
      name: "Dashboard",
      icon: FaTachometerAlt,
      link: role === "student" ? "/dashboard/student" : "/dashboard/teacher",
    },
    { id: 2, name: "Timetable", icon: FaCalendarAlt, link: "/timetable" },
    { id: 3, name: "Subjects", icon: FaBook, link: "/subjects" },
    { id: 4, name: "Assignments", icon: FaClipboardList, link: "/assignments" },
    { id: 5, name: "Notes", icon: FaStickyNote, link: "/notes" },
    { id: 6, name: "Exams", icon: FaFileAlt, link: "/exams" },
    { id: 8, name: "Analytics", icon: FaChartLine, link: "/analytics" },
    { id: 9, name: "Settings", icon: FaCog, link: "/settings" },
  ];

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full bg-linear-to-b from-(--mainColor) to-(--secondaryColor) text-white flex flex-col transition-all duration-500 ease-in-out z-40
        ${isExpanded ? "w-64" : "w-20"}
    ${mobile ? "flex md:hidden" : "hidden md:flex"} 
      `}
      >
        {/* Logo & Title - Smooth fade + slide */}
        <div className="flex items-center gap-4 px-6 py-8 border-b border-white/10 overflow-hidden">
          <FaSchool size={32} className="shrink-0" />
          <h1
            className={`text-2xl font-bold tracking-tight whitespace-nowrap transition-all duration-500 ease-in-out ${
              isExpanded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
          >
            Class Sync
          </h1>
          <button
            onClick={() => setShowSideBar(!showSideBar)}
            className="flex flex-col gap-1  md:hidden"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <NavLink
                    to={item.link}
                    onClick={() => {
                      if (mobile) setShowSideBar(false);
                    }}
                    className={({ isActive }) =>
                      `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                        isActive
                          ? "bg-white/20 shadow-lg font-medium"
                          : "hover:bg-white/10"
                      }`
                    }
                  >
                    <Icon size={22} className="shrink-0" />
                    <span
                      className={`whitespace-nowrap transition-all duration-500 ease-in-out ${
                        isExpanded
                          ? "opacity-100 translate-x-0 w-auto"
                          : "opacity-0 -translate-x-4 w-0"
                      }`}
                    >
                      {item.name}
                    </span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Toggle Button - Fixed at bottom */}
        <div className="p-4 border-t border-white/10">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-center w-full py-3 rounded-xl hover:bg-white/10 transition-all duration-300 group"
            aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
          >
            {isExpanded ? (
              <FaAngleLeft
                size={20}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            ) : (
              <FaAngleRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
