import React from "react";
import MainButton from "../../Components/MainButton";
import SecondaryButton from "../../Components/SecondaryButton";

const TeacherExams = () => {
  const teacherExams = [
    {
      id: 1,
      title: "Mid Term Exam",
      subject: "Internet Technology",
      date: "2025-02-10",
      students: 45,
    },
    {
      id: 2,
      title: "Unit Test",
      subject: "DBMS",
      date: "2025-02-05",
      students: 40,
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Exams</h2>
        <MainButton name="Create Exam" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teacherExams.map((exam) => (
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
              <p>Students: {exam.students}</p>
            </div>

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
