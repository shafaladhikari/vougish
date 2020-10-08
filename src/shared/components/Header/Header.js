import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import Icon from "../../Icons/Icon";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Cart/cart-context";
const Header = (props) => {
  const cartContext = useContext(CartContext);
  const [cart, setCartNumber] = useState({ cartNumber: 0, totalPrice: 0.0 });
  useEffect(() => {
    if (cartContext.cart) {
      const cart = cartContext.cart.products;
      const cartNumber = cart.length;
      let totalPrice = 0;
      cart.map((product) => (totalPrice = totalPrice + product.price));
      setCartNumber((prev) => ({ ...prev, cartNumber, totalPrice }));
    }
  }, [cartContext]);
  return (
    <header className="Header">
      <span className="HelpSpan">Need Help? 9862373901</span>
      <span className="HelpSpan">
        Vougish. The Only Genuine Ecommerce In Nepal
      </span>
      <div className="CItems">
        <div className="UserOut Menu">
          <Icon SvgName="#icon-menu" clName="User" />
        </div>
        <div className="UserOut">
          <Icon SvgName="#icon-heart" clName="User" />
        </div>
        <div className="UserOut">
          <Icon SvgName="#icon-user1" clName="User" />
        </div>
        <Link to="/cart">
          <div className="CartOut">
            <span className="CartNumber">{cart.cartNumber}</span>
            <Icon SvgName="#icon-shopping-cart" clName="Cart" />
            <span>Rs {cart.totalPrice}</span>
          </div>
        </Link>
      </div>
    </header>
  );
};
export default Header;
