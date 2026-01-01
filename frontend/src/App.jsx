import React, { useContext } from "react";
import MainLayout from "../MainLayout/MainLayout";
import RoleSelection from "../Pages/RoleSelection";
import Dashboard from "../Pages/Dashboard";
import Timetable from "../Pages/Timetable";
import Subjects from "../Pages/Subjects";
import Assignments from "../Pages/Assignments";
import Notes from "../Pages/Notes";
import Exams from "../Pages/Exams";
import Analytics from "../Pages/Analytics";
import Settings from "../Pages/Settings";
import { Route, Routes } from "react-router-dom";
import { RoleContext } from "../Context/RoleContext";
import { Toaster } from "react-hot-toast";
const App = () => {
  const { role } = useContext(RoleContext);
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route
          path={`/dashboard/:${role}`}
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />

        <Route
          path="/timetable"
          element={
            <MainLayout>
              <Timetable />
            </MainLayout>
          }
        />
        <Route
          path="/subjects"
          element={
            <MainLayout>
              <Subjects />
            </MainLayout>
          }
        />
        <Route
          path="/assignments"
          element={
            <MainLayout>
              <Assignments />
            </MainLayout>
          }
        />
        <Route
          path="/notes"
          element={
            <MainLayout>
              <Notes />
            </MainLayout>
          }
        />
        <Route
          path="/exams"
          element={
            <MainLayout>
              <Exams />
            </MainLayout>
          }
        />

        <Route
          path="/analytics"
          element={
            <MainLayout>
              <Analytics />
            </MainLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <MainLayout>
              <Settings />
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
};

export default App;
