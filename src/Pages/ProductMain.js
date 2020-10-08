import Input from "../shared/components/Input/Input";
import React, { useEffect, useState, useContext } from "react";
import mac from "../Images/mac.jfif";
import Button from "../shared/components/Button/Button";
import Icon from "../shared/Icons/Icon";
import acer from "../Images/electronic.jpeg";
import ProductList from "../components/ProductList";
import { CartContext } from "../Cart/cart-context";
import "./ProductMain.css";
import Alert from "../shared/components/Alert/Alert";

const ProductMain = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(10);
  const [showAlert, setShowAlert] = useState(false);
  const cartContext = useContext(CartContext);
  useEffect(() => {
    const product = {
      id: 1,
      name: "Macbook Pro 14 8gb/256gb",
      image: mac,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ducimus fugit. Minima aliquam et inventore iure corporis similique, enim placeat tempore iste ullam quas incidunt, aut assumenda numquam commodi ut?",
      stock: 10,
      price: 15000,
      isFeatured: true,
      onSale: true,
      isNew: false,
    };
    setProduct(product);
  }, []);
  const inputChangeHandler = (e) => {
    setQuantity(e.target.value);
  };
  const productsRelated = useState([
    {
      id: 1,
      name: "Macbook Pro 14 8gb/256gb",
      image: mac,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ducimus fugit. Minima aliquam et inventore iure corporis similique, enim placeat tempore iste ullam quas incidunt, aut assumenda numquam commodi ut?",
      stock: 10,
      price: 15000,
      isFeatured: true,
      onSale: true,
      isNew: false,
    },
    {
      id: 2,
      name: "Asus Zenbook Pro Duo",
      image: acer,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ducimus fugit. Minima aliquam et inventore iure corporis similique, enim placeat tempore iste ullam quas incidunt, aut assumenda numquam commodi ut?",
      stock: 15,
      price: 11000,
      isFeatured: false,
      isNew: true,
      onSale: true,
    },
    {
      id: 3,
      name: "Acer Aspire 14",
      image: mac,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ducimus fugit. Minima aliquam et inventore iure corporis similique, enim placeat tempore iste ullam quas incidunt, aut assumenda numquam commodi ut?",
      stock: 15,
      price: 11000,
      isFeatured: true,
      isNew: true,
      onSale: false,
    },
    {
      id: 4,
      name: "Dell Inspiron 3451",
      image: mac,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ducimus fugit. Minima aliquam et inventore iure corporis similique, enim placeat tempore iste ullam quas incidunt, aut assumenda numquam commodi ut?",
      stock: 15,
      price: 11000,
      isFeatured: false,
      isNew: false,
      onSale: true,
    },
    {
      id: 5,
      name: "Samsung Note 9",
      image: acer,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ducimus fugit. Minima aliquam et inventore iure corporis similique, enim placeat tempore iste ullam quas incidunt, aut assumenda numquam commodi ut?",
      stock: 15,
      price: 11000,
      isFeatured: true,
      isNew: true,
      onSale: false,
    },
    {
      id: 6,
      name: "Redmi Note 8 pro",
      image: acer,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ducimus fugit. Minima aliquam et inventore iure corporis similique, enim placeat tempore iste ullam quas incidunt, aut assumenda numquam commodi ut?",
      stock: 15,
      price: 11000,
      isFeatured: false,
      isNew: true,
      onSale: false,
    },
    {
      id: 6,
      name: "Redmi Note 8 pro",
      image: acer,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ducimus fugit. Minima aliquam et inventore iure corporis similique, enim placeat tempore iste ullam quas incidunt, aut assumenda numquam commodi ut?",
      stock: 15,
      price: 11000,
      isFeatured: true,
      isNew: false,
      onSale: false,
    },
  ])[0];
  const addToCartHandler = () => {
    cartContext.dispatch({ type: "ADD", product: product });
    setShowAlert(true);
  };
  return (
    <React.Fragment>
      {showAlert && <Alert message="Added to Cart" className="Success" />}
      <div className="Product-Main">
        <img src={product.image} alt={product.name} />
        <div className="Productabout">
          <h2>{product.name}</h2>
          <div className="RatingIcon">
            <Icon SvgName="#icon-star" />
            <Icon SvgName="#icon-star" />
            <Icon SvgName="#icon-star" />
            <Icon SvgName="#icon-star" />
            <Icon SvgName="#icon-star" clName="ratingnon" />
          </div>
          {product.stock > 0 ? (
            <Button btnClass="cartdeletebtn">In Stock</Button>
          ) : (
            <Button btnClass="cartdeletebtn">Out of Stock</Button>
          )}
          <p>{product.description}</p>
        </div>
        <div className="Product-Price">
          <h1>Rs. {product.price}</h1>
          <h3>Quantity</h3>
          <div className="quantitydiv">
            <Icon
              onClick={() => setQuantity((prev) => prev - 1)}
              SvgName="#icon-circle-with-minus"
            />
            <Input
              type="number"
              min="0"
              max={product.stock}
              value={quantity}
              onChange={inputChangeHandler}
              inputclass="Quantity"
            />
            <Icon
              onClick={() => setQuantity((prev) => prev + 1)}
              SvgName="#icon-circle-with-plus"
            />
          </div>
          <div>
            <input type="checkbox" />I agree with the terms and conditions
          </div>
          <Button btnClass="ContactBtn cartadd" onClick={addToCartHandler}>
            Add to Cart
          </Button>
          <Button btnClass="ContactBtn buynow">Buy Now</Button>
        </div>
      </div>
      <ProductList
        title="Related Products"
        products={productsRelated.slice(0, 4)}
      />
    </React.Fragment>
  );
};

export default ProductMain;
