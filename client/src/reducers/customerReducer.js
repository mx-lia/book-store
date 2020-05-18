const CustomerReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "SIGNIN_USER_SUCCESS":
      return { ...state, loading: false };
    case "SIGNUP_USER_SUCCESS":
      return { ...state, loading: false };
    case "SIGNOUT_USER_SUCCESS":
      return { ...state, user: null, loading: false };
    case "SET_USER_SUCCESS":
      return { ...state, user: action.payload.user, loading: false };
    case "SET_USER_FAILURE":
      return { ...state, user: null, loading: false };
    default:
      return state;
  }
};

export default CustomerReducer;
