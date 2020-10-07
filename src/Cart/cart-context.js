import React, { useReducer } from "react";

export const CartContext = React.createContext();

const cartReducer = (currentCart, action) => {
  switch (action.type) {
    // case "GET":
    //   const localdata = localStorage.getItem("products");
    //   return JSON.parse(localdata);
    case "ADD":
      localStorage.setItem(
        "products",
        JSON.stringify([...currentCart, action.product])
      );
      return [...currentCart, action.product];
    case "DELETE":
      const newCart = currentCart.filter((product) => product.id !== action.id);
      localStorage.setItem("products", JSON.stringify(newCart));
      return newCart;
    default:
      throw new Error("Reducer action gone wrong");
  }
};

const CartContextProvider = (props) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const products = localStorage.getItem("products");
    if (products) {
      return JSON.parse(products);
    }
    return [];
  });
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
