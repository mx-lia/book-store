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

  const books = localStorage.getItem("shoppingCart")
    ? JSON.parse(localStorage.getItem("shoppingCart"))
    : [];

  const init = (initialState) => {
    let totalSum = Number.parseFloat(0.0);
    let totalCount = 0;
    books.forEach((element) => {
      console.log(element);
      totalSum += Number.parseFloat(element.book.price.toPrecision(4)) * Number.parseFloat(element.quantity.toPrecision(4));
      totalCount += Number(element.quantity);
    });
    return { ...initialState, totalCount: totalCount, totalSum: totalSum };
  };

  const [state, dispatch] = React.useReducer(
    ShoppingCartReducer,
    {
      books: books,
      totalCount: 0,
      totalSum: Number.parseFloat(0.0),
    },
    init
  );

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
