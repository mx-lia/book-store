import { initialState } from "../context/authContext";

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN_USER_SUCCESS":
      return { ...state, isAuthenticated: true };
    case "SIGNUP_USER_SUCCESS":
      return { ...state, isAuthenticated: true };
    case "SIGNOUT_USER_SUCCESS":
      return { ...state, isAuthenticated: false, user: null };
    case "SET_USER_SUCCESS":
      return { ...state, isAuthenticated: true, user: action.payload };
    default:
      return state;
  }
};

export default authReducer;
