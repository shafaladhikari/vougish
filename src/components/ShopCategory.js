import React from "react";
import "./ShopCategory.css";
const ShopCategory = (props) => {
  return <div className={`ShopCategory ${props.ClName}`}>{props.children}</div>;
};

export default ShopCategory;
