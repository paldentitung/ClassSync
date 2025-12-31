import React, { useContext } from "react";
import Header from "../Components/Header";
import { RoleContext } from "../Context/RoleContext";
import StudentNotes from "./Student/StudentNotes";
import TeacherNotes from "./Teacher/TeacherNotes";
import { useEffect } from "react";
import { getNotes } from "../Services/notesApi";
import { useState } from "react";

const Notes = () => {
  const { role } = useContext(RoleContext);
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchNotes = async () => {
      const data = await getNotes();
      if (data) {
        setNotes(data);
      }
    };
    fetchNotes();
  }, []);
  return (
    <div>
      {" "}
      <Header title="Notes" />
      <div className="p-6">
        {role === "student" ? (
          <StudentNotes notes={notes} />
        ) : (
          <TeacherNotes notes={notes} />
        )}
      </div>
    </div>
  );
};

export default Notes;
