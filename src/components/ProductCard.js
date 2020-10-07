import React, { useContext } from "react";
import "./ProductCard.css";
import Button from "../shared/components/Button/Button";
import Icon from "../shared/Icons/Icon";
import { Link } from "react-router-dom";
import { CartContext } from "../Cart/cart-context";
const ProductCard = (props) => {
  const cartContext = useContext(CartContext);
  const addtoCart = () => {
    cartContext.dispatch({ type: "ADD", product: props });
  };
  return (
    <Link to={`/products/${props.id}`}>
      <div className="Card">
        {props.isNew || props.isSale ? (
          <Button btnClass="ProductInf">{props.isNew ? "New" : "Sale"}</Button>
        ) : null}
        <img src={props.image} alt={props.name} />
        <div className="Card__Info">
          <span className="Prod-name">{props.name}</span>
          <span className="Prod-price">Rs. {props.price}</span>
          <Link to="/cart">
            <Button onClick={addtoCart} btnClass="CartButton">
              <Icon clName="CartIcon" SvgName="#icon-shopping-cart" /> Add to
              Cart
            </Button>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
