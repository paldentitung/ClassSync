import React from "react";
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

const StudentAnalytics = () => {
  const stats = {
    subjects: 6,
    assignmentsSubmitted: 8,
    assignmentsPending: 2,
    notesDownloaded: 15,
    examsUpcoming: 1,
    examsCompleted: 3,
  };

  const assignmentData = [
    { name: "Submitted", value: stats.assignmentsSubmitted },
    { name: "Pending", value: stats.assignmentsPending },
  ];

  const examData = [
    { name: "Completed", value: stats.examsCompleted },
    { name: "Upcoming", value: stats.examsUpcoming },
  ];

  const COLORS = ["#22c55e", "#f97316"];

  return (
    <div className="p-6 flex flex-col space-y-5">
      <h2 className="text-3xl font-bold mb-8">My Analytics</h2>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Assignment Chart */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold mb-4">Assignments Status</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={assignmentData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Exams Chart */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold mb-4">Exams Overview</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={examData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label
              >
                {examData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        <StatCard title="Subjects" value={stats.subjects} />
        <StatCard
          title="Assignments Submitted"
          value={stats.assignmentsSubmitted}
        />
        <StatCard
          title="Assignments Pending"
          value={stats.assignmentsPending}
        />
        <StatCard title="Notes Downloaded" value={stats.notesDownloaded} />
        <StatCard title="Upcoming Exams" value={stats.examsUpcoming} />
        <StatCard title="Completed Exams" value={stats.examsCompleted} />
      </div>
    </div>
  );
};

const StatCard = ({ title, value }) => (
  <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
    <p className="text-sm text-gray-500">{title}</p>
    <h3 className="text-3xl font-bold mt-2">{value}</h3>
  </div>
);

export default StudentAnalytics;
