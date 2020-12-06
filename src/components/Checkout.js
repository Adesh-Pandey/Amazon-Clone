import React from "react";

import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  // console.log(basket);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://www.webfx.com/blog/wp-content/uploads/2019/10/example-of-banner-ad-with-value.png"
          alt=""
        />
        <div>
          {/* <h3>Hello, {user ? user.email : " Guest"}</h3> */}
          <h2 className="checkout__title">
            {user
              ? "Hi " + user.email.slice(0, user.email.indexOf("@")) + ", "
              : " Hi Guest, "}{" "}
            Your Shopping Basket
          </h2>

          {basket.map((item) => (
            <CheckoutProduct product={item} />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
