import React from "react";
import { useNavigate } from "react-router-dom";
const RoleSelection = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 gap-8 ">
      <div className=" shadow-md p-4 h-full w-full max-w-100 rounded-md flex justify-center items-center flex-col gap-6">
        <h1 className="text-3xl font-bold">ClassSync</h1>
        <p className="text-gray-600">Choose your role to continue</p>
        <div className="flex gap-6">
          <button
            onClick={() => navigate("/dashboard/student")}
            className="px-8 py-4 bg-(--mainColor) text-white rounded-xl  hover:cursor-pointer transition"
          >
            Student
          </button>
          <button
            onClick={() => navigate("/dashboard/teacher")}
            className="px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition hover:cursor-pointer"
          >
            Teacher
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
