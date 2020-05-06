import serverCall from "./serverCall";
import Cookies from "js-cookie";

export const signUp = (dispatch) => async (user) => {
  try {
    dispatch({ type: "SIGNUP_USER_LOADING" });
    const res = await serverCall("/auth/signup", { body: user });
    dispatch({ type: "SIGNUP_USER_SUCCESS" });
    return res;
  } catch (err) {}
};

export const signIn = (dispatch) => async (user) => {
  try {
    dispatch({ type: "SIGNIN_USER_LOADING" });
    const res = await serverCall("/auth/signin", { body: user });
    dispatch({ type: "SIGNIN_USER_SUCCESS" });
    return res;
  } catch (err) {}
};

export const signOut = (dispatch) => async (history) => {
  try {
    const res = await serverCall("/auth/signout");
    history.push("/");
    dispatch({ type: "SIGNOUT_USER_SUCCESS" });
  } catch (err) {}
};

export const me = (dispatch) => async () => {
  try {
    dispatch({ type: "SET_USER_LOADING" });
    const res = await serverCall("/me");
    if (res) dispatch({ type: "SET_USER_SUCCESS", payload: res });
  } catch (err) {}
};

export const setCurrentUser = (dispatch) => async () => {
  try {
    dispatch({ type: "SET_USER_LOADING" });
    const res = await serverCall("/customer");
    dispatch({ type: "SET_USER_SUCCESS", payload: res });
    return res;
  } catch (err) {}
};