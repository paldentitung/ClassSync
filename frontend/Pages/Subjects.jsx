import React, { useContext } from "react";
import Header from "../Components/Header";
import StudentSubjects from "./Student/StudentSubjects";
import TeacherSubject from "./Teacher/TeacherSubject.jsx";
import { RoleContext } from "../Context/RoleContext.jsx";

const Subjects = () => {
  const { role } = useContext(RoleContext);
  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="My Subjects" />
      <div className="">
        {role === "student" ? <StudentSubjects /> : <TeacherSubject />}
      </div>
    </div>
  );
};

export default Subjects;
