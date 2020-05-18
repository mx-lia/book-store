import React from "react";
import ShoppingCartReducer from "../reducers/shoppingCartReducer";
import { ErrorContext } from "../context/errorContext";
import {
  addItem,
  removeItem,
  incrementItem,
  decrementItem,
  isInCart,
} from "../actions/shoppingCartActions.js";

export const Context = React.createContext();

const ShoppingCartProvider = ({ children }) => {
  const { setError } = React.useContext(ErrorContext);

  const [state, dispatch] = React.useReducer(ShoppingCartReducer, {
    books: localStorage.getItem("shoppingCart")
      ? JSON.parse(localStorage.getItem("shoppingCart"))
      : [],
    totalCount: 0,
    totalSum: 0.0,
  });

  React.useEffect(() => {
    if (state.books.length !== 0) {
      state.books.forEach((element) => {
        state.totalCount += Number(element.quantity);
        state.totalSum += Number(element.book.price * element.quantity);
      });
    }
  }, []);

  return (
    <Context.Provider
      value={{
        state,
        addItem: addItem(dispatch, setError),
        removeItem: removeItem(dispatch, setError),
        incrementItem: incrementItem(dispatch, setError),
        decrementItem: decrementItem(dispatch, setError),
        isInCart: isInCart(setError),
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ShoppingCartProvider;
