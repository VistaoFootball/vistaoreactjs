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
import classNames from "classnames";
import ReactBSAlert from "react-bootstrap-sweetalert";

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Nav,
  NavLink,
  NavItem,
  TabPane,
  TabContent,
  Row,
  Col,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form, 
  Label,
  Input,

} from "reactstrap";

import ReactTable from "components/ReactTable/ReactTable.js";
const dataTable = [
  ["Airi Satou", "Accountant", "Tokyo", "33"],
];

function CommunauteAgent() {
  const [horizontalTabsA, sethorizontalTabsA] = React.useState("Membres");
  const [horizontalTabsB, sethorizontalTabsB] = React.useState("Global"); 
  const [horizontalTabsC, sethorizontalTabsC] = React.useState("Joueur"); 
  const [horizontalTabsD, sethorizontalTabsD] = React.useState("Joueur");  
  const [horizontalTabsE, sethorizontalTabsE] = React.useState("Joueur");  
  const [verticalTabs, setverticalTabs] = React.useState("Membres");
  const [verticalTabsIcons, setverticalTabsIcons] = React.useState("Vidéos");
  const [pageTabs, setpageTabs] = React.useState("home");
  const [openedCollapseOne, setopenedCollapseOne] = React.useState(true);
  const [openedCollapseTwo, setopenedCollapseTwo] = React.useState(false);
  const [openedCollapseThree, setopenedCollapseThree] = React.useState(false);
  // with this function we change the active tab for all the tabs in this page
  const changeActiveTab = (e, tabState, tabName) => {
    e.preventDefault();
    switch (tabState) {
      case "horizontalTabsA":
        sethorizontalTabsA(tabName);
        break;
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
      case "pageTabs":
        setpageTabs(tabName);
        break;
      case "verticalTabs":
        setverticalTabs(tabName);
        break;
      default:
        break;
    }
  };

  const [data, setData] = React.useState(
    dataTable.map((prop, key) => {
      return {
        id: key,
        name: prop[0],
        position: prop[1],
        office: prop[2],
        age: prop[3],
        actions: (
          // we've added some custom button actions
          <div className="actions-right">
            <FormGroup check>
            <Label check>
            <Input type="checkbox" />
            <span className="form-check-sign" />
            </Label>
            </FormGroup>
            <br></br>
            <Button
              onClick={() => {
                let obj = data.find((o) => o.id === key);
                alert(
                  "You've clicked EDIT button on \n{ \nName: " +
                    obj.name +
                    ", \nposition: " +
                    obj.position +
                    ", \noffice: " +
                    obj.office +
                    ", \nage: " +
                    obj.age +
                    "\n}."
                );
              }}
              color="warning"
              size="sm"
              className={classNames("btn-icon btn-link like", {
                "btn-neutral": key < 5,
              })}
            >
              <i className="tim-icons icon-pencil" />
            </Button>{" "}
          </div>
        ),
      };
    })
  )

  const [alert, setAlert] = React.useState(null);
  // Parameters alerts. to stop the warning of calling setState of unmounted component
  React.useEffect(() => {
    return function cleanup() {
      var id = window.setTimeout(null, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  });

  const warningWithConfirmMessage = () => {
    setAlert(
      <ReactBSAlert
        warning
        style={{ display: "block", marginTop: "-100px" }}
        title="Effacer la sélection ?"
        onConfirm={() => successDelete()}
        onCancel={() => hideAlert()}
        confirmBtnBsStyle="success"
        cancelBtnBsStyle="danger"
        confirmBtnText="Confirmer"
        cancelBtnText="Annuler"
        showCancel
        btnSize=""
      >
      
      </ReactBSAlert>
    );
  };

  const successDelete = () => {
    setAlert(
      <ReactBSAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Confirmé"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnBsStyle="success"
        btnSize=""
      >
      </ReactBSAlert>
    );
  };

  const hideAlert = () => {
    setAlert(null);
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
                            verticalTabsIcons === "Réseau" ? "active" : ""
                          }
                          onClick={(e) =>
                            changeActiveTab(e, "verticalTabsIcons", "Réseau")
                          }
                        >
                          <i className="tim-icons icon-molecule-40" />
                          Réseau
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          className={
                            verticalTabsIcons === "Profil" ? "active" : ""
                          }
                          onClick={(e) =>
                            changeActiveTab(e, "verticalTabsIcons", "Profil")
                          }
                        >
                          <i className="tim-icons icon-single-02" />
                        Profil  
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>

                  <Col>
                  

                    <TabContent activeTab={verticalTabsIcons}>
                      <TabPane tabId="Vidéos">
                   {/* subcategories begin*/}
                   <Card>
                    <Nav className="nav-pills-info" pills>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsE === "Joueur" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsE", "Joueur")
                        }
                      >
                        Joueur
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsE === "Équipe" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsE", "Équipe")
                        }
                      >
                        Équipe
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
                    <TabPane tabId="Joueur">
                        {/* reactable begin*/}
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
                        {/* reactable ending*/}                      
                    </TabPane>  

                    <TabPane tabId="Équipe">
                        {/* reactable begin*/}
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
                        {/* reactable ending*/}  
                    </TabPane>   

                    <TabPane tabId="Adversaires">
                        {/* reactable begin*/}
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
                        {/* reactable ending*/}  
                    </TabPane>  
                  </TabContent>
                  </Card>

                      {/* subcategories ending*/}
                  </TabPane>
                    </TabContent>

                    <TabContent activeTab={verticalTabsIcons}>
                      <TabPane tabId="Résumés">
                   {/* subcategories begin*/}
                   <Card>
                    <Nav className="nav-pills-info" pills>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsD === "Joueur" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsD", "Joueur")
                        }
                      >
                        Joueur
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsD === "Équipe" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsD", "Équipe")
                        }
                      >
                        Équipe
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
                    <TabPane tabId="Joueur">
                        {/* reactable begin*/}
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
                        {/* reactable ending*/}                      
                    </TabPane>  

                    <TabPane tabId="Équipe">
                        {/* reactable begin*/}
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
                        {/* reactable ending*/}  
                    </TabPane>   

                    <TabPane tabId="Adversaires">
                        {/* reactable begin*/}
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
                        {/* reactable ending*/}  
                    </TabPane>  
                  </TabContent>
                  </Card>

                      {/* subcategories ending*/}
                  </TabPane>
                    </TabContent>

                    <TabContent activeTab={verticalTabsIcons}>
                      <TabPane tabId="Statistiques">
                    {/* subcategories begin*/}
                    <Card>
                    <Nav className="nav-pills-info" pills>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsC === "Joueur" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsC", "Joueur")
                        }
                      >
                        Joueur
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsC === "Équipe" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsC", "Équipe")
                        }
                      >
                        Équipe
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsC === "Adversaires" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsC", "Adversaires")
                        }
                      >
                        Adversaires
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent className="tab-space" activeTab={horizontalTabsC}>
                    <TabPane tabId="Joueur">
                        {/* reactable begin*/}
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
                        {/* reactable ending*/}                      
                    </TabPane>  

                    <TabPane tabId="Équipe">
                        {/* reactable begin*/}
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
                        {/* reactable ending*/}  
                    </TabPane>   

                    <TabPane tabId="Adversaires">
                        {/* reactable begin*/}
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
                        {/* reactable ending*/}  
                    </TabPane>  
                  </TabContent>
                  </Card>

                      {/* subcategories ending*/}
                  </TabPane>
                    </TabContent>

                    <TabContent activeTab={verticalTabsIcons}>
                      <TabPane tabId="Réseau">
                    {/* subcategories begin*/}
                    <Card>
                    <Nav className="nav-pills-info" pills>
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
                  </Nav>
                  <TabContent className="tab-space" activeTab={horizontalTabsA}>
                    <TabPane tabId="Joueur">                   
                    </TabPane>  
                    <TabPane tabId="Membres">
                    </TabPane>   

                    <TabPane tabId="Coachs">
                        {/* reactable begin*/}
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
                        {/* reactable ending*/}  
                    </TabPane>  

                    <TabPane tabId="Membres">
                        {/* reactable begin*/}
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
                        {/* reactable ending*/}  
                    </TabPane>
                  </TabContent>
                  </Card>

                      {/* subcategories ending*/}
                      
                  </TabPane>
                    </TabContent>

                    <TabContent activeTab={verticalTabsIcons}>
                      <TabPane tabId="Profil">
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
                      src={require("assets/img/emilyz.jpg").default}
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

export default CommunauteAgent;
