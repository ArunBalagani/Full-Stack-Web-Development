import React, { useReducer } from "react";
import "../styles.css";
import groceriesData from "../item.js";

const ShoppingCart = () => {
  let initialValue = [];
  let cartReducer = (cartItems, action) => {
    console.log(cartItems);
    console.log(action.payload);
    switch (action.type) {
      case "addToCartItems":
        return [...cartItems, ...action.payload];
      case "removeFromCartItem":
        return cartItems.filter((item) => item.id !== action.payload);
      case "updateQuantityItem":
        return cartItems.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        );
      case "clearCart":
        return []; // Clear all items from the cart
      default:
        return cartItems;
    }
  };

  let [cartItems, dispatch] = useReducer(cartReducer, initialValue);

  let addToCart = (items) => {
    dispatch({ type: "addToCartItems", payload: items });
  };
  let removeFromCart = (id) => {
    dispatch({ type: "removeFromCartItem", payload: id });
  };
  let updateQuantity = (id, quantity) => {
    dispatch({ type: "updateQuantityItem", payload: { id, quantity } });
  };
  let clearAllToCart = () => {
    dispatch({ type: "clearCart" }); 
  };

  return (
    <div className="cart-container">
     
<div className="cart-card">
<div>ShoppingCart</div>
      <button onClick={() => addToCart(groceriesData)}>Add To Cart</button>
      <button onClick={() => removeFromCart(1)}>Remove from Cart</button>
      <button onClick={() => updateQuantity(3, 20)}>Update Quantity</button>
      <button onClick={() => clearAllToCart()}>Clear All</button>
      </div>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id}>
            <h2>{item.id}</h2>
            <img src={item.image} width="200px" height="200px" alt={item.name} />
            <h3>{item.name}</h3>
            <div>Quantity: {item.quantity}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
