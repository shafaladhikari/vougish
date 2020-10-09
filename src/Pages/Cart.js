import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { CartContext } from "../Cart/cart-context";
import Alert from "../shared/components/Alert/Alert";
import CartItem from "../components/CartItem";

const Cart = () => {
  const [products, createProduct] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const cartContext = useContext(CartContext);
  useEffect(() => {
    const products = cartContext.cart.products;
    if (products) {
      createProduct(products);
    }
  }, [cartContext]);
  const removeItemHandler = (id) => {
    cartContext.dispatch({ type: "DELETE", id: id });
    setShowAlert(true);
  };
  return (
    <React.Fragment>
      {showAlert && (
        <Alert
          hideAlert={() => setShowAlert(false)}
          message={
            cartContext.cart.success
              ? cartContext.cart.success
              : cartContext.cart.error
              ? cartContext.cart.error
              : ""
          }
          className={
            cartContext.cart.success
              ? "Success"
              : cartContext.cart.error
              ? "Error"
              : ""
          }
        />
      )}
      <div className="Cart-Container">
        <h1 className="Topic">Shopping Cart</h1>
        {!products || products.length !== 0 ? (
          products.map((product) => (
            <CartItem key={product.id} removeItem = {removeItemHandler}product={product}/>
          ))
        ) : (
          <div className="Item-table">
            <div className="item-column nothingCart">
              <h3>Nothing is in the cart</h3>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Cart;
