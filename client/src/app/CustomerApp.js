import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";

import UserPrivateRoute from "../components/PrivateRoutes/UserPrivateRoute";
import Alert from "../components/Alert";
import Header from "../components/GeneralLayout/Header";
import Footer from "../components/GeneralLayout/Footer";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";
import Basket from "../pages/ShoppingCart";
import Login from "../pages/Login";
import Account from "../pages/Account/Account";
import Books from "../pages/Books";
import OrderCheckout from "../pages/OrderCheckout";

import ShoppingCartProvider from "../context/shoppingCartContext";
import { ErrorContext } from "../context/errorContext";

const CustomerApp = () => {
  const { error } = useContext(ErrorContext);

  return (
    <ShoppingCartProvider>
      <Header />
      {error && <Alert />}
      <div className="flex-grow-1">
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
          <UserPrivateRoute path="/account" component={Account} />
          <Route exact path="/books">
            <Books />
          </Route>
          <UserPrivateRoute exact path="/checkout" component={OrderCheckout} />
        </Switch>
      </div>
      <Footer />
    </ShoppingCartProvider>
  );
};

export default CustomerApp;
