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
import { forgotPasswordLink } from "../../../apis/routes/profile";

const Login = () => {
  const [state, setState] = React.useState({});
  const [email, setEmail] = React.useState("");
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
              <CardTitle tag="h3">Retrouvez votre compte</CardTitle>
              <p>
                Veuillez entrer votre adresse e-mail pour rechercher votre
                compte.
              </p>
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
                    placeholder="Email de récupération"
                    type="text"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    onFocus={(e) => setState({ ...state, emailFocus: true })}
                    onBlur={(e) => setState({ ...state, emailFocus: false })}
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
                  if (email) {
                    forgotPasswordLink(email);
                  }
                }}
                size="lg"
              >
                Créer un nouveau passe
              </Button>
            </Form>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default Login;
