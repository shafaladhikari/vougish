import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { CartContext } from "../Cart/cart-context";
import Button from "../shared/components/Button/Button";
const Cart = () => {
  const [products, createProduct] = useState([]);
  const cartContext = useContext(CartContext);
  useEffect(() => {
    const products = cartContext.cart;
    if (products) {
      createProduct(products);
    }
  }, [cartContext]);
  const removeItemHandler = (id) => {
    cartContext.dispatch({ type: "DELETE", id: id });
  };
  return (
    <div className="Cart-Container">
      <h1 className="Topic">Shopping Cart</h1>
      {!products || products.length !== 0 ? (
        products.map((product) => (
          <div className="Item-table" key={product.id}>
            <div className="item-column">
              <h3>Image</h3>
              <img src={product.image} alt={product.name} />
            </div>
            <div className="item-column">
              <h3>Name</h3>
              <span>{product.name}</span>
            </div>
            <div className="item-column">
              <h3>Quantity</h3>
              <span>1</span>
            </div>
            <div className="item-column">
              <h3>Price</h3>
              <span className="cartprice">Rs. {product.price}</span>
            </div>
            <div className="item-column">
              <Button
                onClick={() => removeItemHandler(product.id)}
                btnClass="cartdeletebtn"
              >
                Remove
              </Button>
            </div>
          </div>
        ))
      ) : (
        <div className="Item-table">
          <div className="item-column">
            <h3>Nothing is in the cart</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;