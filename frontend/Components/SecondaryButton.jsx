import React from "react";

const SecondaryButton = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        px-4 py-2 bg-gray-500  text-white text-sm rounded-md  shadow   hover:bg-gray-600  transition duration-200  ease-in-out focus:outline-none  focus:ring-2 focus:ring-gray-400
      "
    >
      {name}
    </button>
  );
};

export default SecondaryButton;
