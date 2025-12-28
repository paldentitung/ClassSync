import React from "react";
import Header from "../Components/Header";
import MainButton from "../Components/MainButton";
import {
  FaBook,
  FaClipboardList,
  FaTasks,
  FaCalendarAlt,
  FaFileAlt,
  FaCalendar,
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
const DashboardTeacher = () => {
  // Example data for teacher
  const todayClasses = [
    { time: "10:00 AM", subject: "Data Structures", className: "CS101" },
    { time: "11:00 AM", subject: "Algorithms", className: "CS102" },
    { time: "12:00 PM", subject: "Database Systems", className: "CS103" },
  ];

  const assignmentsToGrade = [
    { name: "Database Project", students: 12 },
    { name: "Math Assignment", students: 18 },
    { name: "React Project", students: 15 },
  ];

  const upcomingExams = [
    { exam: "Math Midterm", className: "CS101", pendingGrades: 12 },
    { exam: "Data Structures Final", className: "CS102", pendingGrades: 20 },
  ];

  const upcomingEvents = [
    { event: "Seminar: AI & Technology", date: "April 30, 2024" },
    { event: "Workshop: React Advanced", date: "May 02, 2024" },
  ];
  const barData = [
    { name: "Assignments Submitted", value: 45 },
    { name: "Assignments Pending", value: 12 },
    { name: "Exams Completed", value: 8 },
    { name: "Exams Upcoming", value: 3 },
    { name: "Notes Uploaded", value: 20 },
  ];

  const pieData = [
    { name: "Assignments", value: 50 },
    { name: "Exams", value: 30 },
    { name: "Notes", value: 20 },
  ];

  const COLORS = ["#3b82f6", "#f59e0b", "#10b981"];
  return (
    <section>
      <Header title="Dashboard" />
      <div className=" p-3 md:p-6 flex flex-col gap-5">
        <div>
          <span className="text-2xl font-semibold">
            Welcome Back, Professor!
          </span>
        </div>

        {/* Overview Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="flex justify-between items-center bg-[#2765d9]/80 h-32 rounded-2xl px-5 py-3 text-white shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col gap-3">
              <span className="text-sm md:text-lg">Total Classes</span>
              <span className="text-2xl md:text-4xl">
                {todayClasses.length}
              </span>
            </div>
            <FaBook size={30} />
          </div>

          <div className="flex justify-between items-center bg-amber-500 h-32 rounded-2xl px-5 py-3 text-white shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col gap-3">
              <span className="text-sm md:text-lg">Assignments to Grade</span>
              <span className="text-2xl md:text-4xl">
                {assignmentsToGrade.length}
              </span>
            </div>
            <FaClipboardList size={30} />
          </div>

          <div className="flex justify-between items-center bg-[#69ab1f] h-32 rounded-2xl px-5 py-3 text-white shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col gap-3">
              <span className="text-sm md:text-lg">Exams to Conduct</span>
              <span className="text-2xl md:text-4xl">
                {upcomingExams.length}
              </span>
            </div>
            <FaTasks size={30} />
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Bar Chart */}
          <div className="bg-white p-5 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-4">Teacher Overview</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 8, 8]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-4">
              Activity Distribution
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {pieData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
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
              {todayClasses.map((cls, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center p-3 rounded-md hover:bg-gray-100 transition"
                >
                  <div className="flex gap-2 items-center">
                    <FaBook className="text-blue-500" />
                    <span className="font-medium text-gray-700">
                      {cls.time}
                    </span>
                    <span className="font-medium text-gray-900">
                      - {cls.subject}
                    </span>
                  </div>
                  <span className="text-gray-600">{cls.className}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Assignments to Grade */}
          <div className="col-span-1 md:col-span-2 shadow-md bg-white p-4 rounded-xl flex flex-col gap-3">
            <span className="text-lg font-semibold text-gray-800 mb-2 block">
              Assignments to Grade
            </span>
            <div className="flex flex-col gap-2">
              {assignmentsToGrade.map((assignment, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center border-gray-300 px-2 py-3 rounded-md transition-all duration-300 hover:bg-gray-100"
                >
                  <div className="flex items-center gap-2">
                    <FaFileAlt className="text-blue-500" />
                    <span>{assignment.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {assignment.students} students
                  </span>
                </div>
              ))}
            </div>
            <div>
              <MainButton name="Add Assignment" />
            </div>
          </div>

          {/* Upcoming Exams */}
          <div className="col-span-1 md:col-span-1 shadow-md bg-white p-4 rounded-xl flex flex-col gap-4">
            <span className="text-lg font-semibold text-gray-800">
              Upcoming Exams
            </span>
            <div className="flex flex-col gap-3 p-2">
              {upcomingExams.map((exam, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt size={18} />
                    <span>{exam.exam}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {exam.className} - Pending Grades: {exam.pendingGrades}
                  </div>
                </div>
              ))}
              <MainButton name="Create Exam" />
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="col-span-1 md:col-span-2 shadow-md bg-white p-4 rounded-xl flex flex-col gap-2">
            <span className="text-lg font-semibold text-gray-800 mb-2 block">
              Upcoming Events
            </span>
            <div className="flex flex-col gap-3">
              {upcomingEvents.map((evt, idx) => (
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
              <MainButton name="Add Event" />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default DashboardTeacher;
