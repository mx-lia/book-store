import { initialState } from "../context/shoppingCartContext";

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM_SUCCESS":
      return {
        ...state,
        isEmpty: false,
        books: action.payload,
        totalCount: state.totalCount + 1,
        totalSum: state.totalSum + action.price,
      };
    case "REMOVE_ITEM_SUCCESS":
      return {
        ...state,
        isEmpty: false,
        books: action.payload,
        totalCount: state.totalCount - 1,
        totalSum: state.totalSum - action.price,
      };
    case "INCREMENT_ITEM_SUCCESS":
      return {
        ...state,
        isEmpty: false,
        books: action.payload,
        totalCount: state.totalCount + 1,
        totalSum: state.totalSum + action.price,
      };
    case "DECREMENT_ITEM_SUCCESS":
      return {
        ...state,
        isEmpty: false,
        books: action.payload,
        totalCount: state.totalCount - 1,
        totalSum: state.totalSum - action.price,
      };
    case "EMPTY_SHOPPING_CART":
      return {
        ...state,
        isEmpty: true,
        books: [],
        totalCount: 0,
        totalSum: 0.0,
      };
    default:
      return state;
  }
};

export default shoppingCartReducer;
