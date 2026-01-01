import { useState } from "react";
import { createContext } from "react";

export const ModalContext = createContext();
export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
};
