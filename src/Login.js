import React, { useState } from "react";
import "./style/Login.css";
import { auth } from "./firebase";
import { Link, useHistory } from "react-router-dom";

function Login() {
  //State
  const history = useHistory(); //Push it here when you want to redirect
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault(); //Prevent refresh

    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        //Logged in
        history.push("/");
      })
      .catch((err) => {
        console.log(`Error Logging In ${err}`);
      });
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        history.push("/");
      })
      .catch((err) => {
        console.log(`Error Creating Account ${err}`);
      });
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      {/* Login form */}
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)} //Take change and push to email var
            type="email"
          />
          <h5> Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign in
          </button>
        </form>

        <p>
          By signing-in you agree Trainerzon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and out Interest-Based Ads
          Notice.
        </p>
        <button
          onClick={register}
          type="submit"
          className="login__registerButton"
        >
          Create your Trainerzon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
