import React from "react";
import MainButton from "../../Components/MainButton";
import SecondaryButton from "../../Components/SecondaryButton";

const TeacherNotes = ({ notes }) => {
  return (
    <div className="md:px-10 md:py-5 space-y-5">
      {/* Upload Area */}
      <div className="group relative bg-white border-2 border-dashed border-gray-300 rounded-3xl p-12 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md">
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
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8">
        {notes.map((note) => (
          <div
            key={note.id}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
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
