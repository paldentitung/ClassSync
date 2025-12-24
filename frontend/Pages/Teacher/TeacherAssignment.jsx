import React from "react";
import MainButton from "../../Components/MainButton";
import SecondaryButton from "../../Components/SecondaryButton";
const TeacherAssignment = () => {
  const teacherAssignments = [
    {
      id: 1,
      title: "React Basics",
      subject: "Internet Technology",
      dueDate: "2025-01-10",
      submissions: 18,
    },
    {
      id: 2,
      title: "SQL Queries",
      subject: "DBMS",
      dueDate: "2025-01-08",
      submissions: 20,
    },
    {
      id: 3,
      title: "Management Essay",
      subject: "Principles of Management",
      dueDate: "2025-01-12",
      submissions: 15,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3  ">
      {teacherAssignments.map((assignment) => (
        <div className="flex  flex-col bg-white p-4 gap-3 rounded-2xl shadow transition-all duration-300 hover:shadow-md ">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-[18px]">
              {assignment.title}
            </span>
            <span className="text-gray-700 text-sm">{assignment.subject}</span>
          </div>

          <div className="flex justify-between items-center text-gray-400 text-sm flex-1">
            <span>{assignment.dueDate}</span>
            <span>{assignment.submissions} submissions</span>
          </div>

          <div className="flex justify-between items-center">
            <MainButton name="View Submissions" />
            <SecondaryButton name="Edit" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeacherAssignment;
