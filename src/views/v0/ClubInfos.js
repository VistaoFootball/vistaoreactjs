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
import {Component} from "react"
import ToolkitProvider, { CSVExport, Search } from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

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
  Button,
} from "reactstrap";


const { ExportCSVButton } = CSVExport;
const players = [
  {id:1, FirstName: "Jean", LastName: "Dubois", Team: "1", AgeCategory: "U19", JerseyNumber:"5" },
  {id:2, FirstName: "Pierre", LastName: "Dupont", Team: "1", AgeCategory: "U19", JerseyNumber:"6" },
];

const coachs = [
  {id:1, FirstName: "Jean", LastName: "Lapierre", Team: "1", AgeCategory: "U19", JerseyNumber:"5" },
  {id:2, FirstName: "Pierre", LastName: "Dupont", Team: "1", AgeCategory: "U19", JerseyNumber:"6" },
];

const staffs = [
  {id:1, FirstName: "Jean", LastName: "Lapierre", Team: "1", AgeCategory: "U19", JerseyNumber:"5" },
  {id:2, FirstName: "Pierre", LastName: "Dupont", Team: "1", AgeCategory: "U19", JerseyNumber:"6" },
];

const members = [
  {id:1, FirstName: "Jean", LastName: "Lapierre", Team: "1", AgeCategory: "U19", JerseyNumber:"5" },
  {id:2, FirstName: "Pierre", LastName: "Dupont", Team: "1", AgeCategory: "U19", JerseyNumber:"6" },
];
const { SearchBar } = Search;

function CommunauteClub() {
  const [horizontalTabsA, sethorizontalTabsA] = React.useState("Joueurs");
  /*
  const [horizontalTabsB, sethorizontalTabsB] = React.useState("Global"); 
  const [horizontalTabsC, sethorizontalTabsC] = React.useState("Vidéos"); 
  const [horizontalTabsD, sethorizontalTabsD] = React.useState("Joueurs");  
  const [horizontalTabsE, sethorizontalTabsE] = React.useState("Joueurs");  
  const [verticalTabsIcons, setverticalTabsIcons] = React.useState("Vidéos");
  */

  // with this function we change the active tab for all the tabs in this page
  const changeActiveTab = (e, tabState, tabName) => {
    e.preventDefault();
    switch (tabState) {
      case "horizontalTabsA":
        sethorizontalTabsA(tabName);
        break;
              default:
      /*
      case "horizontalTabsB":
        sethorizontalTabsB(tabName);
        break;
      case "horizontalTabsC":
          sethorizontalTabsC(tabName);
          break;
      case "horizontalTabsD":
          sethorizontalTabsD(tabName);
          break;
      case "horizontalTabsE":
          sethorizontalTabsE(tabName);
          break;
      case "verticalTabsIcons":
        setverticalTabsIcons(tabName);
          break;
        break;
      */
    }
  };

 
  // Parameters alerts. to stop the warning of calling setState of unmounted component
  React.useEffect(() => {
    return function cleanup() {
      var id = window.setTimeout(null, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  });

    return (
      
   <div class="content">
      <Card>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col lg="12">
                    {/* color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger" */}
                    <Card>
                    <Nav className="nav-pills-info" pills>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsA === "Joueurs" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsA", "Joueurs")
                        }
                      >
                        Joueurs
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsA === "Coachs" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsA", "Coachs")
                        }
                      >
                        Coachs
                      </NavLink>
                    </NavItem>
                    {/*
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsA === "Staffs" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsA", "Staffs")
                        }
                      >
                        Staffs
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsA === "Membres" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsA", "Membres")
                        }
                      >
                        Membres
                      </NavLink>
                    </NavItem>
                      */}
                  </Nav>
                  <TabContent className="tab-space" activeTab={horizontalTabsA}>
                    <TabPane tabId="Joueurs">
                        <>
                    <div>
                    <PlayersTable></PlayersTable>
                    </div>
                        </>                    
                    </TabPane> 

                    <TabPane tabId="Coachs">
                        <>
                    <div>
                    <CoachsTable></CoachsTable>
                    </div>
                        </>                    
                    </TabPane> 

                    <TabPane tabId="Staffs">
                        <>
                    <div>
                    <StaffsTable></StaffsTable>
                    </div>
                        </>                    
                    </TabPane> 

                    <TabPane tabId="Membres">
                        <>
                    <div>
                    <MembersTable></MembersTable>
                    </div>
                        </>                    
                    </TabPane> 

                  </TabContent>
                  </Card>
                    
                      {/*
                    <Nav
                      className="nav-pills-info nav-pills-icons flex-column"
                      pills
                    >
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          className={
                            verticalTabsIcons === "Vidéos" ? "active" : ""
                          }
                          onClick={(e) =>
                            changeActiveTab(e, "verticalTabsIcons", "Vidéos")
                          }
                        >
                          <i className="tim-icons icon-video-66" />
                          Vidéos
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          className={
                            verticalTabsIcons === "Résumés" ? "active" : ""
                          }
                          onClick={(e) =>
                            changeActiveTab(e, "verticalTabsIcons", "Résumés")
                          }
                        >
                          <i className="tim-icons icon-triangle-right-17" />
                          Résumés
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          className={
                            verticalTabsIcons === "Statistiques" ? "active" : ""
                          }
                          onClick={(e) =>
                            changeActiveTab(e, "verticalTabsIcons", "Statistiques")
                          }
                        >
                          <i className="tim-icons icon-chart-bar-32" />
                          Statistiques
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          className={
                            verticalTabsIcons === "Licenciés" ? "active" : ""
                          }
                          onClick={(e) =>
                            changeActiveTab(e, "verticalTabsIcons", "Licenciés")
                          }
                        >
                          <i className="tim-icons icon-single-02" />
                          Licenciés
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          className={
                            verticalTabsIcons === "Club" ? "active" : ""
                          }
                          onClick={(e) =>
                            changeActiveTab(e, "verticalTabsIcons", "Club")
                          }
                        >
                          <i className="tim-icons icon-square-pin" />
                          Club
                        </NavLink>
                      </NavItem>
                    </Nav>
                    */}
                  </Col>


                  <Col>
                  {/*
                    <TabContent activeTab={verticalTabsIcons}>
                      <TabPane tabId="Vidéos">
                   <Card>
                    <Nav className="nav-pills-info" pills>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsE === "Joueurs" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsE", "Joueurs")
                        }
                      >
                        Joueurs
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsE === "Équipes" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsE", "Équipes")
                        }
                      >
                        Équipes
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsE === "Adversaires" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsE", "Adversaires")
                        }
                      >
                        Adversaires
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent className="tab-space" activeTab={horizontalTabsE}>
                    <TabPane tabId="Joueurs">
                        <>
                        {alert}
                        <div style={{display: 'flex', justifyContent: 'right'}}>
                        <UncontrolledDropdown>
                          <DropdownToggle
                            caret
                            className="btn-link btn-icon"
                            color="default"
                            data-toggle="dropdown"
                            type="button"
                          >
                            <i className="tim-icons icon-settings-gear-63" />
                          </DropdownToggle>
                          <DropdownMenu right>
                          <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}                       
                            >
                              Créer un membre
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}                       
                            >
                              Inviter un membre
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}                       
                            >
                              Télécharger la liste
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Importer une liste
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              className="text-danger"
                              onClick={warningWithConfirmMessage}
                            >
                              Effacer
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                        </div>
                        <div className="content" style={{"margin-top": '-30px'}}>
                        <Row className="mt-5">
                        <Col xs={12} md={12}>
                        <ReactTable
                        data={data}
                        filterable
                        resizable={false}
                        columns={[
                          {
                            Header: "champ",
                            accessor: "1",
                          },
                          {
                            Header: "champ",
                            accessor: "2",
                          },
                          {
                            Header: "champ",
                            accessor: "3",
                          },
                          {
                            Header: "champ",
                            accessor: "4",
                          },
                          {
                            Header: "champ",
                            accessor: "5",
                          },
                          {
                            Header: "champ",
                            accessor: "6",
                          },
                          {
                            Header: "champ",
                            accessor: "7",
                          },
                          {
                            Header: "champ",
                            accessor: "8",
                          },
                          {
                            Header: "champ",
                            accessor: "9",
                          },
                          {
                            Header: "champ",
                            accessor: "10",
                          },
                          {
                            Header: "champ",
                            accessor: "",
                          },
                          {
                            Header: "Actions",
                            accessor: "actions",
                            sortable: false,
                            filterable: false,
                          },
                        ]}
                        defaultPageSize={10}
                        showPaginationTop
                        showPaginationBottom={false}
                        className="-striped -highlight"
                              />
                        </Col>
                        </Row>
                        </div>
                        </>
                  
                    </TabPane>  

                    <TabPane tabId="Équipes">
                        <>
                        {alert}
                        <div style={{display: 'flex', justifyContent: 'right'}}>
                        <UncontrolledDropdown>
                          <DropdownToggle
                            caret
                            className="btn-link btn-icon"
                            color="default"
                            data-toggle="dropdown"
                            type="button"
                          >
                            <i className="tim-icons icon-settings-gear-63" />
                          </DropdownToggle>
                          <DropdownMenu right>
                          <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}                       
                            >
                              Créer un membre
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}                       
                            >
                              Inviter un membre
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}                       
                            >
                              Télécharger la liste
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Importer une liste
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              className="text-danger"
                              onClick={warningWithConfirmMessage}
                            >
                              Effacer
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                        </div>
                        <div className="content" style={{"margin-top": '-30px'}}>
                        <Row className="mt-5">
                        <Col xs={12} md={12}>
                        <ReactTable
                        data={data}
                        filterable
                        resizable={false}
                        columns={[
                          {
                            Header: "champ",
                            accessor: "1",
                          },
                          {
                            Header: "champ",
                            accessor: "2",
                          },
                          {
                            Header: "champ",
                            accessor: "3",
                          },
                          {
                            Header: "champ",
                            accessor: "4",
                          },
                          {
                            Header: "champ",
                            accessor: "5",
                          },
                          {
                            Header: "champ",
                            accessor: "6",
                          },
                          {
                            Header: "champ",
                            accessor: "7",
                          },
                          {
                            Header: "champ",
                            accessor: "8",
                          },
                          {
                            Header: "champ",
                            accessor: "9",
                          },
                          {
                            Header: "champ",
                            accessor: "10",
                          },
                          {
                            Header: "champ",
                            accessor: "",
                          },
                          {
                            Header: "Actions",
                            accessor: "actions",
                            sortable: false,
                            filterable: false,
                          },
                        ]}
                        defaultPageSize={10}
                        showPaginationTop
                        showPaginationBottom={false}
                        className="-striped -highlight"
                              />
                        </Col>
                        </Row>
                        </div>
                        </>
                    </TabPane>   

                    <TabPane tabId="Adversaires">
                        <>
                        {alert}
                        <div style={{display: 'flex', justifyContent: 'right'}}>
                        <UncontrolledDropdown>
                          <DropdownToggle
                            caret
                            className="btn-link btn-icon"
                            color="default"
                            data-toggle="dropdown"
                            type="button"
                          >
                            <i className="tim-icons icon-settings-gear-63" />
                          </DropdownToggle>
                          <DropdownMenu right>
                          <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}                       
                            >
                              Créer un membre
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}                       
                            >
                              Inviter un membre
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}                       
                            >
                              Télécharger la liste
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Importer une liste
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              className="text-danger"
                              onClick={warningWithConfirmMessage}
                            >
                              Effacer
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                        </div>
                        <div className="content" style={{"margin-top": '-30px'}}>
                        <Row className="mt-5">
                        <Col xs={12} md={12}>
                        <ReactTable
                        data={data}
                        filterable
                        resizable={false}
                        columns={[
                          {
                            Header: "champ",
                            accessor: "1",
                          },
                          {
                            Header: "champ",
                            accessor: "2",
                          },
                          {
                            Header: "champ",
                            accessor: "3",
                          },
                          {
                            Header: "champ",
                            accessor: "4",
                          },
                          {
                            Header: "champ",
                            accessor: "5",
                          },
                          {
                            Header: "champ",
                            accessor: "6",
                          },
                          {
                            Header: "champ",
                            accessor: "7",
                          },
                          {
                            Header: "champ",
                            accessor: "8",
                          },
                          {
                            Header: "champ",
                            accessor: "9",
                          },
                          {
                            Header: "champ",
                            accessor: "10",
                          },
                          {
                            Header: "champ",
                            accessor: "",
                          },
                          {
                            Header: "Actions",
                            accessor: "actions",
                            sortable: false,
                            filterable: false,
                          },
                        ]}
                        defaultPageSize={10}
                        showPaginationTop
                        showPaginationBottom={false}
                        className="-striped -highlight"
                              />
                        </Col>
                        </Row>
                        </div>
                        </>  
                    </TabPane>  
                  </TabContent>
                  </Card>
                  </TabPane>
                    </TabContent>

                    <TabContent activeTab={verticalTabsIcons}>
                      <TabPane tabId="Résumés">
                   <Card>
                    <Nav className="nav-pills-info" pills>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsD === "Joueurs" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsD", "Joueurs")
                        }
                      >
                        Joueurs
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsD === "Équipes" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsD", "Équipes")
                        }
                      >
                        Équipes
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsD === "Adversaires" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsD", "Adversaires")
                        }
                      >
                        Adversaires
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent className="tab-space" activeTab={horizontalTabsD}>
                    <TabPane tabId="Joueurs">
                        <>
                        {alert}
                        <div style={{display: 'flex', justifyContent: 'right'}}>
                        <UncontrolledDropdown>
                          <DropdownToggle
                            caret
                            className="btn-link btn-icon"
                            color="default"
                            data-toggle="dropdown"
                            type="button"
                          >
                            <i className="tim-icons icon-settings-gear-63" />
                          </DropdownToggle>
                          <DropdownMenu right>
                          <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}                       
                            >
                              Créer un membre
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}                       
                            >
                              Inviter un membre
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}                       
                            >
                              Télécharger la liste
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Importer une liste
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              className="text-danger"
                              onClick={warningWithConfirmMessage}
                            >
                              Effacer
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                        </div>
                        <div className="content" style={{"margin-top": '-30px'}}>
                        <Row className="mt-5">
                        <Col xs={12} md={12}>
                        <ReactTable
                        data={data}
                        filterable
                        resizable={false}
                        columns={[
                          {
                            Header: "champ",
                            accessor: "1",
                          },
                          {
                            Header: "champ",
                            accessor: "2",
                          },
                          {
                            Header: "champ",
                            accessor: "3",
                          },
                          {
                            Header: "champ",
                            accessor: "4",
                          },
                          {
                            Header: "champ",
                            accessor: "5",
                          },
                          {
                            Header: "champ",
                            accessor: "6",
                          },
                          {
                            Header: "champ",
                            accessor: "7",
                          },
                          {
                            Header: "champ",
                            accessor: "8",
                          },
                          {
                            Header: "champ",
                            accessor: "9",
                          },
                          {
                            Header: "champ",
                            accessor: "10",
                          },
                          {
                            Header: "champ",
                            accessor: "",
                          },
                          {
                            Header: "Actions",
                            accessor: "actions",
                            sortable: false,
                            filterable: false,
                          },
                        ]}
                        defaultPageSize={10}
                        showPaginationTop
                        showPaginationBottom={false}
                        className="-striped -highlight"
                              />
                        </Col>
                        </Row>
                        </div>
                        </>                     
                    </TabPane>  

                    <TabPane tabId="Équipes">
                        <>
                        {alert}
                        <div style={{display: 'flex', justifyContent: 'right'}}>
                        <UncontrolledDropdown>
                          <DropdownToggle
                            caret
                            className="btn-link btn-icon"
                            color="default"
                            data-toggle="dropdown"
                            type="button"
                          >
                            <i className="tim-icons icon-settings-gear-63" />
                          </DropdownToggle>
                          <DropdownMenu right>
                          <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}                       
                            >
                              Créer un membre
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}                       
                            >
                              Inviter un membre
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}                       
                            >
                              Télécharger la liste
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Importer une liste
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              className="text-danger"
                              onClick={warningWithConfirmMessage}
                            >
                              Effacer
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                        </div>
                        <div className="content" style={{"margin-top": '-30px'}}>
                        <Row className="mt-5">
                        <Col xs={12} md={12}>
                        <ReactTable
                        data={data}
                        filterable
                        resizable={false}
                        columns={[
                          {
                            Header: "champ",
                            accessor: "1",
                          },
                          {
                            Header: "champ",
                            accessor: "2",
                          },
                          {
                            Header: "champ",
                            accessor: "3",
                          },
                          {
                            Header: "champ",
                            accessor: "4",
                          },
                          {
                            Header: "champ",
                            accessor: "5",
                          },
                          {
                            Header: "champ",
                            accessor: "6",
                          },
                          {
                            Header: "champ",
                            accessor: "7",
                          },
                          {
                            Header: "champ",
                            accessor: "8",
                          },
                          {
                            Header: "champ",
                            accessor: "9",
                          },
                          {
                            Header: "champ",
                            accessor: "10",
                          },
                          {
                            Header: "champ",
                            accessor: "",
                          },
                          {
                            Header: "Actions",
                            accessor: "actions",
                            sortable: false,
                            filterable: false,
                          },
                        ]}
                        defaultPageSize={10}
                        showPaginationTop
                        showPaginationBottom={false}
                        className="-striped -highlight"
                              />
                        </Col>
                        </Row>
                        </div>
                        </> 
                    </TabPane>   

                    <TabPane tabId="Adversaires">
                        <>
                        {alert}
                        <div style={{display: 'flex', justifyContent: 'right'}}>
                        <UncontrolledDropdown>
                          <DropdownToggle
                            caret
                            className="btn-link btn-icon"
                            color="default"
                            data-toggle="dropdown"
                            type="button"
                          >
                            <i className="tim-icons icon-settings-gear-63" />
                          </DropdownToggle>
                          <DropdownMenu right>
                          <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}                       
                            >
                              Créer un membre
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}                       
                            >
                              Inviter un membre
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}                       
                            >
                              Télécharger la liste
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Importer une liste
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              className="text-danger"
                              onClick={warningWithConfirmMessage}
                            >
                              Effacer
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                        </div>
                        <div className="content" style={{"margin-top": '-30px'}}>
                        <Row className="mt-5">
                        <Col xs={12} md={12}>
                        <ReactTable
                        data={data}
                        filterable
                        resizable={false}
                        columns={[
                          {
                            Header: "champ",
                            accessor: "1",
                          },
                          {
                            Header: "champ",
                            accessor: "2",
                          },
                          {
                            Header: "champ",
                            accessor: "3",
                          },
                          {
                            Header: "champ",
                            accessor: "4",
                          },
                          {
                            Header: "champ",
                            accessor: "5",
                          },
                          {
                            Header: "champ",
                            accessor: "6",
                          },
                          {
                            Header: "champ",
                            accessor: "7",
                          },
                          {
                            Header: "champ",
                            accessor: "8",
                          },
                          {
                            Header: "champ",
                            accessor: "9",
                          },
                          {
                            Header: "champ",
                            accessor: "10",
                          },
                          {
                            Header: "champ",
                            accessor: "",
                          },
                          {
                            Header: "Actions",
                            accessor: "actions",
                            sortable: false,
                            filterable: false,
                          },
                        ]}
                        defaultPageSize={10}
                        showPaginationTop
                        showPaginationBottom={false}
                        className="-striped -highlight"
                              />
                        </Col>
                        </Row>
                        </div>
                        </>
                    </TabPane>  
                  </TabContent>
                  </Card>
                  </TabPane>
                    </TabContent>

                    <TabContent activeTab={verticalTabsIcons}>
                    <TabPane tabId="Statistiques">
                    <Card>
                    <Nav className="nav-pills-info" pills>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsC === "Vidéos" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsC", "Vidéos")
                        }
                      >
                        Vidéos
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsC === "Monitoring" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsC", "Monitoring")
                        }
                      >
                        Monitoring
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent className="tab-space" activeTab={horizontalTabsC}>
                    <TabPane tabId="Vidéos">
                        <>
                        {alert}
                        <div style={{display: 'flex', justifyContent: 'right'}}>
                        <UncontrolledDropdown>
                          <DropdownToggle
                            caret
                            className="btn-link btn-icon"
                            color="default"
                            data-toggle="dropdown"
                            type="button"
                          >
                            <i className="tim-icons icon-settings-gear-63" />
                          </DropdownToggle>
                          <DropdownMenu right>
                          <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}                       
                            >
                              Créer un membre
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}                       
                            >
                              Inviter un membre
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}                       
                            >
                              Télécharger la liste
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Importer une liste
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              className="text-danger"
                              onClick={warningWithConfirmMessage}
                            >
                              Effacer
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                        </div>
                        <div className="content" style={{"margin-top": '-30px'}}>
                        <Row className="mt-5">
                        <Col xs={12} md={12}>
                        <ReactTable
                        data={data}
                        filterable
                        resizable={false}
                        columns={[
                          {
                            Header: "champ",
                            accessor: "1",
                          },
                          {
                            Header: "champ",
                            accessor: "2",
                          },
                          {
                            Header: "champ",
                            accessor: "3",
                          },
                          {
                            Header: "champ",
                            accessor: "4",
                          },
                          {
                            Header: "champ",
                            accessor: "5",
                          },
                          {
                            Header: "champ",
                            accessor: "6",
                          },
                          {
                            Header: "champ",
                            accessor: "7",
                          },
                          {
                            Header: "champ",
                            accessor: "8",
                          },
                          {
                            Header: "champ",
                            accessor: "9",
                          },
                          {
                            Header: "champ",
                            accessor: "10",
                          },
                          {
                            Header: "champ",
                            accessor: "",
                          },
                          {
                            Header: "Actions",
                            accessor: "actions",
                            sortable: false,
                            filterable: false,
                          },
                        ]}
                        defaultPageSize={10}
                        showPaginationTop
                        showPaginationBottom={false}
                        className="-striped -highlight"
                              />
                        </Col>
                        </Row>
                        </div>
                        </>                    
                    </TabPane>  

                    <TabPane tabId="Monitoring">
                        <>
                        {alert}
                        <div style={{display: 'flex', justifyContent: 'right'}}>
                        <UncontrolledDropdown>
                          <DropdownToggle
                            caret
                            className="btn-link btn-icon"
                            color="default"
                            data-toggle="dropdown"
                            type="button"
                          >
                            <i className="tim-icons icon-settings-gear-63" />
                          </DropdownToggle>
                          <DropdownMenu right>
                          <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}                       
                            >
                              Créer un membre
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}                       
                            >
                              Inviter un membre
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}                       
                            >
                              Télécharger la liste
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Importer une liste
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              className="text-danger"
                              onClick={warningWithConfirmMessage}
                            >
                              Effacer
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                        </div>
                        <div className="content" style={{"margin-top": '-30px'}}>
                        <Row className="mt-5">
                        <Col xs={12} md={12}>
                        <ReactTable
                        data={data}
                        filterable
                        resizable={false}
                        columns={[
                          {
                            Header: "champ",
                            accessor: "1",
                          },
                          {
                            Header: "champ",
                            accessor: "2",
                          },
                          {
                            Header: "champ",
                            accessor: "3",
                          },
                          {
                            Header: "champ",
                            accessor: "4",
                          },
                          {
                            Header: "champ",
                            accessor: "5",
                          },
                          {
                            Header: "champ",
                            accessor: "6",
                          },
                          {
                            Header: "champ",
                            accessor: "7",
                          },
                          {
                            Header: "champ",
                            accessor: "8",
                          },
                          {
                            Header: "champ",
                            accessor: "9",
                          },
                          {
                            Header: "champ",
                            accessor: "10",
                          },
                          {
                            Header: "champ",
                            accessor: "",
                          },
                          {
                            Header: "Actions",
                            accessor: "actions",
                            sortable: false,
                            filterable: false,
                          },
                        ]}
                        defaultPageSize={10}
                        showPaginationTop
                        showPaginationBottom={false}
                        className="-striped -highlight"
                              />
                        </Col>
                        </Row>
                        </div>
                        </>
                    </TabPane>   
                  </TabContent>
                  </Card>
                  </TabPane>
                    </TabContent>

                    <TabContent activeTab={verticalTabsIcons}>
                      <TabPane tabId="Club">
                      <Nav className="nav-pills-info" pills>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsB === "Global" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsB", "Global")
                        }
                      >
                        Global
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsB === "Spécifique" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsB", "Spécifique")
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
                      src={require("assets/img/default-avatar.png").default}
                    />
                    <h5 className="title">Nickname</h5>
                  </a>
                </div>
            </Card>
          </Col>

          
                  <TabContent activeTab={horizontalTabsB}>
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
                    
                 <TabContent activeTab={horizontalTabsB}>
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

                  </TabPane>
                    </TabContent>
                  */}
                  </Col>
                </Row>
                {/*Vertical tab ending*/}
              </CardBody>
            </Card>
          </Col>
        </Row>
       </Card>
      </div>
    );
};

class PlayersTable extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [...players]
    };
    this.prices = this.prices.bind(this);
  }
  prices = action => {
    if (!action) {
      return this.state.data;
    } else {
      switch (action.actionType) {
        case "addRow":
          let newRow = {};
          newRow.id = this.state.data.length + 1;
          newRow.FirstName = " ";
          newRow.LastName = " ";
          newRow.Team = " ";
          newRow.AgeCategory = " ";
          newRow.JerseyNumber = " ";
          this.setState({ data: [...this.state.data, newRow] });

          return this.state.data;
        case "deleteRow":
          //this delets different rows only
          let new_state = this.state.data.filter(
            row => row.id !== action.row || row.fruit !== action.fruit
          );

          this.setState({ data: [...new_state] });
          return this.state.data;
        default:
          return this.state.data;
      }
    }
  };
  render() {

    return (
      <div className="App">
        <RenderplayersTable data={this.state.data} prices={this.prices} />
      </div>
    );
  }
}

class CoachsTable extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [...coachs]
    };
    this.prices = this.prices.bind(this);
  }
  prices = action => {
    if (!action) {
      return this.state.data;
    } else {
      switch (action.actionType) {
        case "addRow":
          let newRow = {};
          newRow.id = this.state.data.length + 1;
          newRow.FirstName = " ";
          newRow.LastName = " ";
          newRow.Team = " ";
          newRow.AgeCategory = " ";
          newRow.JerseyNumber = " ";
          this.setState({ data: [...this.state.data, newRow] });

          return this.state.data;
        case "deleteRow":
          //this delets different rows only
          let new_state = this.state.data.filter(
            row => row.id !== action.row || row.fruit !== action.fruit
          );

          this.setState({ data: [...new_state] });
          return this.state.data;
        default:
          return this.state.data;
      }
    }
  };
  render() {

    return (
      <div className="App">
        <RendercoachsTable data={this.state.data} prices={this.prices} />
      </div>
    );
  }
}

class StaffsTable extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [...staffs]
    };
    this.prices = this.prices.bind(this);
  }
  prices = action => {
    if (!action) {
      return this.state.data;
    } else {
      switch (action.actionType) {
        case "addRow":
          let newRow = {};
          newRow.id = this.state.data.length + 1;
          newRow.FirstName = " ";
          newRow.LastName = " ";
          newRow.Team = " ";
          newRow.AgeCategory = " ";
          newRow.JerseyNumber = " ";
          this.setState({ data: [...this.state.data, newRow] });

          return this.state.data;
        case "deleteRow":
          //this delets different rows only
          let new_state = this.state.data.filter(
            row => row.id !== action.row || row.fruit !== action.fruit
          );

          this.setState({ data: [...new_state] });
          return this.state.data;
        default:
          return this.state.data;
      }
    }
  };
  render() {

    return (
      <div className="App">
        <RenderStaffsTable data={this.state.data} prices={this.prices} />
      </div>
    );
  }
}

class MembersTable extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [...members]
    };
    this.prices = this.prices.bind(this);
  }
  prices = action => {
    if (!action) {
      return this.state.data;
    } else {
      switch (action.actionType) {
        case "addRow":
          let newRow = {};
          newRow.id = this.state.data.length + 1;
          newRow.FirstName = " ";
          newRow.LastName = " ";
          newRow.Team = " ";
          newRow.AgeCategory = " ";
          newRow.JerseyNumber = " ";
          this.setState({ data: [...this.state.data, newRow] });

          return this.state.data;
        case "deleteRow":
          //this delets different rows only
          let new_state = this.state.data.filter(
            row => row.id !== action.row || row.fruit !== action.fruit
          );

          this.setState({ data: [...new_state] });
          return this.state.data;
        default:
          return this.state.data;
      }
    }
  };
  render() {

    return (
      <div className="App">
        <RenderMembersTable data={this.state.data} prices={this.prices} />
      </div>
    );
  }
}

class RenderplayersTable extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [...this.props.data] };
  }
  componentWillMount() {
    if (!this.state.data.length) {
      this.setState({ data: [...this.props.prices({ action: "data" })] });
    }
  }

  render() {
    let tableData = this.state.data;
    if (JSON.stringify(this.props.data) === JSON.stringify(tableData)) {
      console.log("in rendered table components the new data is: updated ");
    } else {
      console.log("in rendered table components the new data is: not updated ");
      tableData = this.props.data;
    }
    
    const columns = [{
      dataField: 'id',
      text: 'id'
    }, 
      {
      dataField: 'FirstName',
      text: 'Nom',
      sort: true 
    }, {
      dataField: 'LastName',
      text: 'Prénom',
      sort: true 
    }, {
      dataField: 'Team',
      text: 'Équipe',
      sort: true 
    }, {
      dataField: 'AgeCategory',
      text: 'Catégorie',
      sort: true 
    }, {
      dataField: 'JerseyNumber',
      text: 'e-mail',
      sort: true 
    },
    {
      dataField: "databasePkey",
      text: "",
      editable: false,
      formatter: (cell, row) => {
        if (row)
          return (
            <button
              className="btn btn-danger btn-xs border-secondary rounded"
              onClick={() => {
                this.setState(this.state.data, () => {
                  this.props.prices({
                    actionType: "deleteRow",
                    row: row.id,
                    fruit: row.fruit
                  });
                });
              }}
            >
              Retirer
            </button>
          );
        return null;
      }
    }
    ];

    return (
      <div xs={12} className="col form">
        <ToolkitProvider
          keyField="id"
          data={players}
          columns={columns}
          exportCSV
          search
        >
          {props => (
            <div>
              <div>
              <Button
                  color="success"
                  onClick={() =>
                    this.setState(tableData, () => {
                      this.props.prices({ actionType: "addRow" });
                    })
                  }
                >
                Nouveau
                </Button>
              </div>
              <div style={{"overflow-x":"scroll"}}>
              <SearchBar { ...props.searchProps } placeholder="Recherche"/>
              <BootstrapTable
                {...props.baseProps}
                keyField="id"
                data={tableData}
                columns={columns}
                deleteRow={ true }
                bordered={ false }
                cellEdit={cellEditFactory({
                  mode: "click",
                  onStartEdit: (row, column, rowIndex, columnIndex) => {},
                  beforeSaveCell: (oldValue, newValue, row, column) => {
                    if (column.dataField === "price") {
                      if (isNaN(Number(newValue))) {
                        alert(
                          "You entered " +
                            newValue +
                            " Please Enter numbers Only!!"
                        );
                      }
                    }
                  },
                  afterSaveCell: (oldValue, newValue, row, column) => {}
                })}
              />
            </div>
            </div>
          )}
        </ToolkitProvider>
      </div>
      
    );
  }
}

class RendercoachsTable extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [...this.props.data] };
  }
  componentWillMount() {
    if (!this.state.data.length) {
      this.setState({ data: [...this.props.prices({ action: "data" })] });
    }
  }

  render() {
    let tableData = this.state.data;
    if (JSON.stringify(this.props.data) === JSON.stringify(tableData)) {
      console.log("in rendered table components the new data is: updated ");
    } else {
      console.log("in rendered table components the new data is: not updated ");
      tableData = this.props.data;
    }
    
    const columns = [{
      dataField: 'id',
      text: 'id'
    }, 
      {
      dataField: 'FirstName',
      text: 'Nom',
      sort: true 
    }, {
      dataField: 'LastName',
      text: 'Prénom',
      sort: true 
    }, {
      dataField: 'Team',
      text: 'Équipe',
      sort: true 
    }, {
      dataField: 'AgeCategory',
      text: 'Catégorie',
      sort: true 
    }, {
      dataField: 'JerseyNumber',
      text: 'e-mail',
      sort: true 
    },
    {
      dataField: "databasePkey",
      text: "",
      editable: false,
      formatter: (cell, row) => {
        if (row)
          return (
            <button
              className="btn btn-danger btn-xs border-secondary rounded"
              onClick={() => {
                this.setState(this.state.data, () => {
                  this.props.prices({
                    actionType: "deleteRow",
                    row: row.id,
                    fruit: row.fruit
                  });
                });
              }}
            >
              Retirer
            </button>
          );
        return null;
      }
    }
    ];

    return (
      <div xs={12} className="col form">
        <ToolkitProvider
          keyField="id"
          data={coachs}
          columns={columns}
          exportCSV
          search
        >
          {props => (
            <div>
              <div>
              <Button
                  color="success"
                  onClick={() =>
                    this.setState(tableData, () => {
                      this.props.prices({ actionType: "addRow" });
                    })
                  }
                >
                Nouveau
                </Button>
              </div>
              <div style={{"overflow-x":"scroll"}}>
              <SearchBar { ...props.searchProps } placeholder="Recherche"/>
              <BootstrapTable
                {...props.baseProps}
                keyField="id"
                data={tableData}
                columns={columns}
                bordered={ false }
                cellEdit={cellEditFactory({
                  mode: "click",
                  onStartEdit: (row, column, rowIndex, columnIndex) => {},
                  beforeSaveCell: (oldValue, newValue, row, column) => {
                    if (column.dataField === "price") {
                      if (isNaN(Number(newValue))) {
                        alert(
                          "You entered " +
                            newValue +
                            " Please Enter numbers Only!!"
                        );
                      }
                    }
                  },
                  afterSaveCell: (oldValue, newValue, row, column) => {}
                })}
              />
            </div>
            </div>
          )}
        </ToolkitProvider>
      </div>
      
    );
  }
}

class RenderStaffsTable extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [...this.props.data] };
  }
  componentWillMount() {
    if (!this.state.data.length) {
      this.setState({ data: [...this.props.prices({ action: "data" })] });
    }
  }

  render() {
    let tableData = this.state.data;
    if (JSON.stringify(this.props.data) === JSON.stringify(tableData)) {
      console.log("in rendered table components the new data is: updated ");
    } else {
      console.log("in rendered table components the new data is: not updated ");
      tableData = this.props.data;
    }
    
    const columns = [{
      dataField: 'id',
      text: 'id'
    }, 
      {
      dataField: 'FirstName',
      text: 'Nom',
      sort: true 
    }, {
      dataField: 'LastName',
      text: 'Prénom',
      sort: true 
    }, {
      dataField: 'Team',
      text: 'Équipe',
      sort: true 
    }, {
      dataField: 'AgeCategory',
      text: 'Catégorie',
      sort: true 
    }, {
      dataField: 'JerseyNumber',
      text: 'e-mail',
      sort: true 
    },
    ];

    return (
      <div xs={12} className="col form">
        <ToolkitProvider
          keyField="id"
          data={staffs}
          columns={columns}
          exportCSV
          search
        >
          {props => (
            <div>
              <div>
                <ExportCSVButton
                  className="text-light btn bg-success border-secondary rounded"
                  {...props.csvProps}
                >
                  <span>Export CSV</span>
                </ExportCSVButton>

                <button
                  className="btn bg-success text-light rounded"
                  onClick={() =>
                    this.setState(tableData, () => {
                      this.props.prices({ actionType: "addRow" });
                    })
                  }
                >
                  Nouveau joueur
                </button>
                
              </div>
              <div style={{"overflow-x":"scroll"}}>
              <SearchBar { ...props.searchProps } placeholder="Recherche"/>
              <BootstrapTable
                {...props.baseProps}
                keyField="id"
                data={tableData}
                columns={columns}
                bordered={ false }
                cellEdit={cellEditFactory({
                  mode: "click",
                  onStartEdit: (row, column, rowIndex, columnIndex) => {},
                  beforeSaveCell: (oldValue, newValue, row, column) => {
                    if (column.dataField === "price") {
                      if (isNaN(Number(newValue))) {
                        alert(
                          "You entered " +
                            newValue +
                            " Please Enter numbers Only!!"
                        );
                      }
                    }
                  },
                  afterSaveCell: (oldValue, newValue, row, column) => {}
                })}
              />
            </div>
            </div>
          )}
        </ToolkitProvider>
      </div>
      
    );
  }
}

class RenderMembersTable extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [...this.props.data] };
  }
  componentWillMount() {
    if (!this.state.data.length) {
      this.setState({ data: [...this.props.prices({ action: "data" })] });
    }
  }

  render() {
    let tableData = this.state.data;
    if (JSON.stringify(this.props.data) === JSON.stringify(tableData)) {
      console.log("in rendered table components the new data is: updated ");
    } else {
      console.log("in rendered table components the new data is: not updated ");
      tableData = this.props.data;
    }

    const columns = [{
      dataField: 'id',
      text: 'id'
    }, 
      {
      dataField: 'FirstName',
      text: 'Nom',
      sort: true 
    }, {
      dataField: 'LastName',
      text: 'Prénom',
      sort: true 
    }, {
      dataField: 'Team',
      text: 'Équipe',
      sort: true 
    }, {
      dataField: 'AgeCategory',
      text: 'Catégorie',
      sort: true 
    }, {
      dataField: 'JerseyNumber',
      text: 'e-mail',
      sort: true 
    },
    ];

    return (
      <div xs={12} className="col form">
        <ToolkitProvider
          keyField="id"
          data={members}
          columns={columns}
          exportCSV
          search
        >
          {props => (
            <div>
              <div>
                <ExportCSVButton
                  className="text-light btn bg-success border-secondary rounded"
                  {...props.csvProps}
                >
                  <span>Export CSV</span>
                </ExportCSVButton>

                <button
                  className="btn bg-success text-light rounded"
                  onClick={() =>
                    this.setState(tableData, () => {
                      this.props.prices({ actionType: "addRow" });
                    })
                  }
                >
                  Nouveau joueur
                </button>
                
              </div>
              <div style={{"overflow-x":"scroll"}}>
              <SearchBar { ...props.searchProps } placeholder="Recherche"/>
              <BootstrapTable
                {...props.baseProps}
                keyField="id"
                data={tableData}
                columns={columns}
                bordered={ false }
                cellEdit={cellEditFactory({
                  mode: "click",
                  onStartEdit: (row, column, rowIndex, columnIndex) => {},
                  beforeSaveCell: (oldValue, newValue, row, column) => {
                    if (column.dataField === "price") {
                      if (isNaN(Number(newValue))) {
                        alert(
                          "You entered " +
                            newValue +
                            " Please Enter numbers Only!!"
                        );
                      }
                    }
                  },
                  afterSaveCell: (oldValue, newValue, row, column) => {}
                })}
              />
            </div>
            </div>
          )}
        </ToolkitProvider>
      </div>
      
    );
  }
}



export default CommunauteClub;
