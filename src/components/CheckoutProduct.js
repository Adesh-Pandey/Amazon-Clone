import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct(productInfo, removeFromBasket) {
  const [basket, dispatch] = useStateValue();

  function removeFromBasket() {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: productInfo.product.id,
    });
  }

  return (
    <div className="checkoutProduct">
      <img
        alt=""
        src={productInfo.product.image}
        className="checkoutProduct__image"
      />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{productInfo.product.title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{productInfo.product.price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(productInfo.product.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button
          className="checkoutProduct__button"
          id={productInfo.product.id}
          onClick={() => removeFromBasket()}
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
