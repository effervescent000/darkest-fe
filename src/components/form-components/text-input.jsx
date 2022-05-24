import React from "react";
import { Field } from "react-final-form";

const TextInputField = ({ label, name }) => {
  return (
    <Field name={name}>
      {({ input }) => (
        <div className="field-wrapper">
          <label>{label}</label>
          <input type="text" {...input} />
        </div>
      )}
    </Field>
  );
};

export default TextInputField;
