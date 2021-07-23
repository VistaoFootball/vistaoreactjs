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
import Select from "react-select";
import Slider from "nouislider";


import {
  Card,
  CardBody,
  CardHeader,
  Nav,
  NavLink,
  NavItem,
  TabPane,
  TabContent,
  Row,
  Col,
  Button,
  Label,
  Input,
  Collapse,
  Table,
  FormGroup,

} from "reactstrap";

function Dashboard() {
  const [horizontalTabsC, sethorizontalTabsC] = React.useState("Global"); 
  const [horizontalTabsD, sethorizontalTabsD] = React.useState("Global");  
  const [horizontalTabsE, sethorizontalTabsE] = React.useState("Global");  
  const [verticalTabsIcons, setverticalTabsIcons] = React.useState("MyTeam");
  const [openedCollapseDataFilters, setopenedCollapseDataFilters] = React.useState(false);
  // with this function we change the active tab for all the tabs in this page
  const changeActiveTab = (e, tabState, tabName) => {
    e.preventDefault();
    switch (tabState) {
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
      default:
        break;
    }
  };

  const [multipleSelectPitchGround, setmultipleSelectPitchGround] = React.useState(null);
  const [multipleSelectPitchSpeed, setmultipleSelectPitchSpeed] = React.useState(null);
  const [multipleSelectOpponentTacticalSystem, setmultipleSelectOpponentTacticalSystem] = React.useState(null);
  const [multipleSelectMyTeamTacticalSystem, setmultipleSelectMyTeamTacticalSystem] = React.useState(null);
  const [multipleSelectContext, setmultipleSelectContext] = React.useState(null);
  const [multipleSelectMyTeam, setmultipleSelectMyTeam] = React.useState(null);
  const [multipleSelectVideoTitle, setmultipleSelectVideoTitle] = React.useState(null);
  const [multipleSelectMyTeamPlayer, setmultipleSelectMyTeamPlayer] = React.useState(null);
  const [multipleSelectZone, setmultipleSelectZone] = React.useState(null);
  const [multipleSelectAxis, setmultipleSelectAxis] = React.useState(null);


  const slider2Ref = React.useRef(null);
  React.useEffect(() => {

    var slider2 = slider2Ref.current;

    if (slider2.className === "slider slider-primary mb-3") {
      Slider.create(slider2, {
        start: [0, 100],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
  }, []);
  const slider3Ref = React.useRef(null);
  React.useEffect(() => {

    var slider3 = slider3Ref.current;

    if (slider3.className === "slider slider-primary mb-3") {
      Slider.create(slider3, {
        start: [0, 100],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
  }, []);
    const slider4Ref = React.useRef(null);
  React.useEffect(() => {

    var slider4 = slider4Ref.current;

    if (slider4.className === "slider slider-primary mb-3") {
      Slider.create(slider4, {
        start: [0, 100],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
  }, []);
  const slider5Ref = React.useRef(null);
  React.useEffect(() => {

    var slider5 = slider5Ref.current;

    if (slider5.className === "slider slider-primary mb-3") {
      Slider.create(slider5, {
        start: [0, 100],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
  }, []);
  const slider6Ref = React.useRef(null);
  React.useEffect(() => {

    var slider6 = slider6Ref.current;

    if (slider6.className === "slider slider-primary mb-3") {
      Slider.create(slider6, {
        start: [0, 100],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
  }, []);
  const slider7Ref = React.useRef(null);
  React.useEffect(() => {

    var slider7 = slider7Ref.current;

    if (slider7.className === "slider slider-primary mb-3") {
      Slider.create(slider7, {
        start: [0, 100],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 },
      });
    }
  }, []);
  
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
                    {/* subcategories begin*/}
                    <Card>
                    <Nav className="nav-pills-info" pills>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsC === "Global" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsC", "Global")
                        }
                      >
                        Global
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsC === "Joueurs" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsC", "Joueurs")
                        }
                      >
                        Individuel
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent className="tab-space" activeTab={horizontalTabsC}>
                  <TabPane tabId="Global">
                  <Row>
                    <Col>
                      <Card>
                        <div
                          aria-multiselectable={true}
                          className="card-collapse"
                          id="accordion"
                          role="tablist"
                          >
                        <Card className="card-plain">
                          <Collapse role="tabpanel" isOpen={openedCollapseDataFilters}>
                            </Collapse>
                            </Card>
                            <Card className="card-plain">
                          <CardHeader role="tab">
                            <a
                              aria-expanded={openedCollapseDataFilters}
                              href="#pablo"
                              data-parent="#accordion"
                              data-toggle="collapse"
                              onClick={(e) => {
                                e.preventDefault();
                                setopenedCollapseDataFilters(!openedCollapseDataFilters);
                              }}
                            >
                              Paramétrer les données{" "}
                              <i className="tim-icons icon-minimal-down" />
                            </a>
                          </CardHeader>
                          <Collapse role="tabpanel" isOpen={openedCollapseDataFilters}>
                            <CardBody>
                            <Row>
                            <Col md="12">
                              <br></br>
                            <Row>
                            <Col md="6">
                                  <FormGroup>
                                    <Input placeholder="Date initiale" type="text" />
                                  </FormGroup>
                              </Col>
                              <Col md="6">
                                  <FormGroup>
                                    <Input placeholder="Date finale" type="text" />
                                  </FormGroup>
                              </Col>
                            </Row>
                            <br></br>
                            <div
                              className="slider slider-primary mb-3"
                              ref={slider3Ref}
                            />
                            <br></br>
                             </Col> 
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Contexte(s)"
                                  name="VideoContext"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectContext}
                                  onChange={(value) => setmultipleSelectContext(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Contexte(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Opposition à l'entrainement" },
                                    { value: "2", label: "Match amical" },
                                    { value: "3", label: "Match de championnat" },
                                    { value: "4", label: "Match de coupe" },
                                    { value: "5", label: "Match de tournoi" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                              <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Équipe(s)"
                                  name="Myteam"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectMyTeam}
                                  onChange={(value) => setmultipleSelectMyTeam(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Équipe(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "MyTeam(s)'ClubName','Category','TeamNumber' " },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                            <Col md="12">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Match(s)"
                                  name="Matchs"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectVideoTitle}
                                  onChange={(value) => setmultipleSelectVideoTitle(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Match(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "My Team'ClubName','Category','TeamNumber' v  Opponent'ClubName','Category','TeamNumber'" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Système(s) équipe"
                                  name="MyteamSys"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectMyTeamTacticalSystem}
                                  onChange={(value) => setmultipleSelectMyTeamTacticalSystem(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Équipe(s)",
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
                                </FormGroup>
                              </Col>
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Système(s) adverse(s)"
                                  name="OpponentSys"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectOpponentTacticalSystem}
                                  onChange={(value) => setmultipleSelectOpponentTacticalSystem(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Match(s)",
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
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Surface(s)"
                                  name="Ground"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectPitchGround}
                                  onChange={(value) => setmultipleSelectPitchGround(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Surface(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Surface naturelle" },
                                    { value: "2", label: "Surface synthétique" },
                                    { value: "3", label: "Surface hybride" },
                                    { value: "4", label: "Surface stabilisée" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Vitesse surface"
                                  name="SpeedPitch"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectPitchSpeed}
                                  onChange={(value) => setmultipleSelectPitchSpeed(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Match(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Très lente" },
                                    { value: "2", label: "Lente" },
                                    { value: "3", label: "Standard" },
                                    { value: "4", label: "Rapide" },
                                    { value: "5", label: "Très rapide" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                            <Col md="12">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Joueur(s)"
                                  name="MyTeamPlayerss"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectMyTeamPlayer}
                                  onChange={(value) => setmultipleSelectMyTeamPlayer(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "joueur(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "'1st name' 'Last name'" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col md="6">
                              <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Zone(s)"
                                  name="multipleSelect"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectZone}
                                  onChange={(value) => setmultipleSelectZone(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Zone(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Basse" },
                                    { value: "2", label: "Médiane basse" },
                                    { value: "3", label: "Médiane haute" },
                                    { value: "4", label: "Haute" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                              <Col md="6">
                              <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Axe(s)"
                                  name="multipleSelect"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectAxis}
                                  onChange={(value) => setmultipleSelectAxis(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Axe(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Couloir droit" },
                                    { value: "2", label: "Axe droit" },
                                    { value: "3", label: "Axe" },
                                    { value: "4", label: "Axe gauche" },
                                    { value: "5", label: "Couloir gauche" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                             </Row>
                             <Row>
                            <Col>
                              <Card className="card-tasks text-left">
                                <CardHeader>
                                </CardHeader>
                                <CardBody>
                                  <div className="table-responsive table-full-width">
                                    <Table>
                                      <tbody>
                                        <tr>
                                          <td>
                                            <FormGroup check>
                                              <Label check>
                                                <Input defaultValue="" type="checkbox" />
                                                <span className="form-check-sign">
                                                  <span className="check" />
                                                </span>
                                              </Label>
                                            </FormGroup>
                                          </td>
                                          <td>
                                            <p className="title">Titre du graphique</p>
                                            <p className="text-muted">
                                              Data#1, Data#2
                                            </p>
                                          </td>

                                          <td>
                                            <p className="title">MatchsCount</p>
                                          </td>
                                          <td>
                                            <p className="title">DataCount</p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </div>
                                </CardBody>
                              </Card>
                            </Col>
                            </Row>
                            </CardBody>
                          </Collapse>
                          <Button color="success">
                         <i/> Créer un rapport
                        </Button>
                        </Card>
                       </div>
                      </Card>
                    </Col>
                  </Row>
                  </TabPane>   

                    <TabPane tabId="Joueurs">
                    <Row>
                    <Col>
                      <Card>
                        <div
                          aria-multiselectable={true}
                          className="card-collapse"
                          id="accordion"
                          role="tablist"
                          >
                        <Card className="card-plain">
                          <Collapse role="tabpanel" isOpen={openedCollapseDataFilters}>
                            </Collapse>
                            </Card>
                            <Card className="card-plain">
                          <CardHeader role="tab">
                            <a
                              aria-expanded={openedCollapseDataFilters}
                              href="#pablo"
                              data-parent="#accordion"
                              data-toggle="collapse"
                              onClick={(e) => {
                                e.preventDefault();
                                setopenedCollapseDataFilters(!openedCollapseDataFilters);
                              }}
                            >
                              Paramétrer les données{" "}
                              <i className="tim-icons icon-minimal-down" />
                            </a>
                          </CardHeader>
                          <Collapse role="tabpanel" isOpen={openedCollapseDataFilters}>
                            <CardBody>
                            <Row>
                            <Col md="12">
                              <br></br>
                            <Row>
                            <Col md="6">
                                  <FormGroup>
                                    <Input placeholder="Date initiale" type="text" />
                                  </FormGroup>
                              </Col>
                              <Col md="6">
                                  <FormGroup>
                                    <Input placeholder="Date finale" type="text" />
                                  </FormGroup>
                              </Col>
                            </Row>
                            <br></br>
                            <div
                              className="slider slider-primary mb-3"
                              ref={slider2Ref}
                            />
                            <br></br>
                             </Col> 
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Contexte(s)"
                                  name="VideoContext"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectContext}
                                  onChange={(value) => setmultipleSelectContext(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Contexte(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Opposition à l'entrainement" },
                                    { value: "2", label: "Match amical" },
                                    { value: "3", label: "Match de championnat" },
                                    { value: "4", label: "Match de coupe" },
                                    { value: "5", label: "Match de tournoi" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                              <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Équipe(s)"
                                  name="Myteam"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectMyTeam}
                                  onChange={(value) => setmultipleSelectMyTeam(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Équipe(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "MyTeam(s)'ClubName','Category','TeamNumber' " },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                            <Col md="12">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Match(s)"
                                  name="Matchs"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectVideoTitle}
                                  onChange={(value) => setmultipleSelectVideoTitle(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Match(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "My Team'ClubName','Category','TeamNumber' v  Opponent'ClubName','Category','TeamNumber'" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Système(s) équipe"
                                  name="MyteamSys"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectMyTeamTacticalSystem}
                                  onChange={(value) => setmultipleSelectMyTeamTacticalSystem(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Équipe(s)",
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
                                </FormGroup>
                              </Col>
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Système(s) adverse(s)"
                                  name="OpponentSys"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectOpponentTacticalSystem}
                                  onChange={(value) => setmultipleSelectOpponentTacticalSystem(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Match(s)",
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
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Surface(s)"
                                  name="Ground"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectPitchGround}
                                  onChange={(value) => setmultipleSelectPitchGround(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Surface(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Surface naturelle" },
                                    { value: "2", label: "Surface synthétique" },
                                    { value: "3", label: "Surface hybride" },
                                    { value: "4", label: "Surface stabilisée" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Vitesse surface"
                                  name="SpeedPitch"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectPitchSpeed}
                                  onChange={(value) => setmultipleSelectPitchSpeed(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Match(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Très lente" },
                                    { value: "2", label: "Lente" },
                                    { value: "3", label: "Standard" },
                                    { value: "4", label: "Rapide" },
                                    { value: "5", label: "Très rapide" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                            <Col md="12">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Joueur(s)"
                                  name="MyTeamPlayerss"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectMyTeamPlayer}
                                  onChange={(value) => setmultipleSelectMyTeamPlayer(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "joueur(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "'1st name' 'Last name'" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col md="6">
                              <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Zone(s)"
                                  name="multipleSelect"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectZone}
                                  onChange={(value) => setmultipleSelectZone(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Zone(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Basse" },
                                    { value: "2", label: "Médiane basse" },
                                    { value: "3", label: "Médiane haute" },
                                    { value: "4", label: "Haute" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                              <Col md="6">
                              <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Axe(s)"
                                  name="multipleSelect"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectAxis}
                                  onChange={(value) => setmultipleSelectAxis(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Axe(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Couloir droit" },
                                    { value: "2", label: "Axe droit" },
                                    { value: "3", label: "Axe" },
                                    { value: "4", label: "Axe gauche" },
                                    { value: "5", label: "Couloir gauche" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                             </Row>
                             <Row>
                            <Col>
                              <Card className="card-tasks text-left">
                                <CardHeader>
                                </CardHeader>
                                <CardBody>
                                  <div className="table-responsive table-full-width">
                                    <Table>
                                      <tbody>
                                        <tr>
                                          <td>
                                            <FormGroup check>
                                              <Label check>
                                                <Input defaultValue="" type="checkbox" />
                                                <span className="form-check-sign">
                                                  <span className="check" />
                                                </span>
                                              </Label>
                                            </FormGroup>
                                          </td>
                                          <td>
                                            <p className="title">Titre du graphique</p>
                                            <p className="text-muted">
                                              Data#1, Data#2
                                            </p>
                                          </td>

                                          <td>
                                            <p className="title">MatchsCount</p>
                                          </td>
                                          <td>
                                            <p className="title">DataCount</p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </div>
                                </CardBody>
                              </Card>
                            </Col>
                            </Row>
                            </CardBody>
                          </Collapse>
                          <Button color="success">
                         <i/> Créer un rapport
                        </Button>
                        </Card>
                       </div>
                      </Card>
                    </Col>
                  </Row>
                    </TabPane>   
                    </TabContent>
                    </Card>

                      {/* subcategories ending*/}
                  </TabPane>
                    </TabContent>
                    <TabContent activeTab={verticalTabsIcons}>
                      <TabPane tabId="MyTeam">
                    {/* subcategories begin*/}
                    <Card>
                    <Nav className="nav-pills-info" pills>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsD === "Global" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsD", "Global")
                        }
                      >
                        Global
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsD === "Joueurs" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsD", "Joueurs")
                        }
                      >
                        Individuel
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent className="tab-space" activeTab={horizontalTabsD}>
                    <TabPane tabId="Global">
                    <Row>
                    <Col>
                      <Card>
                        <div
                          aria-multiselectable={true}
                          className="card-collapse"
                          id="accordion"
                          role="tablist"
                          >
                        <Card className="card-plain">
                          <Collapse role="tabpanel" isOpen={openedCollapseDataFilters}>
                            </Collapse>
                            </Card>
                            <Card className="card-plain">
                          <CardHeader role="tab">
                            <a
                              aria-expanded={openedCollapseDataFilters}
                              href="#pablo"
                              data-parent="#accordion"
                              data-toggle="collapse"
                              onClick={(e) => {
                                e.preventDefault();
                                setopenedCollapseDataFilters(!openedCollapseDataFilters);
                              }}
                            >
                              Paramétrer les données{" "}
                              <i className="tim-icons icon-minimal-down" />
                            </a>
                          </CardHeader>
                          <Collapse role="tabpanel" isOpen={openedCollapseDataFilters}>
                            <CardBody>
                            <Row>
                            <Col md="12">
                              <br></br>
                            <Row>
                            <Col md="6">
                                  <FormGroup>
                                    <Input placeholder="Date initiale" type="text" />
                                  </FormGroup>
                              </Col>
                              <Col md="6">
                                  <FormGroup>
                                    <Input placeholder="Date finale" type="text" />
                                  </FormGroup>
                              </Col>
                            </Row>
                            <br></br>
                            <div
                              className="slider slider-primary mb-3"
                              ref={slider4Ref}
                            />
                            <br></br>
                             </Col> 
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Contexte(s)"
                                  name="VideoContext"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectContext}
                                  onChange={(value) => setmultipleSelectContext(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Contexte(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Opposition à l'entrainement" },
                                    { value: "2", label: "Match amical" },
                                    { value: "3", label: "Match de championnat" },
                                    { value: "4", label: "Match de coupe" },
                                    { value: "5", label: "Match de tournoi" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                              <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Équipe(s)"
                                  name="Myteam"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectMyTeam}
                                  onChange={(value) => setmultipleSelectMyTeam(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Équipe(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "MyTeam(s)'ClubName','Category','TeamNumber' " },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                            <Col md="12">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Match(s)"
                                  name="Matchs"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectVideoTitle}
                                  onChange={(value) => setmultipleSelectVideoTitle(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Match(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "My Team'ClubName','Category','TeamNumber' v  Opponent'ClubName','Category','TeamNumber'" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Système(s) équipe"
                                  name="MyteamSys"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectMyTeamTacticalSystem}
                                  onChange={(value) => setmultipleSelectMyTeamTacticalSystem(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Équipe(s)",
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
                                </FormGroup>
                              </Col>
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Système(s) adverse(s)"
                                  name="OpponentSys"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectOpponentTacticalSystem}
                                  onChange={(value) => setmultipleSelectOpponentTacticalSystem(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Match(s)",
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
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Surface(s)"
                                  name="Ground"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectPitchGround}
                                  onChange={(value) => setmultipleSelectPitchGround(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Surface(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Surface naturelle" },
                                    { value: "2", label: "Surface synthétique" },
                                    { value: "3", label: "Surface hybride" },
                                    { value: "4", label: "Surface stabilisée" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Vitesse surface"
                                  name="SpeedPitch"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectPitchSpeed}
                                  onChange={(value) => setmultipleSelectPitchSpeed(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Match(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Très lente" },
                                    { value: "2", label: "Lente" },
                                    { value: "3", label: "Standard" },
                                    { value: "4", label: "Rapide" },
                                    { value: "5", label: "Très rapide" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                            <Col md="12">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Joueur(s)"
                                  name="MyTeamPlayerss"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectMyTeamPlayer}
                                  onChange={(value) => setmultipleSelectMyTeamPlayer(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "joueur(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "'1st name' 'Last name'" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col md="6">
                              <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Zone(s)"
                                  name="multipleSelect"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectZone}
                                  onChange={(value) => setmultipleSelectZone(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Zone(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Basse" },
                                    { value: "2", label: "Médiane basse" },
                                    { value: "3", label: "Médiane haute" },
                                    { value: "4", label: "Haute" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                              <Col md="6">
                              <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Axe(s)"
                                  name="multipleSelect"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectAxis}
                                  onChange={(value) => setmultipleSelectAxis(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Axe(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Couloir droit" },
                                    { value: "2", label: "Axe droit" },
                                    { value: "3", label: "Axe" },
                                    { value: "4", label: "Axe gauche" },
                                    { value: "5", label: "Couloir gauche" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                             </Row>
                             <Row>
                            <Col>
                              <Card className="card-tasks text-left">
                                <CardHeader>
                                </CardHeader>
                                <CardBody>
                                  <div className="table-responsive table-full-width">
                                    <Table>
                                      <tbody>
                                        <tr>
                                          <td>
                                            <FormGroup check>
                                              <Label check>
                                                <Input defaultValue="" type="checkbox" />
                                                <span className="form-check-sign">
                                                  <span className="check" />
                                                </span>
                                              </Label>
                                            </FormGroup>
                                          </td>
                                          <td>
                                            <p className="title">Titre du graphique</p>
                                            <p className="text-muted">
                                              Data#1, Data#2
                                            </p>
                                          </td>

                                          <td>
                                            <p className="title">MatchsCount</p>
                                          </td>
                                          <td>
                                            <p className="title">DataCount</p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </div>
                                </CardBody>
                              </Card>
                            </Col>
                            </Row>
                            </CardBody>
                          </Collapse>
                          <Button color="success">
                         <i/> Créer un rapport
                        </Button>
                        </Card>
                       </div>
                      </Card>
                    </Col>
                  </Row>
                    </TabPane>  
                    <TabPane tabId="Joueurs">
                    <Row>
                    <Col>
                      <Card>
                        <div
                          aria-multiselectable={true}
                          className="card-collapse"
                          id="accordion"
                          role="tablist"
                          >
                        <Card className="card-plain">
                          <Collapse role="tabpanel" isOpen={openedCollapseDataFilters}>
                            </Collapse>
                            </Card>
                            <Card className="card-plain">
                          <CardHeader role="tab">
                            <a
                              aria-expanded={openedCollapseDataFilters}
                              href="#pablo"
                              data-parent="#accordion"
                              data-toggle="collapse"
                              onClick={(e) => {
                                e.preventDefault();
                                setopenedCollapseDataFilters(!openedCollapseDataFilters);
                              }}
                            >
                              Paramétrer les données{" "}
                              <i className="tim-icons icon-minimal-down" />
                            </a>
                          </CardHeader>
                          <Collapse role="tabpanel" isOpen={openedCollapseDataFilters}>
                            <CardBody>
                            <Row>
                            <Col md="12">
                              <br></br>
                            <Row>
                            <Col md="6">
                                  <FormGroup>
                                    <Input placeholder="Date initiale" type="text" />
                                  </FormGroup>
                              </Col>
                              <Col md="6">
                                  <FormGroup>
                                    <Input placeholder="Date finale" type="text" />
                                  </FormGroup>
                              </Col>
                            </Row>
                            <br></br>
                            <div
                              className="slider slider-primary mb-3"
                              ref={slider5Ref}
                            />
                            <br></br>
                             </Col> 
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Contexte(s)"
                                  name="VideoContext"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectContext}
                                  onChange={(value) => setmultipleSelectContext(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Contexte(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Opposition à l'entrainement" },
                                    { value: "2", label: "Match amical" },
                                    { value: "3", label: "Match de championnat" },
                                    { value: "4", label: "Match de coupe" },
                                    { value: "5", label: "Match de tournoi" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                              <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Équipe(s)"
                                  name="Myteam"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectMyTeam}
                                  onChange={(value) => setmultipleSelectMyTeam(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Équipe(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "MyTeam(s)'ClubName','Category','TeamNumber' " },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                            <Col md="12">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Match(s)"
                                  name="Matchs"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectVideoTitle}
                                  onChange={(value) => setmultipleSelectVideoTitle(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Match(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "My Team'ClubName','Category','TeamNumber' v  Opponent'ClubName','Category','TeamNumber'" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Système(s) équipe"
                                  name="MyteamSys"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectMyTeamTacticalSystem}
                                  onChange={(value) => setmultipleSelectMyTeamTacticalSystem(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Équipe(s)",
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
                                </FormGroup>
                              </Col>
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Système(s) adverse(s)"
                                  name="OpponentSys"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectOpponentTacticalSystem}
                                  onChange={(value) => setmultipleSelectOpponentTacticalSystem(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Match(s)",
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
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Surface(s)"
                                  name="Ground"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectPitchGround}
                                  onChange={(value) => setmultipleSelectPitchGround(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Surface(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Surface naturelle" },
                                    { value: "2", label: "Surface synthétique" },
                                    { value: "3", label: "Surface hybride" },
                                    { value: "4", label: "Surface stabilisée" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Vitesse surface"
                                  name="SpeedPitch"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectPitchSpeed}
                                  onChange={(value) => setmultipleSelectPitchSpeed(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Match(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Très lente" },
                                    { value: "2", label: "Lente" },
                                    { value: "3", label: "Standard" },
                                    { value: "4", label: "Rapide" },
                                    { value: "5", label: "Très rapide" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                            <Col md="12">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Joueur(s)"
                                  name="MyTeamPlayerss"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectMyTeamPlayer}
                                  onChange={(value) => setmultipleSelectMyTeamPlayer(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "joueur(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "'1st name' 'Last name'" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col md="6">
                              <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Zone(s)"
                                  name="multipleSelect"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectZone}
                                  onChange={(value) => setmultipleSelectZone(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Zone(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Basse" },
                                    { value: "2", label: "Médiane basse" },
                                    { value: "3", label: "Médiane haute" },
                                    { value: "4", label: "Haute" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                              <Col md="6">
                              <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Axe(s)"
                                  name="multipleSelect"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectAxis}
                                  onChange={(value) => setmultipleSelectAxis(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Axe(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Couloir droit" },
                                    { value: "2", label: "Axe droit" },
                                    { value: "3", label: "Axe" },
                                    { value: "4", label: "Axe gauche" },
                                    { value: "5", label: "Couloir gauche" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                             </Row>
                             <Row>
                            <Col>
                              <Card className="card-tasks text-left">
                                <CardHeader>
                                </CardHeader>
                                <CardBody>
                                  <div className="table-responsive table-full-width">
                                    <Table>
                                      <tbody>
                                        <tr>
                                          <td>
                                            <FormGroup check>
                                              <Label check>
                                                <Input defaultValue="" type="checkbox" />
                                                <span className="form-check-sign">
                                                  <span className="check" />
                                                </span>
                                              </Label>
                                            </FormGroup>
                                          </td>
                                          <td>
                                            <p className="title">Titre du graphique</p>
                                            <p className="text-muted">
                                              Data#1, Data#2
                                            </p>
                                          </td>

                                          <td>
                                            <p className="title">MatchsCount</p>
                                          </td>
                                          <td>
                                            <p className="title">DataCount</p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </div>
                                </CardBody>
                              </Card>
                            </Col>
                            </Row>
                            </CardBody>
                          </Collapse>
                          <Button color="success">
                         <i/> Créer un rapport
                        </Button>
                        </Card>
                       </div>
                      </Card>
                    </Col>
                  </Row>
                    </TabPane>   
                  </TabContent>
                  </Card>
                  </TabPane>
                    </TabContent>
                    <TabContent activeTab={verticalTabsIcons}>
                      <TabPane tabId="OpponentTeam">
                     <Card>
                    <Nav className="nav-pills-info" pills>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsE === "Global" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsE", "Global")
                        }
                      >
                        Global
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabsE === "Joueurs" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabsE", "Joueurs")
                        }
                      >
                        Individuel
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent className="tab-space" activeTab={horizontalTabsE}>
                    <TabPane tabId="Global">
                    <Row>
                    <Col>
                      <Card>
                        <div
                          aria-multiselectable={true}
                          className="card-collapse"
                          id="accordion"
                          role="tablist"
                          >
                        <Card className="card-plain">
                          <Collapse role="tabpanel" isOpen={openedCollapseDataFilters}>
                            </Collapse>
                            </Card>
                            <Card className="card-plain">
                          <CardHeader role="tab">
                            <a
                              aria-expanded={openedCollapseDataFilters}
                              href="#pablo"
                              data-parent="#accordion"
                              data-toggle="collapse"
                              onClick={(e) => {
                                e.preventDefault();
                                setopenedCollapseDataFilters(!openedCollapseDataFilters);
                              }}
                            >
                              Paramétrer les données{" "}
                              <i className="tim-icons icon-minimal-down" />
                            </a>
                          </CardHeader>
                          <Collapse role="tabpanel" isOpen={openedCollapseDataFilters}>
                            <CardBody>
                            <Row>
                            <Col md="12">
                              <br></br>
                            <Row>
                            <Col md="6">
                                  <FormGroup>
                                    <Input placeholder="Date initiale" type="text" />
                                  </FormGroup>
                              </Col>
                              <Col md="6">
                                  <FormGroup>
                                    <Input placeholder="Date finale" type="text" />
                                  </FormGroup>
                              </Col>
                            </Row>
                            <br></br>
                            <div
                              className="slider slider-primary mb-3"
                              ref={slider6Ref}
                            />
                            <br></br>
                             </Col> 
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Contexte(s)"
                                  name="VideoContext"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectContext}
                                  onChange={(value) => setmultipleSelectContext(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Contexte(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Opposition à l'entrainement" },
                                    { value: "2", label: "Match amical" },
                                    { value: "3", label: "Match de championnat" },
                                    { value: "4", label: "Match de coupe" },
                                    { value: "5", label: "Match de tournoi" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                              <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Équipe(s)"
                                  name="Myteam"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectMyTeam}
                                  onChange={(value) => setmultipleSelectMyTeam(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Équipe(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "MyTeam(s)'ClubName','Category','TeamNumber' " },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                            <Col md="12">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Match(s)"
                                  name="Matchs"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectVideoTitle}
                                  onChange={(value) => setmultipleSelectVideoTitle(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Match(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "My Team'ClubName','Category','TeamNumber' v  Opponent'ClubName','Category','TeamNumber'" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Système(s) équipe"
                                  name="MyteamSys"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectMyTeamTacticalSystem}
                                  onChange={(value) => setmultipleSelectMyTeamTacticalSystem(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Équipe(s)",
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
                                </FormGroup>
                              </Col>
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Système(s) adverse(s)"
                                  name="OpponentSys"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectOpponentTacticalSystem}
                                  onChange={(value) => setmultipleSelectOpponentTacticalSystem(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Match(s)",
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
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Surface(s)"
                                  name="Ground"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectPitchGround}
                                  onChange={(value) => setmultipleSelectPitchGround(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Surface(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Surface naturelle" },
                                    { value: "2", label: "Surface synthétique" },
                                    { value: "3", label: "Surface hybride" },
                                    { value: "4", label: "Surface stabilisée" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Vitesse surface"
                                  name="SpeedPitch"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectPitchSpeed}
                                  onChange={(value) => setmultipleSelectPitchSpeed(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Match(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Très lente" },
                                    { value: "2", label: "Lente" },
                                    { value: "3", label: "Standard" },
                                    { value: "4", label: "Rapide" },
                                    { value: "5", label: "Très rapide" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                            <Col md="12">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Joueur(s)"
                                  name="MyTeamPlayerss"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectMyTeamPlayer}
                                  onChange={(value) => setmultipleSelectMyTeamPlayer(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "joueur(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "'1st name' 'Last name'" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col md="6">
                              <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Zone(s)"
                                  name="multipleSelect"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectZone}
                                  onChange={(value) => setmultipleSelectZone(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Zone(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Basse" },
                                    { value: "2", label: "Médiane basse" },
                                    { value: "3", label: "Médiane haute" },
                                    { value: "4", label: "Haute" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                              <Col md="6">
                              <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Axe(s)"
                                  name="multipleSelect"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectAxis}
                                  onChange={(value) => setmultipleSelectAxis(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Axe(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Couloir droit" },
                                    { value: "2", label: "Axe droit" },
                                    { value: "3", label: "Axe" },
                                    { value: "4", label: "Axe gauche" },
                                    { value: "5", label: "Couloir gauche" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                             </Row>
                             <Row>
                            <Col>
                              <Card className="card-tasks text-left">
                                <CardHeader>
                                </CardHeader>
                                <CardBody>
                                  <div className="table-responsive table-full-width">
                                    <Table>
                                      <tbody>
                                        <tr>
                                          <td>
                                            <FormGroup check>
                                              <Label check>
                                                <Input defaultValue="" type="checkbox" />
                                                <span className="form-check-sign">
                                                  <span className="check" />
                                                </span>
                                              </Label>
                                            </FormGroup>
                                          </td>
                                          <td>
                                            <p className="title">Titre du graphique</p>
                                            <p className="text-muted">
                                              Data#1, Data#2
                                            </p>
                                          </td>

                                          <td>
                                            <p className="title">MatchsCount</p>
                                          </td>
                                          <td>
                                            <p className="title">DataCount</p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </div>
                                </CardBody>
                              </Card>
                            </Col>
                            </Row>
                            </CardBody>
                          </Collapse>
                          <Button color="success">
                         <i/> Créer un rapport
                        </Button>
                        </Card>
                       </div>
                      </Card>
                    </Col>
                  </Row>
                    </TabPane>  

                    <TabPane tabId="Joueurs">
                    <Row>
                    <Col>
                      <Card>
                        <div
                          aria-multiselectable={true}
                          className="card-collapse"
                          id="accordion"
                          role="tablist"
                          >
                        <Card className="card-plain">
                          <Collapse role="tabpanel" isOpen={openedCollapseDataFilters}>
                            </Collapse>
                            </Card>
                            <Card className="card-plain">
                          <CardHeader role="tab">
                            <a
                              aria-expanded={openedCollapseDataFilters}
                              href="#pablo"
                              data-parent="#accordion"
                              data-toggle="collapse"
                              onClick={(e) => {
                                e.preventDefault();
                                setopenedCollapseDataFilters(!openedCollapseDataFilters);
                              }}
                            >
                              Paramétrer les données{" "}
                              <i className="tim-icons icon-minimal-down" />
                            </a>
                          </CardHeader>
                          <Collapse role="tabpanel" isOpen={openedCollapseDataFilters}>
                            <CardBody>
                            <Row>
                            <Col md="12">
                              <br></br>
                            <Row>
                            <Col md="6">
                                  <FormGroup>
                                    <Input placeholder="Date initiale" type="text" />
                                  </FormGroup>
                              </Col>
                              <Col md="6">
                                  <FormGroup>
                                    <Input placeholder="Date finale" type="text" />
                                  </FormGroup>
                              </Col>
                            </Row>
                            <br></br>
                            <div
                              className="slider slider-primary mb-3"
                              ref={slider7Ref}
                            />
                            <br></br>
                             </Col> 
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Contexte(s)"
                                  name="VideoContext"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectContext}
                                  onChange={(value) => setmultipleSelectContext(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Contexte(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Opposition à l'entrainement" },
                                    { value: "2", label: "Match amical" },
                                    { value: "3", label: "Match de championnat" },
                                    { value: "4", label: "Match de coupe" },
                                    { value: "5", label: "Match de tournoi" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                              <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Équipe(s)"
                                  name="Myteam"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectMyTeam}
                                  onChange={(value) => setmultipleSelectMyTeam(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Équipe(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "MyTeam(s)'ClubName','Category','TeamNumber' " },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                            <Col md="12">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Match(s)"
                                  name="Matchs"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectVideoTitle}
                                  onChange={(value) => setmultipleSelectVideoTitle(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Match(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "My Team'ClubName','Category','TeamNumber' v  Opponent'ClubName','Category','TeamNumber'" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Système(s) équipe"
                                  name="MyteamSys"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectMyTeamTacticalSystem}
                                  onChange={(value) => setmultipleSelectMyTeamTacticalSystem(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Équipe(s)",
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
                                </FormGroup>
                              </Col>
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Système(s) adverse(s)"
                                  name="OpponentSys"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectOpponentTacticalSystem}
                                  onChange={(value) => setmultipleSelectOpponentTacticalSystem(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Match(s)",
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
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Surface(s)"
                                  name="Ground"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectPitchGround}
                                  onChange={(value) => setmultipleSelectPitchGround(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Surface(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Surface naturelle" },
                                    { value: "2", label: "Surface synthétique" },
                                    { value: "3", label: "Surface hybride" },
                                    { value: "4", label: "Surface stabilisée" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Vitesse surface"
                                  name="SpeedPitch"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectPitchSpeed}
                                  onChange={(value) => setmultipleSelectPitchSpeed(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Match(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Très lente" },
                                    { value: "2", label: "Lente" },
                                    { value: "3", label: "Standard" },
                                    { value: "4", label: "Rapide" },
                                    { value: "5", label: "Très rapide" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                            <Col md="12">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Joueur(s)"
                                  name="MyTeamPlayerss"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectMyTeamPlayer}
                                  onChange={(value) => setmultipleSelectMyTeamPlayer(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "joueur(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "'1st name' 'Last name'" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col md="6">
                              <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Zone(s)"
                                  name="multipleSelect"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectZone}
                                  onChange={(value) => setmultipleSelectZone(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Zone(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Basse" },
                                    { value: "2", label: "Médiane basse" },
                                    { value: "3", label: "Médiane haute" },
                                    { value: "4", label: "Haute" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                              <Col md="6">
                              <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Axe(s)"
                                  name="multipleSelect"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectAxis}
                                  onChange={(value) => setmultipleSelectAxis(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Axe(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "Couloir droit" },
                                    { value: "2", label: "Axe droit" },
                                    { value: "3", label: "Axe" },
                                    { value: "4", label: "Axe gauche" },
                                    { value: "5", label: "Couloir gauche" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                             </Row>
                             <Row>
                            <Col>
                              <Card className="card-tasks text-left">
                                <CardHeader>
                                </CardHeader>
                                <CardBody>
                                  <div className="table-responsive table-full-width">
                                    <Table>
                                      <tbody>
                                        <tr>
                                          <td>
                                            <FormGroup check>
                                              <Label check>
                                                <Input defaultValue="" type="checkbox" />
                                                <span className="form-check-sign">
                                                  <span className="check" />
                                                </span>
                                              </Label>
                                            </FormGroup>
                                          </td>
                                          <td>
                                            <p className="title">Titre du graphique</p>
                                            <p className="text-muted">
                                              Data#1, Data#2
                                            </p>
                                          </td>

                                          <td>
                                            <p className="title">MatchsCount</p>
                                          </td>
                                          <td>
                                            <p className="title">DataCount</p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </div>
                                </CardBody>
                              </Card>
                            </Col>
                            </Row>
                            </CardBody>
                          </Collapse>
                          <Button color="success">
                         <i/> Créer un rapport
                        </Button>
                        </Card>
                       </div>
                      </Card>
                    </Col>
                  </Row>
                    </TabPane>   
                  </TabContent>
                  </Card>                     
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
