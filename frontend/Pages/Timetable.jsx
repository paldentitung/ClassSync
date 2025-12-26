import React, { useContext } from "react";
import Header from "../Components/Header";
import { RoleContext } from "../Context/RoleContext";
import StudentTimetable from "./Student/StudentTimetable";
import TeacherTimetable from "./Teacher/teacherTimetable";
const Timetable = () => {
  const { role } = useContext(RoleContext);

  return (
    <div>
      <Header title="Timetable" />
      <section className="w-full px-3 mt-6">
        {role === "student" ? (
          <StudentTimetable />
        ) : role === "teacher" ? (
          <TeacherTimetable />
        ) : (
          <p className="text-center text-gray-500 mt-10">
            Please select a role to view timetable
          </p>
        )}
      </section>
    </div>
  );
};

export default Timetable;
