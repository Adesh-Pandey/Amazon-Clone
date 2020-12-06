import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { createBrowserHistory } from "history";
//import SearchIcon from "@material-ui/icons/Search";

function Header() {
  const history = createBrowserHistory();

  const [{ basket, user }] = useStateValue();

  const handleAuthentication = (e) => {
    if (user) {
      e.preventDefault();
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link
        to="/"
        onClick={(e) => {
          if (history.location.pathname === "/") {
            e.preventDefault();
          }
        }}
      >
        <img
          className="header__logo"
          src="https://www.jing.fm/clipimg/full/81-815835_amazon-logo-png-amazon-logo-white.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input
          type="text"
          placeholder="🔎Search"
          className="header__searchInput"
        />
        <i className="fas fa-search-plus header__searchIcon"></i>
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              {user ? user.email : "Hello Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link
          to="/checkout"
          onClick={(e) => {
            if (history.location.pathname === "/checkout") {
              e.preventDefault();
            }
          }}
        >
          <div className="header__optionBasket">
            {/* <ShoppingBasketIcon /> */}

            <i className="fas fa-cart-plus "></i>

            <span className="header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
