import React, { useState } from "react";
import Slick from "../shared/components/Slider/Slick";
import Button from "../shared/components/Button/Button";
import wp1 from "../Images/men.png";
import wp2 from "../Images/women.png";
import "./Home.css";
import ShopCategory from "../components/ShopCategory";
import CategoryList from "../components/CategoryList";
import mac from "../Images/mac.jfif";
import acer from "../Images/electronic.jpeg";
import ProductList from "../components/ProductList";
const Home = () => {
  const products = useState([
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
  const featuredProducts = products.filter((product) => product.isFeatured);
  const newProducts = products.filter((product) => product.isNew);
  return (
    <div className="Home">
      <Slick>
        <div className="MainSlick">
          <img src={wp1} alt="Wallpaper" />
          <div className="Heading">
            Shop Men's Fashion for New Year
            <Button btnClass="ShopBtn">Shop Now</Button>
          </div>
        </div>
        <div className="MainSlick">
          <img src={wp2} alt="Wallpaper" />
          <div className="Heading">
            Shop Women's Fashion for New Year
            <Button btnClass="ShopBtn">Shop Now</Button>
          </div>
        </div>
      </Slick>
      <div className="ShpCatgdiv">
        <ShopCategory ClName="MenFash">
          <span className="Topic">Men Fashion</span>
          <div className="ListCat">
            <CategoryList>
              <div className="List">
                <li>Jackets and Coats</li>
                <li>Jeans</li>
                <li>Loungewears</li>
                <li>Polo Tshirts</li>
                <li>Shirts</li>
                <li>Shorts</li>
              </div>
            </CategoryList>
            <CategoryList>
              <div className="List">
                <li>Jackets and Coats</li>
                <li>Jeans</li>
                <li>Loungewears</li>
                <li>Polo Tshirts</li>
                <li>Shirts</li>
                <li>Shorts</li>
              </div>
            </CategoryList>
          </div>
        </ShopCategory>
        <ShopCategory ClName="WomenFash">
          <span className="Topic">Women Fashion</span>
          <div className="ListCat">
            <CategoryList>
              <div className="List">
                <li>Jackets and Coats</li>
                <li>Dresses</li>
                <li>Jeans</li>
                <li>Lingerie</li>
                <li>Shirts</li>
                <li>Shorts</li>
              </div>
            </CategoryList>
            <CategoryList>
              <div className="List">
                <li>Skirts</li>
                <li>Jeans</li>
                <li>Loungewears</li>
                <li>Tops</li>
                <li>Swimwear</li>
                <li>Trousers</li>
              </div>
            </CategoryList>
          </div>
        </ShopCategory>
      </div>
      <ProductList products={featuredProducts} title="Featured Products" />
      <ProductList products={newProducts} title="New Products" />
    </div>
  );
};

export default Home;
