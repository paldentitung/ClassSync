import React from "react";

const MainButton = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 border-0 shadow-md text-sm rounded-md bg-(--mainColor) text-white opacity-85 transition-all duration-300 hover:cursor-pointer hover:shadow-lg hover:opacity-100"
    >
      {name}
    </button>
  );
};

export default MainButton;
