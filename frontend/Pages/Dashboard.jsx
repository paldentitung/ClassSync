import React, { useContext } from "react";
import DashboardStudent from "./Student/DashboardStudent";
import DashboardTeacher from "./Teacher/DashboardTeacher";
import { RoleContext } from "../Context/RoleContext";
import { useParams, Navigate } from "react-router-dom";
const Dashboard = () => {
  const { role } = useContext(RoleContext);
  const { role: routeRole } = useParams();
  if (!role) return <div>Loading...</div>;

  if (routeRole && routeRole !== role) {
    return <Navigate to={`/dashboard/${role}`} replace />;
  }
  return (
    <div>
      {role === "student" ? <DashboardStudent /> : <DashboardTeacher />}
    </div>
  );
};

export default Dashboard;
