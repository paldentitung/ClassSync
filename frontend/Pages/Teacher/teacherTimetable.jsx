import React from "react";

const TeacherTimetable = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  const teacherTimetable = [
    {
      time: "7:00 - 8:00",
      teachers: [
        "Mr. Sharma",
        "Mr. Sharma",
        "Mr. Sharma",
        "Ms. Rai",
        "Ms. Rai",
        "Ms. Rai",
      ],
    },
    {
      time: "8:00 - 9:00",
      teachers: [
        "Mr. Koirala",
        "Mr. Koirala",
        "Mr. Koirala",
        "Dr. Adhikari",
        "Dr. Adhikari",
        "Dr. Adhikari",
      ],
    },
    { time: "9:00 - 9:30", isBreak: true, label: "Break" },
    {
      time: "9:30 - 10:30",
      teachers: [
        "Ms. Gurung",
        "Ms. Gurung",
        "Ms. Gurung",
        "Mr. Thapa",
        "Mr. Thapa",
        "Mr. Thapa",
      ],
    },
  ];
  return (
    <div className="w-full max-w-6xl mx-auto mt-6 bg-white rounded-md shadow">
      <div className="bg-linear-to-r from-(--mainColor) to-(--secondaryColor) rounded-t-md p-4 text-center text-xl text-white">
        Teacher Timetable (7:00 – 10:30 AM)
      </div>

      <div className="overflow-x-auto">
        <div className="grid grid-cols-7 min-w-225 text-xs sm:text-sm">
          <div className="border p-2 sm:p-3 bg-blue-100 font-semibold">
            Time
          </div>
          {days.map((day) => (
            <div
              key={day}
              className="border p-2 sm:p-3 text-center font-semibold bg-blue-100"
            >
              {day}
            </div>
          ))}

          {teacherTimetable.map((row, idx) => (
            <React.Fragment key={idx}>
              <div className="border p-2 sm:p-3 font-semibold bg-blue-50">
                {row.time}
              </div>

              {row.isBreak ? (
                <div className="border p-2 sm:p-3 col-span-6 text-center font-semibold bg-blue-200 text-blue-800">
                  ☕ {row.label}
                </div>
              ) : (
                row.teachers.map((teacher, i) => (
                  <div
                    key={i}
                    className="border p-2 sm:p-3 text-center hover:bg-green-100"
                  >
                    {teacher}
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

export default TeacherTimetable;
