import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product.js";
import axios from "./axios";

function Home() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/products/view");
      setItems(req.data);
    }
    fetchData();
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={items[0]?.["id"]}
            title={items[0]?.["title"]}
            price={items[0]?.["price"]}
            image={items[0]?.["imageUrl"]}
            rating={items[0]?.["rating"]}
          />
          <Product
            id={items[1]?.["id"]}
            title={items[1]?.["title"]}
            price={items[1]?.["price"]}
            image={items[1]?.["imageUrl"]}
            rating={items[1]?.["rating"]}
          />
        </div>

        <div className="home__row">
          <Product
            id={items[2]?.["id"]}
            title={items[2]?.["title"]}
            price={items[2]?.["price"]}
            image={items[2]?.["imageUrl"]}
            rating={items[2]?.["rating"]}
          />
          <Product
            id={items[3]?.["id"]}
            title={items[3]?.["title"]}
            price={items[3]?.["price"]}
            image={items[3]?.["imageUrl"]}
            rating={items[3]?.["rating"]}
          />

          <Product
            id={items[4]?.["id"]}
            title={items[4]?.["title"]}
            price={items[4]?.["price"]}
            image={items[4]?.["imageUrl"]}
            rating={items[4]?.["rating"]}
          />
        </div>

        <div className="home__row">
          <Product
            id={items[5]?.["id"]}
            title={items[5]?.["title"]}
            price={items[5]?.["price"]}
            image={items[5]?.["imageUrl"]}
            rating={items[5]?.["rating"]}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
