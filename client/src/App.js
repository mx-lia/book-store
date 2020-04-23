import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Basket from "./pages/Basket";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Books from "./pages/Books";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/book/:isbn">
            <BookDetails />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
