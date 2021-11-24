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
import "assets/css/charts-display.css";

import {
  Card,
  CardBody,
  Nav,
  NavLink,
  NavItem,
  TabPane,
  TabContent,
  Row,
  Col,
} from "reactstrap";

import HomeDashboard from "./Dashboard/HomeDashboard";
import AwayDashboard from "./Dashboard/AwayDashboard";
import H2HDashboard from "./Dashboard/H2HDashboard";

function Dashboard() {
  const [verticalTabsIcons, setverticalTabsIcons] = React.useState("HomeTeam");
  const changeActiveTab = (e, tabState, tabName) => {
    e.preventDefault();
    
    switch (tabState) {       
      case "verticalTabsIcons":
        setverticalTabsIcons(tabName);
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
                {/* Vertical tabs begin */}
                <Row>
                  <Col lg="2">
                    {/* color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger" */}
                    <Nav
                      className="nav-pills-info nav-pills-icons flex-column"
                      pills
                    >
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          className={
                            verticalTabsIcons === "HomeTeam" ? "active" : ""
                          }
                          onClick={(e) =>
                            changeActiveTab(e, "verticalTabsIcons", "HomeTeam")
                          }
                        >
                          <i className="tim-icons icon-square-pin" />
                          Locaux
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          className={
                            verticalTabsIcons === "AwayTeam" ? "active" : ""
                          }
                          onClick={(e) =>
                            changeActiveTab(e, "verticalTabsIcons", "AwayTeam")
                          }
                        >
                          <i className="tim-icons icon-send" />
                          Visiteurs
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          className={
                            verticalTabsIcons === "HeadtoHead" ? "active" : ""
                          }
                          onClick={(e) =>
                            changeActiveTab(e, "verticalTabsIcons", "HeadtoHead")
                          }
                        >
                          <i className="tim-icons icon-zoom-split" />
                          H2H
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>

                  <Col>

                  <TabContent activeTab={verticalTabsIcons}>
                    <TabPane tabId="HeadtoHead">
                    <H2HDashboard></H2HDashboard>
                    </TabPane>
                    </TabContent>

                    <TabContent activeTab={verticalTabsIcons}>
                    <TabPane tabId="HomeTeam">
                    <HomeDashboard></HomeDashboard>
                    </TabPane>
                    </TabContent>

                    <TabContent activeTab={verticalTabsIcons}>
                    <TabPane tabId="AwayTeam">
                    <AwayDashboard></AwayDashboard>
                    </TabPane>
                    </TabContent>

                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
       </Card>
      </div>
    );
};

export default Dashboard;
