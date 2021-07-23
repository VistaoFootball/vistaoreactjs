/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Vistao.co (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Vistao.co

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  FormGroup,
  Input,
  Row,
  Col,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
} from "reactstrap";


function Profile() {

  const [horizontalTabs, sethorizontalTabs] = React.useState("Global");
  // with this function we change the active tab for all the tabs in this page
  const changeActiveTab = (e, tabState, tabName) => {
    e.preventDefault();
    switch (tabState) {
      case "horizontalTabs":
        sethorizontalTabs(tabName);
        break;
      default:
        break;
    }
  };

  return (
    <div class="content">
    <Card>
      <Row>
        <Col>
          <Card>
            <CardBody>
                  {/* subcategories begin*/}
                    <Card>
                    <Nav className="nav-pills-info" pills>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabs === "Global" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabs", "Global")
                        }
                      >
                        Global
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabs === "Spécifique" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabs", "Spécifique")
                        }
                      >
                        Spécifique
                      </NavLink>
                    </NavItem>
                  </Nav>
                <Col>
            <Card className="card-user">
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/emilyz.jpg").default}
                    />
                    <h5 className="title">Nickname</h5>
                  </a>
                </div>
            </Card>
          </Col>

          
                  <TabContent activeTab={horizontalTabs}>
                    <TabPane tabId="Global">
                    <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Prénom</label>
                        <Input
                          defaultValue=""
                          placeholder=""
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Nom</label>
                        <Input
                          defaultValue=""
                          placeholder=""
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label for="Catégorie">Fonction au club</label>
                          <select class="form-control" id="Catégorie">
                          <option>1</option>
                          <option>2</option>
                          </select>
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="6">
                      <FormGroup >
                      <label for="Catégorie_âge">Catégorie d'âge</label>
                          <select class="form-control" id="Catégorie_âge">
                          <option>1</option>
                          <option>2</option>
                          </select>
                      </FormGroup>
                    </Col>
                  </Row>
                    </TabPane>
                    </TabContent>


                 <TabContent activeTab={horizontalTabs}>
                    <TabPane tabId="Spécifique">
                    <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Prénom</label>
                        <Input
                          defaultValue=""
                          placeholder=""
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Nom</label>
                        <Input
                          defaultValue=""
                          placeholder=""
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label for="Catégorie">Fonction au club</label>
                          <select class="form-control" id="Catégorie">
                          <option>1</option>
                          <option>2</option>
                          </select>
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="6">
                      <FormGroup >
                      <label for="Catégorie_âge">Catégorie d'âge</label>
                          <select class="form-control" id="Catégorie_âge">
                          <option>1</option>
                          <option>2</option>
                          </select>
                      </FormGroup>
                    </Col>
                  </Row>
                    </TabPane>
                    </TabContent>  


                </Card>
              </CardBody>
            </Card>
          </Col>   
        </Row>      
      </Card>
    </div>

    
  );
};

export default Profile;
