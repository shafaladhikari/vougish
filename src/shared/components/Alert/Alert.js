import React from "react";
import { useEffect } from "react";
import Icon from "../../Icons/Icon";
import "./Alert.css";
const Alert = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.hideAlert();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [props]);
  const hideAlert = () => {
    props.hideAlert();
  };
  return (
    <div
      id="Alert"
      className={`Alert + ${props.className ? props.className : ""}`}
    >
      <span>{props.message}</span>
      <Icon SvgName="#icon-cross" onClick={hideAlert} />
    </div>
  );
};

export default Alert;
