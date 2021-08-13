import { UserContext } from "providers/UserProvider";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

export function PrivateButton({ children, style, color, href }) {
  const history = useHistory();
  const userState = useContext(UserContext);

  const onClick = () => {
    if (!userState.user) {
      history.replace("/auth/login");
    } else {
      window.location = href;
    }
  };

  return (
    <Button style={style} color={color} onClick={onClick}>
      {children}
    </Button>
  );
}
