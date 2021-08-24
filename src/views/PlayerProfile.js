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
import {
  getPlayerTeamInfo,
  getProfileDetails,
  setProfileDetails,
} from "apis/routes/profile";
import { getClubDetails } from "apis/routes/common";
import { UserContext } from "providers/UserProvider";
import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
import { useHistory } from "react-router-dom";
import Select from "react-select";

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
  Button,
  UncontrolledTooltip,
  CardHeader,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardTitle,
  Table,
} from "reactstrap";
import { setPlayerTeamInfo } from "apis/routes/profile";
import { createClub } from "apis/routes/common";

function Profile() {
  const [horizontalTabs, sethorizontalTabs] = React.useState("Général");
  // with this function we change the active tab for all the tabs in this page
  const [singleSelectStrongFoot, setsingleSelectStrongFoot] =
    React.useState(null);
  const [singleSelectMBTI, setsingleSelectMBTI] = React.useState(null);
  const [singleSelectCategory, setsingleSelectCategory] = React.useState(null);
  const [singleSelectCountry, setsingleSelectCountry] = React.useState(null);
  const [singleSelectTeamSection, setsingleSelectTeamSection] =
    React.useState(null);
  const [singleSelectGender, setsingleSelectGender] = React.useState(null);
  const [singleSelectClub, setSingleSelectClub] = React.useState(null);
  const [multipleSelectNationality, setmultipleSelectNationality] =
    React.useState(null);
  const [multipleSelectPost, setmultipleSelectPost] = React.useState(null);
  const [multipleSelectPlacement, setmultipleSelectPlacement] =
    React.useState(null);

  const [avatar, setAvatar] = React.useState("");
  const [nickName, setNickName] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [birthDate, setBirthDate] = React.useState("");
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [emailId, setEmailId] = React.useState("");
  const [genderOptions, setGenderOptions] = React.useState([]);
  const [countryOptions, setCountryOptions] = React.useState([]);
  const [ageCategoryOptions, setAgeCategoryOptions] = React.useState([]);
  const [clubOptions, setClubOptions] = React.useState([]);

  const [newClubName, setNewClubName] = React.useState("");
  const [playerTeamId, setPlayerTeamId] = React.useState("");
  const [teamNumber, setTeamNumber] = React.useState(null);
  const [city, setCity] = React.useState("");
  const [zipcode, setZipcode] = React.useState("");

  const [updateData, setUpdateData] = React.useState(true);

  const { user } = React.useContext(UserContext);
  const history = useHistory();

  const getData = async () => {
    const userProfile = await getProfileDetails(user.auth_token);
    const {
      avatar,
      birth_date,
      email,
      first_name,
      gender,
      last_name,
      mobile_num,
      nationality,
      nick_name,
    } = userProfile.profile_details;
    setGenderOptions(userProfile.gender);
    setCountryOptions(userProfile.country);
    setAvatar(avatar);
    setBirthDate(birth_date);
    setEmailId(email);
    setFirstName(first_name);
    userProfile.gender.forEach((element) => {
      if (gender === element.value) {
        setsingleSelectGender(element);
      }
    });
    const nationalityObject = {};
    userProfile.country.forEach((country) => {
      nationalityObject[country.value] = country;
    });
    const nationalityArray = nationality.map((country) => {
      return nationalityObject[country];
    });

    setmultipleSelectNationality(nationalityArray);
    setLastName(last_name);
    setMobileNumber(mobile_num);
    setNickName(nick_name);

    const playerTeamInfo = await getPlayerTeamInfo(user.auth_token);
    const {
      id,
      club_id,
      section,
      age_category,
      team_number,
      city,
      country,
      zipcode,
    } = playerTeamInfo.profile_team_info;

    setPlayerTeamId(id);
    userProfile.gender.forEach((element) => {
      if (section === element.value) {
        setsingleSelectTeamSection(element);
      }
    });
    setAgeCategoryOptions(playerTeamInfo.age_category);
    playerTeamInfo.age_category.forEach((element) => {
      if (age_category === element.value) {
        setsingleSelectCategory(element);
      }
    });
    setTeamNumber(team_number);
    setCity(city);
    setsingleSelectCountry(nationalityObject[country]);
    setZipcode(zipcode);

    const clubDetails = await getClubDetails(user.auth_token);
    setClubOptions(clubDetails.club_details);
    clubDetails.club_details.forEach((element) => {
      if (club_id === element.value) {
        setSingleSelectClub(element);
      }
    });
  };

  React.useEffect(() => {
    if (user) {
      getData();
    }
  }, [user, updateData]);

  if (!user) {
    history.push("/auth/login");
  }

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
                        className={horizontalTabs === "Général" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabs", "Général")
                        }
                      >
                        Général
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={
                          horizontalTabs === "Spécifique" ? "active" : ""
                        }
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabs", "Spécifique")
                        }
                      >
                        Spécifique
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabs === "Équipe" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabs", "Équipe")
                        }
                      >
                        Équipe
                      </NavLink>
                    </NavItem>
                    {/* <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={
                          horizontalTabs === "Carrière" ? "active" : ""
                        }
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabs", "Carrière")
                        }
                      >
                        Carrière
                      </NavLink>
                    </NavItem> */}
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
                            src={
                              avatar || require("assets/img/emilyz.jpg").default
                            }
                          />
                          <h5 className="title">{nickName}</h5>
                        </a>
                      </div>
                    </Card>
                  </Col>
                  <TabContent activeTab={horizontalTabs}>
                    <TabPane tabId="Général">
                      <Row>
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label>Prénom</label>
                            <Input
                              value={firstName}
                              onChange={(e) => {
                                setFirstName(e.target.value);
                              }}
                              placeholder=""
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-md-1" md="6">
                          <FormGroup>
                            <label>Nom</label>
                            <Input
                              value={lastName}
                              onChange={(e) => {
                                setLastName(e.target.value);
                              }}
                              placeholder=""
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label for="Genre">Genre</label>
                            <Select
                              className="react-select info"
                              classNamePrefix="react-select"
                              name="Choix_genre"
                              value={singleSelectGender}
                              onChange={(value) => setsingleSelectGender(value)}
                              options={genderOptions}
                              placeholder=""
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-md-1" md="6">
                          <label>Date de naissance</label>
                          <FormGroup>
                            <ReactDatetime
                              inputProps={{
                                className: "form-control",
                                placeholder: "",
                                value: birthDate,
                              }}
                              timeFormat={false}
                              onChange={(value) => {
                                setBirthDate(
                                  new Date(value).toLocaleDateString("fr-CA")
                                );
                              }}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label>Nationalité(s)</label>
                            <FormGroup>
                              <Select
                                className="react-select info"
                                classNamePrefix="react-select"
                                placeholder=""
                                name="multipleSelect"
                                closeMenuOnSelect={false}
                                isMulti
                                value={multipleSelectNationality}
                                onChange={(value) =>
                                  setmultipleSelectNationality(value)
                                }
                                options={countryOptions}
                              />
                            </FormGroup>
                          </FormGroup>
                        </Col>
                        <Col className="px-md-1" md="6">
                          <FormGroup>
                            <label>Pseudonyme</label>
                            <Input
                              value={nickName}
                              onChange={(e) => {
                                setNickName(e.target.value);
                              }}
                              placeholder=""
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label>E-mail</label>
                            <Input value={emailId} placeholder="" type="text" />
                          </FormGroup>
                        </Col>
                        <Col className="pl-md-1" md="6">
                          <FormGroup>
                            <label>Mobile</label>
                            <Input
                              value={mobileNumber}
                              onChange={(e) => {
                                setMobileNumber(e.target.value);
                              }}
                              placeholder=""
                              type="text"
                            />
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
                            <label>Taille (cm)</label>
                            <Input
                              defaultValue=""
                              placeholder=""
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-md-1" md="6">
                          <FormGroup>
                            <label>Poids (kg)</label>
                            <Input
                              defaultValue=""
                              placeholder=""
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label>Numéro de licence</label>
                            <Input defaultValue="" placeholder="" type="text" />
                          </FormGroup>
                        </Col>
                        <Col className="pl-md-1" md="6">
                          <label>Poste(s)</label>
                          <FormGroup>
                            <Select
                              className="react-select info"
                              classNamePrefix="react-select"
                              placeholder=""
                              name="multipleSelect"
                              closeMenuOnSelect={false}
                              isMulti
                              value={multipleSelectPost}
                              onChange={(value) => setmultipleSelectPost(value)}
                              options={[
                                {
                                  value: "",
                                  label: "Poste(s)",
                                  isDisabled: true,
                                },
                                { value: "1", label: "Gardien" },
                                { value: "2", label: "Défenseur latéral" },
                                { value: "3", label: "Ailier défensif" },
                                { value: "4", label: "Défenseur central" },
                                { value: "5", label: "Milieu défensif" },
                                { value: "6", label: "Milieu offensif" },
                                { value: "7", label: "Milieu relayeur" },
                                { value: "8", label: "Milieu excentré" },
                                { value: "9", label: "Ailier " },
                                { value: "10", label: "9 et demi" },
                                { value: "11", label: "Raumedeuter" },
                                { value: "12", label: "Faux avant-centre" },
                                { value: "13", label: "Avant-centre" },
                              ]}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="6">
                          <label for="Pied_fort">Placement(s)</label>
                          <FormGroup>
                            <Select
                              className="react-select info"
                              classNamePrefix="react-select"
                              placeholder=""
                              name="multipleSelect"
                              closeMenuOnSelect={false}
                              isMulti
                              value={multipleSelectPlacement}
                              onChange={(value) =>
                                setmultipleSelectPlacement(value)
                              }
                              options={[
                                {
                                  value: "",
                                  label: "Placement(s)",
                                  isDisabled: true,
                                },
                                { value: "1", label: "Gauche" },
                                { value: "2", label: "Droite" },
                                { value: "3", label: "Axial" },
                                { value: "4", label: "Libre" },
                              ]}
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-md-1" md="6">
                          <FormGroup>
                            <label for="Pied_fort">Pied(s) fort(s)</label>
                            <Select
                              className="react-select info"
                              classNamePrefix="react-select"
                              name="Choix_pied_fort"
                              value={singleSelectStrongFoot}
                              onChange={(value) =>
                                setsingleSelectStrongFoot(value)
                              }
                              options={[
                                { value: "1", label: "Droitier" },
                                { value: "2", label: "Gaucher" },
                                { value: "3", label: "Ambidextre" },
                              ]}
                              placeholder=""
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label>Vitesse max. aérobie (km/h)</label>
                            <Input
                              defaultValue=""
                              placeholder=""
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-md-1" md="6">
                          <FormGroup>
                            <label>Développer coucher max (kg)</label>{" "}
                            <i
                              className="tim-icons icon-bulb-63"
                              id="tooltip170482121"
                            />
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip170482121"
                            >
                              A mettre à jour pour le suivi.
                            </UncontrolledTooltip>
                            <Input
                              defaultValue=""
                              placeholder=""
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label>Souplesse (cm)</label>{" "}
                            <i
                              className="tim-icons icon-bulb-63"
                              id="tooltip17048212"
                            />
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip17048212"
                            >
                              Test de souplesse ABC. A mettre à jour pour le
                              suivi.
                            </UncontrolledTooltip>
                            <Input
                              defaultValue=""
                              placeholder=""
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-md-1" md="6">
                          <FormGroup>
                            <label>Coordination</label>{" "}
                            <i
                              className="tim-icons icon-bulb-63"
                              id="tooltip170482171"
                            />
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip170482171"
                            >
                              Test de la navette 10 x 5m. A mettre à jour pour
                              le suivi.
                            </UncontrolledTooltip>
                            <Input defaultValue="" placeholder="" type="time" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label>Vitesse</label>{" "}
                            <i
                              className="tim-icons icon-bulb-63"
                              id="tooltip170482171"
                            />
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip170482171"
                            >
                              Sprint de 60m. A mettre à jour pour le suivi.
                            </UncontrolledTooltip>
                            <Input defaultValue="" placeholder="" type="time" />
                          </FormGroup>
                        </Col>
                        <Col className="pl-md-1" md="6">
                          <FormGroup>
                            <label for="MBTI">Profil MBTI</label>
                            <Select
                              className="react-select info"
                              classNamePrefix="react-select"
                              name="Choix_pied_fort"
                              value={singleSelectMBTI}
                              onChange={(value) => setsingleSelectMBTI(value)}
                              options={[
                                { value: "1", label: "Ne pas définir" },
                                { value: "2", label: "INTJ – Architecte" },
                                { value: "3", label: "INTP – Logicien" },
                                { value: "4", label: "ENTJ – Commandant" },
                                { value: "5", label: "ENTP – Innovateur" },
                                { value: "6", label: "INFJ – Avocat" },
                                { value: "7", label: "INFP – Médiateur" },
                                { value: "8", label: "ENFJ – Protagoniste" },
                                { value: "9", label: "ENFP – Inspirateur" },
                                { value: "10", label: "ISTJ – Logisticien" },
                                { value: "11", label: "ISFJ – Défenseur" },
                                { value: "12", label: "ESTJ – Directeur" },
                                { value: "13", label: "ESFJ – Consul" },
                                { value: "14", label: "ISTP – Virtuose" },
                                { value: "15", label: "ISFP – Aventurier" },
                                { value: "16", label: "ESTP – Entrepreuneur" },
                                { value: "17", label: "ESFP – Amuseur" },
                              ]}
                              placeholder=""
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                  <TabContent activeTab={horizontalTabs}>
                    <TabPane tabId="Équipe">
                      <Row>
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label>Nom du club</label>{" "}
                            <Select
                              className="react-select info"
                              classNamePrefix="react-select"
                              name="Choix_section"
                              value={singleSelectClub}
                              onChange={(value) => setSingleSelectClub(value)}
                              options={clubOptions}
                              isDisabled={!!newClubName}
                              placeholder=""
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label>Créer un club</label>
                            <Input
                              defaultValue={newClubName}
                              onChange={(e) => {
                                setNewClubName(e.target.value);
                              }}
                              placeholder=""
                              type="texte"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label for="Section">Section</label>
                            <Select
                              className="react-select info"
                              classNamePrefix="react-select"
                              name="Choix_section"
                              value={singleSelectTeamSection}
                              onChange={(value) =>
                                setsingleSelectTeamSection(value)
                              }
                              options={genderOptions}
                              placeholder=""
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label for="Pied_fort">Catégorie</label>
                            <Select
                              className="react-select info"
                              classNamePrefix="react-select"
                              name="Choix_section"
                              value={singleSelectCategory}
                              onChange={(value) =>
                                setsingleSelectCategory(value)
                              }
                              options={ageCategoryOptions}
                              placeholder=""
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label>Numéro d'équipe</label>
                            <Input
                              defaultValue={teamNumber}
                              placeholder=""
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label>Pays</label>
                            <Select
                              className="react-select info"
                              classNamePrefix="react-select"
                              placeholder=""
                              name="Choix_pays"
                              value={singleSelectCountry}
                              onChange={(value) =>
                                setsingleSelectCountry(value)
                              }
                              options={countryOptions}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label>Ville</label>
                            <Input
                              defaultValue={city}
                              onChange={(e) => {
                                setCity(e.target.value);
                              }}
                              placeholder=""
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label>Code postal</label>
                            <Input
                              defaultValue={zipcode}
                              onChange={(e) => {
                                setZipcode(e.target.value);
                              }}
                              placeholder=""
                              type="texte"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                  <TabContent activeTab={horizontalTabs}>
                    <TabPane tabId="Carrière">
                      <Card>
                        <CardHeader>
                          <div className="tools float-right">
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
                                  Ajouter une ligne club
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </div>
                          <CardTitle tag="h4">Carrière en club</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <Table responsive>
                            <thead className="text-primary">
                              <tr>
                                <th className="text-center">Club</th>
                                <th className="text-center">Saison</th>
                                <th className="text-center">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-center">Club</td>
                                <td className="text-center">2020-2021</td>
                                <td className="text-center">
                                  <Button
                                    className="btn-link btn-icon"
                                    color="success"
                                    id="tooltip324367706"
                                    size="sm"
                                  >
                                    <i className="tim-icons icon-refresh-01" />
                                  </Button>
                                  <UncontrolledTooltip
                                    delay={0}
                                    target="tooltip324367706"
                                  >
                                    Modifier
                                  </UncontrolledTooltip>
                                  <Button
                                    className="btn-link"
                                    color="danger"
                                    id="tooltip974171201"
                                    size="sm"
                                  >
                                    <i className="tim-icons icon-simple-remove" />
                                  </Button>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </CardBody>
                      </Card>
                      <Card>
                        <CardHeader>
                          <div className="tools float-right">
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
                                  Ajouter une ligne sélection
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </div>
                          <CardTitle tag="h4">Carrière en sélection</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <Table responsive>
                            <thead className="text-primary">
                              <tr>
                                <th className="text-center">Club</th>
                                <th className="text-center">Saison</th>
                                <th className="text-center">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-center">Club</td>
                                <td className="text-center">2020-2021</td>
                                <td className="text-center">
                                  <Button
                                    className="btn-link btn-icon"
                                    color="success"
                                    id="tooltip324367706"
                                    size="sm"
                                  >
                                    <i className="tim-icons icon-refresh-01" />
                                  </Button>
                                  <UncontrolledTooltip
                                    delay={0}
                                    target="tooltip324367706"
                                  >
                                    Modifier
                                  </UncontrolledTooltip>
                                  <Button
                                    className="btn-link"
                                    color="danger"
                                    id="tooltip974171201"
                                    size="sm"
                                  >
                                    <i className="tim-icons icon-simple-remove" />
                                  </Button>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </CardBody>
                      </Card>
                    </TabPane>
                  </TabContent>
                  <Col className="text-center">
                    <Button
                      color="success"
                      onClick={async (e) => {
                        e.preventDefault();
                        if (horizontalTabs === "Général") {
                          var bodyFormData = new FormData();
                          bodyFormData.append("first_name", firstName);
                          bodyFormData.append("last_name", lastName);
                          bodyFormData.append("birth_date", birthDate);
                          bodyFormData.append(
                            "gender",
                            singleSelectGender.value
                          );
                          bodyFormData.append("nick_name", nickName);
                          bodyFormData.append("email", emailId);
                          multipleSelectNationality.forEach((element, index) =>
                            bodyFormData.append(
                              `nationality[${index}]`,
                              element.value
                            )
                          );

                          bodyFormData.append("mobile_num", mobileNumber);
                          await setProfileDetails(
                            user.auth_token,
                            bodyFormData
                          );
                          setUpdateData(!updateData);
                        } else if (horizontalTabs === "Équipe") {
                          if (newClubName) {
                            await createClub(user.auth_token, newClubName);
                            const { club_details } = await getClubDetails(
                              user.auth_token
                            );
                            club_details.forEach(async (element) => {
                              if (newClubName === element.label) {
                                await setPlayerTeamInfo(user.auth_token, {
                                  id: playerTeamId,
                                  club: element.value,
                                  section: singleSelectTeamSection.value,
                                  age_category: singleSelectCategory.value,
                                  team_number: teamNumber,
                                  country: singleSelectCountry.value,
                                  city,
                                  zipcode,
                                });
                                setNewClubName("");
                              }
                            });
                          } else {
                            await setPlayerTeamInfo(user.auth_token, {
                              id: playerTeamId,
                              club: singleSelectClub.value,
                              section: singleSelectTeamSection.value,
                              age_category: singleSelectCategory.value,
                              team_number: teamNumber,
                              country: singleSelectCountry.value,
                              city,
                              zipcode,
                            });
                          }
                          setUpdateData(!updateData);
                        }
                      }}
                    >
                      <i /> Valider
                    </Button>
                  </Col>
                </Card>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default Profile;
