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
// react plugin used to create a form with multiple steps
import ReactWizard from "react-bootstrap-wizard";

// reactstrap components
import { Col } from "reactstrap";

// wizard steps
import Step1 from "./WizardSteps/Step1.js";
import Step2 from "./WizardSteps/Step2.js";
import Step3 from "./WizardSteps/Step3.js";

var steps = [
  {
    stepName: "Match",
    stepIcon: "tim-icons icon-trophy",
    component: Step1,
  },
  {
    stepName: "Account",
    stepIcon: "tim-icons icon-settings-gear-63",
    component: Step2,
  },
  {
    stepName: "Address",
    stepIcon: "tim-icons icon-delivery-fast",
    component: Step3,
  },
];

const Wizard = () => {
  return (
    <>
      <div className="content">
          <ReactWizard
            steps={steps}
            navSteps
            validate
            title="Mettre un match en ligne"
            description="Apportez plus de contexte à votre vidéo"
            headerTextCenter
            finishButtonClasses="btn-wd btn-info"
            nextButtonClasses="btn-wd btn-info"
            previousButtonClasses="btn-wd"
            progressbar
            color="blue"
          />
      </div>
    </>
  );
};

export default Wizard;
