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
import classnames from "classnames";

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
    InputGroupAddon,
  InputGroupText,
  InputGroup,

} from "reactstrap";

import ReactTable from "components/ReactTable/ReactTable.js";
const dataTable = [
  ["Airi Satou", "Accountant", "Tokyo", "33"],
];

function VideoStep1() {
  const Step1 = React.forwardRef((props, ref) => {
    // eslint-disable-next-line
    const [firstname, setfirstname] = React.useState("");
    const [firstnameState, setfirstnameState] = React.useState("");
    const [firstnameFocus, setfirstnameFocus] = React.useState("");
    // eslint-disable-next-line
    const [lastname, setlastname] = React.useState("");
    const [lastnameState, setlastnameState] = React.useState("");
    const [lastnameFocus, setlastnameFocus] = React.useState("");
    // eslint-disable-next-line
    const [email, setemail] = React.useState("");
    const [emailState, setemailState] = React.useState("");
    const [emailFocus, setemailFocus] = React.useState("");
    // eslint-disable-next-line
    const [phone, setphone] = React.useState("");
    const [phoneFocus, setphoneFocus] = React.useState("");
    const [phoneState, setphoneState] = React.useState("");
    const [addressFocus, setaddressFocus] = React.useState("");
    const stateFunctions = {
      setphoneState: (value) => setphoneState(value),
      setphone: (value) => setphone(value),
      setemailState: (value) => setemailState(value),
      setemail: (value) => setemail(value),
      setlastnameState: (value) => setlastnameState(value),
      setlastname: (value) => setlastname(value),
      setfirstnameState: (value) => setfirstnameState(value),
      setfirstname: (value) => setfirstname(value),
    };
    // function that returns true if value is email, false otherwise
    const verifyEmail = (value) => {
      var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailRex.test(value)) {
        return true;
      }
      return false;
    };
    // function that verifies if a string has a given length or not
    const verifyLength = (value, length) => {
      if (value.length >= length) {
        return true;
      }
      return false;
    };
    // function that verifies if value contains only numbers
    const verifyNumber = (value) => {
      var numberRex = new RegExp("^[0-9]+$");
      if (numberRex.test(value)) {
        return true;
      }
      return false;
    };
    const change = (event, stateName, type, stateNameEqualTo, maxValue) => {
      switch (type) {
        case "email":
          if (verifyEmail(event.target.value)) {
            stateFunctions["set" + stateName + "State"]("has-success");
          } else {
            stateFunctions["set" + stateName + "State"]("has-danger");
          }
          break;
        case "length":
          if (verifyLength(event.target.value, stateNameEqualTo)) {
            stateFunctions["set" + stateName + "State"]("has-success");
          } else {
            stateFunctions["set" + stateName + "State"]("has-danger");
          }
          break;
        case "number":
          if (verifyNumber(event.target.value, stateNameEqualTo)) {
            stateFunctions["set" + stateName + "State"]("has-success");
          } else {
            stateFunctions["set" + stateName + "State"]("has-danger");
          }
          break;
        default:
          break;
      }
      stateFunctions["set" + stateName](event.target.value);
    };
    /*eslint-disable-next-line*/
    const isValidated = () => {
      if (
        firstnameState === "has-success" &&
        lastnameState === "has-success" &&
        emailState === "has-success" &&
        phoneState === "has-success"
      ) {
        return true;
      } else {
        if (firstnameState !== "has-success") {
          setfirstnameState("has-danger");
        }
        if (lastnameState !== "has-success") {
          setlastnameState("has-danger");
        }
        if (emailState !== "has-success") {
          setemailState("has-danger");
        }
        if (phoneState !== "has-success") {
          setphoneState("has-danger");
        }
        return false;
      }
    };

    
    return (
      <>
        <h5 className="info-text">
          Let's start with the basic information (with validation)
        </h5>
        <Row className="justify-content-center mt-5">
          <Col sm="5">
            <InputGroup
              className={classnames(firstnameState, {
                "input-group-focus": firstnameFocus,
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-single-02" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="firstname"
                placeholder="First Name..."
                type="text"
                onChange={(e) => change(e, "firstname", "length", 1)}
                onFocus={(e) => setfirstnameFocus(true)}
                onBlur={(e) => setfirstnameFocus(false)}
              />
              {firstnameState === "has-danger" ? (
                <label className="error">This field is required.</label>
              ) : null}
            </InputGroup>
            <InputGroup
              className={classnames(emailState, {
                "input-group-focus": emailFocus,
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-email-85" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="email"
                placeholder="Email..."
                type="email"
                onChange={(e) => change(e, "email", "email")}
                onFocus={(e) => setemailFocus(true)}
                onBlur={(e) => setemailFocus(false)}
              />
              {emailState === "has-danger" ? (
                <label className="error">This field is required.</label>
              ) : null}
            </InputGroup>
          </Col>
          <Col sm="5">
            <InputGroup
              className={classnames(lastnameState, {
                "input-group-focus": lastnameFocus,
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-caps-small" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="lastname"
                placeholder="Last Name..."
                type="text"
                onChange={(e) => change(e, "lastname", "length", 1)}
                onFocus={(e) => setlastnameFocus(true)}
                onBlur={(e) => setlastnameFocus(false)}
              />
              {lastnameState === "has-danger" ? (
                <label className="error">This field is required.</label>
              ) : null}
            </InputGroup>
            <InputGroup
              className={classnames(phoneState, {
                "input-group-focus": phoneFocus,
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-mobile" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="number"
                placeholder="Phone..."
                type="number"
                onChange={(e) => change(e, "phone", "number")}
                onFocus={(e) => setphoneFocus(true)}
                onBlur={(e) => setphoneFocus(false)}
              />
              {phoneState === "has-danger" ? (
                <label className="error">This field is required.</label>
              ) : null}
            </InputGroup>
          </Col>
          <Col sm="10">
            <InputGroup
              className={classnames({
                "input-group-focus": addressFocus,
              })}
            >
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="tim-icons icon-square-pin" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                name="address"
                placeholder="Address"
                type="text"
                onFocus={(e) => setaddressFocus(true)}
                onBlur={(e) => setaddressFocus(false)}
              />
            </InputGroup>
          </Col>
        </Row>
      </>
    );
  });
  const [horizontalTabsA, sethorizontalTabsA] = React.useState("Joueurs");
  const [horizontalTabsB, sethorizontalTabsB] = React.useState("Global"); 
  const [horizontalTabsC, sethorizontalTabsC] = React.useState("Joueurs"); 
  const [horizontalTabsD, sethorizontalTabsD] = React.useState("Joueurs");  
  const [horizontalTabsE, sethorizontalTabsE] = React.useState("Joueurs");  
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
              </CardBody>
            </Card>
          </Col>
        </Row>
       </Card>
      </div>
    );
};

export default VideoStep1;
