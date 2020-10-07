import React from "react";
import "./Icon.css";
import sprite from "./sprite.svg";
const Icon = (props) => {
  return (
    <svg onClick={props.onClick} className={props.clName}>
      <use href={sprite + props.SvgName} />
    </svg>
  );
};

export default Icon;
