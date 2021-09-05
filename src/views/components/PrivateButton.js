import { UserContext } from "providers/UserProvider";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

export function PrivateButton({ children, style, color, onClick }) {
  const history = useHistory();
  const { user } = useContext(UserContext);

  const handleClick = () => {
    if (!user) {
      history.replace("/auth/login");
    } else {
      onClick();
    }
  };

  return (
    <Button style={style} color={color} onClick={handleClick}>
      {children}
    </Button>
  );
}
