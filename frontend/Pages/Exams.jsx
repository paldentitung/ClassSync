import React, { useContext } from "react";
import Header from "../Components/Header";
import StudentExams from "./Student/StudentExams";
import TeacherExams from "./Teacher/TeacherExams";
import { RoleContext } from "../Context/RoleContext";
import { useEffect } from "react";
import { getExams } from "../Services/examsApi";
import { useState } from "react";

const Exams = () => {
  const { role } = useContext(RoleContext);
  const [exams, setExams] = useState([]);
  useEffect(() => {
    const fetchExams = async () => {
      const data = await getExams();
      if (data) {
        setExams(data);
      }
    };
    fetchExams();
  }, []);
  return (
    <div>
      <Header title="Exams" />
      <div className="p-6">
        {role === "student" ? (
          <StudentExams exams={exams} />
        ) : (
          <TeacherExams exams={exams} setExams={setExams} />
        )}
      </div>
    </div>
  );
};

export default Exams;
