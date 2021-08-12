import React, { useContext, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

export function PrivateRoute({ children, path, exact }) {
  const history = useHistory();
  const userState = useContext(UserContext);

  useEffect(() => {
    if (!userState.user) {
      history.replace("/auth/login");
    }
  }, [userState.user]);

  return (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  );
}
