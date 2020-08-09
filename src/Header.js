import React from "react";
import "./style/Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ cart, user }] = useStateValue();

  //if clicked, logs out
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      {/* Logo */}
      <Link to="/ ">
        {/*Make logo clickable*/}
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Logo"
        />
      </Link>
      <div className="header__search">
        {/* Search*/}
        <input type="text" className="header__searchInput" />

        {/* Logo box */}
        <img src="/icons/search.svg" alt="" class="header__searchIcon" />
      </div>

      {/* Links */}
      <div className="header__nav"></div>
      {/*1st Link */}
      {/* Redirect if the user is not logged in */}
      <Link to={!user && "/login"} className="header__link">
        <div onClick={login} className="header__option">
          <span className="header__optionLineOne">Hello {user?.email}</span>
          {/* If logged in : else */}
          <span className="header__optionLineTwo">
            {user ? "Sign Out" : "Sign In"}
          </span>
        </div>
      </Link>

      {/*2nd Link */}
      <Link to="/" className="header__link">
        {/*href refreshes page, link does not*/}
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
      </Link>

      {/*3rd Link */}
      <Link to="/" className="header__link">
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Membership</span>
        </div>
      </Link>

      {/* Basket */}
      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
          {/* Basket */}
          <img
            src="/icons/bag-fill.svg"
            alt=""
            class="header__searchIcon header__basketCount"
          />
          {/* Number of items, ? Optional */}
          <span className="header__optionLineTwo">{cart?.length}</span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
