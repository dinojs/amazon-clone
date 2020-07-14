import React from "react";
import "./Product.css";
function Product({ id, title, price, rating, image }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
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
      <button> Add to cart</button>
    </div>
  );
}

export default Product;
