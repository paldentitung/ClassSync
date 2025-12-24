import React, { useContext } from "react";
import Header from "../Components/Header";
import { RoleContext } from "../Context/RoleContext";
import StudentAssignments from "./Student/StudentAssignments";
import TeacherAssignment from "./Teacher/TeacherAssignment";
const Assignments = () => {
  const { role } = useContext(RoleContext);
  return (
    <div>
      <Header title="Assignments" />
      <div className="p-6 bg-gray-50 min-h-screen">
        {role === "student" ? <StudentAssignments /> : <TeacherAssignment />}
      </div>
    </div>
  );
};

export default Assignments;
