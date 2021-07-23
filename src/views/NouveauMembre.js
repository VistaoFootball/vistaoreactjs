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
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
  FormGroup,
  Input,
  Button,

} from "reactstrap";

const Panels = () => {

  const [pageTabs, setpageTabs] = React.useState("home");

  // with this function we change the active tab for all the tabs in this page
  const changeActiveTab = (e, tabState, tabName) => {
    e.preventDefault();
    switch (tabState) {
      case "pageTabs":
        setpageTabs(tabName);
        break;
        default:
        break;
    }
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <Card className="card-plain card-subcategories">
              <CardHeader>
                <CardTitle className="text-center mt-5" tag="h4">
                  Inviter un membre
                </CardTitle>
                <br />
              </CardHeader>
              <CardBody>
                {/* color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger" */}
                <Nav
                  className="nav-pills-info nav-pills-icons justify-content-center"
                  pills
                >
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={pageTabs === "home" ? "active" : ""}
                      onClick={(e) => changeActiveTab(e, "pageTabs", "home")}
                    >
                      <i className="tim-icons icon-key-25" />
                      Code
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={pageTabs === "messages" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "pageTabs", "messages")
                      }
                    >
                      <i className="tim-icons icon-send" />
                      Email
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent
                  className="tab-space tab-subcategories"
                  activeTab={pageTabs}
                >
                  <TabPane tabId="home">
                      <Row>
                    Voici le code d'accès à la communauté. Grâce à celui-ci vous pouvez
                    inviter des personnes à devenir membre sur la plateforme.   
                    </Row>
                    <br></br>
                    <Row>
                    <Col md-6 ml-auto mr-auto>
                          <FormGroup>
                            <Input value="XXXX - XXXX" type="text" />
                          </FormGroup>
                  <Button color="success">
                  <i/> Copier
                </Button >
                    </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="messages">
                  <Row>
                    Vous pouvez également inviter un membre à joindre votre espace club en renseignant son adresse électronique. 
                    </Row>
                    <br></br>
                    <Row>
                    <Col md-6 ml-auto mr-auto>
                          <FormGroup>
                            <Input placeholder="E-mail" type="text" />
                          </FormGroup>
                    </Col>
                    </Row>
                    <Button color="success">
                  <i/> Envoyer
                </Button >
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Panels;
