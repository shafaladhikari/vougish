import React from "react";
import Icon from "../../Icons/Icon";
import classes from "./NavItems.module.css";
const NavItems = (props) => {
  return (
    <ul className={classes.NavItems}>
      <li>
        Shop <Icon SvgName="#icon-chevron-small-down" clName="NavIcon" />
      </li>
      <li>
        Categories <Icon SvgName="#icon-chevron-small-down" clName="NavIcon" />
      </li>
      <li>Track Order</li>
      <li>Contact</li>
    </ul>
  );
};

export default NavItems;
