import React, { useContext } from "react";
import Header from "../Components/Header";
import { RoleContext } from "../Context/RoleContext";
import StudentNotes from "./Student/StudentNotes";
import TeacherNotes from "./Teacher/TeacherNotes";

const Notes = () => {
  const { role } = useContext(RoleContext);
  return (
    <div>
      {" "}
      <Header title="Notes" />
      <div className="p-6">
        {role === "student" ? <StudentNotes /> : <TeacherNotes />}
      </div>
    </div>
  );
};

export default Notes;
