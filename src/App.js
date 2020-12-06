import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Checkout from "./components/Checkout.js";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";
import React, { useEffect } from "react";
import Footer from "./components/Footer";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Payment from "./components/Payment";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //only runs onces

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade">
                <Switch location={location}>
                  <Route path="/checkout">
                    <div className="page">
                      <Header />
                      <Checkout />
                      <Footer />
                    </div>
                  </Route>
                  <Route path="/login">
                    <div className="page">
                      <Login />
                    </div>
                  </Route>
                  <Route path="/payment">
                    <div className="page">
                      <Header />
                      <Payment />
                    </div>
                  </Route>

                  <Route path="/">
                    <div className="page">
                      <Header />
                      <Home />
                      <Footer />
                    </div>
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
