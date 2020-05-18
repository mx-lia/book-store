const ShoppingCartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_SUCCESS":
      return {
        ...state,
        books: action.payload,
        totalCount: state.totalCount + 1,
        totalSum: state.totalSum + action.price,
      };
    case "REMOVE_ITEM_SUCCESS":
      return {
        ...state,
        books: action.payload,
        totalCount: state.totalCount - 1,
        totalSum: state.totalSum - action.price,
      };
    case "INCREMENT_ITEM_SUCCESS":
      return {
        ...state,
        books: action.payload,
        totalCount: state.totalCount + 1,
        totalSum: state.totalSum + action.price,
      };
    case "DECREMENT_ITEM_SUCCESS":
      return {
        ...state,
        books: action.payload,
        totalCount: state.totalCount - 1,
        totalSum: state.totalSum - action.price,
      };
    default:
      return state;
  }
};

export default ShoppingCartReducer;
