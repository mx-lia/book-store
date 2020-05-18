const CustomerReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true, error: null };
    case "SIGNIN_USER_SUCCESS":
      return { ...state, loading: false, error: null };
    case "SIGNUP_USER_SUCCESS":
      return { ...state, loading: false, error: null };
    case "SIGNOUT_USER_SUCCESS":
      return { ...state, user: null, loading: false, error: null };
    case "SET_USER_SUCCESS":
      return { ...state, user: action.payload.user, loading: false, error: null };
    case "SET_USER_FAILURE":
      return { ...state, user: null, loading: false, error: null };
    case "SET_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default CustomerReducer;
