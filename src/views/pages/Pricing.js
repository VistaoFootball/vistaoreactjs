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

// reactstrap components
import { Card, CardBody, CardFooter, Container, Row, Col } from "reactstrap";
import { PrivateButton } from "views/components/PrivateButton";

const Pricing = () => {
  React.useEffect(() => {
    document.body.classList.toggle("pricing-page");
    return function cleanup() {
      document.body.classList.toggle("pricing-page");
    };
  });
  return (
    <>
      <div className="content">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h1 className="title">Les abonnements</h1>
              <h4 className="description"></h4>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md="6">
              <Card
                className="card-pricing card-primary"
                style={{ background: "transparent" }}
              >
                <CardBody>
                  <br></br>
                  <Col>
                    <label>Abonnement joueur</label>
                    <h3 style={{ "font-weight": "bold" }}>
                      <i className="tim-icons icon-trophy" /> Pro
                    </h3>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Création de
                      vidéos et résumés
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Clips manuelle de
                      tes actions
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Ajout de tags
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Visionnage vidéo
                      thématique
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Zonage
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Rapports de stats
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Rapports de suivi
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Télécharger
                      vidéos et résumés
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> 15 jours d'essai
                    </p>
                    <p className="plan">
                      <i
                        className="tim-icons icon-check-2"
                        style={{ color: "transparent" }}
                      />{" "}
                    </p>
                  </Col>
                  <br></br>
                  <div className="card-prices">
                    <h1
                      style={{ "text-align": "center", "font-weight": "bold" }}
                    >
                      5,99
                      <label>€ /mois</label>
                    </h1>
                  </div>
                  <PrivateButton
                    style={{
                      display: "block",
                      "margin-right": "15%",
                      "margin-left": "15%",
                    }}
                    color="primary"
                    href="https://buy.stripe.com/aEUbLb5mV4JK7N628g"
                  >
                    Commencer
                  </PrivateButton>
                  <br></br>
                  <div>
                    <h1
                      style={{ "text-align": "center", "font-weight": "bold" }}
                    >
                      64,99
                      <label>€ /année</label>
                    </h1>
                  </div>
                  <PrivateButton
                    style={{
                      display: "block",
                      "margin-right": "15%",
                      "margin-left": "15%",
                    }}
                    color="primary"
                    href="https://buy.stripe.com/fZe02t7v3foo4AU5kt"
                  >
                    Commencer
                  </PrivateButton>
                </CardBody>
                <CardFooter className="text-center mb-3 mt-3"></CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card
                className="card-pricing card-primary"
                style={{ background: "transparent" }}
              >
                <CardBody>
                  <br></br>
                  <Col>
                    <label>Abonnement joueur</label>
                    <h3 style={{ "font-weight": "bold" }}>
                      <i className="tim-icons icon-shape-star" /> Élite
                    </h3>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Création de
                      vidéos et résumés
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Clips manuels de
                      tes actions
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-shape-star" /> Clips
                      automatiques d'actions
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Ajout de tags
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Visionnage vidéo
                      thématique
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Zonage
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Rapports de stats
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Rapports de suivi
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Télécharger
                      vidéos et résumés
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> 15 jours d'essai
                    </p>
                  </Col>
                  <br></br>
                  <div className="card-prices">
                    <h1
                      style={{ "text-align": "center", "font-weight": "bold" }}
                    >
                      7,99
                      <label>€ /mois</label>
                    </h1>
                  </div>
                  <PrivateButton
                    style={{
                      display: "block",
                      "margin-right": "15%",
                      "margin-left": "15%",
                    }}
                    color="primary"
                    href="https://buy.stripe.com/5kAcPf3eNccc4AU4gh"
                  >
                    Commencer
                  </PrivateButton>
                  <br></br>
                  <div>
                    <h1
                      style={{ "text-align": "center", "font-weight": "bold" }}
                    >
                      85,99
                      <label>€ /année</label>
                    </h1>
                  </div>
                  <PrivateButton
                    style={{
                      display: "block",
                      "margin-right": "15%",
                      "margin-left": "15%",
                    }}
                    color="primary"
                    href="https://buy.stripe.com/bIY16xdTrgss1oI9AA"
                  >
                    Commencer
                  </PrivateButton>
                </CardBody>
                <CardFooter className="text-center mb-3 mt-3"></CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card
                className="card-pricing card-primary"
                style={{ background: "transparent" }}
              >
                <CardBody>
                  <br></br>
                  <Col>
                    <label>Abonnement club</label>
                    <h3 style={{ "font-weight": "bold" }}>
                      <i className="tim-icons icon-trophy" /> Pro
                    </h3>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Création de
                      vidéos et résumés
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Clips manuelle de
                      vos actions
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Ajout de tags
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Visionnage vidéo
                      thématique
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Zonage
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Rapports de stats
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Rapports de suivi
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Télécharger
                      vidéos et résumés
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> 15 jours d'essai
                    </p>
                    <p className="plan">
                      <i
                        className="tim-icons icon-check-2"
                        style={{ color: "transparent" }}
                      />{" "}
                    </p>
                  </Col>
                  <br></br>
                  <div className="card-prices">
                    <h1
                      style={{ "text-align": "center", "font-weight": "bold" }}
                    >
                      55,99
                      <label>€ /mois</label>
                    </h1>
                  </div>
                  <PrivateButton
                    style={{
                      display: "block",
                      "margin-right": "15%",
                      "margin-left": "15%",
                    }}
                    color="primary"
                    href="https://buy.stripe.com/28o9D34iRgss9Ve005"
                  >
                    Commencer
                  </PrivateButton>
                  <br></br>
                  <div>
                    <h1
                      style={{ "text-align": "center", "font-weight": "bold" }}
                    >
                      537,99
                      <label>€ /année</label>
                    </h1>
                  </div>
                  <PrivateButton
                    style={{
                      display: "block",
                      "margin-right": "15%",
                      "margin-left": "15%",
                    }}
                    color="primary"
                    href="https://buy.stripe.com/aEUcPf6qZgss6J200b"
                  >
                    Commencer
                  </PrivateButton>
                </CardBody>
                <CardFooter className="text-center mb-3 mt-3"></CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card
                className="card-pricing card-primary"
                style={{ background: "transparent" }}
              >
                <CardBody>
                  <br></br>
                  <Col>
                    <label>Abonnement club</label>
                    <h3 style={{ "font-weight": "bold" }}>
                      <i className="tim-icons icon-shape-star" /> Élite
                    </h3>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Création de
                      vidéos et résumés
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Clips manuels de
                      vos actions
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-shape-star" /> Clips
                      automatiques d'actions
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Ajout de tags
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Visionnage vidéo
                      thématique
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Zonage
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Rapports de stats
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Rapports de suivi
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> Télécharger
                      vidéos et résumés
                    </p>
                    <p className="plan">
                      <i className="tim-icons icon-check-2" /> 15 jours d'essai
                    </p>
                  </Col>
                  <br></br>
                  <div className="card-prices">
                    <h1
                      style={{ "text-align": "center", "font-weight": "bold" }}
                    >
                      71,99
                      <label>€ /mois</label>
                    </h1>
                  </div>
                  <PrivateButton
                    style={{
                      display: "block",
                      "margin-right": "15%",
                      "margin-left": "15%",
                    }}
                    color="primary"
                    href="https://buy.stripe.com/6oE3eF4iRfoo4AUeV1"
                  >
                    Commencer
                  </PrivateButton>
                  <br></br>
                  <div>
                    <h1
                      style={{ "text-align": "center", "font-weight": "bold" }}
                    >
                      689,99
                      <label>€ /année</label>
                    </h1>
                  </div>
                  <PrivateButton
                    style={{
                      display: "block",
                      "margin-right": "15%",
                      "margin-left": "15%",
                    }}
                    color="primary"
                    href="https://buy.stripe.com/cN2eXndTrb882sM5ku"
                  >
                    Commencer
                  </PrivateButton>
                </CardBody>
                <CardFooter className="text-center mb-3 mt-3"></CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Pricing;
