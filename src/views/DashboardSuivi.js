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
import "assets/css/charts-display.css"

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

import MonitoringTeamDashboard from "./MonitoringDashboard/MonitoringDashboardTeam";
import MonitoringOpponentDashboard from "./MonitoringDashboard/MonitoringDashboardOpponent";

function DashboardSuivi() {

  const [verticalTabsIcons, setverticalTabsIcons] = React.useState("MyTeam");


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
                {/* Vertical tabs begin*/}
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
                            verticalTabsIcons === "MyTeam" ? "active" : ""
                          }
                          onClick={(e) =>
                            changeActiveTab(e, "verticalTabsIcons", "MyTeam")
                          }
                        >
                          <i className="tim-icons icon-shape-star" />
                          Mon équipe
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          className={
                            verticalTabsIcons === "OpponentTeam" ? "active" : ""
                          }
                          onClick={(e) =>
                            changeActiveTab(e, "verticalTabsIcons", "OpponentTeam")
                          }
                        >
                          <i className="tim-icons icon-user-run" />
                          Équipe adverse
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                
                  <Col>
                  <TabContent activeTab={verticalTabsIcons}>
                      <TabPane tabId="MyTeam">
                        <MonitoringTeamDashboard></MonitoringTeamDashboard>
                      </TabPane>
                  </TabContent>

                    <TabContent activeTab={verticalTabsIcons}>
                      <TabPane tabId="OpponentTeam">
                        <MonitoringOpponentDashboard></MonitoringOpponentDashboard>                    
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

export default DashboardSuivi;
