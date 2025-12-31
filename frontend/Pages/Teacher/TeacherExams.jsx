import React from "react";
import MainButton from "../../Components/MainButton";
import SecondaryButton from "../../Components/SecondaryButton";
import {
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const TeacherExams = ({ exams }) => {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h2 className="text-3xl font-bold">Exams</h2>
        <MainButton name="Create Exam" />
      </div>

      {/* Exams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exams.map((exam) => (
          <div
            key={exam.id}
            className="bg-white p-5 md:p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col gap-4"
          >
            {/* Exam Name & Subject */}
            <div>
              <h3 className="text-lg font-semibold">{exam.name}</h3>
              <p className="text-sm text-gray-600">{exam.subject}</p>
            </div>

            {/* Exam Details */}
            <div className="text-sm text-gray-500 flex flex-col gap-1">
              <p className="flex items-center gap-2">
                <FaCalendarAlt className="text-gray-400" /> {exam.date}
              </p>
              <p className="flex items-center gap-2">
                <FaClock className="text-gray-400" /> {exam.time} (
                {exam.duration})
              </p>
              <p>
                Total Marks:{" "}
                <span className="font-medium">{exam.totalMarks}</span>
              </p>
              <p className="flex items-center gap-2">
                Status:{" "}
                <span
                  className={`font-semibold ${
                    exam.status === "Upcoming"
                      ? "text-orange-500"
                      : exam.status === "Completed"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {exam.status === "Completed" ? (
                    <FaCheckCircle className="inline" />
                  ) : exam.status === "Upcoming" ? (
                    "⏳"
                  ) : (
                    <FaTimesCircle className="inline" />
                  )}
                  {` ${exam.status}`}
                </span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-auto">
              <MainButton name="Submissions" className="flex-1" />
              <SecondaryButton name="Edit" className="flex-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherExams;
