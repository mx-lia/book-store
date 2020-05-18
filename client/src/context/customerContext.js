import React from "react";
import CustomerReducer from "../reducers/customerReducer";
import { ErrorContext } from "../context/errorContext";
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
  const { setError } = React.useContext(ErrorContext);
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
        signIn: signIn(dispatch, setError),
        signUp: signUp(dispatch, setError),
        signOut: signOut(dispatch, setError),
        setCurrentCustomer: setCurrentCustomer(dispatch, setError),
        updateCustomer: updateCustomer(dispatch, setError),
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default CustomerProvider;
