import React, { useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "../reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [warNoItem, setWarNoItem] = useState("");
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value, prefix) => (
          <>
            <p>
              Subtotal ({basket.length} items ):
              <strong>
                {prefix}
                {value}
              </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <button
        onClick={(e) => {
          if (basket?.length !== 0) {
            history.push("/payment");
          } else {
            setWarNoItem("No items to proceed with.");
          }
        }}
      >
        Proceed to checkout
      </button>
      <h5 style={{ color: "red" }}>{warNoItem}</h5>
    </div>
  );
}

export default Subtotal;
