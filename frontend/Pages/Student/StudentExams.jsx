import React from "react";
import MainButton from "../../Components/MainButton";

const StudentExams = () => {
  const studentExams = [
    {
      id: 1,
      title: "Mid Term Exam",
      subject: "Internet Technology",
      date: "2025-02-10",
      time: "10:00 AM",
      status: "Upcoming",
    },
    {
      id: 2,
      title: "Unit Test",
      subject: "DBMS",
      date: "2025-02-05",
      time: "1:00 PM",
      status: "Completed",
    },
  ];

  return (
    <div className="">
      <h2 className="text-3xl font-bold mb-8">My Exams</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {studentExams.map((exam) => (
          <div
            key={exam.id}
            className="bg-white p-5 rounded-2xl shadow hover:shadow-md transition flex flex-col gap-3"
          >
            <div>
              <h3 className="text-lg font-semibold">{exam.title}</h3>
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
