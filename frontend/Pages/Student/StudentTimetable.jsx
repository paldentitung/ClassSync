import React from "react";

const StudentTimetable = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  const studentTimetable = [
    {
      time: "7:00 - 8:00",
      subjects: [
        "Principles of Management",
        "Principles of Management",
        "Principles of Management",
        "Internet Technology",
        "Internet Technology",
        "Internet Technology",
      ],
    },
    {
      time: "8:00 - 9:00",
      subjects: [
        "DBMS",
        "DBMS",
        "DBMS",
        "Object Oriented Analysis & Design",
        "Object Oriented Analysis & Design",
        "Object Oriented Analysis & Design",
      ],
    },
    { time: "9:00 - 9:30", isBreak: true, label: "Break" },
    {
      time: "9:30 - 10:30",
      subjects: [
        "Statistics & Probability",
        "Statistics & Probability",
        "Statistics & Probability",
        "Non-Credit Course",
        "Non-Credit Course",
        "Non-Credit Course",
      ],
    },
  ];
  return (
    <div className="w-full max-w-6xl mx-auto mt-6 bg-white rounded-md shadow">
      <div className="bg-linear-to-r from-(--mainColor) to-(--secondaryColor) rounded-t-md p-4 text-center text-xl text-white">
        Student Timetable (7:00 – 10:30 AM)
      </div>

      <div className="overflow-x-auto">
        <div className="grid grid-cols-7 min-w-225 text-xs sm:text-sm">
          <div className="border p-2 sm:p-3 bg-gray-100 font-semibold">
            Time
          </div>
          {days.map((day) => (
            <div
              key={day}
              className="border p-2 sm:p-3 text-center font-semibold bg-gray-100"
            >
              {day}
            </div>
          ))}

          {studentTimetable.map((row, idx) => (
            <React.Fragment key={idx}>
              <div className="border p-2 sm:p-3 font-semibold bg-gray-50">
                {row.time}
              </div>

              {row.isBreak ? (
                <div className="border p-2 sm:p-3 col-span-6 text-center font-semibold bg-yellow-100 text-yellow-800">
                  ☕ {row.label}
                </div>
              ) : (
                row.subjects.map((subject, i) => (
                  <div
                    key={i}
                    className="border p-2 sm:p-3 text-center hover:bg-gray-100"
                  >
                    {subject}
                  </div>
                ))
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentTimetable;
