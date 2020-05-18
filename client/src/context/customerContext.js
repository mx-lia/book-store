import React from "react";
import CustomerReducer from "../reducers/customerReducer";
import {
  signUp,
  signIn,
  signOut,
  setCurrentCustomer,
  updateCustomer,
  me,
} from "../actions/customerActions";

export const Context = React.createContext();

const CustomerProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(CustomerReducer, {
    error: null,
    user: null,
    loading: false,
  });

  React.useEffect(me(dispatch), []);

  return (
    <Context.Provider
      value={{
        state,
        signIn: signIn(dispatch),
        signUp: signUp(dispatch),
        signOut: signOut(dispatch),
        setCurrentCustomer: setCurrentCustomer(dispatch),
        updateCustomer: updateCustomer(dispatch),
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default CustomerProvider;
