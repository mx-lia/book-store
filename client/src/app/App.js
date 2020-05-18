import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CustomerApp from "./CustomerApp";
import AdminApp from "./AdminApp";

import CustomerProvider from "../context/customerContext";
import { ErrorContext } from "../context/errorContext";

import "./App.css";

export default () => {
  const [error, setError] = useState(null);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <ErrorContext.Provider value={{ error: error, setError: setError }}>
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
        </ErrorContext.Provider>
      </Router>
    </div>
  );
};
