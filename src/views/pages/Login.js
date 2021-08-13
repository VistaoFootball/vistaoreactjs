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
import React, { useContext } from "react";
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
import { login } from "apis/routes/auth";
import { UserContext } from "providers/UserProvider";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [state, setState] = React.useState({});
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  React.useEffect(() => {
    document.body.classList.toggle("login-page");
    return function cleanup() {
      document.body.classList.toggle("login-page");
    };
  });
  return (
    <>
      <div className="content">
        <Container>
          <Col className="ml-auto mr-auto" lg="4" md="6">
            <Form className="form">
              <CardTitle tag="h1">Se connecter</CardTitle>

              <CardBody>
                <InputGroup
                  className={classnames({
                    "input-group-focus": state.emailFocus,
                  })}
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="tim-icons icon-email-85" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    onFocus={(e) => setState({ ...state, emailFocus: true })}
                    onBlur={(e) => setState({ ...state, emailFocus: false })}
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
                    placeholder="Mot de passe"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
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
                onClick={async (e) => {
                  e.preventDefault();
                  const response = await login(email, password);
                  setUser(response);
                  history.replace("/admin");
                }}
                size="lg"
              >
                Démarrer
              </Button>
              <div className="pull-left">
                <h6>
                  <a
                    className="link footer-link"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      history.replace("/auth/register");
                    }}
                  >
                    Créer un compte
                  </a>
                </h6>
              </div>
              <div className="pull-right">
                <h6>
                  <a
                    className="link footer-link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Mot de passe oublie ?
                  </a>
                </h6>
              </div>
            </Form>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default Login;
