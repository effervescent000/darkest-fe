import React, { useState } from "react";

import AuthModal from "./auth-modal";

const AuthPanel = ({ hidden }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newUser, setNewUser] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div
      className="auth-panel"
      style={hidden ? { transform: "scaleY(0)" } : { transform: "scaleY(1)" }}
    >
      <div
        className="option"
        onClick={() => {
          setNewUser(true);
          toggleModal();
        }}
      >
        Register
      </div>
      <div
        className="option"
        onClick={() => {
          setNewUser(false);
          toggleModal();
        }}
      >
        Login
      </div>
      <AuthModal newUser={newUser} isOpen={modalIsOpen} toggle={toggleModal} />
    </div>
  );
};

export default AuthPanel;
