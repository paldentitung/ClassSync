import React from "react";
import MainButton from "../../Components/MainButton";
import SecondaryButton from "../../Components/SecondaryButton";

const StudentNotes = () => {
  const studentNotes = [
    {
      id: 1,
      title: "React Introduction",
      subject: "Internet Technology",
      date: "2025-01-10",
    },
    { id: 2, title: "SQL Joins", subject: "DBMS", date: "2025-01-08" },
    {
      id: 3,
      title: "OOP Basics",
      subject: "Object Oriented Analysis & Design",
      date: "2025-01-12",
    },
    {
      id: 4,
      title: "Management Principles",
      subject: "Principles of Management",
      date: "2025-01-15",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Notes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {studentNotes.map((note) => (
          <div
            key={note.id}
            className="group bg-white rounded-3xl shadow-md hover:shadow-lg transition overflow-hidden border border-gray-100 flex flex-col"
          >
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 p-8 flex items-center justify-center">
              <span className="text-blue-500 text-5xl">📄</span>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-xl text-gray-900 line-clamp-2">
                {note.title}
              </h3>
              <span className="inline-block mt-3 px-4 py-1.5 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full">
                {note.subject}
              </span>
              <p className="mt-4 text-sm text-gray-500">
                Uploaded: {note.date}
              </p>

              <div className="mt-6 flex gap-3">
                <MainButton name="View" className="flex-1" />
                <SecondaryButton name="Download" className="flex-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentNotes;
