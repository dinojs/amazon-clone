import React from "react";
import "./style/CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{}, dispatch] = useStateValue();
  const removeFromCart = () => {
    //Add to basket
    dispatch({
      type: "REMOVE_FROM_CART", //action
      id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        {/* Title */}
        <p className="checkoutProduct__title">{title}</p>
        {/* Price */}
        <p className="checkoutProduct__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>

        {/* Rating */}
        <div className="checkoutProduct__rating">
          {Array(rating) //Display amount of ⭐ according to rating
            .fill() //Fill it with empty
            .map((_) => (
              <span role="img" aria-label="star">
                ⭐
              </span>
            ))}
        </div>

        {/* Remove from cart */}
        <button onClick={removeFromCart}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
