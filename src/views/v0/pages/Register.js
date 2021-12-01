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
import Select from "react-select";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import { getCategories } from "apis/routes/common";
import { getSubCategories } from "apis/routes/common";
import { register } from "apis/routes/profile";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [state, setState] = React.useState({});
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [psuedoName, setPsuedoName] = React.useState("");
  const [singleSelectUserCategory, setsingleSelectUserCategory] =
    React.useState(null);
  const [singleSelectUserType, setSingleSelectUserType] = React.useState(null);
  const [userCategoryOptions, setUserCategoryOptions] = React.useState([]);
  const [userTypeOptions, setUserTypeOptions] = React.useState([]);
  const history = useHistory();

  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    return function cleanup() {
      document.body.classList.toggle("register-page");
    };
  });

  React.useEffect(() => {
    getCategories().then((userCategory) => {
      setUserCategoryOptions(userCategory);
    });
  }, []);
  return (
    <>
      <div className="content">
        <Container>
          <Row>
            <Col className="ml-auto" md="5">
              <div className="info-area info-horizontal mt-5">
                <div className="icon icon-warning">
                  <i className="tim-icons icon-triangle-right-17" />
                </div>
                <div className="description">
                  <h3 className="info-title">Accessible</h3>
                  <p className="description">
                    Crée tes montages vidéos de match depuis une interface
                    simple à utiliser
                  </p>
                </div>
              </div>
              <div className="info-area info-horizontal">
                <div className="icon icon-primary">
                  <i className="tim-icons icon-wifi" />
                </div>
                <div className="description">
                  <h3 className="info-title">Coopératif</h3>
                  <p className="description">
                    Partage matchs et highlights avec ta communauté,
                    améliore-toi en équipe
                  </p>
                </div>
              </div>
              <div className="info-area info-horizontal">
                <div className="icon icon-info">
                  <i className="tim-icons icon-trophy" />
                </div>
                <div className="description">
                  <h3 className="info-title">Innovant</h3>
                  <p className="description">
                    l'IA Vistao identifie les ballons joués et l'activité sans
                    ballon de chaque joueur. Les résumés vidéos et rapports
                    statistiques sont plus faciles à réaliser.
                  </p>
                </div>
              </div>
            </Col>
            <Col className="mr-auto" md="7">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Créer un compte</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form className="form">
                    <InputGroup
                      className={classnames({
                        "input-group-focus": state.NicknameFocus,
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Pseudonyme"
                        type="text"
                        value={psuedoName}
                        onChange={(e) => {
                          setPsuedoName(e.target.value);
                        }}
                        onFocus={(e) =>
                          setState({ ...state, NicknameFocus: true })
                        }
                        onBlur={(e) =>
                          setState({ ...state, NicknameFocus: false })
                        }
                      />
                    </InputGroup>
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
                        value={email}
                        type="e-mail"
                        onFocus={(e) =>
                          setState({ ...state, emailFocus: true })
                        }
                        onBlur={(e) =>
                          setState({ ...state, emailFocus: false })
                        }
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </InputGroup>
                    <InputGroup>
                      <Select
                        className="react-select info"
                        classNamePrefix="react-select"
                        name="Catégorie d'utilisateur"
                        value={singleSelectUserCategory}
                        onChange={(option) => {
                          setsingleSelectUserCategory(option);
                          getSubCategories(option.value).then((result) => {
                            setUserTypeOptions(result);
                          });
                        }}
                        options={userCategoryOptions}
                        placeholder="Catégorie d'utilisateur"
                      />
                    </InputGroup>

                    <InputGroup>
                      <Select
                        className="react-select info"
                        classNamePrefix="react-select"
                        name="Type d'utilisateur"
                        value={singleSelectUserType}
                        onChange={(value) => setSingleSelectUserType(value)}
                        options={[
                          {
                            ...singleSelectUserCategory,
                            isDisabled: true,
                          },
                          ...userTypeOptions,
                        ]}
                        placeholder="Type d'utilisateur"
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
                        placeholder="password"
                        type="password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        onFocus={(e) => setState({ ...state, passFocus: true })}
                        onBlur={(e) => setState({ ...state, passFocus: false })}
                      />
                    </InputGroup>

                    <FormGroup check className="text-left">
                      <Label check>
                        <Input type="checkbox" />
                        <span className="form-check-sign" />
                        j'accepte{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          les termes et conditions
                        </a>
                        .
                      </Label>
                    </FormGroup>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button
                    className="btn-round"
                    color="primary"
                    href="#pablo"
                    onClick={async (e) => {
                      e.preventDefault();
                      if (
                        email &&
                        password &&
                        psuedoName &&
                        singleSelectUserType &&
                        singleSelectUserCategory
                      ) {
                        await register({
                          email,
                          password,
                          pseudo_name: psuedoName,
                          category_id: singleSelectUserCategory.value,
                          sub_category_id: singleSelectUserType.value,
                        });
                        history.replace("/auth/login");
                      }
                    }}
                    size="lg"
                  >
                    Démarrer
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Register;
