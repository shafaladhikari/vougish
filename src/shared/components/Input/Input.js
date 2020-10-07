import React from "react";
import "./Input.css";

const Input = (props) => {
  let inputElement = null;
  switch (props.inputtype) {
    case "input":
      inputElement = <input className="Input" {...props} />;
      break;
    case "textarea":
      inputElement = <textarea className="TextArea" {...props} />;
      break;
    default:
      inputElement = <input className="Input" {...props} />;
  }
  return (
    <div className={`InputGroup ${props.inputclass}`}>
      {props.label ? <label className="Label">{props.label}</label> : null}
      {inputElement}
    </div>
  );
};

export default Input;
