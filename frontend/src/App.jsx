import React from "react";
import MainLayout from "../MainLayout/MainLayout";
import Dashboard from "../Pages/Dashboard";
import Timetable from "../Pages/Timetable";
import Subjects from "../Pages/Subjects";
import Assignments from "../Pages/Assignments";
import Notes from "../Pages/Notes";
import Exams from "../Pages/Exams";
import StudyPlanner from "../Pages/StudyPlanner";
import Analytics from "../Pages/Analytics";
import Settings from "../Pages/Settings";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
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
        path="/study-planner"
        element={
          <MainLayout>
            <StudyPlanner />
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
  );
};

export default App;
