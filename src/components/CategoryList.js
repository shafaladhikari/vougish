import React from "react";
import "./CategoryList.css";
const CategoryList = (props) => {
  return <div className="CategoryList">{props.children}</div>;
};

export default CategoryList;
