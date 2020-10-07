import React from "react";
import logo from "./logo.jpg";
import logo2 from "./logo2.jpg";
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <img
      src={props.logo2 ? logo2 : logo}
      className={classes.Logo}
      alt="Khukuri"
    />
  );
};

export default Logo;
