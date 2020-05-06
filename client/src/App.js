import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider as AuthProvider } from "./context/authContext";
import { Provider as ShoppingCartProvider } from "./context/shoppingCartContext";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Basket from "./pages/ShoppingCart";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Books from "./pages/Books";
import OrderCheckout from "./pages/OrderCheckout";
import AdminLogin from "./pages/AdminLogin";

function AdminApp() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/admin">
          <AdminLogin />
        </Route>
      </Switch>
    </div>
  );
}
function CustomerApp() {
  return (
    <div className="App">
      <ShoppingCartProvider>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/book/:isbn">
            <BookDetails />
          </Route>
          <Route exact path="/shoppingcart">
            <Basket />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/account">
            <Account />
          </Route>
          <Route exact path="/books">
            <Books />
          </Route>
          <Route exact path="/checkout">
            <OrderCheckout />
          </Route>
        </Switch>
        <Footer />
      </ShoppingCartProvider>
    </div>
  );
}

export default () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/admin">
            <AdminApp />
          </Route>
          <Route path="/">
            <CustomerApp />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
};
