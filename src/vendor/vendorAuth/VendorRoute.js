import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./index";

const VendorRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() && isAuthenticated().vendor.role === 2 ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/vendorSignIn",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default VendorRoute;
