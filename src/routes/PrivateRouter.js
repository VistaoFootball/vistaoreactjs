import React, { useContext, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

export function PrivateRoute({ children, path, exact }) {
  const history = useHistory();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      history.replace("/auth/login");
    }
  }, [user]);

  return (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  );
}
