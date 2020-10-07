import React from "react";
import classes from "./Login.module.css";
import Button from "../../shared/components/Button/Button";
import SocialIcons from "../../shared/components/SocialIcons/SocialIcons";
import Input from "../../shared/components/Input/Input.js";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <div className={classes.Login}>
      <h3 className={classes.Header}>Register</h3>
      <SocialIcons />
      <form>
        <Input
          inputtype="input"
          type="text"
          placeholder="Username"
          label="Username"
        />
        <Input
          inputtype="input"
          type="text"
          placeholder="Email"
          label="Username"
        />
        <Input
          inputtype="input"
          type="password"
          placeholder="Password"
          label="Password"
        />
      </form>
      <Button btnClass="LoginBtn">Register</Button>
      <p className={classes.Parag}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Login;
