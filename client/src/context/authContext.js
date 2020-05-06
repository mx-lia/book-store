import createDataContext from "./createDataContext";
import authReducer from "../reducers/authReducer";
import {
  signUp,
  signIn,
  signOut,
  setCurrentUser,
  me,
} from "../actions/authActions";

export const initialState = {
  user: null,
  isAuthenticated: false,
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signUp, signIn, signOut, setCurrentUser, me },
  initialState
);
