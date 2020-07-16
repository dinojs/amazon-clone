import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img className="home__image" src="/banner.jpg" alt="" />

      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="1"
          title="Nike SB x Ben & Jerry’s Dunk Low 'Chunky Dunky' (2020)"
          price={6999.99}
          rating={4}
          image="https://cdn.filestackcontent.com/CyHCUoLvSTc5NJ4qCkuT"
        />

        <Product
          id="2"
          title="Nike SB x Ben & Jerry’s Dunk Low 'Chunky Dunky' (2020)"
          price={3999.99}
          rating={4}
          image="https://cdn.filestackcontent.com/C5yVc5K1R2mBiQ77ad7w"
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="Nike SB x Ben & Jerry’s Dunk Low 'Chunky Dunky' (2020)"
          price={1999.99}
          rating={4}
          image="https://cdn.filestackcontent.com/Fguy8GeRwC3rompWZlcw"
        />

        <Product
          id="4"
          title="Nike SB x Ben & Jerry’s Dunk Low 'Chunky Dunky' (2020)"
          price={999.99}
          rating={4}
          image="https://cdn.filestackcontent.com/fS8B4NToTdyJv4MAUnv3"
        />

        <Product
          id="5"
          title="Nike SB x Ben & Jerry’s Dunk Low 'Chunky Dunky' (2020)"
          price={799.99}
          rating={4}
          image="https://cdn.filestackcontent.com/SRjMEIAhSD2L9FCdmhA4"
        />
      </div>

      <div className="home__row">
        <Product
          id="6"
          title="Nike SB x Ben & Jerry’s Dunk Low 'Chunky Dunky' (2020)"
          price={499.99}
          rating={4}
          image="https://cdn.filestackcontent.com/oKmIBkaMQkizsPaLWYw8"
        />
      </div>
    </div>
  );
}

export default Home;
