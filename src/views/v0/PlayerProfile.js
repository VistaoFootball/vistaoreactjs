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
import { getPostCategories } from "apis/routes/common";
import { getPostSubCategories } from "apis/routes/common";
import { getPlayerCommonCharacteristic } from "apis/routes/profile";
import { setPlayerCommonCharacteristic } from "apis/routes/profile";
import { getSubscriptionStatus } from "apis/routes/profile";

function Profile() {
  const [horizontalTabs, sethorizontalTabs] = React.useState("Général");
  // with this function we change the active tab for all the tabs in this page

  const [singleSelectCategory, setsingleSelectCategory] = React.useState(null);
  const [singleSelectCountry, setsingleSelectCountry] = React.useState(null);
  const [singleSelectTeamSection, setsingleSelectTeamSection] =
    React.useState(null);
  const [singleSelectGender, setsingleSelectGender] = React.useState(null);
  const [singleSelectClub, setSingleSelectClub] = React.useState(null);
  const [multipleSelectNationality, setmultipleSelectNationality] =
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

  const [primaryPostCategory, setPrimaryPostCategory] = React.useState(null);
  const [primaryPostSubCategory, setPrimaryPostSubCategory] =
    React.useState(null);
  const [primaryPlacement, setPrimaryPlacement] = React.useState(null);
  const [secondaryPostCategory, setSecondaryPostCategory] =
    React.useState(null);
  const [secondaryPostSubCategory, setSecondaryPostSubCategory] =
    React.useState(null);
  const [secondaryPlacement, setSecondaryPlacement] = React.useState(null);
  const [postCategoryOptions, setPostCategoryOptions] = React.useState([]);
  const [primaryPostSubCategoryOptions, setPrimaryPostSubCategoryOptions] =
    React.useState([]);
  const [secondaryPostSubCategoryOptions, setSecondaryPostSubCategoryOptions] =
    React.useState([]);
  const [playerCommonId, setPlayerCommonId] = React.useState(null);

  const [newClubName, setNewClubName] = React.useState("");
  const [playerTeamId, setPlayerTeamId] = React.useState("");
  const [teamNumber, setTeamNumber] = React.useState(null);
  const [city, setCity] = React.useState("");
  const [zipcode, setZipcode] = React.useState("");

  const { user } = React.useContext(UserContext);
  const history = useHistory();
  const [userPlan, setUserPlan] = React.useState({});

  const placementOptions = [
    { value: 5, label: "Gauche" },
    { value: 6, label: "Droite" },
    { value: 7, label: "Axial" },
    { value: 8, label: "Libre" },
  ];
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

    const { player_common_characteristic } =
      await getPlayerCommonCharacteristic(user.auth_token);
    setPlayerCommonId({
      primary_id: player_common_characteristic[0].id,
      secondary_id: player_common_characteristic[1].id,
    });
    const postCategories = await getPostCategories(user.auth_token);
    setPostCategoryOptions(postCategories);

    const primaryPostSubCategories = await getPostSubCategories(
      user.auth_token,
      player_common_characteristic[0].post_category
    );
    setPrimaryPostSubCategoryOptions(primaryPostSubCategories);

    const secondaryPostSubCategories = await getPostSubCategories(
      user.auth_token,
      player_common_characteristic[1].post_category
    );
    setSecondaryPostSubCategoryOptions(secondaryPostSubCategories);

    setPrimaryPostCategory(
      postCategories.find(
        (ele) => ele.value === player_common_characteristic[0].post_category
      )
    );
    setPrimaryPostSubCategory(
      primaryPostSubCategories.find(
        (ele) => ele.value === player_common_characteristic[0].post_sub_category
      )
    );
    setPrimaryPlacement(
      placementOptions.find(
        (ele) => ele.value === player_common_characteristic[0].placement_type
      )
    );
    setSecondaryPostCategory(
      postCategories.find(
        (ele) => ele.value === player_common_characteristic[1].post_category
      )
    );
    setSecondaryPostSubCategory(
      secondaryPostSubCategories.find(
        (ele) => ele.value === player_common_characteristic[1].post_sub_category
      )
    );
    setSecondaryPlacement(
      placementOptions.find(
        (ele) => ele.value === player_common_characteristic[1].placement_type
      )
    );
  };

  React.useEffect(() => {
    if (user) {
      getData();
      getSubscriptionStatus(user.auth_token).then(({ plan_type }) => {
        setUserPlan(plan_type);
      });
    }
  }, [user]);

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
                          <label>Primaire Poste</label>
                          <FormGroup>
                            <Select
                              className="react-select info"
                              classNamePrefix="react-select"
                              placeholder=""
                              name="singleSelect"
                              closeMenuOnSelect={false}
                              value={primaryPostCategory}
                              onChange={async (value) => {
                                setPrimaryPostCategory(value);
                                const postSubCategory =
                                  await getPostSubCategories(
                                    user.auth_token,
                                    value.value
                                  );
                                setPrimaryPostSubCategoryOptions(
                                  postSubCategory
                                );
                              }}
                              options={postCategoryOptions}
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-md-1" md="6">
                          <label for="Pied_fort">Primaire Sous-poste</label>
                          <FormGroup>
                            <Select
                              className="react-select info"
                              classNamePrefix="react-select"
                              placeholder=""
                              name="singleeSelect"
                              closeMenuOnSelect={false}
                              value={primaryPostSubCategory}
                              onChange={(value) =>
                                setPrimaryPostSubCategory(value)
                              }
                              options={primaryPostSubCategoryOptions}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="6">
                          <label for="Pied_fort">Primaire Placement</label>
                          <FormGroup>
                            <Select
                              className="react-select info"
                              classNamePrefix="react-select"
                              placeholder=""
                              name="singleSelect"
                              closeMenuOnSelect={false}
                              value={primaryPlacement}
                              onChange={(value) => setPrimaryPlacement(value)}
                              options={placementOptions}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="6">
                          <label>Secondaire Poste</label>
                          <FormGroup>
                            <Select
                              className="react-select info"
                              classNamePrefix="react-select"
                              placeholder=""
                              name="singleSelect"
                              closeMenuOnSelect={false}
                              value={secondaryPostCategory}
                              onChange={async (value) => {
                                setSecondaryPostCategory(value);
                                const postSubCategory =
                                  await getPostSubCategories(
                                    user.auth_token,
                                    value.value
                                  );
                                setSecondaryPostSubCategoryOptions(
                                  postSubCategory
                                );
                              }}
                              options={postCategoryOptions}
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-md-1" md="6">
                          <label for="Pied_fort">Secondaire Sous-poste</label>
                          <FormGroup>
                            <Select
                              className="react-select info"
                              classNamePrefix="react-select"
                              placeholder=""
                              name="singleSelect"
                              closeMenuOnSelect={false}
                              value={secondaryPostSubCategory}
                              onChange={(value) =>
                                setSecondaryPostSubCategory(value)
                              }
                              options={secondaryPostSubCategoryOptions}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-md-1" md="6">
                          <label for="Pied_fort">Secondaire Placement</label>
                          <FormGroup>
                            <Select
                              className="react-select info"
                              classNamePrefix="react-select"
                              placeholder=""
                              name="singleSelect"
                              closeMenuOnSelect={false}
                              value={secondaryPlacement}
                              onChange={(value) => setSecondaryPlacement(value)}
                              options={placementOptions}
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
                              disabled={userPlan.user_type !== 1}
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
                          if (birthDate) {
                            bodyFormData.append("birth_date", birthDate);
                          }
                          if (singleSelectGender) {
                            bodyFormData.append(
                              "gender",
                              singleSelectGender.value
                            );
                          }
                          bodyFormData.append("nick_name", nickName);
                          bodyFormData.append("email", emailId);
                          multipleSelectNationality.forEach((element, index) =>
                            bodyFormData.append(
                              `nationality[${index}]`,
                              element.value
                            )
                          );
                          bodyFormData.append("mobile_num", mobileNumber);
                          if (multipleSelectNationality.length > 0)
                            await setProfileDetails(
                              user.auth_token,
                              bodyFormData
                            );
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
                                  ...(singleSelectTeamSection && {
                                    section: singleSelectTeamSection.value,
                                  }),
                                  ...(singleSelectCategory && {
                                    age_category: singleSelectCategory.value,
                                  }),
                                  team_number: teamNumber,
                                  ...(singleSelectCountry && {
                                    country: singleSelectCountry.value,
                                  }),
                                  city,
                                  zipcode,
                                });
                                setNewClubName("");
                              }
                            });
                          } else {
                            await setPlayerTeamInfo(user.auth_token, {
                              id: playerTeamId,
                              ...(singleSelectClub && {
                                club: singleSelectClub.value,
                              }),
                              ...(singleSelectTeamSection && {
                                section: singleSelectTeamSection.value,
                              }),
                              ...(singleSelectCategory && {
                                age_category: singleSelectCategory.value,
                              }),
                              team_number: teamNumber,
                              ...(singleSelectCountry && {
                                country: singleSelectCountry.value,
                              }),
                              city,
                              zipcode,
                            });
                          }
                        } else if (horizontalTabs === "Spécifique") {
                          if (
                            playerCommonId &&
                            primaryPostCategory &&
                            primaryPostSubCategory &&
                            primaryPlacement &&
                            secondaryPostCategory &&
                            secondaryPostSubCategory &&
                            secondaryPlacement
                          ) {
                            await setPlayerCommonCharacteristic(
                              user.auth_token,
                              [
                                {
                                  id: playerCommonId.primary_id,
                                  post_category: primaryPostCategory.value,
                                  post_sub_category:
                                    primaryPostSubCategory.value,
                                  placement_type: primaryPlacement.value,
                                  post_type: "primary",
                                },
                                {
                                  id: playerCommonId.secondary_id,
                                  post_category: secondaryPostCategory.value,
                                  post_sub_category:
                                    secondaryPostSubCategory.value,
                                  placement_type: secondaryPlacement.value,
                                  post_type: "secondary",
                                },
                              ]
                            );
                          }
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
