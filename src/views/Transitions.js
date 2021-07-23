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
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
// plugin that creates slider
import Slider from "nouislider";
// react plugin used to create charts
import { Line, Bar, Pie, Bubble } from "react-chartjs-2";
import {
  chartExample7,
  chartExample9,
} from "variables/charts.js";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Progress,
  CustomInput,
  Row,
  Col,
  Collapse,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Label,
  Input,
  Button,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import ImageUpload from "components/CustomUpload/ImageUpload.js";
import TagsInput from "components/TagsInput/TagsInput.js";

const ExtendedForms = () => {
  const [singleSelect, setsingleSelect] = React.useState(null);
  const [multipleSelect, setmultipleSelect] = React.useState(null);
  const [tagsinput, settagsinput] = React.useState([
    "Amsterdam",
    "Washington",
    "Sydney",
    "Beijing",
  ]);
  const slider1Ref = React.useRef(null);
  const slider2Ref = React.useRef(null);
  const handleTagsinput = (tagsinput) => {
    settagsinput(tagsinput);
  };
  const [horizontalTabs, sethorizontalTabs] = React.useState("Maitrise");
  const [verticalTabs, setverticalTabs] = React.useState("Maitrise");
  const [verticalTabsIcons, setverticalTabsIcons] = React.useState("home");
  const [pageTabs, setpageTabs] = React.useState("home");
  const [openedCollapseOne, setopenedCollapseOne] = React.useState(false);
  const [openedCollapseTwo, setopenedCollapseTwo] = React.useState(false);
  const [openedCollapseThree, setopenedCollapseThree] = React.useState(false);
  // with this function we change the active tab for all the tabs in this page
  const changeActiveTab = (e, tabState, tabName) => {
    e.preventDefault();
    switch (tabState) {
      case "horizontalTabs":
        sethorizontalTabs(tabName);
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
  return (
    <>
      <div className="content">
        <Row>
        <Col md="0" style={{"margin-left":"10px","width":"380px"}}>
            <Card>
              <CardBody>
                <Nav className="nav-pills-info" pills>
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabs === "Maitrise" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabs", "Maitrise")
                      }
                    >
                      Offensive
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      className={horizontalTabs === "Technique" ? "active" : ""}
                      onClick={(e) =>
                        changeActiveTab(e, "horizontalTabs", "Technique")
                      }
                    >
                      Défensive
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent className="tab-space" activeTab={horizontalTabs}>
                  <TabPane tabId="Maitrise">
                  <Col>
            <Card>
              <div
                aria-multiselectable={false}
                className="card-collapse"
                id="accordion"
                role="tablist"
              >
                <Card className="card-plain">
                  <Col>

                      </Col>
                <CardHeader role="tab">
                    <a 
                      aria-expanded={openedCollapseOne}
                      href="#pablo"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      onClick={(e) => {
                        e.preventDefault();
                        setopenedCollapseOne(!openedCollapseOne);
                      }}
                    >
                      Filtrer les données  {" "}
                      <i className="tim-icons icon-minimal-down" />
                    </a>
                  
                  </CardHeader>
                  <Collapse role="tabpanel" isOpen={openedCollapseOne}>
                    
                  <CardBody>

                  <Select
                      className="react-select info"
                      classNamePrefix="react-select"
                      placeholder="Match(s)"
                      name="multipleSelect"
                      closeMenuOnSelect={false}
                      isMulti
                      Tagsmatchs={multipleSelect}
                      onChange={(Tagsmatchs) => setmultipleSelect(Tagsmatchs)}
                      options={[
                        {
                          value: "",
                          label: "Sélection simple ou multiple de match(s)",
                          isDisabled: true,
                        },
                        { value: "1", label: "Titre du match 1" },
                        { value: "2", label: "Titre du match 2" },
                        { value: "3", label: "Titre du match 3" },
                      ]}
                      
                    />
                  <Select
                      className="react-select info"
                      classNamePrefix="react-select"
                      placeholder="Équipe"
                      name="multipleSelect"
                      closeMenuOnSelect={false}
                      isMulti
                      Tagsequipe={multipleSelect}
                      onChange={(Tagsequipe) => setmultipleSelect(Tagsequipe)}
                      options={[
                        {
                          value: "",
                          label: "Focus sur mon équipe ou l'adversaire ?",
                          isDisabled: true,
                        },
                        { value: "2", label: "Mon équipe" },
                        { value: "8", label: "Equipe adverse" },
                      ]}
                      
                    />
                  
                    <Select
                      className="react-select info"
                      classNamePrefix="react-select"
                      placeholder="Joueur(s)"
                      name="multipleSelect"
                      closeMenuOnSelect={false}
                      isMulti
                      Tagsjoueurs={multipleSelect}
                      onChange={(Tagsjoueurs) => setmultipleSelect(Tagsjoueurs)}
                      options={[
                        {
                          value: "",
                          label: "Isoler un joueur, un groupe ou tout l'effectif ?",
                          isDisabled: true,
                        },
                        { value: "6", label: "Joueur 1" },
                        { value: "26", label: "Joueur 2" },
                        { value: "6", label: "Joueur 3" },
                        { value: "6", label: "Tous" },
                      ]}

                      />
                  
                    <Select
                      className="react-select info"
                      classNamePrefix="react-select"
                      placeholder="Orientation(s)"
                      name="multipleSelect"
                      closeMenuOnSelect={false}
                      isMulti
                      Tagsorientation={multipleSelect}
                      onChange={(Tagsorientation) => setmultipleSelect(Tagsorientation)}
                      options={[
                        {
                          value: "",
                          label: "Orientation(s) des transmissions ? ",
                          isDisabled: true,
                        },
                        { value: "2", label: "Vers la gauche" },
                        { value: "3", label: "Vers la droite" },
                        { value: "4", label: "Vers l'avant" },
                        { value: "5", label: "Vers l'arrière" },
                      ]}
                    />
                      <Select
                      className="react-select info"
                      classNamePrefix="react-select"
                      placeholder="Zone(s) et axe(s)"
                      name="multipleSelect"
                      closeMenuOnSelect={false}
                      isMulti
                      Tagsmapping={multipleSelect}
                      onChange={(Tagsmapping) => setmultipleSelect(Tagsmapping)}
                      options={[
                        {
                          value: "",
                          label: "Quelle(s) zone(s) ? ",
                          isDisabled: true,
                        },
                        { value: "2", label: "Surface équipe" },
                        { value: "3", label: "30 derniers mètres équipe" },
                        { value: "4", label: "Zone médiane basse" },
                        { value: "5", label: "Zone médiane haute" },
                        { value: "6", label: "30 derniers mètres adverses" },
                        { value: "7", label: "Surface adverse" },
                        {
                          value: "",
                          label: "Quel(s) axe(s) ? ",
                          isDisabled: true,
                        },
                        { value: "8", label: "Couloir droit" },
                        { value: "9", label: "Axe droit" },
                        { value: "10", label: "Axe central" },
                        { value: "11", label: "Axe gauche" },
                        { value: "12", label: "Couloir gauche" },
                        { value: "13", label: "Surface adverse" },
                      ]}
                    /> 
                      <Select
                      className="react-select info"
                      classNamePrefix="react-select"
                      placeholder="Score(s)"
                      name="multipleSelect"
                      closeMenuOnSelect={false}
                      isMulti
                      Tagsorientation={multipleSelect}
                      onChange={(Tagsorientation) => setmultipleSelect(Tagsorientation)}
                      options={[
                        {
                          value: "",
                          label: "Evolutions du score ",
                          isDisabled: true,
                        },
                        { value: "1", label: "-3 et plus" },
                        { value: "2", label: "-2" },
                        { value: "3", label: "-1" },
                        { value: "5", label: "0" },
                        { value: "5", label: "+1" },
                        { value: "6", label: "+2" },
                        { value: "7", label: "+3 et plus" },
                      ]}
                    />            
                </CardBody>
                  </Collapse>
                </Card>
                <row>
                   <td>
                  <Card style={{ width: '10rem' }} className="card-contributions">
                <CardTitle className="text-success" tag="h1">0000</CardTitle>
                <h3 className="card-category">Récupération(s)</h3>
                   </Card>
                   </td>
                  
                   <td>  
                  <Card style={{ width: '10rem' }} className="card-contributions">
                <CardTitle className="text-success" tag="h1">0000</CardTitle>
                <h3 className="card-category">Verticalité (m)</h3>
                   </Card>
                   </td>
                </row>  
               
                <tr> 
                <row>        
                   <td>
                  <Card style={{ width: '10rem' }} className="card-contributions">
                <CardTitle tag="h1">0000</CardTitle>
                <h3 className="card-category">Att.dangereuse(s)</h3>
                   </Card>
                   </td>
                  
                   <td>  
                  <Card style={{ width: '10rem' }} className="card-contributions">
                <CardTitle tag="h1">0000</CardTitle>
                <h3 className="card-category">CPA obtenu(s)</h3>
                   </Card>
                   </td>  
                </row>
                </tr> 

                <tr> 
                <row>        
                   <td>
                  <Card style={{ width: '10rem' }} className="card-contributions">
                <CardTitle tag="h1">0000</CardTitle>
                <h3 className="card-category">Déséquilibre(s)</h3>
                   </Card>
                   </td>
                  
                   <td>  
                  <Card style={{ width: '10rem' }} className="card-contributions">
                <CardTitle tag="h1">0000</CardTitle>
                <h3 className="card-category">Durée transition(s)</h3>
                   </Card>
                   </td>  
                </row>
                </tr>
                <tr> 
                <row>        
                   <td>
                  <Card style={{ width: '10rem' }} className="card-contributions">
                <CardTitle tag="h1">0000</CardTitle>
                <h3 className="card-category">Joueur(s) éliminé(s)</h3>
                   </Card>
                   </td>
                  
                   <td>  
                  <Card style={{ width: '10rem' }} className="card-contributions">
                <CardTitle tag="h1">0000</CardTitle>
                <h3 className="card-category">Renversement(s)</h3>
                   </Card>
                   </td>  
                </row>
                </tr>  
              </div>
            </Card>
          </Col>
          
          </TabPane>
          <TabPane tabId="Technique">
            <Col>
            <Card>
              <div
                aria-multiselectable={false}
                className="card-collapse"
                id="accordion"
                role="tablist"
              >
                <Card className="card-plain">
                  <Col>

                      </Col>
                <CardHeader role="tab">
                    <a 
                      aria-expanded={openedCollapseOne}
                      href="#pablo"
                      data-parent="#accordion"
                      data-toggle="collapse"
                      onClick={(e) => {
                        e.preventDefault();
                        setopenedCollapseOne(!openedCollapseOne);
                      }}
                    >
                      Filtrer les données  {" "}
                      <i className="tim-icons icon-minimal-down" />
                    </a>
                  
                  </CardHeader>
                  <Collapse role="tabpanel" isOpen={openedCollapseOne}>
                    
                  <CardBody>
                  <Select
                      className="react-select info"
                      classNamePrefix="react-select"
                      placeholder="Match(s)"
                      name="multipleSelect"
                      closeMenuOnSelect={false}
                      isMulti
                      Tagsmatchs={multipleSelect}
                      onChange={(Tagsmatchs) => setmultipleSelect(Tagsmatchs)}
                      options={[
                        {
                          value: "",
                          label: "Sélection simple ou multiple de match(s)",
                          isDisabled: true,
                        },
                        { value: "1", label: "Titre du match 1" },
                        { value: "2", label: "Titre du match 2" },
                        { value: "3", label: "Titre du match 3" },
                      ]}
                      
                    />
                  <Select
                      className="react-select info"
                      classNamePrefix="react-select"
                      placeholder="Équipe"
                      name="multipleSelect"
                      closeMenuOnSelect={false}
                      isMulti
                      Tagsequipe={multipleSelect}
                      onChange={(Tagsequipe) => setmultipleSelect(Tagsequipe)}
                      options={[
                        {
                          value: "",
                          label: "Focus sur mon équipe ou l'adversaire ?",
                          isDisabled: true,
                        },
                        { value: "2", label: "Mon équipe" },
                        { value: "8", label: "Equipe adverse" },
                      ]}
                      
                    />
                  
                    <Select
                      className="react-select info"
                      classNamePrefix="react-select"
                      placeholder="Joueur(s)"
                      name="multipleSelect"
                      closeMenuOnSelect={false}
                      isMulti
                      Tagsjoueurs={multipleSelect}
                      onChange={(Tagsjoueurs) => setmultipleSelect(Tagsjoueurs)}
                      options={[
                        {
                          value: "",
                          label: "Isoler un joueur, un groupe ou tout l'effectif ?",
                          isDisabled: true,
                        },
                        { value: "6", label: "Joueur 1" },
                        { value: "26", label: "Joueur 2" },
                        { value: "6", label: "Joueur 3" },
                        { value: "6", label: "Tous" },
                      ]}

                      />
                  
                    <Select
                      className="react-select info"
                      classNamePrefix="react-select"
                      placeholder="Orientation(s)"
                      name="multipleSelect"
                      closeMenuOnSelect={false}
                      isMulti
                      Tagsorientation={multipleSelect}
                      onChange={(Tagsorientation) => setmultipleSelect(Tagsorientation)}
                      options={[
                        {
                          value: "",
                          label: "Orientation(s) des transmissions ? ",
                          isDisabled: true,
                        },
                        { value: "2", label: "Vers la gauche" },
                        { value: "3", label: "Vers la droite" },
                        { value: "4", label: "Vers l'avant" },
                        { value: "5", label: "Vers l'arrière" },
                      ]}
                    />
                      <Select
                      className="react-select info"
                      classNamePrefix="react-select"
                      placeholder="Zone(s) et axe(s)"
                      name="multipleSelect"
                      closeMenuOnSelect={false}
                      isMulti
                      Tagsmapping={multipleSelect}
                      onChange={(Tagsmapping) => setmultipleSelect(Tagsmapping)}
                      options={[
                        {
                          value: "",
                          label: "Quelle(s) zone(s) ? ",
                          isDisabled: true,
                        },
                        { value: "2", label: "Surface équipe" },
                        { value: "3", label: "30 derniers mètres équipe" },
                        { value: "4", label: "Zone médiane basse" },
                        { value: "5", label: "Zone médiane haute" },
                        { value: "6", label: "30 derniers mètres adverses" },
                        { value: "7", label: "Surface adverse" },
                        {
                          value: "",
                          label: "Quel(s) axe(s) ? ",
                          isDisabled: true,
                        },
                        { value: "8", label: "Couloir droit" },
                        { value: "9", label: "Axe droit" },
                        { value: "10", label: "Axe central" },
                        { value: "11", label: "Axe gauche" },
                        { value: "12", label: "Couloir gauche" },
                        { value: "13", label: "Surface adverse" },
                      ]}
                    /> 
                      <Select
                      className="react-select info"
                      classNamePrefix="react-select"
                      placeholder="Score(s)"
                      name="multipleSelect"
                      closeMenuOnSelect={false}
                      isMulti
                      Tagsorientation={multipleSelect}
                      onChange={(Tagsorientation) => setmultipleSelect(Tagsorientation)}
                      options={[
                        {
                          value: "",
                          label: "Evolutions du score ",
                          isDisabled: true,
                        },
                        { value: "1", label: "-3 et plus" },
                        { value: "2", label: "-2" },
                        { value: "3", label: "-1" },
                        { value: "5", label: "0" },
                        { value: "5", label: "+1" },
                        { value: "6", label: "+2" },
                        { value: "7", label: "+3 et plus" },
                      ]}
                    />          

                </CardBody>
                  </Collapse>
                </Card>
                <TabPane tabId="Technique">
                <row>
                   <td>
                  <Card style={{ width: '10rem' }} className="card-contributions">
                <CardTitle className="text-success" tag="h1">0000</CardTitle>
                <h3 className="card-category">Touche(s)</h3>
                   </Card>
                   </td>
                  
                   <td>  
                  <Card style={{ width: '10rem' }} className="card-contributions">
                <CardTitle tag="h1">0000</CardTitle>
                <h3 className="card-category">Pied droit</h3>
                   </Card>
                   </td>
                </row>  
               
                <tr> 
                <row>        
                   <td>
                  <Card style={{ width: '10rem' }} className="card-contributions">
                <CardTitle tag="h1">0000</CardTitle>
                <h3 className="card-category">Pied gauche</h3>
                   </Card>
                   </td>
                  
                   <td>  
                  <Card style={{ width: '10rem' }} className="card-contributions">
                <CardTitle tag="h1">0000</CardTitle>
                <h3 className="card-category">Tête</h3>
                   </Card>
                   </td>  
                </row>
                </tr> 

                <tr> 
                <row>        
                   <td>
                  <Card style={{ width: '10rem' }} className="card-contributions">
                <CardTitle tag="h1">0000</CardTitle>
                <h3 className="card-category">Contrôle(s)</h3>
                   </Card>
                   </td>
                  
                   <td>  
                  <Card style={{ width: '10rem' }} className="card-contributions">
                <CardTitle tag="h1">0000</CardTitle>
                <h3 className="card-category">action(s) 1 touche </h3>
                   </Card>
                   </td>  
                </row>
                </tr>
                <tr> 
                <row>        
                   <td>
                  <Card style={{ width: '10rem' }} className="card-contributions">
                <CardTitle tag="h1">0000</CardTitle>
                <h3 className="card-category">action(s) -3 touches</h3>
                   </Card>
                   </td>
                  
                   <td>  
                  <Card style={{ width: '10rem' }} className="card-contributions">
                <CardTitle tag="h1">0000</CardTitle>
                <h3 className="card-category">action(s) +3 touches</h3>
                   </Card>
                   </td>  
                </row>
                </tr>
                </TabPane>  
              </div>
            </Card>
          </Col>
          </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          
          <Col md="0" >
            <Card className="card-chart" style={{"background-color":"transparent"}}>
              <CardBody style={{"background-image":"url('https://i2.wp.com/vistao.co/wp-content/uploads/2021/03/zonage-pitch.png')","background-repeat": "no-repeat","background-attachement":"fixed","background-size":"cover"}}>
                <div className="chart-area"style={{"height":"400px","width":"330px"}} >
                  <Bubble
                    data={chartExample7.data}
                    options={chartExample7.options}
                  />
              <h3 className="card-category" style={{"margin-left":"30px","margin-top":"-15px","text-align":"center"}}>Récupérations</h3>
                </div>
              </CardBody>
              <CardBody style={{"background-image":"url('https://i2.wp.com/vistao.co/wp-content/uploads/2021/03/zonage-pitch.png')","background-repeat": "no-repeat","background-attachement":"fixed","background-size":"cover"}}>
                <div className="chart-area"style={{"height":"400px","width":"330px"}} >
                  <Bubble
                    data={chartExample7.data}
                    options={chartExample7.options}
                  />
               <h3 className="card-category" style={{"margin-left":"30px","margin-top":"-15px","text-align":"center"}}>Ballons joués en transition</h3>
                </div>
                
              </CardBody>
            </Card>

          </Col>

          <Col md="3" style={{"margin-left":"10px"}}>
                    <div className="chart-area" style={{"text-align":"center","margin-top":"80px"}}>
                      <Pie
                        data={chartExample9.data}
                        options={chartExample9.options}
                      />
                    </div>
                    <h3 class="card-category" style={{"display":"block","text-align":"center","margin-top":"20px","margin-bottom":"100px"}}>Type(s) de récupération</h3>

                    <div className="chart-area" style={{"text-align":"center","margin-top":"80px"}}>
                      <Pie
                        data={chartExample9.data}
                        options={chartExample9.options}
                      />
                    </div>
                    <h3 class="card-category" style={{"display":"block","text-align":"center","margin-top":"20px","margin-bottom":"100px"}}>Attaque(s) placée(s)</h3>
          </Col>
          <Col md="3" style={{"margin-left":"10px"}}>
                    <div className="chart-area" style={{"text-align":"center","margin-top":"80px"}}>
                      <Pie
                        data={chartExample9.data}
                        options={chartExample9.options}
                      />
                    </div>
                    <h3 class="card-category" style={{"display":"block","text-align":"center","margin-top":"20px","margin-bottom":"100px"}}>Déséquilibre(s)</h3>

                    <div className="chart-area" style={{"text-align":"center","margin-top":"80px"}}>
                      <Pie
                        data={chartExample9.data}
                        options={chartExample9.options}
                      />
                    </div>
                    <h3 class="card-category" style={{"display":"block","text-align":"center","margin-top":"20px","margin-bottom":"100px"}}>Attaque(s) placée(s)</h3>
          </Col>



          
        </Row>

      </div>
    </>
  );
};

export default ExtendedForms;
