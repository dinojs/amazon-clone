import React from "react";
import Subtotal from "./Subtotal";
import "./style/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ cart }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://process.filestackapi.com/AazSisOjUQx2TZJQX0PdNz/output=compress:true,quality:70,strip:true/https://klektblog.s3.eu-west-2.amazonaws.com/Banners/mini-campaign+/2500x503-px-dior-giveaway-1-days-left.jpg"
          alt=""
        />
        {cart?.length === 0 ? (
          <div>
            <h2>Your Shopping Cart is empty</h2>
            <p>
              You have no items in your cart. To buy one or more items, click
              "Add to Cart" below the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Cart</h2>
            {/* List all the product in the cart */}
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {cart?.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
