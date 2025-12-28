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
const TeacherAnalytics = () => {
  const data = {
    students: 120,
    subjects: 4,
    assignmentsCreated: 10,
    pendingReviews: 6,
    notesUploaded: 18,
    examsCreated: 5,
  };
  const teacherData = [
    { name: "Assignments Submitted", value: 45 },
    { name: "Assignments Pending", value: 12 },
    { name: "Exams Completed", value: 8 },
    { name: "Exams Upcoming", value: 3 },
    { name: "Notes Uploaded", value: 20 },
  ];
  const pieData = [
    { name: "Submitted", value: 45 },
    { name: "Pending", value: 12 },
  ];
  const COLORS = ["#22c55e", "#f97316"];

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold mb-8">Analytics Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="bg-white p-4 rounded-2xl shadow">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={teacherData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 8, 8]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label
              >
                {pieData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <StatCard title="Students" value={data.students} />
        <StatCard title="Subjects" value={data.subjects} />
        <StatCard title="Assignments Created" value={data.assignmentsCreated} />
        <StatCard title="Pending Reviews" value={data.pendingReviews} />
        <StatCard title="Notes Uploaded" value={data.notesUploaded} />
        <StatCard title="Exams Created" value={data.examsCreated} />
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

export default TeacherAnalytics;
