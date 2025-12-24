import React from "react";

const StudentAssignments = () => {
  const studentAssignments = [
    {
      id: 1,
      title: "React Basics",
      subject: "Internet Technology",
      dueDate: "2025-01-10",
      status: "Pending",
    },
    {
      id: 2,
      title: "SQL Queries",
      subject: "DBMS",
      dueDate: "2025-01-08",
      status: "Submitted",
    },
    {
      id: 3,
      title: "Management Principles Essay",
      subject: "Principles of Management",
      dueDate: "2025-01-12",
      status: "Pending",
    },
    {
      id: 4,
      title: "Statistics Assignment 1",
      subject: "Statistics & Probability",
      dueDate: "2025-01-15",
      status: "Pending",
    },
    {
      id: 5,
      title: "OOP Design Patterns",
      subject: "Object Oriented Analysis & Design",
      dueDate: "2025-01-18",
      status: "Pending",
    },
    {
      id: 6,
      title: "Non-Credit Course Reflection",
      subject: "Non-Credit Course",
      dueDate: "2025-01-20",
      status: "Pending",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3  ">
      {studentAssignments.map((assignment) => (
        <div className="flex  flex-col bg-white p-3 gap-2 rounded-2xl shadow transition-all duration-300 hover:shadow-md h-32">
          <div className="flex  justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-[16px]">
                {assignment.title}
              </span>
              <span className="text-gray-700">{assignment.subject}</span>
            </div>
            <button className="text-[13px] bg-(--mainColor) px-3 py-1 text-white rounded-md transition opacity-75 hover:opacity-100 hover:cursor-pointer">
              Submit
            </button>
          </div>
          <div className="flex justify-between items-center text-gray-400 text-sm flex-1">
            <span>{assignment.dueDate}</span>
            <span>{assignment.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentAssignments;
