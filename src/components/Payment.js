import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Payment() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          {" "}
          Checkout (<Link to="checkout"> {basket?.length} items </Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address: </h3>
          </div>
          <div className="payment__address">
            <p>{user ? user.email : "Guest Account"}</p>
            {/* <p> 123 React Lane</p> */}
            <input placeholder="Country, State"></input>
            {/* <p>Los Angeles, CA</p> */}
            <br></br>
            <input placeholder="Strit Name, Zip Code"></input>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3> Review Items And Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct product={item} />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method : </h3>
          </div>
          <div className="payment__details">{/* stripe magic */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
