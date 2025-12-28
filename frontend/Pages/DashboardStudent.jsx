import React from "react";
import Header from "../Components/Header";
import MainButton from "../Components/MainButton";
import {
  FaBook,
  FaClipboardList,
  FaTasks,
  FaCalendar,
  FaFileAlt,
  FaCalendarAlt,
  FaBell,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const DashboardStudent = () => {
  const data = [
    { name: "Submitted", value: 30 },
    { name: "Pending", value: 20 },
  ];

  const examData = [
    { id: 1, name: "Completed", value: 70 },
    { id: 2, name: "Upcoming", value: 89 },
  ];
  const COLORS = ["#22c55e", "#f97316"];

  return (
    <section>
      <Header title="Dashboard" />
      <div className=" p-3 md:p-6 flex flex-col gap-5">
        <div>
          <span className="text-2xl font-semibold">Welcome Back, Palden!</span>
        </div>

        <div className="flex flex-col gap-10">
          {/* Overview Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="flex justify-between items-center bg-[#2765d9]/80 h-32 rounded-2xl px-5 py-3 text-white transition-all duration-300 shadow-md hover:shadow-lg">
              <div className="flex flex-col gap-3">
                <span className="text-sm md:text-lg">Total Subjects</span>
                <span className="text-2xl md:text-4xl">5</span>
              </div>
              <FaBook size={30} />
            </div>

            <div className="flex justify-between items-center bg-amber-500 h-32 rounded-2xl px-5 py-3 text-white transition-all duration-300 shadow-md hover:shadow-lg">
              <div className="flex flex-col gap-3">
                <span className="text-sm md:text-lg">Pending Assignments</span>
                <span className="text-2xl md:text-4xl">12</span>
              </div>
              <FaClipboardList size={30} />
            </div>

            <div className="flex justify-between items-center bg-[#69ab1f] h-32 rounded-2xl px-5 py-3 text-white transition-all duration-300 shadow-md hover:shadow-lg">
              <div className="flex flex-col gap-3">
                <span className="text-sm md:text-lg">
                  Completed Assignments
                </span>
                <span className="text-2xl md:text-4xl">6</span>
              </div>
              <FaTasks size={30} />
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl shadow flex p-4 flex-col space-y-3.5 ">
              <h3 className="font-semibold mb-4">Assignments Status</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 8, 8]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow">
              <h3 className="font-semibold mb-4">Exams Overview</h3>

              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={examData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                  >
                    {examData.map((data, index) => (
                      <Cell
                        dataKey="value"
                        fill={COLORS[index]}
                        key={data.id}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Dashboard Content */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Today's Classes */}
            <div className="col-span-1 md:col-span-1 shadow-md bg-white p-4 rounded-xl flex flex-col gap-4">
              <span className="text-lg font-semibold text-gray-800">
                Today's Classes
              </span>
              <div className="flex flex-col gap-2">
                {[
                  {
                    time: "10:00 AM",
                    subject: "Data Structures",
                    prof: "Prof. Smith",
                    icon: <FaBook className="text-blue-500" />,
                  },
                  {
                    time: "11:00 AM",
                    subject: "Algorithms",
                    prof: "Prof. Doe",
                    icon: <FaBook className="text-blue-500" />,
                  },
                  {
                    time: "12:00 PM",
                    subject: "Database Systems",
                    prof: "Prof. Lee",
                    icon: <FaBook className="text-blue-500" />,
                  },
                ].map((cls, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-3 rounded-md hover:bg-gray-100 transition"
                  >
                    <div className="flex gap-2 items-center">
                      {cls.icon}
                      <span className="font-medium text-gray-700">
                        {cls.time}
                      </span>
                      <span className="font-medium text-gray-900">
                        - {cls.subject}
                      </span>
                    </div>
                    <span className="text-gray-600">{cls.prof}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Assignments */}
            <div className="col-span-1 md:col-span-2 shadow-md bg-white p-4 rounded-xl flex flex-col gap-3">
              <span className="text-lg font-semibold text-gray-800 mb-2 block">
                Upcoming Assignments
              </span>
              <div className="flex flex-col gap-2">
                {[
                  { name: "Database Project", due: "April 25" },
                  { name: "Math Assignment", due: "April 26" },
                  { name: "React Project", due: "April 28" },
                ].map((assignment, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center border-gray-300 px-2 py-3 rounded-md transition-all duration-300 hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      <FaFileAlt className="text-blue-500" />
                      <span>{assignment.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      Due: {assignment.due}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <MainButton name="View All" />
              </div>
            </div>

            {/* Exams / Countdown */}
            <div className="col-span-1 md:col-span-1 shadow-md bg-white p-4 rounded-xl flex flex-col gap-4">
              <span className="text-lg font-semibold text-gray-800">
                Upcoming Exam
              </span>
              <div className="flex flex-col gap-3 p-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="" size={18} />
                    <span>Mathematics Midterm</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Date: May 10, 2024
                  </div>
                </div>

                <span className="bg-(--mainColor) w-fit px-5 py-2 text-white rounded-md">
                  in 14 days
                </span>

                <div className="flex gap-2">
                  <span className="border border-gray-500 px-2 py-3 rounded-md transition-all duration-300 hover:bg-gray-100 text-sm">
                    14 Days
                  </span>
                  <span className="border border-gray-500 px-2 py-3 rounded-md transition-all duration-300 hover:bg-gray-100 text-sm">
                    03 hours
                  </span>
                  <span className="border border-gray-500 px-2 py-3 rounded-md transition-all duration-300 hover:bg-gray-100 text-sfm">
                    12 min
                  </span>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="col-span-1 md:col-span-2 shadow-md bg-white p-4 rounded-xl flex flex-col gap-2">
              <span className="text-lg font-semibold text-gray-800 mb-2 block">
                Upcoming Events
              </span>

              <div className="flex flex-col gap-3">
                {[
                  { event: "Seminar: AI & Technology", date: "April 30, 2024" },
                  { event: "Workshop: React Advanced", date: "May 02, 2024" },
                ].map((evt, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center border-gray-300 px-2 py-3 rounded-md transition-all duration-300 hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-purple-500" />
                      <span>{evt.event}</span>
                    </div>
                    <span>{evt.date}</span>
                  </div>
                ))}
              </div>
              <div>
                <MainButton name="View Calendar" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default DashboardStudent;
