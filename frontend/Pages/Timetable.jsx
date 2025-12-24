import React, { useContext } from "react";
import Header from "../Components/Header";
import { RoleContext } from "../Context/RoleContext";

const Timetable = () => {
  const { role } = useContext(RoleContext); // "student" or "teacher"

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
    {
      time: "9:00 - 9:30",
      isBreak: true,
      label: "Break",
    },
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
    {
      time: "9:00 - 9:30",
      isBreak: true,
      label: "Break",
    },
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

  // Choose timetable data based on role
  const timetableData =
    role === "student" ? studentTimetable : teacherTimetable;
  const tableTitle =
    role === "student"
      ? "Student Timetable (7:00 – 10:30 AM)"
      : role === "teacher"
      ? "Teacher Timetable (7:00 – 10:30 AM)"
      : null;

  return (
    <div>
      <Header title="Timetable" />

      <section className="w-full px-3">
        {role ? (
          <div className="w-full max-w-6xl mx-auto mt-6 bg-white rounded-md shadow">
            <div className="bg-linear-to-r from-(--mainColor) to-(--secondaryColor) rounded-t-md p-4 text-center text-xl text-white">
              {tableTitle}
            </div>

            <div className="overflow-x-auto">
              <div className="grid grid-cols-7 min-w-225 text-xs sm:text-sm">
                {/* Header Row */}
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

                {/* Timetable Rows */}
                {timetableData.map((row, idx) => (
                  <React.Fragment key={idx}>
                    <div className="border p-2 sm:p-3 font-semibold bg-gray-50">
                      {row.time}
                    </div>

                    {row.isBreak ? (
                      <div className="border p-2 sm:p-3 col-span-6 text-center font-semibold bg-yellow-100 text-yellow-800">
                        ☕ {row.label}
                      </div>
                    ) : (
                      (role === "student" ? row.subjects : row.teachers).map(
                        (item, i) => (
                          <div
                            key={i}
                            className="border p-2 sm:p-3 text-center hover:bg-gray-100"
                          >
                            {item}
                          </div>
                        )
                      )
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">
            Please select a role to view timetable
          </p>
        )}
      </section>
    </div>
  );
};

export default Timetable;
