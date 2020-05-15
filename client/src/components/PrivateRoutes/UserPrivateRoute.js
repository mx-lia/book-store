import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { Context as CustomerContext } from "../../context/customerContext";

const UserPrivateRoute = ({ component: Component, ...rest }) => {
  const {
    state: { user, loading },
  } = useContext(CustomerContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user && user.role === 2 ? (
          <Component {...props} />
        ) : (
          <div>This route is blocked</div>
        )
      }
    />
  );
};

export default UserPrivateRoute;
