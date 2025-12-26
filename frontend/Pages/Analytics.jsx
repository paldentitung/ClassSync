import React, { useContext } from "react";
import Header from "../Components/Header";
import { RoleContext } from "../Context/RoleContext";
import StudentAnalytics from "./Student/StudentAnalytics";
import TeacherAnalytics from "./Teacher/TeacherAnalytics";

const Analytics = () => {
  const { role } = useContext(RoleContext);
  return (
    <div>
      <Header title="Analytics" />
      <div className="p-6">
        {role === "student" ? <StudentAnalytics /> : <TeacherAnalytics />}
      </div>
    </div>
  );
};

export default Analytics;
