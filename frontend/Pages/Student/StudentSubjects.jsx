import React from "react";
import { FaBook } from "react-icons/fa";

const StudentSubjects = () => {
  const subjectsData = [
    { id: 1, name: "Principles of Management", teacher: "Mr. Sharma" },
    { id: 2, name: "Internet Technology", teacher: "Ms. Rai" },
    { id: 3, name: "DBMS", teacher: "Mr. Koirala" },
    {
      id: 4,
      name: "Object Oriented Analysis & Design",
      teacher: "Dr. Adhikari",
    },
    { id: 5, name: "Statistics & Probability", teacher: "Ms. Gurung" },
    { id: 6, name: "Non-Credit Course", teacher: "Mr. Thapa" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {subjectsData.map((subject) => (
        <div
          key={subject.id}
          className="flex flex-col items-center justify-center gap-2  text-center bg-gray-50 shadow-md rounded-md p-3 hover:shadow-lg transition"
        >
          <div className="bg-(--mainColor) text-white p-2 rounded-full">
            <FaBook size={20} />
          </div>
          <span className="font-semibold">{subject.name}</span>
          <span className="text-gray-600 text-sm">{subject.teacher}</span>
        </div>
      ))}
    </div>
  );
};

export default StudentSubjects;
