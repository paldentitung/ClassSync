import React from "react";
import MainLayout from "../MainLayout/MainLayout";
import Dashboard from "../public/Dashboard";
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
      </Routes>
    </>
  );
};

export default App;
