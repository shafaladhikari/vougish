import React from "react";
import classes from "./SearchBar.module.css";
import Input from "../Input/Input";
// import SearchIcon from "@material-ui/icons/Search";
import Icon from "../../Icons/Icon";

const SearchBar = () => {
  return (
    <div className={classes.SearchBar}>
      <Input
        type="text"
        inputtype="input"
        placeholder="Search"
        inputclass="SearchInput"
      />
      <Icon SvgName="#icon-magnifying-glass" clName="Search" />
    </div>
  );
};

export default SearchBar;
