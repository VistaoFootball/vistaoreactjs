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
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

const Panels = () => {
  const [singleSelect, setsingleSelect] = React.useState(null);
  const [multipleSelect, setmultipleSelect] = React.useState(null);
  const [horizontalTabsNav, sethorizontalTabsNav] = React.useState("Analyse");
  const [openedCollapseSummaryDetail, setopenedCollapseSummaryDetail] = React.useState(false);
  const [openedCollapseTacticalsys, setopenedCollapseTacticalsys] = React.useState(false);
  const [openedCollapseInfrastructures, setopenedCollapseInfrastructures] = React.useState(false);
  const [openedCollapseThree, setopenedCollapseThree] = React.useState(false);

  // with this function we change the active tab for all the tabs in this page
  const changeActiveTab = (e, tabState, tabName) => {
    e.preventDefault();
    switch (tabState) {
        case "horizontalTabsNav":
          sethorizontalTabsNav(tabName);
          break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="content">
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
                              Modifier 
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Supprimer l'analyse
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                        </div>
        <Row>
          <Col md="12">
          <Nav className="nav-pills-info" pills>
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabsNav === "Analyse" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabsNav", "Analyse")
                      }
                    >
                      Analyse
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabsNav === "Infos" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabsNav", "Infos")
                      }
                    >
                      Infos
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent className="tab-space" activeTab={horizontalTabsNav}>
                  <TabPane tabId="Analyse"> 
                  <Card style={{backgroundColor:'transparent'}}>
                  <CardTitle tag="h2">
                  <i className="tim-icons icon-chart-pie-36" /> HomeTeam v AwayTeam
                </CardTitle>
                <Col md="4">
                    <span><i className="tim-icons icon-check-2"/> Video Context</span>
                    <br></br>
                    <span><i className="tim-icons icon-calendar-60"/> DateTime</span>
                    <br></br>
			              <span><i className="tim-icons icon-video-66"/> Creator </span>
                    <br></br>
                    <span><i className="tim-icons icon-user-run"/> Players</span>
                    <br></br>
			              <span><i className="tim-icons icon-square-pin"/> Spaces filter </span>
                    <br></br>
			              <span><i className="tim-icons icon-watch-time"/> Time in/out filter</span>
                    </Col>
                  </Card>
                  <Card>
                    <br></br>
                    <span>Chart display area</span>
                    <br></br>
                  </Card>
                  </TabPane>
                  <TabPane tabId="Infos"> 
                  <Card>
                  <Card>
                  <div
                aria-multiselectable={false}
                className="card-collapse"
                id="accordion"
                role="tablist"
              >
                <Card className="card-plain">
                  <CardHeader role="tab">
                    <a 
                      aria-expanded={openedCollapseSummaryDetail}
                      href="#pablo"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      onClick={(e) => {
                        e.preventDefault();
                        setopenedCollapseSummaryDetail(!openedCollapseSummaryDetail);
                      }}
                    >
                      Détail de l'analyse{" "}
                      <i className="tim-icons icon-minimal-down" />
                    </a>
                  
                  </CardHeader>
                  <Collapse role="tabpanel" isOpen={openedCollapseSummaryDetail}>
                  <Card>
                    <CardBody>
                    <span><i className="tim-icons icon-check-2"/> Analysis title - type</span>
                    <br></br>
                    <span><i className="tim-icons icon-check-2"/> Video Context</span>
                    <br></br>
                    <span><i className="tim-icons icon-pin"/> HomeScore - AwayScore</span>
                    <br></br>
                    <span><i className="tim-icons icon-calendar-60"/> DateTime - VideoDuration</span>
                    <br></br>
			              <span><i className="tim-icons icon-video-66"/> Creator - CountViews</span>
                    <br></br>
			              <span><i className="tim-icons icon-lock-circle"/> Privacy</span>
                    <br></br>
			              <span><i className="tim-icons icon-tag"/> Tags</span>
                    
                    </CardBody>
                  </Card>
                </Collapse>
              </Card>
            </div>
              <div
                aria-multiselectable={false}
                className="card-collapse"
                id="accordion"
                role="tablist"
              >
                <Card className="card-plain">
                  <CardHeader role="tab">
                    <a 
                      aria-expanded={openedCollapseTacticalsys}
                      href="#pablo"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      onClick={(e) => {
                        e.preventDefault();
                        setopenedCollapseTacticalsys(!openedCollapseTacticalsys);
                      }}
                    >
                      Systèmes tactiques{" "}
                      <i className="tim-icons icon-minimal-down" />
                    </a>
                  
                  </CardHeader>
                  <Collapse role="tabpanel" isOpen={openedCollapseTacticalsys}>
                  <CardBody>
                  <Card>
                  <label>Système(s) tactique de l'équipe ?</label>
                  <Select
                      className="react-select info"
                      classNamePrefix="react-select"
                      placeholder=""
                      name="multipleSelect"
                      closeMenuOnSelect={false}
                      isMulti
                      Tagsjoueurs={multipleSelect}
                      onChange={(Tagsjoueurs) => setmultipleSelect(Tagsjoueurs)}
                      options={[
                        {
                          value: "",
                          label: "Mon effectif",
                          isDisabled: true,
                        },
                        { value: "1", label:"4-4-2"},
                        { value: "2", label:"4-2-1-2-1"},
                        { value: "3", label:"4-3-2-1"},
                        { value: "4", label:"4-1-2-2-1"},
                        { value: "5", label:"4-1-2-1-2"},
                        { value: "6", label:"4-1-2-1-2"},
                        { value: "7", label:"4-2-3-1"},
                        { value: "8", label:"4-1-4-1"},
                        { value: "9", label:"4-2-1-3"},
                        { value: "10", label:"4-2-1-3"},
                        { value: "11", label:"4-1-2-3"},
                        { value: "12", label:"4-1-2-3"},
                        { value: "13", label:"3-4-2-1"},
                        { value: "14", label:"3-1-4-1-1"},
                        { value: "15", label:"5-1-2-1-1"},
                        { value: "16", label:"5-1-2-2"},
                        { value: "17", label:"5-3-2"},
                        { value: "18", label:"5-2-2-1"},                        
                      ]}
                    />
                      <label>Système(s) tactique de l'adversaire ?</label>
                  <Select
                      className="react-select info"
                      classNamePrefix="react-select"
                      placeholder=""
                      name="multipleSelect"
                      closeMenuOnSelect={false}
                      isMulti
                      Tagsjoueurs={multipleSelect}
                      onChange={(Tagsjoueurs) => setmultipleSelect(Tagsjoueurs)}
                      options={[
                        {
                          value: "",
                          label: "Mon effectif",
                          isDisabled: true,
                        },
                        { value: "1", label:"4-4-2"},
                        { value: "2", label:"4-2-1-2-1"},
                        { value: "3", label:"4-3-2-1"},
                        { value: "4", label:"4-1-2-2-1"},
                        { value: "5", label:"4-1-2-1-2"},
                        { value: "6", label:"4-1-2-1-2"},
                        { value: "7", label:"4-2-3-1"},
                        { value: "8", label:"4-1-4-1"},
                        { value: "9", label:"4-2-1-3"},
                        { value: "10", label:"4-2-1-3"},
                        { value: "11", label:"4-1-2-3"},
                        { value: "12", label:"4-1-2-3"},
                        { value: "13", label:"3-4-2-1"},
                        { value: "14", label:"3-1-4-1-1"},
                        { value: "15", label:"5-1-2-1-1"},
                        { value: "16", label:"5-1-2-2"},
                        { value: "17", label:"5-3-2"},
                        { value: "18", label:"5-2-2-1"},                        
                      ]}
                    />
                    </Card> 
                  </CardBody>
                </Collapse>
              </Card>
            </div>
              <div
                aria-multiselectable={false}
                className="card-collapse"
                id="accordion"
                role="tablist"
              >
                <Card className="card-plain">
                  <CardHeader role="tab">
                    <a 
                      aria-expanded={openedCollapseInfrastructures}
                      href="#pablo"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      onClick={(e) => {
                        e.preventDefault();
                        setopenedCollapseInfrastructures(!openedCollapseInfrastructures);
                      }}
                    >
                      Infrastructures{" "}
                      <i className="tim-icons icon-minimal-down" />
                    </a>
                  
                  </CardHeader>
                  <Collapse role="tabpanel" isOpen={openedCollapseInfrastructures}>
                  <CardBody>
                  <Card>
                  <label>Type de surface ?</label>
                  <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    name="Choix_équipe"
                    equipe={singleSelect}
                    onChange={(equipe) => setsingleSelect(equipe)}
                    options={[
                      { value: "1", label: "Surface naturelle" },
                      { value: "2", label: "Surface synthétique" },
                      { value: "3", label: "Surface hybride" },
                      { value: "4", label: "Surface stabilisée" },
                    ]}
                    placeholder=""
                  />
                      <label>Vitesse de la surface</label>
                  <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    name="Choix_équipe"
                    equipe={singleSelect}
                    onChange={(equipe) => setsingleSelect(equipe)}
                    options={[
                      { value: "1", label: "Très lente" },
                      { value: "2", label: "Lente" },
                      { value: "3", label: "Standard" },
                      { value: "4", label: "Rapide" },
                      { value: "5", label: "Très rapide" },
                    ]}
                    placeholder=""
                  />
                  <label>Type d'enceinte</label>
                  <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    name="Choix_équipe"
                    equipe={singleSelect}
                    onChange={(equipe) => setsingleSelect(equipe)}
                    options={[
                      { value: "1", label: "Enceinte dégagée" },
                      { value: "2", label: "Enceinte semi-close" },
                      { value: "3", label: "Piste d'athlétisme" },
                      { value: "4", label: "Cuvette" },
                    ]}
                    placeholder=""
                  />
                  <label>Tribune ?</label>
                    <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    name="Choix_équipe"
                    equipe={singleSelect}
                    onChange={(equipe) => setsingleSelect(equipe)}
                    options={[
                      { value: "1", label: "oui" },
                      { value: "2", label: "non" },
                    ]}
                    placeholder=""
                  />
                  <label>Panneau d'affichage ?</label>
                    <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    name="Choix_équipe"
                    equipe={singleSelect}
                    onChange={(equipe) => setsingleSelect(equipe)}
                    options={[
                      { value: "1", label: "oui" },
                      { value: "2", label: "non" },
                    ]}
                    placeholder=""
                  />
                    </Card> 
                  </CardBody>
                </Collapse>
              </Card>
            </div>
            <div
                aria-multiselectable={false}
                className="card-collapse"
                id="accordion"
                role="tablist"
              >
                <Card className="card-plain">
                  <CardHeader role="tab">
                    <a 
                      aria-expanded={openedCollapseThree}
                      href="#pablo"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      onClick={(e) => {
                        e.preventDefault();
                        setopenedCollapseThree(!openedCollapseThree);
                      }}
                    >
                      Météo{" "}
                      <i className="tim-icons icon-minimal-down" />
                    </a>
                  
                  </CardHeader>
                  <Collapse role="tabpanel" isOpen={openedCollapseThree}>
                  <CardBody>
                  <Card>
                  <label>Climat</label>
                  <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    name="Choix_équipe"
                    equipe={singleSelect}
                    onChange={(equipe) => setsingleSelect(equipe)}
                    options={[
                      { value: "1", label: "Ciel dégagé"},
                      { value: "2", label: "Averses" },
                      { value: "3", label: "Pluie" },
                      { value: "4", label: "Pluie intense" },
                    ]}
                    placeholder=""
                  />
                      <label>Vent</label>
                  <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    name="Choix_équipe"
                    equipe={singleSelect}
                    onChange={(equipe) => setsingleSelect(equipe)}
                    options={[
                      { value: "1", label: "Aucun" },
                      { value: "2", label: "Léger" },
                      { value: "3", label: "Fort" },
                      { value: "4", label: "Très fort" },
                    ]}
                    placeholder=""
                  />
                    </Card> 
                  </CardBody>
                </Collapse>
              </Card>
            </div>
          </Card>
                  </Card>
                  </TabPane>
                </TabContent>
          </Col>
          <Col>
  </Col>
 </Row>
</div>
    </>
  );
};

export default Panels;
