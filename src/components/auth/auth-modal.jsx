import React from "react";
import { Form } from "react-final-form";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import TextInputField from "../form-components/text-input";

const AuthModal = ({ newUser, toggle, isOpen }) => {
  const onSubmit = (values) => {
    // send values to either login or register endpoint
    // depending on the value of the newUser prop
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader>{newUser ? "Register" : "Login"}</ModalHeader>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <ModalBody>
              <TextInputField name="username" label="Username" />
              <TextInputField name="password" label="Password" />
              {newUser && <TextInputField name="confirmPassword" label="Password" />}
            </ModalBody>
            <ModalFooter>
              <div className="buttons-wrapper">
                <button type="button">Cancel</button>
                <button type="submit">Submit</button>
              </div>
            </ModalFooter>
          </form>
        )}
      />
    </Modal>
  );
};

export default AuthModal;
