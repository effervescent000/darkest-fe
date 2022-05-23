import React from "react";

const AuthPanel = ({ hidden }) => {
  return (
    <div
      className="auth-panel"
      style={hidden ? { transform: "scaleY(0)" } : { transform: "scaleY(1)" }}
    >
      <div className="option">Register</div>
      <div className="option">Login</div>
    </div>
  );
};

export default AuthPanel;
