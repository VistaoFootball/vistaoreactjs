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
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth/Auth.js";
import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";

import "assets/css/nucleo-icons.css";
import "react-notification-alert/dist/animate.css";
import "assets/scss/black-dashboard-pro-react.scss?v=1.2.0";
import "assets/demo/demo.css";
import { UserProvider } from "providers/UserProvider";

ReactDOM.render(
  <UserProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/rtl" render={(props) => <RTLLayout {...props} />} />
        <Redirect from="/" to="/admin/videos" />
      </Switch>
    </BrowserRouter>
  </UserProvider>,
  document.getElementById("root")
);
