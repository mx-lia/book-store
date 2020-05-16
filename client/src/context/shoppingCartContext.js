import createDataContext from "./createDataContext";
import shoppingCartReducer from "../reducers/shoppingCartReducer";
import {
  addItem,
  removeItem,
  incrementItem,
  decrementItem,
} from "../actions/shoppingCartActions.js";

const books = localStorage.getItem("shoppingCart");

export const initialState = {
  isEmpty: !books ? true : JSON.parse(books).length == 0 ? true : false,
  books: books ? JSON.parse(books) : [],
  totalCount: 0,
  totalSum: 0.0,
};

if (books) {
  JSON.parse(books).forEach((element) => {
    initialState.totalCount += Number(element.quantity);
    initialState.totalSum += Number(element.book.price * element.quantity);
  });
}

export const { Context, Provider } = createDataContext(
  shoppingCartReducer,
  { addItem, removeItem, incrementItem, decrementItem },
  initialState
);
