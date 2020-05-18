import serverCall from "./serverCall";

export const signUp = (dispatch) => async (user) => {
  try {
    dispatch({ type: "LOADING" });
    await serverCall("/auth/signup", { body: user });
    dispatch({ type: "SIGNUP_USER_SUCCESS" });
  } catch (err) {
    dispatch({ type: "SET_ERROR", payload: { message: err.message } });
  }
};

export const signIn = (dispatch) => async (user) => {
  try {
    dispatch({ type: "LOADING" });
    await serverCall("/auth/signin", { body: user });
    dispatch({ type: "SIGNIN_USER_SUCCESS" });
  } catch (err) {
    dispatch({ type: "SET_ERROR", payload: { message: err.message } });
  }
};

export const signOut = (dispatch) => async (history) => {
  try {
    dispatch({ type: "LOADING" });
    await serverCall("/auth/signout");
    dispatch({ type: "SIGNOUT_USER_SUCCESS" });
  } catch (err) {
    dispatch({ type: "SET_ERROR", payload: { message: err.message } });
  }
};

export const me = (dispatch) => async () => {
  try {
    dispatch({ type: "LOADING" });
    const res = await serverCall("/me");
    if (res)
      dispatch({ type: "SET_USER_SUCCESS", payload: { user: res.user } });
  } catch (err) {
    console.log(err);
  }
};

export const setCurrentCustomer = (dispatch) => async () => {
  try {
    dispatch({ type: "LOADING" });
    const res = await serverCall("/customer");
    dispatch({ type: "SET_USER_SUCCESS", payload: res });
  } catch (err) {
    dispatch({ type: "SET_ERROR", payload: { message: err.message } });
  }
};

export const updateCustomer = (dispatch) => async (customer) => {
  try {
    dispatch({ type: "LOADING" });
    const res = await serverCall("/customer", {
      method: "PUT",
      body: customer,
    });
    dispatch({ type: "SET_USER_SUCCESS", payload: res });
  } catch (err) {
    dispatch({ type: "SET_ERROR", payload: { message: err.message } });
  }
};
