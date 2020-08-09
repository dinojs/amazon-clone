import React from "react";
import "./style/Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_FT_COVIDUPDATE_XSite_3000x1200_PV_en-GB._CB408004052_.jpg"
        alt=""
      />

      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="1"
          title="Nike SB x Ben & Jerry’s Dunk Low 'Chunky Dunky' (2020)"
          price={6999.99}
          rating={5}
          image="https://cdn.filestackcontent.com/CyHCUoLvSTc5NJ4qCkuT"
        />

        <Product
          id="2"
          title="Nike SB Dunk Low x Grateful Dead Bears Green (2020)"
          price={3999.99}
          rating={1}
          image="https://cdn.filestackcontent.com/ajMc3K2IRe2WCI2y4LaW"
        />

        <Product
          id="3"
          title="Nike Air Jordan Union LA Nike AJ I 1 Retro High OG Varsity Red"
          price={1999.99}
          rating={3}
          image="https://cdn.filestackcontent.com/Fguy8GeRwC3rompWZlcw"
        />
      </div>

      <div className="home__row">
        <Product
          id="4"
          title="Nike SB x Ben & Jerry’s Dunk Low 'Chunky Dunky' (2020)"
          price={999.99}
          rating={4}
          image="https://cdn.filestackcontent.com/C5yVc5K1R2mBiQ77ad7w"
        />

        <Product
          id="5"
          title="Supreme x The North Face Mountain TNF Parka Blue White (FW17)"
          price={799.99}
          rating={4}
          image="https://cdn.filestackcontent.com/BG6PdKOeRtigHXAWIOYl"
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
