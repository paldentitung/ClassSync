import React from "react";
import { useContext } from "react";
import { ModalContext } from "../Context/ModalContext";
import { FaTimes } from "react-icons/fa";

const Modal = ({ children }) => {
  const { showModal, setShowModal } = useContext(ModalContext);
  return (
    <>
      {showModal && (
        <div className="h-full w-full fixed inset-0 bg-black/30 text-white flex justify-center items-center z-50">
          <div className="w-full max-w-200 h-auto bg-white text-black p-4 rounded-2xl  ">
            {children}
          </div>
          {/* modal close button */}
          <div
            onClick={() => setShowModal(false)}
            className=" absolute top-5 right-5 bg-white text-black w-10 h-10 flex justify-center items-center "
          >
            <FaTimes size={18} />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
