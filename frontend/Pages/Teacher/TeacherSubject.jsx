import React from "react";
import { FaBook } from "react-icons/fa";
import MainButton from "../../Components/MainButton";
import SecondaryButton from "../../Components/SecondaryButton";
const TeacherSubject = () => {
  const teacherSubjects = [
    { id: 1, name: "Internet Technology", class: "BCSIT 2nd Semester" },
    { id: 2, name: "DBMS", class: "BCSIT 3rd Semester" },
    {
      id: 3,
      name: "Object Oriented Analysis & Design",
      class: "BCSIT 4th Semester",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teacherSubjects.map((subject) => (
          <div key={subject.id} className="bg-white rounded-md shadow p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-(--mainColor) text-white p-2 rounded-full">
                <FaBook size={16} />
              </div>
              <h2 className="font-semibold">{subject.name}</h2>
            </div>

            <p className="text-sm text-gray-600 mb-3">Class: {subject.class}</p>

            {/* Teacher actions */}
            <div className="flex gap-2">
              <MainButton name="Notes" />
              <SecondaryButton name="Assignments" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherSubject;
