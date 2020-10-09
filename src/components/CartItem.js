import React from 'react';
import Button from '../shared/components/Button/Button';
import './CartItem.css';
const CartItem = ({product, removeItem}) => {
    return (
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
      <Button
        onClick={() => removeItem(product.id)}
        btnClass="cartdeletebtn"
      >
        Remove
      </Button>
    </div>
    <div className="item-column">
      <h3>Price</h3>
      <span className="cartprice">Rs. {product.price}</span>
    </div>
  </div> 
  );
}
 
export default CartItem;