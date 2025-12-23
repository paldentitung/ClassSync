import React from "react";
import MainLayout from "../MainLayout/MainLayout";
import Dashboard from "../Pages/Dashboard";
import Timetable from "../Pages/Timetable";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
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
      </Routes>
    </>
  );
};

export default App;
