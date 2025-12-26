import React, { useContext } from "react";
import Header from "../Components/Header";
import StudentExams from "./Student/StudentExams";
import TeacherExams from "./Teacher/TeacherExams";
import { RoleContext } from "../Context/RoleContext";
const Exams = () => {
  const { role } = useContext(RoleContext);
  return (
    <div>
      <Header title="Exams" />
      <div className="p-6">
        {role === "student" ? <StudentExams /> : <TeacherExams />}
      </div>
    </div>
  );
};

export default Exams;
