import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getCurrentUser } from "../authService";

const ProtectedRoute = ({ path, component: Component, user }) => {
  return (
    <Route
      path={path}
      render={(props) => {
        if (!getCurrentUser())
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          );

        return <Component {...props} user={user} />;
      }}
    />
  );
};

export default ProtectedRoute;
