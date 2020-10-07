import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button className={`Button ${props.btnClass}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
