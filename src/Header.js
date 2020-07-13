import React from 'react'
import './Header.css'
import {Link}  from "react-router-dom"
function  Header() {
    return (
        <nav className="header">
            {/* Logo */}
            <Link to="/ "> {/*Make logo clickable*/}
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo"/>
            </Link>

              {/* Search*/}
              <input type="text" className="header__searchInput"/>


                {/* Logo box */}

                {/* Links */}


                {/* Basket */}
        </nav>
    )
}

export default  Header;
