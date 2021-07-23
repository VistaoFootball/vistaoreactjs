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

const Register = () => {
  const [state, setState] = React.useState({});
  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    return function cleanup() {
      document.body.classList.toggle("register-page");
    };
  });
  const [singleSelectUserType, setsingleSelectUserType] = React.useState(null);
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
                  Crée tes montages vidéos de match depuis une interface simple à utiliser
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
                  Partage matchs et highlights avec ta communauté, améliore-toi en équipe
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
                  l'IA Vistao identifie les ballons joués et l'activité sans ballon 
                  de chaque joueur. Les résumés vidéos et rapports statistiques sont plus faciles à réaliser. 
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
                        "input-group-focus": state.LastNameFocus,
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Nom"
                        type="text"
                        onFocus={(e) => setState({ ...state, LastNameFocus: true })}
                        onBlur={(e) => setState({ ...state, LastNameFocus: false })}
                      />
                    </InputGroup>
                    <InputGroup
                      className={classnames({
                        "input-group-focus": state.FirstnameFocus,
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Prénom"
                        type="text"
                        onFocus={(e) => setState({ ...state, FirstnameFocus: true })}
                        onBlur={(e) => setState({ ...state, FirstnameFocus: false })}
                      />
                    </InputGroup>
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
                        onFocus={(e) => setState({ ...state, NicknameFocus: true })}
                        onBlur={(e) => setState({ ...state, NicknameFocus: false })}
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
                        type="e-mail"
                        onFocus={(e) =>
                          setState({ ...state, emailFocus: true })
                        }
                        onBlur={(e) =>
                          setState({ ...state, emailFocus: false })
                        }
                      />
                    </InputGroup>

                    <InputGroup>
                    <Select
                          className="react-select info"
                          classNamePrefix="react-select"
                          name="Type d'utilisateur"
                          value={singleSelectUserType}
                          onChange={(value) => setsingleSelectUserType(value)}
                          options={[
                            {
                              value: "1",
                              label: "Directeur",
                              isDisabled: true,
                            },
                            { valeur : "1", label : "Président"},
                            { valeur : "2", label : "vice-président"},
                            { valeur : "3", label : "Membre du conseil"},
                            { valeur : "4", label : "Directeur technique"},
                            { valeur : "5", label : "Responsable du recrutement"},
                            { valeur : "6", label : "Référent arbitre"},
                            {
                              value: "2",
                              label: "Coachs",
                              isDisabled: true,
                            },
                            { valeur : "7", label : "Coach principal"},
                            { valeur : "8", label : "Coach assistant"},
                            { valeur : "9", label : "Recruteur"},
                            { valeur : "10", label : "Préparateur athlétique"},
                            { valeur : "11", label : "Préparateur musculaire"},
                            { valeur : "12", label : "Coach des gardiens"},
                            { valeur : "13", label : "Assistant technique"},
                            { valeur : "14", label : "Analyste"},
                            { valeur : "15", label : "Coach mental"},
                            {
                              value: "3",
                              label: "Joueurs",
                              isDisabled: true,
                            },
                            
                            { valeur : "16", label : "Joueur"},
                            {
                              value: "",
                              label: "Arbitres",
                              isDisabled: true,
                            },
                            {
                              value: "",
                              label: "Santé",
                              isDisabled: true,
                            },
                            { valeur : "18", label : "Entraîneur en rééducation"},
                            { valeur : "19", label : "Médecin généraliste"},
                            { valeur : "20", label : "Médecin sportif"},
                            { valeur : "21", label : "Physiothérapeute"},
                            { valeur : "22", label : "Nutritionniste"},
                            {
                              value: "",
                              label: "Intendance",
                              isDisabled: true,
                            },
                            { valeur : "23", label : "Intendants"},
                            { valeur : "24", label : "Concierge"},
                            {
                              value: "",
                              label: "Fans",
                              isDisabled: true,
                            },
                            { valeur : "25", label : "Supporters"},
                            { valeur : "26", label : "Representant supporters"},
                            {
                              value: "",
                              label: "Officiels",
                              isDisabled: true,
                            },
                            { valeur : "27", label : "Directeur de ligue district"},
                            { valeur : "28", label : "Directeur de ligue régionale"},
                            { valeur : "29", label : "Directeur technique national"},
                            { valeur : "30", label : "Directeur confédération"},
                            { valeur : "31", label : "Employé de lique district "},
                            { valeur : "32", label : "Employé de ligue régionale"},
                            { valeur : "33", label : "Employé de fédération"},
                            { valeur : "34", label : "Employé de confédération"},
                            {
                              value: "",
                              label: "Partenaires",
                              isDisabled: true,
                            },
                            { valeur : "35", label : "Agent"},
                            { valeur : "36", label : "Sponsors"},
                            { valeur : "37", label : "Marque"},
                            { valeur : "38", label : "Revendeur"},
                            { valeur : "39", label : "Commercial"},
                            { valeur : "40", label : "Club"},
                            { valeur : "41", label : "Associations"},
                            { valeur : "42", label : "Community manager"},
                            { valeur : "43", label : "Monteur de vidéo"},
                            { valeur : "44", label : "Designer"},
                            { valeur : "45", label : "Journaliste"},
                            {
                              value: "",
                              label: "Media",
                              isDisabled: true,
                            },
                            { valeur : "46", label : "Employé média"},
                            { valeur : "47", label : "Responsable de média"},
                            {
                              value: "",
                              label: "Sous-traitants",
                              isDisabled: true,
                            },
                            { valeur : "48", label : "Avocat"},
                            { valeur : "49", label : "Freelance"},
                            { valeur : "50", label : "Conseiller"},
                            { valeur : "51", label : "Développeur"},
                            { valeur : "52", label : "Tradeur sportif"},
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
                        type="text"
                        onFocus={(e) => setState({ ...state, passFocus: true })}
                        onBlur={(e) => setState({ ...state, passFocus: false })}
                      />
                    </InputGroup>
                    <InputGroup
                      className={classnames({
                        "input-group-focus": state.ConfirmpassFocus,
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-lock-circle" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="password"
                        type="text"
                        onFocus={(e) => setState({ ...state, ConfirmpassFocus: true })}
                        onBlur={(e) => setState({ ...state, ConfirmpassFocus: false })}
                      />
                    </InputGroup>
                    <FormGroup check className="text-left">
                      <Label check>
                        <Input type="checkbox" />
                        <span className="form-check-sign" />j'accepte {" "}
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
                    onClick={(e) => e.preventDefault()}
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
