import React, { useContext } from "react";
import "./ProductCard.css";
import Button from "../shared/components/Button/Button";
import Icon from "../shared/Icons/Icon";
import { Link } from "react-router-dom";
import { CartContext } from "../Cart/cart-context";
import Alert from "../shared/components/Alert/Alert";
import { useState } from "react";
const ProductCard = (props) => {
  const cartContext = useContext(CartContext);
  const [showAlert, setShowAlert] = useState(false);
  const addtoCart = (e) => {
    cartContext.dispatch({ type: "ADD", product: props });
    setShowAlert(true);
    e.preventDefault();
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
      <Link to={`/products/${props.id}`}>
        <div className="Card">
          {props.isNew || props.isSale ? (
            <Button btnClass="ProductInf">
              {props.isNew ? "New" : "Sale"}
            </Button>
          ) : null}
          <img src={props.image} alt={props.name} />
          <div className="Card__Info">
            <span className="Prod-name">{props.name}</span>
            <span className="Prod-price">Rs. {props.price}</span>
            <Button onClick={addtoCart} btnClass="CartButton">
              <Icon clName="CartIcon" SvgName="#icon-shopping-cart" /> Add to
              Cart
            </Button>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default ProductCard;
