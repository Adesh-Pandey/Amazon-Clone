import { auth } from "../firebase";
import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [errors, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => {
        setError(error.message);
        // alert(error.message);
      });
  };
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => {
        setError(error.message);
        // alert(error.message)
      });
  };

  return (
    <div className="Login">
      <Link to="/">
        <img
          className="Login__logo"
          src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png"
          alt=""
        />
      </Link>
      <div className="Login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            placeholder="eg:Username@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <h5> Password</h5>
          <input
            placeholder="eg:Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button
            type="submit"
            className="Login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to all the clone amazon condition. Please see
          our privacy notices published on the home page, and the cookie notice
          at the same time.
        </p>
        <button onClick={register} className="Login__registerButton">
          Create Amazone Account
        </button>
      </div>
      <h5 className="errorText">{errors}</h5>
    </div>
  );
}

export default Login;
