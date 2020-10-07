import Input from "../shared/components/Input/Input";
import React, { useEffect, useState } from "react";
import mac from "../Images/mac.jfif";
import Button from "../shared/components/Button/Button";
import Icon from "../shared/Icons/Icon";
import "./ProductMain.css";
const ProductMain = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(10);
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
  return (
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
        <Button btnClass="ContactBtn cartadd">Add to Cart</Button>
        <Button btnClass="ContactBtn buynow">Buy Now</Button>
      </div>
    </div>
  );
};

export default ProductMain;
