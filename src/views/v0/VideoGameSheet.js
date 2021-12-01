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
import Dropzone from "react-dropzone";
import Select from "react-select";
import ReactDatetime from "react-datetime";

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
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import ReactTable from "components/ReactTable/ReactTable.js";
import { UserContext } from "providers/UserProvider";
import { useHistory } from "react-router-dom";
import { getClubDetails } from "apis/routes/common";
import { getPlayerTeamInfo } from "apis/routes/profile";
import { getJerseyColours } from "apis/routes/common";
import { createVideoFiles } from "apis/routes/videos";

const dataTable = [["Airi Satou", "Accountant", "Tokyo", "33"]];

function CreerVideo() {
  const [horizontalTabsC, sethorizontalTabsC] = React.useState("Équipe");
  const [horizontalTabsD, sethorizontalTabsD] = React.useState("vidéo");
  const [horizontalTabsE, sethorizontalTabsE] = React.useState("Équipe");
  const [verticalTabsIcons, setverticalTabsIcons] = React.useState("Upload");
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
            ></Button>{" "}
          </div>
        ),
        ReconnaissanceIndividuelle: (
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
            ></Button>{" "}
          </div>
        ),
      };
    })
  );

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
      ></ReactBSAlert>
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
      ></ReactBSAlert>
    );
  };

  const hideAlert = () => {
    setAlert(null);
  };
  const [singleSelectContext, setsingleSelectContext] = React.useState(null);
  const [singleSelectClipDuration, setsingleSelectClipDuration] =
    React.useState(null);
  const [singleSelectPitchGround, setsingleSelectPitchGround] =
    React.useState(null);
  const [singleSelectPitchSpeed, setsingleSelectPitchSpeed] =
    React.useState(null);
  const [singleSelectScoreboard, setsingleSelectScoreboard] =
    React.useState(null);
  const [singleSelectPitchEnclosure, setsingleSelectPitchEnclosure] =
    React.useState(null);
  const [singleSelectStadiumStand, setsingleSelectStadiumStand] =
    React.useState(null);
  const [singleSelectWeather, setsingleSelectWeather] = React.useState(null);
  const [singleSelectWind, setsingleSelectWind] = React.useState(null);
  const [
    multipleSelectAwayTacticalSystem,
    setmultipleSelectAwayTacticalSystem,
  ] = React.useState(null);
  const [
    multipleSelectHomeTacticalSystem,
    setmultipleSelectHomeTacticalSystem,
  ] = React.useState(null);
  const [singleSelectHomeClub, setsingleSelectHomeClub] = React.useState(null);
  const [singleSelectHomeAgeCategory, setsingleSelectHomeAgeCategory] =
    React.useState(null);
  const [singleSelectHomeTeamNumber, setsingleSelectHomeTeamNumber] =
    React.useState(null);
  const [singleSelectHomeJerseyColor, setsingleSelectHomeJerseyColor] =
    React.useState(null);
  const [
    singleSelectHomeIndividualRecognition,
    setsingleSelectHomeIndividualRecognition,
  ] = React.useState(null);
  const [singleSelectHomeGoalScored, setsingleSelectHomeGoalScored] =
    React.useState(null);
  const [singleSelectAwayClub, setsingleSelectAwayClub] = React.useState(null);
  const [singleSelectAwayAgeCategory, setsingleSelectAwayAgeCategory] =
    React.useState(null);
  const [singleSelectAwayTeamNumber, setsingleSelectAwayTeamNumber] =
    React.useState(null);
  const [singleSelectAwayJerseyColor, setsingleSelectAwayJerseyColor] =
    React.useState(null);
  const [
    singleSelectAwayIndividualRecognition,
    setsingleSelectAwayIndividualRecognition,
  ] = React.useState(null);
  const [singleSelectAwayGoalScored, setsingleSelectAwayGoalScored] =
    React.useState(null);
  const [singleSelectMatchOverType, setsingleSelectMatchOverType] =
    React.useState(null);
  const [singleSelectPrivacy, setsingleSelectPrivacy] = React.useState(null);

  const { user } = React.useContext(UserContext);
  const history = useHistory();
  const [videoFile, setVideoFile] = React.useState(null);
  const [clubOptions, setClubOptions] = React.useState([]);
  const [ageCategoryOptions, setAgeCategoryOptions] = React.useState([]);
  const [jerseyColorOptions, setJerseyColorOptions] = React.useState([]);
  const [teamNumberOptions, setTeamNumberOptions] = React.useState([]);

  const getData = async () => {
    const { club_details } = await getClubDetails(user.auth_token);
    const { age_category, team_number } = await getPlayerTeamInfo(
      user.auth_token
    );
    const jersey_colors = await getJerseyColours(user.auth_token);
    setClubOptions(club_details);
    setAgeCategoryOptions(age_category);
    setTeamNumberOptions(team_number);
    setJerseyColorOptions(jersey_colors);
  };

  React.useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);

  if (!user) {
    history.push("/auth/login");
    return <></>;
  }

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
                            verticalTabsIcons === "Upload" ? "active" : ""
                          }
                          onClick={(e) =>
                            changeActiveTab(e, "verticalTabsIcons", "Upload")
                          }
                        >
                          <i className="tim-icons icon-cloud-upload-94" />
                          Upload
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          className={
                            verticalTabsIcons === "Détail" ? "active" : ""
                          }
                          onClick={(e) =>
                            changeActiveTab(e, "verticalTabsIcons", "Détail")
                          }
                        >
                          <i className="tim-icons icon-notes" />
                          Détail
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          className={
                            verticalTabsIcons === "Locaux" ? "active" : ""
                          }
                          onClick={(e) =>
                            changeActiveTab(e, "verticalTabsIcons", "Locaux")
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
                            verticalTabsIcons === "Visiteurs" ? "active" : ""
                          }
                          onClick={(e) =>
                            changeActiveTab(e, "verticalTabsIcons", "Visiteurs")
                          }
                        >
                          <i className="tim-icons icon-send" />
                          Visiteurs
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>

                  <Col>
                    <TabContent activeTab={verticalTabsIcons}>
                      <TabPane tabId="Upload">
                        <Card>
                          <Dropzone
                            onDrop={(acceptedFiles) =>
                              setVideoFile(acceptedFiles[0])
                            }
                          >
                            {({ getRootProps, getInputProps }) => (
                              <section>
                                <div {...getRootProps()}>
                                  <input {...getInputProps()} />

                                  <br></br>
                                  <h3
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    Upload
                                  </h3>
                                  <label
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    Importer le(s) fichier(s) vidéo dans l'ordre
                                  </label>
                                  <br></br>
                                  <i
                                    className="tim-icons icon-cloud-upload-94"
                                    style={{
                                      fontSize: "50px",
                                      display: "flex",
                                      justifyContent: "center",
                                      color: "white",
                                    }}
                                  />
                                  <br></br>
                                </div>
                              </section>
                            )}
                          </Dropzone>
                        </Card>
                      </TabPane>
                    </TabContent>

                    <TabContent activeTab={verticalTabsIcons}>
                      <TabPane tabId="Détail">
                        <Nav className="nav-pills-info" pills>
                          <NavItem>
                            <NavLink
                              data-toggle="tab"
                              href="#pablo"
                              className={
                                horizontalTabsD === "vidéo" ? "active" : ""
                              }
                              onClick={(e) =>
                                changeActiveTab(e, "horizontalTabsD", "vidéo")
                              }
                            >
                              Vidéo
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              data-toggle="tab"
                              href="#pablo"
                              className={
                                horizontalTabsD === "tactique" ? "active" : ""
                              }
                              onClick={(e) =>
                                changeActiveTab(
                                  e,
                                  "horizontalTabsD",
                                  "tactique"
                                )
                              }
                            >
                              Tactique
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              data-toggle="tab"
                              href="#pablo"
                              className={
                                horizontalTabsD === "stade" ? "active" : ""
                              }
                              onClick={(e) =>
                                changeActiveTab(e, "horizontalTabsD", "stade")
                              }
                            >
                              Stade
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              data-toggle="tab"
                              href="#pablo"
                              className={
                                horizontalTabsD === "météo" ? "active" : ""
                              }
                              onClick={(e) =>
                                changeActiveTab(e, "horizontalTabsD", "météo")
                              }
                            >
                              Climat
                            </NavLink>
                          </NavItem>
                        </Nav>
                        <TabContent
                          className="tab-space"
                          activeTab={horizontalTabsD}
                        >
                          <TabPane tabId="vidéo">
                            <Card>
                              <FormGroup>
                                <label>Type de vidéo</label>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  name="Context"
                                  equipe={singleSelectContext}
                                  onChange={(equipe) =>
                                    setsingleSelectContext(equipe)
                                  }
                                  options={[
                                    {
                                      value: "1",
                                      label: "Opposition à l'entrainement",
                                    },
                                    { value: "2", label: "Match amical" },
                                    {
                                      value: "3",
                                      label: "Match de championnat",
                                    },
                                    { value: "4", label: "Match de coupe" },
                                    { value: "5", label: "Match de tournoi" },
                                  ]}
                                  placeholder=""
                                />
                              </FormGroup>
                              <FormGroup>
                                <label>Confidentialité</label>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  name="Privacy"
                                  equipe={singleSelectPrivacy}
                                  onChange={(equipe) =>
                                    setsingleSelectPrivacy(equipe)
                                  }
                                  options={[
                                    { value: true, label: "Privée" },
                                    {
                                      value: false,
                                      label: "Ouverte aux membres",
                                    },
                                  ]}
                                  placeholder=""
                                />
                              </FormGroup>
                              <FormGroup>
                                <label>Fin du match</label>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  name="Privacy"
                                  equipe={singleSelectMatchOverType}
                                  onChange={(equipe) =>
                                    setsingleSelectMatchOverType(equipe)
                                  }
                                  options={[
                                    {
                                      value: "1",
                                      label: "Temps réglementaire",
                                    },
                                    {
                                      value: "2",
                                      label: "Après prolongations",
                                    },
                                    { value: "3", label: "Aux tirs au but" },
                                    { value: "4", label: "Match arrêté" },
                                  ]}
                                  placeholder=""
                                />
                              </FormGroup>
                              <FormGroup>
                                <label>Coup d'envoi</label>
                                <ReactDatetime
                                  inputProps={{
                                    className: "form-control",
                                    placeholder: "",
                                  }}
                                />
                              </FormGroup>
                              <FormGroup>
                                <label>La durée du clip par défaut</label>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  name="ClipDuration"
                                  equipe={singleSelectClipDuration}
                                  onChange={(equipe) =>
                                    setsingleSelectClipDuration(equipe)
                                  }
                                  options={[
                                    { value: "1", label: "7 secondes" },
                                    { value: "2", label: "10 secondes" },
                                    { value: "3", label: "15 secondes" },
                                    { value: "4", label: "20 secondes" },
                                  ]}
                                  placeholder=""
                                />
                              </FormGroup>
                            </Card>
                          </TabPane>

                          <TabPane tabId="tactique">
                            <Card>
                              <FormGroup>
                                <label>
                                  Système(s) tactique de l'équipe locale
                                </label>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder=""
                                  name="Hometactic"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  Tagsjoueurs={multipleSelectHomeTacticalSystem}
                                  onChange={(Tagsjoueurs) =>
                                    setmultipleSelectHomeTacticalSystem(
                                      Tagsjoueurs
                                    )
                                  }
                                  options={[
                                    {
                                      value: "",
                                      label: "Système tactique locaux",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "4-4-2" },
                                    { value: "2", label: "4-2-1-2-1" },
                                    { value: "3", label: "4-3-2-1" },
                                    { value: "4", label: "4-1-2-2-1" },
                                    { value: "5", label: "4-1-2-1-2" },
                                    { value: "6", label: "4-1-2-1-2" },
                                    { value: "7", label: "4-2-3-1" },
                                    { value: "8", label: "4-1-4-1" },
                                    { value: "9", label: "4-2-1-3" },
                                    { value: "10", label: "4-2-1-3" },
                                    { value: "11", label: "4-1-2-3" },
                                    { value: "12", label: "4-1-2-3" },
                                    { value: "13", label: "3-4-2-1" },
                                    { value: "14", label: "3-1-4-1-1" },
                                    { value: "15", label: "5-1-2-1-1" },
                                    { value: "16", label: "5-1-2-2" },
                                    { value: "17", label: "5-3-2" },
                                    { value: "18", label: "5-2-2-1" },
                                  ]}
                                />
                              </FormGroup>
                              <FormGroup>
                                <label>
                                  Système(s) tactique des visiteurs{" "}
                                </label>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  placeholder=""
                                  name="AwayTactic"
                                  closeMenuOnSelect={false}
                                  isMulti
                                  Tagsjoueurs={multipleSelectAwayTacticalSystem}
                                  onChange={(Tagsjoueurs) =>
                                    setmultipleSelectAwayTacticalSystem(
                                      Tagsjoueurs
                                    )
                                  }
                                  options={[
                                    {
                                      value: "",
                                      label: "Systèmes tactiques visiteurs",
                                      isDisabled: true,
                                    },
                                    { value: "1", label: "4-4-2" },
                                    { value: "2", label: "4-2-1-2-1" },
                                    { value: "3", label: "4-3-2-1" },
                                    { value: "4", label: "4-1-2-2-1" },
                                    { value: "5", label: "4-1-2-1-2" },
                                    { value: "6", label: "4-1-2-1-2" },
                                    { value: "7", label: "4-2-3-1" },
                                    { value: "8", label: "4-1-4-1" },
                                    { value: "9", label: "4-2-1-3" },
                                    { value: "10", label: "4-2-1-3" },
                                    { value: "11", label: "4-1-2-3" },
                                    { value: "12", label: "4-1-2-3" },
                                    { value: "13", label: "3-4-2-1" },
                                    { value: "14", label: "3-1-4-1-1" },
                                    { value: "15", label: "5-1-2-1-1" },
                                    { value: "16", label: "5-1-2-2" },
                                    { value: "17", label: "5-3-2" },
                                    { value: "18", label: "5-2-2-1" },
                                  ]}
                                />
                              </FormGroup>
                            </Card>
                          </TabPane>

                          <TabPane tabId="stade">
                            <Row>
                              <Col md="4">
                                <FormGroup>
                                  <label>Adresse</label>
                                  <Input placeholder="" type="text" />
                                </FormGroup>
                              </Col>
                              <Col md="4">
                                <FormGroup>
                                  <label>Code Postal</label>
                                  <Input placeholder="" type="text" />
                                </FormGroup>
                              </Col>
                              <Col md="4">
                                <FormGroup>
                                  <label>Nom du terrain</label>
                                  <Input placeholder="" type="text" />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Card>
                              <label>Type de surface</label>
                              <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  name="PitchType"
                                  equipe={singleSelectPitchGround}
                                  onChange={(equipe) =>
                                    setsingleSelectPitchGround(equipe)
                                  }
                                  options={[
                                    { value: "1", label: "Surface naturelle" },
                                    {
                                      value: "2",
                                      label: "Surface synthétique",
                                    },
                                    { value: "3", label: "Surface hybride" },
                                    { value: "4", label: "Surface stabilisée" },
                                  ]}
                                  placeholder=""
                                />
                              </FormGroup>
                              <label>Vitesse de la surface</label>
                              <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  name="PitchSpeed"
                                  equipe={singleSelectPitchSpeed}
                                  onChange={(equipe) =>
                                    setsingleSelectPitchSpeed(equipe)
                                  }
                                  options={[
                                    { value: "1", label: "Très lente" },
                                    { value: "2", label: "Lente" },
                                    { value: "3", label: "Standard" },
                                    { value: "4", label: "Rapide" },
                                    { value: "5", label: "Très rapide" },
                                  ]}
                                  placeholder=""
                                />
                              </FormGroup>
                              <label>Type d'enceinte</label>
                              <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  name="Enclosure"
                                  equipe={singleSelectPitchEnclosure}
                                  onChange={(equipe) =>
                                    setsingleSelectPitchEnclosure(equipe)
                                  }
                                  options={[
                                    { value: "1", label: "Enceinte dégagée" },
                                    {
                                      value: "2",
                                      label: "Enceinte semi-close",
                                    },
                                    { value: "3", label: "Piste d'athlétisme" },
                                    { value: "4", label: "Cuvette" },
                                  ]}
                                  placeholder=""
                                />
                              </FormGroup>
                              <label>Tribune</label>
                              <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  name="StadiumStand"
                                  equipe={singleSelectStadiumStand}
                                  onChange={(equipe) =>
                                    setsingleSelectStadiumStand(equipe)
                                  }
                                  options={[
                                    { value: "1", label: "oui" },
                                    { value: "2", label: "non" },
                                  ]}
                                  placeholder=""
                                />
                              </FormGroup>
                              <label>Panneau d'affichage </label>
                              <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  name="Scoreboard"
                                  equipe={singleSelectScoreboard}
                                  onChange={(equipe) =>
                                    setsingleSelectScoreboard(equipe)
                                  }
                                  options={[
                                    { value: "1", label: "oui" },
                                    { value: "2", label: "non" },
                                  ]}
                                  placeholder=""
                                />
                              </FormGroup>
                            </Card>
                          </TabPane>

                          <TabPane tabId="météo">
                            <Card>
                              <label>Météo </label>
                              <FormGroup>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  name="Weatcher"
                                  equipe={singleSelectWeather}
                                  onChange={(equipe) =>
                                    setsingleSelectWeather(equipe)
                                  }
                                  options={[
                                    { value: "1", label: "Ciel dégagé" },
                                    { value: "2", label: "Averses" },
                                    { value: "3", label: "Pluie" },
                                  ]}
                                  placeholder=""
                                />
                              </FormGroup>
                              <FormGroup>
                                <label>Vent</label>
                                <Select
                                  className="react-select info"
                                  classNamePrefix="react-select"
                                  name="wind"
                                  equipe={singleSelectWind}
                                  onChange={(equipe) =>
                                    setsingleSelectWind(equipe)
                                  }
                                  options={[
                                    { value: "1", label: "Aucun" },
                                    { value: "2", label: "Léger" },
                                    { value: "3", label: "Fort" },
                                    { value: "4", label: "Très fort" },
                                  ]}
                                  placeholder=""
                                />
                              </FormGroup>
                            </Card>
                          </TabPane>
                        </TabContent>
                      </TabPane>
                    </TabContent>

                    <TabContent activeTab={verticalTabsIcons}>
                      <TabPane tabId="Locaux">
                        {/* subcategories begin*/}
                        <Card>
                          <Nav className="nav-pills-info" pills>
                            <NavItem>
                              <NavLink
                                data-toggle="tab"
                                href="#pablo"
                                className={
                                  horizontalTabsC === "Équipe" ? "active" : ""
                                }
                                onClick={(e) =>
                                  changeActiveTab(
                                    e,
                                    "horizontalTabsC",
                                    "Équipe"
                                  )
                                }
                              >
                                Équipe
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                data-toggle="tab"
                                href="#pablo"
                                className={
                                  horizontalTabsC === "Joueurs" ? "active" : ""
                                }
                                onClick={(e) =>
                                  changeActiveTab(
                                    e,
                                    "horizontalTabsC",
                                    "Joueurs"
                                  )
                                }
                              >
                                Joueurs
                              </NavLink>
                            </NavItem>
                          </Nav>
                          <TabContent
                            className="tab-space"
                            activeTab={horizontalTabsC}
                          >
                            <TabPane tabId="Équipe">
                              <Card>
                                <Col>
                                  <Select
                                    className="react-select info"
                                    classNamePrefix="react-select"
                                    name="singleSelect"
                                    value={singleSelectHomeClub}
                                    onChange={(value) =>
                                      setsingleSelectHomeClub(value)
                                    }
                                    options={clubOptions}
                                    placeholder="Nom du club"
                                  />
                                </Col>
                              </Card>
                              <Card>
                                <Col>
                                  <Select
                                    className="react-select info"
                                    classNamePrefix="react-select"
                                    name="singleSelect"
                                    value={singleSelectHomeAgeCategory}
                                    onChange={(value) =>
                                      setsingleSelectHomeAgeCategory(value)
                                    }
                                    options={ageCategoryOptions}
                                    placeholder="Catégorie"
                                  />
                                </Col>
                              </Card>
                              <Card>
                                <Col>
                                  <Select
                                    className="react-select info"
                                    classNamePrefix="react-select"
                                    name="singleSelect"
                                    value={singleSelectHomeTeamNumber}
                                    onChange={(value) =>
                                      setsingleSelectHomeTeamNumber(value)
                                    }
                                    options={teamNumberOptions}
                                    placeholder="Numéro d'équipe"
                                  />
                                </Col>
                              </Card>
                              <Card>
                                <Col>
                                  <Select
                                    className="react-select info"
                                    classNamePrefix="react-select"
                                    name="singleSelect"
                                    value={singleSelectHomeJerseyColor}
                                    onChange={(value) =>
                                      setsingleSelectHomeJerseyColor(value)
                                    }
                                    options={jerseyColorOptions}
                                    placeholder="Couleur de maillot"
                                  />
                                </Col>
                              </Card>
                              <Card>
                                <Col>
                                  <Select
                                    className="react-select info"
                                    classNamePrefix="react-select"
                                    name="singleSelect"
                                    value={singleSelectHomeGoalScored}
                                    onChange={(value) =>
                                      setsingleSelectHomeGoalScored(value)
                                    }
                                    options={[
                                      {
                                        value: "",
                                        label: "But(s) marqué(s)",
                                        isDisabled: true,
                                      },
                                      { value: "0", label: "0" },
                                      { value: "1", label: "1" },
                                      { value: "2", label: "2" },
                                      { value: "3", label: "3" },
                                      { value: "4", label: "4" },
                                      { value: "5", label: "5" },
                                      { value: "6", label: "6" },
                                      { value: "7", label: "7" },
                                      { value: "8", label: "8" },
                                      { value: "9", label: "9" },
                                      { value: "10", label: "10" },
                                      { value: "11", label: "11" },
                                      { value: "12", label: "12" },
                                      { value: "13", label: "13" },
                                      { value: "14", label: "14" },
                                      { value: "15", label: "15" },
                                      { value: "16", label: "16" },
                                      { value: "17", label: "17" },
                                      { value: "18", label: "18" },
                                      { value: "17", label: "19" },
                                      { value: "18", label: "20" },
                                    ]}
                                    placeholder="But(s) marqué(s)"
                                  />
                                </Col>
                              </Card>
                              <Card>
                                <Col>
                                  <Select
                                    className="react-select info"
                                    classNamePrefix="react-select"
                                    name="singleSelect"
                                    value={
                                      singleSelectHomeIndividualRecognition
                                    }
                                    onChange={(value) =>
                                      setsingleSelectHomeIndividualRecognition(
                                        value
                                      )
                                    }
                                    options={[
                                      {
                                        value: "",
                                        label: "Reconnaissance joueur(s)",
                                        isDisabled: true,
                                      },
                                      {
                                        value: "2",
                                        label:
                                          "Reconnaissance joueurs désactivée",
                                      },
                                      {
                                        value: "3",
                                        label:
                                          "Reconnaissance d'un seul joueur",
                                      },
                                      {
                                        value: "4",
                                        label:
                                          "Reconnaissance pour plusieurs joueurs",
                                      },
                                      {
                                        value: "5",
                                        label:
                                          "Reconnaissance pour tous les joueurs",
                                      },
                                    ]}
                                    placeholder="Reconnaissance joueur"
                                  />
                                </Col>
                              </Card>
                            </TabPane>

                            <TabPane tabId="Joueurs">
                              {/* reactable begin*/}
                              <>
                                {alert}
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "right",
                                  }}
                                >
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
                                <div
                                  className="content"
                                  style={{ "margin-top": "-30px" }}
                                >
                                  <Row className="mt-5">
                                    <Col xs={12} md={12}>
                                      <ReactTable
                                        data={data}
                                        filterable
                                        resizable={false}
                                        columns={[
                                          {
                                            Header: "Nom",
                                            accessor: "1",
                                          },
                                          {
                                            Header: "Prénom",
                                            accessor: "2",
                                          },
                                          {
                                            Header: "N° équipe",
                                            accessor: "3",
                                          },
                                          {
                                            Header: "Catégorie",
                                            accessor: "4",
                                          },
                                          {
                                            Header: "N° Maillot",
                                            accessor: "5",
                                          },
                                          {
                                            Header: "Convoqué",
                                            accessor: "actions",
                                            sortable: false,
                                            filterable: false,
                                          },
                                          {
                                            Header: "Ind.R",
                                            accessor:
                                              "ReconnaissanceIndividuelle",
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
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "right",
                                  }}
                                >
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
                                <div
                                  className="content"
                                  style={{ "margin-top": "-30px" }}
                                >
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
                      <TabPane tabId="Visiteurs">
                        {/* subcategories begin*/}
                        <Card>
                          <Nav className="nav-pills-info" pills>
                            <NavItem>
                              <NavLink
                                data-toggle="tab"
                                href="#pablo"
                                className={
                                  horizontalTabsE === "Équipe" ? "active" : ""
                                }
                                onClick={(e) =>
                                  changeActiveTab(
                                    e,
                                    "horizontalTabsE",
                                    "Équipe"
                                  )
                                }
                              >
                                Équipe
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                data-toggle="tab"
                                href="#pablo"
                                className={
                                  horizontalTabsE === "Joueurs" ? "active" : ""
                                }
                                onClick={(e) =>
                                  changeActiveTab(
                                    e,
                                    "horizontalTabsE",
                                    "Joueurs"
                                  )
                                }
                              >
                                Joueurs
                              </NavLink>
                            </NavItem>
                          </Nav>
                          <TabContent
                            className="tab-space"
                            activeTab={horizontalTabsE}
                          >
                            <TabPane tabId="Équipe">
                              <Card>
                                <Col>
                                  <Select
                                    className="react-select info"
                                    classNamePrefix="react-select"
                                    name="singleSelect"
                                    value={singleSelectAwayClub}
                                    onChange={(value) =>
                                      setsingleSelectAwayClub(value)
                                    }
                                    options={clubOptions}
                                    placeholder="Nom du club"
                                  />
                                </Col>
                              </Card>
                              <Card>
                                <Col>
                                  <Select
                                    className="react-select info"
                                    classNamePrefix="react-select"
                                    name="singleSelect"
                                    value={singleSelectAwayAgeCategory}
                                    onChange={(value) =>
                                      setsingleSelectAwayAgeCategory(value)
                                    }
                                    options={ageCategoryOptions}
                                    placeholder="Catégorie"
                                  />
                                </Col>
                              </Card>
                              <Card>
                                <Col>
                                  <Select
                                    className="react-select info"
                                    classNamePrefix="react-select"
                                    name="singleSelect"
                                    value={singleSelectAwayTeamNumber}
                                    onChange={(value) =>
                                      setsingleSelectAwayTeamNumber(value)
                                    }
                                    options={teamNumberOptions}
                                    placeholder="Numéro d'équipe"
                                  />
                                </Col>
                              </Card>
                              <Card>
                                <Col>
                                  <Select
                                    className="react-select info"
                                    classNamePrefix="react-select"
                                    name="singleSelect"
                                    value={singleSelectAwayJerseyColor}
                                    onChange={(value) =>
                                      setsingleSelectAwayJerseyColor(value)
                                    }
                                    options={jerseyColorOptions}
                                    placeholder="Couleur de maillot"
                                  />
                                </Col>
                              </Card>
                              <Card>
                                <Col>
                                  <Select
                                    className="react-select info"
                                    classNamePrefix="react-select"
                                    name="singleSelect"
                                    value={singleSelectAwayGoalScored}
                                    onChange={(value) =>
                                      setsingleSelectAwayGoalScored(value)
                                    }
                                    options={[
                                      {
                                        value: "",
                                        label: "But(s) marqué(s)",
                                        isDisabled: true,
                                      },
                                      { value: "0", label: "0" },
                                      { value: "1", label: "1" },
                                      { value: "2", label: "2" },
                                      { value: "3", label: "3" },
                                      { value: "4", label: "4" },
                                      { value: "5", label: "5" },
                                      { value: "6", label: "6" },
                                      { value: "7", label: "7" },
                                      { value: "8", label: "8" },
                                      { value: "9", label: "9" },
                                      { value: "10", label: "10" },
                                      { value: "11", label: "11" },
                                      { value: "12", label: "12" },
                                      { value: "13", label: "13" },
                                      { value: "14", label: "14" },
                                      { value: "15", label: "15" },
                                      { value: "16", label: "16" },
                                      { value: "17", label: "17" },
                                      { value: "18", label: "18" },
                                      { value: "17", label: "19" },
                                      { value: "18", label: "20" },
                                    ]}
                                    placeholder="But(s) marqué(s)"
                                  />
                                </Col>
                              </Card>
                              <Card>
                                <Col>
                                  <Select
                                    className="react-select info"
                                    classNamePrefix="react-select"
                                    name="singleSelect"
                                    value={
                                      singleSelectAwayIndividualRecognition
                                    }
                                    onChange={(value) =>
                                      setsingleSelectAwayIndividualRecognition(
                                        value
                                      )
                                    }
                                    options={[
                                      {
                                        value: "",
                                        label: "Reconnaissance joueur(s)",
                                        isDisabled: true,
                                      },
                                      {
                                        value: "2",
                                        label:
                                          "Reconnaissance joueurs désactivée",
                                      },
                                      {
                                        value: "3",
                                        label:
                                          "Reconnaissance d'un seul joueur",
                                      },
                                      {
                                        value: "4",
                                        label:
                                          "Reconnaissance pour plusieurs joueurs",
                                      },
                                      {
                                        value: "5",
                                        label:
                                          "Reconnaissance pour tous les joueurs",
                                      },
                                    ]}
                                    placeholder="Reconnaissance joueur"
                                  />
                                </Col>
                              </Card>
                            </TabPane>

                            <TabPane tabId="Joueurs">
                              {/* reactable begin*/}
                              <>
                                {alert}
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "right",
                                  }}
                                >
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
                                <div
                                  className="content"
                                  style={{ "margin-top": "-30px" }}
                                >
                                  <Row className="mt-5">
                                    <Col xs={12} md={12}>
                                      <ReactTable
                                        data={data}
                                        filterable
                                        resizable={true}
                                        columns={[
                                          {
                                            Header: "Nom",
                                            accessor: "1",
                                          },
                                          {
                                            Header: "Prénom",
                                            accessor: "2",
                                          },
                                          {
                                            Header: "N° équipe",
                                            accessor: "3",
                                          },
                                          {
                                            Header: "Catégorie",
                                            accessor: "4",
                                          },
                                          {
                                            Header: "N° Maillot",
                                            accessor: "5",
                                          },
                                          {
                                            Header: "Convoqué",
                                            accessor: "actions",
                                            sortable: false,
                                            filterable: false,
                                          },
                                          {
                                            Header: "Ind.R",
                                            accessor:
                                              "ReconnaissanceIndividuelle",
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
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "right",
                                  }}
                                >
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
                                <div
                                  className="content"
                                  style={{ "margin-top": "-30px" }}
                                >
                                  <Row className="mt-5">
                                    <Col xs={12} md={12}>
                                      <ReactTable
                                        data={data}
                                        filterable
                                        resizable={false}
                                        columns={[
                                          {
                                            Header: "Nom",
                                            accessor: "1",
                                          },
                                          {
                                            Header: "Prénom",
                                            accessor: "2",
                                          },
                                          {
                                            Header: "N° équipe",
                                            accessor: "3",
                                          },
                                          {
                                            Header: "Catégorie",
                                            accessor: "4",
                                          },
                                          {
                                            Header: "N° Maillot",
                                            accessor: "5",
                                          },
                                          {
                                            Header: "Convoqué",
                                            accessor: "actions",
                                            sortable: false,
                                            filterable: false,
                                          },
                                          {
                                            Header: "Ind.R",
                                            accessor:
                                              "ReconnaissanceIndividuelle",
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
                  </Col>
                </Row>
                {/*Vertical tab ending*/}
              </CardBody>
              <Button
                color="success"
                onClick={async (e) => {
                  e.preventDefault();
                  var bodyFormData = new FormData();
                  bodyFormData.append(
                    "context_type",
                    singleSelectContext.value
                  );
                  bodyFormData.append(
                    "clip_duration",
                    singleSelectClipDuration.value
                  );
                  bodyFormData.append("is_private", singleSelectPrivacy.value);
                  bodyFormData.append(
                    "pitch_ground",
                    singleSelectPitchGround.value
                  );
                  bodyFormData.append("speed", singleSelectPitchSpeed.value);
                  bodyFormData.append("file", videoFile);
                  bodyFormData.append(
                    "home_team",
                    JSON.stringify({
                      club_id: singleSelectHomeClub.value,
                      age_category_id: singleSelectHomeAgeCategory.value,
                      jersey_colour_id: singleSelectHomeJerseyColor.value,
                      jersey_number: 2,
                      team_number_id: singleSelectHomeTeamNumber.value,
                      user_list: [],
                    })
                  );
                  bodyFormData.append(
                    "away_team",
                    JSON.stringify({
                      club_id: singleSelectAwayClub.value,
                      age_category_id: singleSelectAwayAgeCategory.value,
                      jersey_colour_id: singleSelectAwayJerseyColor.value,
                      jersey_number: 3,
                      team_number_id: singleSelectAwayTeamNumber.value,
                      user_list: [],
                    })
                  );

                  await createVideoFiles(user.auth_token, bodyFormData);
                }}
              >
                <i /> Créer la vidéo
              </Button>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default CreerVideo;
