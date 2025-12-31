import React, { useContext } from "react";
import Header from "../Components/Header";
import { RoleContext } from "../Context/RoleContext";
import StudentAssignments from "./Student/StudentAssignments";
import TeacherAssignment from "./Teacher/TeacherAssignment";
import { useEffect } from "react";
import { getAssignments } from "../Services/assignmentsApi";
import { useState } from "react";
const Assignments = () => {
  const { role } = useContext(RoleContext);
  const [assignments, setAssignments] = useState([]);
  useEffect(() => {
    const fetchAssignments = async () => {
      const data = await getAssignments();
      if (data) {
        setAssignments(data);
      }
    };
    fetchAssignments();
  }, []);
  return (
    <div>
      <Header title="Assignments" />
      <div className="p-6 bg-gray-50 min-h-screen">
        {role === "student" ? (
          <StudentAssignments assignments={assignments} />
        ) : (
          <TeacherAssignment assignments={assignments} />
        )}
      </div>
    </div>
  );
};

export default Assignments;
