import React from "react";
import classes from "./NavHeader.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Logo from "../Logo/Logo";
import NavItems from "./NavItems";
import { Link } from "react-router-dom";

const NavHeader = (prop) => {
  return (
    <nav className={classes.NavHeader}>
      <Link to="/">
        <Logo />
      </Link>
      <NavItems />
      <SearchBar />
    </nav>
  );
};

export default NavHeader;
