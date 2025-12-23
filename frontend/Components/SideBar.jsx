import React from "react";
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
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  const sidebarItems = [
    { id: 1, name: "Dashboard", icon: FaTachometerAlt, link: "/" },
    { id: 2, name: "Timetable", icon: FaCalendarAlt, link: "/timetable" },
    { id: 3, name: "Subjects", icon: FaBook, link: "/subjects" },
    { id: 4, name: "Assignments", icon: FaClipboardList, link: "/assignments" },
    { id: 5, name: "Notes", icon: FaStickyNote, link: "/notes" },
    { id: 6, name: "Exams", icon: FaFileAlt, link: "/exams" },
    { id: 7, name: "Study Planner", icon: FaTasks, link: "/study-planner" },
    { id: 8, name: "Analytics", icon: FaChartLine, link: "/analytics" },
    { id: 9, name: "Settings", icon: FaCog, link: "/settings" },
  ];
  return (
    <div className="bg-linear-to-r from-(--mainColor) to-(--secondaryColor) text-white min-h-screen p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2 p-2 mt-3">
        <FaSchool size={25} />
        <h1 className="text-2xl font-semibold">Class Sync</h1>
      </div>

      <ul className="flex flex-col gap-2 ">
        {sidebarItems.map((items) => {
          const Icon = items.icon;
          return (
            <li
              key={items.id}
              className="flex items-center gap-2 transition-all duration-300 hover:bg-(--secondaryColor) hover:cursor-pointer  rounded "
            >
              <NavLink
                to={items.link}
                className={({ isActive }) =>
                  `flex items-center gap-2 p-3 rounded w-full  ${
                    isActive ? "bg-(--secondaryColor)" : ""
                  } hover:bg-secondaryColor`
                }
              >
                <Icon /> {items.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
