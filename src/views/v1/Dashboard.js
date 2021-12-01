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
  const [verticalTabsIcons, setverticalTabsIcons] = React.useState("HomeTeam");
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

  const [multipleSelect1stcategory, setmultipleSelect1stcategory] = React.useState(null);
  const [multipleSelect2ndcategory, setmultipleSelect2ndcategory] = React.useState(null);
  const [multipleSelectHomePlayer, setmultipleSelectHomePlayer] = React.useState(null);
  const [multipleSelectAwayPlayer, setmultipleSelectAwayPlayer] = React.useState(null);
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
                              <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Catégorie joueur(s) 1"
                                  name="Catégorie joueur(s) 1"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelect1stcategory}
                                  onChange={(value) => setmultipleSelect1stcategory(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Catégorie joueur(s) 1",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "'1st name' 'Last name'" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                              <Col md="6">
                              <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Catégorie joueur(s) 2"
                                  name="Catégorie joueur(s) 2"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelect2ndcategory}
                                  onChange={(value) => setmultipleSelect2ndcategory(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Catégorie joueur(s) 2",
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
                              
                              <Col md="12">
                              <br></br>
                            <Row>
                            <Col md="6">
                                  <FormGroup>
                                    <Input placeholder="Temps initial" type="text" />
                                  </FormGroup>
                              </Col>
                              <Col md="6">
                                  <FormGroup>
                                    <Input placeholder="Temps final" type="text" />
                                  </FormGroup>
                              </Col>
                            </Row>
                            <br></br>
                            <div
                              className="slider slider-primary mb-3"
                              ref={slider3Ref}
                            />
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
                              <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Catégorie joueur(s) 1"
                                  name="Catégorie joueur(s) 1"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelect1stcategory}
                                  onChange={(value) => setmultipleSelect1stcategory(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Catégorie joueur(s) 1",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "'1st name' 'Last name'" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                              <Col md="6">
                              <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="Catégorie joueur(s) 2"
                                  name="Catégorie joueur(s) 2"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelect2ndcategory}
                                  onChange={(value) => setmultipleSelect2ndcategory(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Catégorie joueur(s) 2",
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
                              
                              <Col md="12">
                              <br></br>
                            <Row>
                            <Col md="6">
                                  <FormGroup>
                                    <Input placeholder="Temps initial" type="text" />
                                  </FormGroup>
                              </Col>
                              <Col md="6">
                                  <FormGroup>
                                    <Input placeholder="Temps final" type="text" />
                                  </FormGroup>
                              </Col>
                            </Row>
                            <br></br>
                            <div
                              className="slider slider-primary mb-3"
                              ref={slider2Ref}
                            />
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
                      <TabPane tabId="HomeTeam">
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
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="joueur(s) domicile"
                                  name="HomePlayers"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectHomePlayer}
                                  onChange={(value) => setmultipleSelectHomePlayer(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "joueur(s) domicile",
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
                              
                              <Col md="12">
                              <br></br>
                            <Row>
                            <Col md="6">
                                  <FormGroup>
                                    <Input placeholder="Temps initial" type="text" />
                                  </FormGroup>
                              </Col>
                              <Col md="6">
                                  <FormGroup>
                                    <Input placeholder="Temps final" type="text" />
                                  </FormGroup>
                              </Col>
                            </Row>
                            <br></br>
                            <div
                              className="slider slider-primary mb-3"
                              ref={slider4Ref}
                            />
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
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="joueur(s) domicile"
                                  name="HomePlayers"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectHomePlayer}
                                  onChange={(value) => setmultipleSelectHomePlayer(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "joueur(s) domicile",
                                      isDisabled: true,
                                    },
                                    { value: "2", label: "Player 1 " },
                                    { value: "3", label: "Player 2" },
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
                              
                              <Col md="12">
                              <br></br>
                            <Row>
                            <Col md="6">
                                  <FormGroup>
                                    <Input placeholder="Temps initial" type="text" />
                                  </FormGroup>
                              </Col>
                              <Col md="6">
                                  <FormGroup>
                                    <Input placeholder="Temps final" type="text" />
                                  </FormGroup>
                              </Col>
                            </Row>
                            <br></br>
                            <div
                              className="slider slider-primary mb-3"
                              ref={slider5Ref}
                            />
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
                      <TabPane tabId="AwayTeam">
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
                              <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="joueur(s) visiteur(s)"
                                  name="AwayPlayers"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectAwayPlayer}
                                  onChange={(value) => setmultipleSelectAwayPlayer(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "joueur(s) visiteur(s)",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "'1st name' 'Last name'" },
                                  ]}
                                />
                                </FormGroup>
                              </Col>
                              <Col md="6">
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
                              
                              <Col md="12">
                              <br></br>
                            <Row>
                            <Col md="6">
                                  <FormGroup>
                                    <Input placeholder="Temps initial" type="text" />
                                  </FormGroup>
                              </Col>
                              <Col md="6">
                                  <FormGroup>
                                    <Input placeholder="Temps final" type="text" />
                                  </FormGroup>
                              </Col>
                            </Row>
                            <br></br>
                            <div
                              className="slider slider-primary mb-3"
                              ref={slider6Ref}
                            />
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
                            <Col md="6">
                                <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder="joueur(s) visiteur(s)"
                                  name="AwayPlayers"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  value={multipleSelectAwayPlayer}
                                  onChange={(value) => setmultipleSelectAwayPlayer(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "joueur(s) visiteur(s)",
                                      isDisabled: true,
                                    },
                                    { value: "2", label: "Player 1 " },
                                    { value: "3", label: "Player 2" },
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
                              
                              <Col md="12">
                              <br></br>
                            <Row>
                            <Col md="6">
                                  <FormGroup>
                                    <Input placeholder="Temps initial" type="text" />
                                  </FormGroup>
                              </Col>
                              <Col md="6">
                                  <FormGroup>
                                    <Input placeholder="Temps final" type="text" />
                                  </FormGroup>
                              </Col>
                            </Row>
                            <br></br>
                            <div
                              className="slider slider-primary mb-3"
                              ref={slider7Ref}
                            />
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
