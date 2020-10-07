import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";
const ProductList = (props) => {
  return (
    <div className="ProductList">
      <h2 className="Topic">{props.title}</h2>
      <div className="MainProduct">
        {props.products.map((product) => (
          <ProductCard
            id={product.id}
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            isSale={product.onSale}
            isNew={product.isNew}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
