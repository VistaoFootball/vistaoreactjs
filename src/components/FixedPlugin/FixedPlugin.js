/*!

=========================================================
* Black Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

import { Button, CustomInput } from "reactstrap";

const FixedPlugin = (props) => {
  const [classes, setClasses] = React.useState("dropdown");
  const [darkMode, setDarkMode] = React.useState(false);
  const handleClick = () => {
    if (classes === "dropdown") {
      setClasses("dropdown show");
    } else {
      setClasses("dropdown");
    }
  };
  const handleActiveMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("white-content");
  };
  return (
    <div className="fixed-plugin">
      <div className={classes}>
        <a
          href="#pablo"
          onClick={(e) => {
            e.preventDefault();
            handleClick();
          }}
        >
          <i className="fa fa-cog fa-2x" />
        </a>
        <ul className="dropdown-menu show">
          <li className="header-title">Sidebar thème</li>
          <li className="adjustments-line">
            <div className="badge-colors text-center">
              <span
                className={
                  props.activeColor === "red"
                    ? "badge filter badge-red active"
                    : "badge filter badge-red"
                }
                data-color="red"
                style = {{"background-color":"red"}}
                onClick={() => {
                  props.handleActiveClick("red");
                }}
              />
              <span
                className={
                  props.activeColor === "orange"
                    ? "badge filter badge-orange active"
                    : "badge filter badge-orange"
                }
                data-color="orange"
                style = {{"background-color":"orange"}}
                onClick={() => {
                  props.handleActiveClick("orange");
                }}
              />   
              <span
                className={
                  props.activeColor === "yellow"
                    ? "badge filter badge-yellow active"
                    : "badge filter badge-yellow"
                }
                data-color="yellow"
                style = {{"background-color":"yellow"}}
                onClick={() => {
                  props.handleActiveClick("yellow");
                }}
              />   
              <span
                className={
                  props.activeColor === "green"
                    ? "badge filter badge-green active"
                    : "badge filter badge-green"
                }
                data-color="green"
                style = {{"background-color":"green"}}
                onClick={() => {
                  props.handleActiveClick("green");
                }}
              />   
              <span
                className={
                  props.activeColor === "blue"
                    ? "badge filter badge-blue active"
                    : "badge filter badge-blue"
                }
                data-color="blue"
                style = {{"background-color":"blue"}}
                onClick={() => {
                  props.handleActiveClick("blue");
                }}
              />   
              <span
                className={
                  props.activeColor === "cyan"
                    ? "badge filter badge-cyan active"
                    : "badge filter badge-cyan"
                }
                data-color="cyan"
                style = {{"background-color":"cyan"}}
                onClick={() => {
                  props.handleActiveClick("cyan");
                }}
              />    
              <span
                className={
                  props.activeColor === "purple"
                    ? "badge filter badge-purple active"
                    : "badge filter badge-purple"
                }
                data-color="purple"
                style = {{"background-color":"purple"}}
                onClick={() => {
                  props.handleActiveClick("purple");
                }}
              /> 
              <span
                className={
                  props.activeColor === "gray"
                    ? "badge filter badge-gray active"
                    : "badge filter badge-gray"
                }
                data-color="gray"
                style = {{"background-color":"gray"}}
                onClick={() => {
                  props.handleActiveClick("gray");
                }}
              /> 
              <span
                className={
                  props.activeColor === "black"
                    ? "badge filter badge-black active"
                    : "badge filter badge-black"
                }
                data-color="black"
                style = {{"background-color":"black"}}
                onClick={() => {
                  props.handleActiveClick("black");
                }}
              />                                                                                  
            </div>
          </li>
          <li className="header-title">Sidebar mini</li>
          <li className="adjustments-line">
            <div className="togglebutton switch-sidebar-mini d-flex align-items-center justify-content-center">
              <span className="label-switch">Inactivé</span>
              <CustomInput
                type="switch"
                id="switch-1"
                onChange={props.handleMiniClick}
                value={props.sidebarMini}
                className="mt-n4"
              />
              <span className="label-switch ml-n3">Activé</span>
            </div>
          </li>
          <li className="adjustments-line">
            <div className="togglebutton switch-change-color mt-3 d-flex align-items-center justify-content-center">
              <span className="label-switch">Mode clair</span>
              <CustomInput
                type="switch"
                id="switch-2"
                onChange={handleActiveMode}
                value={darkMode}
                className="mt-n4"
              />
              <span className="label-switch ml-n3">Mode sombre</span>
            </div>
            <br></br>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FixedPlugin;
