import React, { useReducer } from "react";

export const CartContext = React.createContext();

const cartReducer = (currentCart, action) => {
  switch (action.type) {
    // case "GET":
    //   const localdata = localStorage.getItem("products");
    //   return JSON.parse(localdata);
    case "ADD":
      const containsObject = (arr, obj) => {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === obj) {
            return true;
          }
        }
        return false;
      };
      console.log(containsObject(currentCart.products, action.product));
      if (!containsObject(currentCart.products, action.product)) {
        localStorage.setItem(
          "products",
          JSON.stringify([...currentCart.products, action.product])
        );
        return {
          products: [...currentCart.products, action.product],
          success: "Added to Cart",
        };
      }
      return {
        products: currentCart.products,
        error: "Already Exists in Cart",
      };
    case "DELETE":
      const newCart = currentCart.products.filter(
        (product) => product.id !== action.id
      );
      localStorage.setItem("products", JSON.stringify(newCart));
      return { products: newCart, success: "Removed Item" };
    default:
      throw new Error("Reducer action gone wrong");
  }
};

const CartContextProvider = (props) => {
  const [cart, dispatch] = useReducer(cartReducer, {}, () => {
    const products = localStorage.getItem("products");
    if (products) {
      return { products: JSON.parse(products), success: "", error: "" };
    }
    return { products: [], success: "", error: "" };
  });
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
