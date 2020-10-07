import React from "react";
import classes from "./SocialIcons.module.css";
import facebook from "../../Icons/facebook.png";
import google from "../../Icons/google.png";

const SocialIcons = () => {
  return (
    <div className={classes.SocialIcons}>
      <img src={facebook} className={classes.Icon} alt="Login with Facebook" />
      <img src={google} className={classes.Icon} alt="Login with Google" />
    </div>
  );
};

export default SocialIcons;
