import React from "react";
import MainButton from "../../Components/MainButton";

const StudentExams = ({ exams }) => {
  return (
    <div className="">
      <h2 className="text-3xl font-bold mb-8">My Exams</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {exams.map((exam) => (
          <div
            key={exam.id}
            className="bg-white p-5 rounded-2xl shadow hover:shadow-md transition flex flex-col gap-3"
          >
            <div>
              <h3 className="text-lg font-semibold">{exam.name}</h3>
              <p className="text-sm text-gray-600">{exam.subject}</p>
            </div>

            <div className="text-sm text-gray-500">
              <p>Date: {exam.date}</p>
              <p>Time: {exam.time}</p>
            </div>

            <div className="flex justify-between items-center mt-auto">
              <span
                className={`text-sm font-medium ${
                  exam.status === "Upcoming"
                    ? "text-orange-500"
                    : "text-green-600"
                }`}
              >
                {exam.status}
              </span>

              <MainButton
                name={exam.status === "Upcoming" ? "View" : "Result"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentExams;
