import React from "react";

const StudentAssignments = ({ assignments }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  ">
      {assignments?.map((assignment) => (
        <div
          key={assignment.id}
          className="flex  flex-col bg-white p-3 gap-2 rounded-2xl shadow transition-all duration-300 hover:shadow-md "
        >
          <div className="flex  justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-[16px]">
                {assignment.title}
              </span>
              <span className="text-gray-700">{assignment.subject}</span>
            </div>
            <button className="text-[13px] bg-(--mainColor) px-3 py-1 text-white rounded-md transition opacity-75 hover:opacity-100 hover:cursor-pointer">
              Submit
            </button>
          </div>
          <div className="flex justify-between items-center text-gray-400 text-sm flex-1">
            <span>{assignment.dueDate}</span>
            <span>{assignment.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentAssignments;
