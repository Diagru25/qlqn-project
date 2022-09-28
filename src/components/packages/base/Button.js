import React from "react";
import "./Button.css";

const Button = ({ type, children, onClick, ...rest }) => {
  return (
    <button className="form-btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
