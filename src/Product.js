import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{}, dispatch] = useStateValue();
  const addToCart = () => {
    //Add to basket
    dispatch({
      type: "ADD_TO_CART", //action
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating) //Display amount of ⭐ according to rating
            .fill() //Fill it with empty
            .map((_) => (
              <span role="img" aria-label="star">
                ⭐
              </span>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToCart}> Add to Cart</button>
    </div>
  );
}

export default Product;
