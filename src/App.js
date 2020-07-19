import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  //Runs based on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((loggedin) => {
      if (loggedin) {
        //The user is logged in
        dispatch({
          type: "SET_USER",
          user: loggedin, //Push auth value
        });
      } else {
        //The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    //If App rerenders, will need to clean up the data layer
    return () => {
      unsubscribe();
    };
  }, []); //[] Run once when component loads

  console.log(user);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          {/* Default */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
