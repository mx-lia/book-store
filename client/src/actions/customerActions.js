import serverCall from "./serverCall";

export const signUp = (dispatch, setError) => async (user) => {
  try {
    dispatch({ type: "LOADING" });
    await serverCall("/auth/signup", { body: user });
    dispatch({ type: "SIGNUP_USER_SUCCESS" });
  } catch (err) {
    setError(err);
  }
};

export const signIn = (dispatch, setError) => async (user) => {
  try {
    dispatch({ type: "LOADING" });
    await serverCall("/auth/signin", { body: user });
    dispatch({ type: "SIGNIN_USER_SUCCESS" });
  } catch (err) {
    setError(err);
  }
};

export const signOut = (dispatch, setError) => async (history) => {
  try {
    dispatch({ type: "LOADING" });
    await serverCall("/auth/signout");
    dispatch({ type: "SIGNOUT_USER_SUCCESS" });
  } catch (err) {
    setError(err);
  }
};

export const me = (dispatch, setError) => async () => {
  try {
    dispatch({ type: "LOADING" });
    const res = await serverCall("/me");
    if (res)
      dispatch({ type: "SET_USER_SUCCESS", payload: { user: res.user } });
  } catch (err) {
    setError(err);
  }
};

export const setCurrentCustomer = (dispatch, setError) => async () => {
  try {
    dispatch({ type: "LOADING" });
    const res = await serverCall("/customer");
    dispatch({ type: "SET_USER_SUCCESS", payload: res });
  } catch (err) {
    setError(err);
  }
};

export const updateCustomer = (dispatch, setError) => async (customer) => {
  try {
    dispatch({ type: "LOADING" });
    const res = await serverCall("/customer", {
      method: "PUT",
      body: customer,
    });
    dispatch({ type: "SET_USER_SUCCESS", payload: res });
  } catch (err) {
    setError(err);
  }
};
