import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import CustomerProvider from "./context/customerContext";
import { Provider as ShoppingCartProvider } from "./context/shoppingCartContext";

import "./App.css";

import AdminPrivateRoute from "./components/PrivateRoutes/AdminPrivateRoute";
import UserPrivateRoute from "./components/PrivateRoutes/UserPrivateRoute";

import Header from "./components/GeneralLayout/Header";
import Footer from "./components/GeneralLayout/Footer";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Basket from "./pages/ShoppingCart";
import Login from "./pages/Login";
import Account from "./pages/Account/Account";
import Books from "./pages/Books";
import OrderCheckout from "./pages/OrderCheckout";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import DashboardBook from "./pages/Admin/DashboardBook";

const AdminApp = () => (
  <Switch>
    <Route exact path="/admin">
      <AdminLogin />
    </Route>
    <AdminPrivateRoute
      exact
      path="/admin/dashboard"
      component={AdminDashboard}
    />
    <AdminPrivateRoute
      exact
      path="/admin/dashboard/newbook"
      component={DashboardBook}
    />
    <AdminPrivateRoute
      exact
      path="/admin/dashboard/book/:isbn"
      component={DashboardBook}
    />
  </Switch>
);

const CustomerApp = () => (
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
      <UserPrivateRoute path="/account" component={Account} />
      <Route exact path="/books">
        <Books />
      </Route>
      <UserPrivateRoute exact path="/checkout" component={OrderCheckout} />
    </Switch>
    <Footer />
  </ShoppingCartProvider>
);

export default () => {
  return (
    <div className="App">
      <Router>
        <CustomerProvider>
          <Switch>
            <Route path="/admin">
              <AdminApp />
            </Route>
            <Route path="/">
              <CustomerApp />
            </Route>
          </Switch>
        </CustomerProvider>
      </Router>
    </div>
  );
};
