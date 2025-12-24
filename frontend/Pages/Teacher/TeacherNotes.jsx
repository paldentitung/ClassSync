import React from "react";
import MainButton from "../../Components/MainButton";
import SecondaryButton from "../../Components/SecondaryButton";

const TeacherNotes = () => {
  const teacherNotes = [
    {
      id: 1,
      title: "React Introduction",
      subject: "Internet Technology",
      date: "2025-01-10",
    },
    {
      id: 2,
      title: "OOP Basics",
      subject: "Object Oriented Analysis & Design",
      date: "2025-01-12",
    },
    {
      id: 3,
      title: "SQL Joins",
      subject: "DBMS",
      date: "2025-01-08",
    },
    {
      id: 4,
      title: "Management Principles",
      subject: "Principles of Management",
      date: "2025-01-15",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* Upload Area */}
      <div className="group relative bg-white border-2 border-dashed border-gray-300 rounded-3xl p-12 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
        <input
          type="file"
          className="absolute inset-0 opacity-0 cursor-pointer"
          accept=".pdf,.docx"
        />
        <p className="mt-4 text-lg md:text-2xl font-semibold text-gray-700">
          Drag & drop your note here
        </p>
        <p className="mt-2 text-sm text-gray-500">or click to browse</p>
        <div className="mt-6">
          <MainButton name="Upload New Note" className="px-8 py-2" />
        </div>
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teacherNotes.map((note) => (
          <div
            key={note.id}
            className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
          >
            {/* Header / Preview */}
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 p-8 flex items-center justify-center">
              <span className="text-blue-500 text-5xl">📄</span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-bold text-sm md:text-lg text-gray-900 line-clamp-2">
                {note.title}
              </h3>
              <span className="inline-block mt-2 px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                {note.subject}
              </span>
              <p className="mt-3 text-sm text-gray-500">
                Uploaded: {note.date}
              </p>

              {/* Actions */}
              <div className="mt-auto flex gap-3 pt-4 flex-1">
                <MainButton name="Edit" className="flex-1" />
                <SecondaryButton name="Delete" className="flex-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherNotes;
