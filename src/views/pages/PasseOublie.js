/*!

=========================================================
* Black Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2020 vistao.co (https://www.creative-tim.com)

* Coded by vistao.co

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  CardBody,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";
import { resetPassword } from "apis/routes/profile";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [state, setState] = React.useState({});
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const { uuid } = props.match.params;
  const history = useHistory();

  React.useEffect(() => {
    document.body.classList.toggle("login-page");

    return function cleanup() {
      document.body.classList.toggle("login-page");
    };
  });

  if (!uuid) {
    history.push("/auth/login");
  }

  return (
    <>
      <div className="content">
        <Container>
          <Col className="ml-auto mr-auto" lg="4" md="6">
            <Form className="form">
              <CardTitle tag="h3">Mot de passe oublié</CardTitle>
              <p>Veuillez créer et confirmer votre nouveau mot de passe.</p>
              <CardBody>
                <InputGroup
                  className={classnames({
                    "input-group-focus": state.passFocus,
                  })}
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="tim-icons icon-lock-circle" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Nouveau mot de passe"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    onFocus={(e) => setState({ ...state, passFocus: true })}
                    onBlur={(e) => setState({ ...state, passFocus: false })}
                  />
                </InputGroup>
                <InputGroup
                  className={classnames({
                    "input-group-focus": state.passFocus,
                  })}
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="tim-icons icon-lock-circle" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Confirmez le nouveau mot de passe"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onFocus={(e) => setState({ ...state, passFocus: true })}
                    onBlur={(e) => setState({ ...state, passFocus: false })}
                  />
                </InputGroup>
              </CardBody>

              <Button
                block
                className="mb-3"
                color="primary"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  if (password && confirmPassword) {
                    resetPassword({
                      new_password: password,
                      confirm_password: confirmPassword,
                      uuid,
                    });
                    history.push("/auth/login");
                  }
                }}
                size="lg"
              >
                Changer le mot de passe
              </Button>
            </Form>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default Login;
