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
import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
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


function Profile() {

  
  const [horizontalTabs, sethorizontalTabs] = React.useState("Général");
  // with this function we change the active tab for all the tabs in this page
  const [singleSelectCategory, setsingleSelectCategory] = React.useState(null);
  const [singleSelectCountry, setsingleSelectCountry] = React.useState(null);
  const [singleSelectTeamSection, setsingleSelectTeamSection] = React.useState(null);
  const [singleSelectGender, setsingleSelectGender] = React.useState(null);
  const [multipleSelectNationality, setmultipleSelectNationality] = React.useState(null);
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
                        className={horizontalTabs === "Équipe" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabs", "Équipe")
                        }
                      >
                        Équipe
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        className={horizontalTabs === "Carrière" ? "active" : ""}
                        onClick={(e) =>
                          changeActiveTab(e, "horizontalTabs", "Carrière")
                        }
                      >
                        Carrière
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
                  <TabContent activeTab={horizontalTabs}>
                    <TabPane tabId="Général">
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
                    <FormGroup >
                      <label for="Genre">Genre</label>
                      <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    name="Choix_genre"
                    equipe={singleSelectGender}
                    onChange={(value) => setsingleSelectGender(value)}
                    options={[
                      { value: "1", label: "Femme" },
                      { value: "2", label: "Homme" },
                    ]}
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
                    }}
                    timeFormat={false}
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
                                  onChange={(value) => setmultipleSelectNationality(value)}
                                  options={[
                                    {
                                      value: "",
                                      label: "Nationalité(s)",
                                      isDisabled: true,
                                    },
                                      {label: "Afghanistan", value: "AF"}, 
                                      {label: "Åland Islands", value: "AX"}, 
                                      {label: "Albania", value: "AL"}, 
                                      {label: "Algeria", value: "DZ"}, 
                                      {label: "American Samoa", value: "AS"}, 
                                      {label: "AndorrA", value: "AD"}, 
                                      {label: "Angola", value: "AO"}, 
                                      {label: "Anguilla", value: "AI"}, 
                                      {label: "Antarctica", value: "AQ"}, 
                                      {label: "Antigua and Barbuda", value: "AG"}, 
                                      {label: "Argentina", value: "AR"}, 
                                      {label: "Armenia", value: "AM"}, 
                                      {label: "Aruba", value: "AW"}, 
                                      {label: "Australia", value: "AU"}, 
                                      {label: "Austria", value: "AT"}, 
                                      {label: "Azerbaijan", value: "AZ"}, 
                                      {label: "Bahamas", value: "BS"}, 
                                      {label: "Bahrain", value: "BH"}, 
                                      {label: "Bangladesh", value: "BD"}, 
                                      {label: "Barbados", value: "BB"}, 
                                      {label: "Belarus", value: "BY"}, 
                                      {label: "Belgium", value: "BE"}, 
                                      {label: "Belize", value: "BZ"}, 
                                      {label: "Benin", value: "BJ"}, 
                                      {label: "Bermuda", value: "BM"}, 
                                      {label: "Bhutan", value: "BT"}, 
                                      {label: "Bolivia", value: "BO"}, 
                                      {label: "Bosnia and Herzegovina", value: "BA"}, 
                                      {label: "Botswana", value: "BW"}, 
                                      {label: "Bouvet Island", value: "BV"}, 
                                      {label: "Brazil", value: "BR"}, 
                                      {label: "British Indian Ocean Territory", value: "IO"}, 
                                      {label: "Brunei Darussalam", value: "BN"}, 
                                      {label: "Bulgaria", value: "BG"}, 
                                      {label: "Burkina Faso", value: "BF"}, 
                                      {label: "Burundi", value: "BI"}, 
                                      {label: "Cambodia", value: "KH"}, 
                                      {label: "Cameroon", value: "CM"}, 
                                      {label: "Canada", value: "CA"}, 
                                      {label: "Cape Verde", value: "CV"}, 
                                      {label: "Cayman Islands", value: "KY"}, 
                                      {label: "Central African Republic", value: "CF"}, 
                                      {label: "Chad", value: "TD"}, 
                                      {label: "Chile", value: "CL"}, 
                                      {label: "China", value: "CN"}, 
                                      {label: "Christmas Island", value: "CX"}, 
                                      {label: "Cocos (Keeling) Islands", value: "CC"}, 
                                      {label: "Colombia", value: "CO"}, 
                                      {label: "Comoros", value: "KM"}, 
                                      {label: "Congo", value: "CG"}, 
                                      {label: "Congo, The Democratic Republic of the", value: "CD"}, 
                                      {label: "Cook Islands", value: "CK"}, 
                                      {label: "Costa Rica", value: "CR"}, 
                                      {label: "Cote D\"Ivoire", value: "CI"}, 
                                      {label: "Croatia", value: "HR"}, 
                                      {label: "Cuba", value: "CU"}, 
                                      {label: "Cyprus", value: "CY"}, 
                                      {label: "Czech Republic", value: "CZ"}, 
                                      {label: "Denmark", value: "DK"}, 
                                      {label: "Djibouti", value: "DJ"}, 
                                      {label: "Dominica", value: "DM"}, 
                                      {label: "Dominican Republic", value: "DO"}, 
                                      {label: "Ecuador", value: "EC"}, 
                                      {label: "Egypt", value: "EG"}, 
                                      {label: "El Salvador", value: "SV"}, 
                                      {label: "Equatorial Guinea", value: "GQ"}, 
                                      {label: "Eritrea", value: "ER"}, 
                                      {label: "Estonia", value: "EE"}, 
                                      {label: "Ethiopia", value: "ET"}, 
                                      {label: "Falkland Islands (Malvinas)", value: "FK"}, 
                                      {label: "Faroe Islands", value: "FO"}, 
                                      {label: "Fiji", value: "FJ"}, 
                                      {label: "Finland", value: "FI"}, 
                                      {label: "France", value: "FR"}, 
                                      {label: "French Guiana", value: "GF"}, 
                                      {label: "French Polynesia", value: "PF"}, 
                                      {label: "French Southern Territories", value: "TF"}, 
                                      {label: "Gabon", value: "GA"}, 
                                      {label: "Gambia", value: "GM"}, 
                                      {label: "Georgia", value: "GE"}, 
                                      {label: "Germany", value: "DE"}, 
                                      {label: "Ghana", value: "GH"}, 
                                      {label: "Gibraltar", value: "GI"}, 
                                      {label: "Greece", value: "GR"}, 
                                      {label: "Greenland", value: "GL"}, 
                                      {label: "Grenada", value: "GD"}, 
                                      {label: "Guadeloupe", value: "GP"}, 
                                      {label: "Guam", value: "GU"}, 
                                      {label: "Guatemala", value: "GT"}, 
                                      {label: "Guernsey", value: "GG"}, 
                                      {label: "Guinea", value: "GN"}, 
                                      {label: "Guinea-Bissau", value: "GW"}, 
                                      {label: "Guyana", value: "GY"}, 
                                      {label: "Haiti", value: "HT"}, 
                                      {label: "Heard Island and Mcdonald Islands", value: "HM"}, 
                                      {label: "Holy See (Vatican City State)", value: "VA"}, 
                                      {label: "Honduras", value: "HN"}, 
                                      {label: "Hong Kong", value: "HK"}, 
                                      {label: "Hungary", value: "HU"}, 
                                      {label: "Iceland", value: "IS"}, 
                                      {label: "India", value: "IN"}, 
                                      {label: "Indonesia", value: "ID"}, 
                                      {label: "Iran, Islamic Republic Of", value: "IR"}, 
                                      {label: "Iraq", value: "IQ"}, 
                                      {label: "Ireland", value: "IE"}, 
                                      {label: "Isle of Man", value: "IM"}, 
                                      {label: "Israel", value: "IL"}, 
                                      {label: "Italy", value: "IT"}, 
                                      {label: "Jamaica", value: "JM"}, 
                                      {label: "Japan", value: "JP"}, 
                                      {label: "Jersey", value: "JE"}, 
                                      {label: "Jordan", value: "JO"}, 
                                      {label: "Kazakhstan", value: "KZ"}, 
                                      {label: "Kenya", value: "KE"}, 
                                      {label: "Kiribati", value: "KI"}, 
                                      {label: "Korea, Democratic People\"S Republic of", value: "KP"}, 
                                      {label: "Korea, Republic of", value: "KR"}, 
                                      {label: "Kuwait", value: "KW"}, 
                                      {label: "Kyrgyzstan", value: "KG"}, 
                                      {label: "Lao People\"S Democratic Republic", value: "LA"}, 
                                      {label: "Latvia", value: "LV"}, 
                                      {label: "Lebanon", value: "LB"}, 
                                      {label: "Lesotho", value: "LS"}, 
                                      {label: "Liberia", value: "LR"}, 
                                      {label: "Libyan Arab Jamahiriya", value: "LY"}, 
                                      {label: "Liechtenstein", value: "LI"}, 
                                      {label: "Lithuania", value: "LT"}, 
                                      {label: "Luxembourg", value: "LU"}, 
                                      {label: "Macao", value: "MO"}, 
                                      {label: "Macedonia, The Former Yugoslav Republic of", value: "MK"}, 
                                      {label: "Madagascar", value: "MG"}, 
                                      {label: "Malawi", value: "MW"}, 
                                      {label: "Malaysia", value: "MY"}, 
                                      {label: "Maldives", value: "MV"}, 
                                      {label: "Mali", value: "ML"}, 
                                      {label: "Malta", value: "MT"}, 
                                      {label: "Marshall Islands", value: "MH"}, 
                                      {label: "Martinique", value: "MQ"}, 
                                      {label: "Mauritania", value: "MR"}, 
                                      {label: "Mauritius", value: "MU"}, 
                                      {label: "Mayotte", value: "YT"}, 
                                      {label: "Mexico", value: "MX"}, 
                                      {label: "Micronesia, Federated States of", value: "FM"}, 
                                      {label: "Moldova, Republic of", value: "MD"}, 
                                      {label: "Monaco", value: "MC"}, 
                                      {label: "Mongolia", value: "MN"}, 
                                      {label: "Montserrat", value: "MS"}, 
                                      {label: "Morocco", value: "MA"}, 
                                      {label: "Mozambique", value: "MZ"}, 
                                      {label: "Myanmar", value: "MM"}, 
                                      {label: "Namibia", value: "NA"}, 
                                      {label: "Nauru", value: "NR"}, 
                                      {label: "Nepal", value: "NP"}, 
                                      {label: "Netherlands", value: "NL"}, 
                                      {label: "Netherlands Antilles", value: "AN"}, 
                                      {label: "New Caledonia", value: "NC"}, 
                                      {label: "New Zealand", value: "NZ"}, 
                                      {label: "Nicaragua", value: "NI"}, 
                                      {label: "Niger", value: "NE"}, 
                                      {label: "Nigeria", value: "NG"}, 
                                      {label: "Niue", value: "NU"}, 
                                      {label: "Norfolk Island", value: "NF"}, 
                                      {label: "Northern Mariana Islands", value: "MP"}, 
                                      {label: "Norway", value: "NO"}, 
                                      {label: "Oman", value: "OM"}, 
                                      {label: "Pakistan", value: "PK"}, 
                                      {label: "Palau", value: "PW"}, 
                                      {label: "Palestinian Territory, Occupied", value: "PS"}, 
                                      {label: "Panama", value: "PA"}, 
                                      {label: "Papua New Guinea", value: "PG"}, 
                                      {label: "Paraguay", value: "PY"}, 
                                      {label: "Peru", value: "PE"}, 
                                      {label: "Philippines", value: "PH"}, 
                                      {label: "Pitcairn", value: "PN"}, 
                                      {label: "Poland", value: "PL"}, 
                                      {label: "Portugal", value: "PT"}, 
                                      {label: "Puerto Rico", value: "PR"}, 
                                      {label: "Qatar", value: "QA"}, 
                                      {label: "Reunion", value: "RE"}, 
                                      {label: "Romania", value: "RO"}, 
                                      {label: "Russian Federation", value: "RU"}, 
                                      {label: "RWANDA", value: "RW"}, 
                                      {label: "Saint Helena", value: "SH"}, 
                                      {label: "Saint Kitts and Nevis", value: "KN"}, 
                                      {label: "Saint Lucia", value: "LC"}, 
                                      {label: "Saint Pierre and Miquelon", value: "PM"}, 
                                      {label: "Saint Vincent and the Grenadines", value: "VC"}, 
                                      {label: "Samoa", value: "WS"}, 
                                      {label: "San Marino", value: "SM"}, 
                                      {label: "Sao Tome and Principe", value: "ST"}, 
                                      {label: "Saudi Arabia", value: "SA"}, 
                                      {label: "Senegal", value: "SN"}, 
                                      {label: "Serbia and Montenegro", value: "CS"}, 
                                      {label: "Seychelles", value: "SC"}, 
                                      {label: "Sierra Leone", value: "SL"}, 
                                      {label: "Singapore", value: "SG"}, 
                                      {label: "Slovakia", value: "SK"}, 
                                      {label: "Slovenia", value: "SI"}, 
                                      {label: "Solomon Islands", value: "SB"}, 
                                      {label: "Somalia", value: "SO"}, 
                                      {label: "South Africa", value: "ZA"}, 
                                      {label: "South Georgia and the South Sandwich Islands", value: "GS"}, 
                                      {label: "Spain", value: "ES"}, 
                                      {label: "Sri Lanka", value: "LK"}, 
                                      {label: "Sudan", value: "SD"}, 
                                      {label: "Surilabel", value: "SR"}, 
                                      {label: "Svalbard and Jan Mayen", value: "SJ"}, 
                                      {label: "Swaziland", value: "SZ"}, 
                                      {label: "Sweden", value: "SE"}, 
                                      {label: "Switzerland", value: "CH"}, 
                                      {label: "Syrian Arab Republic", value: "SY"}, 
                                      {label: "Taiwan, Province of China", value: "TW"}, 
                                      {label: "Tajikistan", value: "TJ"}, 
                                      {label: "Tanzania, United Republic of", value: "TZ"}, 
                                      {label: "Thailand", value: "TH"}, 
                                      {label: "Timor-Leste", value: "TL"}, 
                                      {label: "Togo", value: "TG"}, 
                                      {label: "Tokelau", value: "TK"}, 
                                      {label: "Tonga", value: "TO"}, 
                                      {label: "Trinidad and Tobago", value: "TT"}, 
                                      {label: "Tunisia", value: "TN"}, 
                                      {label: "Turkey", value: "TR"}, 
                                      {label: "Turkmenistan", value: "TM"}, 
                                      {label: "Turks and Caicos Islands", value: "TC"}, 
                                      {label: "Tuvalu", value: "TV"}, 
                                      {label: "Uganda", value: "UG"}, 
                                      {label: "Ukraine", value: "UA"}, 
                                      {label: "United Arab Emirates", value: "AE"}, 
                                      {label: "United Kingdom", value: "GB"}, 
                                      {label: "United States", value: "US"}, 
                                      {label: "United States Minor Outlying Islands", value: "UM"}, 
                                      {label: "Uruguay", value: "UY"}, 
                                      {label: "Uzbekistan", value: "UZ"}, 
                                      {label: "Vanuatu", value: "VU"}, 
                                      {label: "Venezuela", value: "VE"}, 
                                      {label: "Viet Nam", value: "VN"}, 
                                      {label: "Virgin Islands, British", value: "VG"}, 
                                      {label: "Virgin Islands, U.S.", value: "VI"}, 
                                      {label: "Wallis and Futuna", value: "WF"}, 
                                      {label: "Western Sahara", value: "EH"}, 
                                      {label: "Yemen", value: "YE"}, 
                                      {label: "Zambia", value: "ZM"}, 
                                      {label: "Zimbabwe", value: "ZW"} 
                                  ]}
                                />
                                </FormGroup>
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="6">
                    <FormGroup>
                        <label>Pseudonyme</label>
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
                        <label>E-mail</label>
                        <Input
                          defaultValue=""
                          placeholder=""
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Mobile</label>
                        <Input
                          defaultValue=""
                          placeholder=""
                          type="text"
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
                        <label>Nom du club</label>
                        <Input
                          defaultValue=""
                          placeholder=""
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                    <FormGroup >
                      <label for="Section">Section</label>
                      <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    name="Choix_section"
                    equipe={singleSelectTeamSection}
                    onChange={(value) => setsingleSelectTeamSection(value)}
                    options={[
                      { value: "1", label: "Féminine" },
                      { value: "2", label: "Masculine" },
                    ]}
                    placeholder=""
                  />
                      </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col className="pr-md-1" md="6">
                    <FormGroup >
                      <label for="Pied_fort">Catégorie</label>
                      <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    name="Choix_section"
                    equipe={singleSelectCategory}
                    onChange={(value) => setsingleSelectCategory(value)}
                    options={[
                      { value: "1", label: "Ne pas définir" },
                      { value: "2", label: "U11" },
                      { value: "3", label: "U12" },
                      { value: "4", label: "U13" },
                      { value: "5", label: "U14" },
                      { value: "6", label: "U15" },
                      { value: "7", label: "U16" },
                      { value: "8", label: "U17" },
                      { value: "9", label: "U18" },
                      { value: "10", label: "U19" },
                      { value: "11", label: "U20" },
                      { value: "12", label: "U21" },
                      { value: "13", label: "U22" },
                      { value: "14", label: "U23" },
                      { value: "15", label: "Sénior" },
                      { value: "16", label: "Vétérans" },
                      { value: "17", label: "Loisirs" },
                    ]}
                    placeholder=""
                  />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                    <FormGroup>
                        <label>Numéro d'équipe</label>
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
                    <label>Pays</label>
                    <Select
                    className="react-select info"
                    classNamePrefix="react-select"
                    placeholder=""
                    name="Choix_pays"
                    equipe={singleSelectCountry}
                    onChange={(value) => setsingleSelectCountry(value)}
                    options={[
                                    {
                                      value: "",
                                      label: "Pays",
                                      isDisabled: true,
                                    },
                                      {label: "Afghanistan", value: "AF"}, 
                                      {label: "Åland Islands", value: "AX"}, 
                                      {label: "Albania", value: "AL"}, 
                                      {label: "Algeria", value: "DZ"}, 
                                      {label: "American Samoa", value: "AS"}, 
                                      {label: "AndorrA", value: "AD"}, 
                                      {label: "Angola", value: "AO"}, 
                                      {label: "Anguilla", value: "AI"}, 
                                      {label: "Antarctica", value: "AQ"}, 
                                      {label: "Antigua and Barbuda", value: "AG"}, 
                                      {label: "Argentina", value: "AR"}, 
                                      {label: "Armenia", value: "AM"}, 
                                      {label: "Aruba", value: "AW"}, 
                                      {label: "Australia", value: "AU"}, 
                                      {label: "Austria", value: "AT"}, 
                                      {label: "Azerbaijan", value: "AZ"}, 
                                      {label: "Bahamas", value: "BS"}, 
                                      {label: "Bahrain", value: "BH"}, 
                                      {label: "Bangladesh", value: "BD"}, 
                                      {label: "Barbados", value: "BB"}, 
                                      {label: "Belarus", value: "BY"}, 
                                      {label: "Belgium", value: "BE"}, 
                                      {label: "Belize", value: "BZ"}, 
                                      {label: "Benin", value: "BJ"}, 
                                      {label: "Bermuda", value: "BM"}, 
                                      {label: "Bhutan", value: "BT"}, 
                                      {label: "Bolivia", value: "BO"}, 
                                      {label: "Bosnia and Herzegovina", value: "BA"}, 
                                      {label: "Botswana", value: "BW"}, 
                                      {label: "Bouvet Island", value: "BV"}, 
                                      {label: "Brazil", value: "BR"}, 
                                      {label: "British Indian Ocean Territory", value: "IO"}, 
                                      {label: "Brunei Darussalam", value: "BN"}, 
                                      {label: "Bulgaria", value: "BG"}, 
                                      {label: "Burkina Faso", value: "BF"}, 
                                      {label: "Burundi", value: "BI"}, 
                                      {label: "Cambodia", value: "KH"}, 
                                      {label: "Cameroon", value: "CM"}, 
                                      {label: "Canada", value: "CA"}, 
                                      {label: "Cape Verde", value: "CV"}, 
                                      {label: "Cayman Islands", value: "KY"}, 
                                      {label: "Central African Republic", value: "CF"}, 
                                      {label: "Chad", value: "TD"}, 
                                      {label: "Chile", value: "CL"}, 
                                      {label: "China", value: "CN"}, 
                                      {label: "Christmas Island", value: "CX"}, 
                                      {label: "Cocos (Keeling) Islands", value: "CC"}, 
                                      {label: "Colombia", value: "CO"}, 
                                      {label: "Comoros", value: "KM"}, 
                                      {label: "Congo", value: "CG"}, 
                                      {label: "Congo, The Democratic Republic of the", value: "CD"}, 
                                      {label: "Cook Islands", value: "CK"}, 
                                      {label: "Costa Rica", value: "CR"}, 
                                      {label: "Cote D\"Ivoire", value: "CI"}, 
                                      {label: "Croatia", value: "HR"}, 
                                      {label: "Cuba", value: "CU"}, 
                                      {label: "Cyprus", value: "CY"}, 
                                      {label: "Czech Republic", value: "CZ"}, 
                                      {label: "Denmark", value: "DK"}, 
                                      {label: "Djibouti", value: "DJ"}, 
                                      {label: "Dominica", value: "DM"}, 
                                      {label: "Dominican Republic", value: "DO"}, 
                                      {label: "Ecuador", value: "EC"}, 
                                      {label: "Egypt", value: "EG"}, 
                                      {label: "El Salvador", value: "SV"}, 
                                      {label: "Equatorial Guinea", value: "GQ"}, 
                                      {label: "Eritrea", value: "ER"}, 
                                      {label: "Estonia", value: "EE"}, 
                                      {label: "Ethiopia", value: "ET"}, 
                                      {label: "Falkland Islands (Malvinas)", value: "FK"}, 
                                      {label: "Faroe Islands", value: "FO"}, 
                                      {label: "Fiji", value: "FJ"}, 
                                      {label: "Finland", value: "FI"}, 
                                      {label: "France", value: "FR"}, 
                                      {label: "French Guiana", value: "GF"}, 
                                      {label: "French Polynesia", value: "PF"}, 
                                      {label: "French Southern Territories", value: "TF"}, 
                                      {label: "Gabon", value: "GA"}, 
                                      {label: "Gambia", value: "GM"}, 
                                      {label: "Georgia", value: "GE"}, 
                                      {label: "Germany", value: "DE"}, 
                                      {label: "Ghana", value: "GH"}, 
                                      {label: "Gibraltar", value: "GI"}, 
                                      {label: "Greece", value: "GR"}, 
                                      {label: "Greenland", value: "GL"}, 
                                      {label: "Grenada", value: "GD"}, 
                                      {label: "Guadeloupe", value: "GP"}, 
                                      {label: "Guam", value: "GU"}, 
                                      {label: "Guatemala", value: "GT"}, 
                                      {label: "Guernsey", value: "GG"}, 
                                      {label: "Guinea", value: "GN"}, 
                                      {label: "Guinea-Bissau", value: "GW"}, 
                                      {label: "Guyana", value: "GY"}, 
                                      {label: "Haiti", value: "HT"}, 
                                      {label: "Heard Island and Mcdonald Islands", value: "HM"}, 
                                      {label: "Holy See (Vatican City State)", value: "VA"}, 
                                      {label: "Honduras", value: "HN"}, 
                                      {label: "Hong Kong", value: "HK"}, 
                                      {label: "Hungary", value: "HU"}, 
                                      {label: "Iceland", value: "IS"}, 
                                      {label: "India", value: "IN"}, 
                                      {label: "Indonesia", value: "ID"}, 
                                      {label: "Iran, Islamic Republic Of", value: "IR"}, 
                                      {label: "Iraq", value: "IQ"}, 
                                      {label: "Ireland", value: "IE"}, 
                                      {label: "Isle of Man", value: "IM"}, 
                                      {label: "Israel", value: "IL"}, 
                                      {label: "Italy", value: "IT"}, 
                                      {label: "Jamaica", value: "JM"}, 
                                      {label: "Japan", value: "JP"}, 
                                      {label: "Jersey", value: "JE"}, 
                                      {label: "Jordan", value: "JO"}, 
                                      {label: "Kazakhstan", value: "KZ"}, 
                                      {label: "Kenya", value: "KE"}, 
                                      {label: "Kiribati", value: "KI"}, 
                                      {label: "Korea, Democratic People\"S Republic of", value: "KP"}, 
                                      {label: "Korea, Republic of", value: "KR"}, 
                                      {label: "Kuwait", value: "KW"}, 
                                      {label: "Kyrgyzstan", value: "KG"}, 
                                      {label: "Lao People\"S Democratic Republic", value: "LA"}, 
                                      {label: "Latvia", value: "LV"}, 
                                      {label: "Lebanon", value: "LB"}, 
                                      {label: "Lesotho", value: "LS"}, 
                                      {label: "Liberia", value: "LR"}, 
                                      {label: "Libyan Arab Jamahiriya", value: "LY"}, 
                                      {label: "Liechtenstein", value: "LI"}, 
                                      {label: "Lithuania", value: "LT"}, 
                                      {label: "Luxembourg", value: "LU"}, 
                                      {label: "Macao", value: "MO"}, 
                                      {label: "Macedonia, The Former Yugoslav Republic of", value: "MK"}, 
                                      {label: "Madagascar", value: "MG"}, 
                                      {label: "Malawi", value: "MW"}, 
                                      {label: "Malaysia", value: "MY"}, 
                                      {label: "Maldives", value: "MV"}, 
                                      {label: "Mali", value: "ML"}, 
                                      {label: "Malta", value: "MT"}, 
                                      {label: "Marshall Islands", value: "MH"}, 
                                      {label: "Martinique", value: "MQ"}, 
                                      {label: "Mauritania", value: "MR"}, 
                                      {label: "Mauritius", value: "MU"}, 
                                      {label: "Mayotte", value: "YT"}, 
                                      {label: "Mexico", value: "MX"}, 
                                      {label: "Micronesia, Federated States of", value: "FM"}, 
                                      {label: "Moldova, Republic of", value: "MD"}, 
                                      {label: "Monaco", value: "MC"}, 
                                      {label: "Mongolia", value: "MN"}, 
                                      {label: "Montserrat", value: "MS"}, 
                                      {label: "Morocco", value: "MA"}, 
                                      {label: "Mozambique", value: "MZ"}, 
                                      {label: "Myanmar", value: "MM"}, 
                                      {label: "Namibia", value: "NA"}, 
                                      {label: "Nauru", value: "NR"}, 
                                      {label: "Nepal", value: "NP"}, 
                                      {label: "Netherlands", value: "NL"}, 
                                      {label: "Netherlands Antilles", value: "AN"}, 
                                      {label: "New Caledonia", value: "NC"}, 
                                      {label: "New Zealand", value: "NZ"}, 
                                      {label: "Nicaragua", value: "NI"}, 
                                      {label: "Niger", value: "NE"}, 
                                      {label: "Nigeria", value: "NG"}, 
                                      {label: "Niue", value: "NU"}, 
                                      {label: "Norfolk Island", value: "NF"}, 
                                      {label: "Northern Mariana Islands", value: "MP"}, 
                                      {label: "Norway", value: "NO"}, 
                                      {label: "Oman", value: "OM"}, 
                                      {label: "Pakistan", value: "PK"}, 
                                      {label: "Palau", value: "PW"}, 
                                      {label: "Palestinian Territory, Occupied", value: "PS"}, 
                                      {label: "Panama", value: "PA"}, 
                                      {label: "Papua New Guinea", value: "PG"}, 
                                      {label: "Paraguay", value: "PY"}, 
                                      {label: "Peru", value: "PE"}, 
                                      {label: "Philippines", value: "PH"}, 
                                      {label: "Pitcairn", value: "PN"}, 
                                      {label: "Poland", value: "PL"}, 
                                      {label: "Portugal", value: "PT"}, 
                                      {label: "Puerto Rico", value: "PR"}, 
                                      {label: "Qatar", value: "QA"}, 
                                      {label: "Reunion", value: "RE"}, 
                                      {label: "Romania", value: "RO"}, 
                                      {label: "Russian Federation", value: "RU"}, 
                                      {label: "RWANDA", value: "RW"}, 
                                      {label: "Saint Helena", value: "SH"}, 
                                      {label: "Saint Kitts and Nevis", value: "KN"}, 
                                      {label: "Saint Lucia", value: "LC"}, 
                                      {label: "Saint Pierre and Miquelon", value: "PM"}, 
                                      {label: "Saint Vincent and the Grenadines", value: "VC"}, 
                                      {label: "Samoa", value: "WS"}, 
                                      {label: "San Marino", value: "SM"}, 
                                      {label: "Sao Tome and Principe", value: "ST"}, 
                                      {label: "Saudi Arabia", value: "SA"}, 
                                      {label: "Senegal", value: "SN"}, 
                                      {label: "Serbia and Montenegro", value: "CS"}, 
                                      {label: "Seychelles", value: "SC"}, 
                                      {label: "Sierra Leone", value: "SL"}, 
                                      {label: "Singapore", value: "SG"}, 
                                      {label: "Slovakia", value: "SK"}, 
                                      {label: "Slovenia", value: "SI"}, 
                                      {label: "Solomon Islands", value: "SB"}, 
                                      {label: "Somalia", value: "SO"}, 
                                      {label: "South Africa", value: "ZA"}, 
                                      {label: "South Georgia and the South Sandwich Islands", value: "GS"}, 
                                      {label: "Spain", value: "ES"}, 
                                      {label: "Sri Lanka", value: "LK"}, 
                                      {label: "Sudan", value: "SD"}, 
                                      {label: "Surilabel", value: "SR"}, 
                                      {label: "Svalbard and Jan Mayen", value: "SJ"}, 
                                      {label: "Swaziland", value: "SZ"}, 
                                      {label: "Sweden", value: "SE"}, 
                                      {label: "Switzerland", value: "CH"}, 
                                      {label: "Syrian Arab Republic", value: "SY"}, 
                                      {label: "Taiwan, Province of China", value: "TW"}, 
                                      {label: "Tajikistan", value: "TJ"}, 
                                      {label: "Tanzania, United Republic of", value: "TZ"}, 
                                      {label: "Thailand", value: "TH"}, 
                                      {label: "Timor-Leste", value: "TL"}, 
                                      {label: "Togo", value: "TG"}, 
                                      {label: "Tokelau", value: "TK"}, 
                                      {label: "Tonga", value: "TO"}, 
                                      {label: "Trinidad and Tobago", value: "TT"}, 
                                      {label: "Tunisia", value: "TN"}, 
                                      {label: "Turkey", value: "TR"}, 
                                      {label: "Turkmenistan", value: "TM"}, 
                                      {label: "Turks and Caicos Islands", value: "TC"}, 
                                      {label: "Tuvalu", value: "TV"}, 
                                      {label: "Uganda", value: "UG"}, 
                                      {label: "Ukraine", value: "UA"}, 
                                      {label: "United Arab Emirates", value: "AE"}, 
                                      {label: "United Kingdom", value: "GB"}, 
                                      {label: "United States", value: "US"}, 
                                      {label: "United States Minor Outlying Islands", value: "UM"}, 
                                      {label: "Uruguay", value: "UY"}, 
                                      {label: "Uzbekistan", value: "UZ"}, 
                                      {label: "Vanuatu", value: "VU"}, 
                                      {label: "Venezuela", value: "VE"}, 
                                      {label: "Viet Nam", value: "VN"}, 
                                      {label: "Virgin Islands, British", value: "VG"}, 
                                      {label: "Virgin Islands, U.S.", value: "VI"}, 
                                      {label: "Wallis and Futuna", value: "WF"}, 
                                      {label: "Western Sahara", value: "EH"}, 
                                      {label: "Yemen", value: "YE"}, 
                                      {label: "Zambia", value: "ZM"}, 
                                      {label: "Zimbabwe", value: "ZW"} 
                                  ]}
                                />
                                </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                    <FormGroup>
                        <label>Ville</label>
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
                        <label>Code postal</label>
                        <Input
                          defaultValue=""
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
                      <th className="text-center">Sélection</th>
                      <th className="text-center">Saison</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">Sélection</td>
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
                    <Button color="success" >
                         <i/> Valider
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
};

export default Profile;
