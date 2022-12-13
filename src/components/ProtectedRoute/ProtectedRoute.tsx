import React from "react";
import { Route, Redirect } from "react-router-dom";

interface props {
  Component: React.FC;
  Path: string;
  auth: boolean;
}

const ProtectedRoute: React.FC<props> = ({
  Component,
  auth,
  Path,
}: props) => {
  return (
    <Route
      path={Path}
      render={() => {
        if (auth) return <Component />;
        if (!auth) return <Redirect to="/" />;
      }}
    ></Route>
  );
};

export default ProtectedRoute;
